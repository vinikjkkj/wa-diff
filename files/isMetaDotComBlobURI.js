__d(
  "isMetaDotComBlobURI",
  ["URI", "isMetaDotComURI"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      if (!t.includes("blob:")) return !1;
      var n = t.replace("blob:", ""),
        o = (e || (e = r("URI"))).tryParseURI(n);
      return o != null && r("isMetaDotComURI")(o);
    }
    l.default = s;
  },
  98,
);
