__d(
  "WAWebBusinessBroadcastHomeScreen.react",
  [
    "WAWebActiveAccountInfoContext.react",
    "WAWebBizBroadcastHomeCreateAudienceButton.react",
    "WAWebBizBroadcastTos",
    "WAWebBizBroadcastTosModal.react",
    "WAWebBizBroadcastsHomeStrings",
    "WAWebBusinessBroadcastHomeEmptyState.react",
    "WAWebBusinessBroadcastHomeTableColumns.react",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebDrawerBody.react",
    "WAWebDrawerManager",
    "WAWebDropdownItem.react",
    "WAWebFlex.react",
    "WAWebMenuBar.react",
    "WAWebSMBTable.react",
    "WAWebSettingsFlow.react",
    "WAWebSpinner.react",
    "WAWebSuggestedAudienceCardList.react",
    "WAWebTabs.react",
    "WAWebWamEnumSurfaceType",
    "WDSButton.react",
    "WDSIconIcAdd.react",
    "WDSIconIcMoreVert.react",
    "WDSIconIcSettings.react",
    "WDSMenuBarItem.react",
    "WDSText.react",
    "react",
    "useWAWebABPropConfigValue",
    "useWAWebBroadcastCampaigns",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useMemo,
      p = u.useState,
      _ = {
        emptyStateAudienceTab: {
          flexGrow: "x1iyjqo2",
          width: "xh8yej3",
          $$css: !0,
        },
        headerContainer: {
          paddingTop: "x1xrf6ya",
          paddingBottom: "xscbp6u",
          paddingInlineEnd: "xde1mab",
          paddingInlineStart: "x1phvje8",
          $$css: !0,
        },
        selectedTab: { borderBottomWidth: "xv7zg05", $$css: !0 },
        tab: {
          flexGrow: "x1iyjqo2",
          justifyContent: "xl56j7k",
          paddingTop: "xl7twdi",
          paddingInlineEnd: "xyo0t3i",
          paddingBottom: "xvg22vi",
          paddingInlineStart: "xb0esv5",
          $$css: !0,
        },
        tableContainer: {
          flexGrow: "x1iyjqo2",
          paddingTop: "x16ovd2e",
          $$css: !0,
        },
        tabs: { backgroundColor: "x1280gxy", $$css: !0 },
        tabsContainer: {
          alignSelf: "xkh2ocl",
          borderBottomColor: "x120ee7l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomWidth: "xso031l",
          $$css: !0,
        },
      };
    function f(e) {
      var t = e.audienceActions,
        n = e.audiencesList,
        a = e.entryPoint,
        i = e.onAudienceSelect,
        l = e.onBroadcastSelect,
        u = e.onClose,
        f = e.onCreateAudience,
        g = e.onCreateBroadcast,
        h = e.onPreview,
        y = e.onSuggestedCardPress,
        C = e.onUploadSuccess,
        b = p("broadcasts"),
        v = b[0],
        S = b[1],
        R = p(!o("WAWebBizBroadcastTos").isBizBroadcastTosAccepted()),
        L = R[0],
        E = R[1],
        k =
          o("useWAWebABPropConfigValue").useABPropConfigValue(
            "suggested_audiences_wa_web",
          ) === !0,
        I = o("WAWebActiveAccountInfoContext.react").useActiveAccountInfo(),
        T = r("useWAWebBroadcastCampaigns")(),
        D = T.campaigns,
        x = T.loading;
      d(
        function () {
          o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.bbHomePageViewed(a);
        },
        [a],
      );
      var $ = m(
          function () {
            if (D.length === 0) return n;
            var e = new Map();
            for (var t of D) {
              var r = t.broadcastJid.replace(/@broadcast$/, ""),
                o = e.get(r);
              (o == null || t.sentAt > o) && e.set(r, t.sentAt);
            }
            return n.map(function (t) {
              var n = e.get(t.broadcastJid);
              return n != null
                ? babelHelpers.extends({}, t, { lastBroadcastTimestamp: n })
                : t;
            });
          },
          [n, D],
        ),
        P = c(
          function (e) {
            (e === "broadcasts"
              ? o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.homeBroadcastsTabClicked(a)
              : e === "audiences" &&
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.homeAudiencesTabClicked(a),
              S(e));
          },
          [a],
        ),
        N = m(
          function () {
            return o(
              "WAWebBusinessBroadcastHomeTableColumns.react",
            ).getBroadcastColumns(a, h);
          },
          [a, h],
        ),
        M = m(
          function () {
            return o(
              "WAWebBusinessBroadcastHomeTableColumns.react",
            ).getAudienceColumns(a, t);
          },
          [a, t],
        ),
        w = c(function (e) {
          return e.campaignId;
        }, []),
        A = c(function (e) {
          return e.broadcastJid;
        }, []),
        F = c(
          function () {
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              s.jsx(o("WAWebSettingsFlow.react").SettingsFlow, {
                activeAccountInfo: I,
                onEnd: o("WAWebDrawerManager").closeDrawerLeft,
              }),
            );
          },
          [I],
        ),
        O = c(
          function (e) {
            l != null && l(e);
          },
          [l],
        ),
        B = c(
          function (e) {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.newBusinessBroadcastAudienceListItemClicked(
              e.broadcastJid,
              a,
            ),
              i != null && i(e));
          },
          [a, i],
        ),
        W = c(
          function (e) {
            y != null && y(e);
          },
          [y],
        ),
        q = x && D.length === 0,
        U = !x && D.length === 0 && n.length === 0 && !k,
        V = !x && D.length === 0,
        H = q
          ? s.jsx("div", {
              className: "x6s0dn4 x78zum5 x5yr21d xl56j7k",
              children: s.jsx(o("WAWebSpinner.react").Spinner, {
                color: "default",
                size: 24,
                stroke: 6,
              }),
            })
          : s.jsx(r("WAWebSMBTable.react"), {
              columns: N,
              items: D,
              getItemKey: w,
              onRowClick: O,
            }),
        G = V
          ? s.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: _.emptyStateAudienceTab,
              align: "center",
              children: s.jsx(r("WAWebBusinessBroadcastHomeEmptyState.react"), {
                onCreateAudience: f,
                onCreateBroadcast: g,
                onUploadSuccess: C,
                showFooterButtons: U,
                entryPoint: a,
              }),
            })
          : H,
        z = s.jsxs(s.Fragment, {
          children: [
            k &&
              s.jsx(r("WAWebSuggestedAudienceCardList.react"), {
                entryPoint: a,
                onCardPress: W,
              }),
            s.jsx(r("WAWebSMBTable.react"), {
              columns: M,
              items: $,
              getItemKey: A,
              onRowClick: B,
            }),
          ],
        });
      return s.jsxs("div", {
        className: "x1280gxy x78zum5 xdt5ytf x1iyjqo2 x6ikm8r x10wlt62",
        children: [
          s.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "all",
            xstyle: _.headerContainer,
            children: [
              s.jsx(r("WDSText.react"), {
                testid: void 0,
                type: "Headline1",
                colorName: "contentDefault",
                children: o(
                  "WAWebBizBroadcastsHomeStrings",
                ).getBusinessBroadcastsTitle(),
              }),
              s.jsx(o("WAWebFlex.react").FlexRow, {
                align: "center",
                gap: 16,
                children: s.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  gap: 8,
                  children: [
                    !U &&
                      s.jsxs(o("WAWebFlex.react").FlexRow, {
                        gap: 12,
                        testid: void 0,
                        children: [
                          s.jsx(
                            r(
                              "WAWebBizBroadcastHomeCreateAudienceButton.react",
                            ),
                            {
                              onUploadSuccess: C,
                              onCreateAudience: f,
                              entryPoint: a,
                            },
                          ),
                          s.jsx(r("WDSButton.react"), {
                            Icon: r("WDSIconIcAdd.react"),
                            label: o(
                              "WAWebBizBroadcastsHomeStrings",
                            ).getCreateBroadcastButtonLabel(),
                            onPress: function () {
                              (o(
                                "WAWebBusinessBroadcastUserJourneyLogger",
                              ).BusinessBroadcastUserJourneyLogger.createBroadcastButtonClicked(
                                a,
                                o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                                  .BB_HOME,
                                { is_bb_home_empty_state: !1 },
                              ),
                                g());
                            },
                            size: "medium",
                            testid: void 0,
                            variant: "filled",
                          }),
                        ],
                      }),
                    s.jsx(o("WAWebMenuBar.react").MenuBar, {
                      children: s.jsx(r("WDSMenuBarItem.react"), {
                        icon: r("WDSIconIcMoreVert.react"),
                        onOpen: function () {
                          o(
                            "WAWebBusinessBroadcastUserJourneyLogger",
                          ).BusinessBroadcastUserJourneyLogger.homeOverflowMenuClicked(
                            a,
                          );
                        },
                        testid: void 0,
                        title: o(
                          "WAWebBizBroadcastsHomeStrings",
                        ).getMenuButtonTitle(),
                        dropdownMenu: {
                          menu: [
                            s.jsx(
                              o("WAWebDropdownItem.react").DropdownItem,
                              {
                                action: F,
                                icon: s.jsx(r("WDSIconIcSettings.react"), {}),
                                children: o(
                                  "WAWebBizBroadcastsHomeStrings",
                                ).getAccountSettingsLabel(),
                              },
                              "account-settings",
                            ),
                          ],
                        },
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          U
            ? s.jsx(r("WAWebBusinessBroadcastHomeEmptyState.react"), {
                onCreateAudience: f,
                onCreateBroadcast: g,
                onUploadSuccess: C,
                showFooterButtons: U,
                entryPoint: a,
              })
            : s.jsxs(s.Fragment, {
                children: [
                  s.jsx(o("WAWebFlex.react").FlexColumn, {
                    xstyle: _.tabsContainer,
                    children: s.jsx(r("WAWebTabs.react"), {
                      selectedId: v,
                      onSelect: P,
                      testIdPrefix: "biz-broadcasts-home-tab",
                      tabConfigs: [
                        {
                          id: "broadcasts",
                          title: o(
                            "WAWebBizBroadcastsHomeStrings",
                          ).getBroadcastsTabTitle(),
                        },
                        {
                          id: "audiences",
                          title: o(
                            "WAWebBizBroadcastsHomeStrings",
                          ).getAudiencesTabTitle(),
                        },
                      ],
                      xstyle: _.tabs,
                      tabXstyle: _.tab,
                      selectedXStyle: _.selectedTab,
                    }),
                  }),
                  s.jsx(r("WAWebDrawerBody.react"), {
                    children: q
                      ? s.jsx("div", {
                          className: "x6s0dn4 x78zum5 x5yr21d xl56j7k",
                          children: s.jsx(o("WAWebSpinner.react").Spinner, {
                            color: "default",
                            size: 24,
                            stroke: 6,
                          }),
                        })
                      : s.jsx(o("WAWebFlex.react").FlexColumn, {
                          align: "stretch",
                          xstyle: _.tableContainer,
                          children: v === "broadcasts" ? G : z,
                        }),
                  }),
                ],
              }),
          L
            ? s.jsx(r("WAWebBizBroadcastTosModal.react"), {
                entryPoint: a,
                onAccept: function () {
                  return E(!1);
                },
                onDismiss: u,
              })
            : null,
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
