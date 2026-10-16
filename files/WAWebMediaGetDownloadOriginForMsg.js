__d(
  "WAWebMediaGetDownloadOriginForMsg",
  [
    "WAWebFrontendMsgGetters",
    "WAWebMediaGetDownloadOriginFor",
    "WAWebMsgGetters",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebMsgGetters").getIsGroupMsg(e);
      return r("WAWebMediaGetDownloadOriginFor")({
        chat: t ? o("WAWebFrontendMsgGetters").getMaybeChat(e) : null,
        isGroupMsg: t,
        isNewsletterMsg: o("WAWebMsgGetters").getIsNewsletterMsg(e),
        isProduct: o("WAWebFrontendMsgGetters").getAsProduct(e) != null,
        isStatus: o("WAWebMsgGetters").getIsStatus(e),
      });
    }
    l.default = e;
  },
  98,
);
