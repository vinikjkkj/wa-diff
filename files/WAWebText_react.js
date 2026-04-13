__d(
  "WAWebText.react",
  [
    "WAWebABProps",
    "WAWebBox.react",
    "WAWebStylesEnv",
    "WAWebUnstyledButton.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["children", "color", "testid", "textAlign", "textWrap"],
      s = ["ref"],
      u = ["color", "textAlign", "weight", "xstyle"],
      c = ["ref"],
      d = ["xstyle"],
      m = ["children", "color", "textAlign", "weight"],
      p = ["ref"],
      _ = ["xstyle"],
      f = ["children", "color", "textAlign", "weight"],
      g = ["ref"],
      h = ["xstyle"],
      y = ["children", "color", "textAlign", "weight"],
      C = ["ref"],
      b = ["xstyle"],
      v = ["children", "color", "textAlign", "weight"],
      S = ["ref"],
      R = ["xstyle"],
      L = ["children", "color", "textAlign", "weight"],
      E = ["ref"],
      k = [
        "className_DONOTUSE",
        "color",
        "highlightOnHover",
        "weight",
        "xstyle",
        "xstyle",
      ],
      I = ["ref"],
      T = ["color", "textAlign", "weight", "xstyle"],
      D = ["ref"],
      x = ["xstyle"],
      $ = ["children", "color", "textAlign", "weight"],
      P = ["ref"],
      N = ["xstyle"],
      M = ["children", "color", "textAlign", "weight"],
      w = ["ref"],
      A = ["xstyle"],
      F = ["children", "color", "textAlign", "weight"],
      O = ["ref"],
      B = ["xstyle"],
      W = ["children", "color", "textAlign", "weight"],
      q,
      U = q || (q = o("react")),
      V = {
        light: { fontWeight: "x1iikomf", $$css: !0 },
        normal: { fontWeight: "x1fcty0u", $$css: !0 },
        medium: { fontWeight: "xk50ysn", $$css: !0 },
        semibold: { fontWeight: "x1s688f", $$css: !0 },
        bold: { fontWeight: "x117nqv4", $$css: !0 },
        inherit: { fontWeight: "x1pd3egz", $$css: !0 },
      },
      H = {
        teal: { color: "xo1mcw5", $$css: !0 },
        critical: { color: "x30a034", $$css: !0 },
        primary: { color: "x14ug900", $$css: !0 },
        secondary: { color: "xhslqc4", $$css: !0 },
        secondaryEmphasized: { color: "xhslqc4", $$css: !0 },
        success: { color: "xo1mcw5", $$css: !0 },
        secondaryLighter: { color: "xhslqc4", $$css: !0 },
        link: { color: "x1ph7ams", $$css: !0 },
        white: { color: "xzqyxu6", $$css: !0 },
        forcedPrimary: { color: "xw2npq5", $$css: !0 },
        wdsContentDefault: { color: "x14ug900", $$css: !0 },
        wdsContentDeemphasized: { color: "xhslqc4", $$css: !0 },
        wdsAccent: { color: "x1v5yvga", $$css: !0 },
        wdsContentDisabled: { color: "x18cpw0e", $$css: !0 },
        wdsSecondaryNegativeEmphasized: { color: "xqnyt8g", $$css: !0 },
      },
      G = {
        start: { textAlign: "x1yc453h", $$css: !0 },
        center: { textAlign: "x2b8uid", $$css: !0 },
        end: { textAlign: "xp4054r", $$css: !0 },
      },
      z = {
        isOSMac: { fontSize: "x1jchvi3", lineHeight: "x1pujyh6", $$css: !0 },
      };
    function j(t) {
      var n = t.children,
        r = t.color,
        a = t.testid,
        i = t.textAlign,
        l = t.textWrap,
        s = babelHelpers.objectWithoutPropertiesLoose(t, e),
        u =
          r === "secondaryEmphasized" ||
          r === "secondary" ||
          r === "secondaryLighter" ||
          r === "wdsContentDeemphasized"
            ? "contentDeemphasized"
            : r === "teal" || r === "success"
              ? "contentActionEmphasized"
              : r === "link"
                ? "contentExternalLink"
                : r === "critical"
                  ? "secondaryNegative"
                  : r === "white"
                    ? "persistentAlwaysWhite"
                    : r === "wdsAccent"
                      ? "accent"
                      : r === "wdsContentDisabled"
                        ? "contentDisabled"
                        : r === "wdsSecondaryNegativeEmphasized"
                          ? "secondaryNegativeEmphasized"
                          : r === "forcedPrimary"
                            ? "persistentAlwaysBlack"
                            : r === "primary" ||
                                r === "wdsContentDefault" ||
                                r === null ||
                                r === void 0
                              ? "contentDefault"
                              : (function () {
                                  throw Error(
                                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                      r,
                                  );
                                })(),
        c = o("WAWebABProps").getABPropConfigValue("wds_web_roboto"),
        d = l === "ellipsis" ? 1 : null;
      return {
        textAlign: i,
        children: n,
        colorName: u,
        dir: s.dir,
        robotoPropValue: c,
        maxLines: d,
      };
    }
    function K(e) {
      var t,
        n = o("react-compiler-runtime").c(19),
        a,
        i;
      n[0] !== e
        ? ((i = e.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(e, s)),
          (n[0] = e),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l, c, d, m, p;
      if (n[3] !== a) {
        var _ = a;
        ((c = _.color),
          (m = _.textAlign),
          (d = _.weight),
          (p = _.xstyle),
          (l = babelHelpers.objectWithoutPropertiesLoose(_, u)),
          (n[3] = a),
          (n[4] = l),
          (n[5] = c),
          (n[6] = d),
          (n[7] = m),
          (n[8] = p));
      } else ((l = n[4]), (c = n[5]), (d = n[6]), (m = n[7]), (p = n[8]));
      var f = d === void 0 ? "normal" : d,
        g = c != null ? H[c] : null,
        h = V[f],
        y = m != null ? G[m] : null,
        C = (t = l.as) != null ? t : "div",
        b;
      n[9] !== y || n[10] !== g || n[11] !== h || n[12] !== p
        ? ((b = [p, h, g, y]),
          (n[9] = y),
          (n[10] = g),
          (n[11] = h),
          (n[12] = p),
          (n[13] = b))
        : (b = n[13]);
      var v;
      return (
        n[14] !== l || n[15] !== i || n[16] !== C || n[17] !== b
          ? ((v = U.jsx(
              r("WAWebBox.react"),
              babelHelpers.extends({}, l, {
                as: C,
                labelFor: l.labelFor,
                ref: i,
                xstyle: b,
              }),
            )),
            (n[14] = l),
            (n[15] = i),
            (n[16] = C),
            (n[17] = b),
            (n[18] = v))
          : (v = n[18]),
        v
      );
    }
    var Q = {
      large: { fontSize: "xlm9qay", lineHeight: "x1w7sdjq", $$css: !0 },
    };
    function X(e) {
      var t,
        n = o("react-compiler-runtime").c(23),
        a,
        i;
      n[0] !== e
        ? ((i = e.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(e, c)),
          (n[0] = e),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l, s, u;
      if (n[3] !== a) {
        var p,
          _ = a;
        ((u = _.xstyle),
          (s = babelHelpers.objectWithoutPropertiesLoose(_, d)),
          (l = j(
            babelHelpers.extends({}, s, {
              color: (p = a.color) != null ? p : "primary",
            }),
          )),
          (n[3] = a),
          (n[4] = l),
          (n[5] = s),
          (n[6] = u));
      } else ((l = n[4]), (s = n[5]), (u = n[6]));
      var f = l;
      if (f != null) {
        var g;
        if (n[7] !== s) {
          var h = s,
            y = h.children,
            C = h.color,
            b = h.textAlign,
            v = h.weight,
            S = babelHelpers.objectWithoutPropertiesLoose(h, m);
          ((g = S), (n[7] = s), (n[8] = g));
        } else g = n[8];
        var R;
        n[9] !== f
          ? ((R = U.jsx(
              r("WDSText.react"),
              babelHelpers.extends({ type: "Headline2" }, f),
            )),
            (n[9] = f),
            (n[10] = R))
          : (R = n[10]);
        var L;
        return (
          n[11] !== g || n[12] !== i || n[13] !== R || n[14] !== u
            ? ((L = U.jsx(
                r("WAWebBox.react"),
                babelHelpers.extends({}, g, { ref: i, xstyle: u, children: R }),
              )),
              (n[11] = g),
              (n[12] = i),
              (n[13] = R),
              (n[14] = u),
              (n[15] = L))
            : (L = n[15]),
          L
        );
      }
      var E = (t = a.color) != null ? t : "primary",
        k;
      n[16] !== u
        ? ((k = [u, Q.large]), (n[16] = u), (n[17] = k))
        : (k = n[17]);
      var I;
      return (
        n[18] !== i || n[19] !== E || n[20] !== k || n[21] !== s
          ? ((I = U.jsx(
              K,
              babelHelpers.extends({}, s, { color: E, ref: i, xstyle: k }),
            )),
            (n[18] = i),
            (n[19] = E),
            (n[20] = k),
            (n[21] = s),
            (n[22] = I))
          : (I = n[22]),
        I
      );
    }
    var Y = {
      title: { fontSize: "x1lkfr7t", lineHeight: "xdbd6k5", $$css: !0 },
    };
    function J(e) {
      var t,
        n = o("react-compiler-runtime").c(22),
        a,
        i;
      n[0] !== e
        ? ((i = e.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(e, p)),
          (n[0] = e),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l, s, u;
      if (n[3] !== a) {
        var c,
          d = a;
        ((u = d.xstyle),
          (s = babelHelpers.objectWithoutPropertiesLoose(d, _)),
          (l = j(
            babelHelpers.extends({}, s, {
              color: (c = a.color) != null ? c : "primary",
            }),
          )),
          (n[3] = a),
          (n[4] = l),
          (n[5] = s),
          (n[6] = u));
      } else ((l = n[4]), (s = n[5]), (u = n[6]));
      var m = l;
      if (m != null) {
        var g;
        if (n[7] !== s) {
          var h = s,
            y = h.children,
            C = h.color,
            b = h.textAlign,
            v = h.weight,
            S = babelHelpers.objectWithoutPropertiesLoose(h, f);
          ((g = S), (n[7] = s), (n[8] = g));
        } else g = n[8];
        var R = s.weight === "semibold" || s.weight === "bold",
          L;
        return (
          n[9] !== g || n[10] !== R || n[11] !== i || n[12] !== m || n[13] !== u
            ? ((L = R
                ? U.jsx(
                    r("WAWebBox.react"),
                    babelHelpers.extends({}, g, {
                      ref: i,
                      xstyle: u,
                      children: U.jsx(
                        r("WDSText.react"),
                        babelHelpers.extends({ type: "Body1Emphasized" }, m),
                      ),
                    }),
                  )
                : U.jsx(
                    r("WAWebBox.react"),
                    babelHelpers.extends({}, g, {
                      ref: i,
                      xstyle: u,
                      children: U.jsx(
                        r("WDSText.react"),
                        babelHelpers.extends({ type: "Body1" }, m),
                      ),
                    }),
                  )),
              (n[9] = g),
              (n[10] = R),
              (n[11] = i),
              (n[12] = m),
              (n[13] = u),
              (n[14] = L))
            : (L = n[14]),
          L
        );
      }
      var E = (t = a.color) != null ? t : "primary",
        k;
      n[15] !== u
        ? ((k = [u, Y.title, o("WAWebStylesEnv").isOSMac ? z.isOSMac : null]),
          (n[15] = u),
          (n[16] = k))
        : (k = n[16]);
      var I;
      return (
        n[17] !== i || n[18] !== E || n[19] !== k || n[20] !== s
          ? ((I = U.jsx(
              K,
              babelHelpers.extends({}, s, { color: E, ref: i, xstyle: k }),
            )),
            (n[17] = i),
            (n[18] = E),
            (n[19] = k),
            (n[20] = s),
            (n[21] = I))
          : (I = n[21]),
        I
      );
    }
    var Z = {
      muted: { fontSize: "x1f6kntn", lineHeight: "x16h55sf", $$css: !0 },
    };
    function ee(e) {
      var t,
        n = o("react-compiler-runtime").c(22),
        a,
        i;
      n[0] !== e
        ? ((i = e.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(e, g)),
          (n[0] = e),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l, s, u;
      if (n[3] !== a) {
        var c,
          d = a;
        ((u = d.xstyle),
          (s = babelHelpers.objectWithoutPropertiesLoose(d, h)),
          (l = j(
            babelHelpers.extends({}, s, {
              color: (c = a.color) != null ? c : "secondaryEmphasized",
            }),
          )),
          (n[3] = a),
          (n[4] = l),
          (n[5] = s),
          (n[6] = u));
      } else ((l = n[4]), (s = n[5]), (u = n[6]));
      var m = l;
      if (m != null) {
        var p;
        if (n[7] !== s) {
          var _ = s,
            f = _.children,
            C = _.color,
            b = _.textAlign,
            v = _.weight,
            S = babelHelpers.objectWithoutPropertiesLoose(_, y);
          ((p = S), (n[7] = s), (n[8] = p));
        } else p = n[8];
        var R = s.weight === "semibold" || s.weight === "bold",
          L;
        return (
          n[9] !== p || n[10] !== R || n[11] !== i || n[12] !== m || n[13] !== u
            ? ((L = R
                ? U.jsx(
                    r("WAWebBox.react"),
                    babelHelpers.extends({}, p, {
                      ref: i,
                      xstyle: u,
                      children: U.jsx(
                        r("WDSText.react"),
                        babelHelpers.extends({ type: "Body2Emphasized" }, m),
                      ),
                    }),
                  )
                : U.jsx(
                    r("WAWebBox.react"),
                    babelHelpers.extends({}, p, {
                      ref: i,
                      xstyle: u,
                      children: U.jsx(
                        r("WDSText.react"),
                        babelHelpers.extends({ type: "Body2" }, m),
                      ),
                    }),
                  )),
              (n[9] = p),
              (n[10] = R),
              (n[11] = i),
              (n[12] = m),
              (n[13] = u),
              (n[14] = L))
            : (L = n[14]),
          L
        );
      }
      var E = (t = a.color) != null ? t : "secondaryEmphasized",
        k;
      n[15] !== u
        ? ((k = [u, Z.muted]), (n[15] = u), (n[16] = k))
        : (k = n[16]);
      var I;
      return (
        n[17] !== i || n[18] !== E || n[19] !== k || n[20] !== s
          ? ((I = U.jsx(
              K,
              babelHelpers.extends({}, s, { color: E, ref: i, xstyle: k }),
            )),
            (n[17] = i),
            (n[18] = E),
            (n[19] = k),
            (n[20] = s),
            (n[21] = I))
          : (I = n[21]),
        I
      );
    }
    var te = {
      sectionTitle: { fontSize: "x1f6kntn", lineHeight: "x1u7k74", $$css: !0 },
    };
    function ne(e) {
      var t,
        n = o("react-compiler-runtime").c(22),
        a,
        i;
      n[0] !== e
        ? ((i = e.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(e, C)),
          (n[0] = e),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l, s, u;
      if (n[3] !== a) {
        var c,
          d = a;
        ((u = d.xstyle),
          (s = babelHelpers.objectWithoutPropertiesLoose(d, b)),
          (l = j(
            babelHelpers.extends({}, s, {
              color: (c = a.color) != null ? c : "teal",
            }),
          )),
          (n[3] = a),
          (n[4] = l),
          (n[5] = s),
          (n[6] = u));
      } else ((l = n[4]), (s = n[5]), (u = n[6]));
      var m = l;
      if (m != null) {
        var p;
        if (n[7] !== s) {
          var _ = s,
            f = _.children,
            g = _.color,
            h = _.textAlign,
            y = _.weight,
            S = babelHelpers.objectWithoutPropertiesLoose(_, v);
          ((p = S), (n[7] = s), (n[8] = p));
        } else p = n[8];
        var R = s.weight === "semibold" || s.weight === "bold",
          L;
        return (
          n[9] !== p || n[10] !== R || n[11] !== i || n[12] !== m || n[13] !== u
            ? ((L = R
                ? U.jsx(
                    r("WAWebBox.react"),
                    babelHelpers.extends({}, p, {
                      ref: i,
                      xstyle: u,
                      children: U.jsx(
                        r("WDSText.react"),
                        babelHelpers.extends({ type: "Body2Emphasized" }, m),
                      ),
                    }),
                  )
                : U.jsx(
                    r("WAWebBox.react"),
                    babelHelpers.extends({}, p, {
                      ref: i,
                      xstyle: u,
                      children: U.jsx(
                        r("WDSText.react"),
                        babelHelpers.extends({ type: "Body2" }, m),
                      ),
                    }),
                  )),
              (n[9] = p),
              (n[10] = R),
              (n[11] = i),
              (n[12] = m),
              (n[13] = u),
              (n[14] = L))
            : (L = n[14]),
          L
        );
      }
      var E = (t = a.color) != null ? t : "teal",
        k;
      n[15] !== u
        ? ((k = [u, te.sectionTitle]), (n[15] = u), (n[16] = k))
        : (k = n[16]);
      var I;
      return (
        n[17] !== i || n[18] !== E || n[19] !== k || n[20] !== s
          ? ((I = U.jsx(
              K,
              babelHelpers.extends({}, s, { color: E, ref: i, xstyle: k }),
            )),
            (n[17] = i),
            (n[18] = E),
            (n[19] = k),
            (n[20] = s),
            (n[21] = I))
          : (I = n[21]),
        I
      );
    }
    var re = {
      small: { fontSize: "x1nxh6w3", lineHeight: "xcgms0a", $$css: !0 },
    };
    function oe(e) {
      var t,
        n = o("react-compiler-runtime").c(22),
        a,
        i;
      n[0] !== e
        ? ((i = e.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(e, S)),
          (n[0] = e),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l, s, u;
      if (n[3] !== a) {
        var c,
          d = a;
        ((u = d.xstyle),
          (s = babelHelpers.objectWithoutPropertiesLoose(d, R)),
          (l = j(
            babelHelpers.extends({}, s, {
              color: (c = a.color) != null ? c : "secondary",
            }),
          )),
          (n[3] = a),
          (n[4] = l),
          (n[5] = s),
          (n[6] = u));
      } else ((l = n[4]), (s = n[5]), (u = n[6]));
      var m = l;
      if (m != null) {
        var p;
        if (n[7] !== s) {
          var _ = s,
            f = _.children,
            g = _.color,
            h = _.textAlign,
            y = _.weight,
            C = babelHelpers.objectWithoutPropertiesLoose(_, L);
          ((p = C), (n[7] = s), (n[8] = p));
        } else p = n[8];
        var b = s.weight === "semibold" || s.weight === "bold",
          v;
        return (
          n[9] !== p || n[10] !== b || n[11] !== i || n[12] !== m || n[13] !== u
            ? ((v = b
                ? U.jsx(
                    r("WAWebBox.react"),
                    babelHelpers.extends({}, p, {
                      ref: i,
                      xstyle: u,
                      children: U.jsx(
                        r("WDSText.react"),
                        babelHelpers.extends({ type: "Body2Emphasized" }, m),
                      ),
                    }),
                  )
                : U.jsx(
                    r("WAWebBox.react"),
                    babelHelpers.extends({}, p, {
                      ref: i,
                      xstyle: u,
                      children: U.jsx(
                        r("WDSText.react"),
                        babelHelpers.extends({ type: "Body2" }, m),
                      ),
                    }),
                  )),
              (n[9] = p),
              (n[10] = b),
              (n[11] = i),
              (n[12] = m),
              (n[13] = u),
              (n[14] = v))
            : (v = n[14]),
          v
        );
      }
      var E = (t = a.color) != null ? t : "secondary",
        k;
      n[15] !== u
        ? ((k = [u, re.small]), (n[15] = u), (n[16] = k))
        : (k = n[16]);
      var I;
      return (
        n[17] !== i || n[18] !== E || n[19] !== k || n[20] !== s
          ? ((I = U.jsx(
              K,
              babelHelpers.extends({}, s, { color: E, ref: i, xstyle: k }),
            )),
            (n[17] = i),
            (n[18] = E),
            (n[19] = k),
            (n[20] = s),
            (n[21] = I))
          : (I = n[21]),
        I
      );
    }
    var ae = {
        teal: { color: "x1v5yvga", $$css: !0 },
        blue: { color: "x1ph7ams", $$css: !0 },
        green: { color: "xo1mcw5", $$css: !0 },
        primary: { color: "x14ug900", $$css: !0 },
        actionEmphasized: { color: "xo1mcw5", $$css: !0 },
        disabled: { color: "x18cpw0e", $$css: !0 },
      },
      ie = {
        teal: { ":hover_color": "x7fdv2", $$css: !0 },
        blue: { ":hover_color": "xa9mtye", $$css: !0 },
        green: { ":hover_color": "xyla9g4", $$css: !0 },
        primary: { ":hover_color": "xxxijta", $$css: !0 },
        actionEmphasized: { ":hover_color": "xyla9g4", $$css: !0 },
        disabled: { ":hover_color": "x5ui1cc", $$css: !0 },
      };
    function le(e) {
      var t = o("react-compiler-runtime").c(17),
        n,
        a;
      t[0] !== e
        ? ((a = e.ref),
          (n = babelHelpers.objectWithoutPropertiesLoose(e, E)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = a))
        : ((n = t[1]), (a = t[2]));
      var i, l, s, u, c;
      if (t[3] !== n) {
        var d = n,
          m = d.className_DONOTUSE,
          p = d.color,
          _ = d.highlightOnHover,
          f = d.weight,
          g = d.xstyle,
          h = d.xstyle,
          y = babelHelpers.objectWithoutPropertiesLoose(d, k);
        ((s = p),
          (l = _),
          (u = f),
          (c = h),
          (i = y),
          (t[3] = n),
          (t[4] = i),
          (t[5] = l),
          (t[6] = s),
          (t[7] = u),
          (t[8] = c));
      } else ((i = t[4]), (l = t[5]), (s = t[6]), (u = t[7]), (c = t[8]));
      var C = s === void 0 ? "blue" : s,
        b = u === void 0 ? "medium" : u,
        v = V[b],
        S = l === !0 ? ie[C] : ae[C],
        R;
      t[9] !== S || t[10] !== v || t[11] !== c
        ? ((R = [c, v, S]), (t[9] = S), (t[10] = v), (t[11] = c), (t[12] = R))
        : (R = t[12]);
      var L;
      return (
        t[13] !== i || t[14] !== a || t[15] !== R
          ? ((L = U.jsx(
              r("WAWebUnstyledButton.react"),
              babelHelpers.extends({}, i, { xstyle: R, ref: a }),
            )),
            (t[13] = i),
            (t[14] = a),
            (t[15] = R),
            (t[16] = L))
          : (L = t[16]),
        L
      );
    }
    function se(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        a = e.color,
        i = H[a],
        l;
      return (
        t[0] !== n || t[1] !== i
          ? ((l = U.jsx(r("WAWebBox.react"), {
              as: "span",
              xstyle: i,
              children: n,
            })),
            (t[0] = n),
            (t[1] = i),
            (t[2] = l))
          : (l = t[2]),
        l
      );
    }
    function ue(e) {
      var t,
        n = o("react-compiler-runtime").c(19),
        a,
        i;
      n[0] !== e
        ? ((i = e.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(e, I)),
          (n[0] = e),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l, s, u, c, d;
      if (n[3] !== a) {
        var m = a;
        ((s = m.color),
          (c = m.textAlign),
          (u = m.weight),
          (d = m.xstyle),
          (l = babelHelpers.objectWithoutPropertiesLoose(m, T)),
          (n[3] = a),
          (n[4] = l),
          (n[5] = s),
          (n[6] = u),
          (n[7] = c),
          (n[8] = d));
      } else ((l = n[4]), (s = n[5]), (u = n[6]), (c = n[7]), (d = n[8]));
      var p = u === void 0 ? "normal" : u,
        _ = s != null ? H[s] : null,
        f = V[p],
        g = c != null ? G[c] : null,
        h = (t = l.as) != null ? t : "div",
        y;
      n[9] !== g || n[10] !== _ || n[11] !== f || n[12] !== d
        ? ((y = [f, _, g, d]),
          (n[9] = g),
          (n[10] = _),
          (n[11] = f),
          (n[12] = d),
          (n[13] = y))
        : (y = n[13]);
      var C;
      return (
        n[14] !== l || n[15] !== i || n[16] !== h || n[17] !== y
          ? ((C = U.jsx(
              r("WAWebBox.react"),
              babelHelpers.extends({}, l, {
                as: h,
                labelFor: l.labelFor,
                ref: i,
                xstyle: y,
              }),
            )),
            (n[14] = l),
            (n[15] = i),
            (n[16] = h),
            (n[17] = y),
            (n[18] = C))
          : (C = n[18]),
        C
      );
    }
    var ce = {
      style: { fontSize: "x6prxxf", lineHeight: "x1o2sk6j", $$css: !0 },
    };
    function de(e) {
      var t,
        n = o("react-compiler-runtime").c(22),
        a,
        i;
      n[0] !== e
        ? ((i = e.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(e, D)),
          (n[0] = e),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l, s, u;
      if (n[3] !== a) {
        var c = a;
        ((u = c.xstyle),
          (s = babelHelpers.objectWithoutPropertiesLoose(c, x)),
          (l = j(s)),
          (n[3] = a),
          (n[4] = l),
          (n[5] = s),
          (n[6] = u));
      } else ((l = n[4]), (s = n[5]), (u = n[6]));
      var d = l;
      if (d != null) {
        var m;
        if (n[7] !== s) {
          var p = s,
            _ = p.children,
            f = p.color,
            g = p.textAlign,
            h = p.weight,
            y = babelHelpers.objectWithoutPropertiesLoose(p, $);
          ((m = y), (n[7] = s), (n[8] = m));
        } else m = n[8];
        var C = s.weight === "semibold" || s.weight === "bold",
          b;
        return (
          n[9] !== m || n[10] !== C || n[11] !== i || n[12] !== d || n[13] !== u
            ? ((b = C
                ? U.jsx(
                    r("WAWebBox.react"),
                    babelHelpers.extends({}, m, {
                      ref: i,
                      xstyle: u,
                      children: U.jsx(
                        r("WDSText.react"),
                        babelHelpers.extends({ type: "Body1Emphasized" }, d),
                      ),
                    }),
                  )
                : U.jsx(
                    r("WAWebBox.react"),
                    babelHelpers.extends({}, m, {
                      ref: i,
                      xstyle: u,
                      children: U.jsx(
                        r("WDSText.react"),
                        babelHelpers.extends({ type: "Body1" }, d),
                      ),
                    }),
                  )),
              (n[9] = m),
              (n[10] = C),
              (n[11] = i),
              (n[12] = d),
              (n[13] = u),
              (n[14] = b))
            : (b = n[14]),
          b
        );
      }
      var v = (t = s.color) != null ? t : "wdsContentDefault",
        S;
      n[15] !== u
        ? ((S = [ce.style, u]), (n[15] = u), (n[16] = S))
        : (S = n[16]);
      var R;
      return (
        n[17] !== i || n[18] !== v || n[19] !== S || n[20] !== s
          ? ((R = U.jsx(
              ue,
              babelHelpers.extends({}, s, { color: v, ref: i, xstyle: S }),
            )),
            (n[17] = i),
            (n[18] = v),
            (n[19] = S),
            (n[20] = s),
            (n[21] = R))
          : (R = n[21]),
        R
      );
    }
    var me = {
      style: { fontSize: "xngnso2", lineHeight: "xcgk4ki", $$css: !0 },
    };
    function pe(e) {
      var t,
        n = o("react-compiler-runtime").c(23),
        a,
        i;
      n[0] !== e
        ? ((i = e.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(e, P)),
          (n[0] = e),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l, s, u;
      if (n[3] !== a) {
        var c,
          d = a;
        ((u = d.xstyle),
          (s = babelHelpers.objectWithoutPropertiesLoose(d, N)),
          (l = j(
            babelHelpers.extends({}, s, {
              color: (c = a.color) != null ? c : "wdsContentDefault",
            }),
          )),
          (n[3] = a),
          (n[4] = l),
          (n[5] = s),
          (n[6] = u));
      } else ((l = n[4]), (s = n[5]), (u = n[6]));
      var m = l;
      if (m != null) {
        var p;
        if (n[7] !== s) {
          var _ = s,
            f = _.children,
            g = _.color,
            h = _.textAlign,
            y = _.weight,
            C = babelHelpers.objectWithoutPropertiesLoose(_, M);
          ((p = C), (n[7] = s), (n[8] = p));
        } else p = n[8];
        var b;
        n[9] !== m
          ? ((b = U.jsx(
              r("WDSText.react"),
              babelHelpers.extends({ type: "Headline1" }, m),
            )),
            (n[9] = m),
            (n[10] = b))
          : (b = n[10]);
        var v;
        return (
          n[11] !== p || n[12] !== i || n[13] !== b || n[14] !== u
            ? ((v = U.jsx(
                r("WAWebBox.react"),
                babelHelpers.extends({}, p, { ref: i, xstyle: u, children: b }),
              )),
              (n[11] = p),
              (n[12] = i),
              (n[13] = b),
              (n[14] = u),
              (n[15] = v))
            : (v = n[15]),
          v
        );
      }
      var S = (t = s.color) != null ? t : "wdsContentDefault",
        R;
      n[16] !== u
        ? ((R = [me.style, u]), (n[16] = u), (n[17] = R))
        : (R = n[17]);
      var L;
      return (
        n[18] !== i || n[19] !== S || n[20] !== R || n[21] !== s
          ? ((L = U.jsx(
              ue,
              babelHelpers.extends({}, s, { color: S, ref: i, xstyle: R }),
            )),
            (n[18] = i),
            (n[19] = S),
            (n[20] = R),
            (n[21] = s),
            (n[22] = L))
          : (L = n[22]),
        L
      );
    }
    var _e = {
      style: { fontSize: "x1603h9y", lineHeight: "xgif2c7", $$css: !0 },
    };
    function fe(e) {
      var t,
        n = o("react-compiler-runtime").c(23),
        a,
        i;
      n[0] !== e
        ? ((i = e.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(e, w)),
          (n[0] = e),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l, s, u;
      if (n[3] !== a) {
        var c,
          d = a;
        ((u = d.xstyle),
          (s = babelHelpers.objectWithoutPropertiesLoose(d, A)),
          (l = j(
            babelHelpers.extends({}, s, {
              color: (c = a.color) != null ? c : "wdsContentDefault",
            }),
          )),
          (n[3] = a),
          (n[4] = l),
          (n[5] = s),
          (n[6] = u));
      } else ((l = n[4]), (s = n[5]), (u = n[6]));
      var m = l;
      if (m != null) {
        var p;
        if (n[7] !== s) {
          var _ = s,
            f = _.children,
            g = _.color,
            h = _.textAlign,
            y = _.weight,
            C = babelHelpers.objectWithoutPropertiesLoose(_, F);
          ((p = C), (n[7] = s), (n[8] = p));
        } else p = n[8];
        var b;
        n[9] !== m
          ? ((b = U.jsx(
              r("WDSText.react"),
              babelHelpers.extends({ type: "Headline2" }, m),
            )),
            (n[9] = m),
            (n[10] = b))
          : (b = n[10]);
        var v;
        return (
          n[11] !== p || n[12] !== i || n[13] !== b || n[14] !== u
            ? ((v = U.jsx(
                r("WAWebBox.react"),
                babelHelpers.extends({}, p, { ref: i, xstyle: u, children: b }),
              )),
              (n[11] = p),
              (n[12] = i),
              (n[13] = b),
              (n[14] = u),
              (n[15] = v))
            : (v = n[15]),
          v
        );
      }
      var S = (t = s.color) != null ? t : "wdsContentDefault",
        R;
      n[16] !== u
        ? ((R = [_e.style, u]), (n[16] = u), (n[17] = R))
        : (R = n[17]);
      var L;
      return (
        n[18] !== i || n[19] !== S || n[20] !== R || n[21] !== s
          ? ((L = U.jsx(
              ue,
              babelHelpers.extends({}, s, { color: S, ref: i, xstyle: R }),
            )),
            (n[18] = i),
            (n[19] = S),
            (n[20] = R),
            (n[21] = s),
            (n[22] = L))
          : (L = n[22]),
        L
      );
    }
    var ge = {
      style: { fontSize: "x7yx35o", lineHeight: "x19v9tvf", $$css: !0 },
    };
    function he(e) {
      var t,
        n = o("react-compiler-runtime").c(23),
        a,
        i;
      n[0] !== e
        ? ((i = e.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(e, O)),
          (n[0] = e),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l, s, u;
      if (n[3] !== a) {
        var c,
          d = a;
        ((u = d.xstyle),
          (s = babelHelpers.objectWithoutPropertiesLoose(d, B)),
          (l = j(
            babelHelpers.extends({}, s, {
              color: (c = a.color) != null ? c : "wdsContentDeemphasized",
            }),
          )),
          (n[3] = a),
          (n[4] = l),
          (n[5] = s),
          (n[6] = u));
      } else ((l = n[4]), (s = n[5]), (u = n[6]));
      var m = l;
      if (m != null) {
        var p;
        if (n[7] !== s) {
          var _ = s,
            f = _.children,
            g = _.color,
            h = _.textAlign,
            y = _.weight,
            C = babelHelpers.objectWithoutPropertiesLoose(_, W);
          ((p = C), (n[7] = s), (n[8] = p));
        } else p = n[8];
        var b;
        n[9] !== m
          ? ((b = U.jsx(
              r("WDSText.react"),
              babelHelpers.extends({ type: "Body2" }, m),
            )),
            (n[9] = m),
            (n[10] = b))
          : (b = n[10]);
        var v;
        return (
          n[11] !== p || n[12] !== i || n[13] !== b || n[14] !== u
            ? ((v = U.jsx(
                r("WAWebBox.react"),
                babelHelpers.extends({}, p, { ref: i, xstyle: u, children: b }),
              )),
              (n[11] = p),
              (n[12] = i),
              (n[13] = b),
              (n[14] = u),
              (n[15] = v))
            : (v = n[15]),
          v
        );
      }
      var S = (t = s.color) != null ? t : "wdsContentDeemphasized",
        R;
      n[16] !== u
        ? ((R = [ge.style, u]), (n[16] = u), (n[17] = R))
        : (R = n[17]);
      var L;
      return (
        n[18] !== i || n[19] !== S || n[20] !== R || n[21] !== s
          ? ((L = U.jsx(
              ue,
              babelHelpers.extends({}, s, { color: S, ref: i, xstyle: R }),
            )),
            (n[18] = i),
            (n[19] = S),
            (n[20] = R),
            (n[21] = s),
            (n[22] = L))
          : (L = n[22]),
        L
      );
    }
    ((l.WAWebTextLarge = X),
      (l.WAWebTextTitle = J),
      (l.WAWebTextMuted = ee),
      (l.WAWebTextSectionTitle = ne),
      (l.WAWebTextSmall = oe),
      (l.WAWebClickableText = le),
      (l.WAWebTextColor = se),
      (l.WAWebTextTitleRefreshed = de),
      (l.WAWebTextLargeRefreshed = pe),
      (l.WAWebTextMediumRefreshed = fe),
      (l.WAWebTextMutedRefreshed = he));
  },
  98,
);
