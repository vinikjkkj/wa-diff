__d(
  "WAWebItalicMutatorComponent.react",
  ["WAWebCopyPasteSelectable.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        r = e.selectable,
        a = n === void 0 ? "" : n,
        i;
      return (
        t[0] !== a || t[1] !== r
          ? ((i = s.jsx(o("WAWebCopyPasteSelectable.react").SelectableEm, {
              selectable: r,
              appTextTemplate: "_${appText}_",
              children: a,
            })),
            (t[0] = a),
            (t[1] = r),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    l.default = u;
  },
  98,
);
