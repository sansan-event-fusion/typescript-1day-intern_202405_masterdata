import { MergeWorkflowStep } from 'src/types/merge-workflow-step';
import { DataSources } from 'src/value/data-source';

/**
 * 手収集した拠点情報が存在する場合は「SOC単位で」その拠点情報を優先する
 */
export const SelectManualCollectionStep: MergeWorkflowStep = (data) => {
  // 人力収集データがない場合は, 何もしないで受け取った値をそのまま返す
  console.log(data);
  const manual_collection = data.in.attributes.filter(
    (attribute) => attribute.data_source === DataSources.MANUAL_COLLECTION,
  );

  if (manual_collection.length === 0) {
    return data;
  }

  // 人力収集データがある場合は、人力収集データと修正データのみ絞り込む
  const attributes = [];

  return {
    in: {
      ...data.in,
      attributes,
    },
    out: data.out,
  };
};
