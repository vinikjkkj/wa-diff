__d(
  "WAWebChatThreadLoggingEventStore",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
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
                              (d.addEventResponseMessagesSent += 1));
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
                              (d.addEventResponseMessagesReceived += 1));
                          break;
                        case "msgRead":
                          d.addMsgsRead += e.readCount;
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
                    return M(e);
                  }),
                  i = t.then(function (e) {
                    return w(e);
                  }),
                  l = t.then(function (e) {
                    return A(e);
                  }),
                  s = t.then(function (e) {
                    return O(e);
                  }),
                  u = t.then(function (e) {
                    return B(e);
                  }),
                  c = t.then(F),
                  p = o(
                    "WAWebUsernameGatingUtils",
                  ).usernameEngagementNetworkImpactLoggingEnabled(),
                  _ = p
                    ? t.then(function (e) {
                        return W(e);
                      })
                    : (m || (m = n("Promise"))).resolve(
                        e.map(o("WAWebNullFunc").returnNull),
                      ),
                  f = p
                    ? t.then(function (e) {
                        return q(e);
                      })
                    : (m || (m = n("Promise"))).resolve(new Set()),
                  g = yield (m || (m = n("Promise"))).all([
                    t,
                    a,
                    i,
                    l,
                    c,
                    s,
                    u,
                    _,
                    f,
                  ]),
                  h = g[0],
                  y = g[1],
                  C = g[2],
                  b = g[3],
                  v = g[4],
                  S = g[5],
                  R = g[6],
                  L = g[7],
                  E = g[8],
                  k = yield m.all([
                    o("WAWebChatThreadLoggingUtils").getMeHasUsername(),
                    o("WAWebChatThreadLoggingUtils").getMeHasUsernamePin(),
                  ]),
                  I = k[0],
                  T = k[1],
                  D = e.length,
                  x = {
                    chatRows: h.length,
                    starredCounts: y.length,
                    isABusiness: C.length,
                    groupMetadataRows: b.length,
                    groupParticipantsRows: v.length,
                    businessProfileRows: S.length,
                    contactFromChatRows: R.length,
                    profilePicThumbRows: L.length,
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
                        "chatThreadLoggingEventStore-array-length-mismatch-" +
                          P,
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
                            m,
                            _ = h[t],
                            f = r("WAWebWid").isGroup(e.chatId),
                            g = b[t],
                            k = o("WAWebBotTypes").BizBotAutomatedType.cast(
                              (n = S[t]) == null ? void 0 : n.automatedType,
                            ),
                            D = f
                              ? {
                                  isAGroup: f,
                                  groupSize:
                                    (a =
                                      (i = v[t]) == null ||
                                      (i = i.participants) == null
                                        ? void 0
                                        : i.length) != null
                                      ? a
                                      : 1,
                                  groupType:
                                    g == null
                                      ? o("WAWebGroupType").GroupType.DEFAULT
                                      : o(
                                          "WAWebGroupType",
                                        ).getGroupTypeFromGroupMetadata(g),
                                }
                              : {
                                  isAGroup: f,
                                  isAContact: yield o(
                                    "WAWebApiContact",
                                  ).isAddressBookContact(e.chatId),
                                  automatedType: k,
                                },
                            x = o("WAWebWidFactory").createWid(e.chatId),
                            $ =
                              ((l = _ == null ? void 0 : _.pin) != null
                                ? l
                                : 0) > 0,
                            P =
                              (s = _ == null ? void 0 : _.archive) != null
                                ? s
                                : !1,
                            N = y[t],
                            M =
                              (u = _ == null ? void 0 : _.unreadCount) != null
                                ? u
                                : 0,
                            w =
                              ((c = _ == null ? void 0 : _.muteExpiration) !=
                              null
                                ? c
                                : 0) !== 0,
                            A = C[t]
                              ? yield o(
                                  "WAWebGetBizCatalogType",
                                ).getBizCatalogType(x)
                              : null,
                            F =
                              r("WAWebWid").isStringLid(e.chatId) ||
                              (g == null ? void 0 : g.defaultSubgroup) === !0,
                            O = o("WAWebUserPrefsMeUser").isMeAccount(x),
                            B = x.isBot(),
                            W = o(
                              "WAWebChatThreadLoggingUtils",
                            ).getWamDisappearingModeInitiatedByMe(
                              _ == null
                                ? void 0
                                : _.disappearingModeInitiatedByMe,
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
                              g == null
                                ? void 0
                                : g.disappearingModeInitiatedByMe,
                            )),
                            (q = o(
                              "WAWebChatThreadLoggingUtils",
                            ).getWamDisappearingModeTriggerGroups(
                              g == null ? void 0 : g.disappearingModeTrigger,
                            )));
                          var U = I,
                            V = T,
                            H = null,
                            G = !1,
                            z = R[t];
                          if (z != null) {
                            var j = o("WAWebWidFactory").createWid(z.id);
                            H = o(
                              "WAWebChatThreadLoggingUtils",
                            ).getOppositeVisibleIdentificationType(
                              z,
                              j.isLid() ? "lid" : "pn",
                            );
                            var K = o("WAWebLidMigrationUtils").toPn(j) != null,
                              Q = !r("isStringNullOrEmpty")(z.username);
                            G = !K && Q;
                          }
                          var X = null,
                            Y = null,
                            J = null;
                          if (!f && x.isRegularUser() && p) {
                            var Z, ee;
                            ((X = e.msgsSent > 0),
                              (Y =
                                ((Z = L[t]) == null ? void 0 : Z.eurl) !=
                                  null ||
                                ((ee = L[t]) == null
                                  ? void 0
                                  : ee.previewEurl) != null),
                              (J = _ != null && E.has(_.id)));
                          }
                          var te = o("WAWebWamEnumChatOriginsType")
                            .CHAT_ORIGINS_TYPE.OTHERS;
                          if (
                            (x.isLid() &&
                              (te = o("WAWebWamEnumChatOriginsType")
                                .CHAT_ORIGINS_TYPE.LID_CTWA),
                            _ != null && _.lidOriginType)
                          )
                            switch (_ == null ? void 0 : _.lidOriginType) {
                              case o("WAWebUsernameTypes").LidOriginType
                                .PNH_CTWA:
                                te = o("WAWebWamEnumChatOriginsType")
                                  .CHAT_ORIGINS_TYPE.LID_CTWA;
                                break;
                              case o("WAWebUsernameTypes").LidOriginType
                                .GENERAL:
                                te = o("WAWebWamEnumChatOriginsType")
                                  .CHAT_ORIGINS_TYPE.OTHERS;
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
                              (d =
                                _ == null
                                  ? void 0
                                  : _.isUsernameThreadAtCreation) != null
                                ? d
                                : void 0,
                            hasReplied1On1: X != null ? X : void 0,
                            sharesCommonGroup: J != null ? J : void 0,
                            oppositePartyHasProfilePhoto:
                              Y != null ? Y : void 0,
                            chatOrigins: te,
                            afterReadDuration:
                              (m = _ == null ? void 0 : _.afterReadDuration) !=
                              null
                                ? m
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
                function M(e) {
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
                function F(e) {
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
                function O(e) {
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
                function B(e) {
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
                function W(e) {
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
                function q(e) {
                  return U.apply(this, arguments);
                }
                function U() {
                  return (
                    (U = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                    U.apply(this, arguments)
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
    l.ChatThreadLoggingEventStoreImpl = _;
  },
  98,
);
