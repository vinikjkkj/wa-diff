__d(
  "CompactSerializer",
  ["TCompactProtocol", "TNoOpWriteBuffer", "TReadBuffer", "TWriteBuffer"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      try {
        return s(e, t);
      } catch (e) {
        n != null && n(e);
      }
      return null;
    }
    function s(e, t) {
      var n = new (r("TReadBuffer"))(e),
        o = new (r("TCompactProtocol"))(n);
      return t(o);
    }
    function u(e, t, n, r) {
      n === void 0 && (n = !1);
      try {
        return c(e, t, n);
      } catch (e) {
        r != null && r(e);
      }
      return null;
    }
    function c(e, t, n) {
      n === void 0 && (n = !1);
      var o;
      if (n) {
        var a = new (r("TNoOpWriteBuffer"))(),
          i = new (r("TCompactProtocol"))(a);
        (t(e, i), (o = new (r("TWriteBuffer"))(a.currentSize())));
      } else o = new (r("TWriteBuffer"))();
      var l = new (r("TCompactProtocol"))(o);
      return (t(e, l), l.toByteArray());
    }
    ((l.deserializeNoThrow = e),
      (l.deserialize = s),
      (l.serializeNoThrow = u),
      (l.serialize = c));
  },
  98,
);
