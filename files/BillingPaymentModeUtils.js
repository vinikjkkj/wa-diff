__d(
  "BillingPaymentModeUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "NEW_USER",
      l = "SUPPORTS_PREPAY",
      s = "SUPPORTS_POSTPAY",
      u = "SUPPORTS_AUTO_RELOAD";
    function c(e) {
      return e.includes(s) && e.includes(l);
    }
    function d(e) {
      return e.includes("NEW_USER");
    }
    function m(e) {
      return e.includes(s) && !e.includes(l);
    }
    function p(e) {
      return e.includes(l) && !e.includes(s);
    }
    function _(e) {
      return e.includes(u);
    }
    function f(e) {
      return e.includes(l);
    }
    function g(e) {
      return e.includes(s);
    }
    function h(t) {
      return t.includes(e);
    }
    ((i.isHybridAccount = c),
      (i.isNUXAccount = d),
      (i.isPostpayOnlyAccount = m),
      (i.isPrepayOnlyAccount = p),
      (i.supportsAutoReload = _),
      (i.supportsPrepay = f),
      (i.supportsPostpay = g),
      (i.isNewUserAccount = h));
  },
  66,
);
