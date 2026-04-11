__d(
  "CometStyleXSheet",
  [
    "CometStyleXDarkTheme",
    "CometStyleXDefaultTheme",
    "ExecutionEnvironment",
    "StyleXSheet",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (e) {
        function t() {
          return (
            e.call(this, {
              rootDarkTheme: r("CometStyleXDarkTheme"),
              rootTheme: r("CometStyleXDefaultTheme"),
            }) || this
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(r("StyleXSheet")),
      u = new s();
    ((l.DARK_MODE_CLASS_NAME = r("StyleXSheet").DARK_MODE_CLASS_NAME),
      (l.LIGHT_MODE_CLASS_NAME = r("StyleXSheet").LIGHT_MODE_CLASS_NAME),
      (l.CometStyleXSheet = s),
      (l.rootStyleSheet = u));
  },
  98,
);
