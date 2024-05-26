import { NormalizeWorkflowStep } from 'src/types/normalize-workflow-step';
import { Attributes } from 'src/value/attribute';
import { PhoneNumberAttributeValue } from 'src/value/business-location-attribute';
import { CONTROL_CHARACTER_REGEXP } from './constant';

export const NormalizePhoneNumberStep: NormalizeWorkflowStep = (data) => {
  if (!data.in.phone_number) return data;

  const normalizedPhoneNumber = normalizePhoneNumber(data.in.phone_number);

  const phoneNumberAttribute: PhoneNumberAttributeValue = {
    sansan_organization_code: data.in.sansan_organization_code,
    sansan_location_code: data.in.sansan_location_code,
    data_source: data.in.data_source,
    crawled_at: data.in.crawled_at,
    attribute: Attributes.PHONE_NUMBER,
    value: normalizedPhoneNumber,
  };
  const result = {
    ...data,
    out: [...data.out, phoneNumberAttribute],
  };
  return result;
};

const normalizePhoneNumber = (phoneNumber: string) => {
  let normalizedPhoneNumber = phoneNumber;
  // 全角数字を半角数字に変換
  normalizedPhoneNumber = phoneNumber.normalize('NFKC');
  // 全角ハイフンを半角ハイフンに変換
  normalizedPhoneNumber = normalizedPhoneNumber.replace(/\u30FC/g, '-');
  // 制御文字を取り除く
  normalizedPhoneNumber = normalizedPhoneNumber.replace(
    CONTROL_CHARACTER_REGEXP,
    '',
  );
  // BOMを取り除く
  // Ref) https://ja.wikipedia.org/wiki/%E3%83%90%E3%82%A4%E3%83%88%E9%A0%86%E3%83%9E%E3%83%BC%E3%82%AF
  normalizedPhoneNumber = normalizedPhoneNumber.replace(/^\uFEFF/, '');
  // 前後の空白文字を取り除く
  normalizedPhoneNumber = normalizedPhoneNumber.trim();
  // TODO: 先頭末尾のカッコを取り除く
  // const match = normalizedPhoneNumber.match(/^\((.*)\)$/);
  // switch (match) {
  //   case null:
  //     break;
  //   default:
  //     normalizedPhoneNumber = match[1];
  // }
  return normalizedPhoneNumber;
};
