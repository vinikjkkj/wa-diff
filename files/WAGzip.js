__d(
  "WAGzip",
  ["Promise", "err", "fflate"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.$GzipWrapper$p_2 = []),
            (n.ondata = function (e, t) {
              if ((n.$GzipWrapper$p_2.push(e), !!t)) {
                var r = 0;
                n.$GzipWrapper$p_2.forEach(function (e) {
                  r += e.length;
                });
                var o = new Uint8Array(r),
                  a = 0;
                (n.$GzipWrapper$p_2.forEach(function (e) {
                  (o.set(e, a), (a += e.length));
                }),
                  (n.$GzipWrapper$p_1 = o));
              }
            }),
            n
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.push = function (n, a) {
            if (this.$GzipWrapper$p_1 != null)
              throw r("err")(
                "Tried to push chunk to compressor after final block",
              );
            n instanceof Uint8Array
              ? e.prototype.push.call(this, n, a)
              : n instanceof ArrayBuffer
                ? e.prototype.push.call(this, new Uint8Array(n), a)
                : e.prototype.push.call(this, o("fflate").strToU8(n), a);
          }),
          (n.result = function () {
            if (this.$GzipWrapper$p_1 == null)
              throw r("err")(
                "Tried to access result before adding final block",
              );
            return this.$GzipWrapper$p_1;
          }),
          t
        );
      })(o("fflate").Gzip);
    function u(e) {
      return (e === void 0 && (e = {}), new s(e));
    }
    function c(e) {
      return o("fflate").decompressSync(e);
    }
    function d(t) {
      return (e || (e = n("Promise"))).resolve(c(t));
    }
    ((l.GzipWrapper = s),
      (l.createDeflate = u),
      (l.inflate = c),
      (l.gzipInflate = d));
  },
  98,
);
