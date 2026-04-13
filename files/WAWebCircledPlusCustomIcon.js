__d(
  "WAWebCircledPlusCustomIcon",
  ["WAWebPlusIcon.react", "react", "react-compiler-runtime", "stylex"],
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
      var n = o("react-compiler-runtime").c(10),
        a,
        i;
      n[0] !== t
        ? ((i = t.wrapperStyles),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l;
      n[3] !== i
        ? ((l = (s || (s = r("stylex"))).props(d.outlined, i)),
          (n[3] = i),
          (n[4] = l))
        : (l = n[4]);
      var u;
      n[5] !== a
        ? ((u = c.jsx(
            o("WAWebPlusIcon.react").PlusIcon,
            babelHelpers.extends({}, a),
          )),
          (n[5] = a),
          (n[6] = u))
        : (u = n[6]);
      var m;
      return (
        n[7] !== l || n[8] !== u
          ? ((m = c.jsx("div", babelHelpers.extends({}, l, { children: u }))),
            (n[7] = l),
            (n[8] = u),
            (n[9] = m))
          : (m = n[9]),
        m
      );
    }
    l.default = m;
  },
  98,
);
