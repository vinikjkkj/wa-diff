__d(
  "useWAWebBizAdCreationSendEmailVerificationCode",
  [
    "CometRelay",
    "FBLogger",
    "Promise",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebBizAdCreationSendEmailVerificationCodeMutation.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = (u || (u = o("react"))).useCallback,
      d =
        e !== void 0
          ? e
          : (e = n(
              "useWAWebBizAdCreationSendEmailVerificationCodeMutation.graphql",
            ));
    function m(e) {
      return e === "INVALID_EMAIL"
        ? "INVALID_EMAIL"
        : e === "EMAIL_ALREADY_EXISTS"
          ? "EMAIL_ALREADY_EXISTS"
          : e === "EMAIL_NONCE_MISMATCH"
            ? "EMAIL_NONCE_MISMATCH"
            : e === "INVALID_OR_EXPIRED_NONCE"
              ? "INVALID_OR_EXPIRED_NONCE"
              : e === "INVALID_USER"
                ? "INVALID_USER"
                : e === "TOO_MANY_ATTEMPTS"
                  ? "TOO_MANY_ATTEMPTS"
                  : "GENERIC_ERROR";
    }
    function p() {
      var e = o("react-compiler-runtime").c(5),
        t = o("CometRelay").useMutation(d),
        a = t[0],
        i = t[1],
        l;
      e[0] !== a
        ? ((l = function (t) {
            return new (s || (s = n("Promise")))(function (e) {
              a({
                variables: { input: { email: { sensitive_string_value: t } } },
                onCompleted: function (n, r) {
                  if (r != null && r.length > 0) {
                    e({ success: !1, error: "GENERIC_ERROR" });
                    return;
                  }
                  var t =
                    n == null
                      ? void 0
                      : n.wa_ad_account_send_email_verification_code;
                  (t == null ? void 0 : t.email_sent) === !0
                    ? e({ success: !0 })
                    : e({
                        success: !1,
                        error: m(t == null ? void 0 : t.failure_reason),
                      });
                },
                onError: function (n) {
                  (r("FBLogger")("wa_ctwa_web")
                    .catching(r("getErrorSafe")(n))
                    .mustfix(
                      "Send email verification code mutation failed in useWAWebBizAdCreationSendEmailVerificationCode",
                    ),
                    e({ success: !1, error: "GENERIC_ERROR" }));
                },
              });
            });
          }),
          (e[0] = a),
          (e[1] = l))
        : (l = e[1]);
      var u = l,
        c;
      return (
        e[2] !== i || e[3] !== u
          ? ((c = [u, i]), (e[2] = i), (e[3] = u), (e[4] = c))
          : (c = e[4]),
        c
      );
    }
    l.default = p;
  },
  98,
);
