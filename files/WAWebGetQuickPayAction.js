__d(
  "WAWebGetQuickPayAction",
  ["fbt", "WAWebOrderGatingUtils", "WAWebShowMessageActionFallbackErrorAction"],
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
    function u(t, n) {
      var r = o("WAWebOrderGatingUtils").QuickPayProductTypeGating.cast(t);
      return r && o("WAWebOrderGatingUtils").isOrderDetailsQuickPayEnabled(r)
        ? e(n)
        : null;
    }
    l.getQuickPayAction = u;
  },
  226,
);
