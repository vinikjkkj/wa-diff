__d(
  "WAWebRichTextHeading.react",
  ["WAWebHeadingFormatMutator", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        base: { display: "x1rg5ohu", width: "xh8yej3", $$css: !0 },
        LEVEL_1: {
          fontSize: "x1q74xe4",
          lineHeight: "x1slxwg",
          marginBottom: "x12nagc",
          $$css: !0,
        },
        LEVEL_2: {
          fontSize: "x1aueamr",
          lineHeight: "xgif2c7",
          marginBottom: "x12nagc",
          $$css: !0,
        },
        LEVEL_3: {
          fontSize: "x1603h9y",
          lineHeight: "x101yacv",
          marginBottom: "x12nagc",
          $$css: !0,
        },
        LEVEL_4: {
          fontSize: "x1lkfr7t",
          lineHeight: "x19v9tvf",
          marginBottom: "x12nagc",
          $$css: !0,
        },
      };
    function d(e) {
      switch (e) {
        case o("WAWebHeadingFormatMutator").HeadingLevel.LEVEL_1:
          return [c.base, c.LEVEL_1];
        case o("WAWebHeadingFormatMutator").HeadingLevel.LEVEL_2:
          return [c.base, c.LEVEL_2];
        case o("WAWebHeadingFormatMutator").HeadingLevel.LEVEL_3:
          return [c.base, c.LEVEL_3];
        case o("WAWebHeadingFormatMutator").HeadingLevel.LEVEL_4:
          return [c.base, c.LEVEL_4];
      }
    }
    function m(t) {
      var n = t.level,
        o = t.text;
      return u.jsx(
        "span",
        babelHelpers.extends({}, (e || (e = r("stylex"))).props(d(n)), {
          children: o,
        }),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
