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
      var a = e;
      if (t != null && t !== "") {
        var i = r.getEntity(t);
        if (i.getType() === "MENTION") {
          o &&
            (a = a.replace(l, function (e) {
              return "\\" + e;
            }));
          var s = i.getData().id;
          if (/^\d+$/.test(s)) return "@[" + s + ":" + a + "]";
        }
      }
      return n("getChunkForContentState")(a, t, r);
    }
    a.exports = s;
  },
  null,
);
