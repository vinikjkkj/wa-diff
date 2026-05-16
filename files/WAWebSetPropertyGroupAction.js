__d(
  "WAWebSetPropertyGroupAction",
  [
    "fbt",
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WAPromiseEach",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebCommunityGroupJourneyEventImpl",
    "WAWebGroupConstants",
    "WAWebGroupGatingUtils",
    "WAWebGroupMemberLinkMode",
    "WAWebGroupModifyInfoJob",
    "WAWebLimitSharingGatingUtils",
    "WAWebLimitSharingUIUtils",
    "WAWebMexUpdateGroupPropertyJob",
    "WAWebMiscErrors",
    "WAWebSendForAdminReviewUtils",
    "WAWebStateUtils",
    "WAWebToastManager",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumSurfaceType",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = {
        announcement: "announce",
        restrict: "restrict",
        no_frequently_forwarded: "noFrequentlyForwarded",
        ephemeral: "ephemeralDuration",
        membership_approval_mode: "membershipApprovalMode",
        report_to_admin_mode: "reportToAdminMode",
        allow_non_admin_sub_group_creation: "allowNonAdminSubGroupCreation",
        member_add_mode: "memberAddMode",
        member_link_mode: "memberLinkMode",
        member_share_group_history_mode: "memberShareGroupHistoryMode",
      };
    function _(e, t, n) {
      return g(o("WAWebStateUtils").unproxy(e), t, n);
    }
    function f(e, t) {
      var n,
        r,
        a =
          ((n = {}),
          (n[(r = o("WAWebGroupConstants")).GROUP_SETTING_TYPE.ANNOUNCEMENT] = {
            on: [
              s._(
                /*BTDS*/ "Allowing all members to send messages to this group",
              ),
              s._(
                /*BTDS*/ "You allowed all members to send messages to this group",
              ),
            ],
            off: [
              s._(
                /*BTDS*/ "Allowing only admins to send messages to this group",
              ),
              s._(
                /*BTDS*/ "You allowed only admins to send messages to this group",
              ),
            ],
          }),
          (n[r.GROUP_SETTING_TYPE.REPORT_TO_ADMIN_MODE] = {
            on: [
              s._(/*BTDS*/ "Allowing reports to admin in this chat"),
              s._(/*BTDS*/ "You turned on reports to admin in this chat"),
            ],
            off: [
              s._(/*BTDS*/ "Disabling reports to admin in this chat"),
              s._(/*BTDS*/ "You turned off reports to admin in this chat"),
            ],
          }),
          (n[r.GROUP_SETTING_TYPE.RESTRICT] = {
            on: [
              s._(/*BTDS*/ "Allowing all members to change this group's info"),
              s._(
                /*BTDS*/ "You allowed all members to change this group's info",
              ),
            ],
            off: [
              s._(/*BTDS*/ "Allowing only admins to change this group's info"),
              s._(
                /*BTDS*/ "You allowed only admins to change this group's info",
              ),
            ],
          }),
          (n[r.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED] = {
            on: [
              s._(
                /*BTDS*/ "Blocking members from sending messages that have been forwarded many times to this group",
              ),
              s._(
                /*BTDS*/ "You blocked members from sending messages that have been forwarded many times to this group",
              ),
            ],
            off: [
              s._(
                /*BTDS*/ "Allowing members to send messages that have been forwarded many times to this group",
              ),
              s._(
                /*BTDS*/ "You allowed members to send messages that have been forwarded many times to this group",
              ),
            ],
          }),
          (n[r.GROUP_SETTING_TYPE.EPHEMERAL] = {
            on: [
              s._(/*BTDS*/ "Turning on disappearing messages in this chat"),
              s._(/*BTDS*/ "You turned on disappearing messages in this chat"),
            ],
            off: [
              s._(/*BTDS*/ "Turning off disappearing messages in this chat"),
              s._(/*BTDS*/ "You turned off disappearing messages in this chat"),
            ],
          }),
          (n[r.GROUP_SETTING_TYPE.MEMBERSHIP_APPROVAL_MODE] = {
            on: [
              s._(/*BTDS*/ "Turning on membership approval mode in this chat"),
              s._(
                /*BTDS*/ "You turned on membership approval mode in this chat",
              ),
            ],
            off: [
              s._(/*BTDS*/ "Turning off membership approval mode in this chat"),
              s._(
                /*BTDS*/ "You turned off membership approval mode in this chat",
              ),
            ],
          }),
          (n[r.GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION] = {
            on: [
              s._(
                /*BTDS*/ "Allowing all community members to add groups in this community",
              ),
              s._(
                /*BTDS*/ "You allowed all community members to add groups in this community",
              ),
            ],
            off: [
              s._(/*BTDS*/ "Allowing only community admins to add groups"),
              s._(
                /*BTDS*/ "You allowed only community admins to add groups in this community",
              ),
            ],
          }),
          (n[r.GROUP_SETTING_TYPE.MEMBER_ADD_MODE] = {
            on: [
              s._(/*BTDS*/ "Allowing all members to add others to this group"),
              s._(
                /*BTDS*/ "You allowed all members to add others to this group",
              ),
            ],
            off: [
              s._(/*BTDS*/ "Allowing only admins to add others to this group"),
              s._(
                /*BTDS*/ "You allowed only admins to add others to this group",
              ),
            ],
          }),
          (n[r.GROUP_SETTING_TYPE.MEMBER_LINK_MODE] = {
            on: [
              s._(
                /*BTDS*/ "Allowing all members to share invite links to this group",
              ),
              s._(
                /*BTDS*/ "You allowed all members to share invite links to this group",
              ),
            ],
            off: [
              s._(
                /*BTDS*/ "Allowing only admins to share invite links to this group",
              ),
              s._(
                /*BTDS*/ "You allowed only admins to share invite links to this group",
              ),
            ],
          }),
          (n[r.GROUP_SETTING_TYPE.LIMIT_SHARING] = o(
            "WAWebLimitSharingUIUtils",
          ).getLimitSharingGroupUpdateActionStrings()),
          (n[r.GROUP_SETTING_TYPE.MEMBER_SHARE_GROUP_HISTORY_MODE] = {
            on: [
              s._(
                /*BTDS*/ "Allowing all members to send message history to new members in this group",
              ),
              s._(
                /*BTDS*/ "You allowed all members to send message history to new members in this group",
              ),
            ],
            off: [
              s._(
                /*BTDS*/ "Allowing only admins to send message history to new members in this group",
              ),
              s._(
                /*BTDS*/ "You allowed only admins to send message history to new members in this group",
              ),
            ],
          }),
          n);
      return a[e][t];
    }
    function g(t, r, a, i) {
      var l, d;
      if ((i === void 0 && (i = o("WAWebActionToast.react").genId()), !r))
        return (c || (c = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      if (
        r === o("WAWebGroupConstants").GROUP_SETTING_TYPE.EPHEMERAL &&
        !((l = t.groupMetadata) != null && l.canSetEphemeralSetting())
      )
        return (c || (c = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      var _ = !1;
      if (
        (r === o("WAWebGroupConstants").GROUP_SETTING_TYPE.EPHEMERAL &&
          (_ = !0),
        r === o("WAWebGroupConstants").GROUP_SETTING_TYPE.LIMIT_SHARING &&
          !o("WAWebLimitSharingGatingUtils").isOpusAdminOnly() &&
          (_ = !0),
        !_ && !((d = t.groupMetadata) != null && d.canSetGroupProperty()))
      )
        return (c || (c = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      var h = s._(/*BTDS*/ "Try again."),
        y = function (n) {
          return (
            n === void 0 && (n = !0),
            new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Group setting could not be changed"),
              n
                ? {
                    actionText: h,
                    actionHandler: function () {
                      return g(t, r, a, i);
                    },
                  }
                : void 0,
            )
          );
        },
        C =
          r === o("WAWebGroupConstants").GROUP_SETTING_TYPE.ANNOUNCEMENT ||
          r === o("WAWebGroupConstants").GROUP_SETTING_TYPE.RESTRICT ||
          r ===
            o("WAWebGroupConstants").GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED
            ? 1
            : 0,
        b = a === C ? "off" : "on",
        v = f(r, b),
        S = v[0],
        R = v[1],
        L = new (o("WAWebActionToast.react").ActionType)(S),
        E = function () {
          if (r !== o("WAWebGroupConstants").GROUP_SETTING_TYPE.LIMIT_SHARING) {
            var e;
            (e = t.groupMetadata) == null || e.set(p[r], a);
          }
          if (
            (r ===
              o("WAWebGroupConstants").GROUP_SETTING_TYPE
                .REPORT_TO_ADMIN_MODE &&
              !a &&
              o("WAWebSendForAdminReviewUtils").clearLastReportTimestamp(t),
            r ===
              o("WAWebGroupConstants").GROUP_SETTING_TYPE
                .ALLOW_NON_ADMIN_SUB_GROUP_CREATION)
          ) {
            var n =
              a === 0
                ? o("WAWebWamEnumChatFilterActionTypes")
                    .CHAT_FILTER_ACTION_TYPES
                    .SELECT_COMMUNITY_ADMINS_CAN_ADD_GROUPS
                : o("WAWebWamEnumChatFilterActionTypes")
                    .CHAT_FILTER_ACTION_TYPES.SELECT_EVERYONE_CAN_ADD_GROUPS;
            new (o(
              "WAWebCommunityGroupJourneyEventImpl",
            ).CommunityGroupJourneyEvent)({
              action: n,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .COMMUNITY_SETTINGS,
              chat: t,
            }).commit();
          }
          return new (o("WAWebActionToast.react").ActionType)(R);
        },
        k = function (n, a, i) {
          return (
            i === void 0 && (i = !0),
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Error while setting property ",
                  "",
                ])),
              r,
            ),
            y(i)
          );
        },
        I = function (n) {
          var e = o("WAPromiseEach").promiseEach(n, function (e) {
            return o(
              "WAWebMexUpdateGroupPropertyJob",
            ).mexUpdateGroupPropertyJob(t.id.toString(), e);
          });
          return {
            action: e,
            pendingAction: e
              .then(function (e) {
                return E();
              })
              .catch(function (e) {
                var t = !0,
                  n = e.code;
                return (
                  e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
                    ((n = e.status),
                    (e.status === 403 ||
                      e.status === 405 ||
                      e.status === 429) &&
                      (t = !1)),
                  k(n, e.message, t)
                );
              }),
          };
        },
        T = function () {
          var e = o("WAWebGroupModifyInfoJob").setGroupProperty(t.id, r, a);
          return {
            action: e,
            pendingAction: e
              .then(
                function (e) {
                  switch (e == null ? void 0 : e.name) {
                    case "SetPropertyResponseSuccess":
                      return E();
                    case "SetPropertyResponseClientError": {
                      var t = e.value.errorSetPropertyClientErrors.value,
                        n = t.code,
                        r = t.text;
                      return k(n, r);
                    }
                    case "SetPropertyResponseServerError": {
                      var o = e.value.errorServerErrors.value,
                        a = o.code,
                        i = o.text;
                      return k(a, i);
                    }
                  }
                },
                function (e) {
                  var t = e.value.errorServerErrors.value,
                    n = t.code,
                    r = t.text;
                  return k(n, r);
                },
              )
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebBackendErrors").ServerStatusCodeError,
                  function (e) {
                    if (e.status === 404)
                      return new (o("WAWebActionToast.react").ActionType)(
                        s
                          ._(/*BTDS*/ "Group setting could not be changed")
                          .toString() +
                          " " +
                          s._(/*BTDS*/ "This group has ended.").toString(),
                      );
                  },
                ),
              )
              .catch(function (e) {
                return (
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Error while setting property",
                      ])),
                  ),
                  y()
                );
              }),
          };
        },
        D;
      switch (r) {
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE
          .ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
          D = I([{ allow_non_admin_sub_group_creation: a === 1 }]);
          break;
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE.LIMIT_SHARING:
          D = I([
            {
              limit_sharing: {
                limit_sharing_enabled: a === 1,
                limit_sharing_trigger: "CHAT_SETTING",
              },
            },
          ]);
          break;
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_ADD_MODE: {
          var x,
            $ = [{ member_add_mode: a === 1 ? "ALL_MEMBER_ADD" : "ADMIN_ADD" }];
          (a === 0 &&
            ((x = t.groupMetadata) == null ? void 0 : x.memberLinkMode) !==
              o("WAWebGroupMemberLinkMode").MemberLinkMode.ADMIN_LINK &&
            o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsEnabled() &&
            $.push({ member_link_mode: "ADMIN_LINK" }),
            (D = I($)));
          break;
        }
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_LINK_MODE:
          D = I([
            { member_link_mode: a === 1 ? "ALL_MEMBER_LINK" : "ADMIN_LINK" },
          ]);
          break;
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE
          .MEMBER_SHARE_GROUP_HISTORY_MODE:
          D = I([
            {
              member_share_group_history_mode:
                a === 1 ? "ALL_MEMBER_SHARE" : "ADMIN_SHARE",
            },
          ]);
          break;
      }
      D || (D = T());
      var P = D,
        N = P.action,
        M = P.pendingAction;
      return (
        o("WAWebToastManager").ToastManager.open(
          m.jsx(o("WAWebActionToast.react").ActionToast, {
            id: i,
            initialAction: L,
            pendingAction: M,
          }),
        ),
        N
      );
    }
    ((l.setGroupProperty = _), (l.getActionString = f));
  },
  226,
);
