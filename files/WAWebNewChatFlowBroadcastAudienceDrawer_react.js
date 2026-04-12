__d(
  "WAWebNewChatFlowBroadcastAudienceDrawer.react",
  [
    "Promise",
    "WAWebBizBroadcastTos",
    "WAWebBizBroadcastTosModal.react",
    "WAWebBizBroadcastsAudienceStrings",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebBizBroadcastsRecipientUtils",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebCellV2.react",
    "WAWebDefaultProfilePicture.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerViewType",
    "WAWebModalManager",
    "WAWebShapeIcon.react",
    "WAWebSuggestedAudienceCards",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSurfaceType",
    "WDSFlex.stylex",
    "WDSIconIcAdd.react",
    "WDSIconIcUpload.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useEffect,
      f = m.useState,
      g = {
        audienceItem: {
          paddingInlineStart: "x1iw51ew",
          paddingInlineEnd: "xde1mab",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        pinnedItem: { paddingInlineStart: "x1c1uobl", $$css: !0 },
        suggestedIconBackground: { backgroundColor: "x1od0jb8", $$css: !0 },
        suggestedIconForeground: { color: "xhslqc4", $$css: !0 },
      };
    function h(e) {
      var t = e.icon,
        n = e.label,
        a = e.onClick,
        i = e.testid;
      return d.jsx(
        "div",
        babelHelpers.extends(
          {},
          (u || (u = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flex,
            g.pinnedItem,
          ),
          {
            children: d.jsx(r("WAWebCellV2.react"), {
              size: "medium",
              material: !0,
              onClick: a,
              testid: void 0,
              detailLeft: d.jsx("div", {
                className:
                  "x6s0dn4 x3l9nec x1c9tyrk xeusxvb x1pahc9y x1ertn4p x78zum5 x112a4uq xl56j7k x15jighw",
                children: t,
              }),
              detailLeftXStyle: [o("WAWebUISpacing").uiPadding.start13],
              primary: d.jsx(o("WAWebText.react").WAWebTextTitle, {
                children: n,
              }),
            }),
          },
        ),
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.card,
        n = e.onPress,
        a = p(
          function () {
            n(t);
          },
          [t, n],
        );
      return d.jsx(
        "div",
        babelHelpers.extends(
          {},
          (u || (u = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flex,
            g.audienceItem,
          ),
          {
            children: d.jsx(r("WAWebCellV2.react"), {
              size: "medium",
              material: !0,
              onClick: a,
              testid: void 0,
              detailLeft: d.jsx(o("WAWebShapeIcon.react").ShapeIcon, {
                theme: o("WAWebShapeIcon.react").ShapeIconTheme.Muted,
                backgroundStyles: [g.suggestedIconBackground],
                size: 48,
                shape: "circle",
                Icon: t.icon,
                iconStyles: [g.suggestedIconForeground],
              }),
              detailLeftXStyle: [o("WAWebUISpacing").uiPadding.start13],
              primary: d.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDefault",
                children: t.title(),
              }),
              secondary: d.jsx(r("WDSText.react"), {
                type: "Body3",
                colorName: "contentDeemphasized",
                children: t.description(),
              }),
            }),
          },
        ),
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.onCardPress,
        a = f(null),
        i = a[0],
        l = a[1];
      if (
        (_(function () {
          var e = !1;
          return (
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = yield (s || (s = n("Promise"))).all(
                o("WAWebSuggestedAudienceCards").SUGGESTED_AUDIENCE_CARDS.map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t = yield o(
                            "WAWebSuggestedAudienceCards",
                          ).resolveCardExpression(e),
                          n = yield o(
                            "WAWebBizBroadcastsRecipientUtils",
                          ).isPredicateEligibleForSuggestedCard(t);
                        return { eligible: n, id: e.id };
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
              );
              e ||
                l(
                  new Set(
                    t
                      .filter(function (e) {
                        return e.eligible;
                      })
                      .map(function (e) {
                        return e.id;
                      }),
                  ),
                );
            })(),
            function () {
              e = !0;
            }
          );
        }, []),
        _(
          function () {
            i != null &&
              o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.suggestedAudienceCardsViewed(
                i.size,
                o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
                o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
              );
          },
          [i],
        ),
        i == null || i.size === 0)
      )
        return null;
      var u = o("WAWebSuggestedAudienceCards").SUGGESTED_AUDIENCE_CARDS.filter(
        function (e) {
          return i.has(e.id);
        },
      );
      return d.jsxs(d.Fragment, {
        children: [
          d.jsx("div", {
            className: "x16ovd2e x12xbjc7 x1iw51ew xde1mab",
            children: d.jsx(r("WDSText.react"), {
              type: "Body2Emphasized",
              colorName: "contentDeemphasized",
              children: o(
                "WAWebBizBroadcastsAudienceStrings",
              ).getSuggestedAudiencesSectionTitle(),
            }),
          }),
          u.map(function (e) {
            return d.jsx(y, { card: e, onPress: t }, e.id);
          }),
        ],
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = e.audience,
        n = e.onSelect,
        a = function () {
          (o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.newChatFlowAudienceListItemClicked(
            t.broadcastJid,
          ),
            n(t));
        };
      return d.jsx(
        "div",
        babelHelpers.extends(
          {},
          (u || (u = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flex,
            g.audienceItem,
          ),
          {
            children: d.jsx(r("WAWebCellV2.react"), {
              size: "medium",
              material: !0,
              onClick: a,
              testid: void 0,
              detailLeft: d.jsx(r("WAWebDefaultProfilePicture.react"), {
                type: "business-broadcast",
                size: 48,
              }),
              detailLeftXStyle: [o("WAWebUISpacing").uiPadding.start13],
              primary: d.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDefault",
                children: t.name,
              }),
              secondary: d.jsx(r("WDSText.react"), {
                type: "Body3",
                colorName: "contentDeemphasized",
                children: o(
                  "WAWebBizBroadcastsCreationStrings",
                ).getExistingAudienceRecipientsLabel(t.recipientCount),
              }),
            }),
          },
        ),
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.audiences,
        l = a.onBack,
        s = a.onCancel,
        u = a.onCreateAudience,
        c = a.onImportAudience,
        m = a.onSelectAudience,
        p = a.onSuggestedCardPress,
        f = a.suggestedAudiencesEnabled,
        g = a.viewType;
      _(
        function () {
          o("WAWebBizBroadcastTos").isBizBroadcastTosAccepted() ||
            o("WAWebModalManager").ModalManager.openSupportModal(
              d.jsx(r("WAWebBizBroadcastTosModal.react"), {
                entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
                onAccept: function () {
                  o("WAWebModalManager").ModalManager.closeSupportOrModal();
                },
                onDismiss: function () {
                  (o("WAWebModalManager").ModalManager.closeSupportOrModal(),
                    l());
                },
              }),
            );
        },
        [l],
      );
      var y =
        g === r("WAWebDrawerViewType").FLYOUT
          ? o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.FLYOUT
          : o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL;
      return d.jsxs(r("WAWebDrawer.react"), {
        ref: n,
        testid: void 0,
        viewType: g,
        children: [
          d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: o(
              "WAWebBizBroadcastsCreationStrings",
            ).getCreateBroadcastDrawerTitle(),
            type: y,
            onBack: g === r("WAWebDrawerViewType").FLYOUT ? void 0 : l,
            onCancel: s,
          }),
          d.jsxs(r("WAWebDrawerBody.react"), {
            children: [
              d.jsxs("div", {
                className: "x1xrf6ya xde1mab xscbp6u x1iw51ew",
                children: [
                  d.jsx(h, {
                    icon: d.jsx(r("WDSIconIcAdd.react"), {
                      colorName: "contentInverse",
                    }),
                    label: o(
                      "WAWebBizBroadcastsCreationStrings",
                    ).getCreateAudienceLabel(),
                    onClick: function () {
                      (o(
                        "WAWebBusinessBroadcastUserJourneyLogger",
                      ).BusinessBroadcastUserJourneyLogger.createAudienceButtonClicked(
                        o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
                        o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
                      ),
                        u());
                    },
                    testid: void 0,
                  }),
                  d.jsx(h, {
                    icon: d.jsx(r("WDSIconIcUpload.react"), {
                      colorName: "contentInverse",
                    }),
                    label: o(
                      "WAWebBizBroadcastsCreationStrings",
                    ).getImportAudienceLabel(),
                    onClick: function () {
                      (o(
                        "WAWebBusinessBroadcastUserJourneyLogger",
                      ).BusinessBroadcastUserJourneyLogger.importAudienceButtonClicked(
                        o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
                        o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
                      ),
                        c());
                    },
                    testid: void 0,
                  }),
                ],
              }),
              f === !0 && p != null && d.jsx(C, { onCardPress: p }),
              i.length > 0 &&
                d.jsxs(d.Fragment, {
                  children: [
                    d.jsx("div", {
                      className: "x16ovd2e x12xbjc7 x1iw51ew xde1mab",
                      children: d.jsx(r("WDSText.react"), {
                        type: "Body2Emphasized",
                        colorName: "contentDeemphasized",
                        children: o(
                          "WAWebBizBroadcastsCreationStrings",
                        ).getExistingAudiencesLabel(),
                      }),
                    }),
                    i.map(function (e) {
                      return d.jsx(
                        b,
                        { audience: e, onSelect: m },
                        e.broadcastJid,
                      );
                    }),
                  ],
                }),
            ],
          }),
        ],
      });
    }
    ((v.displayName = v.name + " [from " + i.id + "]"), (l.default = v));
  },
  98,
);
