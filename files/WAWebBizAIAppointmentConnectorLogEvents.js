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
        i = e.surface,
        l = e.target;
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_TOOLS,
        extraAttributes: babelHelpers.extends(
          {
            is_connector_framework: !0,
            connector_flow_variant: "connect_first",
            entry_point: "setup_nux",
          },
          a == null
            ? {}
            : {
                connector_id: a.id,
                connector_name: a.name,
                connector_auth_type: a.isMembrane ? "membrane" : "direct_oauth",
              },
          r,
        ),
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: i,
        userActionTarget: l,
        userActionType: t,
      });
    }
    l.logAppointmentConnectorJourney = e;
  },
  98,
);
