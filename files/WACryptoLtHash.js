__d(
  "WACryptoLtHash",
  ["WACryptoHkdf"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 2,
      s = 128,
      u = new ArrayBuffer(s),
      c = (function () {
        function t(e) {
          this.salt = e;
        }
        var n = t.prototype;
        return (
          (n.add = function (t, n) {
            var e = this;
            return n.reduce(async function (t, n) {
              return e.$1(await t, n);
            }, Promise.resolve(t));
          }),
          (n.subtract = function (t, n) {
            var e = this;
            return n.reduce(async function (t, n) {
              return e.$2(await t, n);
            }, Promise.resolve(t));
          }),
          (n.subtractThenAdd = async function (t, n, r) {
            var e = await this.subtract(t, r),
              o = await this.add(e, n);
            return { ltHash: o, subtractResult: e };
          }),
          (n.$1 = async function (t, n) {
            var e = await o("WACryptoHkdf").extractAndExpand(n, this.salt, s);
            return this.performPointwiseWithOverflow(t, e, function (e, t) {
              return e + t;
            });
          }),
          (n.$2 = async function (t, n) {
            var e = await o("WACryptoHkdf").extractAndExpand(n, this.salt, s);
            return this.performPointwiseWithOverflow(t, e, function (e, t) {
              return e - t;
            });
          }),
          (n.performPointwiseWithOverflow = function (n, r, o) {
            for (
              var t = new DataView(n),
                a = new DataView(r),
                i = new ArrayBuffer(t.byteLength),
                l = new DataView(i),
                s = 0;
              s < t.byteLength;
              s += e
            )
              l.setUint16(s, o(t.getUint16(s, !0), a.getUint16(s, !0)), !0);
            return i;
          }),
          t
        );
      })(),
      d = new c("WhatsApp Patch Integrity");
    ((l.KEY_LENGTH_BYTES = s),
      (l.EMPTY_LT_HASH = u),
      (l.LtHash16 = c),
      (l.LT_HASH_ANTI_TAMPERING = d));
  },
  98,
);
