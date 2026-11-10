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
    var e = "org_members_applied",
      s = "org_identity_changed",
      u = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.allOrganizations = o("WAWebCollectionUtils").aggregated(
              o("WAWebBoolFunc").returnTrue,
            )),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.remove = function (n, r) {
            var e = t.prototype.remove.call(this, n, r);
            return (
              e.forEach(function (e) {
                e != null && o("WAWebOrgGetters").clearOrgGetterCacheFor(e);
              }),
              e
            );
          }),
          (r.reset = function () {
            (this.forEach(function (e) {
              return o("WAWebOrgGetters").clearOrgGetterCacheFor(e);
            }),
              t.prototype.reset.call(this));
          }),
          (r.addRows = function (t) {
            return this.add(t.map(d), { merge: !0 });
          }),
          (r.getOrderedOrgs = function () {
            return o("WAWebOrgOrder").sortOrgsForDisplay(this.getModelsArray());
          }),
          (r.getViewerPrimaryOrgId = function () {
            var e, t;
            return (e =
              (t = this.getOrderedOrgs()[0]) == null ? void 0 : t.id) != null
              ? e
              : null;
          }),
          (r.notifyMembersApplied = function (n, r) {
            this.trigger(e, {
              lids: Array.from(new Set(r)),
              orgIds: Array.from(new Set(n)),
            });
          }),
          (r.notifyIdentityChanged = function (t) {
            this.trigger(s, { lids: t });
          }),
          n
        );
      })(o("WAWebBaseCollection").BaseCollection);
    u.model = o("WAWebOrgModel").Org;
    var c = new u();
    function d(e) {
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
    ((l.ORG_MEMBERS_APPLIED = e),
      (l.ORG_IDENTITY_CHANGED = s),
      (l.OrgCollection = c));
  },
  98,
);
