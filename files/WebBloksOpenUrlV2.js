__d(
  "WebBloksOpenUrlV2",
  ["WebBloksBooleanUtils", "WebBloksURLUtils"],
  function (t, n, r, o, a, i, l) {
    var e = "#",
      s = "$";
    function u(t, n, r) {
      var a = o("WebBloksURLUtils").qualify(n),
        i = r == null ? void 0 : r.get(s);
      (i != null && (a = o("WebBloksURLUtils").addQueryParamsToUrl(a, i)),
        o("WebBloksURLUtils").openURL(
          a,
          o("WebBloksBooleanUtils").isTrue(r == null ? void 0 : r.get(e)),
        ));
    }
    l.default = u;
  },
  98,
);
