// pages/gallery/gallery.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        current: 0,
        imageUrls:[
            "../../images/icon.jpg",
            "../../images/icon.jpg",
            "../../images/icon.jpg",
            "../../images/phone.png"
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log("onLoad "+options)
        this.setData({
            current: options.index
        });

    }

})