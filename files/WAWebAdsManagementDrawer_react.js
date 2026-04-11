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
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(1);
      r("vulture")("WXjO2xhOj1z09eFc3lEMHW_7mfE=");
      var t;
      if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        var n = s._(
          /*BTDS*/ "We cannot load your ads now. Please use WhatsApp on your mobile device to complete the required actions.",
        );
        ((t = c.jsx(r("WAWebAdsManagementLoadError.react"), { errorText: n })),
          (e[0] = t));
      } else t = e[0];
      return t;
    }
    function g(t) {
      var n = o("react-compiler-runtime").c(47),
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
        u = l.activeAccountInfo,
        d = l.isInitialStep,
        g = l.onBack,
        h = u.id,
        y = p(!1),
        C = y[0],
        b = y[1],
        v = p(!0),
        S = v[0],
        R = v[1],
        L;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = { visible: !1 }), (n[3] = L))
        : (L = n[3]);
      var E = p(L),
        k = E[0],
        I = E[1],
        T = p(null),
        D = T[0],
        x = T[1],
        $;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = s._(/*BTDS*/ "Manage your ads on WhatsApp")), (n[4] = $))
        : ($ = n[4]);
      var P = $,
        N;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = s._(
            /*BTDS*/ "Track your ads, control your budget, pause or stop ads any time. Verify your email to continue.",
          )),
          (n[5] = N))
        : (N = n[5]);
      var M = N,
        w;
      n[6] !== g || n[7] !== k.visible
        ? ((w = function () {
            if (
              (k.visible &&
                (o("WAWebQplFlowWrapper").QPL.markerPoint(
                  _,
                  "recovery_flow_back",
                ),
                o("WAWebQplFlowWrapper").QPL.markerEnd(_, 4)),
              g == null)
            ) {
              o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
              return;
            }
            g();
          }),
          (n[6] = g),
          (n[7] = k.visible),
          (n[8] = w))
        : (w = n[8]);
      var A = w,
        F;
      n[9] !== h
        ? ((F = function () {
            (R(!0), b(!1), o("WAWebAdCollection").AdCollection.loadAds(h));
          }),
          (n[9] = h),
          (n[10] = F))
        : (F = n[10]);
      var O = F,
        B;
      (n[11] !== h ? ((B = [h]), (n[11] = h), (n[12] = B)) : (B = n[12]),
        m(O, B));
      var W;
      (n[13] !== u || n[14] !== h || n[15] !== k.visible
        ? ((W = function (t) {
            t.pageId === h &&
              (R(!1),
              t.result === "success"
                ? (x(o("WAWebAdCollection").AdCollection.getModelsArray()),
                  k.visible && I({ visible: !1 }),
                  o("WAWebAdCreationLogger").logManageAdsScreenEvent(
                    u,
                    o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION
                      .LWI_NEW_MANAGE_ADS_TAB_ADS_LOADED,
                  ))
                : t.result === "recovery-required"
                  ? I({ visible: !0, emailMask: t.emailMask })
                  : b(!0));
          }),
          (n[13] = u),
          (n[14] = h),
          (n[15] = k.visible),
          (n[16] = W))
        : (W = n[16]),
        o("useWAWebListener").useListener(
          o("WAWebAdCollection").AdCollection,
          "ads-loaded",
          W,
        ));
      var q;
      n[17] !== h
        ? ((q = function () {
            o("WAWebAdCollection").AdCollection.loadAds(h);
          }),
          (n[17] = h),
          (n[18] = q))
        : (q = n[18]);
      var U = q,
        V = null;
      if (k.visible) {
        var H;
        (n[19] !== U || n[20] !== k.emailMask
          ? ((H = o("WAWebBizGatingUtils").adManagementRecoveryFlowEnabled()
              ? c.jsx(r("WAWebAdsManagementRecoveryNeeded.react"), {
                  emailMask: k.emailMask,
                  handleCodeEntered: U,
                  headerDescription: M,
                  headerText: P,
                  Icon: o("WAWebAdsStackRefreshedIcon.react")
                    .AdsStackRefreshedIcon,
                })
              : c.jsx(f, {})),
            (n[19] = U),
            (n[20] = k.emailMask),
            (n[21] = H))
          : (H = n[21]),
          (V = H));
      }
      var G;
      n[22] !== O || n[23] !== V || n[24] !== C
        ? ((G =
            C && V == null
              ? c.jsx(r("WAWebAdsManagementFallback.react"), {
                  onClickRetry: O,
                })
              : null),
          (n[22] = O),
          (n[23] = V),
          (n[24] = C),
          (n[25] = G))
        : (G = n[25]);
      var z = G,
        j;
      n[26] !== S
        ? ((j = S ? c.jsx(r("WAWebAdsManagementSpinner.react"), {}) : null),
          (n[26] = S),
          (n[27] = j))
        : (j = n[27]);
      var K = j,
        Q;
      n[28] !== D
        ? ((Q = D != null ? c.jsx(r("WAWebAdList.react"), { ads: D }) : null),
          (n[28] = D),
          (n[29] = Q))
        : (Q = n[29]);
      var X = Q,
        Y;
      n[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = c.jsx(r("WAWebAdsManagementLWILink.react"), {})), (n[30] = Y))
        : (Y = n[30]);
      var J = Y,
        Z;
      n[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = o("WAWebBizGatingUtils").adManagementMetricsDisplayingEnabled()
            ? c.jsx(r("WDSButton.react"), {
                Icon: r("WDSIconIcInfo.react"),
                onPress: o("WAWebAdsManagementMetricsInfoModal.react")
                  .displayAdsManagementMetricsInfoModal,
                variant: "borderless",
                testid: void 0,
              })
            : null),
          (n[31] = Z))
        : (Z = n[31]);
      var ee = Z,
        te = o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
        ne;
      n[32] !== A || n[33] !== d
        ? ((ne = {}),
          d ? (ne.onCancel = A) : (ne.onBack = A),
          (n[32] = A),
          (n[33] = d),
          (n[34] = ne))
        : (ne = n[34]);
      var re;
      n[35] === Symbol.for("react.memo_cache_sentinel")
        ? ((re = s._(/*BTDS*/ "Manage ads")), (n[35] = re))
        : (re = n[35]);
      var oe;
      n[36] !== ne
        ? ((oe = c.jsx(
            o("WAWebDrawerHeader.react").DrawerHeader,
            babelHelpers.extends(
              { title: re, type: te, focusBackOrCancel: !0 },
              ne,
              { children: ee },
            ),
          )),
          (n[36] = ne),
          (n[37] = oe))
        : (oe = n[37]);
      var ae;
      n[38] !== X || n[39] !== z || n[40] !== V || n[41] !== K
        ? ((ae = c.jsx(r("WAWebDrawerBody.react"), {
            children: c.jsxs(r("WAWebDrawerSection.react"), {
              theme: "expand-height",
              animation: !1,
              children: [X, z, V, K, J],
            }),
          })),
          (n[38] = X),
          (n[39] = z),
          (n[40] = V),
          (n[41] = K),
          (n[42] = ae))
        : (ae = n[42]);
      var ie;
      return (
        n[43] !== i || n[44] !== oe || n[45] !== ae
          ? ((ie = c.jsxs(r("WAWebDrawer.react"), {
              ref: i,
              theme: "settings",
              children: [oe, ae],
            })),
            (n[43] = i),
            (n[44] = oe),
            (n[45] = ae),
            (n[46] = ie))
          : (ie = n[46]),
        ie
      );
    }
    var h = g;
    ((l.AdsManagementRecoveryNeededCompleteInPrimary = f),
      (l.AdsManagementDrawer = h));
  },
  226,
);
