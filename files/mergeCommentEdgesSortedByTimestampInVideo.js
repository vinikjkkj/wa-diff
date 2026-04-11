__d(
  "mergeCommentEdgesSortedByTimestampInVideo",
  ["expectationViolation"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      var e,
        n =
          t == null || (e = t.getLinkedRecord("node")) == null
            ? void 0
            : e.getValue("timestamp_in_video");
      return typeof n != "number" ? null : n;
    };
    function s(t, n) {
      for (
        var o = 0,
          a = 0,
          i = new Set(),
          l = [],
          s = function (t) {
            var e,
              n =
                t == null || (e = t.getLinkedRecord("node")) == null
                  ? void 0
                  : e.getValue("id");
            if (n == null) {
              r("expectationViolation")("Node should have id");
              return;
            }
            i.has(n) || (i.add(n), l.push(t));
          };
        o < t.length && a < n.length;
      ) {
        var u = e(t[o]),
          c = e(n[a]);
        if (u == null) {
          o++;
          continue;
        }
        if (c == null) {
          a++;
          continue;
        }
        if (u < c) {
          (s(t[o]), o++);
          continue;
        }
        if (u > c) {
          (s(n[a]), a++);
          continue;
        }
        (s(t[o]), s(n[a]), o++, a++);
      }
      for (var d = o; d < t.length; d++) s(t[d]);
      for (var m = a; m < n.length; m++) s(n[m]);
      return l;
    }
    l.default = s;
  },
  98,
);
