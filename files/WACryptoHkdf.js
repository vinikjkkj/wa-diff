__d(
  "WACryptoHkdf",
  ["Promise", "WABinary", "WACryptoHmac", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 255 * o("WACryptoHmac").SHA256_BYTE_LENGTH;
    function u(t, a, i) {
      if (i < 0 || i > s)
        return (e || (e = n("Promise"))).reject(
          r("err")("HKDF::expand given bad length " + i),
        );
      for (
        var l,
          u = Math.ceil(i / o("WACryptoHmac").SHA256_BYTE_LENGTH),
          c = o("WABinary").Binary.build(a).readByteArrayView(),
          d = new (o("WABinary").Binary)(),
          m = o("WACryptoHmac")
            .encodeKeySha256(t)
            .then(function (e) {
              return ((l = e), new Uint8Array(0));
            }),
          p = function (t) {
            m = m
              .then(function (e) {
                return o("WACryptoHmac").sign(
                  l,
                  o("WABinary").Binary.build(e, c, t).readByteArrayView(),
                );
              })
              .then(function (e) {
                var t = new Uint8Array(e);
                return (d.writeByteArray(t), t);
              });
          },
          _ = 1;
        _ <= u;
        _++
      )
        p(_);
      return m.then(function () {
        return d.readBuffer(i);
      });
    }
    function c(e, t, n) {
      return o("WACryptoHmac")
        .extractSha256(null, e)
        .then(function (e) {
          return u(new Uint8Array(e), t, n);
        });
    }
    function d(e, t, n, r) {
      return o("WACryptoHmac")
        .extractSha256(t, e)
        .then(function (e) {
          return u(new Uint8Array(e), n, r);
        });
    }
    ((l.expand = u),
      (l.extractAndExpand = c),
      (l.extractWithSaltAndExpand = d));
  },
  98,
);
