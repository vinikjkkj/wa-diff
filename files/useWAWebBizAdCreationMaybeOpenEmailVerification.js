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
    "react-compiler-runtime",
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
        l = o("react-compiler-runtime").c(9),
        u = p(r("WAWebBizAdCreationIdentityContext")),
        d = p(r("WAWebBizAdCreationLoggerContext")),
        m = p(r("WAWebBizAdCreationSpecContext")),
        h =
          m == null ||
          (a = m.currentValue) == null ||
          (a = a.adAccountData) == null
            ? void 0
            : a.id,
        C = f(!1),
        b = C[0],
        v = C[1],
        S = _(!1),
        R = o("CometRelay").useFragment(g, e),
        L =
          R == null || (i = R.wa_ad_account_onboarding_data) == null
            ? void 0
            : i.email,
        E = y,
        k;
      l[0] !== h || l[1] !== L || l[2] !== u || l[3] !== d || l[4] !== t
        ? ((k = function () {
            var e = r("nullthrows")(
                u,
                "useWAWebBizAdCreationMaybeOpenEmailVerification must be used within WAWebBizAdCreationIdentityContext",
              ),
              a = e.setVerifiedEmailRelayEnvironment,
              i = e.strongRelayEnvironment;
            if (i != null) {
              t.onComplete(i);
              return;
            }
            (v(!0),
              S.current ||
                ((S.current = !0),
                o(
                  "WAWebRequestAdAccountRecoveryCode",
                ).requestAdAccountRecoveryCode()));
            var l = (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var n = yield o(
                      "WAWebBizAdCreationVerifyEmailCode",
                    ).verifyEmailCodeAndPersistToken(e);
                    if (n.success) {
                      var r = yield a(n.token);
                      return (
                        v(!1),
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
                (v(!1),
                  o("WAWebModalManager").closeModalManager(),
                  t.onCancel == null || t.onCancel());
              },
              p =
                L != null
                  ? s._(/*BTDS*/ "Enter the 6-digit code we sent to {email}.", [
                      s._param("email", L),
                    ])
                  : s._(
                      /*BTDS*/ "Enter the 6-digit code we sent to your email address.",
                    );
            o("WAWebModalManager").ModalManager.open(
              c.jsx(r("WAWebBizAdCreationEmailVerificationDialog.react"), {
                adAccountID: h,
                bodyText: p,
                loggerContext: d,
                onCancel: m,
                onRequestResend: E,
                onSuccess: o("WAWebModalManager").closeModalManager,
                titleText: s._(/*BTDS*/ "Confirm it's you"),
                verifyCode: l,
              }),
              { blockClose: !0 },
            );
          }),
          (l[0] = h),
          (l[1] = L),
          (l[2] = u),
          (l[3] = d),
          (l[4] = t),
          (l[5] = k))
        : (k = l[5]);
      var I = k,
        T;
      return (
        l[6] !== b || l[7] !== I
          ? ((T = { isVerifyingEmail: b, maybeOpenEmailVerification: I }),
            (l[6] = b),
            (l[7] = I),
            (l[8] = T))
          : (T = l[8]),
        T
      );
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        })),
        C.apply(this, arguments)
      );
    }
    l.default = h;
  },
  226,
);
