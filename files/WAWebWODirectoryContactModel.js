__d(
  "WAWebWODirectoryContactModel",
  ["WAWebBaseModel"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.id = o("WAWebBaseModel").prop()),
            (t.details = o("WAWebBaseModel").prop()),
            (t.lid = o("WAWebBaseModel").prop()),
            (t.memberId = o("WAWebBaseModel").prop()),
            (t.name = o("WAWebBaseModel").prop()),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WAWebBaseModel").BaseModel),
      s = o("WAWebBaseModel").defineModel(e);
    l.WODirectoryContact = s;
  },
  98,
);
