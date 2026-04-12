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
      var n = t.currentResponse,
        a =
          n === void 0
            ? o("WAWebProtobufsE2E.pb")
                .Message$EventResponseMessage$EventResponseType.UNKNOWN
            : n,
        i = t.handleCanNotGoClick,
        l = t.handleGoingClick,
        u = t.handleMaybeClick,
        d = p(null),
        m = p(null),
        _ = p(null),
        g =
          a ===
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
              ),
        h =
          a ===
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
              ),
        y =
          a ===
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
              ),
        C = c.jsx(r("WAWebUnstyledButton.react"), {
          ref: m,
          onClick: u,
          xstyle: f.buttonContainer,
          children: c.jsxs(
            "li",
            babelHelpers.extends(
              { tabIndex: 0, role: "menuitem" },
              (e || (e = r("stylex"))).props([
                f.liContainer,
                o("WAWebUISpacing").uiPadding.top6,
                o("WAWebUISpacing").uiPadding.bottom6,
                o("WAWebUISpacing").uiPadding.start20,
                o("WAWebUISpacing").uiPadding.end30,
              ]),
              {
                children: [
                  h,
                  c.jsx("span", {
                    className: "x1f6kntn",
                    children: s._(/*BTDS*/ "Maybe"),
                  }),
                ],
              },
            ),
          ),
        });
      return c.jsxs(c.Fragment, {
        children: [
          c.jsx(r("WAWebUnstyledButton.react"), {
            ref: d,
            onClick: l,
            xstyle: f.buttonContainer,
            children: c.jsxs(
              "li",
              babelHelpers.extends(
                { tabIndex: 0, role: "menuitem" },
                e.props([
                  f.liContainer,
                  o("WAWebUISpacing").uiPadding.top12,
                  o("WAWebUISpacing").uiPadding.bottom6,
                  o("WAWebUISpacing").uiPadding.start20,
                  o("WAWebUISpacing").uiPadding.end30,
                ]),
                {
                  children: [
                    g,
                    c.jsx("span", {
                      className: "x1f6kntn",
                      children: s._(/*BTDS*/ "Going"),
                    }),
                  ],
                },
              ),
            ),
          }),
          C,
          c.jsx(r("WAWebUnstyledButton.react"), {
            ref: _,
            onClick: i,
            xstyle: f.buttonContainer,
            children: c.jsxs(
              "li",
              babelHelpers.extends(
                { tabIndex: 0, role: "menuitem" },
                e.props([
                  f.liContainer,
                  o("WAWebUISpacing").uiPadding.top6,
                  o("WAWebUISpacing").uiPadding.bottom12,
                  o("WAWebUISpacing").uiPadding.start20,
                  o("WAWebUISpacing").uiPadding.end30,
                ]),
                {
                  children: [
                    y,
                    c.jsx("span", {
                      className: "x1f6kntn",
                      children: s._(/*BTDS*/ "Not going"),
                    }),
                  ],
                },
              ),
            ),
          }),
        ],
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
