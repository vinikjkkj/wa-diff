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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(88),
        n = e.audienceActions,
        a = e.audiencesList,
        i = e.entryPoint,
        l = e.onAudienceSelect,
        u = e.onBroadcastSelect,
        c = e.onClose,
        m = e.onCreateAudience,
        f = e.onCreateBroadcast,
        y = e.onPreview,
        C = e.onSuggestedCardPress,
        b = e.onUploadSuccess,
        v = p("broadcasts"),
        S = v[0],
        R = v[1],
        L;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = o("WAWebBizBroadcastTos").isBizBroadcastTosAccepted()),
          (t[0] = L))
        : (L = t[0]);
      var E = p(!L),
        k = E[0],
        I = E[1],
        T =
          o("useWAWebABPropConfigValue").useABPropConfigValue(
            "suggested_audiences_wa_web",
          ) === !0,
        D = o("WAWebActiveAccountInfoContext.react").useActiveAccountInfo(),
        x = r("useWAWebBroadcastCampaigns")(),
        $ = x.campaigns,
        P = x.loading,
        N,
        M;
      (t[1] !== i
        ? ((N = function () {
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.bbHomePageViewed(i);
          }),
          (M = [i]),
          (t[1] = i),
          (t[2] = N),
          (t[3] = M))
        : ((N = t[2]), (M = t[3])),
        d(N, M));
      var w;
      e: {
        if ($.length === 0) {
          w = a;
          break e;
        }
        var A;
        if (t[4] !== a || t[5] !== $) {
          var F = new Map();
          for (var O of $) {
            var B = O.broadcastJid.replace(/@broadcast$/, ""),
              W = F.get(B);
            (W == null || O.sentAt > W) && F.set(B, O.sentAt);
          }
          ((A = a.map(function (e) {
            var t = F.get(e.broadcastJid);
            return t != null
              ? babelHelpers.extends({}, e, { lastBroadcastTimestamp: t })
              : e;
          })),
            (t[4] = a),
            (t[5] = $),
            (t[6] = A));
        } else A = t[6];
        w = A;
      }
      var q = w,
        U;
      t[7] !== i
        ? ((U = function (t) {
            (t === "broadcasts"
              ? o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.homeBroadcastsTabClicked(i)
              : t === "audiences" &&
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.homeAudiencesTabClicked(i),
              R(t));
          }),
          (t[7] = i),
          (t[8] = U))
        : (U = t[8]);
      var V = U,
        H;
      t[9] !== i || t[10] !== y
        ? ((H = o(
            "WAWebBusinessBroadcastHomeTableColumns.react",
          ).getBroadcastColumns(i, y)),
          (t[9] = i),
          (t[10] = y),
          (t[11] = H))
        : (H = t[11]);
      var G = H,
        z;
      t[12] !== n || t[13] !== i
        ? ((z = o(
            "WAWebBusinessBroadcastHomeTableColumns.react",
          ).getAudienceColumns(i, n)),
          (t[12] = n),
          (t[13] = i),
          (t[14] = z))
        : (z = t[14]);
      var j = z,
        K = h,
        Q = g,
        X;
      t[15] !== D
        ? ((X = function () {
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              s.jsx(o("WAWebSettingsFlow.react").SettingsFlow, {
                activeAccountInfo: D,
                onEnd: o("WAWebDrawerManager").closeDrawerLeft,
              }),
            );
          }),
          (t[15] = D),
          (t[16] = X))
        : (X = t[16]);
      var Y = X,
        J;
      t[17] !== u
        ? ((J = function (t) {
            u != null && u(t);
          }),
          (t[17] = u),
          (t[18] = J))
        : (J = t[18]);
      var Z = J,
        ee;
      t[19] !== i || t[20] !== l
        ? ((ee = function (t) {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.newBusinessBroadcastAudienceListItemClicked(
              t.broadcastJid,
              i,
            ),
              l != null && l(t));
          }),
          (t[19] = i),
          (t[20] = l),
          (t[21] = ee))
        : (ee = t[21]);
      var te = ee,
        ne;
      t[22] !== C
        ? ((ne = function (t) {
            C != null && C(t);
          }),
          (t[22] = C),
          (t[23] = ne))
        : (ne = t[23]);
      var re = ne,
        oe = P && $.length === 0,
        ae = !P && $.length === 0 && a.length === 0 && !T,
        ie = !P && $.length === 0,
        le;
      t[24] !== G || t[25] !== $ || t[26] !== Z || t[27] !== oe
        ? ((le = oe
            ? s.jsx("div", {
                className: "x6s0dn4 x78zum5 x5yr21d xl56j7k",
                children: s.jsx(o("WAWebSpinner.react").Spinner, {
                  color: "default",
                  size: 24,
                  stroke: 6,
                }),
              })
            : s.jsx(r("WAWebSMBTable.react"), {
                columns: G,
                items: $,
                getItemKey: K,
                onRowClick: Z,
              })),
          (t[24] = G),
          (t[25] = $),
          (t[26] = Z),
          (t[27] = oe),
          (t[28] = le))
        : (le = t[28]);
      var se = le,
        ue;
      t[29] !== se ||
      t[30] !== i ||
      t[31] !== ae ||
      t[32] !== ie ||
      t[33] !== m ||
      t[34] !== f ||
      t[35] !== b
        ? ((ue = ie
            ? s.jsx(o("WAWebFlex.react").FlexRow, {
                xstyle: _.emptyStateAudienceTab,
                align: "center",
                children: s.jsx(
                  r("WAWebBusinessBroadcastHomeEmptyState.react"),
                  {
                    onCreateAudience: m,
                    onCreateBroadcast: f,
                    onUploadSuccess: b,
                    showFooterButtons: ae,
                    entryPoint: i,
                  },
                ),
              })
            : se),
          (t[29] = se),
          (t[30] = i),
          (t[31] = ae),
          (t[32] = ie),
          (t[33] = m),
          (t[34] = f),
          (t[35] = b),
          (t[36] = ue))
        : (ue = t[36]);
      var ce = ue,
        de;
      t[37] !== i || t[38] !== re || t[39] !== T
        ? ((de =
            T &&
            s.jsx(r("WAWebSuggestedAudienceCardList.react"), {
              entryPoint: i,
              onCardPress: re,
            })),
          (t[37] = i),
          (t[38] = re),
          (t[39] = T),
          (t[40] = de))
        : (de = t[40]);
      var me;
      t[41] !== j || t[42] !== q || t[43] !== te
        ? ((me = s.jsx(r("WAWebSMBTable.react"), {
            columns: j,
            items: q,
            getItemKey: Q,
            onRowClick: te,
          })),
          (t[41] = j),
          (t[42] = q),
          (t[43] = te),
          (t[44] = me))
        : (me = t[44]);
      var pe;
      t[45] !== de || t[46] !== me
        ? ((pe = s.jsxs(s.Fragment, { children: [de, me] })),
          (t[45] = de),
          (t[46] = me),
          (t[47] = pe))
        : (pe = t[47]);
      var _e = pe,
        fe;
      t[48] === Symbol.for("react.memo_cache_sentinel")
        ? ((fe = {
            className: "x1280gxy x78zum5 xdt5ytf x1iyjqo2 x6ikm8r x10wlt62",
          }),
          (t[48] = fe))
        : (fe = t[48]);
      var ge;
      t[49] === Symbol.for("react.memo_cache_sentinel")
        ? ((ge = s.jsx(r("WDSText.react"), {
            testid: void 0,
            type: "Headline1",
            colorName: "contentDefault",
            children: o(
              "WAWebBizBroadcastsHomeStrings",
            ).getBusinessBroadcastsTitle(),
          })),
          (t[49] = ge))
        : (ge = t[49]);
      var he;
      t[50] !== i || t[51] !== ae || t[52] !== m || t[53] !== f || t[54] !== b
        ? ((he =
            !ae &&
            s.jsxs(o("WAWebFlex.react").FlexRow, {
              gap: 12,
              testid: void 0,
              children: [
                s.jsx(r("WAWebBizBroadcastHomeCreateAudienceButton.react"), {
                  onUploadSuccess: b,
                  onCreateAudience: m,
                  entryPoint: i,
                }),
                s.jsx(r("WDSButton.react"), {
                  Icon: r("WDSIconIcAdd.react"),
                  label: o(
                    "WAWebBizBroadcastsHomeStrings",
                  ).getCreateBroadcastButtonLabel(),
                  onPress: function () {
                    (o(
                      "WAWebBusinessBroadcastUserJourneyLogger",
                    ).BusinessBroadcastUserJourneyLogger.createBroadcastButtonClicked(
                      i,
                      o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME,
                      { is_bb_home_empty_state: !1 },
                    ),
                      f());
                  },
                  size: "medium",
                  testid: void 0,
                  variant: "filled",
                }),
              ],
            })),
          (t[50] = i),
          (t[51] = ae),
          (t[52] = m),
          (t[53] = f),
          (t[54] = b),
          (t[55] = he))
        : (he = t[55]);
      var ye;
      t[56] !== i
        ? ((ye = function () {
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.homeOverflowMenuClicked(i);
          }),
          (t[56] = i),
          (t[57] = ye))
        : (ye = t[57]);
      var Ce;
      t[58] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ce = o("WAWebBizBroadcastsHomeStrings").getMenuButtonTitle()),
          (t[58] = Ce))
        : (Ce = t[58]);
      var be, ve;
      t[59] === Symbol.for("react.memo_cache_sentinel")
        ? ((be = s.jsx(r("WDSIconIcSettings.react"), {})),
          (ve = o("WAWebBizBroadcastsHomeStrings").getAccountSettingsLabel()),
          (t[59] = be),
          (t[60] = ve))
        : ((be = t[59]), (ve = t[60]));
      var Se;
      t[61] !== Y
        ? ((Se = {
            menu: [
              s.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                { action: Y, icon: be, children: ve },
                "account-settings",
              ),
            ],
          }),
          (t[61] = Y),
          (t[62] = Se))
        : (Se = t[62]);
      var Re;
      t[63] !== ye || t[64] !== Se
        ? ((Re = s.jsx(o("WAWebMenuBar.react").MenuBar, {
            children: s.jsx(r("WDSMenuBarItem.react"), {
              icon: r("WDSIconIcMoreVert.react"),
              onOpen: ye,
              testid: void 0,
              title: Ce,
              dropdownMenu: Se,
            }),
          })),
          (t[63] = ye),
          (t[64] = Se),
          (t[65] = Re))
        : (Re = t[65]);
      var Le;
      t[66] !== he || t[67] !== Re
        ? ((Le = s.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "all",
            xstyle: _.headerContainer,
            children: [
              ge,
              s.jsx(o("WAWebFlex.react").FlexRow, {
                align: "center",
                gap: 16,
                children: s.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  gap: 8,
                  children: [he, Re],
                }),
              }),
            ],
          })),
          (t[66] = he),
          (t[67] = Re),
          (t[68] = Le))
        : (Le = t[68]);
      var Ee;
      t[69] !== S ||
      t[70] !== _e ||
      t[71] !== ce ||
      t[72] !== i ||
      t[73] !== V ||
      t[74] !== ae ||
      t[75] !== oe ||
      t[76] !== m ||
      t[77] !== f ||
      t[78] !== b
        ? ((Ee = ae
            ? s.jsx(r("WAWebBusinessBroadcastHomeEmptyState.react"), {
                onCreateAudience: m,
                onCreateBroadcast: f,
                onUploadSuccess: b,
                showFooterButtons: ae,
                entryPoint: i,
              })
            : s.jsxs(s.Fragment, {
                children: [
                  s.jsx(o("WAWebFlex.react").FlexColumn, {
                    xstyle: _.tabsContainer,
                    children: s.jsx(r("WAWebTabs.react"), {
                      selectedId: S,
                      onSelect: V,
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
                    children: oe
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
                          children: S === "broadcasts" ? ce : _e,
                        }),
                  }),
                ],
              })),
          (t[69] = S),
          (t[70] = _e),
          (t[71] = ce),
          (t[72] = i),
          (t[73] = V),
          (t[74] = ae),
          (t[75] = oe),
          (t[76] = m),
          (t[77] = f),
          (t[78] = b),
          (t[79] = Ee))
        : (Ee = t[79]);
      var ke;
      t[80] !== i || t[81] !== c || t[82] !== k
        ? ((ke = k
            ? s.jsx(r("WAWebBizBroadcastTosModal.react"), {
                entryPoint: i,
                onAccept: function () {
                  return I(!1);
                },
                onDismiss: c,
              })
            : null),
          (t[80] = i),
          (t[81] = c),
          (t[82] = k),
          (t[83] = ke))
        : (ke = t[83]);
      var Ie;
      return (
        t[84] !== Le || t[85] !== Ee || t[86] !== ke
          ? ((Ie = s.jsxs(
              "div",
              babelHelpers.extends({}, fe, { children: [Le, Ee, ke] }),
            )),
            (t[84] = Le),
            (t[85] = Ee),
            (t[86] = ke),
            (t[87] = Ie))
          : (Ie = t[87]),
        Ie
      );
    }
    function g(e) {
      return e.broadcastJid;
    }
    function h(e) {
      return e.campaignId;
    }
    l.default = f;
  },
  98,
);
