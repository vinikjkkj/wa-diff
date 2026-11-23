__d(
  "WAFlowsHandleNavigation",
  ["invariant", "WAFlowsWELJActionCreators"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n, r, a, i) {
      var l,
        u,
        c = (l = r[(r == null ? void 0 : r.length) - 1]) != null ? l : "",
        d = (u = r[r.length - 2]) != null ? u : "";
      if (c !== d) {
        var m = r[r.length - 2] === d;
        d != null || s(0, 73186);
        var p = n == null ? void 0 : n.getScreenMeta(c);
        p != null || s(0, 72840);
        var _ = (p == null ? void 0 : p.refresh_on_back) === !0 && m;
        if (_) {
          var f = o("WAFlowsWELJActionCreators").createDataExchangeAction(
            c,
            {},
            !1,
            m,
          );
          e(i.dataExchangeActionHandler(f, t, !0, a));
        } else {
          var g = o("WAFlowsWELJActionCreators").createWELJNavigateAction(
            c,
            d,
            {},
            !0,
          );
          e(i.navigateActionHandler(g, t, !0, !0));
        }
      }
    }
    l.default = e;
  },
  98,
);
