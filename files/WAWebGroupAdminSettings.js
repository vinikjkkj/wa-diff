__d(
  "WAWebGroupAdminSettings",
  ["fbt", "WAWebGroupConstants", "WAWebSchemaGroupMetadata"],
  function (t, n, r, o, a, i, l, s) {
    var e = [
      "sendMessages",
      "editGroupSettings",
      "addMembers",
      "approveNewMembers",
    ];
    function u(e) {
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
    function c(e) {
      var t = e.groupMetadata;
      if (t == null) return null;
      var n = t.announce,
        r = t.memberAddMode,
        o = t.membershipApprovalMode,
        a = t.restrict;
      return u({
        announce: n,
        memberAddMode: r,
        membershipApprovalMode: o,
        restrict: a,
      });
    }
    function d(e) {
      return e === "approveNewMembers";
    }
    function m(e, t, n, r) {
      return t === 0 && n === 0
        ? null
        : t === 0 || n === 0
          ? r > 0
            ? null
            : g(e, n === 0)
          : e === "sendMessages"
            ? s._(
                /*BTDS*/ '_j{"*":{"*":"Only admins can send in {number} groups, everyone in {enabledCount}"},"_1":{"*":"Only admins can send in 1 group, everyone in {enabledCount}"}}',
                [s._plural(n, "number"), s._param("enabledCount", t, [0])],
              )
            : e === "editGroupSettings"
              ? s._(
                  /*BTDS*/ '_j{"*":{"*":"Only admins can edit in {number} groups, everyone in {enabledCount}"},"_1":{"*":"Only admins can edit in 1 group, everyone in {enabledCount}"}}',
                  [s._plural(n, "number"), s._param("enabledCount", t, [0])],
                )
              : e === "addMembers"
                ? s._(
                    /*BTDS*/ '_j{"*":{"*":"Only admins can add members in {number} groups, everyone in {enabledCount}"},"_1":{"*":"Only admins can add members in 1 group, everyone in {enabledCount}"}}',
                    [s._plural(n, "number"), s._param("enabledCount", t, [0])],
                  )
                : e === "approveNewMembers"
                  ? s._(
                      /*BTDS*/ '_j{"*":{"*":"On in {number} groups, off in {disabledCount}"},"_1":{"*":"On in 1 group, off in {disabledCount}"}}',
                      [
                        s._plural(t, "number"),
                        s._param("disabledCount", n, [0]),
                      ],
                    )
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          e,
                      );
                    })();
    }
    function p(e) {
      return e === "sendMessages"
        ? s._(/*BTDS*/ "Choose who can send messages in the group.")
        : e === "editGroupSettings"
          ? s._(
              /*BTDS*/ "Choose who can change the group name, icon, description and disappearing message timer, and pin, keep or unkeep messages.",
            )
          : e === "addMembers"
            ? s._(/*BTDS*/ "Choose who can add people to the group.")
            : e === "approveNewMembers"
              ? s._(
                  /*BTDS*/ "When turned on, admins must approve anyone who wants to join the group. Requests to join show in the Requests tab.",
                )
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function _(e, t) {
      return e === "sendMessages"
        ? t
          ? s._(/*BTDS*/ "Everyone can send")
          : s._(/*BTDS*/ "Only admins can send")
        : e === "editGroupSettings"
          ? t
            ? s._(/*BTDS*/ "Everyone can edit")
            : s._(/*BTDS*/ "Only admins can edit")
          : e === "addMembers"
            ? t
              ? s._(/*BTDS*/ "Everyone can add members")
              : s._(/*BTDS*/ "Only admins can add members")
            : e === "approveNewMembers"
              ? t
                ? s._(/*BTDS*/ "Approval on")
                : s._(/*BTDS*/ "Approval off")
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function f(e, t) {
      return e === "approveNewMembers"
        ? t
          ? s._(/*BTDS*/ "Turn on approval")
          : s._(/*BTDS*/ "Turn off approval")
        : t
          ? s._(/*BTDS*/ "Allow everyone")
          : s._(/*BTDS*/ "Allow only admins");
    }
    function g(e, t) {
      return e === "sendMessages"
        ? t
          ? s._(/*BTDS*/ "Everyone can send in every group")
          : s._(/*BTDS*/ "Only admins can send in every group")
        : e === "editGroupSettings"
          ? t
            ? s._(/*BTDS*/ "Everyone can edit in every group")
            : s._(/*BTDS*/ "Only admins can edit in every group")
          : e === "addMembers"
            ? t
              ? s._(/*BTDS*/ "Everyone can add members in every group")
              : s._(/*BTDS*/ "Only admins can add members in every group")
            : e === "approveNewMembers"
              ? t
                ? s._(/*BTDS*/ "On in every group")
                : s._(/*BTDS*/ "Off in every group")
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function h(e, t) {
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
    function y(e) {
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
    function C(e, t) {
      return e === "approveNewMembers"
        ? t
          ? s._(/*BTDS*/ "On")
          : s._(/*BTDS*/ "Off")
        : t
          ? s._(/*BTDS*/ "Everyone")
          : s._(/*BTDS*/ "Only admins");
    }
    ((l.GROUP_ADMIN_SETTINGS = e),
      (l.getGroupAdminSettings = u),
      (l.getChatGroupAdminSettings = c),
      (l.getRestrictiveValue = d),
      (l.getGroupAdminSettingSummary = m),
      (l.getGroupAdminSettingDescription = p),
      (l.getGroupAdminSettingValueTitle = _),
      (l.getGroupAdminSettingActionLabel = f),
      (l.getGroupPropertyChange = h),
      (l.getGroupAdminSettingLabel = y),
      (l.getGroupAdminSettingValueLabel = C));
  },
  226,
);
