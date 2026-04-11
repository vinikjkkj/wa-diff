__d(
  "WAWebMediaEditorToolbarTextBackground.react",
  [
    "fbt",
    "WAWebCheckmarkIcon.react",
    "WAWebMediaEditorToolbarButton.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        checkedSvg: {
          position: "x10l6tqk",
          top: "x1pdr0v7",
          width: "x1kky2od",
          height: "xlup9mm",
          color: "x1r3oa16",
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.checked,
        r = e.onBackgroundToggle,
        a;
      t[0] !== n
        ? ((a = {
            0: {
              className:
                "x1n2onr6 x9f619 xw4jnvo x1qx5ct2 x1ktv7sr x142x0oa xv7zg05 x12dgle5 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1uebkx7 xp93uhy x1yepkla x19mw7rs x1c9tyrk xeusxvb x1pahc9y x1ertn4p",
            },
            1: {
              className:
                "x1518k6t x1n2onr6 x9f619 xw4jnvo x1qx5ct2 x1ktv7sr x142x0oa xv7zg05 x12dgle5 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1uebkx7 xp93uhy x1yepkla x19mw7rs x1c9tyrk xeusxvb x1pahc9y x1ertn4p",
            },
          }[!!n << 0]),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i;
      t[2] !== n
        ? ((i = n
            ? u.jsx("div", {
                children: u.jsx(o("WAWebCheckmarkIcon.react").CheckmarkIcon, {
                  iconXstyle: c.checkedSvg,
                }),
              })
            : u.jsx("div", {
                className:
                  "x10l6tqk xs7f9wi xaoy8p5 x1dpw5q9 x10msahz x1c9tyrk xeusxvb x1pahc9y x1ertn4p",
              })),
          (t[2] = n),
          (t[3] = i))
        : (i = t[3]);
      var l;
      t[4] !== a || t[5] !== i
        ? ((l = u.jsx("div", babelHelpers.extends({}, a, { children: i }))),
          (t[4] = a),
          (t[5] = i),
          (t[6] = l))
        : (l = t[6]);
      var d = l,
        m;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s._(/*BTDS*/ "Background")), (t[7] = m))
        : (m = t[7]);
      var p;
      return (
        t[8] !== d || t[9] !== r
          ? ((p = u.jsx(
              o("WAWebMediaEditorToolbarButton.react").ToolbarButton,
              { icon: d, onClick: r, children: m },
            )),
            (t[8] = d),
            (t[9] = r),
            (t[10] = p))
          : (p = t[10]),
        p
      );
    }
    l.default = d;
  },
  226,
);
