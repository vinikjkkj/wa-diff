__d(
  "WAWebTeeInnerHttp",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e =
        "POST /inference HTTP/1.1\r\nHost: teellm.tee.com\r\nConnection: close\r\n",
      s = "\r\n\r\n",
      u = "\r\n";
    function c(t) {
      var n = new TextEncoder(),
        r = n.encode(e + "Content-Length: " + t.length + s),
        o = new Uint8Array(r.length + t.length);
      return (o.set(r), o.set(t, r.length), o);
    }
    function d(e) {
      var t,
        n = f(e, s, 0);
      if (n < 0) return null;
      var o = new TextDecoder().decode(e.subarray(0, n)),
        a = o.split(u),
        i = a[0],
        l = babelHelpers.arrayLikeToArray(a).slice(1),
        c = m(i),
        d = p(l),
        g = n + s.length;
      if (
        ((t = d.get("transfer-encoding")) == null
          ? void 0
          : t.toLowerCase()) === "chunked"
      ) {
        var h = _(e, g);
        return h == null ? null : { body: h, status: c };
      }
      var y = d.get("content-length");
      if (y == null)
        throw r("err")(
          "inner HTTP response has neither Content-Length nor chunked encoding",
        );
      var C = Number(y);
      if (!Number.isInteger(C) || C < 0)
        throw r("err")("inner HTTP response has an invalid Content-Length");
      return e.length < g + C ? null : { body: e.slice(g, g + C), status: c };
    }
    function m(e) {
      var t = /^HTTP\/1\.[01] (\d{3})/.exec(e);
      if (t == null) throw r("err")("inner HTTP response has no status line");
      return Number(t[1]);
    }
    function p(e) {
      var t = new Map();
      for (var n of e) {
        var r = n.indexOf(":");
        r > 0 &&
          t.set(n.slice(0, r).trim().toLowerCase(), n.slice(r + 1).trim());
      }
      return t;
    }
    function _(e, t) {
      for (var n = [], o = t; ; ) {
        var a = f(e, u, o);
        if (a < 0) return null;
        var i = new TextDecoder().decode(e.subarray(o, a)),
          l = parseInt(i.split(";")[0], 16);
        if (Number.isNaN(l))
          throw r("err")("inner HTTP response has an invalid chunk size");
        var s = a + u.length;
        if (l === 0) return g(n);
        var c = s + l;
        if (e.length < c + u.length) return null;
        if (f(e, u, c) !== c)
          throw r("err")("inner HTTP response chunk does not end with CRLF");
        (n.push(e.subarray(s, c)), (o = c + u.length));
      }
    }
    function f(e, t, n) {
      for (var r = e.length - t.length, o = n; o <= r; o++) {
        for (var a = !0, i = 0; i < t.length; i++)
          if (e[o + i] !== t.charCodeAt(i)) {
            a = !1;
            break;
          }
        if (a) return o;
      }
      return -1;
    }
    function g(e) {
      var t = e.reduce(function (e, t) {
          return e + t.length;
        }, 0),
        n = new Uint8Array(t),
        r = 0;
      for (var o of e) (n.set(o, r), (r += o.length));
      return n;
    }
    ((l.buildInferenceRequest = c), (l.parseInnerHttpResponse = d));
  },
  98,
);
