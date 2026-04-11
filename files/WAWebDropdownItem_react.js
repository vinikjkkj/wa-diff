__d(
  "WAWebDropdownItem.react",
  [
    "cx",
    "$InternalEnum",
    "WAWebCheckmarkIcon.react",
    "WAWebClassnames",
    "WAWebFlex.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10NFbtTypeUtils",
    "WAWebNoop",
    "WAWebPill.react",
    "WAWebStopEvent",
    "WAWebTooltip.react",
    "WAWebUISpacing",
    "WDSFocusStateStyles",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["icon"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useRef,
      _ = m.useState,
      f = {
        container: {
          cursor: "x1ypdohk",
          minWidth: "x5w4yej",
          height: "x1vqgdyp",
          width: "xh8yej3",
          $$css: !0,
        },
        icon: { minWidth: "xt4ypqs", $$css: !0 },
        text: {
          lineHeight: "x1o2sk6j",
          fontSize: "x6prxxf",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
      },
      g = n("$InternalEnum").Mirrored(["Compact", "Muted", "Negative"]),
      h = { checkmarkIcon: { color: "x1v5yvga", $$css: !0 } };
    function y(e) {
      var t,
        n,
        a = e.children,
        i = e.tooltip,
        l = e.tooltipPosition,
        s = l === void 0 ? o("WAWebTooltip.react").PopoverPosition.Start : l,
        c = e.tooltipAlignment,
        m = c === void 0 ? o("WAWebTooltip.react").PopoverAlignment.Center : c,
        f = e.type,
        y = f === void 0 ? "text" : f,
        C = e.disabled,
        b = C === void 0 ? !1 : C,
        v = e.theme,
        S = e.action,
        R = e.testid,
        L = e.tabIndex,
        E = e.addSpacing,
        k = E === void 0 ? !1 : E,
        I = e.ariaLabel,
        T = e.selected,
        D = T === void 0 ? !1 : T,
        x = e.pillText,
        $ = e.showTooltipOnOverflow,
        P = $ === void 0 ? !1 : $,
        N = e.fixedHeight,
        M = N === void 0 ? !0 : N,
        w = _(!1),
        A = w[0],
        F = w[1],
        O = _(!1),
        B = O[0],
        W = O[1],
        q = p(),
        U = p(null),
        V = r("useWAWebUIM")(),
        H = function () {
          if (q.current == null) return !1;
          var e = q.current.style.overflow;
          (!e || e === "visible") && (q.current.style.overflow = "hidden");
          var t =
            q.current.clientWidth < q.current.scrollWidth ||
            q.current.clientHeight < q.current.scrollHeight;
          return ((q.current.style.overflow = e), t);
        },
        G;
      if (i != null || (H() && P)) {
        var z,
          j = s,
          K = m;
        (i != null
          ? (z = i)
          : i == null &&
            o("WAWebL10NFbtTypeUtils").isStringOrFbt(a) &&
            H() &&
            ((z = a), (j = o("WAWebTooltip.react").PopoverPosition.Bottom)),
          (G = d.jsx(o("WAWebTooltip.react").WAWebHoverTooltip, {
            targetRef: U,
            position: j,
            alignment: K,
            buffer: 8,
            children: z,
          })));
      }
      var Q = function (t) {
          var e = S(t) === !1;
          e || (V && V.requestDismiss());
        },
        X = function () {
          F(!0);
        },
        Y = function () {
          F(!1);
        },
        J = function () {
          W(!0);
        },
        Z = function () {
          W(!1);
        },
        ee = function (t) {
          Q(t);
        },
        te = function (t) {
          t.repeat || Q(t);
        },
        ne =
          o("WAWebL10NFbtTypeUtils").isStringOrFbt(a) || k
            ? d.jsxs("div", {
                ref: q,
                className: o(
                  "WAWebClassnames",
                ).classnamesConvertMeToStylexPlease(
                  "_aj-z",
                  "_aj-t",
                  ((t = {}),
                  (t["_aj-u"] = v === g.Compact),
                  (t._alxo = M),
                  (t.xti2d7y = b),
                  t),
                  (u || (u = r("stylex")))(e.xstyle),
                ),
                "aria-label": I != null ? I : a,
                children: [
                  a,
                  D &&
                    d.jsx(o("WAWebCheckmarkIcon.react").CheckmarkIcon, {
                      className_DONOTUSE: "_aj_0",
                      xstyle: h.checkmarkIcon,
                    }),
                  x != null
                    ? d.jsx(o("WAWebPill.react").Pill, {
                        inline: !0,
                        children: x,
                      })
                    : null,
                ],
              })
            : a,
        re = { enter: te, space: te },
        oe = A || B,
        ae = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((n = {}),
          (n["_aj-s"] = oe && v !== g.Negative),
          (n["_aj-r"] =
            y === "text" ||
            y === "attach-menu-popup" ||
            y === "newsletter-wamo-message-type"),
          (n["_aj-w"] =
            y === "emoji" || y === "emoji-grid" || y === "emoji-preview"),
          (n["_aj-x"] = y === "emoji-grid"),
          (n["_aj-y"] = y === "emoji-preview"),
          (n["_aj-v"] = y === "icon"),
          (n["_aj--"] = b || v === g.Muted),
          (n["_aj-q"] = !0),
          (n["_aj-_"] = !0),
          (n._ak_v = y === "attach-menu-popup"),
          (n._asi6 = !0),
          (n._asi3 = v === g.Negative && oe),
          (n._ap51 = !0),
          n),
          y === "newsletter-wamo-message-type" &&
            "xyi3aci xwf5gio x1p453bz x1suzm8a",
        ),
        ie = b
          ? {}
          : {
              handlers: re,
              onContextMenu: o("WAWebStopEvent").preventDefault,
              onMouseDown: o("WAWebStopEvent").preventDefault,
              onClick: ee,
              onMouseEnter: X,
              onMouseLeave: Y,
              onFocus: J,
              onBlur: Z,
            };
      return d.jsxs(
        o("WAWebKeyboardHotKeys.react").HotKeys,
        babelHelpers.extends(
          {
            ref: U,
            component: "li",
            className: ae,
            xstyle:
              B &&
              o("WDSFocusStateStyles").WDSFocusStateStyles
                .genericFocusPersistent,
            "data-animate-dropdown-item": !0,
            "data-testid": void 0,
            tabIndex: L != null ? L : 0,
            role: b ? void 0 : "button",
          },
          ie,
          { children: [ne, G] },
        ),
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = o("react-compiler-runtime").c(24),
        n = e.action,
        a = e.children,
        i = e.disabled,
        l = e.icon,
        s = e.testid,
        c = e.theme,
        m = e.tooltip,
        p = e.xstyle,
        _;
      t[0] !== i
        ? ((_ = { 0: {}, 1: { className: "xti2d7y x1h6gzvc" } }[
            (i === !0) << 0
          ]),
          (t[0] = i),
          (t[1] = _))
        : (_ = t[1]);
      var g = i === !0 ? r("WAWebNoop") : n,
        h;
      t[2] !== p
        ? ((h = [
            f.icon,
            o("WAWebUISpacing").uiMargin.start8,
            o("WAWebUISpacing").uiMargin.end10,
            p,
          ]),
          (t[2] = p),
          (t[3] = h))
        : (h = t[3]);
      var C;
      t[4] !== l || t[5] !== h
        ? ((C = d.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            xstyle: h,
            children: l,
          })),
          (t[4] = l),
          (t[5] = h),
          (t[6] = C))
        : (C = t[6]);
      var b;
      t[7] !== p
        ? ((b = (u || (u = r("stylex"))).props(
            f.text,
            o("WAWebUISpacing").uiMargin.end24,
            p,
          )),
          (t[7] = p),
          (t[8] = b))
        : (b = t[8]);
      var v;
      t[9] !== a || t[10] !== b
        ? ((v = d.jsx("span", babelHelpers.extends({}, b, { children: a }))),
          (t[9] = a),
          (t[10] = b),
          (t[11] = v))
        : (v = t[11]);
      var S;
      t[12] !== C || t[13] !== v
        ? ((S = d.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: f.container,
            children: [C, v],
          })),
          (t[12] = C),
          (t[13] = v),
          (t[14] = S))
        : (S = t[14]);
      var R;
      t[15] !== g || t[16] !== S || t[17] !== s || t[18] !== c || t[19] !== m
        ? ((R = d.jsx(y, {
            testid: void 0,
            action: g,
            tooltip: m,
            theme: c,
            children: S,
          })),
          (t[15] = g),
          (t[16] = S),
          (t[17] = s),
          (t[18] = c),
          (t[19] = m),
          (t[20] = R))
        : (R = t[20]);
      var L;
      return (
        t[21] !== _ || t[22] !== R
          ? ((L = d.jsx("div", babelHelpers.extends({}, _, { children: R }))),
            (t[21] = _),
            (t[22] = R),
            (t[23] = L))
          : (L = t[23]),
        L
      );
    }
    function b(t) {
      var n = o("react-compiler-runtime").c(6),
        r,
        a;
      n[0] !== t
        ? ((a = t.icon),
          (r = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = r),
          (n[2] = a))
        : ((r = n[1]), (a = n[2]));
      var i;
      return (
        n[3] !== r || n[4] !== a
          ? ((i = a
              ? d.jsx(C, {
                  action: r.action,
                  disabled: r.disabled,
                  icon: a,
                  testid: void 0,
                  tooltip: r.tooltip,
                  theme: r.theme,
                  xstyle: r.xstyle,
                  children: r.children,
                })
              : d.jsx(
                  y,
                  babelHelpers.extends({}, r, { children: r.children }),
                )),
            (n[3] = r),
            (n[4] = a),
            (n[5] = i))
          : (i = n[5]),
        i
      );
    }
    ((l.DropdownItemThemeType = g), (l.DropdownItem = b));
  },
  98,
);
