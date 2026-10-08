__d(
  "WAWebOrgAdminPeopleMessages",
  ["fbt", "intlNumUtils"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      return e === t
        ? {
            message: s._(
              /*BTDS*/ '_j{"*":"{number of people removed} people removed","_1":"1 person removed"}',
              [s._plural(e, "number of people removed")],
            ),
            success: !0,
          }
        : {
            message:
              e === 0
                ? s._(/*BTDS*/ "Couldn't remove these people. Try again.")
                : s._(
                    /*BTDS*/ '_j{"*":"Removed {number of people removed} of {number of people ticked} people. Try again for the rest.","_1":"Removed {number of people removed} of 1 person. Try again for the rest."}',
                    [
                      s._plural(t, "number of people ticked"),
                      s._param(
                        "number of people removed",
                        r("intlNumUtils").formatNumber(e),
                      ),
                    ],
                  ),
            success: !1,
          };
    }
    function u(e, t, n) {
      var o,
        a =
          n - ((o = t == null ? void 0 : t.alreadyMemberCount) != null ? o : 0);
      return t == null || (a > 0 && t.failedMemberCount === a)
        ? {
            message: s._(
              /*BTDS*/ "Couldn't add these people to {group name}. Try again.",
              [s._param("group name", e)],
            ),
            success: !1,
          }
        : t.failedMemberCount > 0
          ? {
              message: s._(
                /*BTDS*/ '_j{"*":"Added {number of people added} of {number of people ticked} people to {group name}. Try again for the rest.","_1":"Added {number of people added} of 1 person to {group name}. Try again for the rest."}',
                [
                  s._plural(a, "number of people ticked"),
                  s._param(
                    "number of people added",
                    r("intlNumUtils").formatNumber(a - t.failedMemberCount),
                  ),
                  s._param("group name", e),
                ],
              ),
              success: !1,
            }
          : { message: c(e, t, a), success: !0 };
    }
    function c(e, t, n) {
      return n === 0
        ? s._(/*BTDS*/ "Already in {group name}", [s._param("group name", e)])
        : t.invitedMemberCount === 0
          ? s._(
              /*BTDS*/ '_j{"*":"Added {number of people added} people to {group name}","_1":"Added 1 person to {group name}"}',
              [
                s._plural(n, "number of people added"),
                s._param("group name", e),
              ],
            )
          : t.addedMemberCount === 0
            ? s._(
                /*BTDS*/ '_j{"*":"{number of people who need an add request} people need add requests before joining {group name}.","_1":"1 person needs an add request before joining {group name}."}',
                [
                  s._plural(
                    t.invitedMemberCount,
                    "number of people who need an add request",
                  ),
                  s._param("group name", e),
                ],
              )
            : s._(
                /*BTDS*/ '_j{"*":{"*":"Added {number of people added} people to {group name}. {number of people who need an add request} people need add requests before joining.","_1":"Added {number of people added} people to {group name}. 1 person needs an add request before joining."},"_1":{"*":"Added 1 person to {group name}. {number of people who need an add request} people need add requests before joining.","_1":"Added 1 person to {group name}. 1 person needs an add request before joining."}}',
                [
                  s._plural(t.addedMemberCount, "number of people added"),
                  s._plural(
                    t.invitedMemberCount,
                    "number of people who need an add request",
                  ),
                  s._param("group name", e),
                ],
              );
    }
    ((l.getOrgAdminRemovedMembersMessage = e),
      (l.getOrgAdminAddMembersToGroupMessage = u));
  },
  226,
);
