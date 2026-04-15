__d(
  "WAWebBizAdCreationEmailOnboardingFlow.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebBizAdCreationEmailCollectionDialog.react",
    "WAWebBizAdCreationEmailVerificationDialog.react",
    "WAWebFlex.react",
    "WDSTextualLink.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebBizAdCreationConfirmEmailOnboarding",
    "useWAWebBizAdCreationSendEmailVerificationCode",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useState,
      p = n("$InternalEnum").Mirrored(["EmailCollection", "Verification"]);
    function _(e) {
      return e === "INVALID_OR_EXPIRED_NONCE"
        ? s._(/*BTDS*/ "Invalid code")
        : e === "TOO_MANY_ATTEMPTS"
          ? s._(/*BTDS*/ "Incorrect code. Try again in 1 hour")
          : e === "EMAIL_NONCE_MISMATCH" ||
              e === "INVALID_EMAIL" ||
              e === "EMAIL_ALREADY_EXISTS" ||
              e === "INVALID_USER" ||
              e === "GENERIC_ERROR"
            ? s._(/*BTDS*/ "Something went wrong. Please try again later.")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function f(e) {
      return e === "TOO_MANY_ATTEMPTS"
        ? s._(/*BTDS*/ "Incorrect code. Try again in 1 hour")
        : s._(/*BTDS*/ "Something went wrong. Please try again later.");
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(36),
        a = e.adAccountID,
        i = e.loggerContext,
        l = e.onCancel,
        c = e.onComplete,
        d = m(null),
        g = d[0],
        h = d[1],
        y = m(null),
        C = y[0],
        b = y[1],
        v = r("useWAWebBizAdCreationConfirmEmailOnboarding")(),
        S = v[0],
        R = r("useWAWebBizAdCreationSendEmailVerificationCode")(),
        L = R[0],
        E;
      t[0] !== l
        ? ((E = {
            onEnd: l,
            transitions: o("useWAWebFlow").FlowTransitions.None,
          }),
          (t[0] = l),
          (t[1] = E))
        : (E = t[1]);
      var k = o("useWAWebFlow").useFlow(p.EmailCollection, E),
        I = k[0],
        T = k[1],
        D;
      t[2] !== S || t[3] !== g || t[4] !== C
        ? ((D = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (g == null || C == null)
                  return {
                    success: !1,
                    error: s._(
                      /*BTDS*/ "Something went wrong. Please try again later.",
                    ),
                  };
                var t = yield S(g, e, C);
                return t.success
                  ? { success: !0 }
                  : { success: !1, error: _(t.error) };
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (t[2] = S),
          (t[3] = g),
          (t[4] = C),
          (t[5] = D))
        : (D = t[5]);
      var x = D,
        $;
      t[6] !== g || t[7] !== L
        ? (($ = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (g == null)
                return {
                  success: !1,
                  error: s._(
                    /*BTDS*/ "Something went wrong. Please try again later.",
                  ),
                };
              var e = yield L(g);
              return e.success
                ? { success: !0 }
                : { success: !1, error: f(e.error) };
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[6] = g),
          (t[7] = L),
          (t[8] = $))
        : ($ = t[8]);
      var P = $;
      if (T.step == null) return null;
      var N;
      t[9] !== T
        ? ((N = function (t, n) {
            (h(t), b(n), T.push(p.Verification));
          }),
          (t[9] = T),
          (t[10] = N))
        : (N = t[10]);
      var M = N,
        w;
      t[11] !== T
        ? ((w = function () {
            (h(null), b(null), T.pop());
          }),
          (t[11] = T),
          (t[12] = w))
        : (w = t[12]);
      var A = w,
        F;
      e: {
        if (T.step === p.EmailCollection) {
          var O;
          (t[13] !== a || t[14] !== M || t[15] !== i || t[16] !== l
            ? ((O = u.jsx(r("WAWebBizAdCreationEmailCollectionDialog.react"), {
                adAccountID: a,
                loggerContext: i,
                onCancelClick: l,
                onSuccess: M,
              })),
              (t[13] = a),
              (t[14] = M),
              (t[15] = i),
              (t[16] = l),
              (t[17] = O))
            : (O = t[17]),
            (F = O));
          break e;
        }
        if (T.step === p.Verification) {
          var B;
          t[18] !== g || t[19] !== A
            ? ((B =
                g != null
                  ? s._(/*BTDS*/ "Sent to {email}. {=m4}", [
                      s._param("email", g),
                      s._implicitParam(
                        "=m4",
                        u.jsx(r("WDSTextualLink.react"), {
                          textConfig: "Body2Emphasized",
                          onClick: A,
                          children: s._(/*BTDS*/ "Change email"),
                        }),
                      ),
                    ])
                  : s._(/*BTDS*/ "Sent to your email address. {=m2}", [
                      s._implicitParam(
                        "=m2",
                        u.jsx(r("WDSTextualLink.react"), {
                          textConfig: "Body2Emphasized",
                          onClick: A,
                          children: s._(/*BTDS*/ "Change email"),
                        }),
                      ),
                    ])),
              (t[18] = g),
              (t[19] = A),
              (t[20] = B))
            : (B = t[20]);
          var W = B,
            q;
          t[21] === Symbol.for("react.memo_cache_sentinel")
            ? ((q = s._(/*BTDS*/ "Enter the 6 digit code")), (t[21] = q))
            : (q = t[21]);
          var U;
          (t[22] !== a ||
          t[23] !== W ||
          t[24] !== P ||
          t[25] !== i ||
          t[26] !== l ||
          t[27] !== c ||
          t[28] !== x
            ? ((U = u.jsx(
                r("WAWebBizAdCreationEmailVerificationDialog.react"),
                {
                  adAccountID: a,
                  loggerContext: i,
                  titleText: q,
                  bodyText: W,
                  verifyCode: x,
                  onSuccess: c,
                  onCancel: l,
                  onRequestResend: P,
                },
              )),
              (t[22] = a),
              (t[23] = W),
              (t[24] = P),
              (t[25] = i),
              (t[26] = l),
              (t[27] = c),
              (t[28] = x),
              (t[29] = U))
            : (U = t[29]),
            (F = U));
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            T.step,
        );
      }
      var V;
      t[30] !== F
        ? ((V = u.jsx(o("WAWebFlex.react").FlexColumn, { children: F })),
          (t[30] = F),
          (t[31] = V))
        : (V = t[31]);
      var H;
      return (
        t[32] !== I || t[33] !== T || t[34] !== V
          ? ((H = u.jsx(I, { flow: T, children: V })),
            (t[32] = I),
            (t[33] = T),
            (t[34] = V),
            (t[35] = H))
          : (H = t[35]),
        H
      );
    }
    l.default = g;
  },
  226,
);
