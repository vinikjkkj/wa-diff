__d(
  "EBMessageRangeQueryForThreads",
  [
    "EBAPIConvertNativeToLS",
    "EBAPIDecryptionModule",
    "EBAPIQPLPoints",
    "EBAPISharedTypes",
    "EBDedupeLabyrinthMessages",
    "EBDeriveAndStoreEpochs",
    "EBGetClientState",
    "EBGraphQLQueryModule",
    "EBKnownMekFbidsTracker",
    "EBMessageRangeQueryForThreadsQuery.graphql",
    "EBMessageRangeQueryForThreadsQueryVariables",
    "EBMinosCheckWasmFeatureSupport",
    "EBMinosInterfaceTypes",
    "I64",
    "LSVec",
    "MAWCurrentUser",
    "MAWEncryptedBackupUtils",
    "MAWJobDefinitions",
    "MAWMpsXMAValidationPreprocessor",
    "MawEchoToProtobufConverter",
    "MpsTypes",
    "WAHashStringToNumber",
    "WAJids",
    "WAResultOrError",
    "WMIQplFlow",
    "err",
    "getErrorSafe",
    "getSafeQplErrorMessage",
    "gkx",
    "handleRestoreMessagesGraphQLResponse",
    "justknobx",
    "qpl",
    "requireDeferred",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("requireDeferred")("EBDedupeEncryptedLabyrinthMessages").__setRef(
        "EBMessageRangeQueryForThreads",
      ),
      c = r("requireDeferred")("EBMinosDecryptAndValidateMessages").__setRef(
        "EBMessageRangeQueryForThreads",
      ),
      d =
        e !== void 0
          ? e
          : (e = n("EBMessageRangeQueryForThreadsQuery.graphql"));
    function m(e) {
      var t,
        n = e.clientMekFbids,
        a = e.encryptedMinosMessages,
        i = e.minosDecryptionKeys,
        l = e.qplFlow,
        s = new Set();
      if (
        (a.forEach(function (e) {
          var t = e.supplementalProtobufsV2,
            n = e.topLevelProtobufV2;
          (s.add(n.mekFbid),
            t.forEach(function (e) {
              var t = e.mekFbid;
              return s.add(t);
            }));
        }),
        s.size !== 0)
      ) {
        var u = Array.from(s),
          c;
        try {
          c = o("EBKnownMekFbidsTracker").getMissingMekFbids(u);
        } catch (e) {
          l.addPoint("mek_availability_audit", {
            string: {
              mek_audit_error: r("getErrorSafe")(e).message,
              mek_audit_outcome: "crypto-library-unavailable",
            },
          });
          return;
        }
        var d = new Set(n != null ? n : []),
          m = new Set(
            (i != null ? i : [])
              .map(function (e) {
                return (e == null ? void 0 : e.id) == null
                  ? null
                  : o("EBMinosInterfaceTypes").unsafeCastToMekFbId(e.id);
              })
              .filter(Boolean),
          ),
          p = new Set(d);
        m.forEach(function (e) {
          return p.add(e);
        });
        var _ = c.filter(function (e) {
            return m.has(e);
          }),
          f = c.filter(function (e) {
            return d.has(e) && !m.has(e);
          }),
          g = c.filter(function (e) {
            return !p.has(e);
          });
        l.addAnnotations({
          bool: { mek_upload_optimization_claim_sent: n != null },
          int: {
            meks_claimed_but_not_cached: f.length,
            meks_claimed_by_client:
              (t = n == null ? void 0 : n.length) != null ? t : 0,
            meks_missing: g.length,
            meks_needed: u.length,
            meks_not_in_cache: c.length,
            meks_pending_from_server: _.length,
            meks_served_by_server: m.size,
          },
          string_array: {
            mek_fbids_claimed_but_not_cached: f,
            mek_fbids_missing: g,
          },
        });
      }
    }
    async function p(e) {
      var t = e.instanceKey,
        n = e.restoreType,
        a = e.source,
        i = e.storage,
        l = e.threads,
        p = await o("EBMinosCheckWasmFeatureSupport").checkWasmFeatureSupport(),
        _ = o("WAHashStringToNumber").hashStringToNumber(
          t != null ? t : r("uuidv4")(),
        ),
        f = r("qpl")._(521473850, "2910"),
        g = o("WMIQplFlow").startQplFlow(f, {
          annotations: {
            bool: {
              await_minos_init_enabled: r("gkx")("14999"),
              mek_optimization_restore_on: r("gkx")("23988"),
              minos_rollout_enabled: r("gkx")("20879"),
              occam_only_mailbox_users: r("gkx")("16674"),
            },
            int: {
              batchSize: l.length,
              messagesRequested: l.reduce(function (e, t) {
                var n;
                return e + ((n = t.numMessages) != null ? n : 0);
              }, 0),
            },
            string: { source: a != null ? a : "unknown" },
          },
          instanceKey: _,
          timeoutInMs: r("justknobx")._("2950"),
        });
      try {
        var h, y, C;
        if (l.length === 0)
          throw (
            g.endFail(
              o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints
                .INVALID_PARAMETERS,
            ),
            r("err")("invalid parameters")
          );
        var b = await o("EBGetClientState").getClientState(i);
        if (
          (g.addPoint(
            o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints
              .CLIENT_STATE_RETRIEVED,
            {
              string: {
                device_id:
                  (h = b == null ? void 0 : b.deviceId) != null
                    ? h
                    : (s || (s = o("I64"))).to_string(
                        (s || (s = o("I64"))).zero,
                      ),
              },
            },
          ),
          b == null)
        )
          throw (
            g.endFail(
              o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints
                .NO_CLIENT_STATE,
              {
                string: {
                  error_description:
                    o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints
                      .NO_CLIENT_STATE,
                },
              },
            ),
            r("err")("no client state")
          );
        var v = b.backupId,
          S = b.deviceId,
          R = b.locally_available_epochs,
          L = b.mailboxRootKey,
          E = b.ocmfClientStateBlob;
        if (v == null || S == null || L == null || E == null)
          throw (
            g.endFail(
              o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints
                .INVALID_CLIENT_STATE,
              {
                bool: {
                  hasBackupId: v != null,
                  hasDeviceId: S != null,
                  hasMailboxRootKey: L != null,
                  hasOcmfClientStateBlob: E != null,
                },
                string: {
                  error_description:
                    o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints
                      .INVALID_CLIENT_STATE,
                },
              },
            ),
            r("err")("invalid client state")
          );
        var k = r("gkx")("23988")
            ? o("EBKnownMekFbidsTracker").getKnownMekFbidsForQuery()
            : void 0,
          I = o(
            "EBMessageRangeQueryForThreadsQueryVariables",
          ).messageRangeQueryForThreadsQueryVariables(
            l,
            n,
            (y = o("MAWCurrentUser").getAppID()) != null ? y : "0",
            S,
            R,
            L,
            E,
            a,
            k,
          );
        g.addPoint(
          o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints
            .GRAPHQL_QUERY_START,
        );
        var T = await o("EBGraphQLQueryModule").ebGraphQLQueryModule(d, I);
        g.addPoint(
          o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.GRAPHQL_QUERY_END,
        );
        var D =
          T == null ||
          (C = T.viewer) == null ||
          (C = C.encrypted_backup) == null ||
          (C = C.mailbox) == null
            ? void 0
            : C.messages_from_selected_threads;
        if (D == null)
          throw (
            g.endFail(
              o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints
                .INVALID_GRAPHQL_RESPONSE,
              {
                string: {
                  error_description:
                    o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints
                      .INVALID_GRAPHQL_RESPONSE,
                },
              },
            ),
            r("err")("invalid graphql response")
          );
        var x = JSON.stringify(D).length;
        g.addAnnotations({ int: { total_restore_response_size: x } });
        var $ = !1;
        g.addPoint("decryption_start");
        var P = await Promise.all(
          D.map(async function (e, t) {
            var n,
              s = l[t],
              d = s.chatJid,
              _ = o("WMIQplFlow").startQplFlow(r("qpl")._(521478797, "3533"), {
                annotations: {
                  bool: {
                    is_group_thread: o("WAJids").switchOnMsgrChatJidType(d, {
                      group: function () {
                        return !0;
                      },
                      user: function () {
                        return !1;
                      },
                    }),
                    minos_rollout_enabled: r("gkx")("20879"),
                    occam_only_mailbox_users: r("gkx")("16674"),
                  },
                  string: {
                    chatJid: d,
                    messageId: (n = s.from[1]) != null ? n : "",
                    source: a != null ? a : "unknown",
                  },
                },
              });
            try {
              var f,
                h = e;
              if (h == null)
                return (
                  _.endFail("invalid-graphql-response"),
                  o("WAResultOrError").makeError("invalid-graphql-response")
                );
              if ($ === !0)
                return (
                  _.endFail("server-side-exception"),
                  o("WAResultOrError").makeError("server-side-exception")
                );
              var y = h.backup_id,
                C = h.encrypted_messages,
                b = h.epoch_derivation_set,
                S = h.exception_string,
                R = h.message_range_info,
                L = h.minos_decryption_keys,
                E = h.should_delete_mailbox,
                I = h.thread_not_found,
                T = h.thread_type;
              if (S != null)
                return (
                  g.addAnnotations({ string: { serverExceptionString: S } }),
                  I != null && I
                    ? (_.endFail("thread-not-found-on-server"),
                      o("WAResultOrError").makeError(
                        "thread-not-found-on-server",
                      ))
                    : E === !0
                      ? (($ = !0),
                        _.endFail("server-side-exception"),
                        o("WAResultOrError").makeError("server-side-exception"))
                      : (_.endFail("server-side-exception"),
                        o("WAResultOrError").makeError("server-side-exception"))
                );
              await o("EBDeriveAndStoreEpochs").deriveAndStoreEpochsNonLS(i, b);
              var D = R || {},
                x = D.has_more_after,
                P = D.has_more_before,
                N = D.next_message_timestamp_ms_after,
                M = D.next_message_timestamp_ms_before;
              if (P == null || x == null || N == null || M == null)
                return (
                  _.endFail("missing-message-range-info"),
                  o("WAResultOrError").makeError("missing-message-range-info")
                );
              var w = o("WAJids").threadIdForChatJid(d),
                A = o("MpsTypes").toThreadId(d),
                F = p
                  ? o("EBMinosInterfaceTypes").processMinosMessages(C, _)
                  : [];
              m({
                clientMekFbids: k,
                encryptedMinosMessages: F,
                minosDecryptionKeys: L,
                qplFlow: _,
              });
              var O = p
                  ? await c.load().then(function (e) {
                      return e.minosDecryptAndValidateMessages({
                        encryptedMinosMessages: F,
                        entryPoint: "range_query",
                        minosDecryptionKeys: L,
                        qplFlow: g,
                        serverThreadType: T,
                        source: a,
                        threadId: A,
                        validator: r("gkx")("5782")
                          ? o("MAWMpsXMAValidationPreprocessor").xmaValidator()
                          : function () {
                              return Promise.resolve();
                            },
                      });
                    })
                  : o("WAResultOrError").makeResult({
                      decryptionResult: new Map(),
                      errorMessages: new Map(),
                    }),
                B =
                  O.success === !0 && O.value.decryptionResult.size > 0
                    ? O.value.decryptionResult
                    : null,
                W =
                  O.success === !0
                    ? O.value.errorMessages
                    : [(f = O.error) != null ? f : "unknown-error"],
                q = W != null ? Array.from(W.values()).flat() : [];
              (g.addAnnotations({
                bool: { minos_decrypt_success: q.length === 0 },
                string_array: { minos_decrypt_errors: q },
              }),
                C.forEach(function (e) {
                  var t,
                    n = e == null ? void 0 : e.otid;
                  if (n != null) {
                    var r = o("MpsTypes").toMessageId(n),
                      a = (t = B == null ? void 0 : B.has(r)) != null ? t : !1,
                      i = O.success === !0 ? O.value.errorMessages : null,
                      l = i == null ? void 0 : i.get(r),
                      s = l != null && l.length > 0,
                      u = a || s;
                    u && s
                      ? _.addPoint("minos_decrypt_check", {
                          bool: { minos_decrypt_success: a },
                          string: { messageId: n },
                          string_array: { minos_decrypt_errors: l },
                        })
                      : u
                        ? _.addPoint("minos_decrypt_check", {
                            bool: { minos_decrypt_success: a },
                            string: { messageId: n },
                          })
                        : _.addPoint("minos_decrypt_check", {
                            string: { messageId: n },
                          });
                  }
                }));
              var U =
                  B != null && p
                    ? await u.load().then(function (e) {
                        return e.dedupeEncryptedLabyrinthMessages(C, B, g);
                      })
                    : C,
                V = o(
                  "handleRestoreMessagesGraphQLResponse",
                ).processMessageArray(
                  U,
                  y != null
                    ? o("EBMinosInterfaceTypes").unsafeCastToBackupFbid(y)
                    : v,
                ),
                H = V.encryptedNonLSEchoMessages,
                G = V.encryptedNonLSProtobufs,
                z = new Map();
              (G.forEach(function (e) {
                var t = e.attachmentData;
                t != null && z.set(e.otid, t);
              }),
                _.addPoint("native_decryption_start"));
              var j = await o("EBAPIDecryptionModule").decryptUsingNativeJS(
                i,
                w,
                G,
                H,
                a,
                "range_query",
              );
              if (!j.success) {
                var K,
                  Q,
                  X = j.error,
                  Y = X.message,
                  J = o("EBAPISharedTypes").EBAPIRestoreErrorValues.find(
                    function (e) {
                      return e === Y;
                    },
                  );
                return (
                  g.endFail("decrypt_labyrinth10_messages_failure", {
                    string: {
                      error_description: X.message,
                      errorStackTrace: (K = X.stack) != null ? K : "",
                    },
                  }),
                  _.endFail("decrypt_labyrinth10_messages_failure", {
                    string: {
                      error_description: X.message,
                      errorStackTrace: (Q = X.stack) != null ? Q : "",
                    },
                  }),
                  J != null
                    ? o("WAResultOrError").makeError(J)
                    : o("WAResultOrError").makeError("native-decryption-error")
                );
              }
              (g.addAnnotations({
                bool: {
                  labyrinth_10_toplevel_decrypt_success:
                    j.value.decryptedEchoMessages.length === H.length &&
                    j.value.decryptedProtobufs.length === G.length,
                },
              }),
                _.addPoint("native_decryption_end"));
              var Z = j.value.decryptedEchoMessages,
                ee = j.value.decryptedProtobufs,
                te = p
                  ? o("EBDedupeLabyrinthMessages").dedupeLabyrinthMessages(
                      ee,
                      B,
                    )
                  : ee;
              g.addAnnotations({
                int: {
                  decryptedEchoMessageCount: Z.length,
                  decryptedProtobufCount: te.length,
                },
              });
              var ne = o(
                  "EBAPIConvertNativeToLS",
                ).convertNativeDecryptionResponseToDecryptedMessageType(Z, te),
                re = o(
                  "MawEchoToProtobufConverter",
                ).convertEchoMessagesToEBProtobufs(
                  r("LSVec")
                    .toArray(ne.echo)
                    .map(o("MAWJobDefinitions").toEncodedEchoMessage),
                  s.chatJid,
                ),
                oe = o("MAWEncryptedBackupUtils")
                  .convertLSTypesToJSTypesForRestoreJob(ne.protobuf)
                  .map(function (e) {
                    var t = z.get(e.otid);
                    return t != null
                      ? babelHelpers.extends({}, e, { attachmentData: t })
                      : e;
                  }),
                ae = r("gkx")("10800") ? [].concat(re, oe) : [].concat(oe, re);
              return (
                _.addPoint("decryption_end"),
                _.endSuccess(),
                o("WAResultOrError").makeResult({
                  args: s,
                  messageRangeInfo: {
                    has_more_after: x,
                    has_more_before: P,
                    next_message_timestamp_ms_after: N,
                    next_message_timestamp_ms_before: M,
                  },
                  messages: r("gkx")("10800")
                    ? Array.from(
                        new Map(
                          ae.map(function (e) {
                            return [e.otid, e];
                          }),
                        ).values(),
                      )
                    : ae,
                })
              );
            } catch (e) {
              var ie = o("getSafeQplErrorMessage").getSafeQPLErrorMessage(e);
              return (
                _.endFail("runtime-error", {
                  string: { error_description: ie },
                }),
                g.addAnnotations({ string: { error_description: ie } }),
                o("WAResultOrError").makeError("runtime-error")
              );
            }
          }),
        );
        g.addPoint("decryption_end");
        var N = P.reduce(function (e, t) {
            var n = t.success;
            return n === !1 ? e + 1 : e;
          }, 0),
          M = D.length;
        return (
          N > 0
            ? g.endFail(
                o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints
                  .BATCH_RESTORE_AND_DECRYPT_FAILURE,
                {
                  bool: { allSuccessful: !1 },
                  int: { attemptCount: M, errorCount: N },
                  string_array: {
                    decryption_and_validation_errors: P.map(function (e) {
                      var t;
                      return e.success
                        ? "success"
                        : (t = e.error) != null
                          ? t
                          : "unknown-error";
                    }),
                  },
                },
              )
            : g.endSuccess({
                bool: { allSuccessful: !0 },
                int: { attemptCount: M, errorCount: 0 },
                string_array: {
                  decryption_and_validation_errors: P.map(function (e) {
                    var t;
                    return (t = e.error) != null ? t : "success";
                  }),
                },
              }),
          P
        );
      } catch (e) {
        throw (
          g.endFail(
            o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.RUNTIME_ERROR,
            {
              string: {
                error: o("getSafeQplErrorMessage").getSafeQPLErrorMessage(e),
              },
            },
          ),
          e
        );
      }
    }
    l.messageRangeQueryForThreads = p;
  },
  98,
);
