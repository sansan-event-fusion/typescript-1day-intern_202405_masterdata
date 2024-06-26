// タブ文字、改行文字、復帰文字以外の制御文字
export const CONTROL_CHARACTER_REGEXP = /[\x00-\x08\x0B\x0C\x0E-\x1F\xAD\x7F]/g;

export const CJK_RADICALS_SUPPLEMENT_REPLACE_REGEXP_MAP = [
  ['2E83', '⺃', '4E5A', '乚'],
  ['2E85', '⺅', '4EBB', '亻'],
  ['2E87', '⺇', '20628', '𠘨'],
  ['2E89', '⺉', '5202', '刂'],
  ['2E8B', '⺋', '353E', '㔾'],
  ['2E8D', '⺍', '2D544', '𭕄'],
  ['2E8E', '⺎', '5140', '兀'],
  ['2E8F', '⺏', '5C23', '尣'],
  ['2E90', '⺐', '5C22', '尢'],
  ['2F2A', '⼪', '5C22', '尢'],
  ['2E92', '⺒', '5DF3', '巳'],
  ['2E93', '⺓', '5E7A', '幺'],
  ['2F33', '⼳', '5E7A', '幺'],
  ['2E94', '⺔', '5F51', '彑'],
  ['2E96', '⺖', '5FC4', '忄'],
  ['2E97', '⺗', '38FA', '㣺'],
  ['2E98', '⺘', '624C', '扌'],
  ['2E99', '⺙', '6535', '攵'],
  ['2E9B', '⺛', '65E1', '旡'],
  ['2E9E', '⺞', '6B7A', '歺'],
  ['2E9F', '⺟', '6BCD', '母'],
  ['2EA0', '⺠', '6C11', '民'],
  ['2EA1', '⺡', '6C35', '氵'],
  ['2EA3', '⺣', '706C', '灬'],
  ['2EA4', '⺤', '722B', '爫'],
  ['2EA6', '⺦', '4E2C', '丬'],
  ['2EA8', '⺨', '72AD', '犭'],
  ['2EAA', '⺪', '24D14', '𤴔'],
  ['2EAB', '⺫', '7F52', '罒'],
  ['2EB2', '⺲', '7F52', '罒'],
  ['2EAD', '⺭', '793B', '礻'],
  ['2EAE', '⺮', '25AD7', '𥫗'],
  ['2EB1', '⺱', '7F53', '罓'],
  ['2EB3', '⺳', '2626A', '𦉪'],
  ['2EB9', '⺹', '8002', '耂'],
  ['2EBD', '⺽', '26951', '𦥑'],
  ['2EBE', '⺾', '8279', '艹'],
  ['2EBF', '⺿', '8279', '艹'],
  ['2EC0', '⻀', '8279', '艹'],
  ['2EC1', '⻁', '864E', '虎'],
  ['2EC2', '⻂', '8864', '衤'],
  ['2EC3', '⻃', '8980', '覀'],
  ['2EC4', '⻄', '897F', '西'],
  ['2ECA', '⻊', '27FB7', '𧾷'],
  ['2ECC', '⻌', '8FB6', '辶'],
  ['2ECD', '⻍', '8FB6', '辶'],
  ['2ECF', '⻏', '961D', '阝'],
  ['2ED6', '⻖', '961D', '阝'],
  ['2ED1', '⻑', '9577', '長'],
  ['2FA7', '⾧', '9577', '長'],
  ['2ED2', '⻒', '9578', '镸'],
  ['2ED8', '⻘', '9752', '青'],
  ['2EDE', '⻞', '2967F', '𩙿'],
  ['2EDF', '⻟', '98E0', '飠'],
  ['2EE4', '⻤', '9B3C', '鬼'],
  ['2FC1', '⿁', '9B3C', '鬼'],
  ['2EE8', '⻨', '9EA6', '麦'],
  ['2EE9', '⻩', '9EC4', '黄'],
  ['2EEB', '⻫', '6589', '斉'],
  ['2EED', '⻭', '6B6F', '歯'],
  ['2EEF', '⻯', '7ADC', '竜'],
  ['2EF2', '⻲', '4E80', '亀'],
  ['2F00', '⼀', '4E00', '一'],
  ['2F01', '⼁', '4E28', '丨'],
  ['2F02', '⼂', '4E36', '丶'],
  ['2F03', '⼃', '4E3F', '丿'],
  ['2F04', '⼄', '4E59', '乙'],
  ['2F05', '⼅', '4E85', '亅'],
  ['2F06', '⼆', '4E8C', '二'],
  ['2F07', '⼇', '4EA0', '亠'],
  ['2F08', '⼈', '4EBA', '人'],
  ['2F09', '⼉', '513F', '儿'],
  ['2F0A', '⼊', '5165', '入'],
  ['2F0B', '⼋', '516B', '八'],
  ['2F0C', '⼌', '5182', '冂'],
  ['2F0D', '⼍', '5196', '冖'],
  ['2F0E', '⼎', '51AB', '冫'],
  ['2F0F', '⼏', '51E0', '几'],
  ['2F10', '⼐', '51F5', '凵'],
  ['2F11', '⼑', '5200', '刀'],
  ['2F12', '⼒', '529B', '力'],
  ['2F13', '⼓', '52F9', '勹'],
  ['2F14', '⼔', '5315', '匕'],
  ['2F15', '⼕', '531A', '匚'],
  ['2F16', '⼖', '5338', '匸'],
  ['2F17', '⼗', '5341', '十'],
  ['2F18', '⼘', '535C', '卜'],
  ['2F19', '⼙', '5369', '卩'],
  ['2F1A', '⼚', '5382', '厂'],
  ['2F1B', '⼛', '53B6', '厶'],
  ['2F1C', '⼜', '53C8', '又'],
  ['2F1D', '⼝', '53E3', '口'],
  ['2F1E', '⼞', '56D7', '囗'],
  ['2F1F', '⼟', '571F', '土'],
  ['2F20', '⼠', '58EB', '士'],
  ['2F21', '⼡', '5902', '夂'],
  ['2F22', '⼢', '590A', '夊'],
  ['2F23', '⼣', '5915', '夕'],
  ['2F24', '⼤', '5927', '大'],
  ['2F25', '⼥', '5973', '女'],
  ['2F26', '⼦', '5B50', '子'],
  ['2F27', '⼧', '5B80', '宀'],
  ['2F28', '⼨', '5BF8', '寸'],
  ['2F29', '⼩', '5C0F', '小'],
  ['2F2B', '⼫', '5C38', '尸'],
  ['2F2C', '⼬', '5C6E', '屮'],
  ['2F2D', '⼭', '5C71', '山'],
  ['2F2E', '⼮', '5DDB', '巛'],
  ['2F2F', '⼯', '5DE5', '工'],
  ['2F30', '⼰', '5DF1', '己'],
  ['2F31', '⼱', '5DFE', '巾'],
  ['2F32', '⼲', '5E72', '干'],
  ['2F34', '⼴', '5E7F', '广'],
  ['2F35', '⼵', '5EF4', '廴'],
  ['2F36', '⼶', '5EFE', '廾'],
  ['2F37', '⼷', '5F0B', '弋'],
  ['2F38', '⼸', '5F13', '弓'],
  ['2F39', '⼹', '5F50', '彐'],
  ['2F3A', '⼺', '5F61', '彡'],
  ['2F3B', '⼻', '5F73', '彳'],
  ['2F3C', '⼼', '5FC3', '心'],
  ['2F3D', '⼽', '6208', '戈'],
  ['2F3E', '⼾', '6238', '戸'],
  ['2F3F', '⼿', '624B', '手'],
  ['2F40', '⽀', '652F', '支'],
  ['2F41', '⽁', '6534', '攴'],
  ['2F42', '⽂', '6587', '文'],
  ['2F43', '⽃', '6597', '斗'],
  ['2F44', '⽄', '65A4', '斤'],
  ['2F45', '⽅', '65B9', '方'],
  ['2F46', '⽆', '65E0', '无'],
  ['2F47', '⽇', '65E5', '日'],
  ['2F48', '⽈', '66F0', '曰'],
  ['2F49', '⽉', '6708', '月'],
  ['2F4A', '⽊', '6728', '木'],
  ['2F4B', '⽋', '6B20', '欠'],
  ['2F4C', '⽌', '6B62', '止'],
  ['2F4D', '⽍', '6B79', '歹'],
  ['2F4E', '⽎', '6BB3', '殳'],
  ['2F4F', '⽏', '6BCB', '毋'],
  ['2F50', '⽐', '6BD4', '比'],
  ['2F51', '⽑', '6BDB', '毛'],
  ['2F52', '⽒', '6C0F', '氏'],
  ['2F53', '⽓', '6C14', '气'],
  ['2F54', '⽔', '6C34', '水'],
  ['2F55', '⽕', '706B', '火'],
  ['2F56', '⽖', '722A', '爪'],
  ['2F57', '⽗', '7236', '父'],
  ['2F58', '⽘', '723B', '爻'],
  ['2F59', '⽙', '723F', '爿'],
  ['2F5A', '⽚', '7247', '片'],
  ['2F5B', '⽛', '7259', '牙'],
  ['2F5C', '⽜', '725B', '牛'],
  ['2F5D', '⽝', '72AC', '犬'],
  ['2F5E', '⽞', '7384', '玄'],
  ['2F5F', '⽟', '7389', '玉'],
  ['2F60', '⽠', '74DC', '瓜'],
  ['2F61', '⽡', '74E6', '瓦'],
  ['2F62', '⽢', '7518', '甘'],
  ['2F63', '⽣', '751F', '生'],
  ['2F64', '⽤', '7528', '用'],
  ['2F65', '⽥', '7530', '田'],
  ['2F66', '⽦', '758B', '疋'],
  ['2F67', '⽧', '7592', '疒'],
  ['2F68', '⽨', '7676', '癶'],
  ['2F69', '⽩', '767D', '白'],
  ['2F6A', '⽪', '76AE', '皮'],
  ['2F6B', '⽫', '76BF', '皿'],
  ['2F6C', '⽬', '76EE', '目'],
  ['2F6D', '⽭', '77DB', '矛'],
  ['2F6E', '⽮', '77E2', '矢'],
  ['2F6F', '⽯', '77F3', '石'],
  ['2F70', '⽰', '793A', '示'],
  ['2F71', '⽱', '79B8', '禸'],
  ['2F72', '⽲', '79BE', '禾'],
  ['2F73', '⽳', '7A74', '穴'],
  ['2F74', '⽴', '7ACB', '立'],
  ['2F75', '⽵', '7AF9', '竹'],
  ['2F76', '⽶', '7C73', '米'],
  ['2F77', '⽷', '7CF8', '糸'],
  ['2F78', '⽸', '7F36', '缶'],
  ['2F79', '⽹', '7F51', '网'],
  ['2F7A', '⽺', '7F8A', '羊'],
  ['2F7B', '⽻', '7FBD', '羽'],
  ['2F7C', '⽼', '8001', '老'],
  ['2F7D', '⽽', '800C', '而'],
  ['2F7E', '⽾', '8012', '耒'],
  ['2F7F', '⽿', '8033', '耳'],
  ['2F80', '⾀', '807F', '聿'],
  ['2F81', '⾁', '8089', '肉'],
  ['2F82', '⾂', '81E3', '臣'],
  ['2F83', '⾃', '81EA', '自'],
  ['2F84', '⾄', '81F3', '至'],
  ['2F85', '⾅', '81FC', '臼'],
  ['2F86', '⾆', '820C', '舌'],
  ['2F87', '⾇', '821B', '舛'],
  ['2F88', '⾈', '821F', '舟'],
  ['2F89', '⾉', '826E', '艮'],
  ['2F8A', '⾊', '8272', '色'],
  ['2F8B', '⾋', '8278', '艸'],
  ['2F8C', '⾌', '864D', '虍'],
  ['2F8D', '⾍', '866B', '虫'],
  ['2F8E', '⾎', '8840', '血'],
  ['2F8F', '⾏', '884C', '行'],
  ['2F90', '⾐', '8863', '衣'],
  ['2F91', '⾑', '897E', '襾'],
  ['2F92', '⾒', '898B', '見'],
  ['2F93', '⾓', '89D2', '角'],
  ['2F94', '⾔', '8A00', '言'],
  ['2F95', '⾕', '8C37', '谷'],
  ['2F96', '⾖', '8C46', '豆'],
  ['2F97', '⾗', '8C55', '豕'],
  ['2F98', '⾘', '8C78', '豸'],
  ['2F99', '⾙', '8C9D', '貝'],
  ['2F9A', '⾚', '8D64', '赤'],
  ['2F9B', '⾛', '8D70', '走'],
  ['2F9C', '⾜', '8DB3', '足'],
  ['2F9D', '⾝', '8EAB', '身'],
  ['2F9E', '⾞', '8ECA', '車'],
  ['2F9F', '⾟', '8F9B', '辛'],
  ['2FA0', '⾠', '8FB0', '辰'],
  ['2FA1', '⾡', '8FB5', '辵'],
  ['2FA2', '⾢', '9091', '邑'],
  ['2FA3', '⾣', '9149', '酉'],
  ['2FA4', '⾤', '91C6', '釆'],
  ['2FA5', '⾥', '91CC', '里'],
  ['2FA6', '⾦', '91D1', '金'],
  ['2FA8', '⾨', '9580', '門'],
  ['2FA9', '⾩', '961C', '阜'],
  ['2FAA', '⾪', '96B6', '隶'],
  ['2FAB', '⾫', '96B9', '隹'],
  ['2FAC', '⾬', '96E8', '雨'],
  ['2FAD', '⾭', '9751', '靑'],
  ['2FAE', '⾮', '975E', '非'],
  ['2FAF', '⾯', '9762', '面'],
  ['2FB0', '⾰', '9769', '革'],
  ['2FB1', '⾱', '97CB', '韋'],
  ['2FB2', '⾲', '97ED', '韭'],
  ['2FB3', '⾳', '97F3', '音'],
  ['2FB4', '⾴', '9801', '頁'],
  ['2FB5', '⾵', '98A8', '風'],
  ['2FB6', '⾶', '98DB', '飛'],
  ['2FB7', '⾷', '98DF', '食'],
  ['2FB8', '⾸', '9996', '首'],
  ['2FB9', '⾹', '9999', '香'],
  ['2FBA', '⾺', '99AC', '馬'],
  ['2FBB', '⾻', '9AA8', '骨'],
  ['2FBC', '⾼', '9AD8', '高'],
  ['2FBD', '⾽', '9ADF', '髟'],
  ['2FBE', '⾾', '9B25', '鬥'],
  ['2FBF', '⾿', '9B2F', '鬯'],
  ['2FC0', '⿀', '9B32', '鬲'],
  ['2FC2', '⿂', '9B5A', '魚'],
  ['2FC3', '⿃', '9CE5', '鳥'],
  ['2FC4', '⿄', '9E75', '鹵'],
  ['2FC5', '⿅', '9E7F', '鹿'],
  ['2FC6', '⿆', '9EA5', '麥'],
  ['2FC7', '⿇', '9EBB', '麻'],
  ['2FC8', '⿈', '9EC3', '黃'],
  ['2FC9', '⿉', '9ECD', '黍'],
  ['2FCA', '⿊', '9ED2', '黒'],
  ['2FCB', '⿋', '9EF9', '黹'],
  ['2FCC', '⿌', '9EFD', '黽'],
  ['2FCD', '⿍', '9F0E', '鼎'],
  ['2FCE', '⿎', '9F13', '鼓'],
  ['2FCF', '⿏', '9F20', '鼠'],
  ['2FD0', '⿐', '9F3B', '鼻'],
  ['2FD1', '⿑', '9F4A', '齊'],
  ['2FD2', '⿒', '9F52', '齒'],
  ['2FD3', '⿓', '9F8D', '龍'],
  ['2FD4', '⿔', '9F9C', '龜'],
  ['2FD5', '⿕', '9FA0', '龠'],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
].map(([, from, , to]) => [new RegExp(from, 'g'), to]);
