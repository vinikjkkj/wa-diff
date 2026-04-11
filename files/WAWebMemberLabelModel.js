__d(
  "WAWebMemberLabelModel",
  ["WAWebBaseModel", "WAWebMemberLabelKey"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.label = o("WAWebBaseModel").prop()),
          (t.lastEditTimestamp = o("WAWebBaseModel").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebBaseModel").BaseModel);
    ((e.Proxy = "memberLabel"), (e.idClass = r("WAWebMemberLabelKey")));
    var s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
  },
  98,
);
