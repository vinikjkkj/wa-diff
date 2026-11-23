__d(
  "MAIBABusinessSetupNewAdAccount",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = new Map(),
      c = new Set();
    function d(e) {
      return (
        c.add(e),
        function () {
          c.delete(e);
        }
      );
    }
    function m(e, t) {
      if (e !== "") {
        var n = u.get(e);
        if (
          !(
            n != null &&
            n.name === t.name &&
            n.portfolioName === t.portfolioName &&
            n.timezoneID === t.timezoneID &&
            n.currency === t.currency
          )
        ) {
          u.set(e, t);
          for (var r of c) r();
        }
      }
    }
    function p(e) {
      var t;
      return e == null || e === "" ? null : (t = u.get(e)) != null ? t : null;
    }
    function _(e) {
      return s(d, function () {
        return p(e);
      });
    }
    ((l.publishBusinessSetupNewAdAccount = m),
      (l.getBusinessSetupNewAdAccount = p),
      (l.useBusinessSetupNewAdAccount = _));
  },
  98,
);
