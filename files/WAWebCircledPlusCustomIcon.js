__d(
  "WAWebCircledPlusCustomIcon",
  ["WDSIconIcAdd.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["wrapperStyles"],
      s,
      u,
      c = u || (u = o("react")),
      d = {
        outlined: {
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          borderTopWidth: "x1ktv7sr",
          borderInlineEndWidth: "x142x0oa",
          borderBottomWidth: "xv7zg05",
          borderInlineStartWidth: "x12dgle5",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "xjgx3p0",
          borderInlineEndColor: "x1c7tatl",
          borderBottomColor: "xcigvqi",
          borderInlineStartColor: "xog9bda",
          $$css: !0,
        },
      };
    function m(t) {
      var n = t.wrapperStyles,
        o = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return c.jsx(
        "div",
        babelHelpers.extends(
          {},
          (s || (s = r("stylex"))).props(d.outlined, n),
          {
            children: c.jsx(
              r("WDSIconIcAdd.react"),
              babelHelpers.extends({}, o),
            ),
          },
        ),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
