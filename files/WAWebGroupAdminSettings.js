__d(
  "WAWebGroupAdminSettings",
  ["fbt", "WAWebGroupConstants", "WAWebSchemaGroupMetadata"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.announce,
        n = e.memberAddMode,
        r = e.membershipApprovalMode,
        a = e.restrict;
      return t == null || a == null || r == null
        ? null
        : {
            addMembers:
              n == null
                ? null
                : n ===
                  o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD,
            approveNewMembers: r,
            editGroupSettings: !a,
            sendMessages: !t,
          };
    }
    function u(t) {
      var n = t.groupMetadata;
      if (n == null) return null;
      var r = n.announce,
        o = n.memberAddMode,
        a = n.membershipApprovalMode,
        i = n.restrict;
      return e({
        announce: r,
        memberAddMode: o,
        membershipApprovalMode: a,
        restrict: i,
      });
    }
    function c(e, t) {
      return e === "approveNewMembers"
        ? t
          ? s._(/*BTDS*/ "Turn on approval")
          : s._(/*BTDS*/ "Turn off approval")
        : t
          ? s._(/*BTDS*/ "Allow everyone")
          : s._(/*BTDS*/ "Allow only admins");
    }
    function d(e, t) {
      return e === "approveNewMembers"
        ? {
            settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE
              .MEMBERSHIP_APPROVAL_MODE,
            value: t ? 1 : 0,
          }
        : e === "sendMessages"
          ? {
              settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE
                .ANNOUNCEMENT,
              value: t ? 0 : 1,
            }
          : e === "editGroupSettings"
            ? {
                settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE
                  .RESTRICT,
                value: t ? 0 : 1,
              }
            : e === "addMembers"
              ? {
                  settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE
                    .MEMBER_ADD_MODE,
                  value: t ? 1 : 0,
                }
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function m(e) {
      return e === "approveNewMembers"
        ? s._(/*BTDS*/ "Approve new members")
        : e === "sendMessages"
          ? s._(/*BTDS*/ "Send new messages")
          : e === "editGroupSettings"
            ? s._(/*BTDS*/ "Edit group settings")
            : e === "addMembers"
              ? s._(/*BTDS*/ "Add other members")
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function p(e, t) {
      return e === "approveNewMembers"
        ? t
          ? s._(/*BTDS*/ "On")
          : s._(/*BTDS*/ "Off")
        : t
          ? s._(/*BTDS*/ "Everyone")
          : s._(/*BTDS*/ "Only admins");
    }
    ((l.getGroupAdminSettings = e),
      (l.getChatGroupAdminSettings = u),
      (l.getGroupAdminSettingActionLabel = c),
      (l.getGroupPropertyChange = d),
      (l.getGroupAdminSettingLabel = m),
      (l.getGroupAdminSettingValueLabel = p));
  },
  226,
);
