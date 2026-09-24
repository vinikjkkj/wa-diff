__d(
  "WAWebBizAIIntegrationHubHelpers",
  [
    "$InternalEnum",
    "WAWebBizAIIntegrationHubTypes",
    "WAWebBizAiAppointmentConnectorPolicy",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored(["Main", "AppDetail"]);
    function s(e) {
      var t;
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
      var n = o(
        "WAWebBizAiAppointmentConnectorPolicy",
      ).getAppointmentConnectorSelectionAction(e);
      return n == null || n.kind === "continue"
        ? null
        : o(
              "WAWebBizAiAppointmentConnectorPolicy",
            ).getAppointmentConnectorConnectAction(e) === "oauth"
          ? "oauth"
          : null;
    }
    ((l.IntegrationHubStep = e), (l.getIntegrationHubConnectAction = s));
  },
  98,
);
