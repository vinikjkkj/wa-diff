__d(
  "WAWebDBProcessMessage",
  [
    "WALogger",
    "WAWeb-dexie",
    "WAWebAssociationProcessor",
    "WAWebAssociationProcessorConstants",
    "WAWebCommonMsgUtils",
    "WAWebDBDeleteAssociatedMsgsByMsgKey",
    "WAWebDBMessageBulkHelper",
    "WAWebDBMessageSerialization",
    "WAWebDBMsgUtils",
    "WAWebDBReadReceiptOriginBindings",
    "WAWebDBStoreMessage",
    "WAWebDbEncryptionKey",
    "WAWebHandlePlaceholderWam",
    "WAWebLinkify",
    "WAWebModelStorageUtils",
    "WAWebMsgStoreExtensions",
    "WAWebNoop",
    "WAWebSchemaMessage",
    "WAWebSyncGatingUtils",
    "WAWebViewMode.flow",
    "cr:375",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = (e = n("cr:375")) != null ? e : {},
      p = m.ftsLightClient,
      _ = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "NoMessageToUpdateError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      f = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "DuplicateMessageError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      g = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "PreviousMsgNotUpdatableError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    function h(e) {
      (e.length > 0 &&
        e.every(function (e) {
          return o("WAWebCommonMsgUtils").isCallLogMsg(e.type);
        })) ||
        p == null ||
        p.index().catch(r("WAWebNoop"));
    }
    async function y(e, t, n) {
      (n === void 0 && (n = !1),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "storeMessages: store ",
              ", for chat ",
              ", isHistorySync: ",
              "",
            ])),
          e.length,
          t.toLogString(),
          n,
        ),
        o("WAWebDBMessageBulkHelper").logMissingGroupParticipantLids(e, n),
        o("WAWebCommonMsgUtils").logUndefinedMessage(e),
        await o(
          "WAWebDbEncryptionKey",
        ).DbEncKeyStore.waitForFinalDbMsgEncKey());
      var a = n
        ? e
        : await o("WAWebMsgStoreExtensions").prepareNewMsgsForStore(e);
      return Promise.resolve(
        o("WAWebDBStoreMessage").storeMessageInTransaction(a, t, n),
      )
        .then(function () {
          h(a);
        })
        .catch(function (e) {
          throw e instanceof r("WAWeb-dexie").BulkError ||
            e instanceof r("WAWeb-dexie").ConstraintError
            ? new f()
            : (o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Error storing messages",
                  ])),
              ),
              e);
        });
    }
    function C(e, t) {
      var n,
        r = t == null ? ((n = e[0]) == null ? void 0 : n.id.remote) : t;
      if (r) {
        var a = e.map(function (e) {
          var t = o("WAWebDBMessageSerialization").dbRowFromMessage(e);
          return o("WAWebDBStoreMessage").addMsgMetadataToMsgRow({
            msg: t,
            chatId: r.toString(),
            hasLink: o("WAWebLinkify").hasHttpLink(e),
            pendingReadReceipt: !1,
          });
        });
        return Promise.resolve(
          o("WAWebSchemaMessage").getMessageTable().bulkCreateOrMerge(a),
        )
          .then(function () {
            h(e);
          })
          .catch(function (e) {
            throw (
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Error storing messages",
                  ])),
              ),
              e
            );
          });
      }
      return Promise.resolve();
    }
    function b(e) {
      return o("WAWebCommonMsgUtils").isPlaceholderMsg(e.type)
        ? Promise.resolve(e)
        : o("WAWebModelStorageUtils")
            .getStorage()
            .lock(["message"], async function (t) {
              var n = t[0],
                a = await n.get(e.id.toString());
              if (!a)
                throw new _(
                  "[messaging] updateMessage: msgId::" +
                    e.id.toString() +
                    ", Failed to find previous message row in message table",
                );
              if (
                !o("WAWebCommonMsgUtils").isPlaceholderMsg(a.type) &&
                !o("WAWebCommonMsgUtils").isFutureproofMsg(a.type) &&
                !o("WAWebCommonMsgUtils").isCallLogMsg(a.type)
              )
                throw (
                  o("WALogger")
                    .LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "updateMessage: msgId::",
                          ", prev row not placeholder/futureproof",
                        ])),
                      e.id.toString(),
                    )
                    .tags("messaging"),
                  new g()
                );
              var i = S(e, a);
              (a.t != null && (i.t = a.t),
                a.ack > e.ack && (i.ack = a.ack),
                a.serverStoreTimeMicros != null &&
                  (i.serverStoreTimeMicros = a.serverStoreTimeMicros));
              var l = o("WAWebDBStoreMessage").addMsgMetadataToMsgRow({
                msg: o("WAWebDBMessageSerialization").dbRowFromMessage(i),
                chatId: e.id.remote.toString(),
                hasLink: o("WAWebLinkify").hasHttpLink(i),
                rowId: void 0,
                inChatMsgId: void 0,
                pendingReadReceipt: !1,
              });
              if (
                ((l.rowId = a.rowId),
                (l.internalId = a.internalId),
                v(l, a),
                (l.pendingReadReceipt =
                  a.pendingReadReceipt ===
                    o("WAWebDBMsgUtils").PendingReadReceiptType.MessageEdit &&
                  l.latestEditMsgKey == null
                    ? o("WAWebDBMsgUtils").PendingReadReceiptType.Message
                    : a.pendingReadReceipt),
                (l.pendingReadReceiptOrigin = o(
                  "WAWebDBReadReceiptOriginBindings",
                ).getCarriedPendingReadReceiptOrigin(a, l)),
                l.rowId == null || l.internalId == null)
              )
                throw r("err")(
                  "[messaging] updateMessage: msgId::" +
                    e.id.toString() +
                    ", missing rowId or internalId",
                );
              return (
                await n.createOrReplace(l),
                o("WAWebCommonMsgUtils").isPlaceholderMsg(a.type) &&
                  o(
                    "WAWebHandlePlaceholderWam",
                  ).postPlaceholderActivityPopulateEvent([
                    o("WAWebDBMessageSerialization").messageFromDbRow(a),
                  ]),
                h([e]),
                i
              );
            });
    }
    function v(e, t) {
      var n, r, o, a, i, l;
      ((e.isStarred = (n = e.isStarred) != null ? n : t.isStarred),
        (e.kicKey = (r = e.kicKey) != null ? r : t.kicKey),
        (e.kicState = (o = e.kicState) != null ? o : t.kicState),
        (e.kicTimestampMs =
          (a = e.kicTimestampMs) != null ? a : t.kicTimestampMs),
        (e.kicNotified = (i = e.kicNotified) != null ? i : t.kicNotified),
        (e.keptCount = (l = e.keptCount) != null ? l : t.keptCount));
    }
    function S(e, t) {
      var n;
      return e.kind === "callLog"
        ? babelHelpers.extends({}, e, {
            switchEntryCallLogTime: t.switchEntryCallLogTime,
            switchEntryEnded: t.switchEntryEnded,
            joinableCallId:
              (n = e.joinableCallId) != null ? n : t.joinableCallId,
          })
        : babelHelpers.extends({}, e);
    }
    function R(e) {
      return o("WAWebSchemaMessage")
        .getMessageTable()
        .bulkGet(e)
        .then(async function (e) {
          var t = [],
            n = e.filter(Boolean).map(function (e) {
              var n = {
                  id: e.id,
                  isStarred: o(
                    "WAWebSyncGatingUtils",
                  ).shouldPopulateStarMessageWithTimestamp()
                    ? e.t
                    : e.rowId,
                },
                r = e.associationType;
              if (r != null) {
                var a = o(
                  "WAWebAssociationProcessor",
                ).getAssociationProcessorByAssociationType(r);
                a &&
                  a.processorType ===
                    o("WAWebAssociationProcessorConstants")
                      .AssociationProcessorType.WithDetachedMessages &&
                  (t.push([e.id, r]),
                  (n = babelHelpers.extends({}, n, {
                    associationType: null,
                    viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                    parentMsgKey: null,
                  })));
              }
              return n;
            }),
            r = [
              o("WAWebSchemaMessage").getMessageTable().bulkCreateOrMerge(n),
            ];
          (t.length &&
            r.push(
              o(
                "WAWebDBDeleteAssociatedMsgsByMsgKey",
              ).bulkDeleteMessagesByMsgKeyAndAssociationType(t),
            ),
            await Promise.all(r));
        });
    }
    function L(e) {
      return o("WAWebSchemaMessage")
        .getMessageTable()
        .bulkCreateOrMerge(
          e.map(function (e) {
            return { id: e, isStarred: void 0 };
          }),
        );
    }
    ((l.NoMessageToUpdateError = _),
      (l.DuplicateMessageError = f),
      (l.PreviousMsgNotUpdatableError = g),
      (l.storeMessages = y),
      (l.updateExistingMessages = C),
      (l.updateMessage = b),
      (l.keepUserStateOfPrevRow = v),
      (l.starMessages = R),
      (l.unstarMessages = L));
  },
  98,
);
