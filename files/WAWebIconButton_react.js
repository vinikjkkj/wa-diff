__d(
  "WAWebIconButton.react",
  ["WAWebClickable.react", "WAWebUISpacing", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["icon", "ref"],
      s,
      u = s || (s = o("react")),
      c = {
        button: {
          borderStartStartRadius: "xr4gsrn",
          borderStartEndRadius: "xa83c8o",
          borderEndEndRadius: "x3oym20",
          borderEndStartRadius: "x1i84rja",
          height: "x1vqgdyp",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          flex: "x1okw0bk",
          cursor: "x1ypdohk",
          ":hover_backgroundColor": "x17gydlx",
          $$css: !0,
        },
        buttonNotClickable: { cursor: "x1h6gzvc", $$css: !0 },
        row: {
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
      };
    function d(t) {
      var n = t.icon,
        r = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return u.jsxs(
        o("WAWebClickable.react").Clickable,
        babelHelpers.extends({}, a, {
          xstyle: [
            c.button,
            c.row,
            n != null && o("WAWebUISpacing").uiPadding.start10,
            n != null && o("WAWebUISpacing").uiPadding.end2,
            a.xstyle,
            a.onClick == null && c.buttonNotClickable,
          ],
          ref: r,
          children: [n, a.children],
        }),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
