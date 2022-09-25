/* eslint-disable */
const USER_CONFIG = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_ID: 'wxc2060d4426ad2a80',

  // 公众号APP_SECRET
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_SECRET: '524cafba632e3f09efccb230a8ef8c46',

  // 是否给文字设置多彩颜色, 和emoji不兼容
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  IS_SHOW_COLOR: true,

  // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒
    holidaytts: false,

    /** 每日N句 */
    // 金山每日一句
    CIBA: false,
    // 每日一言
    oneTalk: false,
    // 土味情话(彩虹屁)
    earthyLoveWords: false,
    // 朋友圈文案
    momentCopyrighting: false,
    // 毒鸡汤
    poisonChickenSoup: false,
    // 古诗古文
    poetry: false,

    /** 星座运势 */
    horoscope: false,

    /** 生日消息和节日消息 */
    birthdayMessage: true,


  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: '小猪',
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oIFqC6l9qevcWs84ZmXWCrQrvBpM',
      // 你想对他发送的模板消息的模板ID
      useTemplateId: '00HkVQYzkVDAfWKc_xpLGcA7yT8icy4U5yZQLdjashE',
      // 所在省份
      province: '甘肃',
      // 所在城市
      city: '兰州',
      // 新历生日, 仅用作获取星座运势, 格式必须
      // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '坏男人', year: '1997', date: '07-18', isShowAge: false,
        },
      ],
      // 专属纪念日/倒数日，如果你在这里填写了纪念日/倒数日，就不会计算CUSTOMIZED_DATE_LIST的日子了, 和CUSTOMIZED_DATE_LIST的配置方法相同，可以往下查看，我这里就不重复写了
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-07-12' },
 
      ],
      
    {
      name: '小猪',
      id: 'oIFqC6l9qevcWs84ZmXWCrQrvBpM',
      useTemplateId: '00HkVQYzkVDAfWKc_xpLGcA7yT8icy4U5yZQLdjashE',
      province: '甘肃',
      city: '兰州',
      openUrl: 'https://wangxinleo.cn',
      festivals: [{
          type: '*生日', name: '坏男人', year: '1997', date: '07-18', isShowAge: false,
        },],
      customizedDateList: [{ keyword: 'love_day', date: '2022-07-12' },],
   
 
  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: '甘肃',
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: '兰州',

  /** 重要节日相关 */



  /**
   * 限制重要节日的展示条目, 需要填写数字;
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 0,


  SLOT_LIST: [
    {
      keyword: 'lover_prattle',
      contents: [
        '因为太喜欢你，所以看谁都像是情敌。',
        '申请成为你爱里的永久居民。',
        '你很傻，你很笨，可我还是很羡慕你，因为你有我',
        '遇见你，就好像捡到了100斤的运气'
      ],

}

module.exports = USER_CONFIG
