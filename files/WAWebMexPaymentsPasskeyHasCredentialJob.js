__d(
  "WAWebMexPaymentsPasskeyHasCredentialJob",
  ["WAWebMexClient", "WAWebMexPaymentsPasskeyHasCredentialJobQuery.graphql"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      var t,
        r,
        a =
          e !== void 0
            ? e
            : (e = n("WAWebMexPaymentsPasskeyHasCredentialJobQuery.graphql")),
        i = await o("WAWebMexClient").fetchQuery(a, {});
      return (t =
        (r = i.xwa2_payments_passkey_has_credential) == null
          ? void 0
          : r.has_passkey) != null
        ? t
        : !1;
    }
    l.mexPaymentsPasskeyHasCredential = s;
  },
  98,
);
