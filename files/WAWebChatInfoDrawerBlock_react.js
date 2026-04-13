__d(
  "WAWebChatInfoDrawerBlock.react",
  ["WAWebDrawerBlock.react", "react", "react-compiler-runtime"],
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
      var t,
        n = o("react-compiler-runtime").c(9),
        a = (t = e.separator) != null ? t : !1,
        i;
      n[0] !== e.xstyle
        ? ((i = [e.xstyle, u.container]), (n[0] = e.xstyle), (n[1] = i))
        : (i = n[1]);
      var l;
      n[2] !== e.blockXstyle
        ? ((l = [e.blockXstyle, u.block]), (n[2] = e.blockXstyle), (n[3] = l))
        : (l = n[3]);
      var c;
      return (
        n[4] !== e || n[5] !== a || n[6] !== i || n[7] !== l
          ? ((c = s.jsx(
              r("WAWebDrawerBlock.react"),
              babelHelpers.extends({}, e, {
                separator: a,
                xstyle: i,
                blockXstyle: l,
              }),
            )),
            (n[4] = e),
            (n[5] = a),
            (n[6] = i),
            (n[7] = l),
            (n[8] = c))
          : (c = n[8]),
        c
      );
    }
    l.default = c;
  },
  98,
);
