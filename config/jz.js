export const CONFIG = {
  /**
   * 公众号配置
   */
  
  // 公众号APP_ID
  APP_ID: "wxc2060d4426ad2a80",
  
  // 公众号APP_SECRET
  APP_SECRET: "524cafba632e3f09efccb230a8ef8c46",
  
  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: "小猪",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oIFqC6l9qevcWs84ZmXWCrQrvBpM“,
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "KkxFACB0q6Z-8SgtLiFN7NCdeF_NQM6Wo4VczdTF2Sc",
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      province: "甘肃",
      city: "兰州",
      openUrl: "https://wangxinleo.cn",
    },
    {
      name: "小猪",
      id: "oIFqC6l9qevcWs84ZmXWCrQrvBpM",
      useTemplateId: "KkxFACB0q6Z-8SgtLiFN7NCdeF_NQM6Wo4VczdTF2Sc",
      province: "甘肃",
      city: "兰州",
      openUrl: "https://wangxinleo.cn",
    },
 
  ],
  
  /** 天气相关 */
  
  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "甘肃",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "兰州",
  
  /** 重要节日相关 */
  

  FESTIVALS: [
    {"type": "*生日", "name": "坏男人", "year": "1997", "date": "07-18", isShowAge: true},
  ],
  
  /**
   * 限制重要节日的展示条目, 需要填写数字;
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 1,
  
  /** 日期相关 */
  
  CUSTOMIZED_DATE_LIST: [
    // 我喜欢上你的日子
    {"keyword": "lover_day", date: "2022-07-11", color: '#f0b4ee'}, 
  ],
  
  /** 插槽 */
  
  /** 你可以在这里写超多的你想显示的内容了！
   * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
   * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }}
   * */
  SLOT_LIST: [
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
        "申请成为你爱里的永久居民。",
        "真的希望有一天能等得到你",
        "今天又是点点想你的一天哦",
      ], color: '#6f6041'},
   
  {
    one_talk: { value: '没有绝对的废物，只有放错位置的资源。', color: '#1e90fa' },
    talk_from: { value: '上海市垃圾分类', color: '#5c23ca' },

  ],


}

