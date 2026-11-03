__d(
  "WAWebGroupHistoryBundleProcessor",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWeb-dexie",
    "WAWebABProps",
    "WAWebAck",
    "WAWebAddonConstants",
    "WAWebAddonProcessMsgs",
    "WAWebAddonProcessMsgsUtils",
    "WAWebApiFilterAndReplaceMessages",
    "WAWebAssociationProcessor",
    "WAWebBackendApi",
    "WAWebCreateNackFromStanza",
    "WAWebDBEncryptMultipleMsgs",
    "WAWebDBGroupsGroupMetadata",
    "WAWebDBMessageUtils",
    "WAWebDBMsgUtils",
    "WAWebDBReportingTokenUtils",
    "WAWebDBStoreEncryptedMsgs",
    "WAWebDecompressAndDecodeBundle",
    "WAWebE2EProtoUtils",
    "WAWebEphemeralKeepInChatUtils",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryMessageManager",
    "WAWebGroupHistoryMsgData.flow",
    "WAWebGroupHistoryReceiverFailureReason",
    "WAWebGroupHistoryReportingTokenValidator",
    "WAWebGroupHistorySupportedMessageTypesUtil",
    "WAWebGroupJoinRequestMetricUtils",
    "WAWebHandleOrphansForNewMsg",
    "WAWebLidMigrationUtils",
    "WAWebMessageAssociation.flow",
    "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
    "WAWebMessagingGatingUtils",
    "WAWebMsgEphemerality",
    "WAWebMsgHistorySyncExtensions",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgStoreExtensions",
    "WAWebMsgType",
    "WAWebParseWebMessageInfoApi",
    "WAWebProcessBaseMsgInfo",
    "WAWebProtobufMsgKeyUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsGroupHistory.pb",
    "WAWebProtobufsWeb.pb",
    "WAWebReportingTokenUtils",
    "WAWebSchemaMessage",
    "WAWebSerializeError",
    "WAWebUpdateMessageHistoryBundleState",
    "WAWebWamEnumReportingTokenValidationFailureReason",
    "asyncToGeneratorRuntime",
    "countWhere",
    "decodeProtobuf",
    "err",
    "sumBy",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k = 3,
      I = {
        parsedMessages: [],
        addonPromises: [],
        reportingInfoRows: [],
        pinnedMsgKeys: new Set(),
        skipReasonCounts: new Map(),
      },
      T = new Map([
        [
          o("WAWebProtobufsE2E.pb").MessageAssociation$AssociationType
            .POLL_ADD_OPTION,
          function (e) {
            var t;
            return (
              ((t = e.message) == null ? void 0 : t.pollAddOptionMessage) !=
              null
            );
          },
        ],
      ]);
    function D(e, t, n) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i = self.performance.now(),
            l = o("WAWebGroupJoinRequestMetricUtils").getSanitizedJid(a),
            _ = 0,
            f = 0,
            g = !1,
            h = !1;
          try {
            var y, C, b;
            yield o(
              "WAWebUpdateMessageHistoryBundleState",
            ).updateGroupHistoryBundleState(
              e.id,
              o("WAWebGroupHistoryMsgData.flow")
                .MessageHistoryBundleProcessState.PROCESSING,
            );
            var v = yield o("WAWebDecompressAndDecodeBundle").decompressBundle(
                t,
              ),
              S = o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufsGroupHistory.pb").GroupHistorySpec,
                v,
              );
            ((g = !0),
              (_ = S.messages.length),
              (f =
                (y =
                  (C = S.outOfWindowPinnedMessages) == null
                    ? void 0
                    : C.length) != null
                  ? y
                  : 0));
            var R = r("countWhere")(S.messages, function (e) {
                var t;
                return (
                  ((t = e.message) == null || (t = t.pinInChatMessage) == null
                    ? void 0
                    : t.type) ===
                  o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type
                    .PIN_FOR_ALL
                );
              }),
              L = r("sumBy")(
                (b = S.uncountedAssociatedMessageLists) != null ? b : [],
                function (e) {
                  var t, n;
                  return (t = (n = e.messages) == null ? void 0 : n.length) !=
                    null
                    ? t
                    : 0;
                },
              );
            o("WAWebBackendApi").frontendFireAndForget(
              "logGroupHistoryParseHistoryProtoSucceeded",
              {
                groupId: l,
                messagesCount: _,
                oowPinsCount: f,
                pinsCount: R,
                uncountedCount: L,
              },
            );
            var k = e.unsafe(),
              T = null;
            try {
              var D;
              T = yield o(
                "WAWebGroupHistoryReportingTokenValidator",
              ).prepareValidationContext({
                bundleMessageSecret: k.messageSecret,
                bundleMsgId: e.id,
                bundleMsgTimestamp: (D = k.t) != null ? D : 0,
                bundleSenderWid: k.author,
                groupWid: a,
                inflatedBytes: v,
              });
            } catch (e) {
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] Failed to prepare validation context: ",
                    "",
                  ])),
                r("WAWebSerializeError")(e),
              );
            }
            var x = o("WAWebProcessBaseMsgInfo").msgToBaseMsgInfo(k),
              P = O(S),
              N = yield (E || (E = n("Promise"))).all([
                $({
                  baseMessage: x,
                  bundleMessageKey: e.id,
                  bundleProtoMessages: S.messages,
                  chatId: a,
                  validationCtx: T,
                }),
                f > 0
                  ? $({
                      baseMessage: x,
                      bundleMessageKey: e.id,
                      bundleProtoMessages: S.outOfWindowPinnedMessages,
                      chatId: a,
                      skipMessageTooOldCheck: !0,
                      validationCtx: null,
                    })
                  : I,
                P.length > 0
                  ? $({
                      baseMessage: x,
                      bundleMessageKey: e.id,
                      bundleProtoMessages: P,
                      chatId: a,
                      validationCtx: null,
                    })
                  : I,
              ]),
              M = N[0],
              w = M.addonPromises,
              F = M.parsedMessages,
              B = M.pinnedMsgKeys,
              W = M.reportingInfoRows,
              q = M.skipReasonCounts,
              U = N[1],
              V = U.addonPromises,
              H = U.parsedMessages,
              G = U.reportingInfoRows,
              z = U.skipReasonCounts,
              j = N[2],
              Q = j.addonPromises,
              Y = j.parsedMessages,
              Z = j.reportingInfoRows,
              te = [].concat(F, H, Y),
              oe = [].concat(w, V, Q),
              ae = [].concat(W, G, Z);
            if (te.length === 0) {
              (o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history]: No valid messages parsed from bundle",
                  ])),
              ),
                o("WAWebBackendApi").frontendFireAndForget(
                  "logGroupHistoryDbInserted",
                  {
                    dbIgnoredOlderMessages: _ + f > 0,
                    groupId: l,
                    messagesCount: 0,
                    oowPinsCount: 0,
                    pinsCount: 0,
                    receiverFailureReason: o(
                      "WAWebGroupHistoryReceiverFailureReason",
                    ).formatReceiverFailureReason(
                      o(
                        "WAWebGroupHistoryReceiverFailureReason",
                      ).mergeReasonCounts([
                        ["", q],
                        [
                          o("WAWebGroupHistoryReceiverFailureReason")
                            .OUT_WINDOW_PIN_REASON_PREFIX,
                          z,
                        ],
                      ]),
                    ),
                    uncountedCount: 0,
                  },
                ));
              return;
            }
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history]: parsed ",
                  " msgs (",
                  " OOW pins), injecting",
                ])),
              te.length,
              H.length,
            );
            var ie = yield K(te),
              le = new Set(
                Y.map(function (e) {
                  return e.id.toString();
                }),
              ),
              se = A(yield X(ie, a), le),
              ue = yield J(oe, x),
              ce =
                se.filter(function (e) {
                  return !le.has(e.id.toString());
                }).length <
                S.messages.length + f
                  ? o("WAWebGroupHistoryMsgData.flow")
                      .MessageHistoryBundleProcessState.INJECTED_PARTIAL
                  : o("WAWebGroupHistoryMsgData.flow")
                      .MessageHistoryBundleProcessState.INJECTED,
              de = new Set(
                H.map(function (e) {
                  return e.id.toString();
                }),
              ),
              me = new Set(
                ie.map(function (e) {
                  return e.id.toString();
                }),
              ),
              pe = new Set(
                se.map(function (e) {
                  return e.id.toString();
                }),
              );
            if (
              (yield ee(se, a, e.id, function (e) {
                var t,
                  n = new Set(
                    e.map(function (e) {
                      return e.id.toString();
                    }),
                  );
                ((h = !0),
                  o("WAWebBackendApi").frontendFireAndForget(
                    "logGroupHistoryDbInserted",
                    babelHelpers.extends({}, ne(e, de, le, B), {
                      applyDurationMs: Math.round(self.performance.now() - i),
                      dbIgnoredOlderMessages:
                        ce ===
                        o("WAWebGroupHistoryMsgData.flow")
                          .MessageHistoryBundleProcessState.INJECTED_PARTIAL,
                      groupId: l,
                      receiverFailureReason: (t = o(
                        "WAWebGroupHistoryReceiverFailureReason",
                      )).formatReceiverFailureReason(
                        t.mergeReasonCounts([
                          ["", q],
                          ["", re(F, me, pe, n)],
                          [t.OUT_WINDOW_PIN_REASON_PREFIX, z],
                          [t.OUT_WINDOW_PIN_REASON_PREFIX, re(H, me, pe, n)],
                        ]),
                      ),
                    }),
                  ));
              }),
              ae.length > 0)
            )
              try {
                var _e = new Set(
                    se.flatMap(function (e) {
                      var t = [e.id.toString()];
                      return (
                        e.protocolMessageKey != null &&
                          t.push(e.protocolMessageKey.toString()),
                        t
                      );
                    }),
                  ),
                  fe = ae.filter(function (e) {
                    return _e.has(e.msgKey);
                  });
                fe.length > 0 &&
                  (yield o(
                    "WAWebDBReportingTokenUtils",
                  ).handleAddReportingInfos(fe));
              } catch (e) {
                o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history] Failed to persist reporting infos: ",
                      "",
                    ])),
                  r("WAWebSerializeError")(e),
                );
              }
            (yield o("WAWebMsgStoreExtensions").handleStoredSyncedMsgs(se),
              se.length > 0 &&
                (yield o("WAWebBackendApi").frontendSendAndReceive(
                  "hydrateReactionsForMessages",
                  {
                    messageIds: se.map(function (e) {
                      return e.id.toString();
                    }),
                  },
                ),
                yield (E || (E = n("Promise"))).all(
                  se.map(function (e) {
                    return o(
                      "WAWebHandleOrphansForNewMsg",
                    ).handleOrphansForNewMsg(e);
                  }),
                )),
              ue.length > 0 &&
                (yield o("WAWebAddonProcessMsgs").processMsgsAndGetOrphans(
                  ue,
                  null,
                  o("WAWebAddonConstants").AddonProcessMode
                    .ProcessGroupHistoryBundle,
                )),
              yield o(
                "WAWebUpdateMessageHistoryBundleState",
              ).updateGroupHistoryBundleState(e.id, ce));
          } catch (t) {
            if (t instanceof r("WAWeb-dexie").BulkError) {
              (h ||
                o("WAWebBackendApi").frontendFireAndForget(
                  "logGroupHistoryDbInserted",
                  {
                    dbIgnoredOlderMessages: !0,
                    groupId: l,
                    messagesCount: 0,
                    oowPinsCount: 0,
                    pinsCount: 0,
                    receiverFailureReason: o(
                      "WAWebGroupHistoryReceiverFailureReason",
                    ).FAILURE_REASON_INSERT_MESSAGES_EXCEPTION,
                    uncountedCount: 0,
                  },
                ),
                yield o(
                  "WAWebUpdateMessageHistoryBundleState",
                ).updateGroupHistoryBundleState(
                  e.id,
                  o("WAWebGroupHistoryMsgData.flow")
                    .MessageHistoryBundleProcessState.FAILED_NO_RETRY,
                ));
              return;
            }
            (o("WAWebBackendApi").frontendFireAndForget(
              "logGroupHistoryParseHistoryProtoFailed",
              {
                groupId: l,
                messagesCount: _ + f,
                oowPinsCount: f,
                receiverFailureReason: g
                  ? o("WAWebGroupHistoryReceiverFailureReason")
                      .FAILURE_REASON_PROCESSING_FAILED
                  : o("WAWebGroupHistoryReceiverFailureReason")
                      .FAILURE_REASON_PROTOBUF_PARSE_FAILED,
              },
            ),
              yield o(
                "WAWebUpdateMessageHistoryBundleState",
              ).updateGroupHistoryBundleState(
                e.id,
                o("WAWebGroupHistoryMsgData.flow")
                  .MessageHistoryBundleProcessState.FAILED,
              ),
              t instanceof Error
                ? o("WALogger")
                    .ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "[group-history]: Failed to process bundle",
                        ])),
                    )
                    .catching(t)
                    .sendLogs("group-history-bundle-processing-failed")
                : o("WALogger")
                    .ERROR(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "[group-history]: Failed to process bundle",
                        ])),
                    )
                    .catching(r("err")(String(t)))
                    .sendLogs("group-history-bundle-processing-failed"));
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          for (
            var t = e.baseMessage,
              a = e.bundleMessageKey,
              i = e.bundleProtoMessages,
              l = e.chatId,
              s = e.skipMessageTooOldCheck,
              u = s === void 0 ? !1 : s,
              c = e.validationCtx,
              d = [],
              m = new Set(),
              p = [],
              b = [],
              v = o("WATimeUtils").unixTime(),
              S = { count: 0, ids: [] },
              R = { count: 0, ids: [] },
              L = { count: 0, ids: [] },
              k = { count: 0, ids: [] },
              I = { count: 0, ids: [] },
              T = 0,
              D = [],
              x = o(
                "WAWebGroupHistoryGating",
              ).shouldSkipUnsupportedMessagesFromBundle(),
              $ = 0;
            $ < i.length;
            $++
          ) {
            var P = i[$];
            try {
              if (x && q(P)) {
                var w, A;
                U(
                  I,
                  (w = (A = P.key) == null ? void 0 : A.id) != null
                    ? w
                    : "unknown",
                );
                continue;
              }
              var F = M({
                baseMessage: t,
                bundleMessageKey: a,
                messageInfo: P,
                scrubUnattestableFields: x,
              });
              if (F == null) {
                T++;
                continue;
              }
              if (x && !W(F)) {
                U(k, F.id);
                continue;
              }
              if (!B(F, l)) {
                U(S, F.id);
                continue;
              }
              if (z(F, v)) {
                U(R, F.id);
                continue;
              }
              if (!u && j(F, v)) {
                U(L, F.id);
                continue;
              }
              (c != null &&
                D.push(V({ index: $, parsedMsg: F, validationCtx: c })),
                d.push(F),
                N(P) && m.add(F.id.toString()),
                p.push(
                  o("WAWebAddonProcessMsgsUtils").parseHistorySyncMsg({
                    webMsgInfo: P,
                    parsedWebMsgInfo: F,
                    isFromCag: !1,
                  }),
                ));
            } catch (e) {
              (T++,
                o("WALogger").WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history]: Failed to parse message at index ",
                      ": ",
                      "",
                    ])),
                  $,
                  r("WAWebSerializeError")(e),
                ));
            }
          }
          for (var O of yield (E || (E = n("Promise"))).all(D))
            O != null && b.push(O);
          return (
            k.count > 0 &&
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history]: ",
                    " messages have an unsupported type => ",
                    "",
                  ])),
                k.count,
                k.ids,
              ),
            I.count > 0 &&
              o("WALogger")
                .WARN(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history]: ",
                      " messages are scheduled or reveal-pending => ",
                      "",
                    ])),
                  I.count,
                  I.ids,
                )
                .sendLogs("group-history-bundle-scheduled-or-reveal-pending"),
            S.count > 0 &&
              o("WALogger").WARN(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history]: ",
                    " messages do not belong to chat ",
                    " => ",
                    "",
                  ])),
                S.count,
                l.toLogString(),
                S.ids,
              ),
            R.count > 0 &&
              o("WALogger").WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history]: ",
                    " messages are expired => ",
                    "",
                  ])),
                R.count,
                R.ids,
              ),
            L.count > 0 &&
              o("WALogger").WARN(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history]: ",
                    " messages exceed message time limit => ",
                    "",
                  ])),
                L.count,
                L.ids,
              ),
            {
              parsedMessages: d,
              addonPromises: p,
              reportingInfoRows: b,
              pinnedMsgKeys: m,
              skipReasonCounts: new Map([
                [
                  o("WAWebGroupHistoryReceiverFailureReason")
                    .SKIP_REASON_NOT_SHAREABLE,
                  k.count + I.count,
                ],
                [
                  o("WAWebGroupHistoryReceiverFailureReason")
                    .SKIP_REASON_INVALID_JID,
                  S.count,
                ],
                [
                  o("WAWebGroupHistoryReceiverFailureReason")
                    .SKIP_REASON_EXPIRED,
                  R.count,
                ],
                [
                  o("WAWebGroupHistoryReceiverFailureReason")
                    .SKIP_REASON_TIMESTAMP_TOO_OLD,
                  L.count,
                ],
                [
                  o("WAWebGroupHistoryReceiverFailureReason")
                    .SKIP_REASON_PARSE_FAILED,
                  T,
                ],
              ]),
            }
          );
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      var t;
      return (
        e.pinInChat != null ||
        ((t = e.messageAddOns) != null ? t : []).some(function (e) {
          return (
            e.messageAddOnType ===
            o("WAWebProtobufsWeb.pb").MessageAddOn$MessageAddOnType.PIN_IN_CHAT
          );
        })
      );
    }
    function M(t) {
      var n,
        r,
        a,
        i,
        l = t.baseMessage,
        s = t.bundleMessageKey,
        u = t.messageInfo,
        c = t.scrubUnattestableFields,
        d = o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(
          babelHelpers.extends({}, u.key, { participant: u.participant }),
          l,
        ),
        m =
          ((n = u.message) == null ||
          (n = n.editedMessage) == null ||
          (n = n.message) == null ||
          (n = n.protocolMessage) == null
            ? void 0
            : n.key) != null,
        p = m
          ? (r = u.message) == null ||
            (r = r.editedMessage) == null ||
            (r = r.message) == null ||
            (r = r.protocolMessage) == null
            ? void 0
            : r.key
          : (a = u.message) == null || (a = a.protocolMessage) == null
            ? void 0
            : a.key;
      if (p != null) {
        var _ = o(
          "WAWebE2EProtoUtils",
        ).translateRegularMessageKeyToLocalReference(
          babelHelpers.extends({}, p, { participant: u.participant }),
          l,
        );
        if (_ != null)
          if (m) {
            var f, g, h;
            u.message = babelHelpers.extends({}, u.message, {
              editedMessage: babelHelpers.extends(
                {},
                (f = u.message) == null ? void 0 : f.editedMessage,
                {
                  message: babelHelpers.extends(
                    {},
                    (g = u.message) == null || (g = g.editedMessage) == null
                      ? void 0
                      : g.message,
                    {
                      protocolMessage: babelHelpers.extends(
                        { additionalPromptIds: [] },
                        (h = u.message) == null ||
                          (h = h.editedMessage) == null ||
                          (h = h.message) == null
                          ? void 0
                          : h.protocolMessage,
                        {
                          key: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(
                            _,
                          ),
                        },
                      ),
                    },
                  ),
                },
              ),
            });
          } else {
            var y;
            u.message = babelHelpers.extends({}, u.message, {
              protocolMessage: babelHelpers.extends(
                { additionalPromptIds: [] },
                (y = u.message) == null ? void 0 : y.protocolMessage,
                { key: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(_) },
              ),
            });
          }
      }
      if (d) {
        var C = o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(d);
        ((u.key = C), C.participant != null && (u.participant = C.participant));
      }
      var b =
        (i = u.message) == null ||
        (i = i.messageContextInfo) == null ||
        (i = i.messageAssociation) == null
          ? void 0
          : i.parentMessageKey;
      if (b != null) {
        var v,
          S = o(
            "WAWebE2EProtoUtils",
          ).translateRegularMessageKeyToLocalReference(
            babelHelpers.extends({}, b, { participant: u.participant }),
            l,
          );
        if (
          S != null &&
          ((v = u.message) == null || (v = v.messageContextInfo) == null
            ? void 0
            : v.messageAssociation) != null
        ) {
          var R, L;
          u.message = babelHelpers.extends({}, u.message, {
            messageContextInfo: babelHelpers.extends(
              {},
              (R = u.message) == null ? void 0 : R.messageContextInfo,
              {
                messageAssociation: babelHelpers.extends(
                  {},
                  (L = u.message) == null || (L = L.messageContextInfo) == null
                    ? void 0
                    : L.messageAssociation,
                  {
                    parentMessageKey: o(
                      "WAWebProtobufMsgKeyUtils",
                    ).msgKeyToProtobuf(S),
                  },
                ),
              },
            ),
          });
        }
      }
      var E = o("WAWebParseWebMessageInfoApi").parseWebMessageInfo(
        o("WAWebMsgHistorySyncExtensions").omitPrimaryOnlyHistorySyncFields(
          babelHelpers.extends({}, u, {
            is1PBizBotMessage: void 0,
            botMessageInvokerJid: void 0,
          }),
        ),
      );
      if (!E) return null;
      var k = l.author;
      return k == null
        ? (o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] Bundle sender is null",
              ])),
          ),
          null)
        : babelHelpers.extends({}, E, {
            ack:
              d != null && d.fromMe
                ? o("WAWebAck").ACK.RECEIVED
                : o("WAWebAck").ACK.READ,
            hsmTag: c ? void 0 : E.hsmTag,
            viewMode: w(E),
            groupHistoryIndividualMessageInfo: {
              bundleMessageKey: s,
              bundleSender: k,
              isEditedAfterReceivedAsHistory: !1,
            },
          });
    }
    function w(e) {
      var t, n;
      return o("WAWebMessageAssociation.flow").isAssociatedMsg(e) &&
        (t =
          (n = o(
            "WAWebAssociationProcessor",
          ).getAssociationProcessorByAssociationType(e.associationType)) == null
            ? void 0
            : n.groupHistoryViewMode) != null
        ? t
        : e.viewMode;
    }
    function A(e, t) {
      var n = new Set(
        e
          .filter(function (e) {
            return !F(e, t);
          })
          .map(function (e) {
            return e.id.toString();
          }),
      );
      return e.filter(function (e) {
        return (
          !F(e, t) ||
          (t.has(e.id.toString()) &&
            e.parentMsgKey != null &&
            n.has(e.parentMsgKey.toString()))
        );
      });
    }
    function F(e, t) {
      return (
        t.has(e.id.toString()) ||
        e.type === o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_DECRYPTED
      );
    }
    function O(e) {
      var t;
      return ((t = e.uncountedAssociatedMessageLists) != null ? t : []).flatMap(
        function (e) {
          var t,
            n = e.associationType != null ? T.get(e.associationType) : null;
          return n != null ? ((t = e.messages) != null ? t : []).filter(n) : [];
        },
      );
    }
    function B(e, t) {
      return e.id.remote.toString() === t.toString();
    }
    function W(e) {
      return r("WAWebGroupHistorySupportedMessageTypesUtil")(e.type)
        ? e.isFromTemplate !== !0 && e.isDynamicReplyButtonsMsg !== !0
        : !1;
    }
    function q(e) {
      var t;
      return (
        ((t = e.message) == null ? void 0 : t.conditionalRevealMessage) != null
      );
    }
    function U(e, t) {
      (e.count++, e.ids.length < k && e.ids.push(t.toString()));
    }
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.index,
            n = e.parsedMsg,
            a = e.validationCtx,
            i = a.messageBytesArray[t];
          if (i == null) return null;
          try {
            var l = yield o(
                "WAWebGroupHistoryReportingTokenValidator",
              ).validateAndBuildReportingInfoRow(n, i, a),
              s = l.failureReason,
              u = l.row;
            if (s != null && G(s)) {
              var c = o("WAWebReportingTokenUtils").genDebugMsgInfo(n);
              o(
                "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
              ).maybeInsertDebugPlaceholder({
                externalId: c.externalId,
                nackReason: o("WAWebCreateNackFromStanza").NackReason
                  .ParsingError,
                msgInfo: c,
                offline: !1,
                additionalInfo:
                  "[ghs] reporting token validation failed (reason " +
                  s +
                  ") for msg " +
                  n.id.toString(),
              });
            }
            return u;
          } catch (e) {
            return (
              o("WALogger").WARN(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] Reporting token validation failed for msg ",
                    ": ",
                    "",
                  ])),
                n.id.toString(),
                r("WAWebSerializeError")(e),
              ),
              null
            );
          }
        })),
        H.apply(this, arguments)
      );
    }
    function G(e) {
      return (
        e !==
          o("WAWebWamEnumReportingTokenValidationFailureReason")
            .REPORTING_TOKEN_VALIDATION_FAILURE_REASON.UNSUPPORTED_VERSION &&
        e !==
          o("WAWebWamEnumReportingTokenValidationFailureReason")
            .REPORTING_TOKEN_VALIDATION_FAILURE_REASON
            .GROUP_HISTORY_MESSAGE_MISSING_FROM_PUBLIC_STANZA &&
        o(
          "WAWebMessagingGatingUtils",
        ).isReportingTokenValidationFailureDebugPlaceholderEnabled()
      );
    }
    function z(e, t) {
      var n,
        r = e.ephemeralDuration;
      if (r == null || r === 0) return !1;
      var a = (n = e.t) != null ? n : 0,
        i = a + r;
      return !o("WAWebEphemeralKeepInChatUtils").isKept(e.kicState) && i <= t;
    }
    function j(e, t) {
      var n,
        r = (n = e.t) != null ? n : 0;
      if (r === 0) return !1;
      var a = o("WAWebABProps").getABPropConfigValue(
        "group_history_messages_time_limit_receiver_enforcement_secs",
      );
      return r + 2 * a < t;
    }
    function K(e) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          for (
            var t = e.map(function (e) {
                return e.id.toString();
              }),
              n = yield o("WAWebDBMsgUtils").getMsgsExistByMsgKey(t),
              r = [],
              a = [],
              i = 0;
            i < e.length;
            i++
          )
            if (!n[i]) {
              var l = o("WAWebLidMigrationUtils").getAlternateMsgKey(e[i].id);
              l != null && (r.push(i), a.push(l.toString()));
            }
          if (a.length > 0)
            for (
              var s = yield o("WAWebDBMsgUtils").getMsgsExistByMsgKey(a), u = 0;
              u < r.length;
              u++
            )
              s[u] && (n[r[u]] = !0);
          return e.filter(function (e, t) {
            return !n[t];
          });
        })),
        Q.apply(this, arguments)
      );
    }
    function X(e, t) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(t);
          if (n == null) return e;
          var r = n.ephemeralDuration;
          return e.map(function (e) {
            var t,
              n = (t = e.ephemeralDuration) != null ? t : 0;
            return n !== r &&
              o("WAWebMsgEphemerality").messageSupportsEphemerality(e.type)
              ? babelHelpers.extends({}, e, { ephemeralOutOfSync: !0 })
              : e;
          });
        })),
        Y.apply(this, arguments)
      );
    }
    function J(e, t) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r,
            a = yield (E || (E = n("Promise"))).all(e),
            i = (r = []).concat.apply(r, a);
          return i.map(function (e) {
            var n = o(
              "WAWebE2EProtoUtils",
            ).translateAddonMessageKeyToLocalReference(
              o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(e.id),
              t,
            );
            if (n == null) return e;
            var r = o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
              n,
              o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
            );
            return babelHelpers.extends({}, e, r, { id: n });
          });
        })),
        Z.apply(this, arguments)
      );
    }
    function ee(e, t, n, r) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i = null;
            try {
              var l,
                s,
                u,
                c,
                d,
                m = yield o(
                  "WAWebGroupHistoryMessageManager",
                ).findGroupHistoryInsertionAnchor(t, n),
                p = yield o(
                  "WAWebGroupHistoryMessageManager",
                ).findLastValidMessageBefore(
                  t,
                  m == null ? void 0 : m.anchorMessage,
                ),
                _ = yield o(
                  "WAWebApiFilterAndReplaceMessages",
                ).filterAndReplaceMessages(e),
                f = _.newMsgs,
                g = oe(f, p == null ? void 0 : p.t),
                h = yield o("WAWebDBEncryptMultipleMsgs").encryptMultipleDBMsgs(
                  g,
                  !1,
                );
              ((i =
                m != null
                  ? yield o(
                      "WAWebGroupHistoryMessageManager",
                    ).ensureAnchorHasRoomForHistory(m, h.length)
                  : m),
                o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history]: anchorType=",
                      " anchorInChatMsgId=",
                      " hasAnchorMessage=",
                      " chatId=",
                      " msgCount=",
                      " messagesAfterJoinTime=",
                      " bundleMsgKey=",
                      "",
                    ])),
                  (l =
                    (s = i) == null || (s = s.anchorMessage) == null
                      ? void 0
                      : s.type) != null
                    ? l
                    : "null",
                  (u = (c = i) == null ? void 0 : c.anchorInChatMsgId) != null
                    ? u
                    : "null",
                  ((d = i) == null ? void 0 : d.anchorMessage) != null,
                  t.toLogString(),
                  h.length,
                  g.length,
                  n.toString(),
                ),
                yield o("WAWebDBStoreEncryptedMsgs").storeEncryptedDBMessages(
                  h,
                  [t.toString()],
                  !1,
                  !1,
                  i,
                ));
              var y = new Set(
                h.map(function (e) {
                  var t = e[0];
                  return t.id;
                }),
              );
              (a(
                g.filter(function (e) {
                  return y.has(e.id.toString());
                }),
              ),
                yield ae(g, t, i));
            } catch (e) {
              if (e instanceof r("WAWeb-dexie").BulkError) {
                var C = i != null ? i.anchorInChatMsgId - 1 : null,
                  b = "null";
                if (C != null)
                  try {
                    var E = o("WAWebDBMessageUtils").craftInternalId({
                        chatId: t.toString(),
                        inChatMsgId: C,
                      }),
                      k = yield o("WAWebSchemaMessage")
                        .getMessageTable()
                        .between(["internalId"], E, E, {
                          lowerInclusive: !0,
                          upperInclusive: !0,
                          limit: 1,
                        });
                    if (k.length > 0) {
                      var I,
                        T,
                        D = k[0];
                      b =
                        "id=" +
                        String(D.id) +
                        " t=" +
                        String(D.t) +
                        " type=" +
                        String(D.type) +
                        " subtype=" +
                        String(D.subtype) +
                        " isGroupHistoryMsg=" +
                        String(D.groupHistoryIndividualMessageInfo != null) +
                        " groupHistoryBundleKey=" +
                        ((I =
                          D == null ||
                          (T = D.groupHistoryIndividualMessageInfo) == null ||
                          (T = T.bundleMessageKey) == null
                            ? void 0
                            : T.toString()) != null
                          ? I
                          : "null");
                    }
                  } catch (e) {
                    b =
                      "[group-history] lookup-failed: " +
                      r("WAWebSerializeError")(e);
                  }
                o("WALogger")
                  .ERROR(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "[group-history]: db insert failed firstCollidingMsg=",
                        "",
                      ])),
                    b,
                  )
                  .catching(e)
                  .sendLogs("group-history-bundle-db-insertion-failed");
              } else
                e instanceof Error
                  ? o("WALogger")
                      .ERROR(
                        R ||
                          (R = babelHelpers.taggedTemplateLiteralLoose([
                            "[group-history]: Failed to store messages",
                          ])),
                      )
                      .catching(e)
                  : o("WALogger")
                      .ERROR(
                        L ||
                          (L = babelHelpers.taggedTemplateLiteralLoose([
                            "[group-history]: Failed to store messages",
                          ])),
                      )
                      .catching(r("err")(String(e)));
              throw e;
            }
          },
        )),
        te.apply(this, arguments)
      );
    }
    function ne(e, t, n, o) {
      var a = r("countWhere")(e, function (e) {
          return t.has(e.id.toString());
        }),
        i = r("countWhere")(e, function (e) {
          return n.has(e.id.toString());
        });
      return {
        messagesCount: e.length - a - i,
        oowPinsCount: a,
        pinsCount: r("countWhere")(e, function (e) {
          return o.has(e.id.toString());
        }),
        uncountedCount: i,
      };
    }
    function re(e, t, n, a) {
      var i = e.map(function (e) {
        return e.id.toString();
      });
      return new Map([
        [
          o("WAWebGroupHistoryReceiverFailureReason")
            .SKIP_REASON_ALREADY_EXISTS,
          r("countWhere")(i, function (e) {
            return !t.has(e);
          }),
        ],
        [
          o("WAWebGroupHistoryReceiverFailureReason")
            .SKIP_REASON_ADD_OPTION_IN_WRONG_LIST,
          r("countWhere")(i, function (e) {
            return t.has(e) && !n.has(e);
          }),
        ],
        [
          o("WAWebGroupHistoryReceiverFailureReason")
            .SKIP_REASON_OLDER_THAN_LOCAL_HISTORY,
          r("countWhere")(i, function (e) {
            return n.has(e) && !a.has(e);
          }),
        ],
      ]);
    }
    function oe(e, t) {
      var n = t != null ? t : 0;
      return e.filter(function (e) {
        var t;
        return ((t = e.t) != null ? t : 0) > n;
      });
    }
    function ae(e, t, n) {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var a,
              i =
                n != null && (a = n.anchorMessage) != null && a.id
                  ? r("WAWebMsgKey").fromString(n.anchorMessage.id)
                  : null;
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "processMultipleMessages",
              {
                chatId: t,
                msgObjs: e.reverse(),
                meta: { add: "before", isHistory: !0, anchorMsgKey: i },
                processMessagesOrigin: "messageHistoryBundleProcess",
              },
            );
          },
        )),
        ie.apply(this, arguments)
      );
    }
    l.processMessageHistoryBundle = D;
  },
  98,
);
