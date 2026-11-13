__d(
  "WAWebGroupSystemMsg",
  [
    "JSResourceForInteraction",
    "Promise",
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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b;
    function v(e, t) {
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
          id: z(e, p),
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
    function S(e, t, n, r) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i) {
            var l = r.participants.find(function (e) {
              var t = e.id,
                n = e.isAdmin;
              return o("WAWebUserUtils").isMeAccount(t) && n;
            });
            function s() {
              return !a && !l && r.defaultSubgroup === !0
                ? [
                    o("WAWebContactSystemMsg").genNotificationMsg(r.id, {
                      type: "notification_template",
                      kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
                      subtype: "cag_masked_thread_created",
                      templateParams: [],
                    }),
                  ]
                : [];
            }
            function u() {
              return a ? [] : [v(t, r)];
            }
            function c() {
              var e = r.ephemeralDuration;
              return t.author && t.ts != null && e != null && e > 0
                ? [
                    P({
                      author: t.author,
                      ephemeralDuration: e,
                      ts: t.ts,
                      wid: t.chatId,
                    }),
                  ]
                : [];
            }
            function d() {
              return m.apply(this, arguments);
            }
            function m() {
              return (
                (m = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    return i == null
                      ? []
                      : (o("WALogger").LOG(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "[CAG] participantAddMsg actionType=",
                              "",
                            ])),
                          i.actionType,
                        ),
                        [yield D({ meta: t, action: i, dbIsStale: !0 })].filter(
                          Boolean,
                        ));
                  },
                )),
                m.apply(this, arguments)
              );
            }
            function p() {
              return _.apply(this, arguments);
            }
            function _() {
              return (
                (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    if (r.limitSharingEnabled === !0) {
                      var e = yield o(
                        "WAWebLimitSharingModelUtils",
                      ).genLimitSharingSystemMessageOnPersistedChat({
                        chatWID: t.chatId,
                        sharingLimited: r.limitSharingEnabled,
                        acp2Enabled: r.acp2Enabled,
                      });
                      if (e) return [e];
                    }
                    return [];
                  },
                )),
                _.apply(this, arguments)
              );
            }
            function f() {
              return g.apply(this, arguments);
            }
            function g() {
              return (
                (g = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    if (r.acp2Enabled === !0) {
                      var e = yield o(
                        "WAWebLimitSharingModelUtils",
                      ).genAcp2SystemMessageOnPersistedChat({
                        chatWID: t.chatId,
                        enabled: r.acp2Enabled,
                      });
                      if (e) return [e];
                    }
                    return [];
                  },
                )),
                g.apply(this, arguments)
              );
            }
            return (yield (b || (b = n("Promise"))).all([
              s(),
              u(),
              c(),
              d(),
              p(),
              f(),
            ]))
              .filter(Boolean)
              .flat();
          },
        )),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.parentGroupId;
          if (!n) return !1;
          var r = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(n);
          return (
            !r ||
            (r != null &&
              (yield o("WAWebDBCommunity").getJoinedSubgroups(
                o("WAWebWidFactory").createWid(r.id),
              )).length <= t)
          );
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t, n) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
          var u = yield o("WAWebGroupsParticipantsApi").getParticipants(n),
            c = o("WAWebGroupUtils").amIGroupAdmin(
              (r = u == null ? void 0 : u.admins) != null ? r : [],
            );
          return !c;
        })),
        I.apply(this, arguments)
      );
    }
    var T = r("JSResourceForInteraction")(
      "WAWebGroupMembershipFormGating",
    ).__setRef("WAWebGroupSystemMsg");
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.action,
            n = e.dbIsStale,
            a = e.meta,
            i = e.ts,
            l = a.chatId,
            s = a.isAdmin,
            c = s === void 0 ? !1 : s;
          if (
            t.actionType === o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_FORM
          ) {
            var d;
            if (t.membershipForm == null) return null;
            var m =
              (d = a.isAdmin) != null
                ? d
                : yield o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(
                    l.toString(),
                  );
            if (!m) return null;
            try {
              var p = yield T.load(),
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
            S = null,
            R,
            E = t.parentGroupId,
            I = n
              ? null
              : yield o("WAWebHandleGroupNotificationConst").getIsCagById(l),
            D = I === !0 ? yield k(a, t, l) : !1;
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
                  E &&
                  t.participants.some(function (e) {
                    var t = e.id;
                    return o("WAWebUserUtils").isMeAccount(t);
                  })
                )
                  if (t.generalSubgroup === !0) {
                    var x;
                    ((v = "general_chat_add"),
                      (S = [
                        "linked_group_join",
                        (x = t.groupName) != null ? x : "",
                      ]));
                  } else if (t.defaultSubgroup === !0) {
                    var $;
                    ((v = "community_invite_rich"),
                      (S = [E, ($ = t.groupName) != null ? $ : ""]));
                  } else {
                    var P;
                    v = "sub_group_invite_rich";
                    var N = yield o(
                      "WAWebDBGroupsGroupMetadata",
                    ).getGroupMetadata(E);
                    S = [
                      E,
                      (P = N == null ? void 0 : N.subject) != null ? P : "",
                    ];
                  }
                else v = "invite";
              else if (t.reason === o("WAWebGroupType").ADD_REASON.ACCEPT)
                v = "v4_add_invite_join";
              else if (
                t.reason === o("WAWebGroupType").ADD_REASON.LINKED_GROUP_JOIN
              )
                if (
                  t.generalSubgroup === !0 &&
                  E != null &&
                  t.participants.some(function (e) {
                    var t = e.id;
                    return o("WAWebUserUtils").isMeAccount(t);
                  })
                ) {
                  var M;
                  ((v = "general_chat_add"),
                    (S = [
                      "linked_group_join",
                      (M = t.groupName) != null ? M : "",
                    ]));
                } else v = "linked_group_join";
              else if (t.reason === o("WAWebGroupType").ADD_REASON.AUTO_ADD) {
                if (E) {
                  var w, A;
                  ((S = [
                    E,
                    (w = t.groupName) != null ? w : "",
                    (A = t.contextGroupId) != null ? A : "",
                  ]),
                    (v = "subgroup_admin_triggered_auto_add"));
                } else if (((v = "auto_add"), yield L(t, 2))) {
                  var F;
                  S = [t.parentGroupId, (F = t.groupName) != null ? F : ""];
                }
              } else if (
                t.reason ===
                o("WAWebGroupType").ADD_REASON.DEFAULT_SUBGROUP_ADMIN_ADD
              ) {
                if (E) {
                  var O;
                  ((v = "community_participant_add_rich"),
                    (S = [E, (O = t.groupName) != null ? O : ""]));
                } else if (
                  ((v = "default_sub_group_admin_add"), yield L(t, 1))
                ) {
                  var B;
                  S = [t.parentGroupId, (B = t.groupName) != null ? B : ""];
                }
              } else if (
                t.reason ===
                o("WAWebGroupType").ADD_REASON.DEFAULT_SUBGROUP_PROMOTE
              )
                v = "default_sub_group_promote";
              else if (
                t.reason === o("WAWebGroupType").ADD_REASON.INVITE_AUTO_ADD
              )
                if (
                  E &&
                  t.defaultSubgroup &&
                  t.participants.some(function (e) {
                    var t = e.id;
                    return o("WAWebUserUtils").isMeAccount(t);
                  })
                ) {
                  var W, q;
                  ((S = [
                    E,
                    (W = t.groupName) != null ? W : "",
                    (q = t.contextGroupId) != null ? q : "",
                  ]),
                    (v = "subgroup_admin_triggered_invite_auto_add"));
                } else
                  ((v = "invite_auto_add"),
                    t.contextGroupId &&
                      ((S = [t.contextGroupId, ""]),
                      (yield L(t, 2)) ? S.push("false") : S.push("true")));
              else if (
                t.participants.some(function (e) {
                  var t = e.id;
                  return o("WAWebUserUtils").isMeAccount(t);
                }) &&
                t.reason ===
                  o("WAWebGroupType").ADD_REASON.GENERAL_CHAT_AUTO_ADD
              ) {
                var U;
                ((v = "general_chat_add"),
                  (S = [
                    "general_chat_auto_add",
                    (U = t.groupName) != null ? U : "",
                  ]));
              } else if (
                t.reason == null &&
                E &&
                t.participants.some(function (e) {
                  var t = e.id;
                  return o("WAWebUserUtils").isMeAccount(t);
                }) &&
                t.generalSubgroup === !0
              ) {
                var V;
                ((v = "general_chat_add"),
                  (S = ["", (V = t.groupName) != null ? V : ""]));
              } else if (
                E &&
                t.participants.some(function (e) {
                  var t = e.id;
                  return o("WAWebUserUtils").isMeAccount(t);
                })
              ) {
                var H,
                  G = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(E);
                ((S = [
                  E,
                  (H = G == null ? void 0 : G.subject) != null ? H : "",
                ]),
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
                t.isParentGroup === !0
                  ? "parent_group_description"
                  : "description";
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.RESTRICT:
              ((S = [
                t.value
                  ? o("WAWebGroupType")
                      .GroupSettingChangeSystemMessageToggleEnabled.On
                  : o("WAWebGroupType")
                      .GroupSettingChangeSystemMessageToggleEnabled.Off,
              ]),
                (y = S[0]),
                t.threshold != null && S.push(t.threshold));
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.ANNOUNCE:
            case o("WAWebGroupType").GROUP_ACTIONS.NO_FORWARD:
              ((S = [
                t.value
                  ? o("WAWebGroupType")
                      .GroupSettingChangeSystemMessageToggleEnabled.On
                  : o("WAWebGroupType")
                      .GroupSettingChangeSystemMessageToggleEnabled.Off,
              ]),
                (y = S[0]));
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.EPHEMERAL:
              f && (S = ["" + t.duration, f]);
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.GROWTH_LOCKED:
              ((S = [t.type]), (y = S[0]));
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_LINK:
            case o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_LINK:
            case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_UNLINK:
            case o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_UNLINK:
            case o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_UNLINK:
            case o("WAWebGroupType").GROUP_ACTIONS.DELETE_PARENT_GROUP_UNLINK:
            case o("WAWebGroupType").GROUP_ACTIONS
              .INTEGRITY_PARENT_GROUP_UNLINK:
              S = o("WAWebPairList").flattenPairList(
                t.groupDatas.map(function (e) {
                  return [e.id, e.subject];
                }),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_LINK:
              ((S = o("WAWebPairList").flattenPairList(
                t.groupDatas.map(function (e) {
                  return [e.id, e.subject];
                }),
              )),
                (v = "community_link_parent_group_rich"),
                (R = "parentGroupLink"));
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.DELETE_PARENT_GROUP:
              S = [t.communityTitle];
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_APPROVAL_MODE:
              ((S = [
                t.value
                  ? o("WAWebGroupType")
                      .GroupSettingChangeSystemMessageToggleEnabled.On
                  : o("WAWebGroupType")
                      .GroupSettingChangeSystemMessageToggleEnabled.Off,
                c
                  ? o("WAWebGroupType").GroupSettingChangeSystemMessageIsAdmin
                      .Admin
                  : o("WAWebGroupType").GroupSettingChangeSystemMessageIsAdmin
                      .Regular,
              ]),
                t.triggered === "server" && (f = void 0));
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.MEMBER_ADD_MODE: {
              var j = t.memberAddMode;
              j != null &&
                (S = [
                  j ===
                  o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD
                    ? o("WAWebGroupType")
                        .GroupSettingChangeSystemMessageToggleEnabled.On
                    : o("WAWebGroupType")
                        .GroupSettingChangeSystemMessageToggleEnabled.Off,
                ]);
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.MEMBER_LINK_MODE: {
              var K = t.value;
              S = [
                K ===
                o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK
                  ? o("WAWebGroupType")
                      .GroupSettingChangeSystemMessageToggleEnabled.On
                  : o("WAWebGroupType")
                      .GroupSettingChangeSystemMessageToggleEnabled.Off,
              ];
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS
              .CREATED_MEMBERSHIP_REQUESTS: {
              var Q = t.requests;
              t.requestMethod ===
                o("WAWebRequestMethodType").RequestMethod.NonAdminAdd &&
              f != null &&
              Q.length > 0
                ? ((S = [f.toJid()].concat(
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
                S = [
                  t.value
                    ? o("WAWebGroupType")
                        .GroupSettingChangeSystemMessageToggleEnabled.On
                    : o("WAWebGroupType")
                        .GroupSettingChangeSystemMessageToggleEnabled.Off,
                ];
                var X = yield o(
                  "WAWebApiParticipantStore",
                ).isCurrentUserGroupAdmin(a.chatId.toString());
                S.push(
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
              S = [
                t.value
                  ? o("WAWebGroupType")
                      .GroupSettingChangeSystemMessageToggleEnabled.On
                  : o("WAWebGroupType")
                      .GroupSettingChangeSystemMessageToggleEnabled.Off,
              ];
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS
              .CREATED_SUBGROUP_SUGGESTION: {
              ((v = "created_subgroup_suggestion"), (S = [t.subject]));
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS
              .GENERAL_CHAT_AUTO_ADD_DISABLED: {
              ((v = "general_chat_auto_add_disabled"),
                (S = [
                  o("WAWebGroupType").GeneralChatAutoAddDisabledReasonEnum.Full,
                ]));
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.COMMUNITY_OWNER_UPDATE: {
              ((v = "community_owner_update"),
                (S = [t.newOwner.toString()]),
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
                (S = [
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
              S = [t.value];
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
              id: z(a, R),
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
            templateParams: S || void 0,
          };
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t, n, a) {
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
    function P(e) {
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
    function N(e, t) {
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
        t: t,
        type: "gp2",
        kind: o("WAWebMsgType").MsgKind.Gp2,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
      };
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            r,
            a = [],
            i = e.chatId,
            l = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(i);
          if (l == null || l.isParentGroup === !1) return [];
          var s = yield o("WAWebDBCommunity").getDefaultSubgroup(i),
            u = (t = l == null ? void 0 : l.subject) != null ? t : "",
            m = o("WATimeUtils").unixTime();
          s != null &&
            (yield o("WAWebGroupsParticipantsApi").checkMyMembership(s)) &&
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[generateDeleteParentNotificationMessages] DELETE_PARENT_GROUP",
                ])),
            ),
            a.push(
              yield D({
                meta: { chatId: s, author: e.author, ts: m },
                action: {
                  actionType:
                    o("WAWebGroupType").GROUP_ACTIONS.DELETE_PARENT_GROUP,
                  communityTitle: u,
                },
                dbIsStale: !1,
              }),
            ));
          var p = (
            (r = yield o("WAWebDBCommunity").getJoinedSubgroups(
              o("WAWebWidFactory").createWid(l.id),
            )) != null
              ? r
              : []
          ).filter(function (e) {
            return !(s != null && s.equals(e));
          });
          return (
            yield (b || (b = n("Promise"))).all(
              p.map(
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      (a.push(
                        yield D({
                          meta: { chatId: t, author: e.author, ts: m },
                          action: {
                            actionType:
                              o("WAWebGroupType").GROUP_ACTIONS
                                .DELETE_PARENT_GROUP,
                            communityTitle: u,
                          },
                          dbIsStale: !1,
                        }),
                      ),
                        a.push(
                          yield D({
                            meta: { chatId: t, author: e.author, ts: m },
                            action: {
                              actionType:
                                o("WAWebGroupType").GROUP_ACTIONS
                                  .PARENT_GROUP_UNLINK,
                              groupDatas: [{ id: i, subject: u }],
                            },
                            dbIsStale: !1,
                          }),
                        ));
                    },
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              ),
            ),
            p.length > 0 &&
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[generateDeleteParentNotificationMessages] processed ",
                    " groups",
                  ])),
                p.length,
              ),
            a.filter(Boolean)
          );
        })),
        w.apply(this, arguments)
      );
    }
    function A(e, t) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r,
            a = [],
            i = e.chatId,
            l = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(i);
          if (l == null)
            return (
              o("WALogger").ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[genIntegrityDeleteParentNotificationMsgs] missing metadata",
                  ])),
              ),
              []
            );
          var s = yield o("WAWebDBCommunity").getDefaultSubgroup(i);
          if (
            s != null &&
            (yield o("WAWebGroupsParticipantsApi").checkMyMembership(s))
          ) {
            var u;
            (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[genIntegrityDeleteParentNotificationMsgs] INTEGRITY_DELETE_PARENT",
                ])),
            ),
              a.push(
                yield D({
                  meta: {
                    chatId: s,
                    author: void 0,
                    ts: o("WATimeUtils").unixTime(),
                  },
                  action: {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.DELETE,
                    reason:
                      o("WAWebGroupType").DELETE_REASON.INTEGRITY_DELETE_PARENT,
                    groupDatas: [
                      {
                        id: i,
                        subject:
                          (u = l == null ? void 0 : l.subject) != null ? u : "",
                      },
                    ],
                  },
                  dbIsStale: !1,
                }),
              ));
          }
          var c = (
            (r = yield o("WAWebDBCommunity").getJoinedSubgroups(i)) != null
              ? r
              : []
          ).filter(function (e) {
            return !(s != null && s.equals(e));
          });
          return (
            yield (b || (b = n("Promise"))).all(
              c.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t;
                      return a.push(
                        yield D({
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
                                id: i,
                                subject:
                                  (t = l == null ? void 0 : l.subject) != null
                                    ? t
                                    : "",
                              },
                            ],
                          },
                          dbIsStale: !1,
                        }),
                      );
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            c.length > 0 &&
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[genIntegrityDeleteParentNotificationMsgs] processed ",
                    " grps",
                  ])),
                c.length,
              ),
            a.filter(Boolean)
          );
        })),
        F.apply(this, arguments)
      );
    }
    function O(e, t) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.chatId,
            r = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(n);
          if ((r == null ? void 0 : r.isParentGroup) === !0) {
            var a = yield o("WAWebDBCommunity").getDefaultSubgroup(n);
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
                D({
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
            D({ meta: e, action: t, dbIsStale: !1 })
          );
        })),
        B.apply(this, arguments)
      );
    }
    function W(e, t) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.chatId,
            r = yield o("WAWebDBCommunity").getDefaultSubgroup(n);
          if (r) {
            var a = yield o("WAWebGroupsParticipantsApi").getParticipants(r),
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
                D({
                  meta: babelHelpers.extends({}, e, { chatId: r }),
                  action: t,
                  dbIsStale: !1,
                })
              );
          }
        })),
        q.apply(this, arguments)
      );
    }
    function U(e, t) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.chatId,
            r = yield o("WAWebDBCommunity").getDefaultSubgroup(n);
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
              D({
                meta: babelHelpers.extends({}, e, { chatId: r }),
                action: t,
                dbIsStale: !1,
              })
            );
        })),
        V.apply(this, arguments)
      );
    }
    function H(e, t) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.chatId,
            r = yield o("WAWebDBCommunity").getDefaultSubgroup(n);
          if (r) {
            var a = yield o("WAWebGroupsParticipantsApi").getParticipants(r),
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
                D({
                  meta: babelHelpers.extends({}, e, { chatId: r }),
                  action: t,
                  dbIsStale: !1,
                })
              );
          }
        })),
        G.apply(this, arguments)
      );
    }
    function z(e, t) {
      var n,
        o,
        a =
          (n = e.externalId) != null ? n : r("WAWebMsgKey").newId_DEPRECATED();
      return (
        t != null && (a = "" + a + t),
        "" + a + ((o = e.ts) != null ? o : "")
      );
    }
    function j(e) {
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
    function K(e) {
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
    ((l.genMsgsForGroupCreation = S),
      (l.genGroupNotificationMsg = D),
      (l.genGroupPicChangeNotificationMsg = $),
      (l.genInitialPhashMismatchMsg = N),
      (l.generateDeleteParentNotificationMessages = M),
      (l.genIntegrityDeleteParentNotificationMsgs = A),
      (l.genDescriptionNotificationMsg = O),
      (l.genAllowNonAdminSubGroupCreationNotificationMsg = W),
      (l.genCreatedSubgroupSuggestionNotificationMsg = U),
      (l.genCommunityOwnerUpdateNotificationMsg = H),
      (l.genGroupTransitionToBotGroupNotificationMsg = j),
      (l.genGroupTransitionToTeeBotGroupNotificationMsg = K));
  },
  98,
);
