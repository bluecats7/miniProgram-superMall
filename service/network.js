import { BaseURL } from "./config.js";

export default function(option){
 return new Promise((resovle,reject) =>{
    wx.request({
      url:  BaseURL + option.url,
      method: option.method || "get",
      data:option.data || {},
      success: function(res){
          resovle(res)
      },
      fail: reject,
    })
  })
}