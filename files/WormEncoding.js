__d(
  "WormEncoding",
  ["msgpack-msgpack"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = new (o("msgpack-msgpack").ExtensionCodec)(),
        t = 0;
      e.register({
        decode: function (t) {
          var e = o("msgpack-msgpack").decode(t);
          return e.buffer.slice(e.byteOffset, e.byteLength + e.byteOffset);
        },
        encode: function (t) {
          if (t instanceof ArrayBuffer)
            return o("msgpack-msgpack").encode(new Uint8Array(t));
        },
        type: t,
      });
      var n = 1;
      e.register({
        decode: function (t) {
          var e = o("msgpack-msgpack").decode(t);
          return new Uint8Array(
            e.buffer.slice(e.byteOffset, e.byteLength + e.byteOffset),
          );
        },
        encode: function (t) {
          if (t instanceof Uint8Array) return o("msgpack-msgpack").encode(t);
        },
        type: n,
      });
      var r = 2;
      e.register({
        decode: function (t) {
          var e = o("msgpack-msgpack").decode(t);
          return BigInt(e);
        },
        encode: function (t) {
          if (typeof t == "bigint")
            return o("msgpack-msgpack").encode(String(t));
        },
        type: r,
      });
      var a = 3;
      return (
        e.register({
          decode: function (t) {
            var e = o("msgpack-msgpack").decode(t);
            return new Set(e);
          },
          encode: function (t) {
            if (t instanceof Set)
              return o("msgpack-msgpack").encode(Array.from(t));
          },
          type: a,
        }),
        {
          decode: function (n) {
            return o("msgpack-msgpack").decode(n, { extensionCodec: e });
          },
          encode: function (n) {
            return o("msgpack-msgpack").encode(n, {
              extensionCodec: e,
              ignoreUndefined: !0,
            });
          },
        }
      );
    }
    l.createEncoding = e;
  },
  98,
);
