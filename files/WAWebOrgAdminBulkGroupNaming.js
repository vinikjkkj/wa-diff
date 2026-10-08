__d(
  "WAWebOrgAdminBulkGroupNaming",
  [],
  function (t, n, r, o, a, i) {
    var e = "{value}",
      l = "{organization}",
      s = /\{value\}|\{organization\}/g;
    function u(t) {
      var n = _(t);
      return { organizationName: n, pattern: n === "" ? e : e + " \xB7 " + l };
    }
    function c(t, n) {
      var r = _(n);
      return t.pattern
        .replace(s, function (n) {
          return n === e ? r : t.organizationName;
        })
        .trim();
    }
    function d(t) {
      return t.includes(e);
    }
    function m(e) {
      if (e == null) return null;
      var t = _(e);
      return t === "" ? null : t;
    }
    function p(e) {
      return _(e).toLowerCase();
    }
    function _(e) {
      return e.normalize("NFKC").trim().replace(/\s+/g, " ");
    }
    ((i.ORG_ADMIN_BULK_GROUP_VALUE_TOKEN = e),
      (i.ORG_ADMIN_BULK_GROUP_ORGANIZATION_TOKEN = l),
      (i.getDefaultOrgAdminBulkGroupNameTemplate = u),
      (i.formatOrgAdminBulkGroupName = c),
      (i.hasOrgAdminBulkGroupValueToken = d),
      (i.normalizeOrgAdminBulkGroupMemberTag = m),
      (i.getOrgAdminBulkGroupMemberTagKey = p));
  },
  66,
);
