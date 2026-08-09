__d(
  "MAWMessagesDirection",
  ["I64", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return r("err")("Unhandled direction: " + e);
    }
    function u(e, t) {
      return _(e, { asc: t.maxTimestampMs, desc: t.minTimestampMs });
    }
    function c(e, t) {
      return _(e, { asc: t.maxMessageId, desc: t.minMessageId });
    }
    function d(t, n) {
      return (
        n === "desc" &&
        (e || (e = o("I64"))).equal(
          t.maxTimestampMs,
          (e || (e = o("I64"))).max_int,
        ) &&
        t.minMessageId === t.maxMessageId &&
        t.hasMoreBefore &&
        !t.hasMoreAfter
      );
    }
    function m(e) {
      return _(e, { asc: "after", desc: "before" });
    }
    function p(e) {
      return f(e, { after: "asc", before: "desc" });
    }
    function _(e, t) {
      var n = t.asc,
        r = t.desc;
      switch (e) {
        case "asc":
          return n;
        case "desc":
          return r;
        default:
          throw s(e);
      }
    }
    function f(e, t) {
      var n = t.after,
        r = t.before;
      switch (e) {
        case "after":
          return n;
        case "before":
          return r;
        default:
          throw s(e);
      }
    }
    ((l.getI64RangeTimestampForDirection = u),
      (l.getRangeMsgIdForDirection = c),
      (l.isFirstPageRange = d),
      (l.translateMwpDirectionToMawDirection = m),
      (l.translateMawDirectionToMwpDirection = p),
      (l.switchOnMWPMessagesDirection = _),
      (l.switchOnMAWMessagesDirection = f));
  },
  98,
);
