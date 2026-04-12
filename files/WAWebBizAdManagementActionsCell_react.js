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
      var t = e.boostId,
        n = e.boostingStatus,
        a = e.isResuming,
        i = e.manageAdsFlowID,
        l = e.onDeletePress,
        c = e.onPausePress,
        d = e.onRecreatePress,
        m = e.onResumePress,
        p = e.onViewResults,
        _ = n === "ACTIVE",
        f = n === "PAUSED",
        g =
          n != null &&
          o(
            "WAWebBizNativeAdsRecreateConstants",
          ).RECREATE_ELIGIBLE_STATUSES.includes(n) &&
          o("WAWebBizGatingUtils").nativeAdsRecreateEnabled(),
        h = function () {
          var e;
          ((e = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
            e.LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE,
            e.LWI_SCREEN_ACTION.LWI_ACTION_PAUSE_AD_TAPPED,
            e.LWI_ADS_IDENTITY_TYPE.PAGE,
            i,
            t,
          ),
            c());
        },
        y = function () {
          var e;
          ((e = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
            e.LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE,
            e.LWI_SCREEN_ACTION.LWI_ACTION_RESUME_AD_TAPPED,
            e.LWI_ADS_IDENTITY_TYPE.PAGE,
            i,
            t,
          ),
            m());
        },
        C = function () {
          var e;
          ((e = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
            e.LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE,
            e.LWI_SCREEN_ACTION.LWI_ACTION_DELETE_AD_TAPPED,
            e.LWI_ADS_IDENTITY_TYPE.PAGE,
            i,
            t,
          ),
            l());
        },
        b = function () {
          var e;
          ((e = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
            e.LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE,
            e.LWI_SCREEN_ACTION.LWI_ACTION_MANAGE_AD_SEE_DETAILS_TAPPED,
            e.LWI_ADS_IDENTITY_TYPE.PAGE,
            i,
            t,
          ),
            p());
        },
        v = function () {
          var e;
          ((e = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
            e.LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE,
            e.LWI_SCREEN_ACTION.LWI_ACTION_MANAGE_AD_INLINE_RECREATE_CTA_CLICK,
            e.LWI_ADS_IDENTITY_TYPE.PAGE,
            i,
            t,
          ),
            d());
        };
      return u.jsxs(r("WDSMenu.react"), {
        children: [
          _ &&
            u.jsx(r("WDSMenuItem.react"), {
              Icon: r("WDSIconIcPauseCircle.react"),
              title: s._(/*BTDS*/ "Pause"),
              onPress: h,
            }),
          f &&
            u.jsx(r("WDSMenuItem.react"), {
              Icon: r("WDSIconIcPlayArrow.react"),
              title: a ? s._(/*BTDS*/ "Resuming") : s._(/*BTDS*/ "Resume"),
              onPress: y,
              disabled: a,
            }),
          u.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcVisibility.react"),
            title: s._(/*BTDS*/ "View results"),
            onPress: b,
          }),
          g &&
            u.jsx(r("WDSMenuItem.react"), {
              Icon: r("WDSIconIcContentCopy.react"),
              title: s._(/*BTDS*/ "Recreate"),
              onPress: v,
            }),
          u.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcDelete.react"),
            title: s._(/*BTDS*/ "Delete"),
            onPress: C,
            destructive: !0,
          }),
        ],
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.boostId,
        n = e.boostingStatus,
        a = e.onRecreatePress,
        i = e.onViewResults,
        l = m(null),
        s = r("useWAWebNativeAdsFlowIDContext")(),
        c = r("useWAWebBizAdPauseModal")(t),
        f = r("useWAWebBizAdDeleteModal")(t),
        g = r("useWAWebBizAdResumeWithToast")(t),
        h = g[0],
        y = g[1],
        C = r("useWDSMenu")({
          targetRef: l,
          menu: u.jsx(_, {
            boostId: t,
            boostingStatus: n,
            isResuming: y,
            manageAdsFlowID: s.manageAdsFlowID,
            onDeletePress: f,
            onPausePress: c,
            onRecreatePress: a,
            onResumePress: h,
            onViewResults: i,
          }),
          dismissable: !0,
          enableUIM: !1,
        }),
        b = C.closeMenu,
        v = C.isMenuOpen,
        S = C.menuPortal,
        R = C.openMenu,
        L = d(
          function (e) {
            if ((e.stopPropagation(), v)) b();
            else {
              var n;
              ((n = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
                n.LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE,
                n.LWI_SCREEN_ACTION.LWI_ACTION_ADS_LISTING_THREE_DOTS_CLICKED,
                n.LWI_ADS_IDENTITY_TYPE.PAGE,
                s.manageAdsFlowID,
                t,
              ),
                R());
            }
          },
          [v, b, t, s.manageAdsFlowID, R],
        );
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        justify: "end",
        xstyle: p.container,
        children: [
          u.jsx(r("WDSButton.react"), {
            ref: l,
            Icon: r("WDSIconIcMoreVert.react"),
            variant: "borderless",
            size: "small",
            type: "default",
            onPress: L,
          }),
          S,
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
