__d(
  "baseTextWithEntitiesSplitRangesAndTextIntoParagraphs",
  ["UnicodeUtils", "baseTextWithEntitiesAdjustRanges"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n = t.ranges,
        a = t.text,
        i = 0;
      return a
        .split("\n")
        .map(function (t) {
          var a = r("baseTextWithEntitiesAdjustRanges")(
            n,
            i,
            (e || (e = o("UnicodeUtils"))).strlen(t),
          );
          return ((i += e.strlen(t) + 1), { ranges: a, text: t });
        })
        .filter(function (e) {
          return e.text.trim() !== "";
        });
    }
    function u(t, n) {
      var a = t.ranges,
        i = t.text,
        l = 0;
      return i.split(/(?=\n\s*\n)/).map(function (t) {
        var i,
          u,
          c,
          d = (i = t.match(/(^\n\s*\n)?([^]*$)/)) != null ? i : [],
          m = (u = d[1]) != null ? u : "",
          p = (c = d[2]) != null ? c : t,
          _ = r("baseTextWithEntitiesAdjustRanges")(
            a,
            l + m.length,
            (e || (e = o("UnicodeUtils"))).strlen(p),
          );
        return (
          (l += e.strlen(t)),
          n ? s({ ranges: _, text: p }) : { ranges: _, text: p }
        );
      });
    }
    l.default = u;
  },
  98,
);
