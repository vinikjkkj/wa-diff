__d(
  "WAWebBizAIDrawer.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebBizAIResponseSettingsDrawer.react",
    "WAWebBizToolsDrawerBodySection.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerButton.react",
    "WAWebDrawerHeader.react",
    "WAWebGroupInfoSeparator.react",
    "WAWebListMsgIconIcon.react",
    "WAWebNoop",
    "WDSButton.react",
    "WDSIconIcAdd.react",
    "WDSIconIcCalendarMonth.react",
    "WDSIconIcChat.react",
    "WDSIconIcChecklist.react",
    "WDSIconIcSchool.react",
    "WDSIconIcSettings.react",
    "WDSIconIcShoppingBag.react",
    "WDSIconIcShoppingCart.react",
    "WDSIconIcStore.react",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u = ["ref"],
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useMemo,
      f = n("$InternalEnum").Mirrored(["Home", "ResponseSettings"]),
      g = {
        body: {
          paddingInlineStart: "x1iw51ew",
          paddingInlineEnd: "xde1mab",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        icon: { color: "xhslqc4", $$css: !0 },
        iconContainer: {
          marginInlineEnd: "x14mko6t",
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          $$css: !0,
        },
        item: {
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          $$css: !0,
        },
      };
    function h(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.isInitialStep,
        l = i === void 0 ? !1 : i,
        s = a.onBack,
        u = o("useWAWebFlow").useFlow(f.Home, {
          transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
        }),
        c = u[0],
        m = u[1],
        _ = p(
          function () {
            m.pop();
          },
          [m],
        ),
        g = p(
          function () {
            m.push(f.ResponseSettings);
          },
          [m],
        ),
        h = m.step;
      if (h == null) return null;
      var C;
      switch (h) {
        case f.Home:
          C = d.jsx(y, { isInitialStep: l, onBack: s, onResponseSettings: g });
          break;
        case f.ResponseSettings:
          C = d.jsx(r("WAWebBizAIResponseSettingsDrawer.react"), { onBack: _ });
          break;
      }
      return d.jsx(c, { ref: n, flow: m, children: C });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.ref,
        n = babelHelpers.objectWithoutPropertiesLoose(e, u),
        a = n.isInitialStep,
        i = n.onBack,
        l = n.onResponseSettings,
        c = _(function () {
          return [
            {
              icon: d.jsx(r("WDSIconIcStore.react"), { iconXstyle: g.icon }),
              label: s._(/*BTDS*/ "Add your business info"),
              testid: "biz-ai-add-business-info",
            },
            {
              icon: d.jsx(r("WDSIconIcShoppingBag.react"), {
                iconXstyle: g.icon,
              }),
              label: s._(/*BTDS*/ "Recommend bestsellers"),
              testid: "biz-ai-recommend-bestsellers",
            },
            {
              icon: d.jsx(r("WDSIconIcShoppingCart.react"), {
                iconXstyle: g.icon,
              }),
              label: s._(/*BTDS*/ "Add info about how to purchase"),
              testid: "biz-ai-add-purchase-info",
            },
          ];
        }, []),
        m = _(function () {
          return [
            {
              icon: d.jsx(o("WAWebListMsgIconIcon.react").ListMsgIconIcon, {
                iconXstyle: g.icon,
                height: 24,
                width: 24,
              }),
              label: s._(/*BTDS*/ "Ask for customer info"),
              secondary: s._(/*BTDS*/ "Ask for details like name and service"),
              testid: "biz-ai-ask-customer-info",
            },
            {
              icon: d.jsx(r("WDSIconIcCalendarMonth.react"), {
                iconXstyle: g.icon,
              }),
              label: s._(/*BTDS*/ "Book customer appointments"),
              secondary: s._(/*BTDS*/ "Get dates and other info for booking"),
              testid: "biz-ai-book-appointments",
            },
          ];
        }, []),
        p = _(
          function () {
            return [
              {
                icon: d.jsx(r("WDSIconIcSettings.react"), {
                  iconXstyle: g.icon,
                }),
                label: s._(/*BTDS*/ "Response settings"),
                onClick: l,
                secondary: s._(/*BTDS*/ "Choose when and how AI responds"),
                testid: "biz-ai-response-settings",
              },
              {
                icon: d.jsx(r("WDSIconIcSchool.react"), { iconXstyle: g.icon }),
                label: s._(/*BTDS*/ "Knowledge"),
                secondary: s._(/*BTDS*/ "Check and edit what your AI knows"),
                testid: "biz-ai-knowledge",
              },
              {
                icon: d.jsx(r("WDSIconIcChecklist.react"), {
                  iconXstyle: g.icon,
                }),
                label: s._(/*BTDS*/ "Instructions"),
                secondary: s._(
                  /*BTDS*/ "Create instructions for how AI responds",
                ),
                testid: "biz-ai-instructions",
              },
            ];
          },
          [l],
        );
      return d.jsxs(r("WAWebDrawer.react"), {
        ref: t,
        testid: void 0,
        children: [
          d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "Business AI home"),
            type: a
              ? o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB
              : o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: i,
          }),
          d.jsxs(r("WAWebDrawerBody.react"), {
            xstyle: g.body,
            children: [
              d.jsxs(r("WAWebBizToolsDrawerBodySection.react"), {
                hideDivider: !0,
                theme: "biz-ai-home",
                headerText: s._(/*BTDS*/ "Knowledge your AI needs"),
                children: [
                  d.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
                    testid: void 0,
                    useRoundedStyle: !0,
                    theme: "biz-tools",
                    divider: !1,
                    icon: d.jsx(r("WDSIconIcChat.react"), {
                      iconXstyle: g.icon,
                    }),
                    iconXstyle: g.iconContainer,
                    xstyle: g.item,
                    active: !1,
                    onClick: r("WAWebNoop"),
                    detail: d.jsx(r("WDSButton.react"), {
                      variant: "tonal",
                      size: "small",
                      Icon: r("WDSIconIcAdd.react"),
                      label: s._(/*BTDS*/ "Add"),
                      onPress: r("WAWebNoop"),
                    }),
                    children: s._(/*BTDS*/ "Add example responses"),
                  }),
                  c.map(function (e) {
                    return d.jsx(
                      o("WAWebDrawerButton.react").DrawerButtonSimple,
                      {
                        testid: void 0,
                        useRoundedStyle: !0,
                        theme: "biz-tools",
                        divider: !1,
                        icon: e.icon,
                        iconXstyle: g.iconContainer,
                        xstyle: g.item,
                        active: !1,
                        onClick: r("WAWebNoop"),
                        children: e.label,
                      },
                      e.testid,
                    );
                  }),
                ],
              }),
              [
                { headerText: s._(/*BTDS*/ "What your AI can do"), items: m },
                {
                  headerText: s._(/*BTDS*/ "Ways to control your AI"),
                  items: p,
                },
              ].map(function (e, t) {
                return d.jsxs(
                  d.Fragment,
                  {
                    children: [
                      d.jsx(r("WAWebGroupInfoSeparator.react"), {
                        animation: !1,
                      }),
                      d.jsx(r("WAWebBizToolsDrawerBodySection.react"), {
                        hideDivider: !0,
                        theme: "biz-ai-home",
                        headerText: e.headerText,
                        children: e.items.map(function (e) {
                          var t;
                          return d.jsx(
                            o("WAWebDrawerButton.react").DrawerButtonSimple,
                            {
                              testid: void 0,
                              useRoundedStyle: !0,
                              theme: "biz-tools",
                              divider: !1,
                              icon: e.icon,
                              iconXstyle: g.iconContainer,
                              xstyle: g.item,
                              active: !1,
                              onClick:
                                (t = e.onClick) != null ? t : r("WAWebNoop"),
                              secondaryChildren: e.secondary,
                              children: e.label,
                            },
                            e.testid,
                          );
                        }),
                      }),
                    ],
                  },
                  t,
                );
              }),
            ],
          }),
        ],
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
