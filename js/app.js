window.app = {


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
	}



}
