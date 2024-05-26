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
  let normalizedPhoneNumber = phoneNumber.normalize('NFKC');
  normalizedPhoneNumber = normalizedPhoneNumber.replace(/\u30FC/g, '-');
  normalizedPhoneNumber = normalizedPhoneNumber.replace(/^\s+/g, '');
  normalizedPhoneNumber = normalizedPhoneNumber.replace(/\s+$/g, '');

  normalizedPhoneNumber = normalizedPhoneNumber.replace(
    CONTROL_CHARACTER_REGEXP,
    '',
  );

  normalizedPhoneNumber = normalizedPhoneNumber.replace(/^\uFEFF/, '');
  // normalizedPhoneNumber = normalizedPhoneNumber.replace(/\t\n\r\u30FC/, '-');

  return normalizedPhoneNumber;
};
