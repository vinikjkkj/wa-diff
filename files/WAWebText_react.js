__d(
  "WAWebText.react",
  [
    "WAWebABProps",
    "WAWebBox.react",
    "WAWebStylesEnv",
    "WAWebUnstyledButton.react",
    "WDSText.react",
    "react",
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
        n = e.ref,
        o = babelHelpers.objectWithoutPropertiesLoose(e, s),
        a = o.color,
        i = o.textAlign,
        l = o.weight,
        c = l === void 0 ? "normal" : l,
        d = o.xstyle,
        m = babelHelpers.objectWithoutPropertiesLoose(o, u),
        p = a != null ? H[a] : null,
        _ = V[c],
        f = i != null ? G[i] : null;
      return U.jsx(
        r("WAWebBox.react"),
        babelHelpers.extends({}, m, {
          as: (t = m.as) != null ? t : "div",
          labelFor: m.labelFor,
          ref: n,
          xstyle: [d, _, p, f],
        }),
      );
    }
    K.displayName = K.name + " [from " + i.id + "]";
    var Q = {
      large: { fontSize: "xlm9qay", lineHeight: "x1w7sdjq", $$css: !0 },
    };
    function X(e) {
      var t,
        n,
        o = e.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(e, c),
        i = a.xstyle,
        l = babelHelpers.objectWithoutPropertiesLoose(a, d),
        s = j(
          babelHelpers.extends({}, l, {
            color: (t = a.color) != null ? t : "primary",
          }),
        );
      if (s != null) {
        var u = l.children,
          p = l.color,
          _ = l.textAlign,
          f = l.weight,
          g = babelHelpers.objectWithoutPropertiesLoose(l, m);
        return U.jsx(
          r("WAWebBox.react"),
          babelHelpers.extends({}, g, {
            ref: o,
            xstyle: i,
            children: U.jsx(
              r("WDSText.react"),
              babelHelpers.extends({ type: "Headline2" }, s),
            ),
          }),
        );
      }
      return U.jsx(
        K,
        babelHelpers.extends({}, l, {
          color: (n = a.color) != null ? n : "primary",
          ref: o,
          xstyle: [i, Q.large],
        }),
      );
    }
    X.displayName = X.name + " [from " + i.id + "]";
    var Y = {
      title: { fontSize: "x1lkfr7t", lineHeight: "xdbd6k5", $$css: !0 },
    };
    function J(e) {
      var t,
        n,
        a = e.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(e, p),
        l = i.xstyle,
        s = babelHelpers.objectWithoutPropertiesLoose(i, _),
        u = j(
          babelHelpers.extends({}, s, {
            color: (t = i.color) != null ? t : "primary",
          }),
        );
      if (u != null) {
        var c = s.children,
          d = s.color,
          m = s.textAlign,
          g = s.weight,
          h = babelHelpers.objectWithoutPropertiesLoose(s, f),
          y = s.weight === "semibold" || s.weight === "bold";
        return y
          ? U.jsx(
              r("WAWebBox.react"),
              babelHelpers.extends({}, h, {
                ref: a,
                xstyle: l,
                children: U.jsx(
                  r("WDSText.react"),
                  babelHelpers.extends({ type: "Body1Emphasized" }, u),
                ),
              }),
            )
          : U.jsx(
              r("WAWebBox.react"),
              babelHelpers.extends({}, h, {
                ref: a,
                xstyle: l,
                children: U.jsx(
                  r("WDSText.react"),
                  babelHelpers.extends({ type: "Body1" }, u),
                ),
              }),
            );
      }
      return U.jsx(
        K,
        babelHelpers.extends({}, s, {
          color: (n = i.color) != null ? n : "primary",
          ref: a,
          xstyle: [l, Y.title, o("WAWebStylesEnv").isOSMac ? z.isOSMac : null],
        }),
      );
    }
    J.displayName = J.name + " [from " + i.id + "]";
    var Z = {
      muted: { fontSize: "x1f6kntn", lineHeight: "x16h55sf", $$css: !0 },
    };
    function ee(e) {
      var t,
        n,
        o = e.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(e, g),
        i = a.xstyle,
        l = babelHelpers.objectWithoutPropertiesLoose(a, h),
        s = j(
          babelHelpers.extends({}, l, {
            color: (t = a.color) != null ? t : "secondaryEmphasized",
          }),
        );
      if (s != null) {
        var u = l.children,
          c = l.color,
          d = l.textAlign,
          m = l.weight,
          p = babelHelpers.objectWithoutPropertiesLoose(l, y),
          _ = l.weight === "semibold" || l.weight === "bold";
        return _
          ? U.jsx(
              r("WAWebBox.react"),
              babelHelpers.extends({}, p, {
                ref: o,
                xstyle: i,
                children: U.jsx(
                  r("WDSText.react"),
                  babelHelpers.extends({ type: "Body2Emphasized" }, s),
                ),
              }),
            )
          : U.jsx(
              r("WAWebBox.react"),
              babelHelpers.extends({}, p, {
                ref: o,
                xstyle: i,
                children: U.jsx(
                  r("WDSText.react"),
                  babelHelpers.extends({ type: "Body2" }, s),
                ),
              }),
            );
      }
      return U.jsx(
        K,
        babelHelpers.extends({}, l, {
          color: (n = a.color) != null ? n : "secondaryEmphasized",
          ref: o,
          xstyle: [i, Z.muted],
        }),
      );
    }
    ee.displayName = ee.name + " [from " + i.id + "]";
    var te = {
      sectionTitle: { fontSize: "x1f6kntn", lineHeight: "x1u7k74", $$css: !0 },
    };
    function ne(e) {
      var t,
        n,
        o = e.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(e, C),
        i = a.xstyle,
        l = babelHelpers.objectWithoutPropertiesLoose(a, b),
        s = j(
          babelHelpers.extends({}, l, {
            color: (t = a.color) != null ? t : "teal",
          }),
        );
      if (s != null) {
        var u = l.children,
          c = l.color,
          d = l.textAlign,
          m = l.weight,
          p = babelHelpers.objectWithoutPropertiesLoose(l, v),
          _ = l.weight === "semibold" || l.weight === "bold";
        return _
          ? U.jsx(
              r("WAWebBox.react"),
              babelHelpers.extends({}, p, {
                ref: o,
                xstyle: i,
                children: U.jsx(
                  r("WDSText.react"),
                  babelHelpers.extends({ type: "Body2Emphasized" }, s),
                ),
              }),
            )
          : U.jsx(
              r("WAWebBox.react"),
              babelHelpers.extends({}, p, {
                ref: o,
                xstyle: i,
                children: U.jsx(
                  r("WDSText.react"),
                  babelHelpers.extends({ type: "Body2" }, s),
                ),
              }),
            );
      }
      return U.jsx(
        K,
        babelHelpers.extends({}, l, {
          color: (n = a.color) != null ? n : "teal",
          ref: o,
          xstyle: [i, te.sectionTitle],
        }),
      );
    }
    ne.displayName = ne.name + " [from " + i.id + "]";
    var re = {
      small: { fontSize: "x1nxh6w3", lineHeight: "xcgms0a", $$css: !0 },
    };
    function oe(e) {
      var t,
        n,
        o = e.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(e, S),
        i = a.xstyle,
        l = babelHelpers.objectWithoutPropertiesLoose(a, R),
        s = j(
          babelHelpers.extends({}, l, {
            color: (t = a.color) != null ? t : "secondary",
          }),
        );
      if (s != null) {
        var u = l.children,
          c = l.color,
          d = l.textAlign,
          m = l.weight,
          p = babelHelpers.objectWithoutPropertiesLoose(l, L),
          _ = l.weight === "semibold" || l.weight === "bold";
        return _
          ? U.jsx(
              r("WAWebBox.react"),
              babelHelpers.extends({}, p, {
                ref: o,
                xstyle: i,
                children: U.jsx(
                  r("WDSText.react"),
                  babelHelpers.extends({ type: "Body2Emphasized" }, s),
                ),
              }),
            )
          : U.jsx(
              r("WAWebBox.react"),
              babelHelpers.extends({}, p, {
                ref: o,
                xstyle: i,
                children: U.jsx(
                  r("WDSText.react"),
                  babelHelpers.extends({ type: "Body2" }, s),
                ),
              }),
            );
      }
      return U.jsx(
        K,
        babelHelpers.extends({}, l, {
          color: (n = a.color) != null ? n : "secondary",
          ref: o,
          xstyle: [i, re.small],
        }),
      );
    }
    oe.displayName = oe.name + " [from " + i.id + "]";
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
      var t = e.ref,
        n = babelHelpers.objectWithoutPropertiesLoose(e, E),
        o = n.className_DONOTUSE,
        a = n.color,
        i = a === void 0 ? "blue" : a,
        l = n.highlightOnHover,
        s = n.weight,
        u = s === void 0 ? "medium" : s,
        c = n.xstyle,
        d = n.xstyle,
        m = babelHelpers.objectWithoutPropertiesLoose(n, k),
        p = V[u];
      return U.jsx(
        r("WAWebUnstyledButton.react"),
        babelHelpers.extends({}, m, {
          xstyle: [d, p, l === !0 ? ie[i] : ae[i]],
          ref: t,
        }),
      );
    }
    le.displayName = le.name + " [from " + i.id + "]";
    function se(e) {
      var t = e.children,
        n = e.color;
      return U.jsx(r("WAWebBox.react"), {
        as: "span",
        xstyle: H[n],
        children: t,
      });
    }
    se.displayName = se.name + " [from " + i.id + "]";
    function ue(e) {
      var t,
        n = e.ref,
        o = babelHelpers.objectWithoutPropertiesLoose(e, I),
        a = o.color,
        i = o.textAlign,
        l = o.weight,
        s = l === void 0 ? "normal" : l,
        u = o.xstyle,
        c = babelHelpers.objectWithoutPropertiesLoose(o, T),
        d = a != null ? H[a] : null,
        m = V[s],
        p = i != null ? G[i] : null;
      return U.jsx(
        r("WAWebBox.react"),
        babelHelpers.extends({}, c, {
          as: (t = c.as) != null ? t : "div",
          labelFor: c.labelFor,
          ref: n,
          xstyle: [m, d, p, u],
        }),
      );
    }
    ue.displayName = ue.name + " [from " + i.id + "]";
    var ce = {
      style: { fontSize: "x6prxxf", lineHeight: "x1o2sk6j", $$css: !0 },
    };
    function de(e) {
      var t,
        n = e.ref,
        o = babelHelpers.objectWithoutPropertiesLoose(e, D),
        a = o.xstyle,
        i = babelHelpers.objectWithoutPropertiesLoose(o, x),
        l = j(i);
      if (l != null) {
        var s = i.children,
          u = i.color,
          c = i.textAlign,
          d = i.weight,
          m = babelHelpers.objectWithoutPropertiesLoose(i, $),
          p = i.weight === "semibold" || i.weight === "bold";
        return p
          ? U.jsx(
              r("WAWebBox.react"),
              babelHelpers.extends({}, m, {
                ref: n,
                xstyle: a,
                children: U.jsx(
                  r("WDSText.react"),
                  babelHelpers.extends({ type: "Body1Emphasized" }, l),
                ),
              }),
            )
          : U.jsx(
              r("WAWebBox.react"),
              babelHelpers.extends({}, m, {
                ref: n,
                xstyle: a,
                children: U.jsx(
                  r("WDSText.react"),
                  babelHelpers.extends({ type: "Body1" }, l),
                ),
              }),
            );
      }
      return U.jsx(
        ue,
        babelHelpers.extends({}, i, {
          color: (t = i.color) != null ? t : "wdsContentDefault",
          ref: n,
          xstyle: [ce.style, a],
        }),
      );
    }
    de.displayName = de.name + " [from " + i.id + "]";
    var me = {
      style: { fontSize: "xngnso2", lineHeight: "xcgk4ki", $$css: !0 },
    };
    function pe(e) {
      var t,
        n,
        o = e.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(e, P),
        i = a.xstyle,
        l = babelHelpers.objectWithoutPropertiesLoose(a, N),
        s = j(
          babelHelpers.extends({}, l, {
            color: (t = a.color) != null ? t : "wdsContentDefault",
          }),
        );
      if (s != null) {
        var u = l.children,
          c = l.color,
          d = l.textAlign,
          m = l.weight,
          p = babelHelpers.objectWithoutPropertiesLoose(l, M);
        return U.jsx(
          r("WAWebBox.react"),
          babelHelpers.extends({}, p, {
            ref: o,
            xstyle: i,
            children: U.jsx(
              r("WDSText.react"),
              babelHelpers.extends({ type: "Headline1" }, s),
            ),
          }),
        );
      }
      return U.jsx(
        ue,
        babelHelpers.extends({}, l, {
          color: (n = l.color) != null ? n : "wdsContentDefault",
          ref: o,
          xstyle: [me.style, i],
        }),
      );
    }
    pe.displayName = pe.name + " [from " + i.id + "]";
    var _e = {
      style: { fontSize: "x1603h9y", lineHeight: "xgif2c7", $$css: !0 },
    };
    function fe(e) {
      var t,
        n,
        o = e.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(e, w),
        i = a.xstyle,
        l = babelHelpers.objectWithoutPropertiesLoose(a, A),
        s = j(
          babelHelpers.extends({}, l, {
            color: (t = a.color) != null ? t : "wdsContentDefault",
          }),
        );
      if (s != null) {
        var u = l.children,
          c = l.color,
          d = l.textAlign,
          m = l.weight,
          p = babelHelpers.objectWithoutPropertiesLoose(l, F);
        return U.jsx(
          r("WAWebBox.react"),
          babelHelpers.extends({}, p, {
            ref: o,
            xstyle: i,
            children: U.jsx(
              r("WDSText.react"),
              babelHelpers.extends({ type: "Headline2" }, s),
            ),
          }),
        );
      }
      return U.jsx(
        ue,
        babelHelpers.extends({}, l, {
          color: (n = l.color) != null ? n : "wdsContentDefault",
          ref: o,
          xstyle: [_e.style, i],
        }),
      );
    }
    fe.displayName = fe.name + " [from " + i.id + "]";
    var ge = {
      style: { fontSize: "x7yx35o", lineHeight: "x19v9tvf", $$css: !0 },
    };
    function he(e) {
      var t,
        n,
        o = e.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(e, O),
        i = a.xstyle,
        l = babelHelpers.objectWithoutPropertiesLoose(a, B),
        s = j(
          babelHelpers.extends({}, l, {
            color: (t = a.color) != null ? t : "wdsContentDeemphasized",
          }),
        );
      if (s != null) {
        var u = l.children,
          c = l.color,
          d = l.textAlign,
          m = l.weight,
          p = babelHelpers.objectWithoutPropertiesLoose(l, W);
        return U.jsx(
          r("WAWebBox.react"),
          babelHelpers.extends({}, p, {
            ref: o,
            xstyle: i,
            children: U.jsx(
              r("WDSText.react"),
              babelHelpers.extends({ type: "Body2" }, s),
            ),
          }),
        );
      }
      return U.jsx(
        ue,
        babelHelpers.extends({}, l, {
          color: (n = l.color) != null ? n : "wdsContentDeemphasized",
          ref: o,
          xstyle: [ge.style, i],
        }),
      );
    }
    ((he.displayName = he.name + " [from " + i.id + "]"),
      (l.WAWebTextLarge = X),
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
