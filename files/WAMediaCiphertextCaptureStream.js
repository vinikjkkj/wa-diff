__d(
  "WAMediaCiphertextCaptureStream",
  ["WAResolvable", "WATypedArraysConcat"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = [],
        n = 0,
        r = new (o("WAResolvable").Resolvable)(),
        a = new (o("WAResolvable").Resolvable)();
      function i() {
        return o("WATypedArraysConcat").concatTypedArrays(Uint8Array, t).buffer;
      }
      function l(e) {
        (a.isSettled || a.resolve(null), r.resolve(e));
      }
      var s = new TransformStream({
        cancel: function () {
          l(null);
        },
        flush: function () {
          l(i());
        },
        transform: function (o, l) {
          var r = o;
          (t.push(r.slice()),
            (n += r.byteLength),
            !a.isSettled && n >= e && a.resolve(i().slice(0, e)),
            l.enqueue(r));
        },
      });
      return { ciphertext: r.promise, prefix: a.promise, stream: s };
    }
    l.makeMediaCiphertextCaptureStream = e;
  },
  98,
);
