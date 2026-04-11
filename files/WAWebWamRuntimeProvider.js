__d(
  "WAWebWamRuntimeProvider",
  ["WALogger", "WAWebWamInitQueue"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = null;
    function u(t) {
      if (s != null) {
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "wamRuntime already set",
            ])),
        );
        return;
      }
      ((s = t), o("WAWebWamInitQueue").processQueuedJobs());
    }
    function c() {
      return s;
    }
    ((l.setWamRuntime = u), (l.getWamRuntime = c));
  },
  98,
);
