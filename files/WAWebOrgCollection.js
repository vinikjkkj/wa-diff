__d(
  "WAWebOrgCollection",
  [
    "WAWebBaseCollection",
    "WAWebBoolFunc",
    "WAWebCollectionUtils",
    "WAWebOrgGetters",
    "WAWebOrgModel",
    "WAWebOrgOrder",
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
        (n.remove = function (n, r) {
          var t = e.prototype.remove.call(this, n, r);
          return (
            t.forEach(function (e) {
              e != null && o("WAWebOrgGetters").clearOrgGetterCacheFor(e);
            }),
            t
          );
        }),
        (n.reset = function () {
          (this.forEach(function (e) {
            return o("WAWebOrgGetters").clearOrgGetterCacheFor(e);
          }),
            e.prototype.reset.call(this));
        }),
        (n.addRows = function (t) {
          return this.add(t.map(u), { merge: !0 });
        }),
        (n.getOrderedOrgs = function () {
          return o("WAWebOrgOrder").sortOrgsForDisplay(this.getModelsArray());
        }),
        (n.getViewerPrimaryOrgId = function () {
          var e, t;
          return (e = (t = this.getOrderedOrgs()[0]) == null ? void 0 : t.id) !=
            null
            ? e
            : null;
        }),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebOrgModel").Org;
    var s = new e();
    function u(e) {
      var t, n, r, o, a, i, l, s, u, c, d;
      return {
        description: (t = e.description) != null ? t : null,
        directoryIsComplete: (n = e.directoryIsComplete) != null ? n : null,
        iconFullUrl: (r = e.iconFullUrl) != null ? r : null,
        iconHandle: (o = e.iconHandle) != null ? o : null,
        iconThumbUrl: (a = e.iconThumbUrl) != null ? a : null,
        id: e.orgId,
        isMemberDirectoryEnabled:
          (i = e.isMemberDirectoryEnabled) != null ? i : null,
        managedChannels: (l = e.managedChannels) != null ? l : null,
        managedGroups: (s = e.managedGroups) != null ? s : null,
        memberCount: (u = e.memberCount) != null ? u : null,
        memberTagOptions: (c = e.memberTagOptions) != null ? c : null,
        name: e.name,
        viewerRole: (d = e.viewerRole) != null ? d : null,
      };
    }
    l.OrgCollection = s;
  },
  98,
);
