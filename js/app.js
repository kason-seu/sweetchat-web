window.app = {

	/**
	 * netty服务后端发布的url地址
	 */
	nettyServerUrl: 'ws://192.168.0.103:9999/ws',
	/**
	 * 后端地址
	 */
	serverurl: "http://192.168.0.103:8090",
	imgServerUrl: "",
	isNotNull: function(str) {
		if (str != null || str != "" || str != undefined) {
			return true;
		}
		return false;
	},

	showToast: function(message, name) {
		plus.nativeUI.toast(message, {
			icon: "image" + name + ".png",
			verticalAlign: "center"
		});
	},

	setUserGlobalItem: function(user) {
		var userJsonStr = JSON.stringify(user);
		plus.storage.setItem("userInfo", userJsonStr);
	},

	getUserGlobalItem: function() {

		var userJsonStr = plus.storage.getItem("userInfo");
		return JSON.parse(userJsonStr);
	},

	logout: function() {

		plus.storage.removeItem("userInfo");
		plus.storage.removeItem("contactList");
	},

	/**
	 * 保存用户的联系人列表
	 * @param {Object} contactList
	 */
	setContactList: function(contactList) {
		var contactListStr = JSON.stringify(contactList);
		plus.storage.setItem("contactList", contactListStr);
	},

	/**
	 * 获取本地缓存中的联系人列表
	 */
	getContactList: function() {
		var contactListStr = plus.storage.getItem("contactList");

		if (!this.isNotNull(contactListStr)) {
			return [];
		}

		return JSON.parse(contactListStr);
	},


	/**
	 * 和后端的枚举对应
	 */
	CONNECT: 1, // 第一次(或重连)初始化连接
	CHAT: 2, // 聊天消息
	SIGNED: 3, // 消息签收
	KEEPALIVE: 4, // 客户端保持心跳
	PULL_FRIEND: 5, // 重新拉取好友

	/**
	 * 和后端的 ChatMsg 聊天模型对象保持一致
	 * @param {Object} senderId
	 * @param {Object} receiverId
	 * @param {Object} msg
	 * @param {Object} msgId
	 */
	ChatMsg: function(senderId, receiverId, msg, msgId) {
		this.senderId = senderId;
		this.receiverId = receiverId;
		this.msg = msg;
		this.msgId = msgId;
	},

	/**
	 * 和后端的构建消息 DataContent 模型对象保持一致
	 * @param {Object} action
	 * @param {Object} chatMsg
	 * @param {Object} extand
	 */
	DataContent: function(action, chatMsg, extand) {
		this.action = action;
		this.chatMsg = chatMsg;
		this.extand = extand;
	},
}
