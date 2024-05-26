import { MergeWorkflowStep } from 'src/types/merge-workflow-step';
import { DataSources } from 'src/value/data-source';

/**
 * 手収集した拠点情報が存在する場合は「SOC単位で」その拠点情報を優先する
 */
// export const SelectManualCollectionStep: MergeWorkflowStep = (data) => {
//   // 人力収集データがない場合は, 何もしないで受け取った値をそのまま返す
//   if (data.in.attributes.length === 0) return data;
//   // 人力収集データがある場合は、人力収集データと修正データのみ絞り込む

//   const manualCollection = data.in.attributes[DataSources.MANUAL_COLLECTION];
//   const modifiedData = data.in.attributes[DataSources.MODIFICATION];

//   const attributes = [manualCollection, modifiedData].filter((v) => v);

//   return {
//     in: {
//       ...data.in,
//       attributes,
//     },
//     out: data.out,
//   };
// };

export const SelectManualCollectionStep: MergeWorkflowStep = (data) => {
  const manualCollections = data.in.attributes.filter(
    (attribute) => attribute.data_source === DataSources.MANUAL_COLLECTION,
  );
  if (manualCollections.length === 0) return data;

  const attributes = data.in.attributes.filter(
    (attribute) =>
      attribute.data_source === DataSources.MANUAL_COLLECTION ||
      attribute.data_source === DataSources.MODIFICATION,
  );
  return {
    in: {
      ...data.in,
      attributes,
    },
    out: data.out,
  };
};
