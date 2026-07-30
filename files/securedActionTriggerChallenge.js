__d(
  "securedActionTriggerChallenge",
  [
    "CometErrorOverlay",
    "CometRelayEnvironmentProvider",
    "CometThemeInfraBaseThemeGated.react",
    "CometThemeInfraUtils",
    "CometTransientDialogProvider.react",
    "ExecutionEnvironment",
    "FBLogger",
    "FXAccountsCenterWYLILoggerQPL",
    "OutsideExceptionKeyCommandListener.react",
    "SecuredActionDialogRoot.entrypoint",
    "deferredLoadComponent",
    "isAccountsMetaDotComDomain.entrypointutils",
    "react",
    "requireDeferredForDisplay",
    "securedActionChallengeToEntrypoints",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = r("deferredLoadComponent")(
        r("requireDeferredForDisplay")(
          "SecuredActionTriggerWithEncryptedContext.react",
        ).__setRef("securedActionTriggerChallenge"),
      ),
      d = r("deferredLoadComponent")(
        r("requireDeferredForDisplay")(
          "SecuredActionTriggerWithAccountID.react",
        ).__setRef("securedActionTriggerChallenge"),
      );
    function m() {
      return (e || (e = r("ExecutionEnvironment"))).canUseDOM
        ? document.location.href.includes("accountscenter")
        : !1;
    }
    function p(e, t) {
      var n;
      if (e.metaAccount != null && t.account_type === "META_ACCOUNT")
        return e.metaAccount;
      var o = (n = t.force_cds) != null ? n : !1;
      if (m() || r("isAccountsMetaDotComDomain.entrypointutils")() || o) {
        if (t.account_type === "META_ACCOUNT") {
          var a, i;
          return (a = (i = e.metaCDS) != null ? i : e.CDS) != null
            ? a
            : e.default;
        }
        return e.CDS || e.default;
      }
      return e.default;
    }
    function _(e, t) {
      var n,
        r = (n = t.force_cds) != null ? n : !1;
      return ((m() || r) && e.CDS) || e.default;
    }
    function f(e, t) {
      var n = o("CometThemeInfraUtils").getCometThemeInfraThemesForApp();
      (o("FXAccountsCenterWYLILoggerQPL").addPoint(
        o("FXAccountsCenterWYLILoggerQPL").FXAccountsCenterWYLILoggerPoint
          .SECURED_ACTION_CHALLENGE_TRIGGERED,
      ),
        e.challenge_type === "2fac" ? C(t, e, n) : g(t, e, n));
    }
    function g(e, t, n) {
      return b(n, e, function (e) {
        var n = e.onCancel,
          r = e.onExit,
          o = e.onFailure,
          a = e.onSuccess,
          i = t.challenge_type;
        switch (i) {
          case "reauth":
            return h(i, t, r, a);
          default:
            return y(i, t, r, a, n, o);
        }
      });
    }
    function h(e, t, n, a) {
      var i,
        l,
        s = o(
          "securedActionChallengeToEntrypoints",
        ).securedActionChallengeToEntrypointsWithEncryptedContext(e);
      if (s === null)
        throw (
          n(),
          r("FBLogger")("secured_action").mustfixThrow(
            'unsuported challenge type "%s"',
            e,
          )
        );
      return u.jsx(c, {
        encryptedContext: (i = t.encrypted_context) != null ? i : "",
        entrypoint: _(s, t),
        flow: "secured_action",
        onExit: n,
        onSuccess: a,
        useXFAC: (l = t.use_xfac) != null ? l : !1,
        xfacConfig: "XFAC_ORGANIC_SENSITIVE_ACTIONS",
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e, t, n, a, i, l) {
      var s = o(
        "securedActionChallengeToEntrypoints",
      ).securedActionChallengeToEntrypointsWithAccountID(e);
      if (s === null)
        throw (
          n(),
          r("FBLogger")("secured_action").mustfixThrow(
            'unsuported challenge type "%s"',
            e,
          )
        );
      return u.jsx(d, {
        accountID: t.account_id,
        accountType: t.account_type,
        categoryName: t.category_name,
        context: t.context,
        entrypoint: p(s, t),
        onCancel: i,
        onExit: n,
        onFailure: l,
        onSuccess: a,
        reauthContentType: t.reauth_content_type,
        sensitiveAction: t.sensitive_action,
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e, t, n) {
      return b(n, e, function (e) {
        var n,
          o = e.onExit,
          a = e.onSuccess,
          i = t.encrypted_context;
        if (i === void 0)
          throw (
            o(),
            r("FBLogger")("secured_action").mustfixThrow(
              "two_factor challenge was thrown without a context",
            )
          );
        return u.jsx(c, {
          encryptedContext: i,
          entrypoint: r("SecuredActionDialogRoot.entrypoint"),
          flow: "secured_action",
          onExit: o,
          onSuccess: a,
          useXFAC: (n = t.use_xfac) != null ? n : !1,
          xfacConfig: "XFAC_SENSITIVE_ACTIONS_2FA",
        });
      });
    }
    function b(e, t, n) {
      var a = t.onCancel,
        i = t.onExit,
        l = t.onFailure,
        s = t.onSuccess;
      return o("CometErrorOverlay").injectComponent(function (t) {
        var c =
          o(
            "CometThemeInfraUtils",
          ).enableCometThemeInfraThemeInXMDSComponents() === !0 &&
          e != null &&
          r("CometThemeInfraBaseThemeGated.react") != null;
        return c
          ? u.jsx(r("CometRelayEnvironmentProvider"), {
              children: u.jsx(r("OutsideExceptionKeyCommandListener.react"), {
                children:
                  e &&
                  r("CometThemeInfraBaseThemeGated.react") &&
                  u.jsx(r("CometThemeInfraBaseThemeGated.react"), {
                    themes: e,
                    children: u.jsx(r("CometTransientDialogProvider.react"), {
                      children: n({
                        onCancel: function () {
                          a == null || a();
                        },
                        onExit: function () {
                          (i(), t());
                        },
                        onFailure: function () {
                          l == null || l();
                        },
                        onSuccess: function () {
                          (s(), t());
                        },
                      }),
                    }),
                  }),
              }),
            })
          : u.jsx(r("CometRelayEnvironmentProvider"), {
              children: u.jsx(r("OutsideExceptionKeyCommandListener.react"), {
                children: u.jsx(r("CometTransientDialogProvider.react"), {
                  children: n({
                    onCancel: function () {
                      a == null || a();
                    },
                    onExit: function () {
                      (i(), t());
                    },
                    onFailure: function () {
                      l == null || l();
                    },
                    onSuccess: function () {
                      (s(), t());
                    },
                  }),
                }),
              }),
            });
      });
    }
    l.default = f;
  },
  98,
);
