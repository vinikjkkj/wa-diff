__d(
  "BaseStyledButton.react",
  [
    "BaseStyledButtonWithLinkProps.react",
    "BaseStyledButtonWithoutLinkProps.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref", "linkProps"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(11),
        a,
        i,
        l;
      if (
        (n[0] !== t
          ? ((a = t.ref),
            (i = t.linkProps),
            (l = babelHelpers.objectWithoutPropertiesLoose(t, e)),
            (n[0] = t),
            (n[1] = a),
            (n[2] = i),
            (n[3] = l))
          : ((a = n[1]), (i = n[2]), (l = n[3])),
        i != null)
      ) {
        var s;
        return (
          n[4] !== a || n[5] !== i || n[6] !== l
            ? ((s = u.jsx(
                r("BaseStyledButtonWithLinkProps.react"),
                babelHelpers.extends({}, l, { linkProps: i, ref: a }),
              )),
              (n[4] = a),
              (n[5] = i),
              (n[6] = l),
              (n[7] = s))
            : (s = n[7]),
          s
        );
      }
      var c;
      return (
        n[8] !== a || n[9] !== l
          ? ((c = u.jsx(
              r("BaseStyledButtonWithoutLinkProps.react"),
              babelHelpers.extends({}, l, { ref: a }),
            )),
            (n[8] = a),
            (n[9] = l),
            (n[10] = c))
          : (c = n[10]),
        c
      );
    }
    l.default = c;
  },
  98,
);
