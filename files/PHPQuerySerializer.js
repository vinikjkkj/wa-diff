__d(
  "PHPQuerySerializer",
  ["BaseDeserializePHPQueryData", "flattenPHPQueryData"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = [],
        n = r("flattenPHPQueryData")(e);
      for (var o in n)
        if (Object.prototype.hasOwnProperty.call(n, o)) {
          var a = s(o);
          n[o] === void 0 ? t.push(a) : t.push(a + "=" + s(String(n[o])));
        }
      return t.join("&");
    }
    function s(e) {
      return encodeURIComponent(e).replace(/%5D/g, "]").replace(/%5B/g, "[");
    }
    function u(e) {
      return o("BaseDeserializePHPQueryData").deserialize(e, c);
    }
    function c(e) {
      try {
        return decodeURIComponent(e.replace(/\+/g, " "));
      } catch (t) {
        return e;
      }
    }
    var d = {
      decodeComponent: c,
      deserialize: u,
      encodeComponent: s,
      serialize: e,
    };
    i.exports = d;
  },
  34,
);
