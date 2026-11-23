__d(
  "WAWebOrgLeaveJob",
  ["WALogger", "WAWebDBOrg", "WAWebOrgAdminGraphQL", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return o("WAWebOrgAdminGraphQL").leaveOrg(e);
    }
    async function u(t) {
      try {
        return (await o("WAWebDBOrg").removeOrg(t), !0);
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-leave] deleting the org that was left failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("org-leave-store-failed"),
          !1
        );
      }
    }
    ((l.leaveOrg = s), (l.removeLeftOrg = u));
  },
  98,
);
