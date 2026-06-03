__d(
  "WAWebBotCertificateCachingSystem",
  [
    "WAHex",
    "WALruCache",
    "WAWebBotCertificateRevocationService",
    "WAWebCertificateUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 50,
      s = new (o("WALruCache").LruCache)({
        sizeLimit: e,
        getSize: function () {
          return 1;
        },
        shouldEvict: function (t, n) {
          return Date.now() > n.notAfterMs;
        },
      });
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.atTimeMs,
            n = e.chainBytes,
            r = e.rootCertVersion,
            a = yield f(n, r),
            i = s.get(a);
          if (i == null || !h(i.chainBytes, n)) return null;
          if (t < i.notBeforeMs || t > i.notAfterMs) return (s.delete(a), null);
          for (var l of i.serialNumbers)
            if (
              o("WAWebBotCertificateRevocationService").isCertificateRevoked(
                l,
                t,
              )
            )
              return (s.delete(a), null);
          return i.publicKey;
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.certificates,
            n = e.chainBytes,
            r = e.publicKey,
            a = e.rootCertVersion,
            i = [],
            l = 1 / 0,
            u = 0;
          for (var c of t) {
            var d = new Date(c.notAfter.value).getTime(),
              m = new Date(c.notBefore.value).getTime();
            if (!Number.isFinite(d) || !Number.isFinite(m)) return;
            (d < l && (l = d), m > u && (u = m));
            var p = o("WAWebCertificateUtils").getCertificateSerialNumber(c);
            p != null && i.push(p);
          }
          var _ = yield f(n, a);
          s.put(_, {
            publicKey: r,
            chainBytes: n,
            notBeforeMs: u,
            notAfterMs: l,
            serialNumbers: i,
          });
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return s.getCurrentSize();
    }
    function _() {
      s.clear();
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new TextEncoder().encode(t),
            r = n.length + 4;
          for (var a of e) r += 4 + a.length;
          var i = new Uint8Array(r),
            l = 0,
            s = new DataView(new ArrayBuffer(4));
          (s.setUint32(0, n.length),
            i.set(new Uint8Array(s.buffer), l),
            (l += 4),
            i.set(n, l),
            (l += n.length));
          for (var u of e) {
            var c = new DataView(new ArrayBuffer(4));
            (c.setUint32(0, u.length),
              i.set(new Uint8Array(c.buffer), l),
              (l += 4),
              i.set(u, l),
              (l += u.length));
          }
          var d = yield crypto.subtle.digest("SHA-256", i);
          return o("WAHex").toLowerCaseHex(new Uint8Array(d));
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      if (e.length !== t.length) return !1;
      for (var n = 0; n < e.length; n++) {
        if (e[n].length !== t[n].length) return !1;
        for (var r = 0; r < e[n].length; r++)
          if (e[n][r] !== t[n][r]) return !1;
      }
      return !0;
    }
    ((l.getCachedLeafPublicKey = u),
      (l.cacheLeafPublicKey = d),
      (l.getLeafCertificateCacheSize = p),
      (l.clearLeafCertificateCache = _));
  },
  98,
);
