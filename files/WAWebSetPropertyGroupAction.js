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
    "WAWebGroupHistoryShareMode",
    "WAWebGroupMemberLinkMode",
    "WAWebGroupModifyInfoJob",
    "WAWebLimitSharingGatingUtils",
    "WAWebLimitSharingUIUtils",
    "WAWebMexUpdateGroupPropertyJob",
    "WAWebMiscErrors",
    "WAWebSchemaGroupMetadata",
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
    function _(e, t) {
      return e === o("WAWebGroupConstants").GROUP_SETTING_TYPE.EPHEMERAL
        ? t
        : e === o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_ADD_MODE
          ? t === 1
            ? o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD
            : o("WAWebSchemaGroupMetadata").MemberAddMode.ADMIN_ADD
          : e === o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_LINK_MODE
            ? t === 1
              ? o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK
              : o("WAWebGroupMemberLinkMode").MemberLinkMode.ADMIN_LINK
            : e ===
                o("WAWebGroupConstants").GROUP_SETTING_TYPE
                  .MEMBER_SHARE_GROUP_HISTORY_MODE
              ? t === 1
                ? o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode
                    .ALL_MEMBER_SHARE
                : o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode
                    .ADMIN_SHARE
              : t === 1;
    }
    function f(e, t, n) {
      return h({
        chat: o("WAWebStateUtils").unproxy(e),
        settingType: t,
        value: n,
      });
    }
    function g(e, t) {
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
    function h(t) {
      var r,
        a,
        i = t.chat,
        l = t.settingType,
        d = t.toastId,
        f = d === void 0 ? o("WAWebActionToast.react").genId() : d,
        y = t.value;
      if (!l)
        return (c || (c = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      if (
        l === o("WAWebGroupConstants").GROUP_SETTING_TYPE.EPHEMERAL &&
        !((r = i.groupMetadata) != null && r.canSetEphemeralSetting())
      )
        return (c || (c = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      var C = !1;
      if (
        (l === o("WAWebGroupConstants").GROUP_SETTING_TYPE.EPHEMERAL &&
          (C = !0),
        l === o("WAWebGroupConstants").GROUP_SETTING_TYPE.LIMIT_SHARING &&
          !o("WAWebLimitSharingGatingUtils").isOpusAdminOnly() &&
          (C = !0),
        !C && !((a = i.groupMetadata) != null && a.canSetGroupProperty()))
      )
        return (c || (c = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      var b = s._(/*BTDS*/ "Try again."),
        v = function (t) {
          return (
            t === void 0 && (t = !0),
            new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Group setting could not be changed"),
              t
                ? {
                    actionText: b,
                    actionHandler: function () {
                      return h({
                        chat: i,
                        settingType: l,
                        toastId: f,
                        value: y,
                      });
                    },
                  }
                : void 0,
            )
          );
        },
        S =
          l === o("WAWebGroupConstants").GROUP_SETTING_TYPE.ANNOUNCEMENT ||
          l === o("WAWebGroupConstants").GROUP_SETTING_TYPE.RESTRICT ||
          l ===
            o("WAWebGroupConstants").GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED
            ? 1
            : 0,
        R = y === S ? "off" : "on",
        L = g(l, R),
        E = L[0],
        k = L[1],
        I = new (o("WAWebActionToast.react").ActionType)(E),
        T = function () {
          if (l !== o("WAWebGroupConstants").GROUP_SETTING_TYPE.LIMIT_SHARING) {
            var e;
            (e = i.groupMetadata) == null || e.set(p[l], _(l, y));
          }
          if (
            (l ===
              o("WAWebGroupConstants").GROUP_SETTING_TYPE
                .REPORT_TO_ADMIN_MODE &&
              !y &&
              o("WAWebSendForAdminReviewUtils").clearLastReportTimestamp(i),
            l ===
              o("WAWebGroupConstants").GROUP_SETTING_TYPE
                .ALLOW_NON_ADMIN_SUB_GROUP_CREATION)
          ) {
            var t =
              y === 0
                ? o("WAWebWamEnumChatFilterActionTypes")
                    .CHAT_FILTER_ACTION_TYPES
                    .SELECT_COMMUNITY_ADMINS_CAN_ADD_GROUPS
                : o("WAWebWamEnumChatFilterActionTypes")
                    .CHAT_FILTER_ACTION_TYPES.SELECT_EVERYONE_CAN_ADD_GROUPS;
            new (o(
              "WAWebCommunityGroupJourneyEventImpl",
            ).CommunityGroupJourneyEvent)({
              action: t,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .COMMUNITY_SETTINGS,
              chat: i,
            }).commit();
          }
          return new (o("WAWebActionToast.react").ActionType)(k);
        },
        D = function (n, r, a) {
          return (
            a === void 0 && (a = !0),
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Error while setting property ",
                  "",
                ])),
              l,
            ),
            v(a)
          );
        },
        x = function (t) {
          var e = o("WAPromiseEach").promiseEach(t, function (e) {
            return o(
              "WAWebMexUpdateGroupPropertyJob",
            ).mexUpdateGroupPropertyJob(i.id.toString(), e);
          });
          return {
            action: e,
            pendingAction: e
              .then(function (e) {
                return T();
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
                  D(n, e.message, t)
                );
              }),
          };
        },
        $ = function () {
          var e = o("WAWebGroupModifyInfoJob").setGroupProperty(i.id, l, y);
          return {
            action: e,
            pendingAction: e
              .then(
                function (e) {
                  switch (e == null ? void 0 : e.name) {
                    case "SetPropertyResponseSuccess":
                      return T();
                    case "SetPropertyResponseClientError": {
                      var t = e.value.errorSetPropertyClientErrors.value,
                        n = t.code,
                        r = t.text;
                      return D(n, r);
                    }
                    case "SetPropertyResponseServerError": {
                      var o = e.value.errorServerErrors.value,
                        a = o.code,
                        i = o.text;
                      return D(a, i);
                    }
                  }
                },
                function (e) {
                  var t = e.value.errorServerErrors.value,
                    n = t.code,
                    r = t.text;
                  return D(n, r);
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
                  v()
                );
              }),
          };
        },
        P;
      switch (l) {
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE
          .ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
          P = x([{ allow_non_admin_sub_group_creation: y === 1 }]);
          break;
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE.LIMIT_SHARING:
          P = x([
            {
              limit_sharing: {
                limit_sharing_enabled: y === 1,
                limit_sharing_trigger: "CHAT_SETTING",
              },
            },
          ]);
          break;
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_ADD_MODE: {
          var N,
            M = [{ member_add_mode: y === 1 ? "ALL_MEMBER_ADD" : "ADMIN_ADD" }];
          (y === 0 &&
            ((N = i.groupMetadata) == null ? void 0 : N.memberLinkMode) !==
              o("WAWebGroupMemberLinkMode").MemberLinkMode.ADMIN_LINK &&
            M.push({ member_link_mode: "ADMIN_LINK" }),
            (P = x(M)));
          break;
        }
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_LINK_MODE:
          P = x([
            { member_link_mode: y === 1 ? "ALL_MEMBER_LINK" : "ADMIN_LINK" },
          ]);
          break;
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE
          .MEMBER_SHARE_GROUP_HISTORY_MODE:
          P = x([
            {
              member_share_group_history_mode:
                y === 1 ? "ALL_MEMBER_SHARE" : "ADMIN_SHARE",
            },
          ]);
          break;
      }
      P || (P = $());
      var w = P,
        A = w.action,
        F = w.pendingAction;
      return (
        o("WAWebToastManager").ToastManager.open(
          m.jsx(o("WAWebActionToast.react").ActionToast, {
            id: f,
            initialAction: I,
            pendingAction: F,
          }),
        ),
        A
      );
    }
    ((l.setGroupProperty = f), (l.getActionString = g));
  },
  226,
);
