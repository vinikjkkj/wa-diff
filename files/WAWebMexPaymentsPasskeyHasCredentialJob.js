__d(
  "WAWebMexPaymentsPasskeyHasCredentialJob",
  [
    "WAWebMexClient",
    "WAWebMexPaymentsPasskeyHasCredentialJobQuery.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t,
            r,
            a =
              e !== void 0
                ? e
                : (e = n(
                    "WAWebMexPaymentsPasskeyHasCredentialJobQuery.graphql",
                  )),
            i = yield o("WAWebMexClient").fetchQuery(a, {});
          return (t =
            (r = i.xwa2_payments_passkey_has_credential) == null
              ? void 0
              : r.has_passkey) != null
            ? t
            : !1;
        })),
        u.apply(this, arguments)
      );
    }
    l.mexPaymentsPasskeyHasCredential = s;
  },
  98,
);
