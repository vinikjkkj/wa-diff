__d(
  "WASmaxMixins",
  ["WAArrayBufferUtils", "WAWapJid"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "smax$any";
    function s(e, t) {
      return (
        c(e, t),
        d(e, t),
        t.content instanceof Uint8Array
          ? p(e, t.content)
          : t.content != null && _(e, t.content),
        e
      );
    }
    function u(e, t, n, r) {
      return n != null ? e(t, n, r) : t;
    }
    function c(t, n) {
      var r = t.tag,
        o = n.tag;
      if (o !== e && r !== o)
        throw new Error("tag mismatch: " + r + " != " + o);
    }
    function d(e, t) {
      var n = e.attrs,
        r = t.attrs;
      Object.keys(r).forEach(function (e) {
        var t = r[e],
          o = n[e];
        if (t != null && o != null) {
          if (m(t, o)) return;
          throw new Error("conflict for key: " + e);
        }
        n[e] = t;
      });
    }
    function m(e, t) {
      return typeof e == "string" && typeof t == "string"
        ? e === t
        : e instanceof o("WAWapJid").WapJid && t instanceof o("WAWapJid").WapJid
          ? e.toString() === t.toString()
          : !1;
    }
    function p(e, t) {
      var n = e.content;
      if (n instanceof Uint8Array) {
        if (!o("WAArrayBufferUtils").uint8ArraysEqualUNSAFE(n, t))
          throw new Error("elementValue mismatch: bytes dose not equal");
        return;
      }
      if (n != null)
        throw new Error("elementValue mismatch: destination has children");
      e.content = t;
    }
    function _(e, t) {
      var n = e.content;
      if (n instanceof Uint8Array)
        throw new Error("children mismatch: destination has element value");
      if (n == null || n.length === 0) {
        e.content = t;
        return;
      }
      if (!f(n, t))
        throw new Error("children mismatch: child counts are not compatible");
      var r = [],
        o = Array.from(n);
      (t.forEach(function (e) {
        var t = o.findIndex(function (t) {
          return t.tag === e.tag;
        });
        if (t === -1) r.push(e);
        else {
          var n = o.splice(t, 1),
            a = s(n[0], e);
          r.push(a);
        }
      }),
        o.forEach(function (e) {
          return r.push(e);
        }),
        (e.content = r));
    }
    function f(e, t) {
      for (
        var n = g(t), r = g(e), o = Object.keys(n), a = 0;
        a < o.length;
        a++
      ) {
        var i = o[a],
          l = n[i],
          s = r[i];
        if (l != null && s != null && l !== s) return !1;
      }
      return !0;
    }
    function g(e) {
      return e.reduce(function (e, t) {
        var n = t.tag,
          r = e[n];
        return ((e[n] = r == null ? 1 : r + 1), e);
      }, {});
    }
    ((l.mergeStanzas = s), (l.optionalMerge = u));
  },
  98,
);
