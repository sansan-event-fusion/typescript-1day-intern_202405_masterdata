/**
 * データソース: データの取得元を表す
 */
export const DataSources = {
  /** 介護オープンデータ */
  ZC_KAIGO: 'ZC_KAIGO',
  /** 医療オープンデータ */
  ZC_IRYO: 'ZC_IRYO',
  /** 修正データ */
  MODIFICATION: 'MODIFICATION',
  /** 人力収集データ */
  MANUAL_COLLECTION: 'MANUAL_COLLECTION',
} as const;

export type DataSource = (typeof DataSources)[keyof typeof DataSources];

/**
 * 人力は人の目があるから優先度高め
 * 修正データは問い合わせが来たらすぐに修正できるように最優先
 * 介護と医療はデータの信頼性は不明
 *修正 > 人力 > 介護 === 医療
 */
