__d(
  "WAWebDirectConnectionX509",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebDirectConnectionUtils",
    "asyncToGeneratorRuntime",
    "filterNulls",
    "getErrorSafe",
    "pvutils-1.0.17",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = r("requireDeferred")("asn1js-2.1.1").__setRef(
        "WAWebDirectConnectionX509",
      ),
      m = "-----BEGIN CERTIFICATE-----",
      p = "-----END CERTIFICATE-----",
      _ = "(?:" + m + ")((?:.|\n)*?)(?:" + p + ")",
      f = "2.5.4.3";
    function g() {
      return r("JSResourceForInteraction")("pkijs")
        .__setRef("WAWebDirectConnectionX509")
        .load();
    }
    function h(t) {
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
      return C(n);
    }
    function y(e) {
      return btoa(b(e));
    }
    function C(e) {
      for (var t = e.length, n = new Uint8Array(t), r = 0; r < t; r++)
        n[r] = e.charCodeAt(r);
      return n.buffer;
    }
    function b(e) {
      return String.fromCharCode.apply(String, Array.from(new Uint8Array(e)));
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield g(),
            r = n.CertificateChainValidationEngine;
          return new r({ trustedCerts: t, certs: e });
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return e.flat().reduce(function (e, n) {
        return e.every(function (e) {
          return !o("pvutils-1.0.17").isEqualBuffer(e.tbs, n.tbs);
        }) && t.includes(n)
          ? [].concat(e, [n])
          : e;
      }, []);
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
              "WAWebDirectConnectionCaBundle",
            )
              .__setRef("WAWebDirectConnectionX509")
              .load(),
            t = e.CA_BUNDLE;
          return k(t);
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield g(),
            a = t.Certificate,
            i = yield new (c || (c = n("Promise")))(function (e) {
              d.onReady(function (t) {
                e(t().fromBER);
              });
            });
          return r("filterNulls")(
            Array.from(e.matchAll(new RegExp(_, "gm")), function (e) {
              var t = e[0],
                n = e[1],
                l = i(h(n)),
                u = l.result,
                c;
              try {
                c = u.error ? null : new a({ schema: u });
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
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return (yield v(e, t)).verify();
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = yield v(e, t),
            a = R(
              yield (c || (c = n("Promise"))).all(
                e.map(function (e) {
                  return r.findIssuer(e, r);
                }),
              ),
              t,
            );
          if (a.length === 0) {
            var i = P(e[0]);
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
        $.apply(this, arguments)
      );
    }
    function P(e) {
      var t;
      return (t = e.issuer.typesAndValues.find(function (e) {
        var t = e.type;
        return t === f;
      })) == null
        ? void 0
        : t.value.valueBlock.value;
    }
    function N(e) {
      return o("WAWebDirectConnectionUtils").stringToCertificateString(
        e
          .map(function (e) {
            var t = y(e.toSchema(!0).toBER(!1))
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
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield g(),
            t = e.getEngine;
          return t();
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield g(),
            n = t.getRandomValues;
          return n(e);
        })),
        F.apply(this, arguments)
      );
    }
    function O(e, t) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e.getPublicKey({
              algorithm: {
                algorithm: { name: "RSA-OAEP", hash: { name: "SHA-256" } },
                usages: ["encrypt"],
              },
            }),
            r = yield M(),
            o = yield r.subtle.encrypt({ name: "RSA-OAEP" }, n, t);
          return y(o);
        })),
        B.apply(this, arguments)
      );
    }
    ((l.base64ToArrayBuffer = h),
      (l.arrayBufferToBase64 = y),
      (l.stringToArrayBuffer = C),
      (l.arrayBufferToString = b),
      (l.fetchFromCABundle = L),
      (l.extractCertificates = k),
      (l.validateCertificates = T),
      (l.genRootIssuers = x),
      (l.encodeToString = N),
      (l.getEngine = M),
      (l.getRandomValues = A),
      (l.encryptWithPublicKey = O));
  },
  98,
);
