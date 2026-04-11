__d(
  "CompactSerializerPolyfill",
  [
    "TCompactProtocolPolyfill",
    "TNoOpWriteBuffer",
    "TReadBuffer",
    "TWriteBuffer",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = new (r("TReadBuffer"))(e),
        o = new (r("TCompactProtocolPolyfill"))(n);
      return t(o);
    }
    function s(t, n, o) {
      try {
        return e(t, n);
      } catch (e) {
        o != null && o(r("getErrorSafe")(e));
      }
      return null;
    }
    function u(e, t, n) {
      n === void 0 && (n = !1);
      var o;
      if (n) {
        var a = new (r("TNoOpWriteBuffer"))(),
          i = new (r("TCompactProtocolPolyfill"))(a);
        (t(e, i), (o = new (r("TWriteBuffer"))(a.currentSize())));
      } else o = new (r("TWriteBuffer"))();
      var l = new (r("TCompactProtocolPolyfill"))(o);
      return (t(e, l), l.toByteArray());
    }
    function c(e, t, n, o) {
      n === void 0 && (n = !1);
      try {
        return u(e, t, n);
      } catch (e) {
        o != null && o(r("getErrorSafe")(e));
      }
      return null;
    }
    ((l.deserialize = e),
      (l.deserializeNoThrow = s),
      (l.serialize = u),
      (l.serializeNoThrow = c));
  },
  98,
);
