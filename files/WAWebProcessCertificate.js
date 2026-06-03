__d(
  "WAWebProcessCertificate",
  [
    "WALogger",
    "WAVerifyChainCertificateWA6",
    "WAWebDbEncryptionKey",
    "WAWebUserPrefsInfoStore",
    "WAWebUserPrefsScreenLock",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.certificate,
            a = t.isRegistered,
            i = t.serverStatic;
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[socket] processCertificate start",
                ])),
            )
            .tags("handshake");
          var l = o("WAVerifyChainCertificateWA6").verifyChainCertificateWA6(
            n,
            i,
          );
          if (
            (o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[socket] processCertificate finished with success: ",
                    "",
                  ])),
                l.success,
              )
              .tags("handshake"),
            !l.success)
          )
            throw r("err")("[socket] processCertificate error: " + l.error);
          if (a && !o("WAWebUserPrefsScreenLock").getScreenLockEnabled()) {
            var m = l.value,
              p = m.intermediate,
              _ = m.leaf;
            _ &&
              p &&
              (o("WALogger")
                .LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[socket] persisting cert chain start",
                    ])),
                )
                .tags("handshake"),
              o("WAWebDbEncryptionKey")
                .DbEncKeyStore.waitForInit()
                .then(function () {
                  o("WAWebUserPrefsInfoStore")
                    .waNoiseInfo.setCertificateChain({
                      intermediate: {
                        key: p.key,
                        notAfter: Number(p.notAfter),
                        notBefore: Number(p.notBefore),
                      },
                      leaf: {
                        key: _.key,
                        notAfter: Number(_.notAfter),
                        notBefore: Number(_.notBefore),
                      },
                    })
                    .then(function () {
                      o("WALogger")
                        .LOG(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "[socket] persisting cert chain finished",
                            ])),
                        )
                        .tags("handshake");
                    })
                    .catch(function (e) {
                      o("WALogger")
                        .ERROR(
                          d ||
                            (d = babelHelpers.taggedTemplateLiteralLoose([
                              "[socket] processCertificate: failed to set cert chain: ",
                              "",
                            ])),
                          e,
                        )
                        .sendLogs("handhshake-set-cert-chain", {
                          sampling: 0.01,
                        });
                    });
                }));
          }
        })),
        p.apply(this, arguments)
      );
    }
    l.verifyAndProcessCertificate = m;
  },
  98,
);
