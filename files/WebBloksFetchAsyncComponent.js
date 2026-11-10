__d(
  "WebBloksFetchAsyncComponent",
  [
    "WebBloksAsyncComponentQueryPurpose",
    "WebBloksBooleanUtils",
    "WebBloksModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      s = o("WebBloksModel").defineWebBloksAttributeKey(")"),
      u = o("WebBloksModel").defineWebBloksAttributeKey("+");
    function c(t, n, a, i, l) {
      var c,
        d,
        m,
        p,
        _ = (c = l == null ? void 0 : l.get(e)) != null ? c : "fetch",
        f = r("WebBloksAsyncComponentQueryPurpose").cast(_);
      f == null &&
        t.objectSet.environment.logger.mustfix(
          "FetchAsyncComponents: unknown query_purpose " + _,
        );
      var g = o("WebBloksBooleanUtils").isTrue(
          (d = l == null ? void 0 : l.get(s)) != null ? d : !1,
        ),
        h =
          (m =
            l == null || (p = l.get(u)) == null
              ? void 0
              : p.filter(function (e) {
                  return e != null;
                })) != null
            ? m
            : null;
      t.objectSet.componentQueryStore.fetch(
        n,
        a,
        i,
        f != null ? f : r("WebBloksAsyncComponentQueryPurpose").FETCH,
        h,
        g,
      );
    }
    l.default = c;
  },
  98,
);
