import { MergeWorkflowStep } from 'src/types/merge-workflow-step';
import { DataSources } from 'src/value/data-source';

/**
 * 手収集した拠点情報が存在する場合は「SOC単位で」その拠点情報を優先する
 */
export const SelectManualCollectionStep: MergeWorkflowStep = (data) => {
  // 人力収集データがない場合は, 何もしないで受け取った値をそのまま返す
  if (
    !data.in.attributes.some(
      (attribute) => attribute.data_source === DataSources.MANUAL_COLLECTION,
    )
  ) {
    return data;
  }

  // 人力収集データがある場合は、人力収集データと修正データのみ絞り込む
  const attributes = data.in.attributes.filter((attribute) => {
    if (
      attribute.data_source === DataSources.ZC_IRYO ||
      attribute.data_source === DataSources.ZC_KAIGO
    ) {
      return false;
    }
    return true;
  });

  return {
    in: {
      ...data.in,
      attributes,
    },
    out: data.out,
  };
};
