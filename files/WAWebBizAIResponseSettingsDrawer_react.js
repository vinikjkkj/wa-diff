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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(28),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        u = l.onBack,
        p;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = [
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
          ]),
          (n[3] = p))
        : (p = n[3]);
      var _ = p,
        f;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = [
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
          ]),
          (n[4] = f))
        : (f = n[4]);
      var g = f,
        h = d("all_new"),
        y = h[0],
        C = h[1],
        b = d("anytime"),
        v = b[0],
        S = b[1],
        R = d("09:00"),
        L = R[0],
        E = R[1],
        k = d("17:00"),
        I = k[0],
        T = k[1],
        D;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = s._(/*BTDS*/ "Response settings")), (n[5] = D))
        : (D = n[5]);
      var x;
      n[6] !== u
        ? ((x = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: D,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: u,
          })),
          (n[6] = u),
          (n[7] = x))
        : (x = n[7]);
      var $;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = s._(/*BTDS*/ "Chats")), (n[8] = $))
        : ($ = n[8]);
      var P;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = c.jsx(r("WDSText.react"), {
            colorName: "contentDeemphasized",
            type: "Body2",
            xstyle: m.sectionDescription,
            children: s._(
              /*BTDS*/ "Select which chats you want your AI to respond to",
            ),
          })),
          (n[9] = P))
        : (P = n[9]);
      var N;
      n[10] !== y
        ? ((N = c.jsxs(r("WAWebBizToolsDrawerBodySection.react"), {
            hideDivider: !0,
            theme: "biz-ai-home",
            headerText: $,
            children: [
              P,
              c.jsx(o("WAWebFlex.react").FlexColumn, {
                role: "radiogroup",
                "aria-label": "Chat response settings",
                children: _.map(function (e) {
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
                            checked: y === e.value,
                            id: "chat-" + e.value,
                            name: "chat-response-settings",
                            onChange: C,
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
                              y === e.value &&
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
          })),
          (n[10] = y),
          (n[11] = N))
        : (N = n[11]);
      var M;
      n[12] !== y || n[13] !== I || n[14] !== v || n[15] !== L
        ? ((M =
            y !== "paused" &&
            c.jsxs(c.Fragment, {
              children: [
                c.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }),
                c.jsxs(r("WAWebBizToolsDrawerBodySection.react"), {
                  hideDivider: !0,
                  theme: "biz-ai-home",
                  headerText: s._(/*BTDS*/ "Schedule"),
                  children: [
                    c.jsx(o("WAWebFlex.react").FlexColumn, {
                      role: "radiogroup",
                      "aria-label": "Schedule settings",
                      children: g.map(function (e) {
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
                                  checked: v === e.value,
                                  id: "schedule-" + e.value,
                                  name: "schedule-response-settings",
                                  onChange: S,
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
                    v === "selected_times" &&
                      c.jsxs(o("WAWebFlex.react").FlexRow, {
                        xstyle: m.timeRow,
                        testid: void 0,
                        children: [
                          c.jsx("div", {
                            className: "x1iyjqo2 xeuugli",
                            children: c.jsx(r("WDSTextField.react"), {
                              error: !o("WAWebBusinessHoursUtils").isValidTime(
                                L,
                              ),
                              errorText: o(
                                "WAWebBusinessProfileLabels",
                              ).getInvalidTimeErrorLabel(),
                              label: s._(/*BTDS*/ "Start time"),
                              value: L,
                              onValueChange: E,
                            }),
                          }),
                          c.jsx("div", {
                            className: "x1iyjqo2 xeuugli",
                            children: c.jsx(r("WDSTextField.react"), {
                              error: !o("WAWebBusinessHoursUtils").isValidTime(
                                I,
                              ),
                              errorText: o(
                                "WAWebBusinessProfileLabels",
                              ).getInvalidTimeErrorLabel(),
                              label: s._(/*BTDS*/ "End time"),
                              value: I,
                              onValueChange: T,
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            })),
          (n[12] = y),
          (n[13] = I),
          (n[14] = v),
          (n[15] = L),
          (n[16] = M))
        : (M = n[16]);
      var w;
      n[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = c.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 })),
          (n[17] = w))
        : (w = n[17]);
      var A;
      n[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = s._(/*BTDS*/ "Stop using Business AI from Meta")), (n[18] = A))
        : (A = n[18]);
      var F;
      n[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = c.jsx(r("WDSIconIcInfo.react"), { iconXstyle: m.icon })),
          (n[19] = F))
        : (F = n[19]);
      var O;
      n[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = c.jsx(r("WAWebBizToolsDrawerBodySection.react"), {
            hideDivider: !0,
            theme: "biz-ai-home",
            headerText: A,
            children: c.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
              testid: void 0,
              useRoundedStyle: !0,
              divider: !1,
              icon: F,
              iconXstyle: m.iconContainer,
              xstyle: m.item,
              active: !1,
              onClick: r("WAWebNoop"),
              children: s._(/*BTDS*/ "Learn how to disconnect your AI"),
            }),
          })),
          (n[20] = O))
        : (O = n[20]);
      var B;
      n[21] !== N || n[22] !== M
        ? ((B = c.jsxs(r("WAWebDrawerBody.react"), {
            xstyle: m.body,
            children: [N, M, w, O],
          })),
          (n[21] = N),
          (n[22] = M),
          (n[23] = B))
        : (B = n[23]);
      var W;
      return (
        n[24] !== i || n[25] !== B || n[26] !== x
          ? ((W = c.jsxs(r("WAWebDrawer.react"), {
              ref: i,
              testid: void 0,
              children: [x, B],
            })),
            (n[24] = i),
            (n[25] = B),
            (n[26] = x),
            (n[27] = W))
          : (W = n[27]),
        W
      );
    }
    l.default = p;
  },
  226,
);
