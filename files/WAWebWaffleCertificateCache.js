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
            l,
            s,
            u = o("WATimeUtils").unixTime(),
            c = u - r;
          return c >= n
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
                payloadKeyId:
                  (l = e == null ? void 0 : e.certPayloadKeyId) != null
                    ? l
                    : null,
                passwordIsOaep:
                  (s = e == null ? void 0 : e.certPasswordIsOaep) != null
                    ? s
                    : !1,
                ttlSeconds: n,
                fetchTimestampSeconds: r,
              };
        }
      } catch (e) {}
      return null;
    }
    async function u(e) {
      var t = e.encryptionPem,
        n = e.passwordIsOaep,
        r = e.passwordKeyId,
        a = e.passwordPem,
        i = e.passwordTtlSeconds,
        l = e.payloadKeyId,
        s = e.ttlSeconds,
        u = d(s, a == null ? null : i);
      if (!(u <= 0)) {
        var c = Math.floor(Date.now() / 1e3);
        try {
          await o("WAWebModelStorageUtils")
            .getStorage()
            .lock(["account-linking"], async function (e) {
              var i = e[0],
                s = await i.get(
                  o("WAWebAccountLinkingConstants").AccountLinkKey,
                ),
                d = {
                  certEncryptionPem: t,
                  certPasswordPem: a != null ? a : void 0,
                  certPasswordKeyId: r != null ? r : void 0,
                  certPayloadKeyId: l != null ? l : void 0,
                  certPasswordIsOaep: n,
                  certTtlSeconds: u,
                  certFetchTimestamp: c,
                },
                m =
                  s != null
                    ? babelHelpers.extends({}, s, d)
                    : babelHelpers.extends(
                        {
                          accountLinkKey: o("WAWebAccountLinkingConstants")
                            .AccountLinkKey,
                          linkState: o("WAWebAccountLinkingConstants")
                            .AccountLinkState.Unknown,
                          linkTimestamp: 0,
                        },
                        d,
                      );
              await i.createOrReplace(m);
            });
        } catch (e) {}
      }
    }
    async function c() {
      try {
        await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["account-linking"], async function (e) {
            var t = e[0],
              n = await t.get(o("WAWebAccountLinkingConstants").AccountLinkKey);
            n == null ||
              n.certFetchTimestamp == null ||
              (await t.createOrReplace(
                babelHelpers.extends({}, n, { certFetchTimestamp: void 0 }),
              ));
          });
      } catch (e) {}
    }
    function d(t, n) {
      var r = t != null ? t : e;
      return n == null || n <= 0 ? r : Math.min(r, n);
    }
    ((l.loadCertFromIDB = s),
      (l.saveCertToIDB = u),
      (l.invalidateCertInIDB = c));
  },
  98,
);
