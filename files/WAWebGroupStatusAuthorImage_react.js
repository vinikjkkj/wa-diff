__d(
  "WAWebGroupStatusAuthorImage.react",
  ["WAWebDetailImage.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.primaryContactId,
        r = e.secondaryContactId,
        a,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { className: "x1n2onr6 x78zum5 x1q0g3np x100vrsf x1vqgdyp" }),
          (i = { className: "x1n2onr6 xgw9rtw x1r4y97" }),
          (t[0] = a),
          (t[1] = i))
        : ((a = t[0]), (i = t[1]));
      var l;
      t[2] !== r
        ? ((l = s.jsx(
            "div",
            babelHelpers.extends({}, i, {
              children: s.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: r,
                size: 28,
              }),
            }),
          )),
          (t[2] = r),
          (t[3] = l))
        : (l = t[3]);
      var u;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = { className: "x10l6tqk x1tk7jg1" }), (t[4] = u))
        : (u = t[4]);
      var c;
      t[5] !== n
        ? ((c = s.jsx(
            "div",
            babelHelpers.extends({}, u, {
              children: s.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: n,
                size: 28,
              }),
            }),
          )),
          (t[5] = n),
          (t[6] = c))
        : (c = t[6]);
      var d;
      return (
        t[7] !== l || t[8] !== c
          ? ((d = s.jsxs(
              "div",
              babelHelpers.extends({ "data-testid": void 0 }, a, {
                children: [l, c],
              }),
            )),
            (t[7] = l),
            (t[8] = c),
            (t[9] = d))
          : (d = t[9]),
        d
      );
    }
    l.default = u;
  },
  98,
);
