__d(
  "WAWebOrgAdminDirectoryAdapters",
  [
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebOrgContactIdentityResolver",
    "WAWebOrgMemberLidEligibility",
    "WAWebSchemaOrg",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 20;
    function s(e) {
      return e.map(function (e) {
        return babelHelpers.extends({}, e, {
          isMemberDirectoryEnabled: e.isMemberDirectoryEnabled === !0,
          viewerRole: f(e.viewerRole),
        });
      });
    }
    function u(e) {
      return e.flatMap(function (e) {
        var t = f(e.role);
        if (t == null) return [];
        var n = o("WAWebOrgContactIdentityResolver").resolveOrgContactIdentity(
          c(e.lid),
          { memberName: e.displayName, username: e.username },
        );
        return [
          {
            displayName: n.displayName,
            lid: e.lid,
            memberTag: e.memberTag === "" ? null : e.memberTag,
            phoneNumber: e.phoneNumber,
            role: t,
            username: n.username,
          },
        ];
      });
    }
    function c(e) {
      var t = o("WAWebOrgMemberLidEligibility").parseWAWebOrgMemberLidUser(e),
        n =
          t == null
            ? null
            : o("WAWebContactCollection").ContactCollection.get(t);
      return n == null
        ? null
        : {
            name: o("WAWebContactGetters").getName(n),
            pushname: o("WAWebContactGetters").getPushname(n),
            username: o("WAWebFrontendContactGetters").getUsername(n),
          };
    }
    function d(e, t) {
      return e
        ? "loaded"
        : t === "error"
          ? "failed"
          : t === "ready"
            ? "loaded"
            : "not_loaded";
    }
    function m(t) {
      var n = new Map();
      return (
        t.forEach(function (e) {
          var t = e.memberTag;
          if (t != null && t !== "") {
            var r;
            n.set(t, ((r = n.get(t)) != null ? r : 0) + 1);
          }
        }),
        Array.from(n.entries())
          .sort(p)
          .slice(0, e)
          .map(function (e) {
            var t = e[0];
            return t;
          })
          .sort(function (e, t) {
            return e.localeCompare(t);
          })
      );
    }
    function p(e, t) {
      var n = e[0],
        r = e[1],
        o = t[0],
        a = t[1],
        i = a - r;
      if (i !== 0) return i;
      var l = _(n.toLowerCase(), o.toLowerCase());
      return l !== 0 ? l : _(n, o);
    }
    function _(e, t) {
      return e === t ? 0 : e < t ? -1 : 1;
    }
    function f(e) {
      return e === o("WAWebSchemaOrg").OrgMemberRole.Admin
        ? "ADMIN"
        : e === o("WAWebSchemaOrg").OrgMemberRole.Creator
          ? "CREATOR"
          : e === o("WAWebSchemaOrg").OrgMemberRole.Member
            ? "MEMBER"
            : e == null
              ? null
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    ((l.toOrgAdminOrganizations = s),
      (l.toOrgAdminDirectoryMembers = u),
      (l.getDirectoryLoadStatus = d),
      (l.getTopMemberTags = m));
  },
  98,
);
