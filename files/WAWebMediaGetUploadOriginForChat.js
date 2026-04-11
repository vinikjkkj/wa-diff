__d(
  "WAWebMediaGetUploadOriginForChat",
  [
    "WAWebChatGetters",
    "WAWebFrontendChatGetters",
    "WAWebStateUtils",
    "WAWebWamEnumUploadOriginType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (!e)
        return o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.UNKNOWN;
      var t = o("WAWebStateUtils").unproxy(e);
      return o("WAWebChatGetters").getIsNewsletter(t)
        ? o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.CHANNEL
        : o("WAWebChatGetters").getIsGroup(t)
          ? o("WAWebFrontendChatGetters").getIsCAG(t)
            ? o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.COMMUNITY
            : o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.CHAT_GROUP
          : o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.CHAT_PERSONAL;
    }
    l.default = e;
  },
  98,
);
