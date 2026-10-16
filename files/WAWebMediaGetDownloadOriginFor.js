__d(
  "WAWebMediaGetDownloadOriginFor",
  ["WAWebFrontendChatGetters", "WAWebWamEnumDownloadOriginType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.chat,
        n = e.isGroupMsg,
        r = e.isNewsletterMsg,
        a = e.isProduct,
        i = e.isStatus;
      return a
        ? o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE
            .PRODUCT_CATALOG
        : i
          ? o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.STATUS_USER
          : n
            ? t != null && o("WAWebFrontendChatGetters").getIsCAG(t)
              ? o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE
                  .COMMUNITY
              : o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE
                  .CHAT_GROUP
            : r
              ? o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.CHANNEL
              : o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE
                  .CHAT_PERSONAL;
    }
    l.default = e;
  },
  98,
);
