__d(
  "WABase64",
  ["WALogger", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 43,
      u = 47,
      c = 61,
      d = 45,
      m = 95,
      p = 3e3,
      _ = function (t) {
        return (
          typeof t == "string" &&
          /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
            t,
          )
        );
      };
    function f(e) {
      return h(e, s, u, !0);
    }
    function g(e, t) {
      return (t === void 0 && (t = !1), h(e, d, m, t));
    }
    function h(e, t, n, r) {
      var o =
        Array.isArray(e) || e instanceof ArrayBuffer ? new Uint8Array(e) : e;
      if (o.length <= p) return y(o, t, n, r);
      for (var a = [], i = 0; i < o.length; i += p)
        a.push(y(o.subarray(i, i + p), t, n, r));
      return a.join("");
    }
    function y(e, t, n, r) {
      for (
        var o = Math.ceil((e.length * 4) / 3),
          a = 4 * Math.ceil(e.length / 3),
          i = new Array(a),
          l = 0,
          s = 0;
        l < a;
        l += 4, s += 3
      ) {
        var u = (e[s] << 16) | (e[s + 1] << 8) | e[s + 2];
        ((i[l] = u >> 18),
          (i[l + 1] = (u >> 12) & 63),
          (i[l + 2] = (u >> 6) & 63),
          (i[l + 3] = u & 63));
      }
      for (var c = 0; c < o; c++) {
        var d = i[c];
        d < 26
          ? (i[c] = 65 + d)
          : d < 52
            ? (i[c] = 71 + d)
            : d < 62
              ? (i[c] = d - 4)
              : d === 62
                ? (i[c] = t)
                : (i[c] = n);
      }
      for (var m = o; m < a; m++) i[m] = 61;
      var p = String.fromCharCode.apply(String, i);
      return r ? p : p.substring(0, o);
    }
    function C(t, n, r, a) {
      for (
        var i = t.length, l = new Int32Array(i + (i % 4)), s = 0;
        s < i;
        s++
      ) {
        var u = t.charCodeAt(s);
        if (65 <= u && u <= 90) l[s] = u - 65;
        else if (97 <= u && u <= 122) l[s] = u - 71;
        else if (48 <= u && u <= 57) l[s] = u + 4;
        else if (u === n) l[s] = 62;
        else if (u === r) l[s] = 63;
        else if (u === a) {
          i = s;
          break;
        } else
          return (
            self.ERROR != null &&
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Found unexpected character code while decoding B64 at index ",
                    ", length ",
                    ": ",
                    "",
                  ])),
                s,
                i,
                u,
              ),
            null
          );
      }
      for (var c = l.length / 4, d = 0, m = 0; d < c; d++, m += 4)
        l[d] = (l[m] << 18) | (l[m + 1] << 12) | (l[m + 2] << 6) | l[m + 3];
      for (
        var p = Math.floor((i * 3) / 4), _ = new Uint8Array(p), f = 0, g = 0;
        g + 3 <= p;
        f++, g += 3
      ) {
        var h = l[f];
        ((_[g] = h >> 16), (_[g + 1] = (h >> 8) & 255), (_[g + 2] = h & 255));
      }
      switch (p - g) {
        case 2:
          ((_[g] = l[f] >> 16), (_[g + 1] = (l[f] >> 8) & 255));
          break;
        case 1:
          _[g] = l[f] >> 16;
      }
      return _;
    }
    function b(e) {
      var t = C(e, s, u, c);
      if (t) return t.buffer;
      throw r("err")("Base64.decode given invalid string");
    }
    function v(e, t) {
      t === void 0 && (t = !1);
      var n = C(e, d, m, t ? c : -1);
      if (n) return n.buffer;
      throw r("err")("Base64.decode given invalid string");
    }
    function S(e) {
      return Math.floor((e.length * 3) / 4);
    }
    ((l.isBase64 = _),
      (l.encodeB64 = f),
      (l.encodeB64UrlSafe = g),
      (l.decodeB64 = b),
      (l.decodeB64UrlSafe = v),
      (l.sizeWhenB64Decoded = S));
  },
  98,
);
