__d(
  "WAWebCTWASuggestionModel",
  ["WAWebBaseModel"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.suggestion = o("WAWebBaseModel").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "ctwaSuggestion";
    var s = o("WAWebBaseModel").defineModel(e);
    l.CTWASuggestionModel = s;
  },
  98,
);
