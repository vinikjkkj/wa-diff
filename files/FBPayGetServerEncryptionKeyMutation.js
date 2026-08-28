__d(
  "FBPayGetServerEncryptionKeyMutation",
  [
    "CometRelayErrorHandling",
    "PaymentsCometGetServerEncryptionKey",
    "PaymentsCometTransactionHubStrings",
    "RelayFBEnvironment",
    "emptyFunction",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s) {
      i === void 0 && (i = !1);
      var u = s == null ? void 0 : s.getResult(e);
      if (u != null)
        return (
          n(u.trustChain, u.isDevExternal),
          { dispose: r("emptyFunction") }
        );
      var c = l != null ? l : r("RelayFBEnvironment"),
        d = function (i) {
          var t,
            l,
            u =
              i == null || (t = i.get_server_encryption_key) == null
                ? void 0
                : t.trust_chain,
            c =
              i == null || (l = i.get_server_encryption_key) == null
                ? void 0
                : l.dev_external;
          if (u != null)
            (s == null || s.setResult(e, { isDevExternal: c, trustChain: u }),
              n(u, c));
          else {
            var d,
              m =
                i == null || (d = i.get_server_encryption_key) == null
                  ? void 0
                  : d.payments_error;
            m != null
              ? a(m)
              : a(
                  o(
                    "PaymentsCometTransactionHubStrings",
                  ).convertGenericUserFacingError(
                    r("err")(
                      "getServerEncryptionKey returns empty payment error",
                    ),
                  ),
                );
          }
        },
        m = function (n) {
          (t == null ||
            t.logClientLoadPaysecFail("get_encryption_key", {
              error_message: "Failed to getServerEncryptionKey: " + String(n),
            }),
            a(
              o(
                "PaymentsCometTransactionHubStrings",
              ).convertGenericUserFacingError(n),
            ),
            i === !0 && o("CometRelayErrorHandling").markErrorAsHandled(n));
        };
      return o(
        "PaymentsCometGetServerEncryptionKey",
      ).commitGetServerEncryptionKeyMutation(e, d, m, c);
    }
    l.getServerEncryptionKeyUnified = e;
  },
  98,
);
