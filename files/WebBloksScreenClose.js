__d(
  "WebBloksScreenClose",
  ["WebBloksBooleanUtils", "WebBloksErrors"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = t.get("is_inclusive"),
        r = t.get("screen_id"),
        a = t.get("type");
      if (a == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "WebBloksScreenCloseType must be provided to close a screen",
        );
      e.objectSet.navigationManager.close(
        a,
        r != null ? r : void 0,
        n != null ? o("WebBloksBooleanUtils").isTrue(n) : void 0,
      );
    }
    l.default = e;
  },
  98,
);
