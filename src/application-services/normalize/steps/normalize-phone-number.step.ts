import { NormalizeWorkflowStep } from 'src/types/normalize-workflow-step';
import { Attributes } from 'src/value/attribute';
import { PhoneNumberAttributeValue } from 'src/value/business-location-attribute';
import { CONTROL_CHARACTER_REGEXP } from './constant';
import { CJK_RADICALS_SUPPLEMENT_REPLACE_REGEXP_MAP } from './constant';
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
  let formattedPhoneNumber = phoneNumber.replace(/[０-９]/g, (s) => {
    return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
  });
  formattedPhoneNumber = formattedPhoneNumber.replace(/\u30FC/g, '-');
  formattedPhoneNumber = formattedPhoneNumber.replace(/\s/g, '');
  formattedPhoneNumber = formattedPhoneNumber.replace(
    CONTROL_CHARACTER_REGEXP,
    '',
  );

  return formattedPhoneNumber;
};
