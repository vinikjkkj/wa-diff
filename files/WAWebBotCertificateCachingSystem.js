__d(
  "WAWebBotCertificateCachingSystem",
  [
    "WAHex",
    "WALruCache",
    "WAWebBotCertificateRevocationService",
    "WAWebCertificateUtils",
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
    async function u(e) {
      var t = e.atTimeMs,
        n = e.chainBytes,
        r = e.rootCertVersion,
        a = await p(n, r),
        i = s.get(a);
      if (i == null || !_(i.chainBytes, n)) return null;
      if (t < i.notBeforeMs || t > i.notAfterMs) return (s.delete(a), null);
      for (var l of i.serialNumbers)
        if (
          o("WAWebBotCertificateRevocationService").isCertificateRevoked(l, t)
        )
          return (s.delete(a), null);
      return i.publicKey;
    }
    async function c(e) {
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
        var _ = o("WAWebCertificateUtils").getCertificateSerialNumber(c);
        _ != null && i.push(_);
      }
      var f = await p(n, a);
      s.put(f, {
        publicKey: r,
        chainBytes: n,
        notBeforeMs: u,
        notAfterMs: l,
        serialNumbers: i,
      });
    }
    function d() {
      return s.getCurrentSize();
    }
    function m() {
      s.clear();
    }
    async function p(e, t) {
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
      var d = await crypto.subtle.digest("SHA-256", i);
      return o("WAHex").toLowerCaseHex(new Uint8Array(d));
    }
    function _(e, t) {
      if (e.length !== t.length) return !1;
      for (var n = 0; n < e.length; n++) {
        if (e[n].length !== t[n].length) return !1;
        for (var r = 0; r < e[n].length; r++)
          if (e[n][r] !== t[n][r]) return !1;
      }
      return !0;
    }
    ((l.getCachedLeafPublicKey = u),
      (l.cacheLeafPublicKey = c),
      (l.getLeafCertificateCacheSize = d),
      (l.clearLeafCertificateCache = m));
  },
  98,
);
