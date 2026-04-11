__d(
  "WAWebMediaGetDownloadOriginForMsg",
  [
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebWamEnumDownloadOriginType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (o("WAWebFrontendMsgGetters").getAsProduct(e))
        return o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE
          .PRODUCT_CATALOG;
      if (o("WAWebMsgGetters").getIsStatus(e))
        return o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE
          .STATUS_USER;
      if (o("WAWebMsgGetters").getIsGroupMsg(e)) {
        var t = o("WAWebFrontendMsgGetters").getChat(e);
        return t != null && o("WAWebFrontendChatGetters").getIsCAG(t)
          ? o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.COMMUNITY
          : o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.CHAT_GROUP;
      }
      return o("WAWebMsgGetters").getIsNewsletterMsg(e)
        ? o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.CHANNEL
        : o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE
            .CHAT_PERSONAL;
    }
    l.default = e;
  },
  98,
);
