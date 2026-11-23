__d(
  "WAWebBizAdCreationFetchMediaFile",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3e4;
    async function s(e, t, n) {
      var o = await u(e);
      if (!o.ok)
        throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
          n + " fetch failed (status " + o.status + ")",
        );
      var a = await o.blob();
      return new File([a], t, { type: a.type });
    }
    function u(t) {
      var n = new AbortController(),
        r = window.setTimeout(function () {
          return n.abort();
        }, e);
      return window.fetch(t, { signal: n.signal }).finally(function () {
        window.clearTimeout(r);
      });
    }
    ((l.fetchMediaFile = s), (l.fetchWithTimeout = u));
  },
  98,
);
