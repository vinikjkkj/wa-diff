__d(
  "WAWebOrgContactCollection",
  ["WAWebBaseCollection", "WAWebCollectionUtils", "WAWebOrgContactModel"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.byLid = o("WAWebCollectionUtils").aggregated(function (e) {
            return e.lid;
          })),
          (t.byOrgId = o("WAWebCollectionUtils").aggregated(function (e) {
            return e.orgId;
          })),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getByLid = function (t) {
          return this.byLid(t).slice();
        }),
        (n.getByOrgId = function (t) {
          return this.byOrgId(t).slice();
        }),
        (n.getByOrgIdAndLid = function (t, n) {
          return this.get(u(t, n));
        }),
        (n.addRows = function (t) {
          return this.add(t.map(c), { merge: !0 });
        }),
        (n.removeByOrgId = function (t) {
          this.remove(this.getByOrgId(t));
        }),
        (n.removeByLid = function (t) {
          this.remove(this.getByLid(t));
        }),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebOrgContactModel").OrgContact;
    var s = new e();
    function u(e, t) {
      return e + "_" + t;
    }
    function c(e) {
      var t, n, r;
      return {
        id: u(e.orgId, e.lid),
        lid: e.lid,
        memberName: e.memberName,
        memberTag: e.memberTag,
        orgId: e.orgId,
        phoneNumber: (t = e.phoneNumber) != null ? t : null,
        role: (n = e.role) != null ? n : null,
        username: (r = e.username) != null ? r : null,
      };
    }
    ((l.OrgContactCollection = s), (l.createOrgContactModelId = u));
  },
  98,
);
