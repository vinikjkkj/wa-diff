__d(
  "WAWebBizAdCreationFetchMediaFile",
  ["FBLogger", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3e4;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var o = yield c(e);
          if (!o.ok)
            throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
              n + " fetch failed (status " + o.status + ")",
            );
          var a = yield o.blob();
          return new File([a], t, { type: a.type });
        })),
        u.apply(this, arguments)
      );
    }
    function c(t) {
      var n = new AbortController(),
        r = window.setTimeout(function () {
          return n.abort();
        }, e);
      return window.fetch(t, { signal: n.signal }).finally(function () {
        window.clearTimeout(r);
      });
    }
    ((l.fetchMediaFile = s), (l.fetchWithTimeout = c));
  },
  98,
);
