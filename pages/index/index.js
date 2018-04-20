//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        shopInfo:{
            name:"DELL戴尔电脑专卖店专卖店\n外星人Alienware",
            des:'休闲娱乐•户外活动',
            address:'北京市海淀区中关村大街22号中科大DELL戴尔电脑专卖店DELL戴尔电脑专卖店',
            time:'8:00-22:00',
            phone:'010-62611879',
            imagesTitle:'门店图片',
            imageUrls: [
                "../../images/icon.jpg",
                "../../images/icon.jpg",
                "../../images/icon.jpg",
                "../../images/phone.png"
            ]
        }
        
    },

    showMap: function (e) {
        wx.navigateTo({
            url: '../map/map'
        })
    },
    callPhone: function (e) {
        wx.makePhoneCall({
            phoneNumber: this.data.shopInfo.phone
        })
    },
    showGallery: function (e) {
        var index = e.target.dataset.index;
        wx.navigateTo({
          url: '../gallery/gallery?index='+index
        })
        


    }
})
