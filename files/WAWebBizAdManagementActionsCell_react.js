__d(
  "WAWebBizAdManagementActionsCell.react",
  [
    "fbt",
    "WAWebBizAdManagementLogger",
    "WAWebBizGatingUtils",
    "WAWebBizNativeAdsRecreateConstants",
    "WAWebFlex.react",
    "WDSButton.react",
    "WDSIconIcContentCopy.react",
    "WDSIconIcDelete.react",
    "WDSIconIcMoreVert.react",
    "WDSIconIcPauseCircle.react",
    "WDSIconIcPlayArrow.react",
    "WDSIconIcVisibility.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebBizAdDeleteModal",
    "useWAWebBizAdPauseModal",
    "useWAWebBizAdResumeWithToast",
    "useWAWebNativeAdsFlowIDContext",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useRef,
      p = { container: { width: "xh8yej3", $$css: !0 } };
    function _(e) {
      var t = o("react-compiler-runtime").c(44),
        n = e.boostId,
        a = e.boostingStatus,
        i = e.isResuming,
        l = e.manageAdsFlowID,
        c = e.onDeletePress,
        d = e.onPausePress,
        m = e.onRecreatePress,
        p = e.onResumePress,
        _ = e.onViewResults,
        f = a === "ACTIVE",
        g = a === "PAUSED",
        h;
      t[0] !== a
        ? ((h =
            a != null &&
            o(
              "WAWebBizNativeAdsRecreateConstants",
            ).RECREATE_ELIGIBLE_STATUSES.includes(a) &&
            o("WAWebBizGatingUtils").nativeAdsRecreateEnabled()),
          (t[0] = a),
          (t[1] = h))
        : (h = t[1]);
      var y = h,
        C;
      t[2] !== n || t[3] !== l || t[4] !== d
        ? ((C = function () {
            var e;
            ((e = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
              e.LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE,
              e.LWI_SCREEN_ACTION.LWI_ACTION_PAUSE_AD_TAPPED,
              e.LWI_ADS_IDENTITY_TYPE.PAGE,
              l,
              n,
            ),
              d());
          }),
          (t[2] = n),
          (t[3] = l),
          (t[4] = d),
          (t[5] = C))
        : (C = t[5]);
      var b = C,
        v;
      t[6] !== n || t[7] !== l || t[8] !== p
        ? ((v = function () {
            var e;
            ((e = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
              e.LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE,
              e.LWI_SCREEN_ACTION.LWI_ACTION_RESUME_AD_TAPPED,
              e.LWI_ADS_IDENTITY_TYPE.PAGE,
              l,
              n,
            ),
              p());
          }),
          (t[6] = n),
          (t[7] = l),
          (t[8] = p),
          (t[9] = v))
        : (v = t[9]);
      var S = v,
        R;
      t[10] !== n || t[11] !== l || t[12] !== c
        ? ((R = function () {
            var e;
            ((e = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
              e.LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE,
              e.LWI_SCREEN_ACTION.LWI_ACTION_DELETE_AD_TAPPED,
              e.LWI_ADS_IDENTITY_TYPE.PAGE,
              l,
              n,
            ),
              c());
          }),
          (t[10] = n),
          (t[11] = l),
          (t[12] = c),
          (t[13] = R))
        : (R = t[13]);
      var L = R,
        E;
      t[14] !== n || t[15] !== l || t[16] !== _
        ? ((E = function () {
            var e;
            ((e = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
              e.LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE,
              e.LWI_SCREEN_ACTION.LWI_ACTION_MANAGE_AD_SEE_DETAILS_TAPPED,
              e.LWI_ADS_IDENTITY_TYPE.PAGE,
              l,
              n,
            ),
              _());
          }),
          (t[14] = n),
          (t[15] = l),
          (t[16] = _),
          (t[17] = E))
        : (E = t[17]);
      var k = E,
        I;
      t[18] !== n || t[19] !== l || t[20] !== m
        ? ((I = function () {
            var e;
            ((e = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
              e.LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE,
              e.LWI_SCREEN_ACTION
                .LWI_ACTION_MANAGE_AD_INLINE_RECREATE_CTA_CLICK,
              e.LWI_ADS_IDENTITY_TYPE.PAGE,
              l,
              n,
            ),
              m());
          }),
          (t[18] = n),
          (t[19] = l),
          (t[20] = m),
          (t[21] = I))
        : (I = t[21]);
      var T = I,
        D;
      t[22] !== b || t[23] !== f
        ? ((D =
            f &&
            u.jsx(r("WDSMenuItem.react"), {
              Icon: r("WDSIconIcPauseCircle.react"),
              title: s._(/*BTDS*/ "Pause"),
              onPress: b,
            })),
          (t[22] = b),
          (t[23] = f),
          (t[24] = D))
        : (D = t[24]);
      var x;
      t[25] !== S || t[26] !== g || t[27] !== i
        ? ((x =
            g &&
            u.jsx(r("WDSMenuItem.react"), {
              Icon: r("WDSIconIcPlayArrow.react"),
              title: i ? s._(/*BTDS*/ "Resuming") : s._(/*BTDS*/ "Resume"),
              onPress: S,
              disabled: i,
            })),
          (t[25] = S),
          (t[26] = g),
          (t[27] = i),
          (t[28] = x))
        : (x = t[28]);
      var $;
      t[29] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = s._(/*BTDS*/ "View results")), (t[29] = $))
        : ($ = t[29]);
      var P;
      t[30] !== k
        ? ((P = u.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcVisibility.react"),
            title: $,
            onPress: k,
          })),
          (t[30] = k),
          (t[31] = P))
        : (P = t[31]);
      var N;
      t[32] !== T || t[33] !== y
        ? ((N =
            y &&
            u.jsx(r("WDSMenuItem.react"), {
              Icon: r("WDSIconIcContentCopy.react"),
              title: s._(/*BTDS*/ "Recreate"),
              onPress: T,
            })),
          (t[32] = T),
          (t[33] = y),
          (t[34] = N))
        : (N = t[34]);
      var M;
      t[35] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = s._(/*BTDS*/ "Delete")), (t[35] = M))
        : (M = t[35]);
      var w;
      t[36] !== L
        ? ((w = u.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcDelete.react"),
            title: M,
            onPress: L,
            destructive: !0,
          })),
          (t[36] = L),
          (t[37] = w))
        : (w = t[37]);
      var A;
      return (
        t[38] !== P || t[39] !== N || t[40] !== w || t[41] !== D || t[42] !== x
          ? ((A = u.jsxs(r("WDSMenu.react"), { children: [D, x, P, N, w] })),
            (t[38] = P),
            (t[39] = N),
            (t[40] = w),
            (t[41] = D),
            (t[42] = x),
            (t[43] = A))
          : (A = t[43]),
        A
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(21),
        n = e.boostId,
        a = e.boostingStatus,
        i = e.onRecreatePress,
        l = e.onViewResults,
        s = m(null),
        c = r("useWAWebNativeAdsFlowIDContext")(),
        d = r("useWAWebBizAdPauseModal")(n),
        f = r("useWAWebBizAdDeleteModal")(n),
        g = r("useWAWebBizAdResumeWithToast")(n),
        h = g[0],
        y = g[1],
        C;
      t[0] !== n ||
      t[1] !== a ||
      t[2] !== c.manageAdsFlowID ||
      t[3] !== h ||
      t[4] !== y ||
      t[5] !== i ||
      t[6] !== l ||
      t[7] !== f ||
      t[8] !== d
        ? ((C = {
            targetRef: s,
            menu: u.jsx(_, {
              boostId: n,
              boostingStatus: a,
              isResuming: y,
              manageAdsFlowID: c.manageAdsFlowID,
              onDeletePress: f,
              onPausePress: d,
              onRecreatePress: i,
              onResumePress: h,
              onViewResults: l,
            }),
            dismissable: !0,
            enableUIM: !1,
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = c.manageAdsFlowID),
          (t[3] = h),
          (t[4] = y),
          (t[5] = i),
          (t[6] = l),
          (t[7] = f),
          (t[8] = d),
          (t[9] = C))
        : (C = t[9]);
      var b = r("useWDSMenu")(C),
        v = b.closeMenu,
        S = b.isMenuOpen,
        R = b.menuPortal,
        L = b.openMenu,
        E;
      t[10] !== n ||
      t[11] !== v ||
      t[12] !== c.manageAdsFlowID ||
      t[13] !== S ||
      t[14] !== L
        ? ((E = function (t) {
            if ((t.stopPropagation(), S)) v();
            else {
              var e;
              ((e = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
                e.LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE,
                e.LWI_SCREEN_ACTION.LWI_ACTION_ADS_LISTING_THREE_DOTS_CLICKED,
                e.LWI_ADS_IDENTITY_TYPE.PAGE,
                c.manageAdsFlowID,
                n,
              ),
                L());
            }
          }),
          (t[10] = n),
          (t[11] = v),
          (t[12] = c.manageAdsFlowID),
          (t[13] = S),
          (t[14] = L),
          (t[15] = E))
        : (E = t[15]);
      var k = E,
        I;
      t[16] !== k
        ? ((I = u.jsx(r("WDSButton.react"), {
            ref: s,
            Icon: r("WDSIconIcMoreVert.react"),
            variant: "borderless",
            size: "small",
            type: "default",
            onPress: k,
          })),
          (t[16] = k),
          (t[17] = I))
        : (I = t[17]);
      var T;
      return (
        t[18] !== R || t[19] !== I
          ? ((T = u.jsxs(o("WAWebFlex.react").FlexRow, {
              justify: "end",
              xstyle: p.container,
              children: [I, R],
            })),
            (t[18] = R),
            (t[19] = I),
            (t[20] = T))
          : (T = t[20]),
        T
      );
    }
    l.default = f;
  },
  226,
);
