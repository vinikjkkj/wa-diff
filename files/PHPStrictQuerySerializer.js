__d(
  "PHPStrictQuerySerializer",
  ["PHPQuerySerializer", "flattenPHPQueryData"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = [],
        n = r("flattenPHPQueryData")(e);
      for (var o in n)
        if (Object.prototype.hasOwnProperty.call(n, o)) {
          var a = u(o);
          n[o] === void 0 ? t.push(a) : t.push(a + "=" + u(String(n[o])));
        }
      return t.join("&");
    }
    function u(e) {
      return encodeURIComponent(e);
    }
    ((l.serialize = s),
      (l.encodeComponent = u),
      (l.deserialize = (e || (e = o("PHPQuerySerializer"))).deserialize),
      (l.decodeComponent = e.decodeComponent));
  },
  98,
);
