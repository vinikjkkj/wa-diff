__d(
  "WAWebChatThreadLoggingEventStore",
  [
    "Promise",
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
    "WAWebUserPrefsMeUser",
    "WAWebUsernameTypes",
    "WAWebWamEnumChatOriginsType",
    "WAWebWamEnumChatType",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = 5,
      f = (function () {
        function t(t, n) {
          var r = this;
          ((this.metadataStore = t),
            (this.$1 = new Map()),
            (this.$2 = n != null ? n : _),
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
        var a = t.prototype;
        return (
          (a.handleMessages = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  n = yield this.metadataStore.getOffset();
                if (n == null) {
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[ChatThreadLoggingEventStoreImpl] handleMessages: no offset",
                      ])),
                  );
                  return;
                }
                var r = yield this.metadataStore.getLastUploadedStartTs();
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
                (e.forEach(function (e) {
                  if (
                    o("WAWebChatThreadLoggingUtils").shouldUpdateChatEvent(
                      n,
                      e.ts,
                      r,
                    )
                  ) {
                    var l = o("WAWebChatThreadLoggingUtils").computeStartTs(
                        n,
                        e.ts,
                      ),
                      s = e.chatId.toString({ legacy: !0 }),
                      u = s + "_" + String(l),
                      c = t.$1.get(u),
                      d =
                        c != null
                          ? c
                          : babelHelpers.extends(
                              {},
                              o("WAWebChatThreadLoggingCountFields")
                                .COUNT_FIELDS,
                              o("WAWebChatThreadLoggingBoolFlagFields")
                                .FLAG_FIELDS,
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
                    c == null && t.$1.set(u, d);
                    var m = o(
                        "WAWebChatThreadLoggingCountFields",
                      ).toMaybeCountActionType(e.activityType),
                      p = o(
                        "WAWebChatThreadLoggingBoolFlagFields",
                      ).toMaybeBoolFlagActionType(e.activityType);
                    if (m != null) d[m] += 1;
                    else if (p != null)
                      d[p] = e.boolValue === void 0 ? !0 : e.boolValue;
                    else
                      switch (e.activityType) {
                        case "msgSend":
                          ((d.addMsgsSent += 1),
                            e.isViewOnce && (d.addViewOnceMsgsSent += 1),
                            e.isCommerceMessage === !0 &&
                              (d.addCommerceMsgsSent += 1),
                            e.isPdpInquiry === !0 &&
                              (d.addPdpInquiriesSent += 1),
                            e.isReply && (d.repliesSent += 1),
                            e.isReaction && (d.addReactionsSent += 1),
                            e.isForwarded && (d.addForwardMessagesSent += 1),
                            e.isEdit && (d.addEditedMsgsSent += 1),
                            e.isBot && (d.addBotMessagesSent += 1),
                            e.isEventCreation &&
                              (d.addEventCreationMessagesSent += 1),
                            e.isEventResponse &&
                              (d.addEventResponseMessagesSent += 1),
                            e.isAfterRead === !0 &&
                              (d.afterReadMessagesSent += 1),
                            g(d, e.isAfterRead));
                          break;
                        case "msgReceive":
                          ((d.addMsgsReceived += 1),
                            e.isViewOnce && (d.addViewOnceMsgsReceived += 1),
                            e.isCommerceMessage === !0 &&
                              (d.addCommerceMsgsReceived += 1),
                            e.isReaction && (d.addReactionsReceived += 1),
                            e.isForwarded &&
                              (d.addForwardMessagesReceived += 1),
                            e.isBot &&
                              (e.isEdit
                                ? (d.addBotMessagesEdited += 1)
                                : (d.addBotMessagesReceived += 1)),
                            e.isEventCreation &&
                              (d.addEventCreationMessagesReceived += 1),
                            e.isEventResponse &&
                              (d.addEventResponseMessagesReceived += 1),
                            e.isAfterRead === !0 &&
                              (d.afterReadMessagesReceived += 1),
                            g(d, e.isAfterRead));
                          break;
                        case "msgRead":
                          d.addMsgsRead += e.readCount;
                          break;
                        case "afterReadMsgExpired":
                          ((d.afterReadMessagesExpired += 1),
                            e.wasUnread &&
                              (d.afterReadMessagesUnreadExpired += 1));
                          break;
                        case "groupStatusMsgReceive":
                          ((d.addMsgsReceived += 1),
                            e.isGroupStatusReplyOthersToOwn &&
                              (d.addEventGroupStatusReplyOthersToOwn += 1),
                            e.isGroupStatusReplyOthersToOthers &&
                              (d.addEventGroupStatusReplyOthersToOthers += 1),
                            e.isGroupStatusLikeOthersToOthers &&
                              (d.addEventGroupStatusLikeOthersToOthers += 1),
                            e.isGroupStatusLikeOthersToOwn &&
                              (d.addEventGroupStatusLikeOthersToOwn += 1));
                          break;
                        case "groupStatusMsgSend":
                          ((d.addMsgsSent += 1),
                            e.isGroupStatusReplyOwnToOwn &&
                              (d.addEventGroupStatusReplyOwnToOwn += 1),
                            e.isGroupStatusReplyOwnToOthers &&
                              (d.addEventGroupStatusReplyOwnToOthers += 1));
                          break;
                        case "viewOnceOpen":
                          d.addViewOnceMsgsOpened += 1;
                          break;
                        case "voipCall":
                          (e.outgoing
                            ? (d.addCallOffersSent += 1)
                            : (d.addCallOffersReceived += 1),
                            (d.addTotalCallDuration += e.durationInSeconds));
                          break;
                        default:
                          (i++, a.length < 3 && a.push(e.activityType));
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
                  yield this.$5());
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$5 = function () {
            this.$3.onOrBefore(this.$2 * 1e3);
          }),
          (a.$4 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = Array.from(this.$1.values());
              (this.$1.clear(),
                yield o(
                  "WAWebApiChatThreadLoggingPendingEvents",
                ).createOrUpdateChatEvents(e));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$6 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("WAWebApiBulkGetChats").bulkGetChats(
                    e.map(function (e) {
                      return o("WAWebWidFactory").createWid(e.chatId);
                    }),
                  ),
                  a = t.then(function (e) {
                    return A(e);
                  }),
                  i = t.then(function (e) {
                    return F(e);
                  }),
                  l = t.then(function (e) {
                    return O(e);
                  }),
                  s = t.then(function (e) {
                    return U(e);
                  }),
                  u = t.then(function (e) {
                    return V(e);
                  }),
                  c = t.then(q),
                  _ = l.then(B),
                  f = t.then(function (e) {
                    return H(e);
                  }),
                  g = t.then(function (e) {
                    return G(e);
                  }),
                  h = yield (p || (p = n("Promise"))).all([
                    t,
                    a,
                    i,
                    l,
                    c,
                    s,
                    u,
                    f,
                    g,
                    _,
                  ]),
                  y = h[0],
                  C = h[1],
                  b = h[2],
                  v = h[3],
                  S = h[4],
                  R = h[5],
                  L = h[6],
                  E = h[7],
                  k = h[8],
                  I = h[9],
                  T = yield p.all([
                    o("WAWebChatThreadLoggingUtils").getMeHasUsername(),
                    o("WAWebChatThreadLoggingUtils").getMeHasUsernamePin(),
                  ]),
                  D = T[0],
                  x = T[1],
                  $ = e.length,
                  P = {
                    chatRows: y.length,
                    starredCounts: C.length,
                    isABusiness: b.length,
                    groupMetadataRows: v.length,
                    groupParticipantsRows: S.length,
                    businessProfileRows: R.length,
                    contactFromChatRows: L.length,
                    profilePicThumbRows: E.length,
                  };
                for (var N of Object.entries(P)) {
                  var M = N[0],
                    w = N[1];
                  w !== $ &&
                    o("WALogger")
                      .ERROR(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[ChatThreadLoggingEventStore] len mismatch ",
                            " exp=",
                            " got=",
                            "",
                          ])),
                        M,
                        $,
                        w,
                      )
                      .sendLogs(
                        "chatThreadLoggingEventStore-array-length-mismatch-" +
                          M,
                      );
                }
                return p.all(
                  e.map(
                    (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e, t) {
                          var n,
                            a,
                            i,
                            l,
                            s,
                            u,
                            c,
                            d,
                            m = y[t],
                            p = o("WAWebWidFactory").createWid(e.chatId),
                            _ = p.isGroup(),
                            f = v[t],
                            g = o("WAWebBotTypes").BizBotAutomatedType.cast(
                              (n = R[t]) == null ? void 0 : n.automatedType,
                            ),
                            h = _
                              ? {
                                  isAGroup: _,
                                  groupSize:
                                    (a =
                                      (i = S[t]) == null ||
                                      (i = i.participants) == null
                                        ? void 0
                                        : i.length) != null
                                      ? a
                                      : 1,
                                  groupType:
                                    f == null
                                      ? o("WAWebGroupType").GroupType.DEFAULT
                                      : o(
                                          "WAWebGroupMetadataGetters",
                                        ).getGroupType(f),
                                }
                              : {
                                  isAGroup: _,
                                  isAContact: p.isUserNotPSA()
                                    ? yield o(
                                        "WAWebApiContact",
                                      ).isAddressBookContact(
                                        o("WAWebWidToJid").widToUserJid(p),
                                      )
                                    : !1,
                                  automatedType: g,
                                },
                            T =
                              ((l = m == null ? void 0 : m.pin) != null
                                ? l
                                : 0) > 0,
                            $ =
                              (s = m == null ? void 0 : m.archive) != null
                                ? s
                                : !1,
                            P = C[t],
                            N =
                              (u = m == null ? void 0 : m.unreadCount) != null
                                ? u
                                : 0,
                            M =
                              ((c = m == null ? void 0 : m.muteExpiration) !=
                              null
                                ? c
                                : 0) !== 0,
                            w = b[t]
                              ? yield o(
                                  "WAWebGetBizCatalogType",
                                ).getBizCatalogType(p)
                              : null,
                            A =
                              r("WAWebWid").isStringLid(e.chatId) ||
                              (f == null ? void 0 : f.defaultSubgroup) === !0,
                            F = o("WAWebUserPrefsMeUser").isMeAccount(p),
                            O = p.isBot(),
                            B = o(
                              "WAWebChatThreadLoggingUtils",
                            ).getWamDisappearingModeInitiatedByMe(
                              m == null
                                ? void 0
                                : m.disappearingModeInitiatedByMe,
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
                              f == null
                                ? void 0
                                : f.disappearingModeInitiatedByMe,
                            )),
                            (W = o(
                              "WAWebChatThreadLoggingUtils",
                            ).getWamDisappearingModeTriggerGroups(
                              f == null ? void 0 : f.disappearingModeTrigger,
                            )));
                          var q = D,
                            U = x,
                            V = null,
                            H = !1,
                            G = L[t];
                          if (G != null) {
                            var z = o("WAWebWidFactory").createWid(G.id);
                            V = o(
                              "WAWebChatThreadLoggingUtils",
                            ).getOppositeVisibleIdentificationType(
                              G,
                              z.isLid() ? "lid" : "pn",
                            );
                            var j = o("WAWebLidMigrationUtils").toPn(z) != null,
                              K = o("WAWebUsernameTypes").isPresentUsername(
                                G.username,
                              );
                            H = !j && K;
                          }
                          var Q = null,
                            X = null,
                            Y = null;
                          if (!_ && p.isRegularUser()) {
                            var J, Z;
                            ((Q = e.msgsSent > 0),
                              (X =
                                ((J = E[t]) == null ? void 0 : J.eurl) !=
                                  null ||
                                ((Z = E[t]) == null ? void 0 : Z.previewEurl) !=
                                  null),
                              (Y = m != null && k.has(m.id)));
                          }
                          var ee = o("WAWebWamEnumChatOriginsType")
                            .CHAT_ORIGINS_TYPE.OTHERS;
                          if (
                            (p.isLid() &&
                              (ee = o("WAWebWamEnumChatOriginsType")
                                .CHAT_ORIGINS_TYPE.LID_CTWA),
                            m != null && m.lidOriginType)
                          )
                            switch (m == null ? void 0 : m.lidOriginType) {
                              case o("WAWebUsernameTypes").LidOriginType
                                .PNH_CTWA:
                                ee = o("WAWebWamEnumChatOriginsType")
                                  .CHAT_ORIGINS_TYPE.LID_CTWA;
                                break;
                              case o("WAWebUsernameTypes").LidOriginType
                                .GENERAL:
                                ee = o("WAWebWamEnumChatOriginsType")
                                  .CHAT_ORIGINS_TYPE.OTHERS;
                                break;
                            }
                          return babelHelpers.extends({}, e, {
                            isPinned: T,
                            isArchived: $,
                            contactInfo: h,
                            threadType: o(
                              "WAWebGetThreadType",
                            ).getThreadTypeFromWid(
                              p,
                              f == null
                                ? null
                                : o("WAWebGroupMetadataGetters").getGroupType(
                                    f,
                                  ),
                            ),
                            chatTypeInd: I[t],
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
                              (d =
                                m == null
                                  ? void 0
                                  : m.isUsernameThreadAtCreation) != null
                                ? d
                                : void 0,
                            hasReplied1On1: Q != null ? Q : void 0,
                            sharesCommonGroup: Y != null ? Y : void 0,
                            oppositePartyHasProfilePhoto:
                              X != null ? X : void 0,
                            chatOrigins: ee,
                            afterReadDuration:
                              (m == null ? void 0 : m.afterReadDuration) !=
                                null &&
                              o("WAWebAfterReadUtils").isAfterReadEnabled()
                                ? m.afterReadDuration
                                : void 0,
                          });
                        },
                      );
                      return function (t, n) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  ),
                );
                function A(e) {
                  return (p || (p = n("Promise"))).all(
                    e.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            return e == null
                              ? 0
                              : (yield o(
                                  "WAWebDBGetStarredMessagesForChat",
                                ).getStarredMessagesForChat(
                                  o("WAWebWidFactory").createWid(e.id),
                                  Number.MAX_SAFE_INTEGER,
                                )).length;
                          },
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    ),
                  );
                }
                function F(e) {
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
                function O(e) {
                  return o("WAWebDBGroupsGroupMetadata").bulkGetGroupMetadata(
                    e.map(function (e) {
                      return e == null
                        ? null
                        : o("WAWebWidFactory").createWid(e.id);
                    }),
                  );
                }
                function B(e) {
                  return W.apply(this, arguments);
                }
                function W() {
                  return (
                    (W = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (t) {
                        try {
                          var n = e.map(function (e, n) {
                              var r;
                              return o("WAWebGetChatTypeInd").getChatTypeWid(
                                o("WAWebWidFactory").createWid(e.chatId),
                                (r = t[n]) == null ? void 0 : r.owner,
                              );
                            }),
                            a = Array.from(new Set(n)),
                            i = yield o(
                              "WAWebApiVerifiedBusinessName",
                            ).bulkGetVerifiedBusinessNameRecordsLidAware(a),
                            l = new Map(
                              a.map(function (e, t) {
                                return [
                                  e,
                                  o("WAWebGetChatTypeInd").getChatTypeInd(i[t]),
                                ];
                              }),
                            );
                          return n.map(function (e) {
                            var t;
                            return (t = l.get(e)) != null
                              ? t
                              : o("WAWebWamEnumChatType").CHAT_TYPE.UNKNOWN;
                          });
                        } catch (t) {
                          return (
                            o("WALogger")
                              .WARN(
                                m ||
                                  (m = babelHelpers.taggedTemplateLiteralLoose([
                                    "[ChatThreadLoggingEventStore] chat type lookup failed",
                                  ])),
                              )
                              .catching(r("getErrorSafe")(t))
                              .sendLogs(
                                "chatThreadLoggingEventStore-chat-type-lookup-failed",
                              ),
                            e.map(function () {
                              return o("WAWebWamEnumChatType").CHAT_TYPE
                                .UNKNOWN;
                            })
                          );
                        }
                      },
                    )),
                    W.apply(this, arguments)
                  );
                }
                function q(e) {
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
                function U(e) {
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
                function V(e) {
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
                function H(e) {
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
                function G(e) {
                  return z.apply(this, arguments);
                }
                function z() {
                  return (
                    (z = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t = new Map();
                        for (var n of e)
                          if (n != null) {
                            var a = o("WAWebWidFactory").createWid(n.id);
                            if (
                              !(
                                !a.isRegularUser() ||
                                r("WAWebWid").isGroup(n.id)
                              )
                            ) {
                              t.set(n.id, n.id);
                              var i = n.id.replace("@c.us", "@s.whatsapp.net");
                              i !== n.id && t.set(i, n.id);
                              var l =
                                o("WAWebApiContact").getAlternateUserWid(a);
                              l != null && t.set(l.toString(), n.id);
                            }
                          }
                        if (t.size === 0) return new Set();
                        var s = yield o("WAWebSchemaParticipant")
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
                      },
                    )),
                    z.apply(this, arguments)
                  );
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.getEvent = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                this.$1.size > 0 && (yield this.$4());
                var n = yield o(
                  "WAWebApiChatThreadLoggingPendingEvents",
                ).getChatEvent(e, t);
                return n == null ? null : (yield this.$6([n]))[0];
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.getBeforeInclusive = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return (
                  this.$1.size > 0 && (yield this.$4()),
                  this.$6(
                    yield o(
                      "WAWebApiChatThreadLoggingPendingEvents",
                    ).getBeforeInclusive(e),
                  )
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.deleteBeforeInclusive = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return (
                  this.$1.size > 0 && (yield this.$4()),
                  o(
                    "WAWebApiChatThreadLoggingPendingEvents",
                  ).deleteBeforeInclusive(e)
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })();
    function g(e, t) {
      t === !0 ? (e.afterReadTurnedOn = !0) : (e.afterReadTurnedOff = !0);
    }
    l.ChatThreadLoggingEventStoreImpl = f;
  },
  98,
);
