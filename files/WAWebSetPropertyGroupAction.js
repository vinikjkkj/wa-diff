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
      return y({
        chat: o("WAWebStateUtils").unproxy(e),
        settingType: t,
        value: n,
      });
    }
    function g(e, t, n) {
      return y({
        chat: o("WAWebStateUtils").unproxy(e),
        openToast: b,
        settingType: t,
        value: n,
      });
    }
    function h(e, t) {
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
    function y(t) {
      var r,
        a,
        i = t.chat,
        l = t.openToast,
        d = l === void 0 ? C : l,
        f = t.settingType,
        g = t.toastId,
        b = g === void 0 ? o("WAWebActionToast.react").genId() : g,
        v = t.value;
      if (!f)
        return (c || (c = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      if (
        f === o("WAWebGroupConstants").GROUP_SETTING_TYPE.EPHEMERAL &&
        !((r = i.groupMetadata) != null && r.canSetEphemeralSetting())
      )
        return (c || (c = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      var S = !1;
      if (
        (f === o("WAWebGroupConstants").GROUP_SETTING_TYPE.EPHEMERAL &&
          (S = !0),
        f === o("WAWebGroupConstants").GROUP_SETTING_TYPE.LIMIT_SHARING &&
          !o("WAWebLimitSharingGatingUtils").isOpusAdminOnly() &&
          (S = !0),
        !S && !((a = i.groupMetadata) != null && a.canSetGroupProperty()))
      )
        return (c || (c = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      var R = s._(/*BTDS*/ "Try again."),
        L = function (t) {
          return (
            t === void 0 && (t = !0),
            new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Group setting could not be changed"),
              t
                ? {
                    actionText: R,
                    actionHandler: function () {
                      return y({
                        chat: i,
                        settingType: f,
                        toastId: b,
                        value: v,
                      });
                    },
                  }
                : void 0,
            )
          );
        },
        E =
          f === o("WAWebGroupConstants").GROUP_SETTING_TYPE.ANNOUNCEMENT ||
          f === o("WAWebGroupConstants").GROUP_SETTING_TYPE.RESTRICT ||
          f ===
            o("WAWebGroupConstants").GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED
            ? 1
            : 0,
        k = v === E ? "off" : "on",
        I = h(f, k),
        T = I[0],
        D = I[1],
        x = new (o("WAWebActionToast.react").ActionType)(T),
        $ = function () {
          if (f !== o("WAWebGroupConstants").GROUP_SETTING_TYPE.LIMIT_SHARING) {
            var e;
            (e = i.groupMetadata) == null || e.set(p[f], _(f, v));
          }
          if (
            (f ===
              o("WAWebGroupConstants").GROUP_SETTING_TYPE
                .REPORT_TO_ADMIN_MODE &&
              !v &&
              o("WAWebSendForAdminReviewUtils").clearLastReportTimestamp(i),
            f ===
              o("WAWebGroupConstants").GROUP_SETTING_TYPE
                .ALLOW_NON_ADMIN_SUB_GROUP_CREATION)
          ) {
            var t =
              v === 0
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
          return new (o("WAWebActionToast.react").ActionType)(D);
        },
        P = function (n, r, a) {
          return (
            a === void 0 && (a = !0),
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Error while setting property ",
                  "",
                ])),
              f,
            ),
            L(a)
          );
        },
        N = function (t) {
          var e = o("WAPromiseEach").promiseEach(t, function (e) {
            return o(
              "WAWebMexUpdateGroupPropertyJob",
            ).mexUpdateGroupPropertyJob(i.id.toString(), e);
          });
          return {
            action: e,
            pendingAction: e
              .then(function (e) {
                return $();
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
                  P(n, e.message, t)
                );
              }),
          };
        },
        M = function () {
          var e = o("WAWebGroupModifyInfoJob").setGroupProperty(i.id, f, v);
          return {
            action: e,
            pendingAction: e
              .then(
                function (e) {
                  switch (e == null ? void 0 : e.name) {
                    case "SetPropertyResponseSuccess":
                      return $();
                    case "SetPropertyResponseClientError": {
                      var t = e.value.errorSetPropertyClientErrors.value,
                        n = t.code,
                        r = t.text;
                      return P(n, r);
                    }
                    case "SetPropertyResponseServerError": {
                      var o = e.value.errorServerErrors.value,
                        a = o.code,
                        i = o.text;
                      return P(a, i);
                    }
                  }
                },
                function (e) {
                  var t = e.value.errorServerErrors.value,
                    n = t.code,
                    r = t.text;
                  return P(n, r);
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
                  L()
                );
              }),
          };
        },
        w;
      switch (f) {
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE
          .ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
          w = N([{ allow_non_admin_sub_group_creation: v === 1 }]);
          break;
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE.LIMIT_SHARING:
          w = N([
            {
              limit_sharing: {
                limit_sharing_enabled: v === 1,
                limit_sharing_trigger: "CHAT_SETTING",
              },
            },
          ]);
          break;
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_ADD_MODE: {
          var A,
            F = [{ member_add_mode: v === 1 ? "ALL_MEMBER_ADD" : "ADMIN_ADD" }];
          (v === 0 &&
            ((A = i.groupMetadata) == null ? void 0 : A.memberLinkMode) !==
              o("WAWebGroupMemberLinkMode").MemberLinkMode.ADMIN_LINK &&
            F.push({ member_link_mode: "ADMIN_LINK" }),
            (w = N(F)));
          break;
        }
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_LINK_MODE:
          w = N([
            { member_link_mode: v === 1 ? "ALL_MEMBER_LINK" : "ADMIN_LINK" },
          ]);
          break;
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE
          .MEMBER_SHARE_GROUP_HISTORY_MODE:
          w = N([
            {
              member_share_group_history_mode:
                v === 1 ? "ALL_MEMBER_SHARE" : "ADMIN_SHARE",
            },
          ]);
          break;
      }
      w || (w = M());
      var O = w,
        B = O.action,
        W = O.pendingAction;
      return (
        d(
          m.jsx(o("WAWebActionToast.react").ActionToast, {
            id: b,
            initialAction: x,
            pendingAction: W,
          }),
        ),
        B
      );
    }
    function C(e) {
      o("WAWebToastManager").ToastManager.open(e);
    }
    function b(e) {}
    ((l.setGroupProperty = f),
      (l.setGroupPropertyWithoutToast = g),
      (l.getActionString = h));
  },
  226,
);
