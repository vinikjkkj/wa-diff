__d(
  "WAWebWaffleCertificateCache",
  [
    "WATimeUtils",
    "WAWebAccountLinkingConstants",
    "WAWebAccountLinkingSchema",
    "WAWebModelStorageUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 3600;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o("WAWebAccountLinkingSchema")
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
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.encryptionPem,
            r = e.passwordIsOaep,
            a = e.passwordKeyId,
            i = e.passwordPem,
            l = e.passwordTtlSeconds,
            s = e.payloadKeyId,
            u = e.ttlSeconds,
            c = m(u, i == null ? null : l);
          if (!(c <= 0)) {
            var d = Math.floor(Date.now() / 1e3);
            try {
              yield o("WAWebModelStorageUtils")
                .getStorage()
                .lock(
                  ["account-linking"],
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var n = e[0],
                          l = yield n.get(
                            o("WAWebAccountLinkingConstants").AccountLinkKey,
                          ),
                          u = {
                            certEncryptionPem: t,
                            certPasswordPem: i != null ? i : void 0,
                            certPasswordKeyId: a != null ? a : void 0,
                            certPayloadKeyId: s != null ? s : void 0,
                            certPasswordIsOaep: r,
                            certTtlSeconds: c,
                            certFetchTimestamp: d,
                          },
                          m =
                            l != null
                              ? babelHelpers.extends({}, l, u)
                              : babelHelpers.extends(
                                  {
                                    accountLinkKey: o(
                                      "WAWebAccountLinkingConstants",
                                    ).AccountLinkKey,
                                    linkState: o("WAWebAccountLinkingConstants")
                                      .AccountLinkState.Unknown,
                                    linkTimestamp: 0,
                                  },
                                  u,
                                );
                        yield n.createOrReplace(m);
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                );
            } catch (e) {}
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(t, n) {
      var r = t != null ? t : e;
      return n == null || n <= 0 ? r : Math.min(r, n);
    }
    ((l.loadCertFromIDB = s), (l.saveCertToIDB = c));
  },
  98,
);
