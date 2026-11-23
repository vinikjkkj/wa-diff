__d(
  "MAIBALWIFieldCopy",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = new Map();
    function u(t, n) {
      e.set(t, n);
    }
    function c(t) {
      var n,
        r = (n = e.get(t)) != null ? n : e.get("daily_budget");
      return (r != null || s(0, 184279, t), r);
    }
    function d(e, t, n) {
      return c(e).describeProposal(t, n);
    }
    function m(e, t, n) {
      return c(e).describeRefusal(t, n);
    }
    function p(e, t, n) {
      return c(e).describeResult(t, n);
    }
    function _(e, t) {
      var n, r, o;
      return (n =
        (r = (o = c(e)).describeUndoDisclosure) == null
          ? void 0
          : r.call(o, t)) != null
        ? n
        : null;
    }
    ((l.registerLWIFieldCopy = u),
      (l.describeLWIFieldProposal = d),
      (l.describeLWIFieldRefusal = m),
      (l.describeLWIFieldResult = p),
      (l.describeLWIFieldUndoDisclosure = _));
  },
  98,
);
