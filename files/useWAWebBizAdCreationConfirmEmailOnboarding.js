__d(
  "useWAWebBizAdCreationConfirmEmailOnboarding",
  [
    "CometRelay",
    "FBLogger",
    "Promise",
    "getErrorSafe",
    "react",
    "useWAWebBizAdCreationConfirmEmailOnboardingMutation.graphql",
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
              "useWAWebBizAdCreationConfirmEmailOnboardingMutation.graphql",
            ));
    function m(e) {
      return e === "INVALID_OR_EXPIRED_NONCE"
        ? "INVALID_OR_EXPIRED_NONCE"
        : e === "TOO_MANY_ATTEMPTS"
          ? "TOO_MANY_ATTEMPTS"
          : e === "EMAIL_NONCE_MISMATCH"
            ? "EMAIL_NONCE_MISMATCH"
            : e === "INVALID_EMAIL"
              ? "INVALID_EMAIL"
              : e === "EMAIL_ALREADY_EXISTS"
                ? "EMAIL_ALREADY_EXISTS"
                : e === "INVALID_USER"
                  ? "INVALID_USER"
                  : "GENERIC_ERROR";
    }
    function p() {
      var e = o("CometRelay").useMutation(d),
        t = e[0],
        a = e[1],
        i = c(
          function (e, o, a) {
            return new (s || (s = n("Promise")))(function (n) {
              t({
                variables: {
                  input: {
                    email: { sensitive_string_value: e },
                    code: { sensitive_string_value: o },
                    silent_nonce: { sensitive_string_value: a },
                  },
                },
                updater: function (n, r) {
                  var t =
                    r == null ? void 0 : r.wa_ad_account_upsert_onboarding_data;
                  if ((t == null ? void 0 : t.success) === !0) {
                    var o = n.getRoot(),
                      a = o.getLinkedRecord("wa_ad_account_onboarding_data");
                    (a == null &&
                      ((a = n.create(
                        "client:wa_ad_account_onboarding_data",
                        "WAAdAccountOnboardingAPI",
                      )),
                      o.setLinkedRecord(a, "wa_ad_account_onboarding_data")),
                      a.setValue(e, "email"));
                  }
                },
                onCompleted: function (r, o) {
                  if (o != null && o.length > 0) {
                    n({ success: !1, error: "GENERIC_ERROR" });
                    return;
                  }
                  var t =
                    r == null ? void 0 : r.wa_ad_account_upsert_onboarding_data;
                  if ((t == null ? void 0 : t.success) === !0) {
                    var a,
                      i,
                      l =
                        (a =
                          t == null || (i = t.onboarding_data) == null
                            ? void 0
                            : i.email) != null
                          ? a
                          : e;
                    n({ success: !0, email: l });
                  } else
                    n({
                      success: !1,
                      error: m(t == null ? void 0 : t.failure_reason),
                    });
                },
                onError: function (t) {
                  (r("FBLogger")("wa_ctwa_web")
                    .catching(r("getErrorSafe")(t))
                    .mustfix(
                      "Email onboarding confirm mutation failed in useWAWebBizAdCreationConfirmEmailOnboarding",
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
