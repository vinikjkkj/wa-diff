__d(
  "WAWebChatThreadLoggingEventStore",
  [
    "WALogger",
    "WAShiftTimer",
    "WAWebABProps",
    "WAWebApiBulkGetChats",
    "WAWebApiChatThreadLoggingPendingEvents",
    "WAWebApiContact",
    "WAWebBotTypes",
    "WAWebChatThreadLoggingBoolFlagFields",
    "WAWebChatThreadLoggingCountFields",
    "WAWebChatThreadLoggingUtils",
    "WAWebDBBulkGetIsContactABusiness",
    "WAWebDBGetStarredMessagesForChat",
    "WAWebDBGroupsGroupMetadata",
    "WAWebGetBizCatalogType",
    "WAWebGroupType",
    "WAWebLidAwareContactsDB",
    "WAWebLidMigrationUtils",
    "WAWebNullFunc",
    "WAWebSchemaBusinessProfile",
    "WAWebSchemaParticipant",
    "WAWebSchemaProfilePicThumb",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWamEnumChatOriginsType",
    "WAWebWid",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = 5,
      p = (function () {
        function t(t, n) {
          var r = this;
          ((this.metadataStore = t),
            (this.$1 = new Map()),
            (this.$2 = n != null ? n : m),
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
                          (d.addEventResponseMessagesSent += 1));
                      break;
                    case "msgReceive":
                      ((d.addMsgsReceived += 1),
                        t.isViewOnce && (d.addViewOnceMsgsReceived += 1),
                        t.isCommerceMessage === !0 &&
                          (d.addCommerceMsgsReceived += 1),
                        t.isReaction && (d.addReactionsReceived += 1),
                        t.isForwarded && (d.addForwardMessagesReceived += 1),
                        t.isBot &&
                          (t.isEdit
                            ? (d.addBotMessagesEdited += 1)
                            : (d.addBotMessagesReceived += 1)),
                        t.isEventCreation &&
                          (d.addEventCreationMessagesReceived += 1),
                        t.isEventResponse &&
                          (d.addEventResponseMessagesReceived += 1));
                      break;
                    case "msgRead":
                      d.addMsgsRead += t.readCount;
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
                return P(e);
              }),
              a = e.then(function (e) {
                return N(e);
              }),
              i = e.then(function (e) {
                return M(e);
              }),
              l = e.then(function (e) {
                return A(e);
              }),
              s = e.then(function (e) {
                return F(e);
              }),
              u = e.then(w),
              c = o(
                "WAWebUsernameGatingUtils",
              ).usernameEngagementNetworkImpactLoggingEnabled(),
              m = c
                ? e.then(function (e) {
                    return O(e);
                  })
                : Promise.resolve(t.map(o("WAWebNullFunc").returnNull)),
              p = c
                ? e.then(function (e) {
                    return B(e);
                  })
                : Promise.resolve(new Set()),
              _ = await Promise.all([e, n, a, i, u, l, s, m, p]),
              f = _[0],
              g = _[1],
              h = _[2],
              y = _[3],
              C = _[4],
              b = _[5],
              v = _[6],
              S = _[7],
              R = _[8],
              L = await Promise.all([
                o("WAWebChatThreadLoggingUtils").getMeHasUsername(),
                o("WAWebChatThreadLoggingUtils").getMeHasUsernamePin(),
              ]),
              E = L[0],
              k = L[1],
              I = t.length,
              T = {
                chatRows: f.length,
                starredCounts: g.length,
                isABusiness: h.length,
                groupMetadataRows: y.length,
                groupParticipantsRows: C.length,
                businessProfileRows: b.length,
                contactFromChatRows: v.length,
                profilePicThumbRows: S.length,
              };
            for (var D of Object.entries(T)) {
              var x = D[0],
                $ = D[1];
              $ !== I &&
                o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[ChatThreadLoggingEventStore] len mismatch ",
                        " exp=",
                        " got=",
                        "",
                      ])),
                    x,
                    I,
                    $,
                  )
                  .sendLogs(
                    "chatThreadLoggingEventStore-array-length-mismatch-" + x,
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
                  d,
                  m,
                  p,
                  _ = f[t],
                  L = r("WAWebWid").isGroup(e.chatId),
                  I = y[t],
                  T = o("WAWebBotTypes").BizBotAutomatedType.cast(
                    (n = b[t]) == null ? void 0 : n.automatedType,
                  ),
                  D = L
                    ? {
                        isAGroup: L,
                        groupSize:
                          (a =
                            (i = C[t]) == null || (i = i.participants) == null
                              ? void 0
                              : i.length) != null
                            ? a
                            : 1,
                        groupType:
                          I == null
                            ? o("WAWebGroupType").GroupType.DEFAULT
                            : o("WAWebGroupType").getGroupTypeFromGroupMetadata(
                                I,
                              ),
                      }
                    : {
                        isAGroup: L,
                        isAContact: await o(
                          "WAWebApiContact",
                        ).isAddressBookContact(e.chatId),
                        automatedType: T,
                      },
                  x = o("WAWebWidFactory").createWid(e.chatId),
                  $ = ((l = _ == null ? void 0 : _.pin) != null ? l : 0) > 0,
                  P = (s = _ == null ? void 0 : _.archive) != null ? s : !1,
                  N = g[t],
                  M = (u = _ == null ? void 0 : _.unreadCount) != null ? u : 0,
                  w =
                    ((d = _ == null ? void 0 : _.muteExpiration) != null
                      ? d
                      : 0) !== 0,
                  A = h[t]
                    ? await o("WAWebGetBizCatalogType").getBizCatalogType(x)
                    : null,
                  F =
                    r("WAWebWid").isStringLid(e.chatId) ||
                    (I == null ? void 0 : I.defaultSubgroup) === !0,
                  O = o("WAWebUserPrefsMeUser").isMeAccount(x),
                  B = x.isBot(),
                  W = o(
                    "WAWebChatThreadLoggingUtils",
                  ).getWamDisappearingModeInitiatedByMe(
                    _ == null ? void 0 : _.disappearingModeInitiatedByMe,
                  ),
                  q = o(
                    "WAWebChatThreadLoggingUtils",
                  ).getWamDisappearingModeTrigger(
                    _ == null ? void 0 : _.disappearingModeTrigger,
                  );
                o("WAWebABProps").getABPropConfigValue(
                  "dm_initiator_trigger_groups",
                ) &&
                  r("WAWebWid").isGroup(_ == null ? void 0 : _.id) &&
                  ((W = o(
                    "WAWebChatThreadLoggingUtils",
                  ).getWamDisappearingModeInitiatedByMe(
                    I == null ? void 0 : I.disappearingModeInitiatedByMe,
                  )),
                  (q = o(
                    "WAWebChatThreadLoggingUtils",
                  ).getWamDisappearingModeTriggerGroups(
                    I == null ? void 0 : I.disappearingModeTrigger,
                  )));
                var U = E,
                  V = k,
                  H = null,
                  G = !1,
                  z = v[t];
                if (z != null) {
                  var j = o("WAWebWidFactory").createWid(z.id);
                  H = o(
                    "WAWebChatThreadLoggingUtils",
                  ).getOppositeVisibleIdentificationType(
                    z,
                    j.isLid() ? "lid" : "pn",
                  );
                  var K = o("WAWebLidMigrationUtils").toPn(j) != null,
                    Q = o("WAWebUsernameTypes").isPresentUsername(z.username);
                  G = !K && Q;
                }
                var X = null,
                  Y = null,
                  J = null;
                if (!L && x.isRegularUser() && c) {
                  var Z, ee;
                  ((X = e.msgsSent > 0),
                    (Y =
                      ((Z = S[t]) == null ? void 0 : Z.eurl) != null ||
                      ((ee = S[t]) == null ? void 0 : ee.previewEurl) != null),
                    (J = _ != null && R.has(_.id)));
                }
                var te = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE
                  .OTHERS;
                if (
                  (x.isLid() &&
                    (te = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE
                      .LID_CTWA),
                  _ != null && _.lidOriginType)
                )
                  switch (_ == null ? void 0 : _.lidOriginType) {
                    case o("WAWebUsernameTypes").LidOriginType.PNH_CTWA:
                      te = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE
                        .LID_CTWA;
                      break;
                    case o("WAWebUsernameTypes").LidOriginType.GENERAL:
                      te = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE
                        .OTHERS;
                      break;
                  }
                return babelHelpers.extends({}, e, {
                  isPinned: $,
                  isArchived: P,
                  contactInfo: D,
                  messagesStarred: N,
                  messagesUnread: M,
                  isMuted: w,
                  bizCatalogType: A,
                  isPnhEnabledChat: F,
                  isMessageYourself: O,
                  isUserAgent: B,
                  ephemeralityInitiator: W,
                  ephemeralityTriggerAction: q,
                  isUsernameThread: G,
                  hasUsername: U,
                  hasUsernamePin: V,
                  oppositeVisibleIdentification: H,
                  isUsernameThreadAtCreation:
                    (m = _ == null ? void 0 : _.isUsernameThreadAtCreation) !=
                    null
                      ? m
                      : void 0,
                  hasReplied1On1: X != null ? X : void 0,
                  sharesCommonGroup: J != null ? J : void 0,
                  oppositePartyHasProfilePhoto: Y != null ? Y : void 0,
                  chatOrigins: te,
                  afterReadDuration:
                    (p = _ == null ? void 0 : _.afterReadDuration) != null
                      ? p
                      : void 0,
                });
              }),
            );
            function P(e) {
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
            function N(e) {
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
            function M(e) {
              return o("WAWebDBGroupsGroupMetadata").bulkGetGroupMetadata(
                e.map(function (e) {
                  return e == null
                    ? null
                    : o("WAWebWidFactory").createWid(e.id);
                }),
              );
            }
            function w(e) {
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
            function A(e) {
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
            function F(e) {
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
            function O(e) {
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
            async function B(e) {
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
                    return o("WAWebUserPrefsMeUser").isMeAccount(
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
    l.ChatThreadLoggingEventStoreImpl = p;
  },
  98,
);
