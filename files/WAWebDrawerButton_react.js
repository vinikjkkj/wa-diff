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
      var n = t.active,
        o = t.id,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = r("useWAWebActiveSelection")(n, o || ""),
        l = i[0],
        s = i[1];
      return m.jsx(y, babelHelpers.extends({}, a, { active: s, ref: l }));
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t,
        n,
        a,
        i = e.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(e, u),
        s = l.active,
        d = l.ariaLabel,
        h = l.children,
        y = l.className,
        C = l.detail,
        b = l.disabled,
        v = b === void 0 ? !1 : b,
        S = l.divider,
        R = S === void 0 ? !0 : S,
        L = l.icon,
        E = l.onClick,
        k = l.secondaryChildren,
        I = l.testid,
        T = l.theme,
        D = l.tooltip,
        x = l.useRoundedStyle,
        $ = x === void 0 ? !1 : x,
        P = l.xstyle,
        N = l.xstyleSecondary,
        M = r("useWAWebStaticButtonA11y")(E, { disabled: v }),
        w = M[0],
        A = M[1],
        F = r("useMergeRefs")(w, i),
        O = v ? void 0 : l.color,
        B =
          L != null
            ? m.jsx("div", {
                className: o(
                  "WAWebClassnames",
                ).classnamesConvertMeToStylexPlease(
                  ((t = {}),
                  (t._alzi = O === "danger"),
                  (t._alzj = O === "success"),
                  (t._aq4m = O === "accent"),
                  (t._alzh = !0),
                  (t._auk9 = !$),
                  (t._aukc = $),
                  t),
                  (c || (c = r("stylex")))(l.iconXstyle),
                ),
                children: L,
              })
            : null,
        W = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          "_alzb",
          y,
          ((n = {}),
          (n._alzf = !L),
          (n._alzc = !!s),
          (n._alzd = !!v),
          (n._alzg = T === "list-aligned"),
          (n._alzo = T === "chat-info"),
          (n._alzs = T === "chatlist"),
          (n._ap6h = T === "biz-tools"),
          (n._alze = k != null),
          (n._auk8 = $ === !1),
          n),
          (c || (c = r("stylex")))(
            s === !0 && _.active,
            v === !0 && _.disabled,
            $ === !0 && _.roundedContainer,
            T === "biz-tools" && _.bizToolsFlexibleHeight,
            P,
          ),
        ),
        q = o("WAWebL10NFbtTypeUtils").isStringOrFbt(h) ? h : null,
        U = D == null ? q : null,
        V = d != null ? d : q,
        H = p(null),
        G =
          D != null
            ? m.jsx(o("WAWebPopoverContext.react").WAWebPopoverController, {
                targetRef: H,
                popover: m.jsx(o("WAWebTooltip.react").WAWebHoverTooltip, {
                  targetRef: "context",
                  alignment: r("WAWebL10N").isRTL()
                    ? o("WAWebTooltip.react").PopoverAlignment.End
                    : o("WAWebTooltip.react").PopoverAlignment.Start,
                  position: o("WAWebTooltip.react").PopoverPosition.Bottom,
                  openingDelay: g,
                  children: D,
                }),
              })
            : null;
      return m.jsxs(
        "div",
        babelHelpers.extends({}, A, {
          className: W,
          "data-ignore-capture": "any",
          "data-testid": void 0,
          ref: F,
          title: U,
          "aria-label": V,
          children: [
            B,
            m.jsxs("div", {
              ref: H,
              className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                ((a = {}),
                (a._alzm = k != null),
                (a._alzl = C != null && !$),
                (a._alzk = !0),
                a),
                { 0: "", 1: "xj754qj" }[!R << 0],
              ),
              children: [
                m.jsxs("div", {
                  className: "_alzn",
                  children: [
                    m.jsx(o("WAWebText.react").WAWebTextTitle, {
                      as: "span",
                      color: f(O),
                      children: h,
                    }),
                    k != null
                      ? m.jsx(o("WAWebText.react").WAWebTextMuted, {
                          xstyle: N,
                          children: k,
                        })
                      : null,
                    G,
                  ],
                }),
                C != null
                  ? m.jsx("div", {
                      className: o(
                        "WAWebClassnames",
                      ).classnamesConvertMeToStylexPlease(
                        "_alzt",
                        (c || (c = r("stylex")))(l.detailXstyle),
                      ),
                      children: C,
                    })
                  : null,
              ],
            }),
          ],
        }),
      );
    }
    ((y.displayName = y.name + " [from " + i.id + "]"),
      (l.DrawerButton = h),
      (l.DrawerButtonSimple = y));
  },
  98,
);
