__d(
  "WAWebForwardedInfoHeaderLink.react",
  ["WAWebText.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.children,
        r = e.onClick,
        a = e.testId,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { className: "x1tiyuxx x1nbhmlj" }), (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] !== n
        ? ((l = s.jsx(o("WAWebText.react").WAWebTextSmall, {
            weight: "semibold",
            color: "link",
            children: n,
          })),
          (t[1] = n),
          (t[2] = l))
        : (l = t[2]);
      var u;
      t[3] !== r || t[4] !== l
        ? ((u = s.jsx(o("WAWebText.react").WAWebClickableText, {
            onClick: r,
            children: l,
          })),
          (t[3] = r),
          (t[4] = l),
          (t[5] = u))
        : (u = t[5]);
      var c;
      return (
        t[6] !== u || t[7] !== a
          ? ((c = s.jsx(
              "div",
              babelHelpers.extends({ "data-testid": void 0 }, i, {
                children: u,
              }),
            )),
            (t[6] = u),
            (t[7] = a),
            (t[8] = c))
          : (c = t[8]),
        c
      );
    }
    l.default = u;
  },
  98,
);
