__d(
  "useWAWebBizAdCreationConfirmEmailOnboarding",
  [
    "CometRelay",
    "FBLogger",
    "Promise",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(5),
        t = o("CometRelay").useMutation(d),
        a = t[0],
        i = t[1],
        l;
      e[0] !== a
        ? ((l = function (t, o, i) {
            return new (s || (s = n("Promise")))(function (e) {
              a({
                variables: {
                  input: {
                    email: { sensitive_string_value: t },
                    code: { sensitive_string_value: o },
                    silent_nonce: { sensitive_string_value: i },
                  },
                },
                updater: function (n, r) {
                  var e =
                    r == null ? void 0 : r.wa_ad_account_upsert_onboarding_data;
                  if ((e == null ? void 0 : e.success) === !0) {
                    var o = n.getRoot(),
                      a = o.getLinkedRecord("wa_ad_account_onboarding_data");
                    (a == null &&
                      ((a = n.create(
                        "client:wa_ad_account_onboarding_data",
                        "WAAdAccountOnboardingAPI",
                      )),
                      o.setLinkedRecord(a, "wa_ad_account_onboarding_data")),
                      a.setValue(t, "email"));
                  }
                },
                onCompleted: function (r, o) {
                  if (o != null && o.length > 0) {
                    e({ success: !1, error: "GENERIC_ERROR" });
                    return;
                  }
                  var n =
                    r == null ? void 0 : r.wa_ad_account_upsert_onboarding_data;
                  if ((n == null ? void 0 : n.success) === !0) {
                    var a,
                      i,
                      l =
                        (a =
                          n == null || (i = n.onboarding_data) == null
                            ? void 0
                            : i.email) != null
                          ? a
                          : t;
                    e({ success: !0, email: l });
                  } else
                    e({
                      success: !1,
                      error: m(n == null ? void 0 : n.failure_reason),
                    });
                },
                onError: function (n) {
                  (r("FBLogger")("wa_ctwa_web")
                    .catching(r("getErrorSafe")(n))
                    .mustfix(
                      "Email onboarding confirm mutation failed in useWAWebBizAdCreationConfirmEmailOnboarding",
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
        e[2] !== u || e[3] !== i
          ? ((c = [u, i]), (e[2] = u), (e[3] = i), (e[4] = c))
          : (c = e[4]),
        c
      );
    }
    l.default = p;
  },
  98,
);
