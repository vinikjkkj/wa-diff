__d(
  "getMentionsTextForContentState",
  ["emptyFunction", "getChunkForContentState"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("emptyFunction").thatReturnsTrue,
      l = /[\\\]:]/g;
    function s(t, n, r) {
      (n === void 0 && (n = ""), r === void 0 && (r = !0));
      var o = t.getBlockMap().map(function (n) {
        var o = n.getText(),
          a = [];
        return (
          n.findEntityRanges(e, function (e, i) {
            a.push(u(o.slice(e, i), n.getEntityAt(e), t, r));
          }),
          a.join("")
        );
      });
      return o.join("\n" + n);
    }
    function u(e, t, r, o) {
      if (t) {
        var a = r.getEntity(t);
        if (a.getType() === "MENTION") {
          o &&
            (e = e.replace(l, function (e) {
              return "\\" + e;
            }));
          var i = a.getData().id;
          if (/^\d+$/.test(i)) return "@[" + i + ":" + e + "]";
        }
      }
      return n("getChunkForContentState")(e, t, r);
    }
    a.exports = s;
  },
  null,
);
