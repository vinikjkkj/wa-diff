__d(
  "WAWebX509Utils",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WATypedArraysEqual",
    "WAWebCertificateString",
    "WAWebCertificateUtils",
    "asyncToGeneratorRuntime",
    "filterNulls",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = "-----BEGIN CERTIFICATE-----",
      p = "-----END CERTIFICATE-----",
      _ = "(?:" + m + ")((?:.|\n)*?)(?:" + p + ")",
      f = "2.5.4.3";
    function g(t) {
      var n = "";
      try {
        n = atob(t);
      } catch (t) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[direct-connection] base64 decoding failed with ",
              "",
            ])),
          r("getErrorSafe")(t).toString(),
        );
      }
      return y(n);
    }
    function h(e) {
      return btoa(C(e));
    }
    function y(e) {
      for (var t = e.length, n = new Uint8Array(t), r = 0; r < t; r++)
        n[r] = e.charCodeAt(r);
      return n.buffer;
    }
    function C(e) {
      return String.fromCharCode.apply(String, Array.from(new Uint8Array(e)));
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o("WAWebCertificateUtils").getPkiJs(),
            a = r.CertificateChainValidationEngine,
            i = new Date(),
            l = new a({ trustedCerts: t, certs: e, checkDate: i });
          try {
            n == null || n(i.getTime());
          } catch (e) {
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[direct-connection] Certificate validation observer failed",
                ])),
            );
          }
          return l;
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return e.flat().reduce(function (e, n) {
        return e.every(function (e) {
          return !r("WATypedArraysEqual")(
            new Uint8Array(e.tbs),
            new Uint8Array(n.tbs),
          );
        }) && t.includes(n)
          ? [].concat(e, [n])
          : e;
      }, []);
    }
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
              "WAWebDirectConnectionCaBundle",
            )
              .__setRef("WAWebX509Utils")
              .load(),
            t = e.CA_BUNDLE;
          return E(t);
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebCertificateUtils").getPkiJs(),
            n = t.Certificate,
            a = yield o("WAWebCertificateUtils").getAsn1FromBER();
          return r("filterNulls")(
            Array.from(e.matchAll(new RegExp(_, "gm")), function (e) {
              var t = e[0],
                i = e[1],
                l = a(g(i)),
                s = l.result,
                c;
              try {
                c =
                  s.error != null && s.error !== ""
                    ? null
                    : new n({ schema: s });
              } catch (e) {
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[direct-connection] cert chain parse failed ",
                      "",
                    ])),
                  r("getErrorSafe")(e).toString(),
                );
              }
              return c;
            }),
          );
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t, n) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return (yield b(e, t, n)).verify();
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = yield b(e, t),
            a = S(
              yield (d || (d = n("Promise"))).all(
                e.map(function (e) {
                  return r.findIssuer(e, r);
                }),
              ),
              t,
            );
          if (a.length === 0) {
            var i = $(e[0]);
            return (
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[direct-connection] no trusted root certs for ",
                    "",
                  ])),
                i,
              ),
              null
            );
          }
          return a;
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      var t;
      return (t = e.issuer.typesAndValues.find(function (e) {
        var t = e.type;
        return t === f;
      })) == null
        ? void 0
        : t.value.valueBlock.value;
    }
    function P(e) {
      return o("WAWebCertificateString").stringToCertificateString(
        e
          .map(function (e) {
            var t = h(e.toSchema(!0).toBER(!1))
              .split(/(.{0,64})/g)
              .filter(function (e) {
                return e !== "";
              })
              .join("\n");
            return m + "\n" + t + "\n" + p;
          })
          .join("\n"),
      );
    }
    function N() {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebCertificateUtils").getPkiJs(),
            t = e.getEngine;
          return t();
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebCertificateUtils").getPkiJs(),
            n = t.getRandomValues;
          return n(e);
        })),
        A.apply(this, arguments)
      );
    }
    function F(e, t) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e.getPublicKey({
              algorithm: {
                algorithm: { name: "RSA-OAEP", hash: { name: "SHA-256" } },
                usages: ["encrypt"],
              },
            }),
            r = yield N(),
            o = yield r.subtle.encrypt({ name: "RSA-OAEP" }, n, t);
          return h(o);
        })),
        O.apply(this, arguments)
      );
    }
    ((l.base64ToArrayBuffer = g),
      (l.arrayBufferToBase64 = h),
      (l.stringToArrayBuffer = y),
      (l.arrayBufferToString = C),
      (l.fetchFromCABundle = R),
      (l.extractCertificates = E),
      (l.validateCertificates = I),
      (l.genRootIssuers = D),
      (l.encodeToString = P),
      (l.getEngine = N),
      (l.getRandomValues = w),
      (l.encryptWithPublicKey = F));
  },
  98,
);
