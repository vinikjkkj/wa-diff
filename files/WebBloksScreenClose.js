__d(
  "WebBloksScreenClose",
  ["WebBloksBooleanUtils", "WebBloksErrors"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = t.getValues(),
        r = n.is_inclusive,
        a = n.screen_id,
        i = n.type;
      if (i == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "WebBloksScreenCloseType must be provided to close a screen",
        );
      e.objectSet.navigationManager.close(
        i,
        a != null ? a : void 0,
        r != null ? o("WebBloksBooleanUtils").isTrue(r) : void 0,
      );
    }
    l.default = e;
  },
  98,
);
