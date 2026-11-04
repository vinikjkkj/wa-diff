__d(
  "WAWebSafeCrashAnnotation",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 32,
      u = new Set();
    function c(t, n) {
      try {
        return n();
      } catch (n) {
        try {
          var r = t + ": " + String(n);
          u.size < s &&
            !u.has(r) &&
            (u.add(r),
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[crash-annotations] failed to write ",
                  ": ",
                  "",
                ])),
              t,
              n,
            ));
        } catch (e) {}
        return;
      }
    }
    l.runCrashAnnotationSafely = c;
  },
  98,
);
