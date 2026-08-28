__d(
  "shouldUseInsertableStreams",
  [
    "ZenonE2ee",
    "ZenonE2eeMandatedStateManager",
    "ZenonRTWebBrowserFeatureSupport",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e;
      if (r("ZenonE2eeMandatedStateManager").isInfraE2eeMandated()) return !0;
      var t = (e = r("qex")._("1722")) != null ? e : !1,
        n = t;
      return (
        r("ZenonE2ee").isE2eeStackReady() &&
        o("ZenonRTWebBrowserFeatureSupport").isInsertableStreamsSupported() &&
        n
      );
    }
    l.default = e;
  },
  98,
);
