__d(
  "CAAWebBloksUrlUtils",
  ["WebBloksURLUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "deoia",
      s = "almsg",
      u = "ias";
    function c(t) {
      var n;
      return o("WebBloksURLUtils").addQueryParamsToUrl(
        t,
        ((n = {}), (n[e] = "1"), n),
      );
    }
    function d(t) {
      var n;
      return o("WebBloksURLUtils").addQueryParamsToUrl(
        t,
        ((n = {}), (n[e] = "1"), (n[s] = u), n),
      );
    }
    ((l.addAppDeeplinkBlockingQueryParam = c), (l.addAutoLoginQueryParam = d));
  },
  98,
);
