__d(
  "WAWebBizAdCreationNavBarItem.react",
  [
    "fbt",
    "WAWebActiveAccountInfoContext.react",
    "WAWebAdCreationLogger",
    "WAWebBizGatingUtils",
    "WAWebChatlistUtils",
    "WAWebMobilePlatforms",
    "WAWebNativeAdsGatingUtils",
    "WAWebNavBarItem.react",
    "WAWebNavBarLogEvents",
    "WAWebNavBarTypes",
    "WAWebWamEnumLwiEntryPoint",
    "WAWebWamEnumWebcNavbarItemLabel",
    "WDSIconIcCampaignMegaphone.react",
    "WDSIconIcCampaignMegaphoneFilled.react",
    "react",
    "react-compiler-runtime",
    "useWAWebNativeAdsMvpEligibility",
    "useWAWebServerGatedAdEntryPoint",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = {
        paddingAll8: {
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          $$css: !0,
        },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.activeNavBarItem,
        a = o("WAWebActiveAccountInfoContext.react").useActiveAccountInfo(),
        i = o("useWAWebNativeAdsMvpEligibility").useNativeAdsMvpEligibility(),
        l = i.isQE2Eligible,
        m = o("useWAWebServerGatedAdEntryPoint").useServerGatedAdEntryPoint(
          "whatsapp_smb_web_ad_creation_home_screen_icon",
          a,
        ),
        p = m[0],
        _;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(/*BTDS*/ "Advertise")), (t[0] = _))
        : (_ = t[0]);
      var f = _,
        g;
      t[1] !== a || t[2] !== p || t[3] !== l
        ? ((g =
            o("WAWebMobilePlatforms").isSMB() &&
            a != null &&
            !p &&
            (a !== "not-linked" ||
              o("WAWebNativeAdsGatingUtils").isNativeAdsMvpEntrypointEligible(
                l,
              )) &&
            o("WAWebBizGatingUtils").shouldShowAdCreationIcon()),
          (t[1] = a),
          (t[2] = p),
          (t[3] = l),
          (t[4] = g))
        : (g = t[4]);
      var h = g,
        y,
        C;
      (t[5] !== a || t[6] !== h
        ? ((y = function () {
            if (h) {
              var e;
              o("WAWebAdCreationLogger").logAdCreationImpression(
                o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT
                  .SMB_HOME_SCREEN_ICON,
                (e =
                  a !== "not-linked" &&
                  (a == null ? void 0 : a.hasFacebookPage)) != null
                  ? e
                  : !1,
              );
            }
          }),
          (C = [h, a]),
          (t[5] = a),
          (t[6] = h),
          (t[7] = y),
          (t[8] = C))
        : ((y = t[7]), (C = t[8])),
        c(y, C));
      var b;
      t[9] !== a || t[10] !== n
        ? ((b = function () {
            n !== o("WAWebNavBarTypes").NavBarItems.AdCreation &&
              (a != null &&
                o("WAWebChatlistUtils").handleAdCreation({
                  adCreationUrlInput: {
                    activeAccountInfo: a,
                    sourceAdCreation:
                      "whatsapp_smb_web_ad_creation_home_screen_icon",
                  },
                  lwiEntryPoint: o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT
                    .SMB_HOME_SCREEN_ICON,
                }),
              o("WAWebNavBarLogEvents").logNavBarEvent(
                o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL
                  .ADS_CREATION,
              ));
          }),
          (t[9] = a),
          (t[10] = n),
          (t[11] = b))
        : (b = t[11]);
      var v = b,
        S;
      t[12] !== n
        ? ((S =
            n === o("WAWebNavBarTypes").NavBarItems.AdCreation
              ? u.jsx(r("WDSIconIcCampaignMegaphoneFilled.react"), {
                  height: 24,
                  width: 24,
                })
              : u.jsx(r("WDSIconIcCampaignMegaphone.react"), {
                  height: 24,
                  width: 24,
                })),
          (t[12] = n),
          (t[13] = S))
        : (S = t[13]);
      var R = S,
        L = n === o("WAWebNavBarTypes").NavBarItems.AdCreation,
        E;
      t[14] !== R || t[15] !== v || t[16] !== L
        ? ((E = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
            icon: R,
            title: f,
            testid: void 0,
            isActive: L,
            onClick: v,
            spacingXstyle: d.paddingAll8,
          })),
          (t[14] = R),
          (t[15] = v),
          (t[16] = L),
          (t[17] = E))
        : (E = t[17]);
      var k = E;
      return h ? k : null;
    }
    l.BizAdCreationNavBarItem = m;
  },
  226,
);
