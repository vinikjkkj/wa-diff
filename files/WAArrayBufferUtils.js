__d(
  "WAArrayBufferUtils",
  ["Promise", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t = new ArrayBuffer(e.length),
        n = new Uint8Array(t),
        r,
        o;
      for (r = 0, o = e.length; r < o; r++) n[r] = e.charCodeAt(r);
      return n.buffer;
    }
    function u(t, r) {
      return (
        r === void 0 && (r = 5e5),
        new (e || (e = n("Promise")))(function (e, n) {
          var o = t.length,
            a = new ArrayBuffer(o),
            i = new Uint8Array(a),
            l = 0;
          setTimeout(s, 0);
          function s() {
            for (var n = Math.min(l + r, o); l < n; )
              ((i[l] = t.charCodeAt(l)), l++);
            if (l === o) {
              e(a);
              return;
            }
            setTimeout(s, 16);
          }
        })
      );
    }
    function c(e) {
      return String.fromCharCode.apply(null, new Uint8Array(e));
    }
    var d = 8388607;
    function m(e, t) {
      var n = new Uint8Array(e);
      if (t > d) throw r("err")("Divisor is too big");
      for (var o = 0, a = 0; a < n.length; ++a) o = ((o << 8) + n[a]) % t;
      return o;
    }
    function p(e) {
      var t = e.map(function (e) {
          return new Uint8Array(e);
        }),
        n = t.reduce(function (e, t) {
          return e + t.byteLength;
        }, 0),
        r = new Uint8Array(n);
      return (
        t.reduce(function (e, t) {
          return (r.set(t, e), e + t.byteLength);
        }, 0),
        r.buffer.slice(r.byteOffset, r.byteOffset + r.byteLength)
      );
    }
    function _(e, t) {
      var n = new Uint8Array(e),
        r = new Uint8Array(t);
      return f(n, r);
    }
    function f(e, t) {
      if (e.byteLength !== t.byteLength) return !1;
      for (var n = 0; n !== e.byteLength; n++) if (e[n] !== t[n]) return !1;
      return !0;
    }
    ((l.stringToArrayBuffer = s),
      (l.largeStringToArrayBuffer = u),
      (l.arrayBufferToString = c),
      (l.arrayBufferMod = m),
      (l.concatBuffers = p),
      (l.arrayBuffersEqualUNSAFE = _),
      (l.uint8ArraysEqualUNSAFE = f));
  },
  98,
);
