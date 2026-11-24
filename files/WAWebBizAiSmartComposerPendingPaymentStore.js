__d(
  "WAWebBizAiSmartComposerPendingPaymentStore",
  [],
  function (t, n, r, o, a, i) {
    var e = new Map();
    function l(t, n) {
      e.set(t.toString(), n);
    }
    function s(t) {
      return e.get(t.toString());
    }
    function u(t) {
      var n = e.get(t.toString());
      return (e.delete(t.toString()), n);
    }
    function c(t, n) {
      e.get(t.toString()) === n && e.delete(t.toString());
    }
    ((i.rememberPendingPaymentSuggestion = l),
      (i.getPendingPaymentSuggestion = s),
      (i.consumePendingPaymentSuggestion = u),
      (i.discardPendingPaymentSuggestion = c));
  },
  66,
);
