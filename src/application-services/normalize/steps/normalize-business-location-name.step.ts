import { NormalizeWorkflowStep } from 'src/types/normalize-workflow-step';
import { Attributes } from 'src/value/attribute';
import { BaseNameAttributeValue } from 'src/value/business-location-attribute';
import { CJK_RADICALS_SUPPLEMENT_REPLACE_REGEXP_MAP } from './constant';

export const NormalizeBusinessLocationNameStep: NormalizeWorkflowStep = (
  data,
) => {
  if (!data.in.base_name) return data;

  const normalizedBusinessLocationName = normalizeBusinessLocationName(
    data.in.base_name,
    data.in.company_name,
  );
  const baseNameAttribute: BaseNameAttributeValue = {
    sansan_organization_code: data.in.sansan_organization_code,
    sansan_location_code: data.in.sansan_location_code,
    data_source: data.in.data_source,
    crawled_at: data.in.crawled_at,
    attribute: Attributes.BASE_NAME,
    value: normalizedBusinessLocationName,
  };
  const result = {
    ...data,
    out: [...data.out, baseNameAttribute],
  };
  return result;
};

const normalizeBusinessLocationName = (
  businessLocationName: string,
  companyName: string,
) => {
  let normalizedBusinessLocationName = businessLocationName;
  CJK_RADICALS_SUPPLEMENT_REPLACE_REGEXP_MAP.forEach(
    (item: [RegExp, string]) => {
      normalizedBusinessLocationName = normalizedBusinessLocationName.replace(
        item[0],
        item[1],
      );
    },
  );
  // or
  // CJK_RADICALS_SUPPLEMENT_REPLACE_REGEXP_MAP.reduce(
  //   (acc, [from, to]: [RegExp, string]) => acc.replace(from, to),
  //   businessLocationName,
  // );
  // 法人名が含まれているなら削除
  normalizedBusinessLocationName = normalizedBusinessLocationName.replace(
    companyName,
    '',
  );
  return normalizedBusinessLocationName;
};
