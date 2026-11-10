__d(
  "WAWebOrgContactIdentitySync",
  [
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebContactOrgIdentityRegistry",
    "WAWebOrgCollection",
    "WAWebOrgContactIdentity",
    "WAWebOrgMemberLidEligibility",
  ],
  function (t, n, r, o, a, i, l) {
    var e = !1;
    function s(e) {
      c();
      var t = [];
      for (var n of e) {
        var r = o("WAWebOrgMemberLidEligibility").parseWAWebOrgMemberLidUser(n),
          a =
            r == null
              ? null
              : o("WAWebContactCollection").ContactCollection.get(r);
        a != null && d(a) && t.push(n);
      }
      t.length > 0 &&
        o("WAWebOrgCollection").OrgCollection.notifyIdentityChanged(t);
    }
    function u() {
      var e = new Set();
      (o("WAWebOrgCollection").OrgCollection.forEach(function (t) {
        return t.members.forEach(function (t) {
          var n = t.id;
          return e.add(n);
        });
      }),
        s(e));
    }
    function c() {
      e ||
        ((e = !0),
        o("WAWebContactOrgIdentityRegistry").registerContactOrgIdentityProvider(
          o("WAWebOrgContactIdentity").getOrgContactIdentity,
        ),
        o("WAWebCmd").Cmd.on("on_ab_props_update_from_bridge", u));
    }
    function d(e) {
      var t,
        n,
        r,
        a,
        i = m(o("WAWebOrgContactIdentity").getOrgContactIdentity(e.id)),
        l =
          i.orgMemberName === ((t = e.orgMemberName) != null ? t : null) &&
          i.orgMemberFirstName ===
            ((n = e.orgMemberFirstName) != null ? n : null) &&
          i.orgPrimaryId === ((r = e.orgPrimaryId) != null ? r : null) &&
          i.orgPrimaryTag === ((a = e.orgPrimaryTag) != null ? a : null);
      return (l || e.set(i), !l);
    }
    function m(e) {
      var t, n, r, o;
      return {
        orgMemberFirstName:
          (t = e == null ? void 0 : e.firstName) != null ? t : null,
        orgMemberName: (n = e == null ? void 0 : e.fullName) != null ? n : null,
        orgPrimaryId:
          (r = e == null ? void 0 : e.primaryOrgId) != null ? r : null,
        orgPrimaryTag:
          (o = e == null ? void 0 : e.primaryOrgMemberTag) != null ? o : null,
      };
    }
    ((l.syncContactOrgIdentity = s), (l.syncAllContactOrgIdentity = u));
  },
  98,
);
