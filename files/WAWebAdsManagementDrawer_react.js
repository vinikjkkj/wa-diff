__d(
  "WAWebAdsManagementDrawer.react",
  [
    "fbt",
    "WAWebAdCollection",
    "WAWebAdCreationLogger",
    "WAWebAdList.react",
    "WAWebAdsManagementFallback.react",
    "WAWebAdsManagementLWILink.react",
    "WAWebAdsManagementLoadError.react",
    "WAWebAdsManagementMetricsInfoModal.react",
    "WAWebAdsManagementRecoveryNeeded.react",
    "WAWebAdsManagementSpinner.react",
    "WAWebAdsStackRefreshedIcon.react",
    "WAWebBizGatingUtils",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerSection.react",
    "WAWebQplFlowWrapper",
    "WAWebWamEnumLwiScreenAction",
    "WDSButton.react",
    "WDSIconIcInfo.react",
    "qpl",
    "react",
    "useWAWebListener",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useState,
      _ = r("qpl")._(1029378759, "1575");
    function f() {
      r("vulture")("WXjO2xhOj1z09eFc3lEMHW_7mfE=");
      var e = s._(
        /*BTDS*/ "We cannot load your ads now. Please use WhatsApp on your mobile device to complete the required actions.",
      );
      return c.jsx(r("WAWebAdsManagementLoadError.react"), { errorText: e });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.activeAccountInfo,
        l = a.isInitialStep,
        u = a.onBack,
        d = i.id,
        g = p(!1),
        h = g[0],
        y = g[1],
        C = p(!0),
        b = C[0],
        v = C[1],
        S = p({ visible: !1 }),
        R = S[0],
        L = S[1],
        E = p(null),
        k = E[0],
        I = E[1],
        T = s._(/*BTDS*/ "Manage your ads on WhatsApp"),
        D = s._(
          /*BTDS*/ "Track your ads, control your budget, pause or stop ads any time. Verify your email to continue.",
        ),
        x = o("WAWebAdsStackRefreshedIcon.react").AdsStackRefreshedIcon,
        $ = function () {
          if (
            (R.visible &&
              (o("WAWebQplFlowWrapper").QPL.markerPoint(
                _,
                "recovery_flow_back",
              ),
              o("WAWebQplFlowWrapper").QPL.markerEnd(_, 4)),
            u == null)
          ) {
            o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
            return;
          }
          u();
        },
        P = function () {
          (v(!0), y(!1), o("WAWebAdCollection").AdCollection.loadAds(d));
        };
      (m(P, [d]),
        o("useWAWebListener").useListener(
          o("WAWebAdCollection").AdCollection,
          "ads-loaded",
          function (e) {
            e.pageId === d &&
              (v(!1),
              e.result === "success"
                ? (I(o("WAWebAdCollection").AdCollection.getModelsArray()),
                  R.visible && L({ visible: !1 }),
                  o("WAWebAdCreationLogger").logManageAdsScreenEvent(
                    i,
                    o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION
                      .LWI_NEW_MANAGE_ADS_TAB_ADS_LOADED,
                  ))
                : e.result === "recovery-required"
                  ? L({ visible: !0, emailMask: e.emailMask })
                  : (e.result, y(!0)));
          },
        ));
      var N = function () {
          o("WAWebAdCollection").AdCollection.loadAds(d);
        },
        M = null;
      R.visible &&
        (M = o("WAWebBizGatingUtils").adManagementRecoveryFlowEnabled()
          ? c.jsx(r("WAWebAdsManagementRecoveryNeeded.react"), {
              emailMask: R.emailMask,
              handleCodeEntered: N,
              headerDescription: D,
              headerText: T,
              Icon: x,
            })
          : c.jsx(f, {}));
      var w =
          h && M == null
            ? c.jsx(r("WAWebAdsManagementFallback.react"), { onClickRetry: P })
            : null,
        A = b ? c.jsx(r("WAWebAdsManagementSpinner.react"), {}) : null,
        F = k != null ? c.jsx(r("WAWebAdList.react"), { ads: k }) : null,
        O = c.jsx(r("WAWebAdsManagementLWILink.react"), {}),
        B = o("WAWebBizGatingUtils").adManagementMetricsDisplayingEnabled()
          ? c.jsx(r("WDSButton.react"), {
              Icon: r("WDSIconIcInfo.react"),
              onPress: o("WAWebAdsManagementMetricsInfoModal.react")
                .displayAdsManagementMetricsInfoModal,
              variant: "borderless",
              testid: void 0,
            })
          : null,
        W = o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
        q = {};
      return (
        l ? (q.onCancel = $) : (q.onBack = $),
        c.jsxs(r("WAWebDrawer.react"), {
          ref: n,
          theme: "settings",
          children: [
            c.jsx(
              o("WAWebDrawerHeader.react").DrawerHeader,
              babelHelpers.extends(
                {
                  title: s._(/*BTDS*/ "Manage ads"),
                  type: W,
                  focusBackOrCancel: !0,
                },
                q,
                { children: B },
              ),
            ),
            c.jsx(r("WAWebDrawerBody.react"), {
              children: c.jsxs(r("WAWebDrawerSection.react"), {
                theme: "expand-height",
                animation: !1,
                children: [F, w, M, A, O],
              }),
            }),
          ],
        })
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    var h = g;
    ((l.AdsManagementRecoveryNeededCompleteInPrimary = f),
      (l.AdsManagementDrawer = h));
  },
  226,
);
