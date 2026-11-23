__d(
  "MAIBAThoughtProcessChunks",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      for (var t = -1, n = 0; n < e.length; n++) {
        var r;
        ((r = e[n]) == null ? void 0 : r.type) === "blocks" && (t = n);
      }
      if (t <= 0) return null;
      for (
        var o = function (t) {
            return t.type === "progress"
              ? !0
              : t.blocks.some(function (e) {
                  var t;
                  return ((t = e.entity_ranges) != null ? t : []).some(
                    function (e) {
                      var t = e == null ? void 0 : e.entity;
                      return (
                        (t == null ? void 0 : t.__typename) ===
                        "XFBToolCallObject"
                      );
                    },
                  );
                });
          },
          a = [],
          i = o(e[t]) ? null : t,
          l = null,
          s = 0;
        s < t;
        s++
      ) {
        if (o(e[s])) {
          l != null || (l = s);
          continue;
        }
        l != null &&
          (a.push({ endChunkIndex: s, startChunkIndex: l }), (l = null));
      }
      return (
        l != null && a.push({ endChunkIndex: t, startChunkIndex: l }),
        a.length === 0
          ? null
          : { finalAnswerChunkIndex: i, toolActivityChunkRanges: a }
      );
    }
    i.default = e;
  },
  66,
);
