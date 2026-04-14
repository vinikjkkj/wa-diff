__d(
  "WAWebAutoCarouselMenuMenu.react",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebAutoCarouselMenuTabMarker.react",
    "WAWebChevronCustomIcons",
    "WAWebChevronIcon.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebPanelsMenuContainer.react",
    "WAWebPanelsMenuTab.react",
    "WAWebResizeObserver.react",
    "WAWebUnstyledButton.react",
    "clamp",
    "react",
    "useWAWebIsKeyboardUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useImperativeHandle,
      f = d.useLayoutEffect,
      g = d.useRef,
      h = d.useState,
      y = n("$InternalEnum").Mirrored(["Left", "Right"]),
      C = {
        button: {
          position: "x10l6tqk",
          zIndex: "x1vjfegm",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          height: "x5yr21d",
          backgroundColor: "xgcd1z6",
          $$css: !0,
        },
        buttonIcon: { color: "xhslqc4", $$css: !0 },
        floatRight: {
          top: "x13vifvy",
          right: "x3m8u43",
          insetInlineStart: null,
          insetInlineEnd: null,
          $$css: !0,
        },
        floatLeft: {
          top: "x13vifvy",
          left: "xu96u03",
          insetInlineStart: null,
          insetInlineEnd: null,
          $$css: !0,
        },
      },
      b = 3,
      v = function (t, n, o, a) {
        if (!t || !n) return !1;
        var e = t.getBoundingClientRect(),
          i = n.getBoundingClientRect(),
          l = (o == null ? void 0 : o.clientWidth) || 0,
          s = (a == null ? void 0 : a.clientWidth) || 0;
        return (
          i.right > e.right - (r("WAWebL10N").isRTL() ? s : l) ||
          i.left < e.left + (r("WAWebL10N").isRTL() ? l : s)
        );
      };
    function S(e) {
      var t = e.direction,
        n = e.onClick,
        a = e.onRef,
        i = e.xstyle,
        l =
          t === y.Left
            ? c.jsx(o("WAWebChevronCustomIcons").ChevronLeftCustomIcon, {
                xstyle: C.buttonIcon,
              })
            : c.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                xstyle: C.buttonIcon,
              });
      return c.jsx(r("WAWebUnstyledButton.react"), {
        ref: a,
        xstyle: [C.button, i],
        onClick: n,
        children: l,
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, s),
        i = h(0),
        l = i[0],
        u = i[1],
        d = h(0),
        R = d[0],
        L = d[1],
        E = h(0),
        k = E[0],
        I = E[1],
        T = h(!1),
        D = T[0],
        x = T[1],
        $ = h(0),
        P = $[0],
        N = $[1],
        M = h(0),
        w = M[0],
        A = M[1],
        F = R <= 0,
        O = r("useWAWebIsKeyboardUser")(),
        B = O.isKeyboardUser,
        W = a.buttonStyle,
        q = a.numItems,
        U = a.onItemClick,
        V = a.renderItem,
        H = a.selectedIndex,
        G = g([]),
        z = g([]),
        j = g(null),
        K = g(null),
        Q = g(null);
      (p(
        function () {
          if (U) {
            var t = r("clamp")(H, 0, q);
            (t !== H &&
              (U(t),
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Selection out of bounds",
                    ])),
                )
                .sendLogs(
                  "auto_carousel_menu: selectedIndex (" +
                    H +
                    ") is out of bounds (0-" +
                    q +
                    ")",
                )),
              H > q ? U(q) : H < 0 && U(0));
          }
        },
        [H, q, U],
      ),
        f(
          function () {
            var e,
              t = function (t) {
                return t
                  ? r("WAWebL10N").isRTL()
                    ? l - t.offsetLeft - t.clientWidth
                    : t.offsetLeft
                  : 0;
              },
              n = function (n, r) {
                return n ? t(n) + n.clientWidth - r : 0;
              },
              o = G.current[H],
              a = G.current[R],
              i = G.current[G.current.length - 1],
              s = t(a),
              u = n(i, s);
            (N((o == null ? void 0 : o.clientWidth) || 0),
              A((o == null ? void 0 : o.offsetLeft) || 0),
              I(s),
              x(u <= l),
              (e = z.current[H]) == null || e.focus());
          },
          [H, R, l, q],
        ));
      var X = function (t, n) {
          U && U(t, n);
        },
        Y = function () {
          D || L(r("clamp")(R + b, 0, q));
        },
        J = function () {
          R !== 0 && L(r("clamp")(R - b, 0, q));
        },
        Z = function (t) {
          var e = t.width;
          u(e);
        },
        ee = m(
          function () {
            var e;
            (e = z.current[H]) == null || e.focus();
          },
          [H],
        ),
        te = r("WAWebL10N").isRTL()
          ? [C.floatRight, C.floatLeft]
          : [C.floatLeft, C.floatRight],
        ne = te[0],
        re = te[1],
        oe = r("WAWebL10N").isRTL() ? [y.Right, y.Left] : [y.Left, y.Right],
        ae = oe[0],
        ie = oe[1],
        le = c.jsx(S, {
          xstyle: [W, ne],
          direction: ae,
          onClick: J,
          onRef: function (t) {
            Q.current = t;
          },
        }),
        se = c.jsx(S, {
          xstyle: [W, re],
          direction: ie,
          onClick: Y,
          onRef: function (t) {
            K.current = t;
          },
        }),
        ue = (r("WAWebL10N").isRTL() ? 1 : -1) * k,
        ce = "translateX(" + ue + "px)",
        de = function (t) {
          var e = r("WAWebL10N").isRTL() ? -1 : 1,
            n = r("clamp")(H + e, 0, q - 1),
            o = z.current[n];
          (v(j.current, o, K.current, Q.current) &&
            (r("WAWebL10N").isRTL() ? J() : Y()),
            X(n, t),
            t.preventDefault());
        },
        me = function (t) {
          var e = r("WAWebL10N").isRTL() ? 1 : -1,
            n = r("clamp")(H + e, 0, q - 1),
            o = z.current[n];
          (v(j.current, o, K.current, Q.current) &&
            (r("WAWebL10N").isRTL() ? Y() : J()),
            X(n, t),
            t.preventDefault());
        },
        pe = function () {
          var e;
          return (
            ((e = j.current) == null
              ? void 0
              : e.contains(document.activeElement)) || !1
          );
        };
      _(n, function () {
        return { focus: ee, hasFocus: pe };
      });
      var _e = { left: me, right: de };
      return c.jsx(o("WAWebPanelsMenuContainer.react").MenuContainer, {
        theme: a.theme,
        children: c.jsxs(r("WAWebResizeObserver.react"), {
          className: "x5yr21d xh8yej3 xgcd1z6",
          onResize: Z,
          children: [
            !F && le,
            c.jsx("div", {
              ref: j,
              className: "x6ikm8r x10wlt62 xuxw1ft",
              children: c.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
                className: "x11xpdln x1d8287x xwji4o3",
                style: { transform: ce },
                role: "tablist",
                handlers: _e,
                tabIndex: null,
                children: [
                  Array.from({ length: q }, function (e, t) {
                    var n = H === t;
                    return c.jsx(
                      "div",
                      {
                        className: "x1rg5ohu x13fj5qh x1xegmmw",
                        ref: (function (e) {
                          function t(t) {
                            return e.apply(this, arguments);
                          }
                          return (
                            (t.toString = function () {
                              return e.toString();
                            }),
                            t
                          );
                        })(function (e) {
                          G.current[t] = e;
                        }),
                        children: c.jsx(
                          o("WAWebPanelsMenuTab.react").MenuTab,
                          {
                            role: "tab",
                            onRef: function (n) {
                              z.current[t] = n;
                            },
                            onClick: X,
                            sectionId: t,
                            selected: n,
                            showFocusIndicator: B,
                            theme: o("WAWebPanelsMenuTab.react").THEMES.NONE,
                            children: V(t),
                          },
                          t,
                        ),
                      },
                      t,
                    );
                  }),
                  c.jsx(r("WAWebAutoCarouselMenuTabMarker.react"), {
                    selectedTabIndex: H,
                    width: P,
                    offsetPx: w,
                    animate: !0,
                  }),
                ],
              }),
            }),
            !D && se,
          ],
        }),
      });
    }
    ((R.displayName = R.name + " [from " + i.id + "]"), (l.default = R));
  },
  98,
);
