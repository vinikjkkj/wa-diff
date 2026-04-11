__d(
  "WAWebDirectConnectionCypher",
  [
    "$InternalEnum",
    "WAArrayBufferUtils",
    "WALogger",
    "WAWebDirectConnectionX509",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum").Mirrored(["PhoneNumberAndPostcode", "Postcode"]);
    function u(e) {
      return e;
    }
    function c(e) {
      return e;
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o("WAWebDirectConnectionX509").getEngine(),
            a = r.subtle;
          return a.encrypt(
            {
              name: "AES-GCM",
              iv: new Uint8Array(
                o("WAWebDirectConnectionX509").base64ToArrayBuffer(t),
              ),
              tagLength: 128,
            },
            e,
            o("WAWebDirectConnectionX509").stringToArrayBuffer(n),
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o("WAWebDirectConnectionX509").getEngine(),
            a = r.subtle,
            i = yield a.importKey("raw", e, { name: "AES-GCM" }, !1, [
              "decrypt",
            ]);
          return a.decrypt(
            {
              name: "AES-GCM",
              iv: new Uint8Array(
                o("WAWebDirectConnectionX509").base64ToArrayBuffer(n),
              ),
              tagLength: 128,
            },
            i,
            o("WAWebDirectConnectionX509").base64ToArrayBuffer(t),
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return o("WAArrayBufferUtils").arrayBufferToString(yield p(e, t, n));
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = o("WAWebDirectConnectionX509").arrayBufferToBase64(
            yield o("WAWebDirectConnectionX509").getRandomValues(
              new Uint8Array(16),
            ),
          );
          try {
            var i = yield o("WAWebDirectConnectionX509").getEngine(),
              l = i.subtle,
              s = yield l.generateKey({ name: "AES-GCM", length: 256 }, !0, [
                "encrypt",
              ]),
              u = o("WAWebDirectConnectionX509").arrayBufferToBase64(
                yield d(s, a, JSON.stringify(n)),
              ),
              c = yield l.exportKey("raw", s),
              m = yield o("WAWebDirectConnectionX509").encryptWithPublicKey(
                t,
                c,
              );
            return {
              cypher: "AesKey=" + m + ";IV=" + a + ";Data=" + u,
              exportedAesKey: c,
              iv: a,
            };
          } catch (t) {
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[direct-connection] cypher creation failed with ",
                    "",
                  ])),
                r("getErrorSafe")(t).toString(),
              ),
              null
            );
          }
        })),
        y.apply(this, arguments)
      );
    }
    ((l.CypherType = s),
      (l.stringToCypherString = u),
      (l.cypherStringToString = c),
      (l.decryptDataWithSymmetricKey = p),
      (l.decryptDataWithSymmetricKeyToString = f),
      (l.genCypher = h));
  },
  98,
);
