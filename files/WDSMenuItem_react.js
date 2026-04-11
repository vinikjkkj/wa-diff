__d(
  "WDSMenuItem.react",
  [
    "BaseContextualLayer.react",
    "BaseMenuFocusGroup",
    "BaseMenuItemRoleContext",
    "WAWebKeyboardShortcuts",
    "WDSGlobalContext",
    "WDSIconIcArrowRight.react",
    "WDSIconIcCheck.react",
    "WDSMenuContext",
    "WDSMenuItemConfig",
    "WDSShortcut.react",
    "WDSText.react",
    "react",
    "react-strict-dom",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useContext,
      p = c.useEffect,
      _ = c.useMemo,
      f = c.useRef,
      g = c.useState,
      h = {
        button: {
          backgroundColor: "xjbqb8w",
          borderTopWidth: "x972fbf",
          borderInlineEndWidth: "x10w94by",
          borderBottomWidth: "x1qhh985",
          borderInlineStartWidth: "x14e42zd",
          color: "x1heor9g",
          cursor: "x1ypdohk",
          outline: "x1a2a7pz",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          textAlign: "x1yc453h",
          width: "xh8yej3",
          $$css: !0,
        },
        disabled: { cursor: "xt0e3qv", $$css: !0 },
        focusRing: {
          ":focus-visible_outlineColor": "xtnn1bt",
          ":focus-visible_outlineStyle": "x9v5kkp",
          ":focus-visible_outlineWidth": "x784prv",
          $$css: !0,
        },
      };
    function y(t) {
      var n,
        a,
        i = t.Icon,
        l = t.closeMenuOnPress,
        s = l === void 0 ? !0 : l,
        c = t.destructive,
        y = c === void 0 ? !1 : c,
        C = t.disabled,
        b = C === void 0 ? !1 : C,
        v = t.hasIndent,
        S = v === void 0 ? !1 : v,
        R = t.hasNumber,
        L = R === void 0 ? !1 : R,
        E = t.hasSubmenu,
        k = E === void 0 ? !1 : E,
        I = t.iconDirectional,
        T = t.iconXstyle,
        D = t.isToggleable,
        x = D === void 0 ? !1 : D,
        $ = t.number,
        P = t.onHoverIn,
        N = t.onHoverOut,
        M = t.onPress,
        w = t.profilePhoto,
        A = t.shortcut,
        F = t.submenuContent,
        O = t.subtitle,
        B = t.testid,
        W = t.title,
        q = t.toggled,
        U = q === void 0 ? !1 : q,
        V = t.truncateText,
        H = V === void 0 ? !1 : V,
        G = t.type,
        z = g(!1),
        j = z[0],
        K = z[1],
        Q = g(!1),
        X = Q[0],
        Y = Q[1],
        J = g(!1),
        Z = J[0],
        ee = J[1],
        te = g(!1),
        ne = te[0],
        re = te[1],
        oe = f(null),
        ae = f(null),
        ie = f(null),
        le = m(o("WDSGlobalContext").WDSContext),
        se = le.closeAllMenus,
        ue = m(o("WDSMenuContext").WDSMenuSubmenuNavigationContext),
        ce = ue.exitSubmenu,
        de = (n = m(r("BaseMenuItemRoleContext"))) != null ? n : "menuitem",
        me = d(function () {
          (re(!0),
            (ie.current = self.setTimeout(function () {
              var e;
              (re(!1), ee(!1), (e = oe.current) == null || e.focus());
            }, o("WDSGlobalContext").MENU_EXIT_ANIMATION_DURATION)));
        }, []),
        pe = _(
          function () {
            return { exitSubmenu: me };
          },
          [me],
        );
      p(function () {
        return function () {
          (ie.current != null && self.clearTimeout(ie.current),
            ae.current != null && self.clearTimeout(ae.current));
        };
      }, []);
      var _e = d(
        function () {
          (M == null || M(), !k && s && se());
        },
        [M, se, k, s],
      );
      p(
        function () {
          var e = oe.current;
          if (e != null) {
            var t = function (t) {
              var e = t.key.toLowerCase();
              if ((e === "enter" || e === " ") && !b) {
                (t.preventDefault(), _e());
                return;
              }
              if (e === "arrowright" && k && !Z) {
                (t.preventDefault(), t.stopPropagation(), ee(!0));
                return;
              }
              e === "arrowleft" &&
                (t.preventDefault(), t.stopPropagation(), ce());
            };
            return (
              e.addEventListener("keydown", t),
              function () {
                return e.removeEventListener("keydown", t);
              }
            );
          }
        },
        [k, Z, ce, b, _e],
      );
      var fe = _(
          function () {
            return { isClosing: ne };
          },
          [ne],
        ),
        ge = function (t) {
          (ae.current != null &&
            (self.clearTimeout(ae.current), (ae.current = null)),
            K(!0),
            k &&
              (ae.current = self.setTimeout(function () {
                ee(!0);
              }, 200)),
            P == null || P(t));
        },
        he = function (t) {
          (ae.current != null &&
            (self.clearTimeout(ae.current), (ae.current = null)),
            K(!1),
            k &&
              Z &&
              (ae.current = self.setTimeout(function () {
                me();
              }, o("WDSGlobalContext").MENU_EXIT_ANIMATION_DURATION)),
            N == null || N(t));
        },
        ye = d(function () {
          var e;
          (e = oe.current) != null && e.matches(":focus-visible") && Y(!0);
        }, []),
        Ce = d(function () {
          Y(!1);
        }, []),
        be = o("WDSMenuItemConfig").getMenuItemLayoutStyles(),
        ve;
      if (
        (A != null &&
          (typeof A == "object"
            ? (ve = A)
            : (ve = o("WAWebKeyboardShortcuts").getWDSShortcuts(A))),
        G === "separator")
      )
        return u.jsx(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(be.separator),
          ),
        );
      if (G === "groupHeader")
        return u.jsx(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(be.groupHeader),
            {
              children: u.jsx(r("WDSText.react"), {
                type: "Body3Emphasized",
                colorName: "contentDeemphasized",
                selectable: !1,
                children: W,
              }),
            },
          ),
        );
      var Se = i != null,
        Re = O != null,
        Le = ve != null || k || L,
        Ee = w != null,
        ke = o("WDSMenuItemConfig").getMenuItemLayoutStyles({
          hasIcon: Se,
          hasSubtitle: Re,
          hasEndSection: Le,
          isToggleable: x,
          hasIndent: S,
          hasProfilePhoto: Ee,
          number: $,
        }),
        Ie = u.jsxs(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(
              ke.listItemBase,
              Re && ke.listItemWithSubtitle,
            ),
            {
              children: [
                S &&
                  u.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      (e || (e = r("stylex"))).props(ke.indentContainer),
                    ),
                  ),
                w &&
                  u.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      (e || (e = r("stylex"))).props(ke.profilePhotoContainer),
                    ),
                  ),
                x &&
                  u.jsxs(
                    "div",
                    babelHelpers.extends(
                      {},
                      (e || (e = r("stylex"))).props(ke.toggledContainer),
                      {
                        children: [
                          u.jsx(
                            "div",
                            babelHelpers.extends(
                              {},
                              (e || (e = r("stylex"))).props(ke.iconContainer),
                              {
                                children:
                                  U &&
                                  u.jsx(r("WDSIconIcCheck.react"), {
                                    height:
                                      o("WDSMenuItemConfig")
                                        .WDSMenuItemIconSize,
                                    width:
                                      o("WDSMenuItemConfig")
                                        .WDSMenuItemIconSize,
                                  }),
                              },
                            ),
                          ),
                          i != null &&
                            u.jsx(
                              "div",
                              babelHelpers.extends(
                                {},
                                (e || (e = r("stylex"))).props(
                                  ke.iconContainer,
                                  T,
                                ),
                                {
                                  children: u.jsx(i, {
                                    directional: I,
                                    height:
                                      o("WDSMenuItemConfig")
                                        .WDSMenuItemIconSize,
                                    width:
                                      o("WDSMenuItemConfig")
                                        .WDSMenuItemIconSize,
                                    xstyle: T,
                                  }),
                                },
                              ),
                            ),
                        ],
                      },
                    ),
                  ),
                !x &&
                  i != null &&
                  u.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      (e || (e = r("stylex"))).props(
                        ke.iconContainer,
                        ke.startEndContainer,
                        T,
                      ),
                      {
                        children: u.jsx(i, {
                          directional: I,
                          "aria-hidden": !0,
                          height: o("WDSMenuItemConfig").WDSMenuItemIconSize,
                          width: o("WDSMenuItemConfig").WDSMenuItemIconSize,
                          xstyle: T,
                        }),
                      },
                    ),
                  ),
                u.jsxs(
                  "div",
                  babelHelpers.extends(
                    {},
                    e.props(
                      ke.textContainer,
                      !Le && ke.listItemEndPadding,
                      !i && !x && !S && !w && ke.listItemDefault,
                    ),
                    {
                      children: [
                        W != null &&
                          u.jsx(r("WDSText.react"), {
                            maxLines: H ? 1 : void 0,
                            children: W,
                            colorName: o(
                              "WDSMenuItemConfig",
                            ).getMenuItemTextColorStyles(b, y, !1, j, X),
                            type: "Body2",
                            selectable: !1,
                          }),
                        Re &&
                          u.jsx(r("WDSText.react"), {
                            children: O,
                            colorName: o(
                              "WDSMenuItemConfig",
                            ).getMenuItemTextColorStyles(b, y, !0, j, X),
                            type: "Body3",
                            selectable: !1,
                          }),
                      ],
                    },
                  ),
                ),
                Le &&
                  u.jsxs(
                    "div",
                    babelHelpers.extends(
                      {},
                      (e || (e = r("stylex"))).props(ke.endSectionContainer),
                      {
                        children: [
                          ve != null &&
                            u.jsx(
                              "div",
                              babelHelpers.extends(
                                {},
                                (e || (e = r("stylex"))).props(
                                  ke.shortcutContainer,
                                ),
                                {
                                  children: u.jsx(
                                    r("WDSShortcut.react"),
                                    babelHelpers.extends({}, ve, {
                                      inverse: !1,
                                    }),
                                  ),
                                },
                              ),
                            ),
                          k &&
                            u.jsx(
                              "div",
                              babelHelpers.extends(
                                {},
                                (e || (e = r("stylex"))).props(
                                  ke.iconContainer,
                                  ke.submenuContainer,
                                ),
                                {
                                  children: u.jsx(
                                    r("WDSIconIcArrowRight.react"),
                                    {
                                      "aria-hidden": !0,
                                      height:
                                        o("WDSMenuItemConfig")
                                          .WDSMenuItemIconSize,
                                      width:
                                        o("WDSMenuItemConfig")
                                          .WDSMenuItemIconSize,
                                    },
                                  ),
                                },
                              ),
                            ),
                          L &&
                            u.jsx(
                              "div",
                              babelHelpers.extends(
                                {},
                                (e || (e = r("stylex"))).props(
                                  ke.numberContainer,
                                ),
                                {
                                  children: u.jsx(r("WDSText.react"), {
                                    children: $,
                                    colorName: o(
                                      "WDSMenuItemConfig",
                                    ).getMenuItemTextColorStyles(
                                      b,
                                      y,
                                      !1,
                                      j,
                                      X,
                                    ),
                                    type: "Body3",
                                    selectable: !1,
                                  }),
                                },
                              ),
                            ),
                        ],
                      },
                    ),
                  ),
              ],
            },
          ),
        ),
        Te = o("WDSMenuItemConfig").getMenuItemColorStyles(y, b),
        De =
          Z && F
            ? u.jsx(r("BaseContextualLayer.react"), {
                contextRef: oe,
                position: "end",
                align: "start",
                containFocus: !0,
                children: u.jsx(o("react-strict-dom").html.div, {
                  "data-menu-content": !0,
                  onMouseEnter: ge,
                  onMouseLeave: he,
                  children: u.jsx(
                    o("WDSMenuContext").WDSMenuSubmenuNavigationContext
                      .Provider,
                    {
                      value: pe,
                      children: u.jsx(
                        o("WDSMenuContext").WDSMenuAnimationContext.Provider,
                        { value: fe, children: F },
                      ),
                    },
                  ),
                }),
              })
            : null;
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(r("BaseMenuFocusGroup").FocusItem, {
            disabled: b,
            children: u.jsx(o("react-strict-dom").html.button, {
              ref: oe,
              "aria-label": W != null ? W : "",
              "data-testid": void 0,
              disabled: b,
              onClick: _e,
              onFocusIn: ye,
              onFocusOut: Ce,
              onMouseEnter: ge,
              onMouseLeave: he,
              role: de,
              style: [
                h.button,
                h.focusRing,
                b && h.disabled,
                Te == null || (a = Te.xstyleConfig) == null ? void 0 : a.item,
              ],
              children: Ie,
            }),
          }),
          De,
        ],
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  98,
);
