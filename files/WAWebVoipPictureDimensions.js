__d(
  "WAWebVoipPictureDimensions",
  ["WABlobToArrayBuffer", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 65536,
      s = [255, 216, 255],
      u = [137, 80, 78, 71, 13, 10, 26, 10],
      c = new Set([
        192, 193, 194, 195, 197, 198, 199, 201, 202, 203, 205, 206, 207,
      ]),
      d = new Set([216, 217, 218]),
      m = new Set([1, 208, 209, 210, 211, 212, 213, 214, 215]);
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r = yield f(e, 0),
            o = (t = (n = R(r)) != null ? n : L(r)) != null ? t : yield h(e, r);
          return o != null && o.width > 0 && o.height > 0 ? o : null;
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          return new DataView(
            yield o("WABlobToArrayBuffer").blobToArrayBuffer(t.slice(n, n + e)),
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return x(t, 0, s) ? C(e, t, 0, 2) : null;
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n, r) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            for (var o = r; o + 9 <= t.byteLength; ) {
              var a = t.getUint8(o + 1);
              if (!v(t, o)) o += 1;
              else {
                if (c.has(a))
                  return {
                    height: t.getUint16(o + 5),
                    width: t.getUint16(o + 7),
                  };
                if (d.has(a)) return null;
                o += S(t, o, a);
              }
            }
            var i = n + o;
            return o > r && i + 9 <= e.size ? C(e, yield f(e, i), i, 0) : null;
          },
        )),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      var n = e.getUint8(t + 1);
      return e.getUint8(t) === 255 && n !== 255 && n !== 0;
    }
    function S(e, t, n) {
      return m.has(n) ? 2 : 2 + e.getUint16(t + 2);
    }
    function R(e) {
      return x(e, 0, u) && e.byteLength >= 24 && D(e, 12) === "IHDR"
        ? { height: e.getUint32(20), width: e.getUint32(16) }
        : null;
    }
    function L(e) {
      return e.byteLength < 16 || D(e, 0) !== "RIFF" || D(e, 8) !== "WEBP"
        ? null
        : (function (t) {
            return t === "VP8 "
              ? E(e)
              : t === "VP8L"
                ? k(e)
                : t === "VP8X"
                  ? I(e)
                  : null;
          })(D(e, 12));
    }
    function E(e) {
      return e.byteLength >= 30 && x(e, 23, [157, 1, 42])
        ? {
            height: e.getUint16(28, !0) % 16384,
            width: e.getUint16(26, !0) % 16384,
          }
        : null;
    }
    function k(e) {
      if (e.byteLength < 25 || e.getUint8(20) !== 47) return null;
      var t = e.getUint32(21, !0);
      return {
        height: (Math.floor(t / 16384) % 16384) + 1,
        width: (t % 16384) + 1,
      };
    }
    function I(e) {
      return e.byteLength >= 30
        ? { height: T(e, 27) + 1, width: T(e, 24) + 1 }
        : null;
    }
    function T(e, t) {
      return e.getUint16(t, !0) + e.getUint8(t + 2) * 65536;
    }
    function D(e, t) {
      return String.fromCharCode(
        e.getUint8(t),
        e.getUint8(t + 1),
        e.getUint8(t + 2),
        e.getUint8(t + 3),
      );
    }
    function x(e, t, n) {
      return (
        t + n.length <= e.byteLength &&
        n.every(function (n, r) {
          return e.getUint8(t + r) === n;
        })
      );
    }
    l.readPictureDimensions = p;
  },
  98,
);
