__d(
  "WAWebInlineCodeMutatorComponent.react",
  ["WAWebCopyPasteSelectable.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.children,
        r = e.quoted,
        a = e.selectable,
        i = n === void 0 ? "" : n,
        l;
      t[0] !== r
        ? ((l = {
            0: "xbrszos xea3l6g x18isctg x2q3nzr x1bu39yj x1bvqhpb x181vq82 x1uc92m x1gxa6cn xa0aww2",
            1: "xbrszos xea3l6g x18isctg x2q3nzr x1bu39yj x15rks2t x181vq82 x1uc92m x1gxa6cn xa0aww2",
          }[!!r << 0]),
          (t[0] = r),
          (t[1] = l))
        : (l = t[1]);
      var u;
      return (
        t[2] !== i || t[3] !== a || t[4] !== l
          ? ((u = s.jsx(o("WAWebCopyPasteSelectable.react").SelectableCode, {
              selectable: a,
              appTextTemplate: "`${appText}`",
              className: l,
              children: i,
            })),
            (t[2] = i),
            (t[3] = a),
            (t[4] = l),
            (t[5] = u))
          : (u = t[5]),
        u
      );
    }
    l.default = u;
  },
  98,
);
