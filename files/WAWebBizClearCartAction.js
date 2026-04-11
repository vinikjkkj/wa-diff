__d(
  "WAWebBizClearCartAction",
  ["WAWebBizSyncCartAction"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.cartItemCollection.length > 0;
      (e.cartItemCollection.reset(),
        e.set("message", void 0),
        t ? e.trigger("change:cartItemCollection") : e.countTotals(),
        r("WAWebBizSyncCartAction")(e));
    }
    l.default = e;
  },
  98,
);
