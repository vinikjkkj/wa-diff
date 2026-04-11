__d(
  "WAWebGroupSystemMsg",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
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
          id: H(e, p),
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
    function v(e, t, n, r) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i) {
            var l = r.participants.find(function (e) {
              var t = e.id,
                n = e.isAdmin;
              return o("WAWebUserPrefsMeUser").isMeAccount(t) && n;
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
              return a ? [] : [b(t, r)];
            }
            function c() {
              var e = r.ephemeralDuration;
              return t.author && t.ts != null && e != null && e > 0
                ? [x(t.chatId, t.ts, t.author, e)]
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
                              "[CAG system message] participantAddMsg: participant add message with actionType: ",
                              "",
                            ])),
                          i.actionType,
                        ),
                        [yield I({ meta: t, action: i, dbIsStale: !0 })].filter(
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
                      });
                      if (e) return [e];
                    }
                    return [];
                  },
                )),
                _.apply(this, arguments)
              );
            }
            return (yield (C || (C = n("Promise"))).all([
              s(),
              u(),
              c(),
              d(),
              p(),
            ]))
              .filter(Boolean)
              .flat();
          },
        )),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        L.apply(this, arguments)
      );
    }
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            a =
              e.author != null &&
              o("WAWebUserPrefsMeUser").isMeAccount(e.author),
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
          var u = yield o("WAWebGroupsParticipantsApi").getParticipants(n),
            c = o("WAWebGroupUtils").amIGroupAdmin(
              (r = u == null ? void 0 : u.admins) != null ? r : [],
            );
          return !c;
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              : yield o("WAWebHandleGroupNotificationConst").getIsCagById(l),
            v = b === !0 ? yield E(a, t, l) : !1;
          if (v) return null;
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
                    o(
                      "WAWebCommunityGatingUtils",
                    ).communityGeneralChatUIEnabled()
                  ) {
                    var S;
                    ((g = "general_chat_add"),
                      (h = [
                        "linked_group_join",
                        (S = t.groupName) != null ? S : "",
                      ]));
                  } else if (t.defaultSubgroup === !0) {
                    var L;
                    ((g = "community_invite_rich"),
                      (h = [C, (L = t.groupName) != null ? L : ""]));
                  } else {
                    var k;
                    g = "sub_group_invite_rich";
                    var I = yield o(
                      "WAWebDBGroupsGroupMetadata",
                    ).getGroupMetadata(C);
                    h = [
                      C,
                      (k = I == null ? void 0 : I.subject) != null ? k : "",
                    ];
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
                } else if (((g = "auto_add"), yield R(t, 2))) {
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
                } else if (
                  ((g = "default_sub_group_admin_add"), yield R(t, 1))
                ) {
                  var N;
                  h = [t.parentGroupId, (N = t.groupName) != null ? N : ""];
                }
              } else if (
                t.reason ===
                o("WAWebGroupType").ADD_REASON.DEFAULT_SUBGROUP_PROMOTE
              )
                g = "default_sub_group_promote";
              else if (
                t.reason === o("WAWebGroupType").ADD_REASON.INVITE_AUTO_ADD
              )
                if (
                  C &&
                  t.defaultSubgroup &&
                  t.participants.some(function (e) {
                    var t = e.id;
                    return o("WAWebUserPrefsMeUser").isMeAccount(t);
                  })
                ) {
                  var M, w;
                  ((h = [
                    C,
                    (M = t.groupName) != null ? M : "",
                    (w = t.contextGroupId) != null ? w : "",
                  ]),
                    (g = "subgroup_admin_triggered_invite_auto_add"));
                } else
                  ((g = "invite_auto_add"),
                    t.contextGroupId &&
                      ((h = [t.contextGroupId, ""]),
                      (yield R(t, 2)) ? h.push("false") : h.push("true")));
              else if (
                t.participants.some(function (e) {
                  var t = e.id;
                  return o("WAWebUserPrefsMeUser").isMeAccount(t);
                }) &&
                t.reason ===
                  o("WAWebGroupType").ADD_REASON.GENERAL_CHAT_AUTO_ADD &&
                o("WAWebCommunityGatingUtils").communityGeneralChatUIEnabled()
              ) {
                var A;
                ((g = "general_chat_add"),
                  (h = [
                    "general_chat_auto_add",
                    (A = t.groupName) != null ? A : "",
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
                var F;
                ((g = "general_chat_add"),
                  (h = ["", (F = t.groupName) != null ? F : ""]));
              } else if (
                C &&
                t.participants.some(function (e) {
                  var t = e.id;
                  return o("WAWebUserPrefsMeUser").isMeAccount(t);
                })
              ) {
                var O,
                  B = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(C);
                ((h = [
                  C,
                  (O = B == null ? void 0 : B.subject) != null ? O : "",
                ]),
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
                t.isParentGroup === !0
                  ? "parent_group_description"
                  : "description";
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.RESTRICT:
              ((h = [
                t.value
                  ? o("WAWebGroupType")
                      .GroupSettingChangeSystemMessageToggleEnabled.On
                  : o("WAWebGroupType")
                      .GroupSettingChangeSystemMessageToggleEnabled.Off,
              ]),
                (p = h[0]),
                t.threshold != null && h.push(t.threshold));
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.ANNOUNCE:
            case o("WAWebGroupType").GROUP_ACTIONS.NO_FORWARD:
              ((h = [
                t.value
                  ? o("WAWebGroupType")
                      .GroupSettingChangeSystemMessageToggleEnabled.On
                  : o("WAWebGroupType")
                      .GroupSettingChangeSystemMessageToggleEnabled.Off,
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
            case o("WAWebGroupType").GROUP_ACTIONS
              .INTEGRITY_PARENT_GROUP_UNLINK:
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
                  ? o("WAWebGroupType")
                      .GroupSettingChangeSystemMessageToggleEnabled.On
                  : o("WAWebGroupType")
                      .GroupSettingChangeSystemMessageToggleEnabled.Off,
                u
                  ? o("WAWebGroupType").GroupSettingChangeSystemMessageIsAdmin
                      .Admin
                  : o("WAWebGroupType").GroupSettingChangeSystemMessageIsAdmin
                      .Regular,
              ]),
                t.triggered === "server" && (c = void 0));
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.MEMBER_ADD_MODE: {
              var W = t.memberAddMode;
              W != null &&
                (h = [
                  W ===
                  o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD
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
              var q = t.value;
              h = [
                q ===
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
              var U = t.requests;
              t.requestMethod ===
                o("WAWebRequestMethodType").RequestMethod.NonAdminAdd &&
              c != null &&
              U.length > 0
                ? ((h = [c.toJid()].concat(
                    U.map(function (e) {
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
                var V = yield o(
                  "WAWebApiParticipantStore",
                ).isCurrentUserGroupAdmin(a.chatId.toString());
                h.push(
                  V
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
                  ? o("WAWebGroupType")
                      .GroupSettingChangeSystemMessageToggleEnabled.On
                  : o("WAWebGroupType")
                      .GroupSettingChangeSystemMessageToggleEnabled.Off,
              ];
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS
              .CREATED_SUBGROUP_SUGGESTION: {
              ((g = "created_subgroup_suggestion"), (h = [t.subject]));
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS
              .GENERAL_CHAT_AUTO_ADD_DISABLED: {
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
              id: H(a, y),
            }),
            body: r("isStringNullOrEmpty")(p) ? void 0 : p,
            author: c,
            from: l,
            to: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            recipients: _.map(o("WAWebWidFactory").asUserWidOrThrow) || [],
            subtype: g,
            t: i != null ? i : a.ts,
            type: "gp2",
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            kind: o("WAWebMsgType").MsgKind.Gp2,
            templateParams: h || void 0,
          };
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t, n, a) {
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
        to: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        id: new (r("WAWebMsgKey"))({
          remote: e,
          fromMe: i,
          id: r("WAWebMsgKey").newId_DEPRECATED(),
        }),
      };
    }
    function x(e, t, n, a) {
      return {
        id: new (r("WAWebMsgKey"))({
          remote: e,
          fromMe: !1,
          participant: n,
          id: r("WAWebMsgKey").newId_DEPRECATED(),
        }),
        author: n,
        from: e,
        to: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        recipients: [],
        subtype: "ephemeral",
        t: t,
        type: "gp2",
        kind: o("WAWebMsgType").MsgKind.Gp2,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        templateParams: ["" + a],
      };
    }
    function $(e, t) {
      return {
        id: new (r("WAWebMsgKey"))({
          remote: e,
          fromMe: !1,
          id: r("WAWebMsgKey").newId_DEPRECATED(),
        }),
        from: e,
        to: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        recipients: [],
        subtype: "initial_pHash_mismatch",
        t: t,
        type: "gp2",
        kind: o("WAWebMsgType").MsgKind.Gp2,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
      };
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            r,
            a = [],
            i = e.chatId,
            l = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(i);
          if (l == null || l.isParentGroup === !1) return [];
          var s = yield o("WAWebDBCommunity").getDefaultSubgroup(i),
            d = (t = l == null ? void 0 : l.subject) != null ? t : "",
            m = o("WATimeUtils").unixTime();
          s != null &&
            (yield o("WAWebGroupsParticipantsApi").checkMyMembership(s)) &&
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[system message] generateDeleteParentNotificationMessages - DELETE_PARENT_GROUP",
                ])),
            ),
            a.push(
              yield I({
                meta: { chatId: s, author: e.author, ts: m },
                action: {
                  actionType:
                    o("WAWebGroupType").GROUP_ACTIONS.DELETE_PARENT_GROUP,
                  communityTitle: d,
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
            yield (C || (C = n("Promise"))).all(
              p.map(
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      (a.push(
                        yield I({
                          meta: { chatId: t, author: e.author, ts: m },
                          action: {
                            actionType:
                              o("WAWebGroupType").GROUP_ACTIONS
                                .DELETE_PARENT_GROUP,
                            communityTitle: d,
                          },
                          dbIsStale: !1,
                        }),
                      ),
                        a.push(
                          yield I({
                            meta: { chatId: t, author: e.author, ts: m },
                            action: {
                              actionType:
                                o("WAWebGroupType").GROUP_ACTIONS
                                  .PARENT_GROUP_UNLINK,
                              groupDatas: [{ id: i, subject: d }],
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
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[system message] generateDeleteParentNotificationMessages - processed ",
                    " joinedGroups for DELETE_PARENT_GROUP and PARENT_GROUP_UNLINK",
                  ])),
                p.length,
              ),
            a.filter(Boolean)
          );
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r,
            a = [],
            i = e.chatId,
            l = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(i);
          if (l == null)
            return (
              o("WALogger").ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "genIntegrityDelteteParentNotificationMsgs: missing parentGroupMetadata",
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
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[system message] genIntegrityDeleteParentNotificationMsgs - joinedGroup - DELETE :: INTEGRITY_DELETE_PARENT",
                ])),
            ),
              a.push(
                yield I({
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
            yield (C || (C = n("Promise"))).all(
              c.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t;
                      return a.push(
                        yield I({
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
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[system message] genIntegrityDeleteParentNotificationMsgs - processed ",
                    " joinedGroups for DELETE :: INTEGRITY_PARENT_GROUP_UNLINK",
                  ])),
                c.length,
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
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[system message] genDescriptionNotificationMsg - Parent Group - actionType = ",
                      "",
                    ])),
                  t.actionType,
                ),
                I({
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
            I({ meta: e, action: t, dbIsStale: !1 })
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
            r = yield o("WAWebDBCommunity").getDefaultSubgroup(n);
          if (r) {
            var a = yield o("WAWebGroupsParticipantsApi").getParticipants(r),
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
                I({
                  meta: babelHelpers.extends({}, e, { chatId: r }),
                  action: t,
                  dbIsStale: !1,
                })
              );
          }
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
              I({
                meta: babelHelpers.extends({}, e, { chatId: r }),
                action: t,
                dbIsStale: !1,
              })
            );
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
          if (r) {
            var a = yield o("WAWebGroupsParticipantsApi").getParticipants(r),
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
                I({
                  meta: babelHelpers.extends({}, e, { chatId: r }),
                  action: t,
                  dbIsStale: !1,
                })
              );
          }
        })),
        V.apply(this, arguments)
      );
    }
    function H(e, t) {
      var n,
        o,
        a =
          (n = e.externalId) != null ? n : r("WAWebMsgKey").newId_DEPRECATED();
      return (
        t != null && (a = "" + a + t),
        "" + a + ((o = e.ts) != null ? o : "")
      );
    }
    function G(e) {
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
    function z(e) {
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
      (l.genGroupNotificationMsg = I),
      (l.genGroupPicChangeNotificationMsg = D),
      (l.genInitialPhashMismatchMsg = $),
      (l.generateDeleteParentNotificationMessages = P),
      (l.genIntegrityDeleteParentNotificationMsgs = M),
      (l.genDescriptionNotificationMsg = A),
      (l.genAllowNonAdminSubGroupCreationNotificationMsg = O),
      (l.genCreatedSubgroupSuggestionNotificationMsg = W),
      (l.genCommunityOwnerUpdateNotificationMsg = U),
      (l.genGroupTransitionToBotGroupNotificationMsg = G),
      (l.genGroupTransitionToTeeBotGroupNotificationMsg = z));
  },
  98,
);
