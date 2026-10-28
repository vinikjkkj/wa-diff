__d(
  "WAWebBizAIAppointmentConnectorLogEvents",
  [
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSmbFeatureNameEnum",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.action,
        n = e.attributes,
        r = n === void 0 ? {} : n,
        a = e.connector,
        i = e.entryPoint,
        l = i === void 0 ? "setup_nux" : i,
        u = e.surface,
        c = e.target;
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_TOOLS,
        extraAttributes: babelHelpers.extends({}, s(a, l), r),
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: u,
        userActionTarget: c,
        userActionType: t,
      });
    }
    function s(e, t) {
      return (
        t === void 0 && (t = "setup_nux"),
        babelHelpers.extends(
          {
            is_connector_framework: !0,
            connector_flow_variant: "connect_first",
            entry_point: t,
          },
          e == null
            ? {}
            : {
                connector_id: e.id,
                connector_name: e.name,
                connector_auth_type: e.isMembrane ? "membrane" : "direct_oauth",
              },
        )
      );
    }
    ((l.logAppointmentConnectorJourney = e),
      (l.getAppointmentConnectorLogAttributes = s));
  },
  98,
);
