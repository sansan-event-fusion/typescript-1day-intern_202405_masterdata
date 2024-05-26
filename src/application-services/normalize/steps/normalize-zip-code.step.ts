import { NormalizeWorkflowStep } from 'src/types/normalize-workflow-step';
import { Attributes } from 'src/value/attribute';
import { ZipCodeAttributeValue } from 'src/value/business-location-attribute';
import {
  CJK_RADICALS_SUPPLEMENT_REPLACE_REGEXP_MAP,
  CONTROL_CHARACTER_REGEXP,
} from './constant';
import { normalize } from '@geolonia/normalize-japanese-addresses';

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

/**
   コードの痕跡
  let formattedZipCode = zipCode.replace(/\u30FC/g, '-');
  formattedZipCode = formattedZipCode.normalize('NFKC');
  formattedZipCode = formattedZipCode.replace(/\s/g, '');
  //5桁か7桁以外の数字の場合はそのまま返す
  if (formattedZipCode.length !== 5 && formattedZipCode.length !== 7) {
    return formattedZipCode;
  }

  formattedZipCode = formattedZipCode.replace(/(\d{3})(\d{4})/, '$1-$2');
  // const regex = formattedZipCode.match(/\d{5}\d{7}/g);
  // if (!regex) return formattedZipCode;
  // zipCode = zipCode.replace(/[０-９]/g, (s) => {
  //   return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
  // });

  // zipCode = zipCode.replace(/[\u2460-\u2473]/g, (s) => {
  //   return String.fromCharCode(s.charCodeAt(0) - 0x245f);
  // });
  return formattedZipCode;

   */

const normalizeZipCode = (zipCode: string) => {
  // ハイフンっぽい文字をすべてハイフンに変換する
  let normalizedZipCode = zipCode.replace(
    /[\u00AD\u002D\u2010\u2011\u2012\u2013\u2014\u2015\u2043\u2212\u2500\u30FC\uFF0D\uFE63\uff70]/g,
    '-',
  );

  // 空白文字を全て削除する
  normalizedZipCode = normalizedZipCode.replace(/\s/g, '');

  // Unicode正規化
  normalizedZipCode = normalizedZipCode.normalize('NFKC');
  const match = normalizedZipCode.match(/^(\d{3})(\d{2})(\d{2})?$/);
  if (!match) return normalizedZipCode;
  return match[1] + '-' + match[2] + (match[3] || '');
};
