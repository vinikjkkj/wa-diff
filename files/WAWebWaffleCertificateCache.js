__d(
  "WAWebWaffleCertificateCache",
  [
    "WATimeUtils",
    "WAWebAccountLinkingConstants",
    "WAWebAccountLinkingSchema",
    "WAWebModelStorageUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 3600;
    async function s() {
      try {
        var e = await o("WAWebAccountLinkingSchema")
            .getTable()
            .get(o("WAWebAccountLinkingConstants").AccountLinkKey),
          t = e == null ? void 0 : e.certEncryptionPem,
          n = e == null ? void 0 : e.certTtlSeconds,
          r = e == null ? void 0 : e.certFetchTimestamp;
        if (t != null && n != null && r != null) {
          var a,
            i,
            l = o("WATimeUtils").unixTime(),
            s = l - r;
          return s >= n
            ? null
            : {
                encryptionPem: t,
                passwordPem:
                  (a = e == null ? void 0 : e.certPasswordPem) != null
                    ? a
                    : null,
                passwordKeyId:
                  (i = e == null ? void 0 : e.certPasswordKeyId) != null
                    ? i
                    : null,
                ttlSeconds: n,
                fetchTimestampSeconds: r,
              };
        }
      } catch (e) {}
      return null;
    }
    async function u(t, n, r, a) {
      var i = a != null ? a : e;
      if (!(i <= 0)) {
        var l = Math.floor(Date.now() / 1e3);
        try {
          await o("WAWebModelStorageUtils")
            .getStorage()
            .lock(["account-linking"], async function (e) {
              var a = e[0],
                s = await a.get(
                  o("WAWebAccountLinkingConstants").AccountLinkKey,
                ),
                u = {
                  certEncryptionPem: t,
                  certPasswordPem: n != null ? n : void 0,
                  certPasswordKeyId: r != null ? r : void 0,
                  certTtlSeconds: i,
                  certFetchTimestamp: l,
                },
                c =
                  s != null
                    ? babelHelpers.extends({}, s, u)
                    : babelHelpers.extends(
                        {
                          accountLinkKey: o("WAWebAccountLinkingConstants")
                            .AccountLinkKey,
                          linkState: o("WAWebAccountLinkingConstants")
                            .AccountLinkState.Unknown,
                          linkTimestamp: 0,
                        },
                        u,
                      );
              await a.createOrReplace(c);
            });
        } catch (e) {}
      }
    }
    ((l.loadCertFromIDB = s), (l.saveCertToIDB = u));
  },
  98,
);
