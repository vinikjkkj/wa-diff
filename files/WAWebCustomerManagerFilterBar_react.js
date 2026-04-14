__d(
  "WAWebCustomerManagerFilterBar.react",
  [
    "fbt",
    "WAWebAcquisitionSourceNames",
    "WAWebClickable.react",
    "WAWebCustomerManagerSearchUtils",
    "WAWebLabelCollection",
    "WAWebLabelGetters",
    "WAWebLeadStage",
    "WAWebLeadStageNames",
    "WAWebListUtils",
    "WAWebListsGatingUtils",
    "WDSChip.react",
    "WDSIconIcAdd.react",
    "WDSIconIcBlock.react",
    "WDSIconIcClose.react",
    "WDSIconIcLabelFilled.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "WDSText.react",
    "WDSVars.stylex",
    "react",
    "stylex",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useMemo,
      _ = d.useRef,
      f = {
        closeButton: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "x1mzsije",
          height: "x8lyb6r",
          color: "xhslqc4",
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          $$css: !0,
        },
        colorDot: {
          width: "x1dmbnle",
          height: "xkb9736",
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        labelMenuItem: {
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          alignItems: "x6s0dn4",
          columnGap: "x1s70e7g",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          cursor: "x1ypdohk",
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          ":hover_backgroundColor": "x1ubxc9n",
          $$css: !0,
        },
      },
      g = {
        bgColor: function (t) {
          return [
            { backgroundColor: t != null ? "xl8spv7" : t, $$css: !0 },
            { "--x-backgroundColor": t != null ? t : void 0 },
          ];
        },
        fgColor: function (t) {
          return [
            { color: t != null ? "x14rh7hd" : t, $$css: !0 },
            { "--x-color": t != null ? t : void 0 },
          ];
        },
      };
    function h(t) {
      var n,
        a = t.hideLeadStage,
        i = t.onClear,
        l = t.onClearAcquisitionSource,
        u = t.onClearLabel,
        d = t.onSelectAcquisitionSource,
        h = t.onSelectLabel,
        y = t.onToggleStage,
        C = t.selectedAcquisitionSource,
        b = t.selectedLabelId,
        v = t.selectedStages,
        S = t.testid,
        R = _(null),
        L = _(null),
        E = _(null),
        k = _(null),
        I = o("WAWebListsGatingUtils").isListsEnabled(),
        T = v.length > 0,
        D = b != null,
        x = C != null,
        $ = p(
          function () {
            var e;
            if (v.length === 0) return null;
            var t = new Set(v);
            return (e = o("WAWebLeadStage").LEAD_STAGE_ORDER.find(function (e) {
              return t.has(e);
            })) != null
              ? e
              : null;
          },
          [v],
        ),
        P = v.length - 1,
        N = c.jsx(r("WDSMenu.react"), {
          children: o("WAWebLeadStage").LEAD_STAGE_ORDER.map(function (e) {
            return c.jsx(
              r("WDSMenuItem.react"),
              {
                closeMenuOnPress: !1,
                isToggleable: !0,
                onPress: function () {
                  return y(e);
                },
                testid: void 0,
                title: o("WAWebLeadStageNames").getLeadStageName(e),
                toggled: v.includes(e),
              },
              e,
            );
          }),
        }),
        M = o("WAWebLabelCollection")
          .LabelCollection.getActiveLists()
          .filter(function (e) {
            return !o("WAWebListUtils").isBuiltInList(e.type);
          }),
        w = c.jsxs(r("WDSMenu.react"), {
          children: [
            M.map(function (t) {
              var n = o("WAWebLabelGetters").getHexColor(t);
              return c.jsxs(
                o("WAWebClickable.react").Clickable,
                {
                  onClick: function () {
                    return h(t.id);
                  },
                  dataTestId: "label-filter-" + t.id,
                  xstyle: f.labelMenuItem,
                  children: [
                    n != null &&
                      (I
                        ? c.jsx(
                            "span",
                            babelHelpers.extends(
                              {},
                              (e || (e = r("stylex"))).props(
                                f.colorDot,
                                g.bgColor(n),
                              ),
                            ),
                          )
                        : c.jsx(
                            "span",
                            babelHelpers.extends(
                              {},
                              (e || (e = r("stylex"))).props(g.fgColor(n)),
                              {
                                children: c.jsx(
                                  r("WDSIconIcLabelFilled.react"),
                                  { width: 16, height: 16 },
                                ),
                              },
                            ),
                          )),
                    c.jsx(r("WDSText.react"), {
                      type: "Body2",
                      colorName: "contentDefault",
                      maxLines: 1,
                      children: t.name,
                    }),
                  ],
                },
                t.id,
              );
            }),
            c.jsxs(o("WAWebClickable.react").Clickable, {
              onClick: function () {
                return h(
                  o("WAWebCustomerManagerSearchUtils").NO_LABEL_FILTER_ID,
                );
              },
              dataTestId: "label-filter-no-label",
              xstyle: f.labelMenuItem,
              children: [
                c.jsx(
                  "span",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      g.fgColor(
                        o("WDSVars.stylex").WDSVars[
                          "--WDS-content-deemphasized"
                        ],
                      ),
                    ),
                    {
                      children: c.jsx(r("WDSIconIcBlock.react"), {
                        width: 16,
                        height: 16,
                      }),
                    },
                  ),
                ),
                c.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDefault",
                  maxLines: 1,
                  children: I
                    ? s._(/*BTDS*/ "Unlisted")
                    : s._(/*BTDS*/ "Unlabeled"),
                }),
              ],
            }),
          ],
        }),
        A = c.jsx(r("WDSMenu.react"), {
          children: o("WAWebAcquisitionSourceNames")
            .getRegisteredAcquisitionSourceIds()
            .map(function (e) {
              var t;
              return c.jsx(
                r("WDSMenuItem.react"),
                {
                  title:
                    (t = o(
                      "WAWebAcquisitionSourceNames",
                    ).getAcquisitionSourceDisplayName(e)) != null
                      ? t
                      : "",
                  onPress: function () {
                    return d(e);
                  },
                  testid: void 0,
                },
                e,
              );
            }),
        }),
        F = c.jsxs(r("WDSMenu.react"), {
          children: [
            a !== !0 &&
              c.jsx(r("WDSMenuItem.react"), {
                title: s._(/*BTDS*/ "Lead stage"),
                hasSubmenu: !0,
                submenuContent: N,
                testid: void 0,
              }),
            c.jsx(r("WDSMenuItem.react"), {
              title: I ? s._(/*BTDS*/ "List") : s._(/*BTDS*/ "Label"),
              hasSubmenu: !0,
              submenuContent: w,
              testid: void 0,
            }),
            c.jsx(r("WDSMenuItem.react"), {
              title: s._(/*BTDS*/ "Acquisition source"),
              hasSubmenu: !0,
              submenuContent: A,
              testid: void 0,
            }),
          ],
        }),
        O = r("useWDSMenu")({ targetRef: R, menu: F, dismissable: !0 }),
        B = O.closeMenu,
        W = O.isMenuOpen,
        q = O.menuPortal,
        U = O.openMenu,
        V = r("useWDSMenu")({ targetRef: L, menu: N, dismissable: !0 }),
        H = V.closeMenu,
        G = V.isMenuOpen,
        z = V.menuPortal,
        j = V.openMenu,
        K = r("useWDSMenu")({ targetRef: E, menu: w, dismissable: !0 }),
        Q = K.closeMenu,
        X = K.isMenuOpen,
        Y = K.menuPortal,
        J = K.openMenu,
        Z = m(
          function () {
            W ? B() : U();
          },
          [B, W, U],
        ),
        ee = m(
          function () {
            G ? H() : j();
          },
          [H, G, j],
        ),
        te = m(
          function () {
            X ? Q() : J();
          },
          [Q, X, J],
        ),
        ne = r("useWDSMenu")({ targetRef: k, menu: A, dismissable: !0 }),
        re = ne.closeMenu,
        oe = ne.isMenuOpen,
        ae = ne.menuPortal,
        ie = ne.openMenu,
        le = m(
          function () {
            oe ? re() : ie();
          },
          [re, oe, ie],
        ),
        se =
          b != null ? o("WAWebLabelCollection").LabelCollection.get(b) : null,
        ue = se != null ? o("WAWebLabelGetters").getHexColor(se) : null;
      return c.jsxs("div", {
        className: "x78zum5 x1q0g3np x6s0dn4 x1s70e7g",
        children: [
          T &&
            a !== !0 &&
            c.jsxs(c.Fragment, {
              children: [
                c.jsxs("div", {
                  className:
                    "x78zum5 x1q0g3np x6s0dn4 x1ekkm8c x1143rjc xum4auv xj21bgg x4wrhlh x1iw51ew x1icxu4v x10w6t97 xmixu3c x1ypdohk",
                  ref: L,
                  "data-testid": void 0,
                  children: [
                    c.jsx(o("WAWebClickable.react").Clickable, {
                      onClick: ee,
                      children: c.jsxs("span", {
                        className:
                          "x3nfvp2 x6s0dn4 x1f6kntn x1fc57z9 x14ug900 xuxw1ft",
                        children: [
                          v.length === 1
                            ? s._(/*BTDS*/ "Lead stage:")
                            : s._(/*BTDS*/ "Lead stages:"),
                          " ",
                          c.jsxs("span", {
                            className: "x117nqv4",
                            children: [
                              $ != null
                                ? o("WAWebLeadStageNames").getLeadStageName($)
                                : "",
                              P > 0 &&
                                c.jsxs(c.Fragment, {
                                  children: [
                                    " ",
                                    s._(/*BTDS*/ "+{count}", [
                                      s._param("count", P),
                                    ]),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    c.jsx(o("WAWebClickable.react").Clickable, {
                      ariaLabel: s._(/*BTDS*/ "Remove lead stage filter"),
                      dataTestId: "lead-stage-filter-clear",
                      onClick: i,
                      xstyle: f.closeButton,
                      children: c.jsx(r("WDSIconIcClose.react"), {
                        height: 16,
                        width: 16,
                      }),
                    }),
                  ],
                }),
                z,
              ],
            }),
          D &&
            (se != null ||
              b === o("WAWebCustomerManagerSearchUtils").NO_LABEL_FILTER_ID) &&
            c.jsxs(c.Fragment, {
              children: [
                c.jsxs("div", {
                  className:
                    "x78zum5 x1q0g3np x6s0dn4 x1ekkm8c x1143rjc xum4auv xj21bgg x4wrhlh x1iw51ew x1icxu4v x10w6t97 xmixu3c x1ypdohk",
                  ref: E,
                  "data-testid": void 0,
                  children: [
                    c.jsx(o("WAWebClickable.react").Clickable, {
                      onClick: te,
                      children: c.jsxs("span", {
                        className:
                          "x3nfvp2 x6s0dn4 x1f6kntn x1fc57z9 x14ug900 xuxw1ft",
                        children: [
                          I ? s._(/*BTDS*/ "List:") : s._(/*BTDS*/ "Label:"),
                          se != null &&
                            ue != null &&
                            c.jsx("span", {
                              className: "x3nfvp2 x1wbi8v6 x7g7pl8",
                              children: I
                                ? c.jsx(
                                    "span",
                                    babelHelpers.extends(
                                      {},
                                      (e || (e = r("stylex"))).props(
                                        f.colorDot,
                                        g.bgColor(ue),
                                      ),
                                    ),
                                  )
                                : c.jsx(
                                    "span",
                                    babelHelpers.extends(
                                      {},
                                      (e || (e = r("stylex"))).props(
                                        g.fgColor(ue),
                                      ),
                                      {
                                        children: c.jsx(
                                          r("WDSIconIcLabelFilled.react"),
                                          { width: 12, height: 12 },
                                        ),
                                      },
                                    ),
                                  ),
                            }),
                          c.jsx("span", {
                            className: "x117nqv4",
                            children:
                              b ===
                              o("WAWebCustomerManagerSearchUtils")
                                .NO_LABEL_FILTER_ID
                                ? I
                                  ? s._(/*BTDS*/ "Unlisted")
                                  : s._(/*BTDS*/ "Unlabeled")
                                : (n = se == null ? void 0 : se.name) != null
                                  ? n
                                  : "",
                          }),
                        ],
                      }),
                    }),
                    c.jsx(o("WAWebClickable.react").Clickable, {
                      ariaLabel: I
                        ? s._(/*BTDS*/ "Remove list filter")
                        : s._(/*BTDS*/ "Remove label filter"),
                      dataTestId: "label-filter-clear",
                      onClick: u,
                      xstyle: f.closeButton,
                      children: c.jsx(r("WDSIconIcClose.react"), {
                        height: 16,
                        width: 16,
                      }),
                    }),
                  ],
                }),
                Y,
              ],
            }),
          x &&
            C != null &&
            c.jsxs(c.Fragment, {
              children: [
                c.jsxs("div", {
                  className:
                    "x78zum5 x1q0g3np x6s0dn4 x1ekkm8c x1143rjc xum4auv xj21bgg x4wrhlh x1iw51ew x1icxu4v x10w6t97 xmixu3c x1ypdohk",
                  ref: k,
                  "data-testid": void 0,
                  children: [
                    c.jsx(o("WAWebClickable.react").Clickable, {
                      onClick: le,
                      children: c.jsxs("span", {
                        className:
                          "x3nfvp2 x6s0dn4 x1f6kntn x1fc57z9 x14ug900 xuxw1ft",
                        children: [
                          s._(/*BTDS*/ "Acquisition source:"),
                          " ",
                          c.jsx("span", {
                            className: "x117nqv4",
                            children: o(
                              "WAWebAcquisitionSourceNames",
                            ).getAcquisitionSourceDisplayName(C),
                          }),
                        ],
                      }),
                    }),
                    c.jsx(o("WAWebClickable.react").Clickable, {
                      ariaLabel: s._(
                        /*BTDS*/ "Remove acquisition source filter",
                      ),
                      dataTestId: "acquisition-source-filter-clear",
                      onClick: l,
                      xstyle: f.closeButton,
                      children: c.jsx(r("WDSIconIcClose.react"), {
                        height: 16,
                        width: 16,
                      }),
                    }),
                  ],
                }),
                ae,
              ],
            }),
          c.jsx(r("WDSChip.react"), {
            ref: R,
            Icon: r("WDSIconIcAdd.react"),
            iconOnly: !0,
            label: s._(/*BTDS*/ "Add filter"),
            onPress: Z,
            "aria-pressed": W,
            testid: void 0,
          }),
          q,
        ],
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
