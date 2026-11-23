__d(
  "WAWebX509Utils",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WATypedArraysEqual",
    "WAWebCertificateString",
    "WAWebCertificateUtils",
    "filterNulls",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = "-----BEGIN CERTIFICATE-----",
      m = "-----END CERTIFICATE-----",
      p =
        "(?:" +
        d +
        `)((?:.|
)*?)(?:` +
        m +
        ")",
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
    async function C(e, t, n) {
      var r = await o("WAWebCertificateUtils").getPkiJs(),
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
    }
    function b(e, t) {
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
    async function v() {
      var e = await r("JSResourceForInteraction")(
          "WAWebDirectConnectionCaBundle",
        )
          .__setRef("WAWebX509Utils")
          .load(),
        t = e.CA_BUNDLE;
      return S(t);
    }
    async function S(e) {
      var t = await o("WAWebCertificateUtils").getPkiJs(),
        n = t.Certificate,
        a = await o("WAWebCertificateUtils").getAsn1FromBER();
      return r("filterNulls")(
        Array.from(e.matchAll(new RegExp(p, "gm")), function (e) {
          var t = e[0],
            i = e[1],
            l = a(f(i)),
            s = l.result,
            c;
          try {
            c = s.error != null && s.error !== "" ? null : new n({ schema: s });
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
    }
    async function R(e, t, n) {
      return (await C(e, t, n)).verify();
    }
    async function L(e, t) {
      var n = await C(e, t),
        r = b(
          await Promise.all(
            e.map(function (e) {
              return n.findIssuer(e, n);
            }),
          ),
          t,
        );
      if (r.length === 0) {
        var a = E(e[0]);
        return (
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
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
    function E(e) {
      var t;
      return (t = e.issuer.typesAndValues.find(function (e) {
        var t = e.type;
        return t === _;
      })) == null
        ? void 0
        : t.value.valueBlock.value;
    }
    function k(e) {
      return o("WAWebCertificateString").stringToCertificateString(
        e.map(function (e) {
          var t = g(e.toSchema(!0).toBER(!1))
            .split(/(.{0,64})/g)
            .filter(function (e) {
              return e !== "";
            }).join(`
`);
          return (
            d +
            `
` +
            t +
            `
` +
            m
          );
        }).join(`
`),
      );
    }
    async function I() {
      var e = await o("WAWebCertificateUtils").getPkiJs(),
        t = e.getEngine;
      return t();
    }
    async function T(e) {
      var t = await o("WAWebCertificateUtils").getPkiJs(),
        n = t.getRandomValues;
      return n(e);
    }
    async function D(e, t) {
      var n = await e.getPublicKey({
          algorithm: {
            algorithm: { name: "RSA-OAEP", hash: { name: "SHA-256" } },
            usages: ["encrypt"],
          },
        }),
        r = await I(),
        o = await r.subtle.encrypt({ name: "RSA-OAEP" }, n, t);
      return g(o);
    }
    ((l.base64ToArrayBuffer = f),
      (l.arrayBufferToBase64 = g),
      (l.stringToArrayBuffer = h),
      (l.arrayBufferToString = y),
      (l.fetchFromCABundle = v),
      (l.extractCertificates = S),
      (l.validateCertificates = R),
      (l.genRootIssuers = L),
      (l.encodeToString = k),
      (l.getEngine = I),
      (l.getRandomValues = T),
      (l.encryptWithPublicKey = D));
  },
  98,
);
