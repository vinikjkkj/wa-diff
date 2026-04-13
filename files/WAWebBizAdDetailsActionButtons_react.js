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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(36),
        n = e.item,
        a = e.onDelete,
        i = r("useWAWebNativeAdsFlowIDContext")(),
        l = r("useWAWebBizAdPauseModal")(n.boostId),
        c = r("useWAWebBizAdDeleteModal")(n.boostId, a),
        m = r("useWAWebBizAdResumeWithToast")(n.boostId),
        p = m[0],
        _ = m[1],
        f;
      t[0] !== i.manageAdsFlowID || t[1] !== n.boostId || t[2] !== l
        ? ((f = function () {
            var e;
            ((e = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
              e.LWI_SCREEN_REFERENCE.LWI_SCREEN_AD_DETAILS,
              e.LWI_SCREEN_ACTION.LWI_ACTION_PAUSE_AD_TAPPED,
              e.LWI_ADS_IDENTITY_TYPE.PAGE,
              i.manageAdsFlowID,
              n.boostId,
            ),
              l());
          }),
          (t[0] = i.manageAdsFlowID),
          (t[1] = n.boostId),
          (t[2] = l),
          (t[3] = f))
        : (f = t[3]);
      var g = f,
        h;
      t[4] !== i.manageAdsFlowID || t[5] !== n.boostId || t[6] !== c
        ? ((h = function () {
            var e;
            ((e = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
              e.LWI_SCREEN_REFERENCE.LWI_SCREEN_AD_DETAILS,
              e.LWI_SCREEN_ACTION.LWI_ACTION_DELETE_AD_TAPPED,
              e.LWI_ADS_IDENTITY_TYPE.PAGE,
              i.manageAdsFlowID,
              n.boostId,
            ),
              c());
          }),
          (t[4] = i.manageAdsFlowID),
          (t[5] = n.boostId),
          (t[6] = c),
          (t[7] = h))
        : (h = t[7]);
      var y = h,
        C;
      t[8] !== i.manageAdsFlowID || t[9] !== p || t[10] !== n.boostId
        ? ((C = function () {
            var e;
            ((e = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
              e.LWI_SCREEN_REFERENCE.LWI_SCREEN_AD_DETAILS,
              e.LWI_SCREEN_ACTION.LWI_ACTION_RESUME_AD_TAPPED,
              e.LWI_ADS_IDENTITY_TYPE.PAGE,
              i.manageAdsFlowID,
              n.boostId,
            ),
              p());
          }),
          (t[8] = i.manageAdsFlowID),
          (t[9] = p),
          (t[10] = n.boostId),
          (t[11] = C))
        : (C = t[11]);
      var b = C,
        v;
      t[12] !== n.boostingStatus
        ? ((v =
            n.boostingStatus != null &&
            o(
              "WAWebBizNativeAdsRecreateConstants",
            ).RECREATE_ELIGIBLE_STATUSES.includes(n.boostingStatus) &&
            o("WAWebBizGatingUtils").nativeAdsRecreateEnabled()),
          (t[12] = n.boostingStatus),
          (t[13] = v))
        : (v = t[13]);
      var S = v,
        R = n.boostId,
        L = n.onRecreateAd,
        E;
      t[14] !== R || t[15] !== i.manageAdsFlowID || t[16] !== L
        ? ((E = function () {
            var e;
            ((e = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
              e.LWI_SCREEN_REFERENCE.LWI_SCREEN_AD_DETAILS,
              e.LWI_SCREEN_ACTION.LWI_ACTION_PROMOTE_AGAIN_TAPPED,
              e.LWI_ADS_IDENTITY_TYPE.PAGE,
              i.manageAdsFlowID,
              R,
            ),
              L(
                e.LWI_ENTRY_POINT
                  .SMB_ADVERTISE_FROM_AD_DETAILS_RECREATE_AD_BUTTON,
                "whatsapp_smb_ad_details_recreate_ad_button",
              ));
          }),
          (t[14] = R),
          (t[15] = i.manageAdsFlowID),
          (t[16] = L),
          (t[17] = E))
        : (E = t[17]);
      var k = E,
        I = n.boostingStatus === "ACTIVE",
        T = n.boostingStatus === "PAUSED",
        D;
      t[18] !== k || t[19] !== S
        ? ((D =
            S &&
            u.jsx(r("WDSActionTile.react"), {
              Icon: r("WDSIconIcContentCopy.react"),
              label: s._(/*BTDS*/ "Recreate"),
              onPress: k,
            })),
          (t[18] = k),
          (t[19] = S),
          (t[20] = D))
        : (D = t[20]);
      var x;
      t[21] !== g || t[22] !== I
        ? ((x =
            I &&
            u.jsx(r("WDSActionTile.react"), {
              Icon: r("WDSIconIcPauseCircle.react"),
              label: s._(/*BTDS*/ "Pause"),
              onPress: g,
            })),
          (t[21] = g),
          (t[22] = I),
          (t[23] = x))
        : (x = t[23]);
      var $;
      t[24] !== b || t[25] !== T || t[26] !== _
        ? (($ =
            T &&
            u.jsx(r("WDSActionTile.react"), {
              Icon: r("WDSIconIcPlayArrow.react"),
              label: _ ? s._(/*BTDS*/ "Resuming") : s._(/*BTDS*/ "Resume"),
              onPress: b,
              disabled: _,
            })),
          (t[24] = b),
          (t[25] = T),
          (t[26] = _),
          (t[27] = $))
        : ($ = t[27]);
      var P;
      t[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = s._(/*BTDS*/ "Delete")), (t[28] = P))
        : (P = t[28]);
      var N;
      t[29] !== y
        ? ((N = u.jsx(r("WDSActionTile.react"), {
            Icon: r("WDSIconIcDelete.react"),
            label: P,
            onPress: y,
          })),
          (t[29] = y),
          (t[30] = N))
        : (N = t[30]);
      var M;
      return (
        t[31] !== N || t[32] !== D || t[33] !== x || t[34] !== $
          ? ((M = u.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: d.container,
              children: u.jsxs(r("WDSActionTileGroup.react"), {
                children: [D, x, $, N],
              }),
            })),
            (t[31] = N),
            (t[32] = D),
            (t[33] = x),
            (t[34] = $),
            (t[35] = M))
          : (M = t[35]),
        M
      );
    }
    l.default = m;
  },
  226,
);
