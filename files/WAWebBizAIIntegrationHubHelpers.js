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
    ((l.IntegrationHubStep = e), (l.getIntegrationHubConnectAction = s));
  },
  98,
);
