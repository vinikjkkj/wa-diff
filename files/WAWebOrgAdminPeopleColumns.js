__d(
  "WAWebOrgAdminPeopleColumns",
  ["fbt", "WAWebUICustomizationStore"],
  function (t, n, r, o, a, i, l, s) {
    var e = [
        "phone",
        "email",
        "member_tag",
        "secondary_member_tag",
        "status",
        "groups",
      ],
      u = "org_admin_people_hidden_columns:";
    function c(t, n, r) {
      return (
        r === void 0 && (r = !1),
        e.filter(function (e) {
          return (
            (e !== "email" || t) &&
            (e !== "groups" || n) &&
            (e !== "secondary_member_tag" || r)
          );
        })
      );
    }
    function d(e) {
      return new Set(
        o("WAWebUICustomizationStore").getCustomization("" + u + e, _, []),
      );
    }
    function m(t, n) {
      o("WAWebUICustomizationStore").saveCustomization(
        "" + u + t,
        e.filter(function (e) {
          return n.has(e);
        }),
      );
    }
    function p(e, t) {
      var n, r;
      return e === "name"
        ? s._(/*BTDS*/ "Name")
        : e === "phone"
          ? s._(/*BTDS*/ "Phone")
          : e === "email"
            ? s._(/*BTDS*/ "Email")
            : e === "member_tag"
              ? (n = t == null ? void 0 : t.memberTagName) != null
                ? n
                : s._(/*BTDS*/ "Member tag")
              : e === "secondary_member_tag"
                ? (r = t == null ? void 0 : t.secondaryMemberTagName) != null
                  ? r
                  : s._(/*BTDS*/ "Second member tag")
                : e === "status"
                  ? s._(/*BTDS*/ "Status")
                  : e === "groups"
                    ? s._(/*BTDS*/ "Groups")
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            e,
                        );
                      })();
    }
    function _(t) {
      if (!Array.isArray(t)) return null;
      var n = new Set(t);
      return e.filter(function (e) {
        return n.has(e);
      });
    }
    ((l.ORG_ADMIN_PEOPLE_HIDEABLE_COLUMNS = e),
      (l.getOrgAdminPeopleAvailableColumns = c),
      (l.getOrgAdminPeopleHiddenColumns = d),
      (l.saveOrgAdminPeopleHiddenColumns = m),
      (l.getOrgAdminPeopleColumnLabel = p));
  },
  226,
);
