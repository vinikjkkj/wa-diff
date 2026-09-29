__d(
  "WAWebOrgContactModel",
  ["WAWebBaseModel", "WAWebOrgContactCollection"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.orgId = o("WAWebBaseModel").prop()),
          (t.lid = o("WAWebBaseModel").prop()),
          (t.memberName = o("WAWebBaseModel").prop()),
          (t.memberTag = o("WAWebBaseModel").prop()),
          (t.role = o("WAWebBaseModel").prop()),
          (t.username = o("WAWebBaseModel").prop()),
          (t.phoneNumber = o("WAWebBaseModel").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getCollection = function () {
          return o("WAWebOrgContactCollection").OrgContactCollection;
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "orgContact";
    var s = o("WAWebBaseModel").defineModel(e);
    l.OrgContact = s;
  },
  98,
);
