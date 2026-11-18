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
    "WAWebBackendRuntime",
    "WAWebCommunityGroupJourneyEventImpl",
    "WAWebGroupConstants",
    "WAWebGroupHistoryShareMode",
    "WAWebGroupMemberLinkMode",
    "WAWebGroupModifyInfoJob",
    "WAWebGroupSettingsService",
    "WAWebLimitSharingUIUtils",
    "WAWebMexUpdateGroupPropertyJob",
    "WAWebMiscErrors",
    "WAWebSchemaGroupMetadata",
    "WAWebSendForAdminReviewUtils",
    "WAWebStateUtils",
    "WAWebToastManager",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumSurfaceType",
    "justknobx",
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
      return b({
        chat: o("WAWebStateUtils").unproxy(e),
        settingType: t,
        value: n,
      });
    }
    function g(e, t, n) {
      return b({
        chat: o("WAWebStateUtils").unproxy(e),
        openToast: S,
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
    function y(e, t, n) {
      return t ===
        o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_ADD_MODE && e.isCAG()
        ? C(n)
        : h(t, n);
    }
    function C(e) {
      return e === "on"
        ? [
            s._(/*BTDS*/ "Allowing everyone to add other members"),
            s._(/*BTDS*/ "Everyone can add other members"),
          ]
        : [
            s._(/*BTDS*/ "Allowing only community admins to add other members"),
            s._(/*BTDS*/ "Only community admins can add other members"),
          ];
    }
    function b(t) {
      var a,
        i,
        l = t.chat,
        d = t.openToast,
        f = d === void 0 ? v : d,
        g = t.settingType,
        h = t.toastId,
        C = h === void 0 ? o("WAWebActionToast.react").genId() : h,
        S = t.value;
      if (!g)
        return (c || (c = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      if (
        g === o("WAWebGroupConstants").GROUP_SETTING_TYPE.EPHEMERAL &&
        !((a = l.groupMetadata) != null && a.canSetEphemeralSetting())
      )
        return (c || (c = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      var R = !1;
      if (
        (g === o("WAWebGroupConstants").GROUP_SETTING_TYPE.EPHEMERAL &&
          (R = !0),
        (g === o("WAWebGroupConstants").GROUP_SETTING_TYPE.LIMIT_SHARING ||
          g === o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_ADD_MODE) &&
          l.isCAGAdmin() &&
          (R = !0),
        !R && !((i = l.groupMetadata) != null && i.canSetGroupProperty()))
      )
        return (c || (c = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      var L = s._(/*BTDS*/ "Try again."),
        E = function (t) {
          return (
            t === void 0 && (t = !0),
            new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Group setting could not be changed"),
              t
                ? {
                    actionText: L,
                    actionHandler: function () {
                      return b({
                        chat: l,
                        settingType: g,
                        toastId: C,
                        value: S,
                      });
                    },
                  }
                : void 0,
            )
          );
        },
        k =
          g === o("WAWebGroupConstants").GROUP_SETTING_TYPE.ANNOUNCEMENT ||
          g === o("WAWebGroupConstants").GROUP_SETTING_TYPE.RESTRICT ||
          g ===
            o("WAWebGroupConstants").GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED
            ? 1
            : 0,
        I = S === k ? "off" : "on",
        T = y(l, g, I),
        D = T[0],
        x = T[1],
        $ = new (o("WAWebActionToast.react").ActionType)(D),
        P = function () {
          if (g !== o("WAWebGroupConstants").GROUP_SETTING_TYPE.LIMIT_SHARING) {
            var e;
            (e = l.groupMetadata) == null || e.set(p[g], _(g, S));
          }
          if (
            (g ===
              o("WAWebGroupConstants").GROUP_SETTING_TYPE
                .REPORT_TO_ADMIN_MODE &&
              !S &&
              o("WAWebSendForAdminReviewUtils").clearLastReportTimestamp(l),
            g ===
              o("WAWebGroupConstants").GROUP_SETTING_TYPE
                .ALLOW_NON_ADMIN_SUB_GROUP_CREATION)
          ) {
            var t =
              S === 0
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
              chat: l,
            }).commit();
          }
          return new (o("WAWebActionToast.react").ActionType)(x);
        },
        N = function (n, r, a) {
          return (
            a === void 0 && (a = !0),
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Error while setting property ",
                  "",
                ])),
              g,
            ),
            E(a)
          );
        },
        M = function (t) {
          var e = o("WAPromiseEach").promiseEach(t, function (e) {
            return (
              o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebGroupSettingsService").GroupSettingsService,
                  ).mexUpdateGroupPropertyJob
                : o("WAWebMexUpdateGroupPropertyJob").mexUpdateGroupPropertyJob
            )(l.id.toString(), e);
          });
          return {
            action: e,
            pendingAction: e
              .then(function (e) {
                return P();
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
                  N(n, e.message, t)
                );
              }),
          };
        },
        w = function () {
          var e = (
            o("WAWebBackendRuntime").isWebDiBackendEnabled()
              ? o("WAWebBackendRuntime").runtime(
                  o("WAWebGroupSettingsService").GroupSettingsService,
                ).setGroupProperty
              : o("WAWebGroupModifyInfoJob").setGroupProperty
          )(l.id, g, S);
          return {
            action: e,
            pendingAction: e
              .then(
                function (e) {
                  switch (e == null ? void 0 : e.name) {
                    case "SetPropertyResponseSuccess":
                      return P();
                    case "SetPropertyResponseClientError": {
                      var t = e.value.errorSetPropertyClientErrors.value,
                        n = t.code,
                        r = t.text;
                      return N(n, r);
                    }
                    case "SetPropertyResponseServerError": {
                      var o = e.value.errorServerErrors.value,
                        a = o.code,
                        i = o.text;
                      return N(a, i);
                    }
                  }
                },
                function (e) {
                  var t = e.value.errorServerErrors.value,
                    n = t.code,
                    r = t.text;
                  return N(n, r);
                },
              )
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebBackendErrors").ServerStatusCodeError,
                  function (e) {
                    if (e.status === 404)
                      return new (o("WAWebActionToast.react").ActionType)(
                        (r("justknobx")._("8427")
                          ? s._(/*BTDS*/ "Group setting couldn't be changed")
                          : s._(/*BTDS*/ "Group setting could not be changed")
                        ).toString() +
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
                  E()
                );
              }),
          };
        },
        A;
      switch (g) {
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE
          .ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
          A = M([{ allow_non_admin_sub_group_creation: S === 1 }]);
          break;
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE.LIMIT_SHARING:
          A = M([
            {
              limit_sharing: {
                limit_sharing_enabled: S === 1,
                limit_sharing_trigger: "CHAT_SETTING",
              },
            },
          ]);
          break;
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_ADD_MODE: {
          var F,
            O = [{ member_add_mode: S === 1 ? "ALL_MEMBER_ADD" : "ADMIN_ADD" }];
          (S === 0 &&
            !l.isCAG() &&
            ((F = l.groupMetadata) == null ? void 0 : F.memberLinkMode) !==
              o("WAWebGroupMemberLinkMode").MemberLinkMode.ADMIN_LINK &&
            O.push({ member_link_mode: "ADMIN_LINK" }),
            (A = M(O)));
          break;
        }
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_LINK_MODE:
          A = M([
            { member_link_mode: S === 1 ? "ALL_MEMBER_LINK" : "ADMIN_LINK" },
          ]);
          break;
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE
          .MEMBER_SHARE_GROUP_HISTORY_MODE:
          A = M([
            {
              member_share_group_history_mode:
                S === 1 ? "ALL_MEMBER_SHARE" : "ADMIN_SHARE",
            },
          ]);
          break;
      }
      A || (A = w());
      var B = A,
        W = B.action,
        q = B.pendingAction;
      return (
        f(
          m.jsx(o("WAWebActionToast.react").ActionToast, {
            id: C,
            initialAction: $,
            pendingAction: q,
          }),
        ),
        W
      );
    }
    function v(e) {
      o("WAWebToastManager").ToastManager.open(e);
    }
    function S(e) {}
    ((l.setGroupProperty = f),
      (l.setGroupPropertyWithoutToast = g),
      (l.getActionString = h));
  },
  226,
);
