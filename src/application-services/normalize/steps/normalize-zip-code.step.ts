import { NormalizeWorkflowStep } from 'src/types/normalize-workflow-step';
import { Attributes } from 'src/value/attribute';
import { ZipCodeAttributeValue } from 'src/value/business-location-attribute';

export const NormalizeZipCodeStep: NormalizeWorkflowStep = (data) => {
  if (!data.in.zip_code) return data;

  const normalizedZipCode = normalizeZipCode(data.in.zip_code);

  const zipCodeAttribute: ZipCodeAttributeValue = {
    sansan_organization_code: data.in.sansan_organization_code,
    sansan_location_code: data.in.sansan_location_code,
    data_source: data.in.data_source,
    crawled_at: data.in.crawled_at,
    attribute: Attributes.ZIP_CODE,
    value: normalizedZipCode,
  };
  const result = {
    ...data,
    out: [...data.out, zipCodeAttribute],
  };
  return result;
};

const normalizeZipCode = (zipCode: string) => {
  let normalizedZipCode = zipCode;
  // 半角ハイフンに正規化する 15種類のハイフンを正規化する
  normalizedZipCode = normalizedZipCode.replace(/\u30FC/g, '-');
  // 空白文字を取り除く
  normalizedZipCode = normalizedZipCode.replace(/[\s\t\r\n]/g, '');
  // 全角数字を半角数字にする
  // Ref) https://www.yoheim.net/blog.php?q=20191101
  // normalizedZipCode = normalizedZipCode.replace(/[０-９]/g, (s) => {
  //   return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
  // });
  // or
  // Unicode正規化
  normalizedZipCode = normalizedZipCode.normalize('NFKC');
  // ハイフンを挿入する
  const match = normalizedZipCode.match(/^(\d{3})(\d{2,4})$/);
  console.log(match);
  switch (match) {
    case null:
      break;
    default:
      normalizedZipCode = `${match[1]}-${match[2]}`;
  }

  // 求める条件を満たすかを確認する
  if (!/^\d{3}-\d{2,4}$/.test(normalizedZipCode)) {
    console.log('正規化できませんでした');
    return zipCode;
  }

  return normalizedZipCode;
};
