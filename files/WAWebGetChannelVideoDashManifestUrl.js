__d(
  "WAWebGetChannelVideoDashManifestUrl",
  ["WAWebMediaUrlAllowlist", "WAWebMsgGetters", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s({
        dashManifestUrl: e.dashManifestUrl,
        isNewsletterMsg: o("WAWebMsgGetters").getIsNewsletterMsg(e),
        type: e.type,
      });
    }
    function s(e) {
      var t = e.dashManifestUrl,
        n = e.isNewsletterMsg,
        r = e.type;
      return !c({ isNewsletterMsg: n, type: r }) ||
        t == null ||
        t === "" ||
        !o("WAWebMediaUrlAllowlist").isAllowedMediaUrl(t)
        ? null
        : t;
    }
    function u(e) {
      return c({
        isNewsletterMsg: o("WAWebMsgGetters").getIsNewsletterMsg(e),
        type: e.type,
      });
    }
    function c(e) {
      var t = e.isNewsletterMsg,
        n = e.type;
      return t && n === o("WAWebMsgType").MSG_TYPE.VIDEO;
    }
    ((l.getChannelVideoDashManifestUrl = e),
      (l.getChannelVideoDashManifestUrlFor = s),
      (l.getIsChannelVideoMsg = u),
      (l.getIsChannelVideoMsgFor = c));
  },
  98,
);
