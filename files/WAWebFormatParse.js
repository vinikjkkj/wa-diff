__d(
  "WAWebFormatParse",
  [
    "WAUnicodeUtils",
    "WAWebFormatFilter",
    "WAWebFormatFlatten",
    "WAWebFormatMatch",
    "WAWebFormatParseTree",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return (n === void 0 && (n = 1 / 0), s(e, r("WAWebFormatFlatten")(t), n));
    }
    function s(e, t, n) {
      n === void 0 && (n = 1 / 0);
      var a = r("WAWebFormatMatch")(e, t, n),
        i = a.length
          ? r("WAWebFormatParseTree")(e, r("WAWebFormatFilter")(a, t), t)
          : { children: [{ type: "text", value: e }] },
        l = o("WAUnicodeUtils").numCodepoints(e);
      return (n < l && u(i, { limit: n }), i);
    }
    function u(e, t) {
      if (!(t.limit <= 0)) {
        if (e.type && e.type === "text") {
          if (e.value.length >= t.limit) {
            var n = o("WAUnicodeUtils").toArray(e.value);
            (n.length >= t.limit && (n = n.slice(0, t.limit)),
              (e.value = n.join("")),
              (t.limit -= n.length));
          } else t.limit -= e.value.length;
          return;
        } else if (e.type && e.type === "delimiter") return;
        for (
          var r = 0;
          r < e.children.length && (u(e.children[r], t), !(t.limit <= 0));
        )
          r++;
        e.children = e.children.slice(0, r + 1);
      }
    }
    ((l.parse = e), (l._parse = s));
  },
  98,
);
