__d(
  "WAWebTemplateButtonModel",
  ["WAWebBaseModel"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.displayText = o("WAWebBaseModel").prop()),
          (t.subtype = o("WAWebBaseModel").prop()),
          (t.url = o("WAWebBaseModel").prop()),
          (t.phoneNumber = o("WAWebBaseModel").prop()),
          (t.selectionId = o("WAWebBaseModel").prop()),
          (t.selected = o("WAWebBaseModel").session(!1)),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "templateButton";
    var s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
  },
  98,
);
