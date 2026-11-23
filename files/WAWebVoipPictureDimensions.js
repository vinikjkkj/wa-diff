__d(
  "WAWebVoipPictureDimensions",
  ["WABlobToArrayBuffer"],
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
    async function p(e) {
      var t,
        n,
        r = await _(e, 0),
        o = (t = (n = C(r)) != null ? n : b(r)) != null ? t : await f(e, r);
      return o != null && o.width > 0 && o.height > 0 ? o : null;
    }
    async function _(t, n) {
      return new DataView(
        await o("WABlobToArrayBuffer").blobToArrayBuffer(t.slice(n, n + e)),
      );
    }
    async function f(e, t) {
      return k(t, 0, s) ? g(e, t, 0, 2) : null;
    }
    async function g(e, t, n, r) {
      for (var o = r; o + 9 <= t.byteLength; ) {
        var a = t.getUint8(o + 1);
        if (!h(t, o)) o += 1;
        else {
          if (c.has(a))
            return { height: t.getUint16(o + 5), width: t.getUint16(o + 7) };
          if (d.has(a)) return null;
          o += y(t, o, a);
        }
      }
      var i = n + o;
      return o > r && i + 9 <= e.size ? g(e, await _(e, i), i, 0) : null;
    }
    function h(e, t) {
      var n = e.getUint8(t + 1);
      return e.getUint8(t) === 255 && n !== 255 && n !== 0;
    }
    function y(e, t, n) {
      return m.has(n) ? 2 : 2 + e.getUint16(t + 2);
    }
    function C(e) {
      return k(e, 0, u) && e.byteLength >= 24 && E(e, 12) === "IHDR"
        ? { height: e.getUint32(20), width: e.getUint32(16) }
        : null;
    }
    function b(e) {
      return e.byteLength < 16 || E(e, 0) !== "RIFF" || E(e, 8) !== "WEBP"
        ? null
        : (function (t) {
            return t === "VP8 "
              ? v(e)
              : t === "VP8L"
                ? S(e)
                : t === "VP8X"
                  ? R(e)
                  : null;
          })(E(e, 12));
    }
    function v(e) {
      return e.byteLength >= 30 && k(e, 23, [157, 1, 42])
        ? {
            height: e.getUint16(28, !0) % 16384,
            width: e.getUint16(26, !0) % 16384,
          }
        : null;
    }
    function S(e) {
      if (e.byteLength < 25 || e.getUint8(20) !== 47) return null;
      var t = e.getUint32(21, !0);
      return {
        height: (Math.floor(t / 16384) % 16384) + 1,
        width: (t % 16384) + 1,
      };
    }
    function R(e) {
      return e.byteLength >= 30
        ? { height: L(e, 27) + 1, width: L(e, 24) + 1 }
        : null;
    }
    function L(e, t) {
      return e.getUint16(t, !0) + e.getUint8(t + 2) * 65536;
    }
    function E(e, t) {
      return String.fromCharCode(
        e.getUint8(t),
        e.getUint8(t + 1),
        e.getUint8(t + 2),
        e.getUint8(t + 3),
      );
    }
    function k(e, t, n) {
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
