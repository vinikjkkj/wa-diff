__d(
  "MAIBABusinessSetupConnectedIG",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = new Map(),
      c = [],
      d = new Set();
    function m() {
      for (var e of d) e();
    }
    function p(e) {
      return (
        d.add(e),
        function () {
          d.delete(e);
        }
      );
    }
    function _(e, t) {
      var n;
      if (e !== "") {
        var r = (n = u.get(e)) != null ? n : c,
          o = r.some(function (e) {
            return e.igAssetId === t.igAssetId;
          })
            ? r.map(function (e) {
                return e.igAssetId === t.igAssetId ? t : e;
              })
            : [].concat(r, [t]);
        (u.set(e, o), m());
      }
    }
    function f(e) {
      var t;
      return e == null || e === "" ? c : (t = u.get(e)) != null ? t : c;
    }
    function g(e) {
      e == null || e === "" || (u.delete(e) && m());
    }
    function h(e) {
      return s(p, function () {
        return f(e);
      });
    }
    ((l.storeConnectedIG = _),
      (l.getConnectedIGs = f),
      (l.clearConnectedIG = g),
      (l.useConnectedIGs = h));
  },
  98,
);
