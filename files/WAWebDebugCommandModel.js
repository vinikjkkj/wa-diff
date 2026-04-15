__d(
  "WAWebDebugCommandModel",
  ["WAWebBaseModel"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.funcName = o("WAWebBaseModel").prop()),
          (t.doc = o("WAWebBaseModel").prop()),
          (t.params = o("WAWebBaseModel").prop()),
          (t.paramsToExecute = o("WAWebBaseModel").prop()),
          (t.keywords = o("WAWebBaseModel").prop()),
          (t.displayName = o("WAWebBaseModel").prop()),
          (t.func = o("WAWebBaseModel").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "debugCommand";
    var s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
  },
  98,
);
