__d(
  "MAWMessagesDirection",
  ["I64", "err", "vulture"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return (
        r("vulture")("aCLtK-QgWJXFnxzt8spuezEsZaw="),
        r("err")("Unhandled direction: " + e)
      );
    }
    function u(e, t) {
      return p(e, { asc: t.maxTimestampMs, desc: t.minTimestampMs });
    }
    function c(e, t) {
      return p(e, { asc: t.maxMessageId, desc: t.minMessageId });
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
      return p(e, { asc: "after", desc: "before" });
    }
    function p(e, t) {
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
    ((l.getI64RangeTimestampForDirection = u),
      (l.getRangeMsgIdForDirection = c),
      (l.isFirstPageRange = d),
      (l.translateMwpDirectionToMawDirection = m),
      (l.switchOnMWPMessagesDirection = p));
  },
  98,
);
