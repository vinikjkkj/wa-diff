__d(
  "WAWebOrgAdminPeopleMessages",
  ["fbt", "WAWebOrgAdminPeople", "intlNumUtils"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      if (
        e.every(function (e) {
          return e.rosterEntryIDs.length === 0;
        })
      )
        return s._(/*BTDS*/ "");
      var t = e.some(function (e) {
          return e.memberLID != null;
        }),
        n = e.some(function (e) {
          return (
            e.memberLID == null &&
            o("WAWebOrgAdminPeople").isOrgAdminPersonRemovalJoined(e)
          );
        });
      return n && t
        ? s._(/*BTDS*/ "")
        : n
          ? e.length === 1
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "")
          : t
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "");
    }
    function u(e, t) {
      return t
        ? s._(/*BTDS*/ "", [s._param("person name", e)])
        : s._(/*BTDS*/ "", [s._param("person name", e)]);
    }
    function c(e) {
      return s._(/*BTDS*/ "", [s._plural(e, "number")]);
    }
    function d(e, t, n) {
      return e === "skipped"
        ? null
        : e === "removed" && t
          ? {
              message: s._(/*BTDS*/ "", [s._param("member name", n)]),
              success: !0,
            }
          : e === "removed"
            ? {
                message: s._(/*BTDS*/ "", [s._param("person name", n)]),
                success: !0,
              }
            : e === "removed_unreconciled"
              ? { message: s._(/*BTDS*/ ""), success: !1 }
              : e === "row_failed"
                ? {
                    message: s._(/*BTDS*/ "", [s._param("person name", n)]),
                    success: !1,
                  }
                : e === "failed" && t
                  ? { message: s._(/*BTDS*/ ""), success: !1 }
                  : e === "failed"
                    ? { message: s._(/*BTDS*/ ""), success: !1 }
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            e,
                        );
                      })();
    }
    function m(e, t, n) {
      if (e.includes("row_failed"))
        return { message: s._(/*BTDS*/ ""), success: !1 };
      var r = e.filter(function (e) {
        return e === "removed" || e === "removed_unreconciled";
      }).length;
      return r !== e.length || !n
        ? p(r, e.length)
        : t
          ? {
              message: s._(/*BTDS*/ "", [
                s._plural(r, "number of people removed"),
              ]),
              success: !0,
            }
          : {
              message: s._(/*BTDS*/ "", [
                s._plural(r, "number of people removed"),
              ]),
              success: !0,
            };
    }
    function p(e, t) {
      return e === t
        ? {
            message: s._(/*BTDS*/ "", [
              s._plural(e, "number of people removed"),
            ]),
            success: !0,
          }
        : {
            message:
              e === 0
                ? s._(/*BTDS*/ "")
                : s._(/*BTDS*/ "", [
                    s._plural(t, "number of people ticked"),
                    s._param(
                      "number of people removed",
                      r("intlNumUtils").formatNumber(e),
                    ),
                  ]),
            success: !1,
          };
    }
    function _(e, t, n, r) {
      var o,
        a = n - r;
      if (r === 0) return f(e, t, a);
      if (
        a === ((o = t == null ? void 0 : t.alreadyMemberCount) != null ? o : 0)
      )
        return {
          message: s._(/*BTDS*/ "", [
            s._plural(r, "number of invites sent"),
            s._param("group name", e),
          ]),
          success: !0,
        };
      if (t != null && t.failedMemberCount === 0 && t.invitedMemberCount === 0)
        return {
          message: s._(/*BTDS*/ "", [
            s._plural(t.addedMemberCount, "number of people added"),
            s._plural(r, "number of invites sent"),
            s._param("group name", e),
          ]),
          success: !0,
        };
      var i = f(e, t, a),
        l = i.message,
        u = i.success;
      return {
        message: s._(/*BTDS*/ "", [
          s._plural(r, "number of invites sent"),
          s._param("what happened to the other ticked people", l),
        ]),
        success: u,
      };
    }
    function f(e, t, n) {
      var o,
        a =
          n - ((o = t == null ? void 0 : t.alreadyMemberCount) != null ? o : 0);
      return t == null || (a > 0 && t.failedMemberCount === a)
        ? {
            message: s._(/*BTDS*/ "", [s._param("group name", e)]),
            success: !1,
          }
        : t.failedMemberCount > 0
          ? {
              message: s._(/*BTDS*/ "", [
                s._plural(a, "number of people ticked"),
                s._param(
                  "number of people added",
                  r("intlNumUtils").formatNumber(a - t.failedMemberCount),
                ),
                s._param("group name", e),
              ]),
              success: !1,
            }
          : { message: g(e, t, a), success: !0 };
    }
    function g(e, t, n) {
      return n === 0
        ? s._(/*BTDS*/ "", [s._param("group name", e)])
        : t.invitedMemberCount === 0
          ? s._(/*BTDS*/ "", [
              s._plural(n, "number of people added"),
              s._param("group name", e),
            ])
          : t.addedMemberCount === 0
            ? s._(/*BTDS*/ "", [
                s._plural(
                  t.invitedMemberCount,
                  "number of people who need an add request",
                ),
                s._param("group name", e),
              ])
            : s._(/*BTDS*/ "", [
                s._plural(t.addedMemberCount, "number of people added"),
                s._plural(
                  t.invitedMemberCount,
                  "number of people who need an add request",
                ),
                s._param("group name", e),
              ]);
    }
    ((l.getOrgAdminRemovePeopleDescription = e),
      (l.getOrgAdminPersonInviteSentMessage = u),
      (l.getOrgAdminInvitesResentMessage = c),
      (l.getOrgAdminRemovedPersonMessage = d),
      (l.getOrgAdminRemovedPeopleMessage = m),
      (l.getOrgAdminRemovedMembersMessage = p),
      (l.getOrgAdminAddPeopleToGroupMessage = _),
      (l.getOrgAdminAddMembersToGroupMessage = f));
  },
  226,
);
