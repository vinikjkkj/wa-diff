__d(
  "WAWebChatThreadLoggingEventStore",
  [
    "WALogger",
    "WAShiftTimer",
    "WAWebAfterReadUtils",
    "WAWebApiBulkGetChats",
    "WAWebApiChatThreadLoggingPendingEvents",
    "WAWebApiContact",
    "WAWebApiVerifiedBusinessName",
    "WAWebBotTypes",
    "WAWebChatThreadLoggingBoolFlagFields",
    "WAWebChatThreadLoggingCountFields",
    "WAWebChatThreadLoggingUtils",
    "WAWebDBBulkGetIsContactABusiness",
    "WAWebDBGetStarredMessagesForChat",
    "WAWebDBGroupsGroupMetadata",
    "WAWebGetBizCatalogType",
    "WAWebGetChatTypeInd",
    "WAWebGetThreadType",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebLidAwareContactsDB",
    "WAWebLidMigrationUtils",
    "WAWebSchemaBusinessProfile",
    "WAWebSchemaParticipant",
    "WAWebSchemaProfilePicThumb",
    "WAWebUserUtils",
    "WAWebUsernameTypes",
    "WAWebWamEnumChatOriginsType",
    "WAWebWamEnumChatType",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = 5,
      _ = (function () {
        function t(t, n) {
          var r = this;
          ((this.metadataStore = t),
            (this.$1 = new Map()),
            (this.$2 = n != null ? n : p),
            (this.$3 = new (o("WAShiftTimer").ShiftTimer)(function () {
              r.$4().catch(function (t) {
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "ChatThreadLoggingEventStoreImpl: flush error",
                    ])),
                );
              });
            })));
        }
        var n = t.prototype;
        return (
          (n.handleMessages = async function (t) {
            var e = this,
              n = await this.metadataStore.getOffset();
            if (n == null) {
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[ChatThreadLoggingEventStoreImpl] handleMessages: no offset",
                  ])),
              );
              return;
            }
            var r = await this.metadataStore.getLastUploadedStartTs();
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "ChatThreadLoggingEventStoreImpl: lastUploadedStartTs=",
                  "",
                ])),
              r,
            );
            var a = [],
              i = 0;
            (t.forEach(function (t) {
              if (
                o("WAWebChatThreadLoggingUtils").shouldUpdateChatEvent(
                  n,
                  t.ts,
                  r,
                )
              ) {
                var l = o("WAWebChatThreadLoggingUtils").computeStartTs(
                    n,
                    t.ts,
                  ),
                  s = t.chatId.toString({ legacy: !0 }),
                  u = s + "_" + String(l),
                  c = e.$1.get(u),
                  d =
                    c != null
                      ? c
                      : babelHelpers.extends(
                          {},
                          o("WAWebChatThreadLoggingCountFields").COUNT_FIELDS,
                          o("WAWebChatThreadLoggingBoolFlagFields").FLAG_FIELDS,
                          {
                            startTs: l,
                            chatId: s,
                            addMsgsSent: 0,
                            addMsgsReceived: 0,
                            addMsgsRead: 0,
                            addViewOnceMsgsSent: 0,
                            addViewOnceMsgsReceived: 0,
                            addViewOnceMsgsOpened: 0,
                            addCallOffersSent: 0,
                            addCallOffersReceived: 0,
                            addTotalCallDuration: 0,
                            addCommerceMsgsSent: 0,
                            addCommerceMsgsReceived: 0,
                            addPdpInquiriesSent: 0,
                            addReactionsSent: 0,
                            addReactionsReceived: 0,
                            addForwardMessagesSent: 0,
                            addForwardMessagesReceived: 0,
                            addEditedMsgsSent: 0,
                            addBotMessagesSent: 0,
                            addBotMessagesReceived: 0,
                            addBotMessagesEdited: 0,
                            addEventCreationMessagesSent: 0,
                            addEventCreationMessagesReceived: 0,
                            addEventResponseMessagesSent: 0,
                            addEventResponseMessagesReceived: 0,
                            addEventGroupStatusReplyOthersToOwn: 0,
                            addEventGroupStatusReplyOthersToOthers: 0,
                            addEventGroupStatusReplyOwnToOwn: 0,
                            addEventGroupStatusReplyOwnToOthers: 0,
                            addEventGroupStatusLikeOthersToOthers: 0,
                            addEventGroupStatusLikeOthersToOwn: 0,
                          },
                        );
                c == null && e.$1.set(u, d);
                var m = o(
                    "WAWebChatThreadLoggingCountFields",
                  ).toMaybeCountActionType(t.activityType),
                  p = o(
                    "WAWebChatThreadLoggingBoolFlagFields",
                  ).toMaybeBoolFlagActionType(t.activityType);
                if (m != null) d[m] += 1;
                else if (p != null)
                  d[p] = t.boolValue === void 0 ? !0 : t.boolValue;
                else
                  switch (t.activityType) {
                    case "msgSend":
                      ((d.addMsgsSent += 1),
                        t.isViewOnce && (d.addViewOnceMsgsSent += 1),
                        t.isCommerceMessage === !0 &&
                          (d.addCommerceMsgsSent += 1),
                        t.isPdpInquiry === !0 && (d.addPdpInquiriesSent += 1),
                        t.isReply && (d.repliesSent += 1),
                        t.isReaction && (d.addReactionsSent += 1),
                        t.isForwarded && (d.addForwardMessagesSent += 1),
                        t.isEdit && (d.addEditedMsgsSent += 1),
                        t.isBot && (d.addBotMessagesSent += 1),
                        t.isEventCreation &&
                          (d.addEventCreationMessagesSent += 1),
                        t.isEventResponse &&
                          (d.addEventResponseMessagesSent += 1),
                        t.isAfterRead === !0 && (d.afterReadMessagesSent += 1),
                        g(d, t.isAfterRead));
                      break;
                    case "msgReceive":
                      f(d, t);
                      break;
                    case "msgRead":
                      d.addMsgsRead += t.readCount;
                      break;
                    case "afterReadMsgExpired":
                      ((d.afterReadMessagesExpired += 1),
                        t.wasUnread && (d.afterReadMessagesUnreadExpired += 1));
                      break;
                    case "groupStatusMsgReceive":
                      ((d.addMsgsReceived += 1),
                        t.isGroupStatusReplyOthersToOwn &&
                          (d.addEventGroupStatusReplyOthersToOwn += 1),
                        t.isGroupStatusReplyOthersToOthers &&
                          (d.addEventGroupStatusReplyOthersToOthers += 1),
                        t.isGroupStatusLikeOthersToOthers &&
                          (d.addEventGroupStatusLikeOthersToOthers += 1),
                        t.isGroupStatusLikeOthersToOwn &&
                          (d.addEventGroupStatusLikeOthersToOwn += 1));
                      break;
                    case "groupStatusMsgSend":
                      ((d.addMsgsSent += 1),
                        t.isGroupStatusReplyOwnToOwn &&
                          (d.addEventGroupStatusReplyOwnToOwn += 1),
                        t.isGroupStatusReplyOwnToOthers &&
                          (d.addEventGroupStatusReplyOwnToOthers += 1));
                      break;
                    case "viewOnceOpen":
                      d.addViewOnceMsgsOpened += 1;
                      break;
                    case "voipCall":
                      (t.outgoing
                        ? (d.addCallOffersSent += 1)
                        : (d.addCallOffersReceived += 1),
                        (d.addTotalCallDuration += t.durationInSeconds));
                      break;
                    default:
                      (i++, a.length < 3 && a.push(t.activityType));
                  }
              }
            }),
              i > 0 &&
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " invalid event store info types => ",
                      "",
                    ])),
                  i,
                  a,
                ),
              await this.$5());
          }),
          (n.$5 = function () {
            this.$3.onOrBefore(this.$2 * 1e3);
          }),
          (n.$4 = async function () {
            var e = Array.from(this.$1.values());
            (this.$1.clear(),
              await o(
                "WAWebApiChatThreadLoggingPendingEvents",
              ).createOrUpdateChatEvents(e));
          }),
          (n.$6 = async function (t) {
            var e = o("WAWebApiBulkGetChats").bulkGetChats(
                t.map(function (e) {
                  return o("WAWebWidFactory").createWid(e.chatId);
                }),
              ),
              n = e.then(function (e) {
                return M(e);
              }),
              a = e.then(function (e) {
                return w(e);
              }),
              i = e.then(function (e) {
                return A(e);
              }),
              l = e.then(function (e) {
                return B(e);
              }),
              s = e.then(function (e) {
                return W(e);
              }),
              u = e.then(O),
              c = i.then(F),
              p = e.then(function (e) {
                return q(e);
              }),
              _ = e.then(function (e) {
                return U(e);
              }),
              f = await Promise.all([e, n, a, i, u, l, s, p, _, c]),
              g = f[0],
              h = f[1],
              y = f[2],
              C = f[3],
              b = f[4],
              v = f[5],
              S = f[6],
              R = f[7],
              L = f[8],
              E = f[9],
              k = await Promise.all([
                o("WAWebChatThreadLoggingUtils").getMeHasUsername(),
                o("WAWebChatThreadLoggingUtils").getMeHasUsernamePin(),
              ]),
              I = k[0],
              T = k[1],
              D = t.length,
              x = {
                chatRows: g.length,
                starredCounts: h.length,
                isABusiness: y.length,
                groupMetadataRows: C.length,
                groupParticipantsRows: b.length,
                businessProfileRows: v.length,
                contactFromChatRows: S.length,
                profilePicThumbRows: R.length,
              };
            for (var $ of Object.entries(x)) {
              var P = $[0],
                N = $[1];
              N !== D &&
                o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[ChatThreadLoggingEventStore] len mismatch ",
                        " exp=",
                        " got=",
                        "",
                      ])),
                    P,
                    D,
                    N,
                  )
                  .sendLogs(
                    "chatThreadLoggingEventStore-array-length-mismatch-" + P,
                  );
            }
            return Promise.all(
              t.map(async function (e, t) {
                var n,
                  a,
                  i,
                  l,
                  s,
                  u,
                  c,
                  d,
                  m = g[t],
                  p = o("WAWebWidFactory").createWid(e.chatId),
                  _ = p.isGroup(),
                  f = C[t],
                  k = o("WAWebBotTypes").BizBotAutomatedType.cast(
                    (n = v[t]) == null ? void 0 : n.automatedType,
                  ),
                  D = _
                    ? {
                        isAGroup: _,
                        groupSize:
                          (a =
                            (i = b[t]) == null || (i = i.participants) == null
                              ? void 0
                              : i.length) != null
                            ? a
                            : 1,
                        groupType:
                          f == null
                            ? o("WAWebGroupType").GroupType.DEFAULT
                            : o("WAWebGroupMetadataGetters").getGroupType(f),
                      }
                    : {
                        isAGroup: _,
                        isAContact: p.isUserNotPSA()
                          ? await o("WAWebApiContact").isAddressBookContact(
                              o("WAWebWidToJid").widToUserJid(p),
                            )
                          : !1,
                        automatedType: k,
                      },
                  x = ((l = m == null ? void 0 : m.pin) != null ? l : 0) > 0,
                  $ = (s = m == null ? void 0 : m.archive) != null ? s : !1,
                  P = h[t],
                  N = (u = m == null ? void 0 : m.unreadCount) != null ? u : 0,
                  M =
                    ((c = m == null ? void 0 : m.muteExpiration) != null
                      ? c
                      : 0) !== 0,
                  w = y[t]
                    ? await o("WAWebGetBizCatalogType").getBizCatalogType(p)
                    : null,
                  A =
                    r("WAWebWid").isStringLid(e.chatId) ||
                    (f == null ? void 0 : f.defaultSubgroup) === !0,
                  F = o("WAWebUserUtils").isMeAccount(p),
                  O = p.isBot(),
                  B = o(
                    "WAWebChatThreadLoggingUtils",
                  ).getWamDisappearingModeInitiatedByMe(
                    m == null ? void 0 : m.disappearingModeInitiatedByMe,
                  ),
                  W = o(
                    "WAWebChatThreadLoggingUtils",
                  ).getWamDisappearingModeTrigger(
                    m == null ? void 0 : m.disappearingModeTrigger,
                  );
                r("WAWebWid").isGroup(m == null ? void 0 : m.id) &&
                  ((B = o(
                    "WAWebChatThreadLoggingUtils",
                  ).getWamDisappearingModeInitiatedByMe(
                    f == null ? void 0 : f.disappearingModeInitiatedByMe,
                  )),
                  (W = o(
                    "WAWebChatThreadLoggingUtils",
                  ).getWamDisappearingModeTriggerGroups(
                    f == null ? void 0 : f.disappearingModeTrigger,
                  )));
                var q = I,
                  U = T,
                  V = null,
                  H = !1,
                  G = S[t];
                if (G != null) {
                  var z = o("WAWebWidFactory").createWid(G.id);
                  V = o(
                    "WAWebChatThreadLoggingUtils",
                  ).getOppositeVisibleIdentificationType(
                    G,
                    z.isLid() ? "lid" : "pn",
                  );
                  var j = o("WAWebLidMigrationUtils").toPn(z) != null,
                    K = o("WAWebUsernameTypes").isPresentUsername(G.username);
                  H = !j && K;
                }
                var Q = null,
                  X = null,
                  Y = null;
                if (!_ && p.isRegularUser()) {
                  var J, Z;
                  ((Q = e.msgsSent > 0),
                    (X =
                      ((J = R[t]) == null ? void 0 : J.eurl) != null ||
                      ((Z = R[t]) == null ? void 0 : Z.previewEurl) != null),
                    (Y = m != null && L.has(m.id)));
                }
                var ee = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE
                  .OTHERS;
                if (
                  (p.isLid() &&
                    (ee = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE
                      .LID_CTWA),
                  m != null && m.lidOriginType)
                )
                  switch (m == null ? void 0 : m.lidOriginType) {
                    case o("WAWebUsernameTypes").LidOriginType.PNH_CTWA:
                      ee = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE
                        .LID_CTWA;
                      break;
                    case o("WAWebUsernameTypes").LidOriginType.GENERAL:
                      ee = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE
                        .OTHERS;
                      break;
                  }
                return babelHelpers.extends({}, e, {
                  isPinned: x,
                  isArchived: $,
                  contactInfo: D,
                  threadType: o("WAWebGetThreadType").getThreadTypeFromWid(
                    p,
                    f == null
                      ? null
                      : o("WAWebGroupMetadataGetters").getGroupType(f),
                  ),
                  chatTypeInd: E[t],
                  messagesStarred: P,
                  messagesUnread: N,
                  isMuted: M,
                  bizCatalogType: w,
                  isPnhEnabledChat: A,
                  isMessageYourself: F,
                  isUserAgent: O,
                  ephemeralityInitiator: B,
                  ephemeralityTriggerAction: W,
                  isUsernameThread: H,
                  hasUsername: q,
                  hasUsernamePin: U,
                  oppositeVisibleIdentification: V,
                  isUsernameThreadAtCreation:
                    (d = m == null ? void 0 : m.isUsernameThreadAtCreation) !=
                    null
                      ? d
                      : void 0,
                  hasReplied1On1: Q != null ? Q : void 0,
                  sharesCommonGroup: Y != null ? Y : void 0,
                  oppositePartyHasProfilePhoto: X != null ? X : void 0,
                  chatOrigins: ee,
                  afterReadDuration:
                    (m == null ? void 0 : m.afterReadDuration) != null &&
                    o("WAWebAfterReadUtils").isAfterReadEnabled()
                      ? m.afterReadDuration
                      : void 0,
                });
              }),
            );
            function M(e) {
              return Promise.all(
                e.map(async function (e) {
                  return e == null
                    ? 0
                    : (
                        await o(
                          "WAWebDBGetStarredMessagesForChat",
                        ).getStarredMessagesForChat(
                          o("WAWebWidFactory").createWid(e.id),
                          Number.MAX_SAFE_INTEGER,
                        )
                      ).length;
                }),
              );
            }
            function w(e) {
              return o(
                "WAWebDBBulkGetIsContactABusiness",
              ).bulkGetIsContactABusiness(
                e.map(function (e) {
                  return e == null
                    ? null
                    : o("WAWebWidFactory").createWid(e.id);
                }),
              );
            }
            function A(e) {
              return o("WAWebDBGroupsGroupMetadata").bulkGetGroupMetadata(
                e.map(function (e) {
                  return e == null
                    ? null
                    : o("WAWebWidFactory").createWid(e.id);
                }),
              );
            }
            async function F(e) {
              try {
                var n = t.map(function (t, n) {
                    var r;
                    return o("WAWebGetChatTypeInd").getChatTypeWid(
                      o("WAWebWidFactory").createWid(t.chatId),
                      (r = e[n]) == null ? void 0 : r.owner,
                    );
                  }),
                  a = Array.from(new Set(n)),
                  i = await o(
                    "WAWebApiVerifiedBusinessName",
                  ).bulkGetVerifiedBusinessNameRecordsLidAware(a),
                  l = new Map(
                    a.map(function (e, t) {
                      return [e, o("WAWebGetChatTypeInd").getChatTypeInd(i[t])];
                    }),
                  );
                return n.map(function (e) {
                  var t;
                  return (t = l.get(e)) != null
                    ? t
                    : o("WAWebWamEnumChatType").CHAT_TYPE.UNKNOWN;
                });
              } catch (e) {
                return (
                  o("WALogger")
                    .WARN(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "[ChatThreadLoggingEventStore] chat type lookup failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs(
                      "chatThreadLoggingEventStore-chat-type-lookup-failed",
                    ),
                  t.map(function () {
                    return o("WAWebWamEnumChatType").CHAT_TYPE.UNKNOWN;
                  })
                );
              }
            }
            function O(e) {
              return o("WAWebSchemaParticipant")
                .getParticipantTable()
                .bulkGet(
                  e.map(function (e) {
                    return e == null
                      ? ""
                      : o("WAWebWidFactory").createWid(e.id).toString();
                  }),
                );
            }
            function B(e) {
              return o("WAWebSchemaBusinessProfile")
                .getBusinessProfileTable()
                .bulkGet(
                  e.map(function (e) {
                    return e == null
                      ? ""
                      : o("WAWebWidFactory").createWid(e.id).toString();
                  }),
                );
            }
            function W(e) {
              return r("WAWebLidAwareContactsDB").bulkGet(
                e.map(function (e) {
                  if (e == null) return "";
                  var t = o("WAWebWidFactory").createWid(e.id);
                  if (!t.isRegularUser()) return "";
                  if (!t.isLid()) return t.toJid();
                  var n = o("WAWebApiContact").getPhoneNumber(t);
                  return n == null ? t.toJid() : "";
                }),
              );
            }
            function q(e) {
              return o("WAWebSchemaProfilePicThumb")
                .getProfilePicThumbTable()
                .bulkGet(
                  e.map(function (e) {
                    return e == null
                      ? ""
                      : o("WAWebWidFactory").createWid(e.id).toString();
                  }),
                );
            }
            async function U(e) {
              var t = new Map();
              for (var n of e)
                if (n != null) {
                  var a = o("WAWebWidFactory").createWid(n.id);
                  if (!(!a.isRegularUser() || r("WAWebWid").isGroup(n.id))) {
                    t.set(n.id, n.id);
                    var i = n.id.replace("@c.us", "@s.whatsapp.net");
                    i !== n.id && t.set(i, n.id);
                    var l = o("WAWebApiContact").getAlternateUserWid(a);
                    l != null && t.set(l.toString(), n.id);
                  }
                }
              if (t.size === 0) return new Set();
              var s = await o("WAWebSchemaParticipant")
                  .getParticipantTable()
                  .anyOf(["participants"], Array.from(t.keys())),
                u = new Set();
              for (var c of s) {
                var d,
                  m = (d = c.participants) != null ? d : [];
                if (
                  m.some(function (e) {
                    return o("WAWebUserUtils").isMeAccount(
                      o("WAWebWidFactory").createWid(e),
                    );
                  })
                )
                  for (var p of m) {
                    var _ = t.get(p);
                    _ != null && u.add(_);
                  }
              }
              return u;
            }
          }),
          (n.getEvent = async function (t, n) {
            this.$1.size > 0 && (await this.$4());
            var e = await o(
              "WAWebApiChatThreadLoggingPendingEvents",
            ).getChatEvent(t, n);
            return e == null ? null : (await this.$6([e]))[0];
          }),
          (n.getBeforeInclusive = async function (t) {
            return (
              this.$1.size > 0 && (await this.$4()),
              this.$6(
                await o(
                  "WAWebApiChatThreadLoggingPendingEvents",
                ).getBeforeInclusive(t),
              )
            );
          }),
          (n.deleteBeforeInclusive = async function (t) {
            return (
              this.$1.size > 0 && (await this.$4()),
              o("WAWebApiChatThreadLoggingPendingEvents").deleteBeforeInclusive(
                t,
              )
            );
          }),
          t
        );
      })();
    function f(e, t) {
      if (t.isExcludedModification === !0) {
        t.isBot && t.isEdit && (e.addBotMessagesEdited += 1);
        return;
      }
      ((e.addMsgsReceived += 1),
        t.isViewOnce && (e.addViewOnceMsgsReceived += 1),
        t.isCommerceMessage === !0 && (e.addCommerceMsgsReceived += 1),
        t.isReaction && (e.addReactionsReceived += 1),
        t.isForwarded && (e.addForwardMessagesReceived += 1),
        t.isBot &&
          (t.isEdit
            ? (e.addBotMessagesEdited += 1)
            : (e.addBotMessagesReceived += 1)),
        t.isEventCreation && (e.addEventCreationMessagesReceived += 1),
        t.isEventResponse && (e.addEventResponseMessagesReceived += 1),
        t.isAfterRead === !0 && (e.afterReadMessagesReceived += 1),
        g(e, t.isAfterRead));
    }
    function g(e, t) {
      t === !0 ? (e.afterReadTurnedOn = !0) : (e.afterReadTurnedOff = !0);
    }
    l.ChatThreadLoggingEventStoreImpl = _;
  },
  98,
);
