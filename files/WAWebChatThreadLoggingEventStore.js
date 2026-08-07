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
    "WAWebSchemaBusinessProfile",
    "WAWebSchemaParticipant",
    "WAWebSchemaProfilePicThumb",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameTypes",
    "WAWebWamEnumChatOriginsType",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
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
                            f(d, e.isAfterRead));
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
                            f(d, e.isAfterRead));
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
                    return N(e);
                  }),
                  i = t.then(function (e) {
                    return M(e);
                  }),
                  l = t.then(function (e) {
                    return w(e);
                  }),
                  s = t.then(function (e) {
                    return F(e);
                  }),
                  u = t.then(function (e) {
                    return O(e);
                  }),
                  c = t.then(A),
                  p = t.then(function (e) {
                    return B(e);
                  }),
                  _ = t.then(function (e) {
                    return W(e);
                  }),
                  f = yield (m || (m = n("Promise"))).all([
                    t,
                    a,
                    i,
                    l,
                    c,
                    s,
                    u,
                    p,
                    _,
                  ]),
                  g = f[0],
                  h = f[1],
                  y = f[2],
                  C = f[3],
                  b = f[4],
                  v = f[5],
                  S = f[6],
                  R = f[7],
                  L = f[8],
                  E = yield m.all([
                    o("WAWebChatThreadLoggingUtils").getMeHasUsername(),
                    o("WAWebChatThreadLoggingUtils").getMeHasUsernamePin(),
                  ]),
                  k = E[0],
                  I = E[1],
                  T = e.length,
                  D = {
                    chatRows: g.length,
                    starredCounts: h.length,
                    isABusiness: y.length,
                    groupMetadataRows: C.length,
                    groupParticipantsRows: b.length,
                    businessProfileRows: v.length,
                    contactFromChatRows: S.length,
                    profilePicThumbRows: R.length,
                  };
                for (var x of Object.entries(D)) {
                  var $ = x[0],
                    P = x[1];
                  P !== T &&
                    o("WALogger")
                      .ERROR(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[ChatThreadLoggingEventStore] len mismatch ",
                            " exp=",
                            " got=",
                            "",
                          ])),
                        $,
                        T,
                        P,
                      )
                      .sendLogs(
                        "chatThreadLoggingEventStore-array-length-mismatch-" +
                          $,
                      );
                }
                return m.all(
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
                            m = g[t],
                            p = o("WAWebWidFactory").createWid(e.chatId),
                            _ = p.isGroup(),
                            f = C[t],
                            E = o("WAWebBotTypes").BizBotAutomatedType.cast(
                              (n = v[t]) == null ? void 0 : n.automatedType,
                            ),
                            T = _
                              ? {
                                  isAGroup: _,
                                  groupSize:
                                    (a =
                                      (i = b[t]) == null ||
                                      (i = i.participants) == null
                                        ? void 0
                                        : i.length) != null
                                      ? a
                                      : 1,
                                  groupType:
                                    f == null
                                      ? o("WAWebGroupType").GroupType.DEFAULT
                                      : o(
                                          "WAWebGroupType",
                                        ).getGroupTypeFromGroupMetadata(f),
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
                                  automatedType: E,
                                },
                            D =
                              ((l = m == null ? void 0 : m.pin) != null
                                ? l
                                : 0) > 0,
                            x =
                              (s = m == null ? void 0 : m.archive) != null
                                ? s
                                : !1,
                            $ = h[t],
                            P =
                              (u = m == null ? void 0 : m.unreadCount) != null
                                ? u
                                : 0,
                            N =
                              ((c = m == null ? void 0 : m.muteExpiration) !=
                              null
                                ? c
                                : 0) !== 0,
                            M = y[t]
                              ? yield o(
                                  "WAWebGetBizCatalogType",
                                ).getBizCatalogType(p)
                              : null,
                            w =
                              r("WAWebWid").isStringLid(e.chatId) ||
                              (f == null ? void 0 : f.defaultSubgroup) === !0,
                            A = o("WAWebUserPrefsMeUser").isMeAccount(p),
                            F = p.isBot(),
                            O = o(
                              "WAWebChatThreadLoggingUtils",
                            ).getWamDisappearingModeInitiatedByMe(
                              m == null
                                ? void 0
                                : m.disappearingModeInitiatedByMe,
                            ),
                            B = o(
                              "WAWebChatThreadLoggingUtils",
                            ).getWamDisappearingModeTrigger(
                              m == null ? void 0 : m.disappearingModeTrigger,
                            );
                          r("WAWebWid").isGroup(m == null ? void 0 : m.id) &&
                            ((O = o(
                              "WAWebChatThreadLoggingUtils",
                            ).getWamDisappearingModeInitiatedByMe(
                              f == null
                                ? void 0
                                : f.disappearingModeInitiatedByMe,
                            )),
                            (B = o(
                              "WAWebChatThreadLoggingUtils",
                            ).getWamDisappearingModeTriggerGroups(
                              f == null ? void 0 : f.disappearingModeTrigger,
                            )));
                          var W = k,
                            q = I,
                            U = null,
                            V = !1,
                            H = S[t];
                          if (H != null) {
                            var G = o("WAWebWidFactory").createWid(H.id);
                            U = o(
                              "WAWebChatThreadLoggingUtils",
                            ).getOppositeVisibleIdentificationType(
                              H,
                              G.isLid() ? "lid" : "pn",
                            );
                            var z = o("WAWebLidMigrationUtils").toPn(G) != null,
                              j = o("WAWebUsernameTypes").isPresentUsername(
                                H.username,
                              );
                            V = !z && j;
                          }
                          var K = null,
                            Q = null,
                            X = null;
                          if (!_ && p.isRegularUser()) {
                            var Y, J;
                            ((K = e.msgsSent > 0),
                              (Q =
                                ((Y = R[t]) == null ? void 0 : Y.eurl) !=
                                  null ||
                                ((J = R[t]) == null ? void 0 : J.previewEurl) !=
                                  null),
                              (X = m != null && L.has(m.id)));
                          }
                          var Z = o("WAWebWamEnumChatOriginsType")
                            .CHAT_ORIGINS_TYPE.OTHERS;
                          if (
                            (p.isLid() &&
                              (Z = o("WAWebWamEnumChatOriginsType")
                                .CHAT_ORIGINS_TYPE.LID_CTWA),
                            m != null && m.lidOriginType)
                          )
                            switch (m == null ? void 0 : m.lidOriginType) {
                              case o("WAWebUsernameTypes").LidOriginType
                                .PNH_CTWA:
                                Z = o("WAWebWamEnumChatOriginsType")
                                  .CHAT_ORIGINS_TYPE.LID_CTWA;
                                break;
                              case o("WAWebUsernameTypes").LidOriginType
                                .GENERAL:
                                Z = o("WAWebWamEnumChatOriginsType")
                                  .CHAT_ORIGINS_TYPE.OTHERS;
                                break;
                            }
                          return babelHelpers.extends({}, e, {
                            isPinned: D,
                            isArchived: x,
                            contactInfo: T,
                            messagesStarred: $,
                            messagesUnread: P,
                            isMuted: N,
                            bizCatalogType: M,
                            isPnhEnabledChat: w,
                            isMessageYourself: A,
                            isUserAgent: F,
                            ephemeralityInitiator: O,
                            ephemeralityTriggerAction: B,
                            isUsernameThread: V,
                            hasUsername: W,
                            hasUsernamePin: q,
                            oppositeVisibleIdentification: U,
                            isUsernameThreadAtCreation:
                              (d =
                                m == null
                                  ? void 0
                                  : m.isUsernameThreadAtCreation) != null
                                ? d
                                : void 0,
                            hasReplied1On1: K != null ? K : void 0,
                            sharesCommonGroup: X != null ? X : void 0,
                            oppositePartyHasProfilePhoto:
                              Q != null ? Q : void 0,
                            chatOrigins: Z,
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
                function N(e) {
                  return (m || (m = n("Promise"))).all(
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
                function M(e) {
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
                function w(e) {
                  return o("WAWebDBGroupsGroupMetadata").bulkGetGroupMetadata(
                    e.map(function (e) {
                      return e == null
                        ? null
                        : o("WAWebWidFactory").createWid(e.id);
                    }),
                  );
                }
                function A(e) {
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
                function F(e) {
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
                function O(e) {
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
                function B(e) {
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
                function W(e) {
                  return q.apply(this, arguments);
                }
                function q() {
                  return (
                    (q = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                    q.apply(this, arguments)
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
    function f(e, t) {
      t === !0 ? (e.afterReadTurnedOn = !0) : (e.afterReadTurnedOff = !0);
    }
    l.ChatThreadLoggingEventStoreImpl = _;
  },
  98,
);
