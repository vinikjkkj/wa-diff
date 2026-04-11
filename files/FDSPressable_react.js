__d(
  "FDSPressable.react",
  ["CometPressable.react", "MetaConfig", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s = ["disabled"],
      u,
      c = u || (u = o("react")),
      d = r("MetaConfig")._("338");
    function m(t) {
      var n = o("react-compiler-runtime").c(12),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l, u;
      if (n[3] !== a) {
        var m = a;
        ((u = m.disabled),
          (l = babelHelpers.objectWithoutPropertiesLoose(m, s)),
          (n[3] = a),
          (n[4] = l),
          (n[5] = u));
      } else ((l = n[4]), (u = n[5]));
      var p = u === void 0 ? !1 : u;
      if (d && p) {
        var _;
        return (
          n[6] !== i || n[7] !== l
            ? ((_ = c.jsx(
                r("CometPressable.react"),
                babelHelpers.extends({}, l, {
                  "aria-disabled": !0,
                  cursorDisabled: !0,
                  onContextMenu: void 0,
                  onFocusChange: void 0,
                  onFocusIn: void 0,
                  onFocusOut: void 0,
                  onFocusVisibleChange: void 0,
                  onHoverChange: void 0,
                  onHoverIn: void 0,
                  onHoverMove: void 0,
                  onHoverOut: void 0,
                  onPress: void 0,
                  onPressAction: void 0,
                  onPressChange: void 0,
                  onPressIn: void 0,
                  onPressOut: void 0,
                  ref: i,
                }),
              )),
              (n[6] = i),
              (n[7] = l),
              (n[8] = _))
            : (_ = n[8]),
          _
        );
      }
      var f;
      return (
        n[9] !== a || n[10] !== i
          ? ((f = c.jsx(
              r("CometPressable.react"),
              babelHelpers.extends({ ref: i }, a),
            )),
            (n[9] = a),
            (n[10] = i),
            (n[11] = f))
          : (f = n[11]),
        f
      );
    }
    l.default = m;
  },
  98,
);
