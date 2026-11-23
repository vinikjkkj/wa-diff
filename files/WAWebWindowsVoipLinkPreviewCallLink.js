__d(
  "WAWebWindowsVoipLinkPreviewCallLink",
  ["WAWebFrontendContactGetters", "WAWebVoipStackInterface"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t) {
      var n = e.data,
        r = n.callType,
        a = n.token;
      t === void 0 && (t = 0);
      var i = o("WAWebFrontendContactGetters").getMyUsername(),
        l = r === "video",
        s = await o("WAWebVoipStackInterface").getVoipStackInterface();
      await (s == null ? void 0 : s.previewCallLink(a, l, t, i));
    }
    l.handleClickCallLink = e;
  },
  98,
);
