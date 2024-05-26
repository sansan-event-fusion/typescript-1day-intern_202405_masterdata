import * as _ from 'lodash';
import { MergeWorkflowStep } from 'src/types/merge-workflow-step';

/**
 * 最新のデータを選択する
 */
export const SelectLatestStep: MergeWorkflowStep = (data) => {
  // 適切な集約の単位にグループを作成する
  // lodashのgroupByを使う
  const attributeGroupBySLC = _.groupBy(data.in.attributes, (attribute) => {
    return attribute.sansan_location_code + attribute.attribute; // SLCと属性を結合した文字列をキーにする
  });

  // 分割したグループ単位で、最新のデータを選択する
  const attributes = Object.values(attributeGroupBySLC)
    .map((group) => {
      return _.maxBy(group, (attribute) => {
        return attribute.crawled_at;
      });
    })
    .flat();

  return {
    in: {
      ...data.in,
      attributes,
    },
    out: data.out,
  };
};
