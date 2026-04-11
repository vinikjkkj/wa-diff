__d(
  "WAWebTerminatedGroupMsgBar.react",
  ["fbt", "WAWebFlex.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(2),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { className: "x126k92a" }), (e[0] = t))
        : (t = e[0]);
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = u.jsx(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              children: u.jsx(
                "span",
                babelHelpers.extends({}, t, {
                  "data-testid": void 0,
                  children: s._(/*BTDS*/ "This group is no longer available"),
                }),
              ),
            })),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    l.default = c;
  },
  226,
);
