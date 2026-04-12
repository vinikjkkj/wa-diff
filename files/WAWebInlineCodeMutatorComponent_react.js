__d(
  "WAWebInlineCodeMutatorComponent.react",
  ["WAWebCopyPasteSelectable.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.children,
        n = t === void 0 ? "" : t,
        r = e.quoted,
        a = e.selectable;
      return s.jsx(o("WAWebCopyPasteSelectable.react").SelectableCode, {
        selectable: a,
        appTextTemplate: "`${appText}`",
        className: {
          0: "xbrszos xea3l6g x18isctg x2q3nzr x1bu39yj x1bvqhpb x181vq82 x1uc92m x1gxa6cn xa0aww2",
          1: "xbrszos xea3l6g x18isctg x2q3nzr x1bu39yj x15rks2t x181vq82 x1uc92m x1gxa6cn xa0aww2",
        }[!!r << 0],
        children: n,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
