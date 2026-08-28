__d(
  "WebBloksCDSCloseScreen",
  ["CDSWebBloksMinificationKeys"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      e.objectSet.navigationManager.close("close");
      var r =
        t == null
          ? void 0
          : t.get(o("CDSWebBloksMinificationKeys").CLOSE_SCREEN_CALLBACK);
      r != null && e.executeCatch(r, [e.bloksContext]);
    }
    l.default = e;
  },
  98,
);
