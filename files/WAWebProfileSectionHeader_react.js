__d(
  "WAWebProfileSectionHeader.react",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.showDivider,
        n = t === void 0 ? !0 : t,
        r = e.testId,
        o = e.title;
      return s.jsx(
        "div",
        babelHelpers.extends(
          { "data-testid": void 0 },
          {
            0: { className: "x1380le5 x10kmny3 x16ovd2e x1phvje8" },
            1: {
              className:
                "x1380le5 x10kmny3 x1phvje8 xt8cgyo x13fuv20 xx42vgk x1p57kb1",
            },
          }[!!n << 0],
          {
            children:
              o != null &&
              s.jsx("span", {
                className: "x7whbhp x1s688f xunn93x x1ud3kw6 x1phvje8",
                children: o,
              }),
          },
        ),
      );
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
