__d(
  "WAWebDrawerButton.react",
  [
    "cx",
    "WAWebClassnames",
    "WAWebL10N",
    "WAWebL10NFbtTypeUtils",
    "WAWebPopoverContext.react",
    "WAWebText.react",
    "WAWebTooltip.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs",
    "useWAWebActiveSelection",
    "useWAWebStaticButtonA11y",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["active", "id"],
      u = ["ref"],
      c,
      d,
      m = d || (d = o("react")),
      p = d.useRef,
      _ = {
        active: { backgroundColor: "x4wrhlh", $$css: !0 },
        disabled: { opacity: "xbyyjgo", $$css: !0 },
        roundedContainer: {
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          ":hover_backgroundColor": "x17gydlx",
          ":focus_backgroundColor": "x1jsj9aw",
          $$css: !0,
        },
        bizToolsFlexibleHeight: {
          minHeight: "x1gg8mnh",
          height: "xt7dq6l",
          $$css: !0,
        },
      };
    function f(e) {
      switch (e) {
        case "danger":
          return "critical";
        case "success":
          return "success";
        case "accent":
          return "teal";
        case "dark":
          return "primary";
        default:
          return "primary";
      }
    }
    var g = 350;
    function h(t) {
      var n = o("react-compiler-runtime").c(8),
        a,
        i,
        l;
      n[0] !== t
        ? ((a = t.active),
          (i = t.id),
          (l = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l))
        : ((a = n[1]), (i = n[2]), (l = n[3]));
      var s = r("useWAWebActiveSelection")(a, i || ""),
        u = s[0],
        c = s[1],
        d;
      return (
        n[4] !== u || n[5] !== c || n[6] !== l
          ? ((d = m.jsx(y, babelHelpers.extends({}, l, { active: c, ref: u }))),
            (n[4] = u),
            (n[5] = c),
            (n[6] = l),
            (n[7] = d))
          : (d = n[7]),
        d
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(56),
        n,
        a;
      t[0] !== e
        ? ((a = e.ref),
          (n = babelHelpers.objectWithoutPropertiesLoose(e, u)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = a))
        : ((n = t[1]), (a = t[2]));
      var i = n,
        l = i.active,
        s = i.ariaLabel,
        d = i.children,
        h = i.className,
        y = i.detail,
        C = i.disabled,
        b = i.divider,
        v = i.icon,
        S = i.onClick,
        R = i.secondaryChildren,
        L = i.testid,
        E = i.theme,
        k = i.tooltip,
        I = i.useRoundedStyle,
        T = i.xstyle,
        D = i.xstyleSecondary,
        x = C === void 0 ? !1 : C,
        $ = b === void 0 ? !0 : b,
        P = I === void 0 ? !1 : I,
        N;
      t[3] !== x ? ((N = { disabled: x }), (t[3] = x), (t[4] = N)) : (N = t[4]);
      var M = r("useWAWebStaticButtonA11y")(S, N),
        w = M[0],
        A = M[1],
        F = r("useMergeRefs")(w, a),
        O = x ? void 0 : n.color,
        B;
      if (t[5] !== O || t[6] !== v || t[7] !== n.iconXstyle || t[8] !== P) {
        var W;
        ((B =
          v != null
            ? m.jsx("div", {
                className: o(
                  "WAWebClassnames",
                ).classnamesConvertMeToStylexPlease(
                  ((W = {}),
                  (W._alzi = O === "danger"),
                  (W._alzj = O === "success"),
                  (W._aq4m = O === "accent"),
                  (W._alzh = !0),
                  (W._auk9 = !P),
                  (W._aukc = P),
                  W),
                  (c || (c = r("stylex")))(n.iconXstyle),
                ),
                children: v,
              })
            : null),
          (t[5] = O),
          (t[6] = v),
          (t[7] = n.iconXstyle),
          (t[8] = P),
          (t[9] = B));
      } else B = t[9];
      var q = B,
        U;
      if (
        t[10] !== l ||
        t[11] !== h ||
        t[12] !== x ||
        t[13] !== v ||
        t[14] !== R ||
        t[15] !== E ||
        t[16] !== P ||
        t[17] !== T
      ) {
        var V;
        ((U = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          "_alzb",
          h,
          ((V = {}),
          (V._alzf = !v),
          (V._alzc = !!l),
          (V._alzd = !!x),
          (V._alzg = E === "list-aligned"),
          (V._alzo = E === "chat-info"),
          (V._alzs = E === "chatlist"),
          (V._ap6h = E === "biz-tools"),
          (V._alze = R != null),
          (V._auk8 = P === !1),
          V),
          (c || (c = r("stylex")))(
            l === !0 && _.active,
            x === !0 && _.disabled,
            P === !0 && _.roundedContainer,
            E === "biz-tools" && _.bizToolsFlexibleHeight,
            T,
          ),
        )),
          (t[10] = l),
          (t[11] = h),
          (t[12] = x),
          (t[13] = v),
          (t[14] = R),
          (t[15] = E),
          (t[16] = P),
          (t[17] = T),
          (t[18] = U));
      } else U = t[18];
      var H = U,
        G;
      t[19] !== d
        ? ((G = o("WAWebL10NFbtTypeUtils").isStringOrFbt(d) ? d : null),
          (t[19] = d),
          (t[20] = G))
        : (G = t[20]);
      var z = G,
        j = k == null ? z : null,
        K = s != null ? s : z,
        Q = p(null),
        X;
      t[21] !== k
        ? ((X =
            k != null
              ? m.jsx(o("WAWebPopoverContext.react").WAWebPopoverController, {
                  targetRef: Q,
                  popover: m.jsx(o("WAWebTooltip.react").WAWebHoverTooltip, {
                    targetRef: "context",
                    alignment: r("WAWebL10N").isRTL()
                      ? o("WAWebTooltip.react").PopoverAlignment.End
                      : o("WAWebTooltip.react").PopoverAlignment.Start,
                    position: o("WAWebTooltip.react").PopoverPosition.Bottom,
                    openingDelay: g,
                    children: k,
                  }),
                })
              : null),
          (t[21] = k),
          (t[22] = X))
        : (X = t[22]);
      var Y = X,
        J;
      if (t[23] !== y || t[24] !== $ || t[25] !== R || t[26] !== P) {
        var Z;
        ((J = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((Z = {}),
          (Z._alzm = R != null),
          (Z._alzl = y != null && !P),
          (Z._alzk = !0),
          Z),
          { 0: "", 1: "xj754qj" }[!$ << 0],
        )),
          (t[23] = y),
          (t[24] = $),
          (t[25] = R),
          (t[26] = P),
          (t[27] = J));
      } else J = t[27];
      var ee = "_alzn",
        te;
      t[28] !== O ? ((te = f(O)), (t[28] = O), (t[29] = te)) : (te = t[29]);
      var ne;
      t[30] !== d || t[31] !== te
        ? ((ne = m.jsx(o("WAWebText.react").WAWebTextTitle, {
            as: "span",
            color: te,
            children: d,
          })),
          (t[30] = d),
          (t[31] = te),
          (t[32] = ne))
        : (ne = t[32]);
      var re;
      t[33] !== R || t[34] !== D
        ? ((re =
            R != null
              ? m.jsx(o("WAWebText.react").WAWebTextMuted, {
                  xstyle: D,
                  children: R,
                })
              : null),
          (t[33] = R),
          (t[34] = D),
          (t[35] = re))
        : (re = t[35]);
      var oe;
      t[36] !== ne || t[37] !== re || t[38] !== Y
        ? ((oe = m.jsxs("div", { className: ee, children: [ne, re, Y] })),
          (t[36] = ne),
          (t[37] = re),
          (t[38] = Y),
          (t[39] = oe))
        : (oe = t[39]);
      var ae;
      t[40] !== y || t[41] !== n.detailXstyle
        ? ((ae =
            y != null
              ? m.jsx("div", {
                  className: o(
                    "WAWebClassnames",
                  ).classnamesConvertMeToStylexPlease(
                    "_alzt",
                    (c || (c = r("stylex")))(n.detailXstyle),
                  ),
                  children: y,
                })
              : null),
          (t[40] = y),
          (t[41] = n.detailXstyle),
          (t[42] = ae))
        : (ae = t[42]);
      var ie;
      t[43] !== oe || t[44] !== ae || t[45] !== J
        ? ((ie = m.jsxs("div", { ref: Q, className: J, children: [oe, ae] })),
          (t[43] = oe),
          (t[44] = ae),
          (t[45] = J),
          (t[46] = ie))
        : (ie = t[46]);
      var le;
      return (
        t[47] !== K ||
        t[48] !== A ||
        t[49] !== H ||
        t[50] !== q ||
        t[51] !== F ||
        t[52] !== ie ||
        t[53] !== L ||
        t[54] !== j
          ? ((le = m.jsxs(
              "div",
              babelHelpers.extends({}, A, {
                className: H,
                "data-ignore-capture": "any",
                "data-testid": void 0,
                ref: F,
                title: j,
                "aria-label": K,
                children: [q, ie],
              }),
            )),
            (t[47] = K),
            (t[48] = A),
            (t[49] = H),
            (t[50] = q),
            (t[51] = F),
            (t[52] = ie),
            (t[53] = L),
            (t[54] = j),
            (t[55] = le))
          : (le = t[55]),
        le
      );
    }
    ((l.DrawerButton = h), (l.DrawerButtonSimple = y));
  },
  98,
);
