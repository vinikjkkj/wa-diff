__d(
  "WAWebLeadStageChatHeaderButton.react",
  [
    "fbt",
    "WAJids",
    "WAWebCustomerDataFieldSaver",
    "WAWebLeadStage",
    "WAWebLeadStageNames",
    "WAWebScreenWidthThresholds",
    "WAWebTabOrder",
    "WAWebUnstyledButton.react",
    "WDSIconIcArrowDropDown.react",
    "WDSIconIcSort.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "WDSText.react",
    "react",
    "useWAWebCustomerDataForContact",
    "useWAWebWindowSize",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useMemo,
      p = c.useRef,
      _ = {
        button: {
          alignItems: "x6s0dn4",
          backgroundColor: "x1280gxy",
          borderTopColor: "xnj1f2r",
          borderInlineEndColor: "x2uibgs",
          borderBottomColor: "xkveyfu",
          borderInlineStartColor: "x12llq9",
          borderStartStartRadius: "xhpystz",
          borderStartEndRadius: "xhmftvz",
          borderEndEndRadius: "x11v37me",
          borderEndStartRadius: "x1tw5c3r",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          cursor: "x1ypdohk",
          display: "x78zum5",
          columnGap: "x1s70e7g",
          height: "x10kmny3",
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          paddingLeft: null,
          paddingRight: null,
          ":hover_backgroundColor": "x1ubxc9n",
          $$css: !0,
        },
        icon: {
          color: "x14ug900",
          height: "x8lyb6r",
          width: "x1mzsije",
          $$css: !0,
        },
      };
    function f(e) {
      var t,
        n,
        a = e.chat,
        i = r("useWAWebWindowSize")(),
        l = i.width < o("WAWebScreenWidthThresholds").NARROW_SCREEN_THRESHOLD,
        c = (t = a.contact) == null ? void 0 : t.id,
        f = r("useWAWebCustomerDataForContact")(c != null ? c : a.id),
        g =
          (n = o("WAWebLeadStage").getLeadStageFromNumber(
            f == null ? void 0 : f.leadStage,
          )) != null
            ? n
            : o("WAWebLeadStage").LeadStage.NONE,
        h = o("WAJids").unsafeCoerceToChatJid(a.id.toString()),
        y = d(
          function (e) {
            o("WAWebCustomerDataFieldSaver").handleLeadStageTransition(
              h,
              f,
              e,
              g,
            );
          },
          [h, g, f],
        ),
        C = p(null),
        b = m(
          function () {
            return u.jsx(r("WDSMenu.react"), {
              children: o("WAWebLeadStage").LEAD_STAGE_ORDER_WITH_NONE.map(
                function (e) {
                  return u.jsx(
                    r("WDSMenuItem.react"),
                    {
                      isToggleable: !0,
                      onPress: function () {
                        return y(e);
                      },
                      testid: void 0,
                      title: o("WAWebLeadStageNames").getLeadStageName(e),
                      toggled: g === e,
                    },
                    e,
                  );
                },
              ),
            });
          },
          [g, y],
        ),
        v = r("useWDSMenu")({ targetRef: C, menu: b }),
        S = v.closeMenu,
        R = v.isMenuOpen,
        L = v.menuPortal,
        E = v.openMenu,
        k = d(
          function (e) {
            (e.preventDefault(), e.stopPropagation(), R ? S() : E());
          },
          [S, R, E],
        ),
        I =
          g !== o("WAWebLeadStage").LeadStage.NONE
            ? o("WAWebLeadStageNames").getLeadStageName(g)
            : s._(/*BTDS*/ "Lead stage");
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx("div", {
            className: "x150mmf0",
            children: u.jsxs(r("WAWebUnstyledButton.react"), {
              ref: C,
              dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
              xstyle: _.button,
              onClick: k,
              "aria-label": s._(/*BTDS*/ "Lead stage"),
              children: [
                u.jsx(r("WDSIconIcSort.react"), { iconXstyle: _.icon }),
                !l &&
                  u.jsx(r("WDSText.react"), {
                    type: "Body2Emphasized",
                    textAlign: "center",
                    colorName: "contentDefault",
                    children: I,
                  }),
                u.jsx(r("WDSIconIcArrowDropDown.react"), {
                  iconXstyle: _.icon,
                }),
              ],
            }),
          }),
          L,
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
