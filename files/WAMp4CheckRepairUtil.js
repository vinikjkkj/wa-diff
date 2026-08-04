__d(
  "WAMp4CheckRepairUtil",
  ["WAMedia.compiled"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = {},
      s = 0,
      u = 1e3,
      c = 9,
      d = 223,
      m = !0,
      p = (function () {
        function e(e) {
          (e === void 0 && (e = null),
            (this.blob = e),
            (this.type = e ? e.type : void 0),
            (this.buffer = null),
            (this.parts = null),
            (this.size = e ? e.size : 0),
            (this.$1 = 0));
        }
        var t = e.prototype;
        return (
          (t.toBlob = function () {
            var e = this.buffer,
              t = this.parts;
            if (
              ((this.buffer = null),
              (this.parts = null),
              this.blob && this.type === this.blob.type)
            )
              return this.blob;
            var n = this.type != null ? { type: this.type } : void 0;
            return this.blob
              ? (this.blob = new Blob([this.blob], n))
              : e
                ? (this.blob = new Blob([e], n))
                : t
                  ? (this.blob = new Blob(t, n))
                  : new Blob([], n);
          }),
          (t.read = function (t, r, o) {
            if (((this.$1 += r), this.parts)) {
              for (
                var e = this.parts, a = -1, i = 0, l = 0, s = 0;
                a === -1 && l < e.length;
                l++
              ) {
                var c = s + e[l].length;
                (c > t && ((a = l), (i = t - s)), (s = c));
              }
              if (a === -1) return 0;
              var d = e[a];
              if (i + r <= d.length) {
                var m = d.subarray(i, i + r);
                return (n("WAMedia.compiled").HEAPU8.set(m, o), r);
              }
              var p = d.subarray(i, d.length);
              n("WAMedia.compiled").HEAPU8.set(p, o);
              for (
                var f = r - p.length, g = o + p.length, h = a + 1;
                f && h < e.length;
                h++
              ) {
                var y = e[h];
                y.length >= f
                  ? (n("WAMedia.compiled").HEAPU8.set(y.subarray(0, f), g),
                    (f = 0))
                  : (n("WAMedia.compiled").HEAPU8.set(y, g),
                    (g += y.length),
                    (f -= y.length));
              }
              return r - f;
            } else {
              if (this.blob && !this.buffer)
                if (this.$1 <= u) {
                  var C = _(
                    this.blob.slice
                      ? this.blob.slice(t, t + r)
                      : this.blob.webkitSlice(t, t + r),
                  );
                  return (n("WAMedia.compiled").HEAPU8.set(C, o), C.length);
                } else this.buffer = _(this.blob);
              if (!this.buffer) return 0;
              var b = this.buffer.subarray(t, t + r);
              return (n("WAMedia.compiled").HEAPU8.set(b, o), b.length);
            }
          }),
          (t.write = function (t, r, o) {
            if (r === 0) return 0;
            var e = n("WAMedia.compiled").HEAPU8,
              a = o + r;
            (!this.buffer &&
              !this.parts &&
              (this.blob
                ? (this.buffer = _(this.blob))
                : ((this.buffer = new Uint8Array(r)), (this.size = r))),
              (this.blob = null));
            var i = this.buffer;
            if (
              (i &&
                t + r > i.length &&
                ((this.buffer = null), (this.parts = [i])),
              this.buffer)
            ) {
              for (var l = this.buffer, s = t, u = o; u < a; s++, u++)
                l[s] = e[u];
              return r;
            } else {
              var c = this.parts;
              if (t === this.size)
                return (
                  (this.size += r),
                  c.push(new Uint8Array(e.subarray(o, o + r))),
                  r
                );
              for (var d = o, m = 0, p = 0; d < a && m < c.length; m++) {
                var f = c[m],
                  g = p + f.length;
                if (g > t)
                  for (
                    var h = t > p ? t - p : 0;
                    d < a && h < f.length;
                    h++, d++
                  )
                    f[h] = e[d];
                p = g;
              }
              return (
                d < a &&
                  ((this.size += a - d),
                  c.push(new Uint8Array(e.subarray(d, a)))),
                r
              );
            }
          }),
          e
        );
      })();
    function _(e) {
      return new Uint8Array(new self.FileReaderSync().readAsArrayBuffer(e));
    }
    function f(t) {
      var n = t.split("/"),
        r = h(l[e[t]]),
        o = n[n.length - 1] + ".prefos";
      return { file: r, name: o };
    }
    function g() {
      return "/blobs/" + ++s + ".bin";
    }
    function h(e) {
      var t;
      e.buffer
        ? (t = [e.buffer])
        : e.parts
          ? (t = e.parts)
          : e.blob
            ? (t = [_(e.blob)])
            : (t = []);
      for (var n = [], r = [], o = 0; o < t.length && t[o].length === 0; ) o++;
      for (var a = 0, i = 0, l = []; o < t.length; ) {
        var s = t[o],
          u = s[a];
        if (
          (u === d
            ? i++
            : i >= c
              ? (r.push(new Uint8Array(l).buffer),
                n.push(i),
                (l = [u]),
                (i = 0))
              : (y(l, i, d), (i = 0), l.push(u)),
          ++a >= s.length)
        ) {
          a = 0;
          do o++;
          while (o < t.length && t[o].length === 0);
        }
      }
      i >= c
        ? (r.push(new Uint8Array(l).buffer), n.push(i))
        : (y(l, i, d),
          l.length > 0 && (r.push(new Uint8Array(l).buffer), i.push(0)));
      var p = new ArrayBuffer(4 + 8 * r.length),
        f = new DataView(p);
      f.setUint32(0, p.byteLength - 4, m);
      for (var g = 0; g < r.length; g++) {
        var h = 4 + 8 * g;
        (f.setUint32(h, r[g].byteLength, m), f.setUint32(h + 4, n[g], m));
      }
      return new Blob(
        [
          new Uint8Array(
            "joe".split("").map(function (e) {
              return e.charCodeAt(0);
            }),
          ).buffer,
          new Uint8Array([1]).buffer,
          p,
        ].concat(r),
      );
    }
    function y(e, t, n) {
      for (var r = 0; r < t; r++) e.push(n);
    }
    function C(e) {
      if (typeof e == "number") return n("WAMedia.compiled")._malloc(e);
      if (typeof e == "string") {
        if (!/^[\x01-\x7F]*$/.test(e)) {
          var t = new Error("cannot malloc non-c-string " + e);
          throw (t.stack, t);
        }
        for (
          var r = n("WAMedia.compiled")._malloc(e.length + 1),
            o = n("WAMedia.compiled").HEAPU8,
            a = 0;
          a < e.length;
          a++
        )
          o[r + a] = e.charCodeAt(a);
        return ((o[r + e.length] = 0), r);
      } else {
        var i = new Uint8Array(e instanceof ArrayBuffer ? e : e.buffer),
          l = n("WAMedia.compiled")._malloc(i.length);
        return (n("WAMedia.compiled").HEAPU8.set(i, l), l);
      }
    }
    function b(e) {
      for (var t = [], r = n("WAMedia.compiled").HEAPU8; r[e]; e++)
        t.push(r[e]);
      return String.fromCharCode.apply(String, t);
    }
    function v(e, t) {
      var r = {};
      try {
        for (var o in e) r[o] = C(e[o]);
        return t(r);
      } finally {
        for (var a in r) n("WAMedia.compiled")._free(r[a]);
      }
    }
    ((i.namesToDesc = e),
      (i.descToFakeFiles = l),
      (i.FakeFile = p),
      (i.compressByFilename = f),
      (i.uniqFilename = g),
      (i.retrieveString = b),
      (i.raii = v));
  },
  66,
);
