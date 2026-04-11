__d(
  "securedActionTriggerChallenge",
  [
    "CometErrorOverlay",
    "CometRelayEnvironmentProvider",
    "CometThemeInfraBaseThemeGated.react",
    "CometThemeInfraUtils",
    "CometTransientDialogProvider.react",
    "FBLogger",
    "OutsideExceptionKeyCommandListener.react",
    "SecuredActionDialogRoot.entrypoint",
    "deferredLoadComponent",
    "react",
    "requireDeferredForDisplay",
    "securedActionChallengeToEntrypoints",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("deferredLoadComponent")(
        r("requireDeferredForDisplay")(
          "SecuredActionTriggerWithEncryptedContext.react",
        ).__setRef("securedActionTriggerChallenge"),
      ),
      c = r("deferredLoadComponent")(
        r("requireDeferredForDisplay")(
          "SecuredActionTriggerWithAccountID.react",
        ).__setRef("securedActionTriggerChallenge"),
      );
    function d() {
      var e;
      return (e = document.location.href) == null
        ? void 0
        : e.includes("accountscenter");
    }
    function m(e, t) {
      var n,
        r = (n = t.force_cds) != null ? n : !1;
      return ((d() || r) && e.CDS) || e.default;
    }
    function p(e, t) {
      var n,
        r = (n = t.force_cds) != null ? n : !1;
      return ((d() || r) && e.CDS) || e.default;
    }
    function _(e, t) {
      var n = o("CometThemeInfraUtils").getCometThemeInfraThemesForApp();
      e.challenge_type === "2fac" ? y(t, e, n) : f(t, e, n);
    }
    function f(e, t, n) {
      return C(n, e, function (e) {
        var n = e.onCancel,
          r = e.onExit,
          o = e.onFailure,
          a = e.onSuccess,
          i = t.challenge_type;
        switch (i) {
          case "reauth":
            return g(i, t, r, a);
          default:
            return h(i, t, r, a, n, o);
        }
      });
    }
    function g(e, t, n, a) {
      var i,
        l,
        c = o(
          "securedActionChallengeToEntrypoints",
        ).securedActionChallengeToEntrypointsWithEncryptedContext(e);
      if (c === null)
        throw (
          n(),
          r("FBLogger")("secured_action").mustfixThrow(
            'unsuported challenge type "%s"',
            e,
          )
        );
      return s.jsx(u, {
        encryptedContext: (i = t.encrypted_context) != null ? i : "",
        entrypoint: p(c, t),
        flow: "secured_action",
        onExit: n,
        onSuccess: a,
        useXFAC: (l = t.use_xfac) != null ? l : !1,
        xfacConfig: "XFAC_ORGANIC_SENSITIVE_ACTIONS",
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e, t, n, a, i, l) {
      var u = o(
        "securedActionChallengeToEntrypoints",
      ).securedActionChallengeToEntrypointsWithAccountID(e);
      if (u === null)
        throw (
          n(),
          r("FBLogger")("secured_action").mustfixThrow(
            'unsuported challenge type "%s"',
            e,
          )
        );
      return s.jsx(c, {
        accountID: t.account_id,
        accountType: t.account_type,
        categoryName: t.category_name,
        context: t.context,
        entrypoint: m(u, t),
        onCancel: i,
        onExit: n,
        onFailure: l,
        onSuccess: a,
        reauthContentType: t.reauth_content_type,
        sensitiveAction: t.sensitive_action,
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e, t, n) {
      return C(n, e, function (e) {
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
        return s.jsx(u, {
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
    function C(e, t, n) {
      var a = t.onCancel,
        i = t.onExit,
        l = t.onFailure,
        u = t.onSuccess;
      return o("CometErrorOverlay").injectComponent(function (t) {
        var c =
          o(
            "CometThemeInfraUtils",
          ).enableCometThemeInfraThemeInXMDSComponents() === !0 &&
          e != null &&
          r("CometThemeInfraBaseThemeGated.react") != null;
        return c
          ? s.jsx(r("CometRelayEnvironmentProvider"), {
              children: s.jsx(r("OutsideExceptionKeyCommandListener.react"), {
                children:
                  e &&
                  r("CometThemeInfraBaseThemeGated.react") &&
                  s.jsx(r("CometThemeInfraBaseThemeGated.react"), {
                    themes: e,
                    children: s.jsx(r("CometTransientDialogProvider.react"), {
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
                          (u(), t());
                        },
                      }),
                    }),
                  }),
              }),
            })
          : s.jsx(r("CometRelayEnvironmentProvider"), {
              children: s.jsx(r("OutsideExceptionKeyCommandListener.react"), {
                children: s.jsx(r("CometTransientDialogProvider.react"), {
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
                      (u(), t());
                    },
                  }),
                }),
              }),
            });
      });
    }
    l.default = _;
  },
  98,
);
