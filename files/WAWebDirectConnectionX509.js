__d(
  "WAWebDirectConnectionX509",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebCertificateUtils",
    "WAWebDirectConnectionUtils",
    "filterNulls",
    "getErrorSafe",
    "pvutils-1.0.17",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = "-----BEGIN CERTIFICATE-----",
      d = "-----END CERTIFICATE-----",
      m =
        "(?:" +
        c +
        `)((?:.|
)*?)(?:` +
        d +
        ")",
      p = "2.5.4.3";
    function _(t) {
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
      return g(n);
    }
    function f(e) {
      return btoa(h(e));
    }
    function g(e) {
      for (var t = e.length, n = new Uint8Array(t), r = 0; r < t; r++)
        n[r] = e.charCodeAt(r);
      return n.buffer;
    }
    function h(e) {
      return String.fromCharCode.apply(String, Array.from(new Uint8Array(e)));
    }
    async function y(e, t) {
      var n = await o("WAWebCertificateUtils").getPkiJs(),
        r = n.CertificateChainValidationEngine;
      return new r({ trustedCerts: t, certs: e });
    }
    function C(e, t) {
      return e.flat().reduce(function (e, n) {
        return e.every(function (e) {
          return !o("pvutils-1.0.17").isEqualBuffer(e.tbs, n.tbs);
        }) && t.includes(n)
          ? [].concat(e, [n])
          : e;
      }, []);
    }
    async function b() {
      var e = await r("JSResourceForInteraction")(
          "WAWebDirectConnectionCaBundle",
        )
          .__setRef("WAWebDirectConnectionX509")
          .load(),
        t = e.CA_BUNDLE;
      return v(t);
    }
    async function v(e) {
      var t = await o("WAWebCertificateUtils").getPkiJs(),
        n = t.Certificate,
        a = await o("WAWebCertificateUtils").getAsn1FromBER();
      return r("filterNulls")(
        Array.from(e.matchAll(new RegExp(m, "gm")), function (e) {
          var t = e[0],
            i = e[1],
            l = a(_(i)),
            u = l.result,
            c;
          try {
            c = u.error != null && u.error !== "" ? null : new n({ schema: u });
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
    }
    async function S(e, t) {
      return (await y(e, t)).verify();
    }
    async function R(e, t) {
      var n = await y(e, t),
        r = C(
          await Promise.all(
            e.map(function (e) {
              return n.findIssuer(e, n);
            }),
          ),
          t,
        );
      if (r.length === 0) {
        var a = L(e[0]);
        return (
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[direct-connection] no trusted root certs for ",
                "",
              ])),
            a,
          ),
          null
        );
      }
      return r;
    }
    function L(e) {
      var t;
      return (t = e.issuer.typesAndValues.find(function (e) {
        var t = e.type;
        return t === p;
      })) == null
        ? void 0
        : t.value.valueBlock.value;
    }
    function E(e) {
      return o("WAWebDirectConnectionUtils").stringToCertificateString(
        e.map(function (e) {
          var t = f(e.toSchema(!0).toBER(!1))
            .split(/(.{0,64})/g)
            .filter(function (e) {
              return e !== "";
            }).join(`
`);
          return (
            c +
            `
` +
            t +
            `
` +
            d
          );
        }).join(`
`),
      );
    }
    async function k() {
      var e = await o("WAWebCertificateUtils").getPkiJs(),
        t = e.getEngine;
      return t();
    }
    async function I(e) {
      var t = await o("WAWebCertificateUtils").getPkiJs(),
        n = t.getRandomValues;
      return n(e);
    }
    async function T(e, t) {
      var n = await e.getPublicKey({
          algorithm: {
            algorithm: { name: "RSA-OAEP", hash: { name: "SHA-256" } },
            usages: ["encrypt"],
          },
        }),
        r = await k(),
        o = await r.subtle.encrypt({ name: "RSA-OAEP" }, n, t);
      return f(o);
    }
    ((l.base64ToArrayBuffer = _),
      (l.arrayBufferToBase64 = f),
      (l.stringToArrayBuffer = g),
      (l.arrayBufferToString = h),
      (l.fetchFromCABundle = b),
      (l.extractCertificates = v),
      (l.validateCertificates = S),
      (l.genRootIssuers = R),
      (l.encodeToString = E),
      (l.getEngine = k),
      (l.getRandomValues = I),
      (l.encryptWithPublicKey = T));
  },
  98,
);
