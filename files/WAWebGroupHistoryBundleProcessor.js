__d(
  "WAWebGroupHistoryBundleProcessor",
  [
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
    "countWhere",
    "decodeProtobuf",
    "err",
    "justknobx",
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
      E = 3,
      k = {
        parsedMessages: [],
        addonPromises: [],
        reportingInfoRows: [],
        pinnedMsgKeys: new Set(),
        skipReasonCounts: new Map(),
      },
      I = new Map([
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
    async function T(t, n, a) {
      var i = self.performance.now(),
        l = o("WAWebGroupJoinRequestMetricUtils").getSanitizedJid(a),
        p = 0,
        _ = 0,
        f = !1,
        g = !1;
      try {
        var h, y, C;
        await o(
          "WAWebUpdateMessageHistoryBundleState",
        ).updateGroupHistoryBundleState(
          t.id,
          o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
            .PROCESSING,
        );
        var b = await o("WAWebDecompressAndDecodeBundle").decompressBundle(n),
          v = o("decodeProtobuf").decodeProtobuf(
            o("WAWebProtobufsGroupHistory.pb").GroupHistorySpec,
            b,
          );
        ((f = !0),
          (p = v.messages.length),
          (_ =
            (h =
              (y = v.outOfWindowPinnedMessages) == null ? void 0 : y.length) !=
            null
              ? h
              : 0));
        var S = r("countWhere")(v.messages, function (e) {
            var t;
            return (
              ((t = e.message) == null || (t = t.pinInChatMessage) == null
                ? void 0
                : t.type) ===
              o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type
                .PIN_FOR_ALL
            );
          }),
          R = r("sumBy")(
            (C = v.uncountedAssociatedMessageLists) != null ? C : [],
            function (e) {
              var t, n;
              return (t = (n = e.messages) == null ? void 0 : n.length) != null
                ? t
                : 0;
            },
          );
        o("WAWebBackendApi").frontendFireAndForget(
          "logGroupHistoryParseHistoryProtoSucceeded",
          {
            groupId: l,
            messagesCount: p,
            oowPinsCount: _,
            pinsCount: S,
            uncountedCount: R,
          },
        );
        var L = t.unsafe(),
          E = null;
        try {
          var I;
          E = await o(
            "WAWebGroupHistoryReportingTokenValidator",
          ).prepareValidationContext({
            bundleMessageSecret: L.messageSecret,
            bundleMsgId: t.id,
            bundleMsgTimestamp: (I = L.t) != null ? I : 0,
            bundleSenderWid: L.author,
            groupWid: a,
            inflatedBytes: b,
          });
        } catch (t) {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] Failed to prepare validation context: ",
                "",
              ])),
            r("WAWebSerializeError")(t),
          );
        }
        var T = o("WAWebProcessBaseMsgInfo").msgToBaseMsgInfo(L),
          x = w(v),
          $ = await Promise.all([
            D({
              baseMessage: T,
              bundleMessageKey: t.id,
              bundleProtoMessages: v.messages,
              chatId: a,
              validationCtx: E,
            }),
            _ > 0
              ? D({
                  baseMessage: T,
                  bundleMessageKey: t.id,
                  bundleProtoMessages: v.outOfWindowPinnedMessages,
                  chatId: a,
                  skipMessageTooOldCheck: !0,
                  validationCtx: null,
                })
              : k,
            x.length > 0
              ? D({
                  baseMessage: T,
                  bundleMessageKey: t.id,
                  bundleProtoMessages: x,
                  chatId: a,
                  validationCtx: null,
                })
              : k,
          ]),
          P = $[0],
          M = P.addonPromises,
          A = P.parsedMessages,
          F = P.pinnedMsgKeys,
          O = P.reportingInfoRows,
          B = P.skipReasonCounts,
          W = $[1],
          q = W.addonPromises,
          U = W.parsedMessages,
          V = W.reportingInfoRows,
          H = W.skipReasonCounts,
          G = $[2],
          z = G.addonPromises,
          Z = G.parsedMessages,
          ee = G.reportingInfoRows,
          te = [].concat(A, U, Z),
          ne = [].concat(M, q, z),
          re = [].concat(O, V, ee);
        if (te.length === 0) {
          var oe;
          (o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history]: No valid messages parsed from bundle",
              ])),
          ),
            o("WAWebBackendApi").frontendFireAndForget(
              "logGroupHistoryDbInserted",
              {
                dbIgnoredOlderMessages: p + _ > 0,
                groupId: l,
                messagesCount: 0,
                oowPinsCount: 0,
                pinsCount: 0,
                receiverFailureReason: o(
                  "WAWebGroupHistoryReceiverFailureReason",
                ).formatReceiverFailureReason(
                  o("WAWebGroupHistoryReceiverFailureReason").mergeReasonCounts(
                    [
                      ["", B],
                      [
                        o("WAWebGroupHistoryReceiverFailureReason")
                          .OUT_WINDOW_PIN_REASON_PREFIX,
                        H,
                      ],
                    ],
                  ),
                ),
                uncountedCount: 0,
              },
            ),
            ((oe = B.get(
              o("WAWebGroupHistoryReceiverFailureReason")
                .SKIP_REASON_REPORTING_TOKEN_MISSING_FROM_PUBLIC_STANZA,
            )) != null
              ? oe
              : 0) > 0 &&
              (await o(
                "WAWebUpdateMessageHistoryBundleState",
              ).updateGroupHistoryBundleState(
                t.id,
                o("WAWebGroupHistoryMsgData.flow")
                  .MessageHistoryBundleProcessState.INJECTED_PARTIAL,
              )));
          return;
        }
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[group-history]: parsed ",
              " msgs (",
              " OOW pins), injecting",
            ])),
          te.length,
          U.length,
        );
        var ae = await j(te),
          ie = new Set(
            Z.map(function (e) {
              return e.id.toString();
            }),
          ),
          le = N(await K(ae, a), ie),
          se = await Q(ne, T),
          ue =
            le.filter(function (e) {
              return !ie.has(e.id.toString());
            }).length <
            v.messages.length + _
              ? o("WAWebGroupHistoryMsgData.flow")
                  .MessageHistoryBundleProcessState.INJECTED_PARTIAL
              : o("WAWebGroupHistoryMsgData.flow")
                  .MessageHistoryBundleProcessState.INJECTED,
          ce = new Set(
            U.map(function (e) {
              return e.id.toString();
            }),
          ),
          de = new Set(
            ae.map(function (e) {
              return e.id.toString();
            }),
          ),
          me = new Set(
            le.map(function (e) {
              return e.id.toString();
            }),
          );
        if (
          (await X(le, a, t.id, function (e) {
            var t,
              n = new Set(
                e.map(function (e) {
                  return e.id.toString();
                }),
              );
            ((g = !0),
              o("WAWebBackendApi").frontendFireAndForget(
                "logGroupHistoryDbInserted",
                babelHelpers.extends({}, Y(e, ce, ie, F), {
                  applyDurationMs: Math.round(self.performance.now() - i),
                  dbIgnoredOlderMessages:
                    ue ===
                    o("WAWebGroupHistoryMsgData.flow")
                      .MessageHistoryBundleProcessState.INJECTED_PARTIAL,
                  groupId: l,
                  receiverFailureReason: (t = o(
                    "WAWebGroupHistoryReceiverFailureReason",
                  )).formatReceiverFailureReason(
                    t.mergeReasonCounts([
                      ["", B],
                      ["", J(A, de, me, n)],
                      [t.OUT_WINDOW_PIN_REASON_PREFIX, H],
                      [t.OUT_WINDOW_PIN_REASON_PREFIX, J(U, de, me, n)],
                    ]),
                  ),
                }),
              ));
          }),
          re.length > 0)
        )
          try {
            var pe = new Set(
                le.flatMap(function (e) {
                  var t = [e.id.toString()];
                  return (
                    e.protocolMessageKey != null &&
                      t.push(e.protocolMessageKey.toString()),
                    t
                  );
                }),
              ),
              _e = re.filter(function (e) {
                return pe.has(e.msgKey);
              });
            _e.length > 0 &&
              (await o("WAWebDBReportingTokenUtils").handleAddReportingInfos(
                _e,
              ));
          } catch (e) {
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history] Failed to persist reporting infos: ",
                  "",
                ])),
              r("WAWebSerializeError")(e),
            );
          }
        (await o("WAWebMsgStoreExtensions").handleStoredSyncedMsgs(le),
          le.length > 0 &&
            (await o("WAWebBackendApi").frontendSendAndReceive(
              "hydrateReactionsForMessages",
              {
                messageIds: le.map(function (e) {
                  return e.id.toString();
                }),
              },
            ),
            await Promise.all(
              le.map(function (e) {
                return o("WAWebHandleOrphansForNewMsg").handleOrphansForNewMsg(
                  e,
                );
              }),
            )),
          se.length > 0 &&
            (await o("WAWebAddonProcessMsgs").processMsgsAndGetOrphans(
              se,
              null,
              o("WAWebAddonConstants").AddonProcessMode
                .ProcessGroupHistoryBundle,
            )),
          await o(
            "WAWebUpdateMessageHistoryBundleState",
          ).updateGroupHistoryBundleState(t.id, ue));
      } catch (e) {
        if (e instanceof r("WAWeb-dexie").BulkError) {
          (g ||
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
            await o(
              "WAWebUpdateMessageHistoryBundleState",
            ).updateGroupHistoryBundleState(
              t.id,
              o("WAWebGroupHistoryMsgData.flow")
                .MessageHistoryBundleProcessState.FAILED_NO_RETRY,
            ));
          return;
        }
        (o("WAWebBackendApi").frontendFireAndForget(
          "logGroupHistoryParseHistoryProtoFailed",
          {
            groupId: l,
            messagesCount: p + _,
            oowPinsCount: _,
            receiverFailureReason: f
              ? o("WAWebGroupHistoryReceiverFailureReason")
                  .FAILURE_REASON_PROCESSING_FAILED
              : o("WAWebGroupHistoryReceiverFailureReason")
                  .FAILURE_REASON_PROTOBUF_PARSE_FAILED,
          },
        ),
          await o(
            "WAWebUpdateMessageHistoryBundleState",
          ).updateGroupHistoryBundleState(
            t.id,
            o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
              .FAILED,
          ),
          e instanceof Error
            ? o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history]: Failed to process bundle",
                    ])),
                )
                .catching(e)
                .sendLogs("group-history-bundle-processing-failed")
            : o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history]: Failed to process bundle",
                    ])),
                )
                .catching(r("err")(String(e)))
                .sendLogs("group-history-bundle-processing-failed"));
      }
    }
    async function D(e) {
      for (
        var t = e.baseMessage,
          n = e.bundleMessageKey,
          a = e.bundleProtoMessages,
          i = e.chatId,
          l = e.skipMessageTooOldCheck,
          s = l === void 0 ? !1 : l,
          u = e.validationCtx,
          c = [],
          d = new Set(),
          m = [],
          C = [],
          b = o("WATimeUtils").unixTime(),
          v = { count: 0, ids: [] },
          S = { count: 0, ids: [] },
          R = { count: 0, ids: [] },
          L = { count: 0, ids: [] },
          E = { count: 0, ids: [] },
          k = 0,
          I = [],
          T = o(
            "WAWebGroupHistoryGating",
          ).shouldSkipUnsupportedMessagesFromBundle(),
          D =
            u != null && r("justknobx")._("7544")
              ? W(u.messageBytesArray)
              : null,
          P = 0;
        P < a.length;
        P++
      ) {
        var N,
          M = a[P],
          w = (N = M.key) == null ? void 0 : N.id;
        try {
          if (T && O(M)) {
            var U, V;
            B(
              E,
              (U = (V = M.key) == null ? void 0 : V.id) != null ? U : "unknown",
            );
            continue;
          }
          var H = $({
            baseMessage: t,
            bundleMessageKey: n,
            messageInfo: M,
            scrubUnattestableFields: T,
          });
          if (H == null) {
            k++;
            continue;
          }
          if (T && !F(H)) {
            B(L, H.id);
            continue;
          }
          if (!A(H, i)) {
            B(v, H.id);
            continue;
          }
          if (G(H, b)) {
            B(S, H.id);
            continue;
          }
          if (!s && z(H, b)) {
            B(R, H.id);
            continue;
          }
          if (u != null) {
            var j = u.messageBytesArray[P];
            (D != null && (j = w == null ? null : D.get(w)),
              I.push(q({ msgWithBytes: j, parsedMsg: H, validationCtx: u })));
          }
          (c.push(H),
            x(M) && d.add(H.id.toString()),
            m.push(
              o("WAWebAddonProcessMsgsUtils").parseHistorySyncMsg({
                webMsgInfo: M,
                parsedWebMsgInfo: H,
                isFromCag: !1,
              }),
            ));
        } catch (e) {
          (k++,
            o("WALogger").WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history]: Failed to parse message at index ",
                  ": ",
                  "",
                ])),
              P,
              r("WAWebSerializeError")(e),
            ));
        }
      }
      var K = new Set();
      for (var Q of await Promise.all(I)) {
        var X = Q.droppedMsgKey,
          Y = Q.row;
        (Y != null && C.push(Y), X != null && K.add(X));
      }
      return (
        L.count > 0 &&
          o("WALogger").WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history]: ",
                " messages have an unsupported type => ",
                "",
              ])),
            L.count,
            L.ids,
          ),
        E.count > 0 &&
          o("WALogger")
            .WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history]: ",
                  " messages are scheduled or reveal-pending => ",
                  "",
                ])),
              E.count,
              E.ids,
            )
            .sendLogs("group-history-bundle-scheduled-or-reveal-pending"),
        v.count > 0 &&
          o("WALogger").WARN(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history]: ",
                " messages do not belong to chat ",
                " => ",
                "",
              ])),
            v.count,
            i.toLogString(),
            v.ids,
          ),
        S.count > 0 &&
          o("WALogger").WARN(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history]: ",
                " messages are expired => ",
                "",
              ])),
            S.count,
            S.ids,
          ),
        R.count > 0 &&
          o("WALogger").WARN(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history]: ",
                " messages exceed message time limit => ",
                "",
              ])),
            R.count,
            R.ids,
          ),
        {
          parsedMessages: c.filter(function (e) {
            return !K.has(e.id.toString());
          }),
          addonPromises: m,
          reportingInfoRows: C,
          pinnedMsgKeys: d,
          skipReasonCounts: new Map([
            [
              o("WAWebGroupHistoryReceiverFailureReason")
                .SKIP_REASON_NOT_SHAREABLE,
              L.count + E.count,
            ],
            [
              o("WAWebGroupHistoryReceiverFailureReason")
                .SKIP_REASON_INVALID_JID,
              v.count,
            ],
            [
              o("WAWebGroupHistoryReceiverFailureReason").SKIP_REASON_EXPIRED,
              S.count,
            ],
            [
              o("WAWebGroupHistoryReceiverFailureReason")
                .SKIP_REASON_TIMESTAMP_TOO_OLD,
              R.count,
            ],
            [
              o("WAWebGroupHistoryReceiverFailureReason")
                .SKIP_REASON_PARSE_FAILED,
              k,
            ],
            [
              o("WAWebGroupHistoryReceiverFailureReason")
                .SKIP_REASON_REPORTING_TOKEN_MISSING_FROM_PUBLIC_STANZA,
              K.size,
            ],
          ]),
        }
      );
    }
    function x(e) {
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
    function $(e) {
      var t,
        n,
        r,
        a,
        i = e.baseMessage,
        l = e.bundleMessageKey,
        s = e.messageInfo,
        u = e.scrubUnattestableFields,
        c = o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(
          babelHelpers.extends({}, s.key, { participant: s.participant }),
          i,
        ),
        d =
          ((t = s.message) == null ||
          (t = t.editedMessage) == null ||
          (t = t.message) == null ||
          (t = t.protocolMessage) == null
            ? void 0
            : t.key) != null,
        m = d
          ? (n = s.message) == null ||
            (n = n.editedMessage) == null ||
            (n = n.message) == null ||
            (n = n.protocolMessage) == null
            ? void 0
            : n.key
          : (r = s.message) == null || (r = r.protocolMessage) == null
            ? void 0
            : r.key;
      if (m != null) {
        var p = o(
          "WAWebE2EProtoUtils",
        ).translateRegularMessageKeyToLocalReference(
          babelHelpers.extends({}, m, { participant: s.participant }),
          i,
        );
        if (p != null)
          if (d) {
            var _, f, g;
            s.message = babelHelpers.extends({}, s.message, {
              editedMessage: babelHelpers.extends(
                {},
                (_ = s.message) == null ? void 0 : _.editedMessage,
                {
                  message: babelHelpers.extends(
                    {},
                    (f = s.message) == null || (f = f.editedMessage) == null
                      ? void 0
                      : f.message,
                    {
                      protocolMessage: babelHelpers.extends(
                        { additionalPromptIds: [] },
                        (g = s.message) == null ||
                          (g = g.editedMessage) == null ||
                          (g = g.message) == null
                          ? void 0
                          : g.protocolMessage,
                        {
                          key: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(
                            p,
                          ),
                        },
                      ),
                    },
                  ),
                },
              ),
            });
          } else {
            var h;
            s.message = babelHelpers.extends({}, s.message, {
              protocolMessage: babelHelpers.extends(
                { additionalPromptIds: [] },
                (h = s.message) == null ? void 0 : h.protocolMessage,
                { key: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(p) },
              ),
            });
          }
      }
      if (c) {
        var y = o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(c);
        ((s.key = y), y.participant != null && (s.participant = y.participant));
      }
      var b =
        (a = s.message) == null ||
        (a = a.messageContextInfo) == null ||
        (a = a.messageAssociation) == null
          ? void 0
          : a.parentMessageKey;
      if (b != null) {
        var v,
          S = o(
            "WAWebE2EProtoUtils",
          ).translateRegularMessageKeyToLocalReference(
            babelHelpers.extends({}, b, { participant: s.participant }),
            i,
          );
        if (
          S != null &&
          ((v = s.message) == null || (v = v.messageContextInfo) == null
            ? void 0
            : v.messageAssociation) != null
        ) {
          var R, L;
          s.message = babelHelpers.extends({}, s.message, {
            messageContextInfo: babelHelpers.extends(
              {},
              (R = s.message) == null ? void 0 : R.messageContextInfo,
              {
                messageAssociation: babelHelpers.extends(
                  {},
                  (L = s.message) == null || (L = L.messageContextInfo) == null
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
          babelHelpers.extends({}, s, {
            is1PBizBotMessage: void 0,
            botMessageInvokerJid: void 0,
          }),
        ),
      );
      if (!E) return null;
      var k = i.author;
      return k == null
        ? (o("WALogger").ERROR(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] Bundle sender is null",
              ])),
          ),
          null)
        : babelHelpers.extends({}, E, {
            ack:
              c != null && c.fromMe
                ? o("WAWebAck").ACK.RECEIVED
                : o("WAWebAck").ACK.READ,
            hsmTag: u ? void 0 : E.hsmTag,
            viewMode: P(E),
            groupHistoryIndividualMessageInfo: {
              bundleMessageKey: l,
              bundleSender: k,
              isEditedAfterReceivedAsHistory: !1,
            },
          });
    }
    function P(e) {
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
    function N(e, t) {
      var n = new Set(
        e
          .filter(function (e) {
            return !M(e, t);
          })
          .map(function (e) {
            return e.id.toString();
          }),
      );
      return e.filter(function (e) {
        return (
          !M(e, t) ||
          (t.has(e.id.toString()) &&
            e.parentMsgKey != null &&
            n.has(e.parentMsgKey.toString()))
        );
      });
    }
    function M(e, t) {
      return (
        t.has(e.id.toString()) ||
        e.type === o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_DECRYPTED
      );
    }
    function w(e) {
      var t;
      return ((t = e.uncountedAssociatedMessageLists) != null ? t : []).flatMap(
        function (e) {
          var t,
            n = e.associationType != null ? I.get(e.associationType) : null;
          return n != null ? ((t = e.messages) != null ? t : []).filter(n) : [];
        },
      );
    }
    function A(e, t) {
      return e.id.remote.toString() === t.toString();
    }
    function F(e) {
      return r("WAWebGroupHistorySupportedMessageTypesUtil")(e.type)
        ? e.isFromTemplate !== !0 && e.isDynamicReplyButtonsMsg !== !0
        : !1;
    }
    function O(e) {
      var t;
      return (
        ((t = e.message) == null ? void 0 : t.conditionalRevealMessage) != null
      );
    }
    function B(e, t) {
      (e.count++, e.ids.length < E && e.ids.push(t.toString()));
    }
    function W(e) {
      var t = new Map();
      for (var n of e) {
        var r,
          o = (r = n.key) == null ? void 0 : r.id;
        o != null && t.set(o, t.has(o) ? null : n);
      }
      return t;
    }
    async function q(e) {
      var t = e.msgWithBytes,
        n = e.parsedMsg,
        a = e.validationCtx;
      if (t == null) return { row: null, droppedMsgKey: null };
      try {
        var i = await o(
            "WAWebGroupHistoryReportingTokenValidator",
          ).validateAndBuildReportingInfoRow(n, t, a),
          l = i.failureReason,
          s = i.row;
        return V(n, l)
          ? { row: null, droppedMsgKey: n.id.toString() }
          : (l != null &&
              H(l) &&
              U(
                n,
                "[ghs] reporting token validation failed (reason " +
                  l +
                  ") for msg " +
                  n.id.toString(),
              ),
            { row: s, droppedMsgKey: null });
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
          { row: null, droppedMsgKey: null }
        );
      }
    }
    function U(e, t) {
      var n = o("WAWebReportingTokenUtils").genDebugMsgInfo(e);
      o(
        "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
      ).maybeInsertDebugPlaceholder({
        externalId: n.externalId,
        nackReason: o("WAWebCreateNackFromStanza").NackReason.ParsingError,
        msgInfo: n,
        offline: !1,
        additionalInfo: t,
      });
    }
    function V(e, t) {
      return t !==
        o("WAWebWamEnumReportingTokenValidationFailureReason")
          .REPORTING_TOKEN_VALIDATION_FAILURE_REASON
          .GROUP_HISTORY_MESSAGE_MISSING_FROM_PUBLIC_STANZA ||
        !o(
          "WAWebGroupHistoryGating",
        ).isGroupHistoryMissingFromPublicStanzaDropEnabled()
        ? !1
        : (o(
            "WAWebMessagingGatingUtils",
          ).isReportingTokenValidationFailureDebugPlaceholderEnabled() &&
            U(
              e,
              "[ghs] msg " +
                e.id.toString() +
                " was not added: missing from the public reporting stanza (reason " +
                t +
                ")",
            ),
          !0);
    }
    function H(e) {
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
    function G(e, t) {
      var n,
        r = e.ephemeralDuration;
      if (r == null || r === 0) return !1;
      var a = (n = e.t) != null ? n : 0,
        i = a + r;
      return !o("WAWebEphemeralKeepInChatUtils").isKept(e.kicState) && i <= t;
    }
    function z(e, t) {
      var n,
        r = (n = e.t) != null ? n : 0;
      if (r === 0) return !1;
      var a = o("WAWebABProps").getABPropConfigValue(
        "group_history_messages_time_limit_receiver_enforcement_secs",
      );
      return r + 2 * a < t;
    }
    async function j(e) {
      for (
        var t = e.map(function (e) {
            return e.id.toString();
          }),
          n = await o("WAWebDBMsgUtils").getMsgsExistByMsgKey(t),
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
          var s = await o("WAWebDBMsgUtils").getMsgsExistByMsgKey(a), u = 0;
          u < r.length;
          u++
        )
          s[u] && (n[r[u]] = !0);
      return e.filter(function (e, t) {
        return !n[t];
      });
    }
    async function K(e, t) {
      var n = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(t);
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
    }
    async function Q(e, t) {
      var n,
        r = await Promise.all(e),
        a = (n = []).concat.apply(n, r);
      return a.map(function (e) {
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
    }
    async function X(e, t, n, a) {
      var i = null;
      try {
        var l,
          s,
          u,
          c,
          d,
          m = await o(
            "WAWebGroupHistoryMessageManager",
          ).findGroupHistoryInsertionAnchor(t, n),
          p = await o(
            "WAWebGroupHistoryMessageManager",
          ).findLastValidMessageBefore(t, m == null ? void 0 : m.anchorMessage),
          _ = await o(
            "WAWebApiFilterAndReplaceMessages",
          ).filterAndReplaceMessages(e),
          f = _.newMsgs,
          g = Z(f, p == null ? void 0 : p.t),
          h = await o("WAWebDBEncryptMultipleMsgs").encryptMultipleDBMsgs(
            g,
            !1,
          );
        ((i =
          m != null
            ? await o(
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
          await o("WAWebDBStoreEncryptedMsgs").storeEncryptedDBMessages(
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
          await ee(g, t, i));
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
                k = await o("WAWebSchemaMessage")
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
                "[group-history] lookup-failed: " + r("WAWebSerializeError")(e);
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
    }
    function Y(e, t, n, o) {
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
    function J(e, t, n, a) {
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
    function Z(e, t) {
      var n = t != null ? t : 0;
      return e.filter(function (e) {
        var t;
        return ((t = e.t) != null ? t : 0) > n;
      });
    }
    async function ee(e, t, n) {
      var a,
        i =
          n != null && (a = n.anchorMessage) != null && a.id
            ? r("WAWebMsgKey").fromString(n.anchorMessage.id)
            : null;
      await o("WAWebBackendApi").frontendSendAndReceive(
        "processMultipleMessages",
        {
          chatId: t,
          msgObjs: e.reverse(),
          meta: { add: "before", isHistory: !0, anchorMsgKey: i },
          processMessagesOrigin: "messageHistoryBundleProcess",
        },
      );
    }
    l.processMessageHistoryBundle = T;
  },
  98,
);
