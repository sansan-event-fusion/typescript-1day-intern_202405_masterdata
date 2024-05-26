import * as _ from 'lodash';
import { MergeWorkflowStep } from 'src/types/merge-workflow-step';

/**
 * 最新のデータを選択する
 */
export const SelectLatestStep: MergeWorkflowStep = (data) => {
  // 適切な集約の単位にグループを作成する
  const groupedData = _.groupBy(
    data.in.attributes,
    (attribute) => attribute.sansan_location_code + attribute.attribute,
  );
  // 分割したグループ単位で、最新のデータを選択する
  const attributes = Object.values(groupedData).map((group) =>
    _.maxBy(group, (attribute) => attribute.crawled_at),
  );

  return {
    in: {
      ...data.in,
      attributes,
    },
    out: data.out,
  };
};
