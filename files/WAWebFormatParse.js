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
    function e(e, t, n, o) {
      return (
        n === void 0 && (n = 1 / 0),
        u(e, r("WAWebFormatFlatten")(t), n, o)
      );
    }
    function s(e, t, n, o) {
      var a = u(e, r("WAWebFormatFlatten")(t), o, 1 / 0),
        i = { mutatorIndex: 0, textLength: 0 };
      return d(a, n, i, function (e) {
        return e.ellipsifiable === !0;
      })
        ? { parseLimit: o, textLimit: i.textLength }
        : null;
    }
    function u(e, t, n, a) {
      n === void 0 && (n = 1 / 0);
      var i = r("WAWebFormatMatch")(e, t, n),
        l = i.length
          ? r("WAWebFormatParseTree")(e, r("WAWebFormatFilter")(i, t), t)
          : { children: [{ type: "text", value: e }] };
      return (
        a == null
          ? n < o("WAUnicodeUtils").numCodepoints(e) && c(l, { limit: n })
          : a <= 0
            ? (l.children = [])
            : Number.isFinite(a) && c(l, { limit: a }),
        l
      );
    }
    function c(e, t) {
      if (!(t.limit <= 0)) {
        if ("type" in e && e.type === "text") {
          var n = o("WAUnicodeUtils").numCodepoints(e.value);
          n >= t.limit
            ? ((e.value = o("WAUnicodeUtils")
                .toArray(e.value)
                .slice(0, t.limit)
                .join("")),
              (t.limit = 0))
            : (t.limit -= n);
          return;
        }
        if (!("type" in e && e.type === "delimiter")) {
          for (
            var r = 0;
            r < e.children.length && (c(e.children[r], t), !(t.limit <= 0));
          )
            r++;
          e.children = e.children.slice(0, r + 1);
        }
      }
    }
    function d(e, t, n, r) {
      if ("type" in e)
        return (
          e.type === "text" &&
            (n.textLength += o("WAUnicodeUtils").numCodepoints(e.value)),
          !1
        );
      if ("mutator" in e && r(e.mutator)) {
        if (n.mutatorIndex === t) return !0;
        n.mutatorIndex++;
      }
      for (var a of e.children) if (d(a, t, n, r)) return !0;
      return !1;
    }
    ((l.parse = e),
      (l.getLimitsBeforeEllipsifiableMutator = s),
      (l._parse = u));
  },
  98,
);
