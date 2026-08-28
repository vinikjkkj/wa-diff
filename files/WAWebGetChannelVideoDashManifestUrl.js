__d(
  "WAWebGetChannelVideoDashManifestUrl",
  ["WAWebMediaUrlAllowlist", "WAWebMsgGetters", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (!s(e)) return null;
      var t = e.dashManifestUrl;
      return t == null ||
        t === "" ||
        !o("WAWebMediaUrlAllowlist").isAllowedMediaUrl(t)
        ? null
        : t;
    }
    function s(e) {
      return (
        o("WAWebMsgGetters").getIsNewsletterMsg(e) &&
        e.type === o("WAWebMsgType").MSG_TYPE.VIDEO
      );
    }
    ((l.getChannelVideoDashManifestUrl = e), (l.getIsChannelVideoMsg = s));
  },
  98,
);
