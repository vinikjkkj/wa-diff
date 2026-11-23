__d(
  "WAWebGroupSystemMsg",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WATimeUtils",
    "WAWebApiParticipantStore",
    "WAWebBotGroupGatingUtils",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebContactSystemMsg",
    "WAWebDBCommunity",
    "WAWebDBGroupsGroupMetadata",
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
    "WAWebUserUtils",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "getErrorSafe",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C;
    function b(e, t) {
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
      } else if (t.generalSubgroup === !0 && u) {
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
          id: w(e, p),
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
    async function v(t, n, r, a) {
      var i = n.participants.find(function (e) {
        var t = e.id,
          n = e.isAdmin;
        return o("WAWebUserUtils").isMeAccount(t) && n;
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
        return r ? [] : [b(t, n)];
      }
      function u() {
        var e = n.ephemeralDuration;
        return t.author && t.ts != null && e != null && e > 0
          ? [
              I({
                author: t.author,
                ephemeralDuration: e,
                ts: t.ts,
                wid: t.chatId,
              }),
            ]
          : [];
      }
      async function c() {
        return a == null
          ? []
          : (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[CAG] participantAddMsg actionType=",
                  "",
                ])),
              a.actionType,
            ),
            [await E({ meta: t, action: a, dbIsStale: !0 })].filter(Boolean));
      }
      async function d() {
        if (n.limitSharingEnabled === !0) {
          var e = await o(
            "WAWebLimitSharingModelUtils",
          ).genLimitSharingSystemMessageOnPersistedChat({
            chatWID: t.chatId,
            sharingLimited: n.limitSharingEnabled,
            acp2Enabled: n.acp2Enabled,
          });
          if (e) return [e];
        }
        return [];
      }
      async function m() {
        if (n.acp2Enabled === !0) {
          var e = await o(
            "WAWebLimitSharingModelUtils",
          ).genAcp2SystemMessageOnPersistedChat({
            chatWID: t.chatId,
            enabled: n.acp2Enabled,
          });
          if (e) return [e];
        }
        return [];
      }
      return (await Promise.all([l(), s(), u(), c(), d(), m()]))
        .filter(Boolean)
        .flat();
    }
    async function S(e, t) {
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
    async function R(e, t, n) {
      var r,
        a = e.author != null && o("WAWebUserUtils").isMeAccount(e.author),
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
          return o("WAWebUserUtils").isMeAccount(e.id);
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
    var L = r("JSResourceForInteraction")(
      "WAWebGroupMembershipFormGating",
    ).__setRef("WAWebGroupSystemMsg");
    async function E(e) {
      var t = e.action,
        n = e.dbIsStale,
        a = e.meta,
        i = e.ts,
        l = a.chatId,
        s = a.isAdmin,
        c = s === void 0 ? !1 : s;
      if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_FORM) {
        var d;
        if (t.membershipForm == null) return null;
        var m =
          (d = a.isAdmin) != null
            ? d
            : await o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(
                l.toString(),
              );
        if (!m) return null;
        try {
          var p = await L.load(),
            _ = p.isGroupMembershipFormSettingEnabled;
          if (!_()) return null;
        } catch (e) {
          return (
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[gmf] membership form gating failed to load",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("gmf-system-msg-gating-load-failed"),
            null
          );
        }
      }
      var f =
          (a.author && o("WAWebWidFactory").asUserWidOrThrow(a.author)) ||
          void 0,
        g = l,
        h = !1,
        y = null,
        C = [],
        b = f,
        v =
          t.actionType ===
          o("WAWebGroupType").GROUP_ACTIONS.GROUP_REACTION_SETTINGS
            ? "group_default_reactions"
            : t.actionType,
        E = null,
        k,
        I = t.parentGroupId,
        T = n
          ? null
          : await o("WAWebHandleGroupNotificationConst").getIsCagById(l),
        D = T === !0 ? await R(a, t, l) : !1;
      if (D) return null;
      switch (t.actionType) {
        case o("WAWebGroupType").GROUP_ACTIONS.SUBJECT:
          y = t.subject;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.MODIFY:
          C = t.participants.map(function (e) {
            var t = e.id;
            return t;
          });
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.ADD:
          if (t.reason === o("WAWebGroupType").ADD_REASON.INVITE)
            if (
              I &&
              t.participants.some(function (e) {
                var t = e.id;
                return o("WAWebUserUtils").isMeAccount(t);
              })
            )
              if (t.generalSubgroup === !0) {
                var x;
                ((v = "general_chat_add"),
                  (E = [
                    "linked_group_join",
                    (x = t.groupName) != null ? x : "",
                  ]));
              } else if (t.defaultSubgroup === !0) {
                var $;
                ((v = "community_invite_rich"),
                  (E = [I, ($ = t.groupName) != null ? $ : ""]));
              } else {
                var P;
                v = "sub_group_invite_rich";
                var N = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(
                  I,
                );
                E = [I, (P = N == null ? void 0 : N.subject) != null ? P : ""];
              }
            else v = "invite";
          else if (t.reason === o("WAWebGroupType").ADD_REASON.ACCEPT)
            v = "v4_add_invite_join";
          else if (
            t.reason === o("WAWebGroupType").ADD_REASON.LINKED_GROUP_JOIN
          )
            if (
              t.generalSubgroup === !0 &&
              I != null &&
              t.participants.some(function (e) {
                var t = e.id;
                return o("WAWebUserUtils").isMeAccount(t);
              })
            ) {
              var M;
              ((v = "general_chat_add"),
                (E = [
                  "linked_group_join",
                  (M = t.groupName) != null ? M : "",
                ]));
            } else v = "linked_group_join";
          else if (t.reason === o("WAWebGroupType").ADD_REASON.AUTO_ADD) {
            if (I) {
              var A, F;
              ((E = [
                I,
                (A = t.groupName) != null ? A : "",
                (F = t.contextGroupId) != null ? F : "",
              ]),
                (v = "subgroup_admin_triggered_auto_add"));
            } else if (((v = "auto_add"), await S(t, 2))) {
              var O;
              E = [t.parentGroupId, (O = t.groupName) != null ? O : ""];
            }
          } else if (
            t.reason ===
            o("WAWebGroupType").ADD_REASON.DEFAULT_SUBGROUP_ADMIN_ADD
          ) {
            if (I) {
              var B;
              ((v = "community_participant_add_rich"),
                (E = [I, (B = t.groupName) != null ? B : ""]));
            } else if (((v = "default_sub_group_admin_add"), await S(t, 1))) {
              var W;
              E = [t.parentGroupId, (W = t.groupName) != null ? W : ""];
            }
          } else if (
            t.reason === o("WAWebGroupType").ADD_REASON.DEFAULT_SUBGROUP_PROMOTE
          )
            v = "default_sub_group_promote";
          else if (t.reason === o("WAWebGroupType").ADD_REASON.INVITE_AUTO_ADD)
            if (
              I &&
              t.defaultSubgroup &&
              t.participants.some(function (e) {
                var t = e.id;
                return o("WAWebUserUtils").isMeAccount(t);
              })
            ) {
              var q, U;
              ((E = [
                I,
                (q = t.groupName) != null ? q : "",
                (U = t.contextGroupId) != null ? U : "",
              ]),
                (v = "subgroup_admin_triggered_invite_auto_add"));
            } else
              ((v = "invite_auto_add"),
                t.contextGroupId &&
                  ((E = [t.contextGroupId, ""]),
                  (await S(t, 2)) ? E.push("false") : E.push("true")));
          else if (
            t.participants.some(function (e) {
              var t = e.id;
              return o("WAWebUserUtils").isMeAccount(t);
            }) &&
            t.reason === o("WAWebGroupType").ADD_REASON.GENERAL_CHAT_AUTO_ADD
          ) {
            var V;
            ((v = "general_chat_add"),
              (E = [
                "general_chat_auto_add",
                (V = t.groupName) != null ? V : "",
              ]));
          } else if (
            t.reason == null &&
            I &&
            t.participants.some(function (e) {
              var t = e.id;
              return o("WAWebUserUtils").isMeAccount(t);
            }) &&
            t.generalSubgroup === !0
          ) {
            var H;
            ((v = "general_chat_add"),
              (E = ["", (H = t.groupName) != null ? H : ""]));
          } else if (
            I &&
            t.participants.some(function (e) {
              var t = e.id;
              return o("WAWebUserUtils").isMeAccount(t);
            })
          ) {
            var G,
              z = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(I);
            ((E = [I, (G = z == null ? void 0 : z.subject) != null ? G : ""]),
              (v =
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
            v = "default_sub_group_demote";
            break;
          }
          ((C = t.participants.map(function (e) {
            var t = e.id;
            return t;
          })),
            C.length === 1 && (b = C[0]),
            t.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE &&
              C.length === 1 &&
              f === b &&
              (v = "leave"));
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.INVITE_CODE:
          v = "revoke_invite";
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.DESC_ADD:
          ((v =
            t.isParentGroup === !0
              ? "parent_group_description"
              : "description"),
            (y = t.desc));
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.DESC_REMOVE:
          v =
            t.isParentGroup === !0 ? "parent_group_description" : "description";
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.RESTRICT:
          ((E = [
            t.value
              ? o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled
                  .On
              : o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled
                  .Off,
          ]),
            (y = E[0]),
            t.threshold != null && E.push(t.threshold));
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.ANNOUNCE:
        case o("WAWebGroupType").GROUP_ACTIONS.NO_FORWARD:
          ((E = [
            t.value
              ? o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled
                  .On
              : o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled
                  .Off,
          ]),
            (y = E[0]));
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.EPHEMERAL:
          f && (E = ["" + t.duration, f]);
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.GROWTH_LOCKED:
          ((E = [t.type]), (y = E[0]));
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_LINK:
        case o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_LINK:
        case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_UNLINK:
        case o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_UNLINK:
        case o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_UNLINK:
        case o("WAWebGroupType").GROUP_ACTIONS.DELETE_PARENT_GROUP_UNLINK:
        case o("WAWebGroupType").GROUP_ACTIONS.INTEGRITY_PARENT_GROUP_UNLINK:
          E = o("WAWebPairList").flattenPairList(
            t.groupDatas.map(function (e) {
              return [e.id, e.subject];
            }),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_LINK:
          ((E = o("WAWebPairList").flattenPairList(
            t.groupDatas.map(function (e) {
              return [e.id, e.subject];
            }),
          )),
            (v = "community_link_parent_group_rich"),
            (k = "parentGroupLink"));
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.DELETE_PARENT_GROUP:
          E = [t.communityTitle];
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_APPROVAL_MODE:
          ((E = [
            t.value
              ? o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled
                  .On
              : o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled
                  .Off,
            c
              ? o("WAWebGroupType").GroupSettingChangeSystemMessageIsAdmin.Admin
              : o("WAWebGroupType").GroupSettingChangeSystemMessageIsAdmin
                  .Regular,
          ]),
            t.triggered === "server" && (f = void 0));
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBER_ADD_MODE: {
          var j = t.memberAddMode;
          j != null &&
            (E = [
              j === o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD
                ? o("WAWebGroupType")
                    .GroupSettingChangeSystemMessageToggleEnabled.On
                : o("WAWebGroupType")
                    .GroupSettingChangeSystemMessageToggleEnabled.Off,
            ]);
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBER_LINK_MODE: {
          var K = t.value;
          E = [
            K === o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK
              ? o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled
                  .On
              : o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled
                  .Off,
          ];
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.CREATED_MEMBERSHIP_REQUESTS: {
          var Q = t.requests;
          t.requestMethod ===
            o("WAWebRequestMethodType").RequestMethod.NonAdminAdd &&
          f != null &&
          Q.length > 0
            ? ((E = [f.toJid()].concat(
                Q.map(function (e) {
                  var t = e.wid;
                  return t.toJid();
                }),
              )),
              (v = "created_membership_requests"))
            : (v = "membership_approval_request");
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.ALLOW_ADMIN_REPORTS:
          {
            E = [
              t.value
                ? o("WAWebGroupType")
                    .GroupSettingChangeSystemMessageToggleEnabled.On
                : o("WAWebGroupType")
                    .GroupSettingChangeSystemMessageToggleEnabled.Off,
            ];
            var X = await o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(
              a.chatId.toString(),
            );
            E.push(
              X
                ? o("WAWebGroupType").GroupSettingChangeSystemMessageIsAdmin
                    .Admin
                : o("WAWebGroupType").GroupSettingChangeSystemMessageIsAdmin
                    .Regular,
            );
          }
          break;
        case o("WAWebGroupType").GROUP_ACTIONS
          .ALLOW_NON_ADMIN_SUB_GROUP_CREATION: {
          E = [
            t.value
              ? o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled
                  .On
              : o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled
                  .Off,
          ];
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.CREATED_SUBGROUP_SUGGESTION: {
          ((v = "created_subgroup_suggestion"), (E = [t.subject]));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.GENERAL_CHAT_AUTO_ADD_DISABLED: {
          ((v = "general_chat_auto_add_disabled"),
            (E = [
              o("WAWebGroupType").GeneralChatAutoAddDisabledReasonEnum.Full,
            ]));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.COMMUNITY_OWNER_UPDATE: {
          ((v = "community_owner_update"),
            (E = [t.newOwner.toString()]),
            (C = [t.newOwner]));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.HIDDEN_GROUP: {
          v = "hidden_group";
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.GROUP_REACTION_SETTINGS: {
          var Y, J;
          ((v = "group_default_reactions"),
            (E = [
              ((Y =
                (J = t.value) == null || (J = J.defaultReactions) == null
                  ? void 0
                  : J.length) != null
                ? Y
                : 0) > 0
                ? "changed"
                : "reset",
            ]));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS
          .MEMBER_SHARE_GROUP_HISTORY_MODE: {
          E = [t.value];
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.JOIN_FLOOD_NOTIFICATION: {
          v = "join_flood_notification";
          break;
        }
      }
      return {
        id: new (r("WAWebMsgKey"))({
          remote: g,
          fromMe: h,
          participant: b,
          id: w(a, k),
        }),
        body: r("isStringNullOrEmpty")(y) ? void 0 : y,
        author: f,
        from: l,
        to: o("WAWebUserUtils").getMeUserOrThrow(),
        recipients: C.map(o("WAWebWidFactory").asUserWidOrThrow) || [],
        subtype: v,
        t: i != null ? i : a.ts,
        type: "gp2",
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        kind: o("WAWebMsgType").MsgKind.Gp2,
        templateParams: E || void 0,
      };
    }
    function k(e, t, n, a) {
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
        to: o("WAWebUserUtils").getMeUserOrThrow(),
        id: new (r("WAWebMsgKey"))({
          remote: e,
          fromMe: i,
          id: r("WAWebMsgKey").newId_DEPRECATED(),
        }),
      };
    }
    function I(e) {
      var t = e.author,
        n = e.ephemeralDuration,
        a = e.ts,
        i = e.wid;
      return {
        id: new (r("WAWebMsgKey"))({
          remote: i,
          fromMe: !1,
          participant: t,
          id: r("WAWebMsgKey").newId_DEPRECATED(),
        }),
        author: t,
        from: i,
        to: o("WAWebUserUtils").getMeUserOrThrow(),
        recipients: [],
        subtype: "ephemeral",
        t: a,
        type: "gp2",
        kind: o("WAWebMsgType").MsgKind.Gp2,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        templateParams: ["" + n],
      };
    }
    function T(e, t) {
      return {
        id: new (r("WAWebMsgKey"))({
          remote: e,
          fromMe: !1,
          id: r("WAWebMsgKey").newId_DEPRECATED(),
        }),
        from: e,
        to: o("WAWebUserUtils").getMeUserOrThrow(),
        recipients: [],
        subtype: "initial_pHash_mismatch",
        t,
        type: "gp2",
        kind: o("WAWebMsgType").MsgKind.Gp2,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
      };
    }
    async function D(e) {
      var t,
        n,
        r = [],
        a = e.chatId,
        i = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(a);
      if (i == null || i.isParentGroup === !1) return [];
      var l = await o("WAWebDBCommunity").getDefaultSubgroup(a),
        s = (t = i == null ? void 0 : i.subject) != null ? t : "",
        u = o("WATimeUtils").unixTime();
      l != null &&
        (await o("WAWebGroupsParticipantsApi").checkMyMembership(l)) &&
        (o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[generateDeleteParentNotificationMessages] DELETE_PARENT_GROUP",
            ])),
        ),
        r.push(
          await E({
            meta: { chatId: l, author: e.author, ts: u },
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
              await E({
                meta: { chatId: t, author: e.author, ts: u },
                action: {
                  actionType:
                    o("WAWebGroupType").GROUP_ACTIONS.DELETE_PARENT_GROUP,
                  communityTitle: s,
                },
                dbIsStale: !1,
              }),
            ),
              r.push(
                await E({
                  meta: { chatId: t, author: e.author, ts: u },
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
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[generateDeleteParentNotificationMessages] processed ",
                " groups",
              ])),
            m.length,
          ),
        r.filter(Boolean)
      );
    }
    async function x(e, t) {
      var n,
        r = [],
        a = e.chatId,
        i = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(a);
      if (i == null)
        return (
          o("WALogger").ERROR(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[genIntegrityDeleteParentNotificationMsgs] missing metadata",
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
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "[genIntegrityDeleteParentNotificationMsgs] INTEGRITY_DELETE_PARENT",
            ])),
        ),
          r.push(
            await E({
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
              await E({
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
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[genIntegrityDeleteParentNotificationMsgs] processed ",
                " grps",
              ])),
            u.length,
          ),
        r.filter(Boolean)
      );
    }
    async function $(e, t) {
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
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[genDescriptionNotificationMsg] parentGroup actionType=",
                  "",
                ])),
              t.actionType,
            ),
            E({
              meta: babelHelpers.extends({}, e, { chatId: a }),
              action: babelHelpers.extends({}, t, { isParentGroup: !0 }),
              dbIsStale: !1,
            })
          );
      }
      return (
        o("WALogger").LOG(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "[genDescriptionNotificationMsg] !parentGroup actionType=",
              "",
            ])),
          t.actionType,
        ),
        E({ meta: e, action: t, dbIsStale: !1 })
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
              return o("WAWebUserUtils").isMeAccount(
                o("WAWebWidFactory").createWid(e),
              );
            })
          );
        if (i)
          return (
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[genAllowNonAdminSubGroupCreationNotificationMsg] actionType=",
                  "",
                ])),
              t.actionType,
            ),
            E({
              meta: babelHelpers.extends({}, e, { chatId: r }),
              action: t,
              dbIsStale: !1,
            })
          );
      }
    }
    async function N(e, t) {
      var n = e.chatId,
        r = await o("WAWebDBCommunity").getDefaultSubgroup(n);
      if (
        r &&
        t.actionType ===
          o("WAWebGroupType").GROUP_ACTIONS.CREATED_SUBGROUP_SUGGESTION
      )
        return (
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "[genCreatedSubgroupSuggestionNotificationMsg] actionType=",
                "",
              ])),
            t.actionType,
          ),
          E({
            meta: babelHelpers.extends({}, e, { chatId: r }),
            action: t,
            dbIsStale: !1,
          })
        );
    }
    async function M(e, t) {
      var n = e.chatId,
        r = await o("WAWebDBCommunity").getDefaultSubgroup(n);
      if (r) {
        var a = await o("WAWebGroupsParticipantsApi").getParticipants(r),
          i = !!(
            a != null &&
            a.participants.find(function (e) {
              return o("WAWebUserUtils").isMeAccount(
                o("WAWebWidFactory").createWid(e),
              );
            })
          );
        if (i)
          return (
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "[genCommunityOwnerUpdateNotificationMsg] actionType=",
                  "",
                ])),
              t.actionType,
            ),
            E({
              meta: babelHelpers.extends({}, e, { chatId: r }),
              action: t,
              dbIsStale: !1,
            })
          );
      }
    }
    function w(e, t) {
      var n,
        o,
        a =
          (n = e.externalId) != null ? n : r("WAWebMsgKey").newId_DEPRECATED();
      return (
        t != null && (a = "" + a + t),
        "" + a + ((o = e.ts) != null ? o : "")
      );
    }
    function A(e) {
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
    function F(e) {
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
    ((l.genMsgsForGroupCreation = v),
      (l.genGroupNotificationMsg = E),
      (l.genGroupPicChangeNotificationMsg = k),
      (l.genInitialPhashMismatchMsg = T),
      (l.generateDeleteParentNotificationMessages = D),
      (l.genIntegrityDeleteParentNotificationMsgs = x),
      (l.genDescriptionNotificationMsg = $),
      (l.genAllowNonAdminSubGroupCreationNotificationMsg = P),
      (l.genCreatedSubgroupSuggestionNotificationMsg = N),
      (l.genCommunityOwnerUpdateNotificationMsg = M),
      (l.genGroupTransitionToBotGroupNotificationMsg = A),
      (l.genGroupTransitionToTeeBotGroupNotificationMsg = F));
  },
  98,
);
