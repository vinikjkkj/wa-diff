__d(
  "WAWebOrgMemberModel",
  ["WAWebBaseModel"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.memberName = o("WAWebBaseModel").prop()),
          (t.firstName = o("WAWebBaseModel").prop()),
          (t.lastName = o("WAWebBaseModel").prop()),
          (t.username = o("WAWebBaseModel").prop()),
          (t.phoneNumber = o("WAWebBaseModel").prop()),
          (t.role = o("WAWebBaseModel").prop()),
          (t.memberTag = o("WAWebBaseModel").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "orgMember";
    var s = o("WAWebBaseModel").defineModel(e);
    l.OrgMember = s;
  },
  98,
);
