__d(
  "WAWebAgentModel",
  ["WAWebAgentCollection", "WAWebBaseModel"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.deviceId = o("WAWebBaseModel").prop()),
          (t.name = o("WAWebBaseModel").prop()),
          (t.isDeleted = o("WAWebBaseModel").prop(!1)),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getCollection = function () {
          return o("WAWebAgentCollection").AgentCollection;
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "agent";
    var s = o("WAWebBaseModel").defineModel(e);
    l.Agent = s;
  },
  98,
);
