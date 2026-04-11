__d(
  "WAWebEventsRSVPPopup.react",
  [
    "fbt",
    "WAWebCheckboxRoundUncheckedIcon.react",
    "WAWebDropdown.react",
    "WAWebIcHelpFilledIcon.react",
    "WAWebProtobufsE2E.pb",
    "WAWebRound.react",
    "WAWebUISpacing",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUnstyledButton.react",
    "WAWebVelocityTransitionGroup",
    "WAWebXIcon.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebIsKeyboardUser",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useImperativeHandle,
      p = d.useRef,
      _ = d.useState,
      f = {
        buttonContainer: {
          display: "x1lliihq",
          width: "xh8yej3",
          boxShadow: "x1gnnqk1",
          $$css: !0,
        },
        liContainer: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          ":hover_backgroundColor": "x1ubxc9n",
          ":focus_backgroundColor": "xbmkbis",
          $$css: !0,
        },
        goingIcon: { color: "x471nhc", $$css: !0 },
        maybeIcon: {
          color: "x1s97t2k",
          marginInlineStart: "xe4thiz",
          $$css: !0,
        },
        cantGoIcon: {
          backgroundColor: "xk0ssx3",
          height: "x1qx5ct2",
          width: "xw4jnvo",
          marginInlineStart: "x4itbla",
          $$css: !0,
        },
        iconOutline: {
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          borderTopWidth: "x1ktv7sr",
          borderInlineEndWidth: "x142x0oa",
          borderBottomWidth: "xv7zg05",
          borderInlineStartWidth: "x12dgle5",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x15pcggp",
          borderInlineEndColor: "xulpoeh",
          borderBottomColor: "xjq0bb1",
          borderInlineStartColor: "xwazadq",
          width: "x1a00udw",
          height: "xx3o462",
          $$css: !0,
        },
      };
    function g(e) {
      var t = e.controlPopupRef,
        n = e.currentResponse,
        a =
          n === void 0
            ? o("WAWebProtobufsE2E.pb")
                .Message$EventResponseMessage$EventResponseType.UNKNOWN
            : n,
        i = e.onClick,
        l = e.onClose,
        s = _(null),
        u = s[0],
        d = s[1],
        p = r("useWAWebIsKeyboardUser")(),
        f = p.isKeyboardUser;
      function g(e) {
        e !== a && i(e);
      }
      function y() {
        (g(
          o("WAWebProtobufsE2E.pb")
            .Message$EventResponseMessage$EventResponseType.GOING,
        ),
          S());
      }
      function C() {
        (g(
          o("WAWebProtobufsE2E.pb")
            .Message$EventResponseMessage$EventResponseType.MAYBE,
        ),
          S());
      }
      function b() {
        (g(
          o("WAWebProtobufsE2E.pb")
            .Message$EventResponseMessage$EventResponseType.NOT_GOING,
        ),
          S());
      }
      function v(e) {
        var t, n;
        if (f) {
          var r = e.currentTarget.getBoundingClientRect(),
            i = r.height,
            l = r.width,
            s = r.x,
            u = r.y;
          ((t = s + l / 2), (n = u + i / 2));
        }
        d({
          menu: c.jsx(h, {
            currentResponse: a,
            handleGoingClick: y,
            handleMaybeClick: C,
            handleCanNotGoClick: b,
          }),
          dirY: o("WAWebDropdown.react").DirY.TOP,
          dirX: o("WAWebDropdown.react").DirX.RIGHT,
          type: o("WAWebDropdown.react").MenuType.EventsRSVPPopup,
          flipOnRTL: !0,
          event: e,
          offsetX: t,
          offsetY: n,
        });
      }
      function S() {
        (d(null), l == null || l());
      }
      return (
        m(t, function () {
          return { open: v, close: S };
        }),
        c.jsx(r("WAWebVelocityTransitionGroup"), {
          transitionName: "dropdown",
          children: u
            ? c.jsx(o("WAWebUimUie.react").UIE, {
                displayName: "EventsRSVPPopup",
                escapable: !0,
                popable: !0,
                dismissOnWindowResize: !0,
                requestDismiss: S,
                children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: u }),
              })
            : null,
        })
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(t) {
      var n = o("react-compiler-runtime").c(31),
        a = t.currentResponse,
        i = t.handleCanNotGoClick,
        l = t.handleGoingClick,
        u = t.handleMaybeClick,
        d =
          a === void 0
            ? o("WAWebProtobufsE2E.pb")
                .Message$EventResponseMessage$EventResponseType.UNKNOWN
            : a,
        m = p(null),
        _ = p(null),
        g = p(null),
        h;
      n[0] !== d
        ? ((h =
            d ===
            o("WAWebProtobufsE2E.pb")
              .Message$EventResponseMessage$EventResponseType.GOING
              ? c.jsx(
                  o("WAWebCheckboxRoundUncheckedIcon.react")
                    .CheckboxRoundUncheckedIcon,
                  {
                    height: 20,
                    xstyle: [o("WAWebUISpacing").uiMargin.end9, f.goingIcon],
                  },
                )
              : c.jsx(
                  "span",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      f.iconOutline,
                      o("WAWebUISpacing").uiMargin.end10,
                    ),
                  ),
                )),
          (n[0] = d),
          (n[1] = h))
        : (h = n[1]);
      var y = h,
        C;
      n[2] !== d
        ? ((C =
            d ===
            o("WAWebProtobufsE2E.pb")
              .Message$EventResponseMessage$EventResponseType.MAYBE
              ? c.jsx(o("WAWebIcHelpFilledIcon.react").IcHelpFilledIcon, {
                  width: 24,
                  height: 24,
                  xstyle: [o("WAWebUISpacing").uiMargin.end7, f.maybeIcon],
                })
              : c.jsx(
                  "span",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      f.iconOutline,
                      o("WAWebUISpacing").uiMargin.end10,
                    ),
                  ),
                )),
          (n[2] = d),
          (n[3] = C))
        : (C = n[3]);
      var b = C,
        v;
      n[4] !== d
        ? ((v =
            d ===
            o("WAWebProtobufsE2E.pb")
              .Message$EventResponseMessage$EventResponseType.NOT_GOING
              ? c.jsx(o("WAWebRound.react").Round, {
                  theme: o("WAWebRound.react").RoundTheme.XSmall,
                  hideBackground: !0,
                  xstyle: [o("WAWebUISpacing").uiMargin.end9, f.cantGoIcon],
                  children: c.jsx(o("WAWebXIcon.react").XIcon, { height: 18 }),
                })
              : c.jsx(
                  "span",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      f.iconOutline,
                      o("WAWebUISpacing").uiMargin.end10,
                    ),
                  ),
                )),
          (n[4] = d),
          (n[5] = v))
        : (v = n[5]);
      var S = v,
        R;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = (e || (e = r("stylex"))).props([
            f.liContainer,
            o("WAWebUISpacing").uiPadding.top6,
            o("WAWebUISpacing").uiPadding.bottom6,
            o("WAWebUISpacing").uiPadding.start20,
            o("WAWebUISpacing").uiPadding.end30,
          ])),
          (n[6] = R))
        : (R = n[6]);
      var L;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = c.jsx("span", {
            className: "x1f6kntn",
            children: s._(/*BTDS*/ "Maybe"),
          })),
          (n[7] = L))
        : (L = n[7]);
      var E;
      n[8] !== b
        ? ((E = c.jsxs(
            "li",
            babelHelpers.extends({ tabIndex: 0, role: "menuitem" }, R, {
              children: [b, L],
            }),
          )),
          (n[8] = b),
          (n[9] = E))
        : (E = n[9]);
      var k;
      n[10] !== u || n[11] !== E
        ? ((k = c.jsx(r("WAWebUnstyledButton.react"), {
            ref: _,
            onClick: u,
            xstyle: f.buttonContainer,
            children: E,
          })),
          (n[10] = u),
          (n[11] = E),
          (n[12] = k))
        : (k = n[12]);
      var I = k,
        T;
      n[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = (e || (e = r("stylex"))).props([
            f.liContainer,
            o("WAWebUISpacing").uiPadding.top12,
            o("WAWebUISpacing").uiPadding.bottom6,
            o("WAWebUISpacing").uiPadding.start20,
            o("WAWebUISpacing").uiPadding.end30,
          ])),
          (n[13] = T))
        : (T = n[13]);
      var D;
      n[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = c.jsx("span", {
            className: "x1f6kntn",
            children: s._(/*BTDS*/ "Going"),
          })),
          (n[14] = D))
        : (D = n[14]);
      var x;
      n[15] !== y
        ? ((x = c.jsxs(
            "li",
            babelHelpers.extends({ tabIndex: 0, role: "menuitem" }, T, {
              children: [y, D],
            }),
          )),
          (n[15] = y),
          (n[16] = x))
        : (x = n[16]);
      var $;
      n[17] !== l || n[18] !== x
        ? (($ = c.jsx(r("WAWebUnstyledButton.react"), {
            ref: m,
            onClick: l,
            xstyle: f.buttonContainer,
            children: x,
          })),
          (n[17] = l),
          (n[18] = x),
          (n[19] = $))
        : ($ = n[19]);
      var P;
      n[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = (e || (e = r("stylex"))).props([
            f.liContainer,
            o("WAWebUISpacing").uiPadding.top6,
            o("WAWebUISpacing").uiPadding.bottom12,
            o("WAWebUISpacing").uiPadding.start20,
            o("WAWebUISpacing").uiPadding.end30,
          ])),
          (n[20] = P))
        : (P = n[20]);
      var N;
      n[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = c.jsx("span", {
            className: "x1f6kntn",
            children: s._(/*BTDS*/ "Not going"),
          })),
          (n[21] = N))
        : (N = n[21]);
      var M;
      n[22] !== S
        ? ((M = c.jsxs(
            "li",
            babelHelpers.extends({ tabIndex: 0, role: "menuitem" }, P, {
              children: [S, N],
            }),
          )),
          (n[22] = S),
          (n[23] = M))
        : (M = n[23]);
      var w;
      n[24] !== i || n[25] !== M
        ? ((w = c.jsx(r("WAWebUnstyledButton.react"), {
            ref: g,
            onClick: i,
            xstyle: f.buttonContainer,
            children: M,
          })),
          (n[24] = i),
          (n[25] = M),
          (n[26] = w))
        : (w = n[26]);
      var A;
      return (
        n[27] !== I || n[28] !== $ || n[29] !== w
          ? ((A = c.jsxs(c.Fragment, { children: [$, I, w] })),
            (n[27] = I),
            (n[28] = $),
            (n[29] = w),
            (n[30] = A))
          : (A = n[30]),
        A
      );
    }
    l.default = g;
  },
  226,
);
