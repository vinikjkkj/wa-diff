__d(
  "EncryptedImgUtils",
  ["DeadCodeDetector"],
  function (t, n, r, o, a, i, l) {
    var e = "ek",
      s = /^data\:/,
      u = /\?(ek\=|.*&ek\=)/,
      c = !1;
    function d() {
      c ||
        ((c = !0),
        o("DeadCodeDetector").isThisDead("EncryptedImgUtils:isEncryptedTrue"));
    }
    function m(t) {
      var n = t.getQueryData(),
        r = n[e];
      return (delete n[e], t.setQueryData(n), r);
    }
    function p(e) {
      return !s.test(e) && u.test(e) ? (d(), !0) : !1;
    }
    ((l.extractKey = m), (l.isEncrypted = p));
  },
  98,
);
