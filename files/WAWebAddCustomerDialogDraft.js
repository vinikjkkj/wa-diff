__d(
  "WAWebAddCustomerDialogDraft",
  ["WAWebCmd"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { address: "", email: "", notes: "", source: null, stage: null },
      s = null,
      u = 0,
      c = !1;
    function d() {
      return (f(), s);
    }
    function m() {
      return (f(), u);
    }
    function p(e, t) {
      t === u && (s = e);
    }
    function _() {
      s = null;
    }
    function f() {
      c ||
        ((c = !0),
        o("WAWebCmd").Cmd.on("starting_logout_from_bridge", g),
        o("WAWebCmd").Cmd.on("logout_from_bridge", g));
    }
    function g() {
      (u++, (s = null));
    }
    ((l.EMPTY_ADD_CUSTOMER_PREFILL = e),
      (l.readAddCustomerDialogDraft = d),
      (l.getAddCustomerDraftSessionGeneration = m),
      (l.writeAddCustomerDialogDraft = p),
      (l.clearAddCustomerDialogDraft = _));
  },
  98,
);
