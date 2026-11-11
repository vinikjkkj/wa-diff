__d(
  "WAWebGetChannelVideoDashManifestUrl",
  ["WAWebMsgGetters", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    var e = /^https:\/\/mmg\.whatsapp\.net\/channel\/dash\?id=[0-9]{1,20}$/;
    function s(e) {
      return u(m(e));
    }
    function u(e) {
      var t = d(e);
      return t.kind === "SERVER_MINTED" ? t.url : null;
    }
    function c(e) {
      return d(m(e));
    }
    function d(e) {
      var t = e.dashManifestUrl,
        n = e.isNewsletterMsg,
        r = e.type;
      return !f({ isNewsletterMsg: n, type: r }) || t == null || t === ""
        ? { kind: "NO_URL" }
        : p(t)
          ? { kind: "SERVER_MINTED", url: t }
          : { kind: "REJECTED" };
    }
    function m(e) {
      return {
        dashManifestUrl: e.dashManifestUrl,
        isNewsletterMsg: o("WAWebMsgGetters").getIsNewsletterMsg(e),
        type: e.type,
      };
    }
    function p(t) {
      return t != null && e.test(t);
    }
    function _(e) {
      return f({
        isNewsletterMsg: o("WAWebMsgGetters").getIsNewsletterMsg(e),
        type: e.type,
      });
    }
    function f(e) {
      var t = e.isNewsletterMsg,
        n = e.type;
      return t && n === o("WAWebMsgType").MSG_TYPE.VIDEO;
    }
    ((l.getChannelVideoDashManifestUrl = s),
      (l.getChannelVideoDashManifestUrlFor = u),
      (l.checkChannelVideoDashManifestUrl = c),
      (l.isServerMintedChannelDashManifestUrl = p),
      (l.getIsChannelVideoMsg = _),
      (l.getIsChannelVideoMsgFor = f));
  },
  98,
);
