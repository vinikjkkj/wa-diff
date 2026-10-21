__d(
  "WAWebBrazilPaymentStateUpdateMsgUtils",
  [
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 64,
      s = new Map();
    function u(e) {
      return s.size === 0
        ? e
        : e.map(function (e) {
            return e.type === o("WAWebMsgType").MSG_TYPE.IMAGE && m(e.id)
              ? babelHelpers.extends({}, e, {
                  viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
                })
              : e;
          });
    }
    function c(t, n, o) {
      var a = new (r("WAWebMsgKey"))({ fromMe: n, remote: t, id: o });
      s.set(a.toString(), p(a));
      for (var i of s.keys()) {
        if (s.size <= e) return;
        s.delete(i);
      }
    }
    function d(e, t, n) {
      m(new (r("WAWebMsgKey"))({ fromMe: t, remote: e, id: n }));
    }
    function m(e) {
      var t = new Set(p(e));
      for (var n of s) {
        var r = n[0],
          o = n[1];
        if (
          o.some(function (e) {
            return t.has(e);
          })
        )
          return (s.delete(r), !0);
      }
      return !1;
    }
    function p(e) {
      var t = o("WAWebLidMigrationUtils").getAlternateMsgKey(e);
      return t == null ? [e.toString()] : [e.toString(), t.toString()];
    }
    ((l.MAX_AWAITED_RECEIPTS = e),
      (l.hideAwaitedBrazilPaymentReceipts = u),
      (l.awaitBrazilPaymentReceipt = c),
      (l.stopAwaitingBrazilPaymentReceipt = d));
  },
  98,
);
