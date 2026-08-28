__d(
  "adsManagerDefaultErrorHandler",
  ["AdsInterfacesLogger", "AsyncResponse"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      t === void 0 && (t = !0);
      var o = e.getErrorDescription(),
        a = (n = e.request) == null ? void 0 : n.uri,
        i = typeof a == "string" ? a : a == null ? void 0 : a.path;
      (r("AdsInterfacesLogger").log({
        eventName: "xcontroller_error",
        eventCategory: "errors",
        data: {
          visible: !e.silentError,
          message: o,
          error_code: e.error,
          to_uri: i,
        },
      }),
        t && r("AsyncResponse").defaultErrorHandler(e));
    }
    l.default = e;
  },
  98,
);
