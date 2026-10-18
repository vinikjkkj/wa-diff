__d(
  "WAWebOrgContactProjection",
  [],
  function (t, n, r, o, a, i) {
    var e = Object.freeze({});
    function l(e, t, n) {
      var r = new Map(
          n.map(function (e, t) {
            return [e, t];
          }),
        ),
        o = t.slice().sort(function (e, t) {
          var o, a;
          return (
            ((o = r.get(e.orgId)) != null ? o : n.length) -
            ((a = r.get(t.orgId)) != null ? a : n.length)
          );
        }),
        a = {};
      return (
        o.forEach(function (e) {
          var t;
          a[e.orgId] = {
            memberTag: e.memberTag === "" ? null : e.memberTag,
            role: (t = e.role) != null ? t : null,
          };
        }),
        m(e, p(o), a, n)
      );
    }
    function s(e, t, n) {
      var r = {};
      return (
        Object.keys(e.orgMetadata).forEach(function (n) {
          t.has(n) || (r[n] = e.orgMetadata[n]);
        }),
        m(e.id, e, r, n)
      );
    }
    function u(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n,
            r = (n = t.get(e.lid)) != null ? n : [];
          (r.push(e), t.set(e.lid, r));
        }),
        t
      );
    }
    function c(e, t) {
      return m(e.id, e, e.orgMetadata, t);
    }
    function d(e, t) {
      var n = Object.keys(e),
        r = Object.keys(t),
        o =
          n.length === r.length &&
          r.every(function (n) {
            return (
              e[n] != null &&
              e[n].memberTag === t[n].memberTag &&
              e[n].role === t[n].role
            );
          });
      return o ? e : t;
    }
    function m(t, n, r, o) {
      var a,
        i,
        l = Object.freeze(
          o.filter(function (e) {
            return r[e] != null;
          }),
        ),
        s =
          Object.keys(r).length === 0
            ? e
            : Object.freeze(babelHelpers.extends({}, r)),
        u = (a = l[0]) != null ? a : null,
        c = u == null ? null : s[u];
      return {
        id: t,
        memberName: n.memberName,
        orgIds: l,
        orgMetadata: s,
        phoneNumber: n.phoneNumber,
        primaryOrgId: u,
        primaryOrgMemberTag:
          (i = c == null ? void 0 : c.memberTag) != null ? i : null,
        username: n.username,
      };
    }
    function p(e) {
      var t, n, r, o, a, i;
      return {
        memberName:
          (t =
            (n = e.find(function (e) {
              return e.memberName !== "";
            })) == null
              ? void 0
              : n.memberName) != null
            ? t
            : "",
        phoneNumber:
          (r =
            (o = e.find(function (e) {
              return e.phoneNumber != null;
            })) == null
              ? void 0
              : o.phoneNumber) != null
            ? r
            : null,
        username:
          (a =
            (i = e.find(function (e) {
              return e.username != null;
            })) == null
              ? void 0
              : i.username) != null
            ? a
            : null,
      };
    }
    ((i.projectOrgContact = l),
      (i.withoutOrgMemberships = s),
      (i.groupOrgContactRowsByLid = u),
      (i.reorderOrgContactAttrs = c),
      (i.reuseEqualMetadata = d));
  },
  66,
);
