__d(
  "WAWebBizAIIntegrationHubHelpers",
  [
    "$InternalEnum",
    "WAWebBizAIIntegrationHubTypes",
    "WAWebBizAiAppointmentConnectorPolicy",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored([
      "Main",
      "AppDetail",
      "ConnectorParameters",
      "ConnectorNux",
    ]);
    function s(e) {
      var t, n, r, a, i;
      if (
        !o(
          "WAWebBizAiAppointmentConnectorPolicy",
        ).isAppointmentConnectorSelectable(e)
      )
        return null;
      if (o("WAWebBizAIIntegrationHubTypes").isGoogleDrivePlugin(e))
        return "google-drive";
      if (
        !o(
          "WAWebBizAiAppointmentConnectorPolicy",
        ).isSupportedAppointmentConnectorTemplate(
          (t = e.template) == null ? void 0 : t.templateType,
        )
      )
        return null;
      var l = o(
        "WAWebBizAiAppointmentConnectorPolicy",
      ).getAppointmentConnectorSelectionAction(e);
      if (l == null || l.kind === "continue") return null;
      var s = o(
        "WAWebBizAiAppointmentConnectorPolicy",
      ).getAppointmentConnectorConnectAction(e);
      return s === "api-key" &&
        ((n = (r = e.authorizationParams) == null ? void 0 : r.length) != null
          ? n
          : 0) === 0 &&
        ((a = (i = e.urlTemplateParams) == null ? void 0 : i.length) != null
          ? a
          : 0) === 0
        ? null
        : s;
    }
    function u(e, t) {
      var n,
        r = (function (e) {
          if (e === "GOOGLE") return "GOOGLE_CALENDAR";
          if (e === "APPLE") return "APPLE_CALENDAR";
          if (e === "OUTLOOK") return "MICROSOFT_OUTLOOK";
          if (e === "OUTLOOK_NATIVE") return "MICROSOFT_OUTLOOK_NATIVE";
          if (e === "GOHIGHLEVEL") return "GO_HIGH_LEVEL";
          if (e === "SIMPLYBOOK_ME") return "SIMPLYBOOKME";
          if (e === "IN_HOUSE") return null;
          {
            var t = e;
            return t;
          }
        })(t);
      if (r == null) return null;
      var o = e.filter(function (e) {
          return (
            e.apixfnPlugin === r &&
            e.productCategories.includes("APPOINTMENTS") &&
            e.connectionStatus !== "DISABLED" &&
            s(
              babelHelpers.extends({}, e, { connectionStatus: "AUTH_ERROR" }),
            ) != null
          );
        }),
        a =
          (n = o.find(function (e) {
            return e.connectionStatus === "AUTH_ERROR";
          })) != null
            ? n
            : o[0];
      return a == null
        ? null
        : babelHelpers.extends({}, a, {
            connectionStatus: "AUTH_ERROR",
            isConnected: !1,
          });
    }
    ((l.IntegrationHubStep = e),
      (l.getIntegrationHubConnectAction = s),
      (l.findCalendarReconnectPlugin = u));
  },
  98,
);
