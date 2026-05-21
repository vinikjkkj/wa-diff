__d(
  "WAWebBizBroadcastWebSendEnabledNoExposureQuickPromotionFilter",
  ["WAWebBusinessBroadcastsGatingUtils", "WAWebCommonQPSurfacesTypes"],
  function (t, n, r, o, a, i, l) {
    var e = {
        reason:
          "filtersRuleValidator:bizBroadcastWebSendEnabledNoExposure: not enabled",
      },
      s = {
        name: "whatsapp_smb_biz_broadcast_web_send_enabled_no_exposure",
        filter: function (n, r, a) {
          return o(
            "WAWebBusinessBroadcastsGatingUtils",
          ).isBizBroadcastSendWebEnabledNoExposure()
            ? o("WAWebCommonQPSurfacesTypes").RESULT_TRUE
            : e;
        },
      };
    l.bizBroadcastWebSendEnabledNoExposureFilter = s;
  },
  98,
);
