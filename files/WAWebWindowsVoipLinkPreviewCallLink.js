__d(
  "WAWebWindowsVoipLinkPreviewCallLink",
  [
    "WAWebFrontendContactGetters",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.data,
            r = n.callType,
            a = n.token;
          t === void 0 && (t = 0);
          var i = o("WAWebFrontendContactGetters").getMyUsername(),
            l = r === "video",
            s = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          yield s == null ? void 0 : s.previewCallLink(a, l, t, i);
        })),
        s.apply(this, arguments)
      );
    }
    l.handleClickCallLink = e;
  },
  98,
);
