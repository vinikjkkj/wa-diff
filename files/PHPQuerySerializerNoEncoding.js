__d(
  "PHPQuerySerializerNoEncoding",
  ["BaseDeserializePHPQueryData", "flattenPHPQueryData"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = [],
        n = r("flattenPHPQueryData")(e);
      for (var o in n)
        if (Object.prototype.hasOwnProperty.call(n, o)) {
          var a = o;
          n[o] === void 0 ? t.push(a) : t.push(a + "=" + String(n[o]));
        }
      return t.join("&");
    }
    function s(e) {
      return e;
    }
    function u(e) {
      return o("BaseDeserializePHPQueryData").deserialize(e, c);
    }
    function c(e) {
      return e;
    }
    var d = {
        decodeComponent: c,
        deserialize: u,
        encodeComponent: s,
        serialize: e,
      },
      m = d;
    l.default = m;
  },
  98,
);
