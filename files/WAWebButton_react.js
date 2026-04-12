__d(
  "WAWebButton.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFlexStyles",
    "WAWebSpinner.react",
    "WAWebUISpacing",
    "WDSButton.react",
    "react",
    "stylex",
    "useMergeRefs",
    "useWAWebFocusState",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = [
        "ref",
        "themeStyles",
        "ariaLabel",
        "ariaRoleDescription",
        "borderStyles",
        "buttonType",
        "children",
        "disabled",
        "icon",
        "iconXstyle",
        "nowrap",
        "onClick",
        "paddingStyles",
        "shadowOnHover",
        "spinner",
        "stretch",
        "testid",
        "width",
      ],
      u = ["ref"],
      c = ["ref"],
      d = ["ref"],
      m = ["ref"],
      p = ["ref"],
      _ = ["ref"],
      f = ["direction"],
      g,
      h,
      y = h || (h = o("react"));
    function C(e) {
      switch (e) {
        case "primary":
        case "strong-primary":
          return E;
        case "secondary":
          return D;
        case "plain-white":
          return $;
        case "solid-warning":
          return F;
        case "warning":
        case "warning-secondary":
          return B;
        case "simplified":
        case "strong":
          return w;
        case "negative-destructive":
          return q;
      }
    }
    var b = {
      button: {
        position: "x1n2onr6",
        display: "x1rg5ohu",
        fontWeight: "xk50ysn",
        fontSize: "x1f6kntn",
        lineHeight: "xyesn5m",
        whiteSpace: "x126k92a",
        borderStartStartRadius: "x1g83kfv",
        borderStartEndRadius: "x3qq2k7",
        borderEndEndRadius: "x2x8art",
        borderEndStartRadius: "x1qor8vf",
        borderTopWidth: "x178xt8z",
        borderInlineEndWidth: "x1lun4ml",
        borderBottomWidth: "xso031l",
        borderInlineStartWidth: "xpilrb4",
        borderTopStyle: "x13fuv20",
        borderInlineEndStyle: "x18b5jzi",
        borderBottomStyle: "x1q0q8m5",
        borderInlineStartStyle: "x1t7ytsu",
        borderTopColor: "x1v8p93f",
        borderInlineEndColor: "x1o3jo1z",
        borderBottomColor: "x16stqrj",
        borderInlineStartColor: "xv5lvn5",
        outlineOffset: "x1hl8ikr",
        transitionProperty: "xfagghw",
        transitionDuration: "x9dyr19",
        transitionTimingFunction: "x9lcvmn",
        $$css: !0,
      },
      hover: { ":hover_boxShadow": "xv52azi", $$css: !0 },
      disabled: {
        cursor: "x1h6gzvc",
        boxShadow: "x1gnnqk1",
        ":hover_cursor": "xercxcz",
        ":hover_boxShadow": "x1wtrbu5",
        $$css: !0,
      },
      focused: { outline: "x12zc9zx", $$css: !0 },
      nowrap: { whiteSpace: "xuxw1ft", $$css: !0 },
      stretch: { display: "x1lliihq", width: "xh8yej3", $$css: !0 },
    };
    function v(t) {
      var n = t.ref,
        a = t.themeStyles,
        i = t.ariaLabel,
        l = t.ariaRoleDescription,
        s = t.borderStyles,
        u = t.buttonType,
        c = t.children,
        d = t.disabled,
        m = t.icon,
        p = t.iconXstyle,
        _ = t.nowrap,
        f = _ === void 0 ? !0 : _,
        h = t.onClick,
        C = t.paddingStyles,
        v = t.shadowOnHover,
        S = v === void 0 ? !0 : v,
        R = t.spinner,
        L = t.stretch,
        E = t.testid,
        k = t.width,
        I = babelHelpers.objectWithoutPropertiesLoose(t, e),
        T = r("useWAWebFocusState")(),
        D = T[0],
        x = T[1],
        $ = r("useMergeRefs")(n, D),
        P = o("WAWebFlexStyles").getFlexStyles(I);
      return y.jsx("button", {
        disabled: d,
        "aria-disabled": d,
        "data-testid": void 0,
        onClick: h,
        className: (g || (g = r("stylex")))([
          o("WAWebUISpacing").uiPadding.vert10,
          o("WAWebUISpacing").uiPadding.horiz24,
          [b.button, a.button, a.buttonRefreshed],
          P.xstyle,
          x === !0 && [b.focused, a.focused],
          d === !0 && b.disabled,
          f === !0 && b.nowrap,
          L === !0 && b.stretch,
          S === !0 && b.hover,
          s,
          C,
        ]),
        ref: $,
        style: babelHelpers.extends({}, P.inline, { width: k }),
        type: u,
        "aria-label": i,
        "aria-roledescription": l,
        children: y.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          justify: "center",
          children: [
            y.jsxs(o("WAWebFlex.react").FlexRow, {
              testid: void 0,
              justify: "center",
              align: "center",
              gap: 8,
              grow: 1,
              children: [
                m != null && y.jsx(m, { height: 16, iconXstyle: p }),
                c,
              ],
            }),
            R === !0 &&
              y.jsx(r("WAWebFlexItem.react"), {
                testid: void 0,
                xstyle: o("WAWebUISpacing").uiPadding.start8,
                children: y.jsx(o("WAWebSpinner.react").Spinner, {
                  color: d === !0 ? "default" : a.spinner,
                  size: 16,
                }),
              }),
          ],
        }),
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e, t, n) {
      var r = n.ariaLabel,
        o = n.ariaRoleDescription,
        a = n.borderStyles,
        i = n.buttonType,
        l = n.children,
        u = n.disabled,
        c = n.flex,
        d = n.icon,
        m = n.iconXstyle,
        p = n.nowrap,
        _ = n.onClick,
        f = n.shadowOnHover,
        g = n.spinner,
        h = n.stretch,
        y = n.testid,
        C = n.width,
        b = l;
      if (b != null && !(typeof b == "string" || s.isFbtInstance(b)))
        return null;
      var v = _
          ? function (e) {
              return void _(e);
            }
          : null,
        S = h === !0 ? "flexible" : "fit",
        R = {
          size: e,
          type: t,
          loading: g,
          disabled: u,
          widthMode: S,
          testid: y == null ? void 0 : y,
          onPress: v == null ? void 0 : v,
        };
      if (d != null && b != null)
        return babelHelpers.extends({}, R, { Icon: d, label: b });
      if (b != null) return babelHelpers.extends({}, R, { label: b });
      if (d != null) return babelHelpers.extends({}, R, { Icon: d });
    }
    function R(e) {
      function t(t) {
        var n = t.ref,
          r = babelHelpers.objectWithoutPropertiesLoose(t, u);
        return y.jsx(
          v,
          babelHelpers.extends({}, r, { ref: n, themeStyles: e }),
        );
      }
      return ((t.displayName = t.name + " [from " + i.id + "]"), t);
    }
    var L = {
      button: {
        color: "x1pse0pq x1f47i5p",
        backgroundColor: "xfn3atn x1npidv xgm1il4",
        $$css: !0,
      },
      buttonRefreshed: {
        color: "x1pse0pq x1f47i5p",
        backgroundColor: "xfn3atn x1npidv x9qntcr",
        $$css: !0,
      },
      spinner: { stroke: "x1upul9f", $$css: !0 },
    };
    function E(e) {
      var t = e.ref,
        n = babelHelpers.objectWithoutPropertiesLoose(e, c),
        o = S("medium", "default", n);
      return o
        ? y.jsx(
            r("WDSButton.react"),
            babelHelpers.extends({ variant: "filled", ref: t }, o),
          )
        : y.jsx(v, babelHelpers.extends({}, n, { ref: t, themeStyles: L }));
    }
    E.displayName = E.name + " [from " + i.id + "]";
    var k = {
        button: {
          color: "x1pse0pq x1f47i5p",
          backgroundColor: "xfn3atn x1npidv xgm1il4",
          paddingInlineStart: "xf7dkkf",
          paddingInlineEnd: "xv54qhq",
          paddingTop: "xm7lytj",
          paddingBottom: "x1ykpatu",
          $$css: !0,
        },
        buttonRefreshed: {
          color: "x1pse0pq x1f47i5p",
          backgroundColor: "xfn3atn x1npidv x9qntcr",
          $$css: !0,
        },
        spinner: { stroke: "x1upul9f", $$css: !0 },
      },
      I = R(k),
      T = {
        button: {
          color: "xo1mcw5",
          borderTopColor: "xnj1f2r",
          borderInlineEndColor: "x2uibgs",
          borderBottomColor: "xkveyfu",
          borderInlineStartColor: "x12llq9",
          backgroundColor: "xlwc9sh",
          ":hover_color": "xfrlarv",
          ":disabled_color": "x1f47i5p",
          ":disabled_borderTopColor": "xnk0c1z",
          ":disabled_borderInlineEndColor": "x1s31tdy",
          ":disabled_borderBottomColor": "x1ao7u56",
          ":disabled_borderInlineStartColor": "xz3waxf",
          ":disabled_backgroundColor": "x1npidv",
          $$css: !0,
        },
        spinner: { stroke: "x94ds6z", $$css: !0 },
      };
    function D(e) {
      var t = e.ref,
        n = babelHelpers.objectWithoutPropertiesLoose(e, d),
        o = S("medium", "default", n);
      return o
        ? y.jsx(
            r("WDSButton.react"),
            babelHelpers.extends({ variant: "outline", ref: t }, o),
          )
        : y.jsx(v, babelHelpers.extends({}, n, { ref: t, themeStyles: T }));
    }
    D.displayName = D.name + " [from " + i.id + "]";
    var x = {
        button: {
          color: "xhslqc4",
          backgroundColor: "x1h3rtpe",
          ":hover_color": "xxxijta",
          ":hover_backgroundColor": "xsqkqsz",
          ":disabled_color": "x1f47i5p",
          ":disabled_backgroundColor": "x182k0kv",
          $$css: !0,
        },
        spinner: { stroke: "x94ds6z", $$css: !0 },
      },
      $ = R(x),
      P = {
        button: {
          paddingInlineStart: "xmzvs34",
          paddingInlineEnd: "xf159sx",
          width: "x1exxlbk",
          fontSize: "x6prxxf",
          lineHeight: "x1o2sk6j",
          backgroundColor: "xep993w",
          color: "xhslqc4",
          fontWeight: "xo1l8bm",
          ":hover_backgroundColor": "x1ubxc9n",
          ":hover_boxShadow": "x1wtrbu5",
          ":disabled_color": "x1f47i5p",
          $$css: !0,
        },
        spinner: { stroke: "x94ds6z", $$css: !0 },
      },
      N = R(P),
      M = {
        button: {
          paddingInlineStart: "xmzvs34",
          paddingInlineEnd: "xf159sx",
          color: "xo1mcw5",
          ":hover_color": "xfrlarv",
          ":hover_boxShadow": "x1wtrbu5",
          ":disabled_color": "x1f47i5p",
          $$css: !0,
        },
        spinner: { stroke: "x94ds6z", $$css: !0 },
      };
    function w(e) {
      var t = e.ref,
        n = babelHelpers.objectWithoutPropertiesLoose(e, m),
        o = S("medium", "default", n);
      return o
        ? y.jsx(
            r("WDSButton.react"),
            babelHelpers.extends({ variant: "borderless", ref: t }, o),
          )
        : y.jsx(v, babelHelpers.extends({}, n, { ref: t, themeStyles: M }));
    }
    w.displayName = w.name + " [from " + i.id + "]";
    var A = {
      button: {
        color: "xowaa7l",
        backgroundColor: "xk0ssx3",
        ":hover_backgroundColor": "x17dtpw8",
        ":disabled_color": "x1f47i5p",
        ":disabled_backgroundColor": "x1npidv",
        $$css: !0,
      },
      focused: { outlineColor: "x10322wi", $$css: !0 },
      spinner: { stroke: "x1ukulop", $$css: !0 },
    };
    function F(e) {
      var t = e.ref,
        n = babelHelpers.objectWithoutPropertiesLoose(e, p),
        o = S("medium", "destructive", n);
      return o
        ? y.jsx(
            r("WDSButton.react"),
            babelHelpers.extends({ variant: "filled", ref: t }, o),
          )
        : y.jsx(v, babelHelpers.extends({}, n, { ref: t, themeStyles: A }));
    }
    F.displayName = F.name + " [from " + i.id + "]";
    var O = {
      button: {
        color: "x30a034",
        borderTopColor: "xnj1f2r",
        borderInlineEndColor: "x2uibgs",
        borderBottomColor: "xkveyfu",
        borderInlineStartColor: "x12llq9",
        backgroundColor: "xlwc9sh",
        ":hover_color": "x1pfmjgd",
        ":disabled_color": "x1f47i5p",
        ":disabled_borderTopColor": "xnk0c1z",
        ":disabled_borderInlineEndColor": "x1s31tdy",
        ":disabled_borderBottomColor": "x1ao7u56",
        ":disabled_borderInlineStartColor": "xz3waxf",
        ":disabled_backgroundColor": "x1npidv",
        $$css: !0,
      },
      focused: { outlineColor: "x10322wi", $$css: !0 },
      spinner: { stroke: "x17alv2p", $$css: !0 },
    };
    function B(e) {
      var t = e.ref,
        n = babelHelpers.objectWithoutPropertiesLoose(e, _),
        o = S("medium", "destructive", n);
      return o
        ? y.jsx(
            r("WDSButton.react"),
            babelHelpers.extends({ variant: "outline", ref: t }, o),
          )
        : y.jsx(v, babelHelpers.extends({}, n, { ref: t, themeStyles: O }));
    }
    B.displayName = B.name + " [from " + i.id + "]";
    var W = {
        button: {
          color: "xowaa7l",
          backgroundColor: "x1b0f5k1",
          ":disabled_color": "x1f47i5p",
          ":disabled_backgroundColor": "x1npidv",
          $$css: !0,
        },
      },
      q = R(W),
      U = {
        horizontal: { columnGap: "xs2akgl", $$css: !0 },
        vertical: { rowGap: "x1f0uite", $$css: !0 },
      };
    function V(e) {
      var t = e.direction,
        n = babelHelpers.objectWithoutPropertiesLoose(e, f),
        r;
      switch (t) {
        case "horizontal":
        case "horizontalReverse":
          r = U.horizontal;
          break;
        case "vertical":
        case "verticalReverse":
          r = U.vertical;
          break;
      }
      return y.jsx(
        o("WAWebFlex.react").FlexContainer,
        babelHelpers.extends({ xstyle: r, direction: t }, n),
      );
    }
    V.displayName = V.name + " [from " + i.id + "]";
    function H(e) {
      var t = e.buttonType,
        n = e.children,
        r = e.disabled,
        o = e.nowrap,
        a = e.onClick,
        i = e.ref,
        l = e.spinner,
        s = e.stretch,
        u = e.testid,
        c = e.type,
        d = c === void 0 ? "primary" : c,
        m = C(d);
      return y.jsx(m, {
        ref: i,
        testid: void 0,
        children: n,
        disabled: r,
        onClick: a,
        nowrap: o,
        spinner: l,
        stretch: s,
        buttonType: t,
      });
    }
    ((H.displayName = H.name + " [from " + i.id + "]"),
      (l.WAWebButtonPrimary = E),
      (l.WAWebButtonPrimaryCompact = I),
      (l.WAWebButtonSecondary = D),
      (l.WAWebButtonPlainWhite = $),
      (l.WAWebButtonOnAccent = N),
      (l.WAWebButtonSimplified = w),
      (l.WAWebButtonPrimaryDestructive = F),
      (l.WAWebButtonSecondaryDestructive = B),
      (l.WAWebButtonNegativeDestructive = q),
      (l.ButtonGroup = V),
      (l.Button = H));
  },
  98,
);
