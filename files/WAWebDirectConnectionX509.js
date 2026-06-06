__d(
  "WAWebDirectConnectionX509",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebCertificateUtils",
    "WAWebDirectConnectionUtils",
    "asyncToGeneratorRuntime",
    "filterNulls",
    "getErrorSafe",
    "pvutils-1.0.17",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = "-----BEGIN CERTIFICATE-----",
      m = "-----END CERTIFICATE-----",
      p = "(?:" + d + ")((?:.|\n)*?)(?:" + m + ")",
      _ = "2.5.4.3";
    function f(t) {
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
      return h(n);
    }
    function g(e) {
      return btoa(y(e));
    }
    function h(e) {
      for (var t = e.length, n = new Uint8Array(t), r = 0; r < t; r++)
        n[r] = e.charCodeAt(r);
      return n.buffer;
    }
    function y(e) {
      return String.fromCharCode.apply(String, Array.from(new Uint8Array(e)));
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebCertificateUtils").getPkiJs(),
            r = n.CertificateChainValidationEngine;
          return new r({ trustedCerts: t, certs: e });
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return e.flat().reduce(function (e, n) {
        return e.every(function (e) {
          return !o("pvutils-1.0.17").isEqualBuffer(e.tbs, n.tbs);
        }) && t.includes(n)
          ? [].concat(e, [n])
          : e;
      }, []);
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
              "WAWebDirectConnectionCaBundle",
            )
              .__setRef("WAWebDirectConnectionX509")
              .load(),
            t = e.CA_BUNDLE;
          return L(t);
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebCertificateUtils").getPkiJs(),
            n = t.Certificate,
            a = yield o("WAWebCertificateUtils").getAsn1FromBER();
          return r("filterNulls")(
            Array.from(e.matchAll(new RegExp(p, "gm")), function (e) {
              var t = e[0],
                i = e[1],
                l = a(f(i)),
                u = l.result,
                c;
              try {
                c =
                  u.error != null && u.error !== ""
                    ? null
                    : new n({ schema: u });
              } catch (e) {
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
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
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return (yield C(e, t)).verify();
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = yield C(e, t),
            a = v(
              yield (c || (c = n("Promise"))).all(
                e.map(function (e) {
                  return r.findIssuer(e, r);
                }),
              ),
              t,
            );
          if (a.length === 0) {
            var i = x(e[0]);
            return (
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
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
        D.apply(this, arguments)
      );
    }
    function x(e) {
      var t;
      return (t = e.issuer.typesAndValues.find(function (e) {
        var t = e.type;
        return t === _;
      })) == null
        ? void 0
        : t.value.valueBlock.value;
    }
    function $(e) {
      return o("WAWebDirectConnectionUtils").stringToCertificateString(
        e
          .map(function (e) {
            var t = g(e.toSchema(!0).toBER(!1))
              .split(/(.{0,64})/g)
              .filter(function (e) {
                return e !== "";
              })
              .join("\n");
            return d + "\n" + t + "\n" + m;
          })
          .join("\n"),
      );
    }
    function P() {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebCertificateUtils").getPkiJs(),
            t = e.getEngine;
          return t();
        })),
        N.apply(this, arguments)
      );
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebCertificateUtils").getPkiJs(),
            n = t.getRandomValues;
          return n(e);
        })),
        w.apply(this, arguments)
      );
    }
    function A(e, t) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e.getPublicKey({
              algorithm: {
                algorithm: { name: "RSA-OAEP", hash: { name: "SHA-256" } },
                usages: ["encrypt"],
              },
            }),
            r = yield P(),
            o = yield r.subtle.encrypt({ name: "RSA-OAEP" }, n, t);
          return g(o);
        })),
        F.apply(this, arguments)
      );
    }
    ((l.base64ToArrayBuffer = f),
      (l.arrayBufferToBase64 = g),
      (l.stringToArrayBuffer = h),
      (l.arrayBufferToString = y),
      (l.fetchFromCABundle = S),
      (l.extractCertificates = L),
      (l.validateCertificates = k),
      (l.genRootIssuers = T),
      (l.encodeToString = $),
      (l.getEngine = P),
      (l.getRandomValues = M),
      (l.encryptWithPublicKey = A));
  },
  98,
);
