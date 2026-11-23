__d(
  "MAIBAMBSAssetSelectionStore",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = { selectedAssets: [] },
      c = new Set();
    function d() {
      c.forEach(function (e) {
        return e();
      });
    }
    function m() {
      return u;
    }
    function p(e) {
      ((u = { selectedAssets: e }), d());
    }
    function _() {
      ((u = { selectedAssets: [] }), d());
    }
    function f(e) {
      return (
        c.add(e),
        function () {
          c.delete(e);
        }
      );
    }
    function g() {
      return s(f, m, m);
    }
    ((l.getState = m),
      (l.setMBSSelectedAssets = p),
      (l.clearMBSSelectedAssets = _),
      (l.subscribe = f),
      (l.useMAIBAMBSAssetSelectionStore = g));
  },
  98,
);
