__d(
  "WAWebBizAIResponseSettingsDrawer.react",
  [
    "fbt",
    "WAWebBizToolsDrawerBodySection.react",
    "WAWebBusinessHoursUtils",
    "WAWebBusinessProfileLabels",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerButton.react",
    "WAWebDrawerHeader.react",
    "WAWebFlex.react",
    "WAWebGroupInfoSeparator.react",
    "WAWebNoop",
    "WDSBaseRadio.react",
    "WDSIconIcInfo.react",
    "WDSText.react",
    "WDSTextField.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = {
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
        radioLabel: { paddingInlineStart: "x1iw51ew", $$css: !0 },
        sectionDescription: {
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        timeRow: {
          rowGap: "x8a3fw1",
          columnGap: "x1aj3ljl",
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      };
    function p(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.onBack,
        l = [
          {
            label: s._(/*BTDS*/ "All new 1-1 chats"),
            testid: "response-settings-all-new",
            value: "all_new",
          },
          {
            label: s._(/*BTDS*/ "1-1 chats except with contacts"),
            testid: "response-settings-except-contacts",
            value: "except_contacts",
          },
          {
            label: s._(/*BTDS*/ "1-1 chats from ads"),
            testid: "response-settings-from-ads",
            value: "from_ads",
          },
          {
            label: s._(/*BTDS*/ "Pause for new chats but learning"),
            secondary: s._(/*BTDS*/ "Your AI is paused and in learning mode"),
            testid: "response-settings-paused",
            value: "paused",
          },
        ],
        u = [
          {
            label: s._(/*BTDS*/ "Anytime"),
            testid: "response-settings-anytime",
            value: "anytime",
          },
          {
            label: s._(/*BTDS*/ "Only times I select"),
            testid: "response-settings-selected-times",
            value: "selected_times",
          },
        ],
        p = d("all_new"),
        _ = p[0],
        f = p[1],
        g = d("anytime"),
        h = g[0],
        y = g[1],
        C = d("09:00"),
        b = C[0],
        v = C[1],
        S = d("17:00"),
        R = S[0],
        L = S[1];
      return c.jsxs(r("WAWebDrawer.react"), {
        ref: n,
        testid: void 0,
        children: [
          c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "Response settings"),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: i,
          }),
          c.jsxs(r("WAWebDrawerBody.react"), {
            xstyle: m.body,
            children: [
              c.jsxs(r("WAWebBizToolsDrawerBodySection.react"), {
                hideDivider: !0,
                theme: "biz-ai-home",
                headerText: s._(/*BTDS*/ "Chats"),
                children: [
                  c.jsx(r("WDSText.react"), {
                    colorName: "contentDeemphasized",
                    type: "Body2",
                    xstyle: m.sectionDescription,
                    children: s._(
                      /*BTDS*/ "Select which chats you want your AI to respond to",
                    ),
                  }),
                  c.jsx(o("WAWebFlex.react").FlexColumn, {
                    role: "radiogroup",
                    "aria-label": "Chat response settings",
                    children: l.map(function (e) {
                      return c.jsxs(
                        "label",
                        {
                          htmlFor: "chat-" + e.value,
                          className:
                            "x6s0dn4 x1ubxc9n xyi3aci xwf5gio x1p453bz x1suzm8a x9f619 x1ypdohk x78zum5 xbktkl8 x16ovd2e x1nzty39 x12xbjc7 x12w63v0 xh8yej3",
                          "data-testid": void 0,
                          children: [
                            c.jsx("div", {
                              className: "x16ovd2e x1nzty39 x12xbjc7 x12w63v0",
                              children: c.jsx(r("WDSBaseRadio.react"), {
                                checked: _ === e.value,
                                id: "chat-" + e.value,
                                name: "chat-response-settings",
                                onChange: f,
                                testid: void 0,
                                value: e.value,
                              }),
                            }),
                            c.jsxs(o("WAWebFlex.react").FlexColumn, {
                              xstyle: m.radioLabel,
                              children: [
                                c.jsx(r("WDSText.react"), {
                                  colorName: "contentDefault",
                                  type: "Body1",
                                  children: e.label,
                                }),
                                e.secondary != null &&
                                  _ === e.value &&
                                  c.jsx(r("WDSText.react"), {
                                    colorName: "contentDeemphasized",
                                    type: "Body2",
                                    children: e.secondary,
                                  }),
                              ],
                            }),
                          ],
                        },
                        e.value,
                      );
                    }),
                  }),
                ],
              }),
              _ !== "paused" &&
                c.jsxs(c.Fragment, {
                  children: [
                    c.jsx(r("WAWebGroupInfoSeparator.react"), {
                      animation: !1,
                    }),
                    c.jsxs(r("WAWebBizToolsDrawerBodySection.react"), {
                      hideDivider: !0,
                      theme: "biz-ai-home",
                      headerText: s._(/*BTDS*/ "Schedule"),
                      children: [
                        c.jsx(o("WAWebFlex.react").FlexColumn, {
                          role: "radiogroup",
                          "aria-label": "Schedule settings",
                          children: u.map(function (e) {
                            return c.jsxs(
                              "label",
                              {
                                htmlFor: "schedule-" + e.value,
                                className:
                                  "x6s0dn4 x1ubxc9n xyi3aci xwf5gio x1p453bz x1suzm8a x9f619 x1ypdohk x78zum5 xbktkl8 x16ovd2e x1nzty39 x12xbjc7 x12w63v0 xh8yej3",
                                "data-testid": void 0,
                                children: [
                                  c.jsx("div", {
                                    className:
                                      "x16ovd2e x1nzty39 x12xbjc7 x12w63v0",
                                    children: c.jsx(r("WDSBaseRadio.react"), {
                                      checked: h === e.value,
                                      id: "schedule-" + e.value,
                                      name: "schedule-response-settings",
                                      onChange: y,
                                      testid: void 0,
                                      value: e.value,
                                    }),
                                  }),
                                  c.jsx(r("WDSText.react"), {
                                    colorName: "contentDefault",
                                    type: "Body1",
                                    xstyle: m.radioLabel,
                                    children: e.label,
                                  }),
                                ],
                              },
                              e.value,
                            );
                          }),
                        }),
                        h === "selected_times" &&
                          c.jsxs(o("WAWebFlex.react").FlexRow, {
                            xstyle: m.timeRow,
                            testid: void 0,
                            children: [
                              c.jsx("div", {
                                className: "x1iyjqo2 xeuugli",
                                children: c.jsx(r("WDSTextField.react"), {
                                  error: !o(
                                    "WAWebBusinessHoursUtils",
                                  ).isValidTime(b),
                                  errorText: o(
                                    "WAWebBusinessProfileLabels",
                                  ).getInvalidTimeErrorLabel(),
                                  label: s._(/*BTDS*/ "Start time"),
                                  value: b,
                                  onValueChange: v,
                                }),
                              }),
                              c.jsx("div", {
                                className: "x1iyjqo2 xeuugli",
                                children: c.jsx(r("WDSTextField.react"), {
                                  error: !o(
                                    "WAWebBusinessHoursUtils",
                                  ).isValidTime(R),
                                  errorText: o(
                                    "WAWebBusinessProfileLabels",
                                  ).getInvalidTimeErrorLabel(),
                                  label: s._(/*BTDS*/ "End time"),
                                  value: R,
                                  onValueChange: L,
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              c.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }),
              c.jsx(r("WAWebBizToolsDrawerBodySection.react"), {
                hideDivider: !0,
                theme: "biz-ai-home",
                headerText: s._(/*BTDS*/ "Stop using Business AI from Meta"),
                children: c.jsx(
                  o("WAWebDrawerButton.react").DrawerButtonSimple,
                  {
                    testid: void 0,
                    useRoundedStyle: !0,
                    divider: !1,
                    icon: c.jsx(r("WDSIconIcInfo.react"), {
                      iconXstyle: m.icon,
                    }),
                    iconXstyle: m.iconContainer,
                    xstyle: m.item,
                    active: !1,
                    onClick: r("WAWebNoop"),
                    children: s._(/*BTDS*/ "Learn how to disconnect your AI"),
                  },
                ),
              }),
            ],
          }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
