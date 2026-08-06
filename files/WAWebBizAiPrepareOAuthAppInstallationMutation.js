__d(
  "WAWebBizAiPrepareOAuthAppInstallationMutation",
  ["WAWebBizAiPrepareOAuthAppInstallationMutation.graphql"],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBizAiPrepareOAuthAppInstallationMutation.graphql"));
    function u(e) {
      var t = e == null ? void 0 : e.prepare_oauth_app_installation;
      return (t == null ? void 0 : t.success) !== !0
        ? null
        : t.app_installation_url;
    }
    ((l.PREPARE_OAUTH_APP_INSTALLATION_MUTATION = s),
      (l.getAppInstallationUrl = u));
  },
  98,
);
