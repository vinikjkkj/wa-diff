__d(
  "WAWebGetQuickPayAction",
  ["fbt", "WAWebBizGatingUtils", "WAWebShowMessageActionFallbackErrorAction"],
  function (t, n, r, o, a, i, l, s) {
    var e = function (t) {
      return {
        label: s._(/*BTDS*/ "Pay now on WhatsApp"),
        disabled: t,
        onClick: function () {
          return r("WAWebShowMessageActionFallbackErrorAction")({
            title: s._(/*BTDS*/ "Complete payment on your phone"),
            body: "",
          });
        },
      };
    };
    function u(t, n, r) {
      var a = o("WAWebBizGatingUtils").QuickPayProductTypeGating.cast(n);
      return a && o("WAWebBizGatingUtils").isOrderDetailsQuickPayEnabled(a)
        ? e(r)
        : null;
    }
    l.getQuickPayAction = u;
  },
  226,
);
