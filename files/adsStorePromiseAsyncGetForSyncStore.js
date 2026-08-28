__d(
  "adsStorePromiseAsyncGetForSyncStore",
  [
    "Promise",
    "adsStoreTestReject",
    "adsStoreTestResolve",
    "clearTimeout",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, o, a, i, l) {
      var s = Array.isArray(t) ? t : [t],
        u = a || r("adsStoreTestResolve"),
        c = i || r("adsStoreTestReject");
      return new (e || (e = n("Promise")))(function (e, t) {
        var n = [],
          a;
        function i() {
          l &&
            l.timeout != null &&
            (a = r("setTimeout")(function () {
              (p(), l && l.getTimeoutError ? t(l.getTimeoutError()) : t());
            }, l.timeout));
        }
        function d() {
          (r("clearTimeout")(a), i());
        }
        function m() {
          var n = o();
          u(n) ? (p(), e(n)) : c(n) ? (p(), t(n)) : d();
        }
        function p() {
          (n.forEach(function (e) {
            return e.remove();
          }),
            (n = []),
            r("clearTimeout")(a));
        }
        function _() {
          n = s.map(function (e) {
            return e.addListener(m);
          });
        }
        (_(), m());
      });
    }
    l.default = s;
  },
  98,
);
