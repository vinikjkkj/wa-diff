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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(27),
        a = t.ref,
        i = t.themeStyles,
        l = t.ariaLabel,
        s = t.ariaRoleDescription,
        u = t.borderStyles,
        c = t.buttonType,
        d = t.children,
        m = t.disabled,
        p = t.icon,
        _ = t.iconXstyle,
        f = t.nowrap,
        h = t.onClick,
        C = t.paddingStyles,
        v = t.shadowOnHover,
        S = t.spinner,
        R = t.stretch,
        L = t.testid,
        E = t.width,
        k = babelHelpers.objectWithoutPropertiesLoose(t, e),
        I = f === void 0 ? !0 : f,
        T = v === void 0 ? !0 : v,
        D = r("useWAWebFocusState")(),
        x = D[0],
        $ = D[1],
        P = r("useMergeRefs")(a, x),
        N = o("WAWebFlexStyles").getFlexStyles(k),
        M = (g || (g = r("stylex")))([
          o("WAWebUISpacing").uiPadding.vert10,
          o("WAWebUISpacing").uiPadding.horiz24,
          [b.button, i.button, i.buttonRefreshed],
          N.xstyle,
          $ === !0 && [b.focused, i.focused],
          m === !0 && b.disabled,
          I === !0 && b.nowrap,
          R === !0 && b.stretch,
          T === !0 && b.hover,
          u,
          C,
        ]),
        w;
      n[0] !== N.inline || n[1] !== E
        ? ((w = babelHelpers.extends({}, N.inline, { width: E })),
          (n[0] = N.inline),
          (n[1] = E),
          (n[2] = w))
        : (w = n[2]);
      var A;
      n[3] !== p || n[4] !== _
        ? ((A = p != null && y.jsx(p, { height: 16, iconXstyle: _ })),
          (n[3] = p),
          (n[4] = _),
          (n[5] = A))
        : (A = n[5]);
      var F;
      n[6] !== d || n[7] !== A
        ? ((F = y.jsxs(o("WAWebFlex.react").FlexRow, {
            testid: void 0,
            justify: "center",
            align: "center",
            gap: 8,
            grow: 1,
            children: [A, d],
          })),
          (n[6] = d),
          (n[7] = A),
          (n[8] = F))
        : (F = n[8]);
      var O;
      n[9] !== m || n[10] !== S || n[11] !== i.spinner
        ? ((O =
            S === !0 &&
            y.jsx(r("WAWebFlexItem.react"), {
              testid: void 0,
              xstyle: o("WAWebUISpacing").uiPadding.start8,
              children: y.jsx(o("WAWebSpinner.react").Spinner, {
                color: m === !0 ? "default" : i.spinner,
                size: 16,
              }),
            })),
          (n[9] = m),
          (n[10] = S),
          (n[11] = i.spinner),
          (n[12] = O))
        : (O = n[12]);
      var B;
      n[13] !== F || n[14] !== O
        ? ((B = y.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: [F, O],
          })),
          (n[13] = F),
          (n[14] = O),
          (n[15] = B))
        : (B = n[15]);
      var W;
      return (
        n[16] !== l ||
        n[17] !== s ||
        n[18] !== c ||
        n[19] !== m ||
        n[20] !== P ||
        n[21] !== h ||
        n[22] !== M ||
        n[23] !== w ||
        n[24] !== B ||
        n[25] !== L
          ? ((W = y.jsx("button", {
              disabled: m,
              "aria-disabled": m,
              "data-testid": void 0,
              onClick: h,
              className: M,
              ref: P,
              style: w,
              type: c,
              "aria-label": l,
              "aria-roledescription": s,
              children: B,
            })),
            (n[16] = l),
            (n[17] = s),
            (n[18] = c),
            (n[19] = m),
            (n[20] = P),
            (n[21] = h),
            (n[22] = M),
            (n[23] = w),
            (n[24] = B),
            (n[25] = L),
            (n[26] = W))
          : (W = n[26]),
        W
      );
    }
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
        var n = o("react-compiler-runtime").c(6),
          r,
          a;
        n[0] !== t
          ? ((a = t.ref),
            (r = babelHelpers.objectWithoutPropertiesLoose(t, u)),
            (n[0] = t),
            (n[1] = r),
            (n[2] = a))
          : ((r = n[1]), (a = n[2]));
        var i;
        return (
          n[3] !== r || n[4] !== a
            ? ((i = y.jsx(
                v,
                babelHelpers.extends({}, r, { ref: a, themeStyles: e }),
              )),
              (n[3] = r),
              (n[4] = a),
              (n[5] = i))
            : (i = n[5]),
          i
        );
      }
      return t;
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
      var t = o("react-compiler-runtime").c(10),
        n,
        a,
        i;
      t[0] !== e
        ? ((a = e.ref),
          (n = babelHelpers.objectWithoutPropertiesLoose(e, c)),
          (i = S("medium", "default", n)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = a),
          (t[3] = i))
        : ((n = t[1]), (a = t[2]), (i = t[3]));
      var l = i;
      if (l) {
        var s;
        return (
          t[4] !== l || t[5] !== a
            ? ((s = y.jsx(
                r("WDSButton.react"),
                babelHelpers.extends({ variant: "filled", ref: a }, l),
              )),
              (t[4] = l),
              (t[5] = a),
              (t[6] = s))
            : (s = t[6]),
          s
        );
      }
      var u;
      return (
        t[7] !== n || t[8] !== a
          ? ((u = y.jsx(
              v,
              babelHelpers.extends({}, n, { ref: a, themeStyles: L }),
            )),
            (t[7] = n),
            (t[8] = a),
            (t[9] = u))
          : (u = t[9]),
        u
      );
    }
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
      var t = o("react-compiler-runtime").c(10),
        n,
        a,
        i;
      t[0] !== e
        ? ((a = e.ref),
          (n = babelHelpers.objectWithoutPropertiesLoose(e, d)),
          (i = S("medium", "default", n)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = a),
          (t[3] = i))
        : ((n = t[1]), (a = t[2]), (i = t[3]));
      var l = i;
      if (l) {
        var s;
        return (
          t[4] !== l || t[5] !== a
            ? ((s = y.jsx(
                r("WDSButton.react"),
                babelHelpers.extends({ variant: "outline", ref: a }, l),
              )),
              (t[4] = l),
              (t[5] = a),
              (t[6] = s))
            : (s = t[6]),
          s
        );
      }
      var u;
      return (
        t[7] !== n || t[8] !== a
          ? ((u = y.jsx(
              v,
              babelHelpers.extends({}, n, { ref: a, themeStyles: T }),
            )),
            (t[7] = n),
            (t[8] = a),
            (t[9] = u))
          : (u = t[9]),
        u
      );
    }
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
      var t = o("react-compiler-runtime").c(10),
        n,
        a,
        i;
      t[0] !== e
        ? ((a = e.ref),
          (n = babelHelpers.objectWithoutPropertiesLoose(e, m)),
          (i = S("medium", "default", n)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = a),
          (t[3] = i))
        : ((n = t[1]), (a = t[2]), (i = t[3]));
      var l = i;
      if (l) {
        var s;
        return (
          t[4] !== l || t[5] !== a
            ? ((s = y.jsx(
                r("WDSButton.react"),
                babelHelpers.extends({ variant: "borderless", ref: a }, l),
              )),
              (t[4] = l),
              (t[5] = a),
              (t[6] = s))
            : (s = t[6]),
          s
        );
      }
      var u;
      return (
        t[7] !== n || t[8] !== a
          ? ((u = y.jsx(
              v,
              babelHelpers.extends({}, n, { ref: a, themeStyles: M }),
            )),
            (t[7] = n),
            (t[8] = a),
            (t[9] = u))
          : (u = t[9]),
        u
      );
    }
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
      var t = o("react-compiler-runtime").c(10),
        n,
        a,
        i;
      t[0] !== e
        ? ((a = e.ref),
          (n = babelHelpers.objectWithoutPropertiesLoose(e, p)),
          (i = S("medium", "destructive", n)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = a),
          (t[3] = i))
        : ((n = t[1]), (a = t[2]), (i = t[3]));
      var l = i;
      if (l) {
        var s;
        return (
          t[4] !== l || t[5] !== a
            ? ((s = y.jsx(
                r("WDSButton.react"),
                babelHelpers.extends({ variant: "filled", ref: a }, l),
              )),
              (t[4] = l),
              (t[5] = a),
              (t[6] = s))
            : (s = t[6]),
          s
        );
      }
      var u;
      return (
        t[7] !== n || t[8] !== a
          ? ((u = y.jsx(
              v,
              babelHelpers.extends({}, n, { ref: a, themeStyles: A }),
            )),
            (t[7] = n),
            (t[8] = a),
            (t[9] = u))
          : (u = t[9]),
        u
      );
    }
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
      var t = o("react-compiler-runtime").c(10),
        n,
        a,
        i;
      t[0] !== e
        ? ((a = e.ref),
          (n = babelHelpers.objectWithoutPropertiesLoose(e, _)),
          (i = S("medium", "destructive", n)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = a),
          (t[3] = i))
        : ((n = t[1]), (a = t[2]), (i = t[3]));
      var l = i;
      if (l) {
        var s;
        return (
          t[4] !== l || t[5] !== a
            ? ((s = y.jsx(
                r("WDSButton.react"),
                babelHelpers.extends({ variant: "outline", ref: a }, l),
              )),
              (t[4] = l),
              (t[5] = a),
              (t[6] = s))
            : (s = t[6]),
          s
        );
      }
      var u;
      return (
        t[7] !== n || t[8] !== a
          ? ((u = y.jsx(
              v,
              babelHelpers.extends({}, n, { ref: a, themeStyles: O }),
            )),
            (t[7] = n),
            (t[8] = a),
            (t[9] = u))
          : (u = t[9]),
        u
      );
    }
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
      var t = o("react-compiler-runtime").c(7),
        n,
        r;
      t[0] !== e
        ? ((n = e.direction),
          (r = babelHelpers.objectWithoutPropertiesLoose(e, f)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r))
        : ((n = t[1]), (r = t[2]));
      var a;
      e: switch (n) {
        case "horizontal":
        case "horizontalReverse": {
          a = U.horizontal;
          break e;
        }
        case "vertical":
        case "verticalReverse":
          a = U.vertical;
      }
      var i;
      return (
        t[3] !== n || t[4] !== r || t[5] !== a
          ? ((i = y.jsx(
              o("WAWebFlex.react").FlexContainer,
              babelHelpers.extends({ xstyle: a, direction: n }, r),
            )),
            (t[3] = n),
            (t[4] = r),
            (t[5] = a),
            (t[6] = i))
          : (i = t[6]),
        i
      );
    }
    function H(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.buttonType,
        r = e.children,
        a = e.disabled,
        i = e.nowrap,
        l = e.onClick,
        s = e.ref,
        u = e.spinner,
        c = e.stretch,
        d = e.testid,
        m = e.type,
        p = m === void 0 ? "primary" : m,
        _;
      t[0] !== p ? ((_ = C(p)), (t[0] = p), (t[1] = _)) : (_ = t[1]);
      var f = _,
        g;
      return (
        t[2] !== f ||
        t[3] !== n ||
        t[4] !== r ||
        t[5] !== a ||
        t[6] !== i ||
        t[7] !== l ||
        t[8] !== s ||
        t[9] !== u ||
        t[10] !== c ||
        t[11] !== d
          ? ((g = y.jsx(f, {
              ref: s,
              testid: void 0,
              children: r,
              disabled: a,
              onClick: l,
              nowrap: i,
              spinner: u,
              stretch: c,
              buttonType: n,
            })),
            (t[2] = f),
            (t[3] = n),
            (t[4] = r),
            (t[5] = a),
            (t[6] = i),
            (t[7] = l),
            (t[8] = s),
            (t[9] = u),
            (t[10] = c),
            (t[11] = d),
            (t[12] = g))
          : (g = t[12]),
        g
      );
    }
    ((l.WAWebButtonPrimary = E),
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
