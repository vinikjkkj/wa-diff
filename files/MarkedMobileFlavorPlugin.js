__d(
  "MarkedMobileFlavorPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        end: /_(?!_)/g,
        middle: /^_(?=\S)([\S\s]*?\S)_(?!_)/,
        start: /^_/,
      },
      l = {
        end: /\*(?!\*)/g,
        middle: /^\*(?=\S)([\S\s]*?\S)\*(?!\*)/,
        start: /^\*/,
      };
    function s(e, t, n, r) {
      return c(e, t, n, r, "em");
    }
    function u(e, t, n, r) {
      return c(e, t, n, r, "strong");
    }
    function c(t, n, r, o, a) {
      var i = a === "em" ? e : l,
        s = i.start.exec(n),
        u = r;
      if (
        s &&
        (!s[1] || (s[1] && (o === "" || t.rules.inline.punctuation.exec(o))))
      ) {
        u = u.slice(-1 * n.length);
        var c = i.end;
        c.lastIndex = 0;
        for (var d; (s = c.exec(u)) != null && s != null; )
          if (((d = i.middle.exec(u.slice(0, s.index + 2))), d)) {
            var m = n.slice(0, d[0].length),
              p = n.slice(1, d[0].length - 1);
            return a === "em"
              ? { raw: m, text: p, tokens: [], type: "em" }
              : { raw: m, text: p, tokens: [], type: "strong" };
          }
      }
    }
    ((i.em = s), (i.strong = u));
  },
  66,
);
