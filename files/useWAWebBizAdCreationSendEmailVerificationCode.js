__d(
  "useWAWebBizAdCreationSendEmailVerificationCode",
  [
    "CometRelay",
    "FBLogger",
    "Promise",
    "getErrorSafe",
    "react",
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
      var e = o("CometRelay").useMutation(d),
        t = e[0],
        a = e[1],
        i = c(
          function (e) {
            return new (s || (s = n("Promise")))(function (n) {
              t({
                variables: { input: { email: { sensitive_string_value: e } } },
                onCompleted: function (t, r) {
                  if (r != null && r.length > 0) {
                    n({ success: !1, error: "GENERIC_ERROR" });
                    return;
                  }
                  var e =
                    t == null
                      ? void 0
                      : t.wa_ad_account_send_email_verification_code;
                  (e == null ? void 0 : e.email_sent) === !0
                    ? n({ success: !0 })
                    : n({
                        success: !1,
                        error: m(e == null ? void 0 : e.failure_reason),
                      });
                },
                onError: function (t) {
                  (r("FBLogger")("wa_ctwa_web")
                    .catching(r("getErrorSafe")(t))
                    .mustfix(
                      "Send email verification code mutation failed in useWAWebBizAdCreationSendEmailVerificationCode",
                    ),
                    n({ success: !1, error: "GENERIC_ERROR" }));
                },
              });
            });
          },
          [t],
        );
      return [i, a];
    }
    l.default = p;
  },
  98,
);
