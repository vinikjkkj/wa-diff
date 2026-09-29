__d(
  "WAWebOrgModel",
  ["WAWebBaseModel", "WAWebOrgCollection"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.name = o("WAWebBaseModel").prop()),
          (t.description = o("WAWebBaseModel").prop()),
          (t.memberCount = o("WAWebBaseModel").prop()),
          (t.memberTagOptions = o("WAWebBaseModel").prop()),
          (t.iconHandle = o("WAWebBaseModel").prop()),
          (t.iconThumbUrl = o("WAWebBaseModel").prop()),
          (t.iconFullUrl = o("WAWebBaseModel").prop()),
          (t.viewerRole = o("WAWebBaseModel").prop()),
          (t.managedGroups = o("WAWebBaseModel").prop()),
          (t.managedChannels = o("WAWebBaseModel").prop()),
          (t.directoryIsComplete = o("WAWebBaseModel").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getCollection = function () {
          return o("WAWebOrgCollection").OrgCollection;
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "org";
    var s = o("WAWebBaseModel").defineModel(e);
    l.Org = s;
  },
  98,
);
