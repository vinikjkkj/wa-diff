__d(
  "WAWebChatInfoDrawerBlock.react",
  ["WAWebDrawerBlock.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        container: { paddingInlineStart: "x1c1uobl", $$css: !0 },
        block: {
          paddingInlineEnd: "xyri2b",
          borderTopWidth: "x972fbf",
          $$css: !0,
        },
      };
    function c(e) {
      var t;
      return s.jsx(
        r("WAWebDrawerBlock.react"),
        babelHelpers.extends({}, e, {
          separator: (t = e.separator) != null ? t : !1,
          xstyle: [e.xstyle, u.container],
          blockXstyle: [e.blockXstyle, u.block],
        }),
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
