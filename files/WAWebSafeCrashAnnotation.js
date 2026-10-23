__d(
  "WAWebSafeCrashAnnotation",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n) {
      try {
        return n();
      } catch (n) {
        try {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[crash-annotations] failed to write ",
                ": ",
                "",
              ])),
            t,
            n,
          );
        } catch (e) {}
        return;
      }
    }
    l.runCrashAnnotationSafely = s;
  },
  98,
);
