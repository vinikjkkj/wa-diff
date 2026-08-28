__d(
  "fxGetReauthConfig",
  [
    "CometRelay",
    "FBLogger",
    "FXUtils",
    "MetaConfig",
    "fxGetPasswordlessDialogConfig",
    "fxGetReauthConfig.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e !== void 0 ? e : (e = n("fxGetReauthConfig.graphql"));
    function u(e, t) {
      var n = o("CometRelay").readInlineData(s, e),
        a = n.reauth_account_ids_and_type,
        i = n.reauth_accounts,
        l = n.reauth_custom_flow,
        u = n.should_see_new_passwordless_flow,
        c = n.success,
        d = n.web_reauth,
        p = null;
      if (m(l)) {
        if (d == null || t == null)
          throw r("FBLogger")("fx_settings").mustfixThrow(
            "Missing web reauth config for change service status mutation",
          );
        p = {
          canSeeNewPasswordlessFlow: u,
          dialogConfigProps: r("fxGetPasswordlessDialogConfig")(d),
          isPasswordless: !0,
          selectedAccount: t,
        };
      }
      var _ = r("MetaConfig")._("74");
      return {
        passwordlessData: p,
        reauthAccounts: _
          ? i == null
            ? void 0
            : i.map(function (e) {
                var t = e.platform_info,
                  n = e.profile_identifier;
                return { id: n, type: t == null ? void 0 : t.type };
              })
          : a == null
            ? void 0
            : a.map(function (e) {
                var t = e.account_id,
                  n = e.account_type;
                return { id: t, type: n };
              }),
        reauthCustomFlow: l,
        success: c,
      };
    }
    function c(e) {
      var t;
      return m(e.reauthCustomFlow) &&
        !(
          e.reauthAccounts &&
          e.reauthAccounts.length > 0 &&
          e.reauthAccounts[0].type === String(o("FXUtils").AccountType.FRL)
        )
        ? null
        : (t = e.reauthAccounts) != null
          ? t
          : [];
    }
    function d(e) {
      return m(e.reauthCustomFlow) && e.passwordlessData != null
        ? e.passwordlessData
        : { isPasswordless: !1 };
    }
    function m(e) {
      var t = ["PASSWORDLESS", "PASSWORDLESS_MANI"];
      return e != null && t.includes(e);
    }
    ((l.fxGetReauthConfig = u),
      (l.getReauthTargetUserID = c),
      (l.getPasswordlessData = d));
  },
  98,
);
