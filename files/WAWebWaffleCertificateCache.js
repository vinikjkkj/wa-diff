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
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t, n, r) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i) {
            var l = i != null ? i : e;
            if (!(l <= 0)) {
              var s = Math.floor(Date.now() / 1e3);
              try {
                yield o("WAWebModelStorageUtils")
                  .getStorage()
                  .lock(
                    ["account-linking"],
                    (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e) {
                          var n = e[0],
                            i = yield n.get(
                              o("WAWebAccountLinkingConstants").AccountLinkKey,
                            ),
                            u = {
                              certEncryptionPem: t,
                              certPasswordPem: r != null ? r : void 0,
                              certPasswordKeyId: a != null ? a : void 0,
                              certTtlSeconds: l,
                              certFetchTimestamp: s,
                            },
                            c =
                              i != null
                                ? babelHelpers.extends({}, i, u)
                                : babelHelpers.extends(
                                    {
                                      accountLinkKey: o(
                                        "WAWebAccountLinkingConstants",
                                      ).AccountLinkKey,
                                      linkState: o(
                                        "WAWebAccountLinkingConstants",
                                      ).AccountLinkState.Unknown,
                                      linkTimestamp: 0,
                                    },
                                    u,
                                  );
                          yield n.createOrReplace(c);
                        },
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  );
              } catch (e) {}
            }
          },
        )),
        d.apply(this, arguments)
      );
    }
    ((l.loadCertFromIDB = s),
      (l.saveCertToIDB = c),
      (l.DEFAULT_TTL_SECONDS = e));
  },
  98,
);
