__d(
  "MAWKeychainUtil",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return self.crypto.getRandomValues(new Uint8Array(e));
    }
    function l(e) {
      var t = e.reduce(function (e, t) {
          return e + t.byteLength;
        }, 0),
        n = new Uint8Array(t);
      return (
        e.reduce(function (e, t) {
          return (n.set(new Uint8Array(t), e), e + t.byteLength);
        }, 0),
        n.buffer
      );
    }
    function s(e, t) {
      return new Uint8Array([e, t]).buffer;
    }
    function u(e) {
      var t = e.length;
      if (t > 0 && t % 2 === 0 && /^[\da-f]+$/gi.test(e)) {
        for (var n = [], r = 0, o = t / 2; r < o; ++r) {
          var a = parseInt(e.substring(r * 2, r * 2 + 2), 16);
          n.push(a);
        }
        return new Uint8Array(n);
      } else return null;
    }
    ((i.getBufferWithRandomValuesFromLength = e),
      (i.mergeBuffers = l),
      (i.makeAAD = s),
      (i.fromHexString = u));
  },
  66,
);
