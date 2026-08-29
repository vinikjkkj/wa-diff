__d(
  "WebBloksOpenUrlV2",
  ["WebBloksBooleanUtils", "WebBloksURLUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = o("WebBloksURLUtils").qualify(t),
        a = n == null ? void 0 : n.get("url_params");
      (a != null && (r = o("WebBloksURLUtils").addQueryParamsToUrl(r, a)),
        o("WebBloksURLUtils").openURL(
          r,
          o("WebBloksBooleanUtils").isTrue(
            n == null ? void 0 : n.get("open_in_new_tab"),
          ),
        ));
    }
    l.default = e;
  },
  98,
);
