__d(
  "WAWebOrgAdminDirectoryAdapters",
  [
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebOrgContactIdentityResolver",
    "WAWebOrgMemberLidEligibility",
    "WAWebOrgViewerRoleUtils",
    "WAWebSchemaOrg",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 20;
    function s(e, t) {
      var n = u(e.filter(o("WAWebOrgViewerRoleUtils").canViewerAdministerOrg));
      return {
        live: n,
        visible:
          n.length === 0
            ? u(t.filter(o("WAWebOrgViewerRoleUtils").canViewerAdministerOrg))
            : n,
      };
    }
    function u(e) {
      return e.map(function (e) {
        return babelHelpers.extends({}, e, {
          isMemberDirectoryEnabled: e.isMemberDirectoryEnabled === !0,
          viewerRole: g(e.viewerRole),
        });
      });
    }
    function c(e) {
      return e.flatMap(function (e) {
        var t = g(e.role);
        if (t == null) return [];
        var n = o("WAWebOrgContactIdentityResolver").resolveOrgContactIdentity(
          d(e.lid),
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
    function d(e) {
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
    function m(e, t) {
      return e
        ? "loaded"
        : t === "error"
          ? "failed"
          : t === "ready"
            ? "loaded"
            : "not_loaded";
    }
    function p(t) {
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
          .sort(_)
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
    function _(e, t) {
      var n = e[0],
        r = e[1],
        o = t[0],
        a = t[1],
        i = a - r;
      if (i !== 0) return i;
      var l = f(n.toLowerCase(), o.toLowerCase());
      return l !== 0 ? l : f(n, o);
    }
    function f(e, t) {
      return e === t ? 0 : e < t ? -1 : 1;
    }
    function g(e) {
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
    ((l.getAdministeredOrgViews = s),
      (l.toOrgAdminOrganizations = u),
      (l.toOrgAdminDirectoryMembers = c),
      (l.getDirectoryLoadStatus = m),
      (l.getTopMemberTags = p));
  },
  98,
);
