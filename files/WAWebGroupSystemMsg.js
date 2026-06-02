__d(
  "WAWebGroupSystemMsg",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebApiParticipantStore",
    "WAWebBotGroupGatingUtils",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebCommunityGatingUtils",
    "WAWebContactSystemMsg",
    "WAWebDBCommunity",
    "WAWebDBGroupsGroupMetadata",
    "WAWebGroupGatingUtils",
    "WAWebGroupMemberLinkMode",
    "WAWebGroupType",
    "WAWebGroupUtils",
    "WAWebGroupsParticipantsApi",
    "WAWebHandleGroupNotificationConst",
    "WAWebLimitSharingModelUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebPairList",
    "WAWebProfilePicConstants",
    "WAWebRequestMethodType",
    "WAWebSchemaGroupMetadata",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y;
    function C(e, t) {
      var n,
        a,
        i,
        l = e.chatId,
        s =
          (n = (a = t.owner) != null ? a : e.author) != null
            ? n
            : o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
        u = o("WAWebGroupUtils").amIGroupAdminGivenParticipants(t.participants),
        c = l,
        d = !1,
        m = t.subject,
        p,
        _;
      if (t.defaultSubgroup === !0) {
        var f;
        ((p = "community_create"),
          t.parentGroup && (_ = [t.parentGroup, t.subject]),
          (s = (f = t.owner) != null ? f : e.author));
      } else if (
        t.generalSubgroup === !0 &&
        u &&
        o("WAWebCommunityGatingUtils").communityGeneralChatUIEnabled()
      ) {
        var g;
        ((p = "general_chat_add"),
          (_ = ["created", t.subject]),
          (s = (g = t.owner) != null ? g : e.author));
      } else {
        var h;
        s = (h = t.owner) != null ? h : e.author;
        var y = t.membershipApprovalMode === !0 ? "true" : "false",
          C = t.hiddenSubgroup === !0 ? "true" : "false";
        t.parentGroup && t.participants.length === 1
          ? ((_ = [t.parentGroup, t.parentGroupSubject, t.subject, y, C]),
            (p = "empty_subgroup_create"))
          : (p = "create");
      }
      return {
        id: new (r("WAWebMsgKey"))({
          remote: c,
          fromMe: d,
          participant: s,
          id: N(e, p),
        }),
        author: s,
        body: m,
        from: l,
        recipients: [],
        subtype: p,
        t: (i = t.creation) != null ? i : e.ts,
        type: "gp2",
        kind: o("WAWebMsgType").MsgKind.Gp2,
        templateParams: _,
      };
    }
    async function b(t, n, r, a) {
      var i = n.participants.find(function (e) {
        var t = e.id,
          n = e.isAdmin;
        return o("WAWebUserPrefsMeUser").isMeAccount(t) && n;
      });
      function l() {
        return !r && !i && n.defaultSubgroup === !0
          ? [
              o("WAWebContactSystemMsg").genNotificationMsg(n.id, {
                type: "notification_template",
                kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
                subtype: "cag_masked_thread_created",
                templateParams: [],
              }),
            ]
          : [];
      }
      function s() {
        return r ? [] : [C(t, n)];
      }
      function u() {
        var e = n.ephemeralDuration;
        return t.author && t.ts != null && e != null && e > 0
          ? [E(t.chatId, t.ts, t.author, e)]
          : [];
      }
      async function c() {
        return a == null
          ? []
          : (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[CAG system message] participantAddMsg: participant add message with actionType: ",
                  "",
                ])),
              a.actionType,
            ),
            [await R({ meta: t, action: a, dbIsStale: !0 })].filter(Boolean));
      }
      async function d() {
        if (n.limitSharingEnabled === !0) {
          var e = await o(
            "WAWebLimitSharingModelUtils",
          ).genLimitSharingSystemMessageOnPersistedChat({
            chatWID: t.chatId,
            sharingLimited: n.limitSharingEnabled,
          });
          if (e) return [e];
        }
        return [];
      }
      return (await Promise.all([l(), s(), u(), c(), d()]))
        .filter(Boolean)
        .flat();
    }
    async function v(e, t) {
      var n = e.parentGroupId;
      if (!n) return !1;
      var r = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(n);
      return (
        !r ||
        (r != null &&
          (
            await o("WAWebDBCommunity").getJoinedSubgroups(
              o("WAWebWidFactory").createWid(r.id),
            )
          ).length <= t)
      );
    }
    async function S(e, t, n) {
      var r,
        a = e.author != null && o("WAWebUserPrefsMeUser").isMeAccount(e.author),
        i,
        l;
      if (
        !a &&
        (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD ||
          t.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE ||
          t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DEMOTE ||
          t.actionType ===
            o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_DEMOTE)
      )
        ((i = t.participants.some(function (e) {
          return o("WAWebUserPrefsMeUser").isMeAccount(e.id);
        })),
          (l = t.participants.length));
      else return !1;
      if (i) return !1;
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[CAG system message] actionType: ",
            " totalParticipants: ",
            "",
          ])),
        t.actionType,
        l,
      );
      var u = await o("WAWebGroupsParticipantsApi").getParticipants(n),
        c = o("WAWebGroupUtils").amIGroupAdmin(
          (r = u == null ? void 0 : u.admins) != null ? r : [],
        );
      return !c;
    }
    async function R(e) {
      var t = e.action,
        n = e.dbIsStale,
        a = e.meta,
        i = e.ts,
        l = a.chatId,
        s = a.isAdmin,
        u = s === void 0 ? !1 : s,
        c =
          (a.author && o("WAWebWidFactory").asUserWidOrThrow(a.author)) ||
          void 0,
        d = l,
        m = !1,
        p = null,
        _ = [],
        f = c,
        g = t.actionType,
        h = null,
        y,
        C = t.parentGroupId,
        b = n
          ? null
          : await o("WAWebHandleGroupNotificationConst").getIsCagById(l),
        R = b === !0 ? await S(a, t, l) : !1;
      if (R) return null;
      switch (t.actionType) {
        case o("WAWebGroupType").GROUP_ACTIONS.SUBJECT:
          p = t.subject;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.MODIFY:
          _ = t.participants.map(function (e) {
            var t = e.id;
            return t;
          });
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.ADD:
          if (t.reason === o("WAWebGroupType").ADD_REASON.INVITE)
            if (
              C &&
              t.participants.some(function (e) {
                var t = e.id;
                return o("WAWebUserPrefsMeUser").isMeAccount(t);
              })
            )
              if (
                t.generalSubgroup === !0 &&
                o("WAWebCommunityGatingUtils").communityGeneralChatUIEnabled()
              ) {
                var L;
                ((g = "general_chat_add"),
                  (h = [
                    "linked_group_join",
                    (L = t.groupName) != null ? L : "",
                  ]));
              } else if (t.defaultSubgroup === !0) {
                var E;
                ((g = "community_invite_rich"),
                  (h = [C, (E = t.groupName) != null ? E : ""]));
              } else {
                var k;
                g = "sub_group_invite_rich";
                var I = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(
                  C,
                );
                h = [C, (k = I == null ? void 0 : I.subject) != null ? k : ""];
              }
            else g = "invite";
          else if (
            t.reason === o("WAWebGroupType").ADD_REASON.LINKED_GROUP_JOIN
          )
            if (
              t.generalSubgroup === !0 &&
              C != null &&
              t.participants.some(function (e) {
                var t = e.id;
                return o("WAWebUserPrefsMeUser").isMeAccount(t);
              }) &&
              o("WAWebCommunityGatingUtils").communityGeneralChatUIEnabled()
            ) {
              var T;
              ((g = "general_chat_add"),
                (h = [
                  "linked_group_join",
                  (T = t.groupName) != null ? T : "",
                ]));
            } else g = "linked_group_join";
          else if (t.reason === o("WAWebGroupType").ADD_REASON.AUTO_ADD) {
            if (C) {
              var D, x;
              ((h = [
                C,
                (D = t.groupName) != null ? D : "",
                (x = t.contextGroupId) != null ? x : "",
              ]),
                (g = "subgroup_admin_triggered_auto_add"));
            } else if (((g = "auto_add"), await v(t, 2))) {
              var $;
              h = [t.parentGroupId, ($ = t.groupName) != null ? $ : ""];
            }
          } else if (
            t.reason ===
            o("WAWebGroupType").ADD_REASON.DEFAULT_SUBGROUP_ADMIN_ADD
          ) {
            if (C) {
              var P;
              ((g = "community_participant_add_rich"),
                (h = [C, (P = t.groupName) != null ? P : ""]));
            } else if (((g = "default_sub_group_admin_add"), await v(t, 1))) {
              var M;
              h = [t.parentGroupId, (M = t.groupName) != null ? M : ""];
            }
          } else if (
            t.reason === o("WAWebGroupType").ADD_REASON.DEFAULT_SUBGROUP_PROMOTE
          )
            g = "default_sub_group_promote";
          else if (t.reason === o("WAWebGroupType").ADD_REASON.INVITE_AUTO_ADD)
            if (
              C &&
              t.defaultSubgroup &&
              t.participants.some(function (e) {
                var t = e.id;
                return o("WAWebUserPrefsMeUser").isMeAccount(t);
              })
            ) {
              var w, A;
              ((h = [
                C,
                (w = t.groupName) != null ? w : "",
                (A = t.contextGroupId) != null ? A : "",
              ]),
                (g = "subgroup_admin_triggered_invite_auto_add"));
            } else
              ((g = "invite_auto_add"),
                t.contextGroupId &&
                  ((h = [t.contextGroupId, ""]),
                  (await v(t, 2)) ? h.push("false") : h.push("true")));
          else if (
            t.participants.some(function (e) {
              var t = e.id;
              return o("WAWebUserPrefsMeUser").isMeAccount(t);
            }) &&
            t.reason === o("WAWebGroupType").ADD_REASON.GENERAL_CHAT_AUTO_ADD &&
            o("WAWebCommunityGatingUtils").communityGeneralChatUIEnabled()
          ) {
            var F;
            ((g = "general_chat_add"),
              (h = [
                "general_chat_auto_add",
                (F = t.groupName) != null ? F : "",
              ]));
          } else if (
            t.reason == null &&
            C &&
            t.participants.some(function (e) {
              var t = e.id;
              return o("WAWebUserPrefsMeUser").isMeAccount(t);
            }) &&
            t.generalSubgroup === !0 &&
            o("WAWebCommunityGatingUtils").communityGeneralChatUIEnabled()
          ) {
            var O;
            ((g = "general_chat_add"),
              (h = ["", (O = t.groupName) != null ? O : ""]));
          } else if (
            C &&
            t.participants.some(function (e) {
              var t = e.id;
              return o("WAWebUserPrefsMeUser").isMeAccount(t);
            })
          ) {
            var B,
              W = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(C);
            ((h = [C, (B = W == null ? void 0 : W.subject) != null ? B : ""]),
              (g =
                t.defaultSubgroup === !0
                  ? "community_participant_add_rich"
                  : "sub_group_participant_add_rich"));
          }
        case o("WAWebGroupType").GROUP_ACTIONS.PROMOTE:
        case o("WAWebGroupType").GROUP_ACTIONS.DEMOTE:
        case o("WAWebGroupType").GROUP_ACTIONS.REMOVE:
        case o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_PROMOTE:
        case o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_DEMOTE:
          if (
            t.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE &&
            t.reason ===
              o("WAWebGroupType").REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE
          ) {
            g = "default_sub_group_demote";
            break;
          }
          ((_ = t.participants.map(function (e) {
            var t = e.id;
            return t;
          })),
            _.length === 1 && (f = _[0]),
            t.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE &&
              _.length === 1 &&
              c === f &&
              (g = "leave"));
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.INVITE_CODE:
          g = "revoke_invite";
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.DESC_ADD:
          ((g =
            t.isParentGroup === !0
              ? "parent_group_description"
              : "description"),
            (p = t.desc));
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.DESC_REMOVE:
          g =
            t.isParentGroup === !0 ? "parent_group_description" : "description";
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.RESTRICT:
          ((h = [
            t.value
              ? o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled
                  .On
              : o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled
                  .Off,
          ]),
            (p = h[0]),
            t.threshold != null && h.push(t.threshold));
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.ANNOUNCE:
        case o("WAWebGroupType").GROUP_ACTIONS.NO_FORWARD:
          ((h = [
            t.value
              ? o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled
                  .On
              : o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled
                  .Off,
          ]),
            (p = h[0]));
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.EPHEMERAL:
          c && (h = ["" + t.duration, c]);
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.GROWTH_LOCKED:
          ((h = [t.type]), (p = h[0]));
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_LINK:
        case o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_LINK:
        case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_UNLINK:
        case o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_UNLINK:
        case o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_UNLINK:
        case o("WAWebGroupType").GROUP_ACTIONS.DELETE_PARENT_GROUP_UNLINK:
        case o("WAWebGroupType").GROUP_ACTIONS.INTEGRITY_PARENT_GROUP_UNLINK:
          h = o("WAWebPairList").flattenPairList(
            t.groupDatas.map(function (e) {
              return [e.id, e.subject];
            }),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_LINK:
          ((h = o("WAWebPairList").flattenPairList(
            t.groupDatas.map(function (e) {
              return [e.id, e.subject];
            }),
          )),
            (g = "community_link_parent_group_rich"),
            (y = "parentGroupLink"));
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.DELETE_PARENT_GROUP:
          h = [t.communityTitle];
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_APPROVAL_MODE:
          ((h = [
            t.value
              ? o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled
                  .On
              : o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled
                  .Off,
            u
              ? o("WAWebGroupType").GroupSettingChangeSystemMessageIsAdmin.Admin
              : o("WAWebGroupType").GroupSettingChangeSystemMessageIsAdmin
                  .Regular,
          ]),
            t.triggered === "server" && (c = void 0));
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBER_ADD_MODE: {
          var q = t.memberAddMode;
          q != null &&
            (h = [
              q === o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD
                ? o("WAWebGroupType")
                    .GroupSettingChangeSystemMessageToggleEnabled.On
                : o("WAWebGroupType")
                    .GroupSettingChangeSystemMessageToggleEnabled.Off,
            ]);
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBER_LINK_MODE: {
          if (!o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsEnabled())
            break;
          var U = t.value;
          h = [
            U === o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK
              ? o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled
                  .On
              : o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled
                  .Off,
          ];
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.CREATED_MEMBERSHIP_REQUESTS: {
          var V = t.requests;
          t.requestMethod ===
            o("WAWebRequestMethodType").RequestMethod.NonAdminAdd &&
          c != null &&
          V.length > 0
            ? ((h = [c.toJid()].concat(
                V.map(function (e) {
                  var t = e.wid;
                  return t.toJid();
                }),
              )),
              (g = "created_membership_requests"))
            : (g = "membership_approval_request");
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.ALLOW_ADMIN_REPORTS:
          {
            h = [
              t.value
                ? o("WAWebGroupType")
                    .GroupSettingChangeSystemMessageToggleEnabled.On
                : o("WAWebGroupType")
                    .GroupSettingChangeSystemMessageToggleEnabled.Off,
            ];
            var H = await o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(
              a.chatId.toString(),
            );
            h.push(
              H
                ? o("WAWebGroupType").GroupSettingChangeSystemMessageIsAdmin
                    .Admin
                : o("WAWebGroupType").GroupSettingChangeSystemMessageIsAdmin
                    .Regular,
            );
          }
          break;
        case o("WAWebGroupType").GROUP_ACTIONS
          .ALLOW_NON_ADMIN_SUB_GROUP_CREATION: {
          h = [
            t.value
              ? o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled
                  .On
              : o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled
                  .Off,
          ];
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.CREATED_SUBGROUP_SUGGESTION: {
          ((g = "created_subgroup_suggestion"), (h = [t.subject]));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.GENERAL_CHAT_AUTO_ADD_DISABLED: {
          ((g = "general_chat_auto_add_disabled"),
            (h = [
              o("WAWebGroupType").GeneralChatAutoAddDisabledReasonEnum.Full,
            ]));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.COMMUNITY_OWNER_UPDATE: {
          ((g = "community_owner_update"),
            (h = [t.newOwner.toString()]),
            (_ = [t.newOwner]));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.HIDDEN_GROUP: {
          g = "hidden_group";
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS
          .MEMBER_SHARE_GROUP_HISTORY_MODE: {
          h = [t.value];
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.JOIN_FLOOD_NOTIFICATION: {
          g = "join_flood_notification";
          break;
        }
      }
      return {
        id: new (r("WAWebMsgKey"))({
          remote: d,
          fromMe: m,
          participant: f,
          id: N(a, y),
        }),
        body: r("isStringNullOrEmpty")(p) ? void 0 : p,
        author: c,
        from: l,
        to: o("WAWebUserPrefsMeUser").getMeUser(),
        recipients: _.map(o("WAWebWidFactory").asUserWidOrThrow) || [],
        subtype: g,
        t: i != null ? i : a.ts,
        type: "gp2",
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        kind: o("WAWebMsgType").MsgKind.Gp2,
        templateParams: h || void 0,
      };
    }
    function L(e, t, n, a) {
      var i = !1;
      return {
        type: "gp2",
        kind: o("WAWebMsgType").MsgKind.Gp2,
        subtype: "picture",
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        t: n,
        author: a,
        body:
          t === o("WAWebProfilePicConstants").ProfilePicCommand.Set
            ? "set"
            : "remove",
        recipients: [],
        from: e,
        to: o("WAWebUserPrefsMeUser").getMeUser(),
        id: new (r("WAWebMsgKey"))({
          remote: e,
          fromMe: i,
          id: r("WAWebMsgKey").newId_DEPRECATED(),
        }),
      };
    }
    function E(e, t, n, a) {
      return {
        id: new (r("WAWebMsgKey"))({
          remote: e,
          fromMe: !1,
          participant: n,
          id: r("WAWebMsgKey").newId_DEPRECATED(),
        }),
        author: n,
        from: e,
        to: o("WAWebUserPrefsMeUser").getMeUser(),
        recipients: [],
        subtype: "ephemeral",
        t,
        type: "gp2",
        kind: o("WAWebMsgType").MsgKind.Gp2,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        templateParams: ["" + a],
      };
    }
    function k(e, t) {
      return {
        id: new (r("WAWebMsgKey"))({
          remote: e,
          fromMe: !1,
          id: r("WAWebMsgKey").newId_DEPRECATED(),
        }),
        from: e,
        to: o("WAWebUserPrefsMeUser").getMeUser(),
        recipients: [],
        subtype: "initial_pHash_mismatch",
        t,
        type: "gp2",
        kind: o("WAWebMsgType").MsgKind.Gp2,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
      };
    }
    async function I(e) {
      var t,
        n,
        r = [],
        a = e.chatId,
        i = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(a);
      if (i == null || i.isParentGroup === !1) return [];
      var l = await o("WAWebDBCommunity").getDefaultSubgroup(a),
        s = (t = i == null ? void 0 : i.subject) != null ? t : "",
        d = o("WATimeUtils").unixTime();
      l != null &&
        (await o("WAWebGroupsParticipantsApi").checkMyMembership(l)) &&
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[system message] generateDeleteParentNotificationMessages - DELETE_PARENT_GROUP",
            ])),
        ),
        r.push(
          await R({
            meta: { chatId: l, author: e.author, ts: d },
            action: {
              actionType: o("WAWebGroupType").GROUP_ACTIONS.DELETE_PARENT_GROUP,
              communityTitle: s,
            },
            dbIsStale: !1,
          }),
        ));
      var m = (
        (n = await o("WAWebDBCommunity").getJoinedSubgroups(
          o("WAWebWidFactory").createWid(i.id),
        )) != null
          ? n
          : []
      ).filter(function (e) {
        return !(l != null && l.equals(e));
      });
      return (
        await Promise.all(
          m.map(async function (t) {
            (r.push(
              await R({
                meta: { chatId: t, author: e.author, ts: d },
                action: {
                  actionType:
                    o("WAWebGroupType").GROUP_ACTIONS.DELETE_PARENT_GROUP,
                  communityTitle: s,
                },
                dbIsStale: !1,
              }),
            ),
              r.push(
                await R({
                  meta: { chatId: t, author: e.author, ts: d },
                  action: {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_UNLINK,
                    groupDatas: [{ id: a, subject: s }],
                  },
                  dbIsStale: !1,
                }),
              ));
          }),
        ),
        m.length > 0 &&
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[system message] generateDeleteParentNotificationMessages - processed ",
                " joinedGroups for DELETE_PARENT_GROUP and PARENT_GROUP_UNLINK",
              ])),
            m.length,
          ),
        r.filter(Boolean)
      );
    }
    async function T(e, t) {
      var n,
        r = [],
        a = e.chatId,
        i = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(a);
      if (i == null)
        return (
          o("WALogger").ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "genIntegrityDelteteParentNotificationMsgs: missing parentGroupMetadata",
              ])),
          ),
          []
        );
      var l = await o("WAWebDBCommunity").getDefaultSubgroup(a);
      if (
        l != null &&
        (await o("WAWebGroupsParticipantsApi").checkMyMembership(l))
      ) {
        var s;
        (o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[system message] genIntegrityDeleteParentNotificationMsgs - joinedGroup - DELETE :: INTEGRITY_DELETE_PARENT",
            ])),
        ),
          r.push(
            await R({
              meta: {
                chatId: l,
                author: void 0,
                ts: o("WATimeUtils").unixTime(),
              },
              action: {
                actionType: o("WAWebGroupType").GROUP_ACTIONS.DELETE,
                reason:
                  o("WAWebGroupType").DELETE_REASON.INTEGRITY_DELETE_PARENT,
                groupDatas: [
                  {
                    id: a,
                    subject:
                      (s = i == null ? void 0 : i.subject) != null ? s : "",
                  },
                ],
              },
              dbIsStale: !1,
            }),
          ));
      }
      var u = (
        (n = await o("WAWebDBCommunity").getJoinedSubgroups(a)) != null ? n : []
      ).filter(function (e) {
        return !(l != null && l.equals(e));
      });
      return (
        await Promise.all(
          u.map(async function (e) {
            var t;
            return r.push(
              await R({
                meta: {
                  chatId: e,
                  author: void 0,
                  ts: o("WATimeUtils").unixTime(),
                },
                action: {
                  actionType:
                    o("WAWebGroupType").GROUP_ACTIONS
                      .INTEGRITY_PARENT_GROUP_UNLINK,
                  groupDatas: [
                    {
                      id: a,
                      subject:
                        (t = i == null ? void 0 : i.subject) != null ? t : "",
                    },
                  ],
                },
                dbIsStale: !1,
              }),
            );
          }),
        ),
        u.length > 0 &&
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[system message] genIntegrityDeleteParentNotificationMsgs - processed ",
                " joinedGroups for DELETE :: INTEGRITY_PARENT_GROUP_UNLINK",
              ])),
            u.length,
          ),
        r.filter(Boolean)
      );
    }
    async function D(e, t) {
      var n = e.chatId,
        r = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(n);
      if ((r == null ? void 0 : r.isParentGroup) === !0) {
        var a = await o("WAWebDBCommunity").getDefaultSubgroup(n);
        if (
          a &&
          (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DESC_ADD ||
            t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DESC_REMOVE)
        )
          return (
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[system message] genDescriptionNotificationMsg - Parent Group - actionType = ",
                  "",
                ])),
              t.actionType,
            ),
            R({
              meta: babelHelpers.extends({}, e, { chatId: a }),
              action: babelHelpers.extends({}, t, { isParentGroup: !0 }),
              dbIsStale: !1,
            })
          );
      }
      return (
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "[system message] genDescriptionNotificationMsg - NOT Parent Group - actionType = ",
              "",
            ])),
          t.actionType,
        ),
        R({ meta: e, action: t, dbIsStale: !1 })
      );
    }
    async function x(e, t) {
      var n = e.chatId,
        r = await o("WAWebDBCommunity").getDefaultSubgroup(n);
      if (r) {
        var a = await o("WAWebGroupsParticipantsApi").getParticipants(r),
          i = !!(
            a != null &&
            a.participants.find(function (e) {
              return o("WAWebUserPrefsMeUser").isMeAccount(
                o("WAWebWidFactory").createWid(e),
              );
            })
          );
        if (i)
          return (
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[system message] genAllowNonAdminSubGroupCreationNotificationMsg - actionType = ",
                  "",
                ])),
              t.actionType,
            ),
            R({
              meta: babelHelpers.extends({}, e, { chatId: r }),
              action: t,
              dbIsStale: !1,
            })
          );
      }
    }
    async function $(e, t) {
      var n = e.chatId,
        r = await o("WAWebDBCommunity").getDefaultSubgroup(n);
      if (
        r &&
        t.actionType ===
          o("WAWebGroupType").GROUP_ACTIONS.CREATED_SUBGROUP_SUGGESTION
      )
        return (
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "[system message] genCreatedSubgroupSuggestionNotificationMsg - actionType = ",
                "",
              ])),
            t.actionType,
          ),
          R({
            meta: babelHelpers.extends({}, e, { chatId: r }),
            action: t,
            dbIsStale: !1,
          })
        );
    }
    async function P(e, t) {
      var n = e.chatId,
        r = await o("WAWebDBCommunity").getDefaultSubgroup(n);
      if (r) {
        var a = await o("WAWebGroupsParticipantsApi").getParticipants(r),
          i = !!(
            a != null &&
            a.participants.find(function (e) {
              return o("WAWebUserPrefsMeUser").isMeAccount(
                o("WAWebWidFactory").createWid(e),
              );
            })
          );
        if (i)
          return (
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[system message] genCommunityOwnerUpdateNotificationMsg - actionType = ",
                  "",
                ])),
              t.actionType,
            ),
            R({
              meta: babelHelpers.extends({}, e, { chatId: r }),
              action: t,
              dbIsStale: !1,
            })
          );
      }
    }
    function N(e, t) {
      var n,
        o,
        a =
          (n = e.externalId) != null ? n : r("WAWebMsgKey").newId_DEPRECATED();
      return (
        t != null && (a = "" + a + t),
        "" + a + ((o = e.ts) != null ? o : "")
      );
    }
    function M(e) {
      return o(
        "WAWebBotGroupGatingUtils",
      ).isOpenGroupBotParticipantAddEnabled() !== !0
        ? o("WAWebContactSystemMsg").genNotificationMsg(e, {
            type: "notification_template",
            kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
            subtype: null,
            templateParams: [],
          })
        : o("WAWebContactSystemMsg").genNotificationMsg(e, {
            type: "notification_template",
            kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
            subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
              .GroupTransitionToBotGroupSystemMsg,
            templateParams: [],
          });
    }
    function w(e) {
      return o(
        "WAWebBotGroupGatingUtils",
      ).isTEEGroupBotParticipantAddEnabled() !== !0
        ? o("WAWebContactSystemMsg").genNotificationMsg(e, {
            type: "notification_template",
            kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
            subtype: null,
            templateParams: [],
          })
        : o("WAWebContactSystemMsg").genNotificationMsg(e, {
            type: "e2e_notification",
            kind: o("WAWebMsgType").MsgKind.E2eNotification,
            subtype: "group_transition_to_tee_bot_group",
            templateParams: [],
          });
    }
    ((l.genMsgsForGroupCreation = b),
      (l.genGroupNotificationMsg = R),
      (l.genGroupPicChangeNotificationMsg = L),
      (l.genInitialPhashMismatchMsg = k),
      (l.generateDeleteParentNotificationMessages = I),
      (l.genIntegrityDeleteParentNotificationMsgs = T),
      (l.genDescriptionNotificationMsg = D),
      (l.genAllowNonAdminSubGroupCreationNotificationMsg = x),
      (l.genCreatedSubgroupSuggestionNotificationMsg = $),
      (l.genCommunityOwnerUpdateNotificationMsg = P),
      (l.genGroupTransitionToBotGroupNotificationMsg = M),
      (l.genGroupTransitionToTeeBotGroupNotificationMsg = w));
  },
  98,
);
