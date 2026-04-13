__d(
  "WAWebAdListEmpty.react",
  [
    "fbt",
    "WAWebBox.react",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        paddingHoriz24: {
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "xyo0t3i",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        paddingTop16: { paddingTop: "x1p57kb1", $$css: !0 },
      };
    function d() {
      var e = o("react-compiler-runtime").c(2);
      r("vulture")("z2prDjpcz-yUV4HaviGYldWfVMk=");
      var t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = [c.paddingHoriz24, c.paddingTop16]), (e[0] = t))
        : (t = e[0]);
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = u.jsx(r("WAWebBox.react"), {
              xstyle: t,
              children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                children: s._(/*BTDS*/ "You have not created an ad recently."),
              }),
            })),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    l.default = d;
  },
  226,
);
