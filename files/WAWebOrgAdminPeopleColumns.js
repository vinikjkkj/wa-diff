__d(
  "WAWebOrgAdminPeopleColumns",
  ["fbt", "WAWebUICustomizationStore"],
  function (t, n, r, o, a, i, l, s) {
    var e = ["phone", "email", "member_tag", "status", "groups"],
      u = "org_admin_people_hidden_columns:";
    function c(t, n) {
      return e.filter(function (e) {
        return (e !== "email" || t) && (e !== "groups" || n);
      });
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
    function p(e) {
      return e === "name"
        ? s._(/*BTDS*/ "Name")
        : e === "phone"
          ? s._(/*BTDS*/ "Phone")
          : e === "email"
            ? s._(/*BTDS*/ "Email")
            : e === "member_tag"
              ? s._(/*BTDS*/ "Member tag")
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
