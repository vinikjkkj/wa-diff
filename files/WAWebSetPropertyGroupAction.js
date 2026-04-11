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
      if (
        ![
          o("WAWebGroupConstants").GROUP_SETTING_TYPE.EPHEMERAL,
          o("WAWebGroupConstants").GROUP_SETTING_TYPE.LIMIT_SHARING,
        ].includes(r) &&
        !((d = t.groupMetadata) != null && d.canSetGroupProperty())
      )
        return (c || (c = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      var _ = s._(/*BTDS*/ "Try again."),
        h = function (n) {
          return (
            n === void 0 && (n = !0),
            new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Group setting could not be changed"),
              n
                ? {
                    actionText: _,
                    actionHandler: function () {
                      return g(t, r, a, i);
                    },
                  }
                : void 0,
            )
          );
        },
        y =
          r === o("WAWebGroupConstants").GROUP_SETTING_TYPE.ANNOUNCEMENT ||
          r === o("WAWebGroupConstants").GROUP_SETTING_TYPE.RESTRICT ||
          r ===
            o("WAWebGroupConstants").GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED
            ? 1
            : 0,
        C = a === y ? "off" : "on",
        b = f(r, C),
        v = b[0],
        S = b[1],
        R = new (o("WAWebActionToast.react").ActionType)(v),
        L = function () {
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
          return new (o("WAWebActionToast.react").ActionType)(S);
        },
        E = function (n, a, i) {
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
            h(i)
          );
        },
        k = function (n) {
          var e = o("WAPromiseEach").promiseEach(n, function (e) {
            return o(
              "WAWebMexUpdateGroupPropertyJob",
            ).mexUpdateGroupPropertyJob(t.id.toString(), e);
          });
          return {
            action: e,
            pendingAction: e
              .then(function (e) {
                return L();
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
                  E(n, e.message, t)
                );
              }),
          };
        },
        I = function () {
          var e = o("WAWebGroupModifyInfoJob").setGroupProperty(t.id, r, a);
          return {
            action: e,
            pendingAction: e
              .then(
                function (e) {
                  switch (e == null ? void 0 : e.name) {
                    case "SetPropertyResponseSuccess":
                      return L();
                    case "SetPropertyResponseClientError": {
                      var t = e.value.errorSetPropertyClientErrors.value,
                        n = t.code,
                        r = t.text;
                      return E(n, r);
                    }
                    case "SetPropertyResponseServerError": {
                      var o = e.value.errorServerErrors.value,
                        a = o.code,
                        i = o.text;
                      return E(a, i);
                    }
                  }
                },
                function (e) {
                  var t = e.value.errorServerErrors.value,
                    n = t.code,
                    r = t.text;
                  return E(n, r);
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
                  h()
                );
              }),
          };
        },
        T;
      switch (r) {
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE
          .ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
          T = k([{ allow_non_admin_sub_group_creation: a === 1 }]);
          break;
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE.LIMIT_SHARING:
          T = k([
            {
              limit_sharing: {
                limit_sharing_enabled: a === 1,
                limit_sharing_trigger: "CHAT_SETTING",
              },
            },
          ]);
          break;
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_ADD_MODE: {
          var D,
            x = [{ member_add_mode: a === 1 ? "ALL_MEMBER_ADD" : "ADMIN_ADD" }];
          (a === 0 &&
            ((D = t.groupMetadata) == null ? void 0 : D.memberLinkMode) !==
              o("WAWebGroupMemberLinkMode").MemberLinkMode.ADMIN_LINK &&
            o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsEnabled() &&
            x.push({ member_link_mode: "ADMIN_LINK" }),
            (T = k(x)));
          break;
        }
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_LINK_MODE:
          T = k([
            { member_link_mode: a === 1 ? "ALL_MEMBER_LINK" : "ADMIN_LINK" },
          ]);
          break;
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE
          .MEMBER_SHARE_GROUP_HISTORY_MODE:
          T = k([
            {
              member_share_group_history_mode:
                a === 1 ? "ALL_MEMBER_SHARE" : "ADMIN_SHARE",
            },
          ]);
          break;
      }
      T || (T = I());
      var $ = T,
        P = $.action,
        N = $.pendingAction;
      return (
        o("WAWebToastManager").ToastManager.open(
          m.jsx(o("WAWebActionToast.react").ActionToast, {
            id: i,
            initialAction: R,
            pendingAction: N,
          }),
        ),
        P
      );
    }
    ((l.setGroupProperty = _), (l.getActionString = f));
  },
  226,
);
