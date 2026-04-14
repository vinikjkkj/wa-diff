__d(
  "useWAWebBizAdCreationMaybeOpenEmailVerification",
  [
    "fbt",
    "CometRelay",
    "WAWebBizAdCreationEmailVerificationDialog.react",
    "WAWebBizAdCreationIdentityContext",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationSpecContext",
    "WAWebBizAdCreationVerifyEmailCode",
    "WAWebModalManager",
    "WAWebRequestAdAccountRecoveryCode",
    "asyncToGeneratorRuntime",
    "nullthrows",
    "react",
    "useWAWebBizAdCreationMaybeOpenEmailVerification_query.graphql",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useContext,
      _ = d.useRef,
      f = d.useState,
      g =
        e !== void 0
          ? e
          : (e = n(
              "useWAWebBizAdCreationMaybeOpenEmailVerification_query.graphql",
            ));
    function h(e, t) {
      var a,
        i,
        l = p(r("WAWebBizAdCreationIdentityContext")),
        u = p(r("WAWebBizAdCreationLoggerContext")),
        d = p(r("WAWebBizAdCreationSpecContext")),
        h =
          d == null ||
          (a = d.currentValue) == null ||
          (a = a.adAccountData) == null
            ? void 0
            : a.id,
        y = f(!1),
        C = y[0],
        b = y[1],
        v = _(!1),
        S = o("CometRelay").useFragment(g, e),
        R =
          S == null || (i = S.wa_ad_account_onboarding_data) == null
            ? void 0
            : i.email,
        L = m(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield o(
              "WAWebRequestAdAccountRecoveryCode",
            ).requestAdAccountRecoveryCode();
            return e === "success"
              ? { success: !0 }
              : {
                  success: !1,
                  error: s._(
                    /*BTDS*/ "Something went wrong. Please try again later.",
                  ),
                };
          }),
          [],
        ),
        E = m(
          function () {
            var e = r("nullthrows")(
                l,
                "useWAWebBizAdCreationMaybeOpenEmailVerification must be used within WAWebBizAdCreationIdentityContext",
              ),
              a = e.setVerifiedEmailRelayEnvironment,
              i = e.strongRelayEnvironment;
            if (i != null) {
              t.onComplete(i);
              return;
            }
            (b(!0),
              v.current ||
                ((v.current = !0),
                o(
                  "WAWebRequestAdAccountRecoveryCode",
                ).requestAdAccountRecoveryCode()));
            var d = (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var n = yield o(
                      "WAWebBizAdCreationVerifyEmailCode",
                    ).verifyEmailCodeAndPersistToken(e);
                    if (n.success) {
                      var r = yield a(n.token);
                      return (
                        b(!1),
                        r == null
                          ? {
                              success: !1,
                              error: s._(
                                /*BTDS*/ "Something went wrong. Please try again later.",
                              ),
                            }
                          : (t.onComplete(r), { success: !0 })
                      );
                    }
                    return { success: !1, error: n.error };
                  },
                );
                return function (n) {
                  return e.apply(this, arguments);
                };
              })(),
              m = function () {
                (b(!1),
                  o("WAWebModalManager").closeModalManager(),
                  t.onCancel == null || t.onCancel());
              },
              p =
                R != null
                  ? s._(/*BTDS*/ "Enter the 6-digit code we sent to {email}.", [
                      s._param("email", R),
                    ])
                  : s._(
                      /*BTDS*/ "Enter the 6-digit code we sent to your email address.",
                    );
            o("WAWebModalManager").ModalManager.open(
              c.jsx(r("WAWebBizAdCreationEmailVerificationDialog.react"), {
                adAccountID: h,
                bodyText: p,
                loggerContext: u,
                onCancel: m,
                onRequestResend: L,
                onSuccess: o("WAWebModalManager").closeModalManager,
                titleText: s._(/*BTDS*/ "Confirm it's you"),
                verifyCode: d,
              }),
              { blockClose: !0 },
            );
          },
          [h, L, l, u, t, R],
        );
      return { isVerifyingEmail: C, maybeOpenEmailVerification: E };
    }
    l.default = h;
  },
  226,
);
