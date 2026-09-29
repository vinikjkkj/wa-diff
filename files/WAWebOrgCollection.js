__d(
  "WAWebOrgCollection",
  [
    "WAWebBaseCollection",
    "WAWebBoolFunc",
    "WAWebCollectionUtils",
    "WAWebOrgModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.allOrganizations = o("WAWebCollectionUtils").aggregated(
            o("WAWebBoolFunc").returnTrue,
          )),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.addRows = function (t) {
          return this.add(t.map(u), { merge: !0 });
        }),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebOrgModel").Org;
    var s = new e();
    function u(e) {
      var t, n, r, o, a, i, l, s, u;
      return {
        description: (t = e.description) != null ? t : null,
        directoryIsComplete: (n = e.directoryIsComplete) != null ? n : null,
        iconFullUrl: (r = e.iconFullUrl) != null ? r : null,
        iconHandle: (o = e.iconHandle) != null ? o : null,
        iconThumbUrl: (a = e.iconThumbUrl) != null ? a : null,
        id: e.orgId,
        managedChannels: (i = e.managedChannels) != null ? i : null,
        managedGroups: (l = e.managedGroups) != null ? l : null,
        memberCount: (s = e.memberCount) != null ? s : null,
        memberTagOptions: (u = e.memberTagOptions) != null ? u : null,
        name: e.name,
        viewerRole: e.viewerRole,
      };
    }
    l.OrgCollection = s;
  },
  98,
);
