__d(
  "WAWebProfileSectionHeader.react",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.showDivider,
        r = e.testId,
        a = e.title,
        i = n === void 0 ? !0 : n,
        l;
      t[0] !== i
        ? ((l = {
            0: { className: "x1380le5 x10kmny3 x16ovd2e x1phvje8" },
            1: {
              className:
                "x1380le5 x10kmny3 x1phvje8 xt8cgyo x13fuv20 xx42vgk x1p57kb1",
            },
          }[!!i << 0]),
          (t[0] = i),
          (t[1] = l))
        : (l = t[1]);
      var u;
      t[2] !== a
        ? ((u =
            a != null &&
            s.jsx("span", {
              className: "x7whbhp x1s688f xunn93x x1ud3kw6 x1phvje8",
              children: a,
            })),
          (t[2] = a),
          (t[3] = u))
        : (u = t[3]);
      var c;
      return (
        t[4] !== l || t[5] !== u || t[6] !== r
          ? ((c = s.jsx(
              "div",
              babelHelpers.extends({ "data-testid": void 0 }, l, {
                children: u,
              }),
            )),
            (t[4] = l),
            (t[5] = u),
            (t[6] = r),
            (t[7] = c))
          : (c = t[7]),
        c
      );
    }
    l.default = u;
  },
  98,
);
