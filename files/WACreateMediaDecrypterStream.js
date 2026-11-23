__d(
  "WACreateMediaDecrypterStream",
  ["WABinary", "WAMediaCrypto", "WAResultOrError", "WATagsLogger", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = o("WATagsLogger").TAGS(["WADecryptStream"]);
    function f(t, n, r, a, i, l) {
      if (a.byteLength === 0)
        return (
          _.ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "expectedHmacs must have at least one element",
              ])),
          ),
          o("WAResultOrError").makeError("missing-expected-hmacs")
        );
      if (a.byteLength !== i.length * o("WAMediaCrypto").HMAC_LENGTH)
        return (
          _.ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "expectedHmacs and ciphertextLengths must have the same length",
              ])),
          ),
          o("WAResultOrError").makeError("hmac-chiphertext-array-mismatch")
        );
      var m = g(a),
        p = n,
        f = new (o("WABinary").Binary)(),
        y = 0,
        C = !1,
        b = !1,
        v = function () {
          C || ((C = !0), l == null || l.onStart());
        },
        S = function () {
          C && !b && ((b = !0), l == null || l.onEnd());
        },
        R = async function (n, a) {
          for (f.writeByteArray(n); y < m.length && f.size() >= i[y]; y++) {
            var e = f.readByteArrayView(i[y]);
            _.DEV(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Processing scan ",
                  " of size ",
                  "",
                ])),
              y,
              e.length,
            );
            var l = y === i.length - 1;
            try {
              v();
              var s = await o("WAMediaCrypto").hmacAndDecryptPartial(
                  t,
                  p,
                  e,
                  r,
                  m[y],
                ),
                d = s.nextIv,
                g = s.plaintext;
              (l ? a.enqueue(h(g)) : a.enqueue(g), (p = d), l && S());
            } catch (e) {
              (S(),
                _.ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "Unable to decrypt chunk. isLastChunk: ",
                      " error: ",
                      "",
                    ])),
                  l,
                  e,
                ),
                e instanceof o("WAMediaCrypto").HmacValidationError
                  ? a.error("enc-hash-mismatch")
                  : a.error("decryption-error"));
            }
          }
        },
        L = new TransformStream({
          transform: function (t, n) {
            var e = t;
            return R(e, n);
          },
          flush: function (t) {
            (S(),
              f.size() > 0 &&
                _.ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "Unexpected ciphertext in buffer following flush",
                    ])),
                ));
          },
        });
      return o("WAResultOrError").makeResult(L);
    }
    function g(e) {
      var t = [];
      if (e.byteLength % o("WAMediaCrypto").HMAC_LENGTH !== 0)
        throw r("err")("Sidecar length is not a multiple of hmac length");
      for (var n = 0; n < e.byteLength; n += o("WAMediaCrypto").HMAC_LENGTH) {
        var a = new Uint8Array(e, n, o("WAMediaCrypto").HMAC_LENGTH);
        t.push(a);
      }
      return t;
    }
    function h(e) {
      if (e.length < o("WAMediaCrypto").CBC_BLOCK_SIZE)
        return (
          _.ERROR(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "Plaintext size is less than CBC_BLOCK_SIZE",
              ])),
          ),
          e
        );
      var t = e[e.length - 1];
      return t === 0 || t > o("WAMediaCrypto").CBC_BLOCK_SIZE
        ? (_.ERROR(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "Invalid PKCS padding length",
              ])),
          ),
          e)
        : e.subarray(0, -t);
    }
    l.createDefaultDecryptStream = f;
  },
  98,
);
