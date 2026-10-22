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
        return s._(
          /*BTDS*/ "They will no longer appear in the organization member directory. Existing group chats are unchanged.",
        );
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
        ? s._(
            /*BTDS*/ "People on the organization's list will only be taken off it. Anyone else will no longer appear in the organization member directory. Existing group chats are unchanged.",
          )
        : n
          ? e.length === 1
            ? s._(
                /*BTDS*/ "They'll be taken off the organization's list but will stay in the organization.",
              )
            : s._(
                /*BTDS*/ "They'll be taken off the organization's list. Anyone on it who already joined will stay in the organization.",
              )
          : t
            ? s._(
                /*BTDS*/ "They will no longer appear in the organization member directory and will be taken off the organization's list. Existing group chats are unchanged.",
              )
            : s._(/*BTDS*/ "They'll be taken off the organization's list.");
    }
    function u(e, t, n) {
      return e === "skipped"
        ? null
        : e === "removed" && t
          ? {
              message: s._(
                /*BTDS*/ "{member name} removed from the organization",
                [s._param("member name", n)],
              ),
              success: !0,
            }
          : e === "removed"
            ? {
                message: s._(
                  /*BTDS*/ "{person name} taken off the organization's list",
                  [s._param("person name", n)],
                ),
                success: !0,
              }
            : e === "removed_unreconciled"
              ? {
                  message: s._(
                    /*BTDS*/ "Member removed, but the member list could not be refreshed.",
                  ),
                  success: !1,
                }
              : e === "row_failed"
                ? {
                    message: s._(
                      /*BTDS*/ "{person name} was removed from the organization but is still on its list. Try again.",
                      [s._param("person name", n)],
                    ),
                    success: !1,
                  }
                : e === "failed" && t
                  ? {
                      message: s._(
                        /*BTDS*/ "Couldn't remove this member. Try again.",
                      ),
                      success: !1,
                    }
                  : e === "failed"
                    ? {
                        message: s._(
                          /*BTDS*/ "Couldn't take this person off the organization's list. Try again.",
                        ),
                        success: !1,
                      }
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            e,
                        );
                      })();
    }
    function c(e, t, n) {
      if (e.includes("row_failed"))
        return {
          message: s._(
            /*BTDS*/ "Some people were removed from the organization but are still on its list. Try again.",
          ),
          success: !1,
        };
      var r = e.filter(function (e) {
        return e === "removed" || e === "removed_unreconciled";
      }).length;
      return r !== e.length || !n
        ? d(r, e.length)
        : t
          ? {
              message: s._(
                /*BTDS*/ '_j{"*":"{number of people removed} people removed from the organization or taken off its list","_1":"1 person removed from the organization or taken off its list"}',
                [s._plural(r, "number of people removed")],
              ),
              success: !0,
            }
          : {
              message: s._(
                /*BTDS*/ '_j{"*":"{number of people removed} people taken off the organization\'s list","_1":"1 person taken off the organization\'s list"}',
                [s._plural(r, "number of people removed")],
              ),
              success: !0,
            };
    }
    function d(e, t) {
      return e === t
        ? {
            message: s._(
              /*BTDS*/ '_j{"*":"{number of people removed} people removed from the organization","_1":"1 person removed from the organization"}',
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
    function m(e, t, n, r) {
      var o,
        a = n - r;
      if (r === 0) return p(e, t, a);
      if (
        a === ((o = t == null ? void 0 : t.alreadyMemberCount) != null ? o : 0)
      )
        return {
          message: s._(
            /*BTDS*/ '_j{"*":"{number of invites sent} invites sent to \\u201c{group name}\\u201d","_1":"1 invite sent to \\u201c{group name}\\u201d"}',
            [s._plural(r, "number of invites sent"), s._param("group name", e)],
          ),
          success: !0,
        };
      if (t != null && t.failedMemberCount === 0 && t.invitedMemberCount === 0)
        return {
          message: s._(
            /*BTDS*/ '_j{"*":{"*":"Added {number of people added} people to \\u201c{group name}\\u201d. {number of invites sent} invites sent.","_1":"Added {number of people added} people to \\u201c{group name}\\u201d. 1 invite sent."},"_1":{"*":"Added 1 person to \\u201c{group name}\\u201d. {number of invites sent} invites sent.","_1":"Added 1 person to \\u201c{group name}\\u201d. 1 invite sent."}}',
            [
              s._plural(t.addedMemberCount, "number of people added"),
              s._plural(r, "number of invites sent"),
              s._param("group name", e),
            ],
          ),
          success: !0,
        };
      var i = p(e, t, a),
        l = i.message,
        u = i.success;
      return {
        message: s._(
          /*BTDS*/ '_j{"*":"{what happened to the other ticked people} {number of invites sent} invites sent.","_1":"{what happened to the other ticked people} 1 invite sent."}',
          [
            s._plural(r, "number of invites sent"),
            s._param("what happened to the other ticked people", l),
          ],
        ),
        success: u,
      };
    }
    function p(e, t, n) {
      var o,
        a =
          n - ((o = t == null ? void 0 : t.alreadyMemberCount) != null ? o : 0);
      return t == null || (a > 0 && t.failedMemberCount === a)
        ? {
            message: s._(
              /*BTDS*/ "Couldn't add these people to \u201c{group name}\u201d. Try again.",
              [s._param("group name", e)],
            ),
            success: !1,
          }
        : t.failedMemberCount > 0
          ? {
              message: s._(
                /*BTDS*/ '_j{"*":"Added {number of people added} of {number of people ticked} people to \\u201c{group name}\\u201d. Try again for the rest.","_1":"Added {number of people added} of 1 person to \\u201c{group name}\\u201d. Try again for the rest."}',
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
          : { message: _(e, t, a), success: !0 };
    }
    function _(e, t, n) {
      return n === 0
        ? s._(/*BTDS*/ "Already in \u201c{group name}\u201d", [
            s._param("group name", e),
          ])
        : t.invitedMemberCount === 0
          ? s._(
              /*BTDS*/ '_j{"*":"Added {number of people added} people to \\u201c{group name}\\u201d","_1":"Added 1 person to \\u201c{group name}\\u201d"}',
              [
                s._plural(n, "number of people added"),
                s._param("group name", e),
              ],
            )
          : t.addedMemberCount === 0
            ? s._(
                /*BTDS*/ '_j{"*":"{number of people who need an add request} people need add requests before joining \\u201c{group name}\\u201d.","_1":"1 person needs an add request before joining \\u201c{group name}\\u201d."}',
                [
                  s._plural(
                    t.invitedMemberCount,
                    "number of people who need an add request",
                  ),
                  s._param("group name", e),
                ],
              )
            : s._(
                /*BTDS*/ '_j{"*":{"*":"Added {number of people added} people to \\u201c{group name}\\u201d. {number of people who need an add request} people need add requests before joining.","_1":"Added {number of people added} people to \\u201c{group name}\\u201d. 1 person needs an add request before joining."},"_1":{"*":"Added 1 person to \\u201c{group name}\\u201d. {number of people who need an add request} people need add requests before joining.","_1":"Added 1 person to \\u201c{group name}\\u201d. 1 person needs an add request before joining."}}',
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
    ((l.getOrgAdminRemovePeopleDescription = e),
      (l.getOrgAdminRemovedPersonMessage = u),
      (l.getOrgAdminRemovedPeopleMessage = c),
      (l.getOrgAdminRemovedMembersMessage = d),
      (l.getOrgAdminAddPeopleToGroupMessage = m),
      (l.getOrgAdminAddMembersToGroupMessage = p));
  },
  226,
);
