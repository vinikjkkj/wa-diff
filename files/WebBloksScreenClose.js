__d(
  "WebBloksScreenClose",
  ["WebBloksBooleanUtils", "WebBloksErrors", "WebBloksModel"],
  function (t, n, r, o, a, i, l) {
    var e = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      s = o("WebBloksModel").defineWebBloksAttributeKey("&"),
      u = o("WebBloksModel").defineWebBloksAttributeKey("#");
    function c(t, n) {
      var r = n.get(e),
        a = n.get(s),
        i = n.get(u);
      if (i == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "WebBloksScreenCloseType must be provided to close a screen",
        );
      t.objectSet.navigationManager.close(
        i,
        a != null ? a : void 0,
        r != null ? o("WebBloksBooleanUtils").isTrue(r) : void 0,
      );
    }
    l.default = c;
  },
  98,
);
