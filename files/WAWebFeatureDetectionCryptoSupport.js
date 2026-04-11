__d(
  "WAWebFeatureDetectionCryptoSupport",
  ["Promise", "WALogger"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b = "whatsapp is da best",
      v = I(b),
      S = { name: "HMAC", hash: "SHA-256" },
      R = { name: "AES-CBC", length: 256 };
    function L() {
      return (C || (C = n("Promise"))).resolve().then(function () {
        return self.crypto.subtle || self.crypto.webkitSubtle;
      });
    }
    function E() {
      return L()
        .then(function (t) {
          return t
            .generateKey(S, !1, ["sign", "verify"])
            .then(function (n) {
              return t
                .sign(S, n, v)
                .then(function (e) {
                  return t.verify(S, n, e, v.buffer);
                })
                .catch(function (t) {
                  return (
                    o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[crypto] HMAC-SHA256 signing failed: ",
                          "",
                        ])),
                      t,
                    ),
                    !1
                  );
                })
                .then(function (e) {
                  return e
                    ? (o("WALogger").LOG(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[crypto] HMAC-SHA256 is verified",
                          ])),
                      ),
                      !0)
                    : (o("WALogger").LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[crypto] HMAC-SHA256 is not verified",
                          ])),
                      ),
                      !1);
                })
                .catch(function (e) {
                  return (
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[crypto] HMAC-SHA256 verification failed: ",
                          "",
                        ])),
                      e,
                    ),
                    !1
                  );
                });
            })
            .catch(function (e) {
              return (
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[crypto] HMAC-SHA256 key generation failed: ",
                      "",
                    ])),
                  e,
                ),
                !1
              );
            });
        })
        .catch(function (e) {
          return (
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[crypto] HMAC-SHA256: ",
                  "",
                ])),
              e,
            ),
            !1
          );
        });
    }
    function k() {
      return L()
        .then(function (e) {
          return e
            .generateKey(R, !1, ["encrypt", "decrypt"])
            .then(function (t) {
              return (C || (C = n("Promise")))
                .resolve(self.crypto)
                .then(function (e) {
                  var t = e.getRandomValues(new Uint8Array(16)),
                    n = { name: "AES-CBC", iv: t };
                  return n;
                })
                .then(function (n) {
                  return e
                    .encrypt(n, t, v)
                    .then(function (r) {
                      return e.decrypt(n, t, r);
                    })
                    .catch(function (e) {
                      return (
                        o("WALogger").LOG(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "[crypto] AES-CBC encryption failed: ",
                              "",
                            ])),
                          e,
                        ),
                        !1
                      );
                    })
                    .then(function (e) {
                      var t = new Uint8Array(e);
                      return T(t) === b
                        ? (o("WALogger").LOG(
                            _ ||
                              (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "[crypto] AES-CBC encryption/decryption is correct",
                              ])),
                          ),
                          !0)
                        : (o("WALogger").LOG(
                            f ||
                              (f = babelHelpers.taggedTemplateLiteralLoose([
                                "[crypto] AES-CBC encryption/decryption is incorrect",
                              ])),
                          ),
                          !1);
                    })
                    .catch(function (e) {
                      return (
                        o("WALogger").LOG(
                          g ||
                            (g = babelHelpers.taggedTemplateLiteralLoose([
                              "[crypto] AES-CBC decryption failed: ",
                              "",
                            ])),
                          e,
                        ),
                        !1
                      );
                    });
                });
            })
            .catch(function (e) {
              return (
                o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[crypto] AES-CBC key generation failed: ",
                      "",
                    ])),
                  e,
                ),
                !1
              );
            });
        })
        .catch(function (e) {
          return (
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[crypto] AES-CBC: ",
                  "",
                ])),
              e,
            ),
            !1
          );
        });
    }
    function I(e) {
      return new Uint8Array(
        e.split("").map(function (e) {
          return e.charCodeAt(0);
        }),
      );
    }
    function T(e) {
      var t = Array.prototype.slice.call(e);
      return t
        .map(function (e) {
          return String.fromCharCode(e);
        })
        .join("");
    }
    ((l.supportsHmacSha256 = E), (l.supportsAesCbc = k));
  },
  98,
);
