__d(
  "WAWebRSAPkcs1v15",
  ["asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      for (var t = e.replace(/-/g, "+").replace(/_/g, "/"); t.length % 4; )
        t += "=";
      for (
        var n = atob(t), r = new Uint8Array(n.length), o = 0;
        o < n.length;
        o++
      )
        r[o] = n.charCodeAt(o);
      return r;
    }
    function s(e, t) {
      for (var n = Math.max(e.length, t.length), r = 0; r < n; r++) {
        var o = r < n - e.length ? 0 : e[r - (n - e.length)],
          a = r < n - t.length ? 0 : t[r - (n - t.length)];
        if (o !== a) return o < a ? -1 : 1;
      }
      return 0;
    }
    function u(e) {
      for (var t = 0; t < e.length; t++) if (e[t] !== 0) return !1;
      return !0;
    }
    function c(e) {
      for (var t = new Uint8Array(e.length), n = 0, r = 0; r < e.length; r++) {
        var o = e[r] % 2;
        ((t[r] = Math.floor(e[r] / 2) + n * 128), (n = o));
      }
      return t;
    }
    function d(e, t) {
      for (
        var n = Math.max(e.length, t.length),
          r = new Uint8Array(n),
          o = 0,
          a = 0;
        a < n;
        a++
      ) {
        var i = e.length - 1 - a,
          l = t.length - 1 - a,
          s = i >= 0 ? e[i] : 0,
          u = l >= 0 ? t[l] : 0,
          c = s - u - o;
        c < 0
          ? ((r[n - 1 - a] = c + 256), (o = 1))
          : ((r[n - 1 - a] = c), (o = 0));
      }
      return r;
    }
    function m(e, t) {
      for (
        var n = e.length + t.length, r = new Uint8Array(n), o = e.length - 1;
        o >= 0;
        o--
      ) {
        for (var a = 0, i = t.length - 1; i >= 0; i--) {
          var l = n - 1 - (e.length - 1 - o) - (t.length - 1 - i),
            s = e[o] * t[i] + r[l] + a;
          ((r[l] = s % 256), (a = Math.floor(s / 256)));
        }
        var u = n - 1 - (e.length - 1 - o) - t.length;
        u >= 0 && (r[u] += a);
      }
      return r;
    }
    function p(e, t) {
      for (var n = _(e), r = _(t); s(n, r) >= 0; ) {
        var o = n.length - r.length,
          a = new Uint8Array(r.length + o);
        (a.set(r, 0),
          s(a, n) > 0 && ((a = new Uint8Array(r.length + o - 1)), a.set(r, 0)));
        var i = n.length > 1 ? n[0] * 256 + n[1] : n[0] * 256,
          l = a[0] + 1,
          u = Math.floor(i / l);
        u === 0 && (u = 1);
        var c = new Uint8Array([Math.floor(u / 256) % 256, u % 256]),
          p = m(_(c), a);
        for (p = _(p); s(p, n) > 0; ) {
          u--;
          var f = new Uint8Array([Math.floor(u / 256) % 256, u % 256]);
          ((p = m(_(f), a)), (p = _(p)));
        }
        n = _(d(n, p));
      }
      return n;
    }
    function _(e) {
      for (var t = 0; t < e.length - 1 && e[t] === 0; ) t++;
      return t === 0 ? e : e.slice(t);
    }
    function f(e, t, n) {
      for (
        var r = new Uint8Array([1]), o = p(e, n), a = new Uint8Array(t);
        !u(a);
      )
        (a[a.length - 1] % 2 && (r = p(m(r, o), n)),
          (a = c(a)),
          (o = p(m(o, o), n)));
      return r;
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var o = yield self.crypto.subtle.exportKey("jwk", t);
          if (o.n == null || o.e == null)
            throw r("err")("Invalid RSA public key: missing n or e");
          var a = e(o.n),
            i = e(o.e),
            l = a.length,
            s = n.length;
          if (s > l - 11)
            throw r("err")("Message too long for RSA PKCS1v1.5 encryption");
          var u = l - s - 3,
            c = new Uint8Array(u);
          self.crypto.getRandomValues(c);
          for (var d = 0; d < u; d++)
            for (; c[d] === 0; )
              c[d] = self.crypto.getRandomValues(new Uint8Array(1))[0];
          var m = new Uint8Array(l);
          ((m[0] = 0),
            (m[1] = 2),
            m.set(c, 2),
            (m[2 + u] = 0),
            m.set(n, 3 + u));
          var p = f(m, i, a),
            _ = new Uint8Array(l);
          return (_.set(p, l - p.length), _);
        })),
        h.apply(this, arguments)
      );
    }
    l.rsaPkcs1v15Encrypt = g;
  },
  98,
);
