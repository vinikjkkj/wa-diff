__d(
  "WAWebTP3PPDFExtensionFetchDetection",
  ["asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 2e3;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = null;
          try {
            var r = new AbortController();
            n = self.setTimeout(function () {
              return r.abort();
            }, e);
            var o = yield self.fetch(t, { method: "HEAD", signal: r.signal });
            return o.ok;
          } catch (e) {
            return !1;
          } finally {
            self.clearTimeout(n);
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.hasWebTP3PPDFExtensionFetch = s;
  },
  98,
);
