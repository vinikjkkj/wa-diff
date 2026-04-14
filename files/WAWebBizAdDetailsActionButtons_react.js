__d(
  "WAWebBizAdDetailsActionButtons.react",
  [
    "fbt",
    "WAWebBizAdManagementLogger",
    "WAWebBizGatingUtils",
    "WAWebBizNativeAdsRecreateConstants",
    "WAWebFlex.react",
    "WDSActionTile.react",
    "WDSActionTileGroup.react",
    "WDSIconIcContentCopy.react",
    "WDSIconIcDelete.react",
    "WDSIconIcPauseCircle.react",
    "WDSIconIcPlayArrow.react",
    "react",
    "useWAWebBizAdDeleteModal",
    "useWAWebBizAdPauseModal",
    "useWAWebBizAdResumeWithToast",
    "useWAWebNativeAdsFlowIDContext",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useCallback,
      d = {
        container: {
          paddingTop: "x1tiyuxx",
          paddingBottom: "x1nbhmlj",
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "xyo0t3i",
          paddingLeft: null,
          paddingRight: null,
          rowGap: "x1qvou4u",
          $$css: !0,
        },
      };
    function m(e) {
      var t = e.item,
        n = e.onDelete,
        a = r("useWAWebNativeAdsFlowIDContext")(),
        i = r("useWAWebBizAdPauseModal")(t.boostId),
        l = r("useWAWebBizAdDeleteModal")(t.boostId, n),
        m = r("useWAWebBizAdResumeWithToast")(t.boostId),
        p = m[0],
        _ = m[1],
        f = c(
          function () {
            var e;
            ((e = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
              e.LWI_SCREEN_REFERENCE.LWI_SCREEN_AD_DETAILS,
              e.LWI_SCREEN_ACTION.LWI_ACTION_PAUSE_AD_TAPPED,
              e.LWI_ADS_IDENTITY_TYPE.PAGE,
              a.manageAdsFlowID,
              t.boostId,
            ),
              i());
          },
          [a.manageAdsFlowID, t.boostId, i],
        ),
        g = c(
          function () {
            var e;
            ((e = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
              e.LWI_SCREEN_REFERENCE.LWI_SCREEN_AD_DETAILS,
              e.LWI_SCREEN_ACTION.LWI_ACTION_DELETE_AD_TAPPED,
              e.LWI_ADS_IDENTITY_TYPE.PAGE,
              a.manageAdsFlowID,
              t.boostId,
            ),
              l());
          },
          [a.manageAdsFlowID, t.boostId, l],
        ),
        h = c(
          function () {
            var e;
            ((e = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
              e.LWI_SCREEN_REFERENCE.LWI_SCREEN_AD_DETAILS,
              e.LWI_SCREEN_ACTION.LWI_ACTION_RESUME_AD_TAPPED,
              e.LWI_ADS_IDENTITY_TYPE.PAGE,
              a.manageAdsFlowID,
              t.boostId,
            ),
              p());
          },
          [a.manageAdsFlowID, t.boostId, p],
        ),
        y =
          t.boostingStatus != null &&
          o(
            "WAWebBizNativeAdsRecreateConstants",
          ).RECREATE_ELIGIBLE_STATUSES.includes(t.boostingStatus) &&
          o("WAWebBizGatingUtils").nativeAdsRecreateEnabled(),
        C = t.boostId,
        b = t.onRecreateAd,
        v = c(
          function () {
            var e;
            ((e = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
              e.LWI_SCREEN_REFERENCE.LWI_SCREEN_AD_DETAILS,
              e.LWI_SCREEN_ACTION.LWI_ACTION_PROMOTE_AGAIN_TAPPED,
              e.LWI_ADS_IDENTITY_TYPE.PAGE,
              a.manageAdsFlowID,
              C,
            ),
              b(
                e.LWI_ENTRY_POINT
                  .SMB_ADVERTISE_FROM_AD_DETAILS_RECREATE_AD_BUTTON,
                "whatsapp_smb_ad_details_recreate_ad_button",
              ));
          },
          [a.manageAdsFlowID, C, b],
        ),
        S = t.boostingStatus === "ACTIVE",
        R = t.boostingStatus === "PAUSED";
      return u.jsx(o("WAWebFlex.react").FlexColumn, {
        xstyle: d.container,
        children: u.jsxs(r("WDSActionTileGroup.react"), {
          children: [
            y &&
              u.jsx(r("WDSActionTile.react"), {
                Icon: r("WDSIconIcContentCopy.react"),
                label: s._(/*BTDS*/ "Recreate"),
                onPress: v,
              }),
            S &&
              u.jsx(r("WDSActionTile.react"), {
                Icon: r("WDSIconIcPauseCircle.react"),
                label: s._(/*BTDS*/ "Pause"),
                onPress: f,
              }),
            R &&
              u.jsx(r("WDSActionTile.react"), {
                Icon: r("WDSIconIcPlayArrow.react"),
                label: _ ? s._(/*BTDS*/ "Resuming") : s._(/*BTDS*/ "Resume"),
                onPress: h,
                disabled: _,
              }),
            u.jsx(r("WDSActionTile.react"), {
              Icon: r("WDSIconIcDelete.react"),
              label: s._(/*BTDS*/ "Delete"),
              onPress: g,
            }),
          ],
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
