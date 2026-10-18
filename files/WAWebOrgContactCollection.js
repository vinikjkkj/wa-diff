__d(
  "WAWebOrgContactCollection",
  [
    "WAWebBaseCollection",
    "WAWebOrgContactGetters",
    "WAWebOrgContactModel",
    "WAWebOrgContactProjection",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "org_contacts_applied",
      s = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.remove = function (n, r) {
            var e = t.prototype.remove.call(this, n, r);
            return (
              e.forEach(function (e) {
                e != null &&
                  o("WAWebOrgContactGetters").clearOrgContactGetterCacheFor(e);
              }),
              e
            );
          }),
          (r.reset = function () {
            (this.forEach(function (e) {
              return o("WAWebOrgContactGetters").clearOrgContactGetterCacheFor(
                e,
              );
            }),
              t.prototype.reset.call(this));
          }),
          (r.getOrgContactsForOrg = function (t) {
            return this.getModelsArray()
              .filter(function (e) {
                return e.orgMetadata[t] != null;
              })
              .sort(m);
          }),
          (r.applyAttrs = function (t, n) {
            var e = this.get(t.id);
            if (e == null) {
              this.add(t, { silent: (n == null ? void 0 : n.silent) === !0 });
              return;
            }
            e.set(
              babelHelpers.extends({}, t, {
                orgIds: d(e.orgIds, t.orgIds) ? e.orgIds : t.orgIds,
                orgMetadata: o("WAWebOrgContactProjection").reuseEqualMetadata(
                  e.orgMetadata,
                  t.orgMetadata,
                ),
              }),
            );
          }),
          (r.notifyApplied = function (n, r) {
            var t = {
              lids: Array.from(new Set(r)),
              orgIds: Array.from(new Set(n)),
            };
            this.trigger(e, t);
          }),
          n
        );
      })(o("WAWebBaseCollection").BaseCollection);
    s.model = o("WAWebOrgContactModel").OrgContact;
    var u = new s();
    function c(e) {
      return {
        id: e.id,
        memberName: e.memberName,
        orgIds: e.orgIds,
        orgMetadata: e.orgMetadata,
        phoneNumber: e.phoneNumber,
        primaryOrgId: e.primaryOrgId,
        primaryOrgMemberTag: e.primaryOrgMemberTag,
        username: e.username,
      };
    }
    function d(e, t) {
      return (
        e.length === t.length &&
        e.every(function (e, n) {
          return e === t[n];
        })
      );
    }
    function m(e, t) {
      var n = e.memberName
        .toLowerCase()
        .localeCompare(t.memberName.toLowerCase());
      return n !== 0 ? n : e.id.localeCompare(t.id);
    }
    ((l.ORG_CONTACTS_APPLIED = e),
      (l.OrgContactCollection = u),
      (l.toOrgContactAttrs = c));
  },
  98,
);
