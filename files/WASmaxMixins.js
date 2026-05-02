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
      if (o !== e && r !== o) {
        var a = new Error("tag mismatch: " + r + " != " + o);
        throw (a.stack, a);
      }
    }
    function d(e, t) {
      var n = e.attrs,
        r = t.attrs;
      Object.keys(r).forEach(function (e) {
        var t = r[e],
          o = n[e];
        if (t != null && o != null) {
          if (m(t, o)) return;
          var a = new Error("conflict for key: " + e);
          throw (a.stack, a);
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
        if (!o("WAArrayBufferUtils").uint8ArraysEqualUNSAFE(n, t)) {
          var r = new Error("elementValue mismatch: bytes dose not equal");
          throw (r.stack, r);
        }
        return;
      }
      if (n != null) {
        var a = new Error("elementValue mismatch: destination has children");
        throw (a.stack, a);
      }
      e.content = t;
    }
    function _(e, t) {
      var n = e.content;
      if (n instanceof Uint8Array) {
        var r = new Error("children mismatch: destination has element value");
        throw (r.stack, r);
      }
      if (n == null || n.length === 0) {
        e.content = t;
        return;
      }
      if (!f(n, t)) {
        var o = new Error("children mismatch: child counts are not compatible");
        throw (o.stack, o);
      }
      var a = [],
        i = Array.from(n);
      (t.forEach(function (e) {
        var t = i.findIndex(function (t) {
          return t.tag === e.tag;
        });
        if (t === -1) a.push(e);
        else {
          var n = i.splice(t, 1),
            r = s(n[0], e);
          a.push(r);
        }
      }),
        i.forEach(function (e) {
          return a.push(e);
        }),
        (e.content = a));
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
