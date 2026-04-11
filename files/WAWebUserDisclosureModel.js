__d(
  "WAWebUserDisclosureModel",
  ["WAWebBaseModel", "WAWebUserDisclosureCollection"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.policyVersion = o("WAWebBaseModel").prop()),
          (t.privacyDisclosureModal = o("WAWebBaseModel").prop()),
          (t.endDate = o("WAWebBaseModel").prop()),
          (t.accepted = o("WAWebBaseModel").session()),
          (t.stage = o("WAWebBaseModel").session()),
          (t.lastUpdated = o("WAWebBaseModel").session()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getCollection = function () {
          return o("WAWebUserDisclosureCollection").UserDisclosureCollection;
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "userDisclosure";
    var s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
  },
  98,
);
