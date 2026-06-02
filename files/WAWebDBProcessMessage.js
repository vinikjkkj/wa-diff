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
    "WAWebDBStoreMessage",
    "WAWebDbEncryptionKey",
    "WAWebHandlePlaceholderWam",
    "WAWebLinkify",
    "WAWebMessageAssociationGatingUtils",
    "WAWebModelStorageUtils",
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
    async function h(e, t, n) {
      return (
        n === void 0 && (n = !1),
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
        await o("WAWebDbEncryptionKey").DbEncKeyStore.waitForFinalDbMsgEncKey(),
        Promise.resolve(
          o("WAWebDBStoreMessage").storeMessageInTransaction(e, t, n),
        )
          .then(function () {
            p == null || p.index().catch(r("WAWebNoop"));
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
          })
      );
    }
    function y(e, t) {
      var n,
        a = t == null ? ((n = e[0]) == null ? void 0 : n.id.remote) : t;
      if (a) {
        var i = e.map(function (e) {
          var t = o("WAWebDBMessageSerialization").dbRowFromMessage(e);
          return o("WAWebDBStoreMessage").addMsgMetadataToMsgRow({
            msg: t,
            chatId: a.toString(),
            hasLink: o("WAWebLinkify").hasHttpLink(e),
            pendingReadReceipt: !1,
          });
        });
        return Promise.resolve(
          o("WAWebSchemaMessage").getMessageTable().bulkCreateOrMerge(i),
        )
          .then(function () {
            p == null || p.index().catch(r("WAWebNoop"));
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
    function C(e) {
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
              var i = e.from,
                l = babelHelpers.extends({}, e);
              (a.t != null && (l.t = a.t),
                a.ack > e.ack && (l.ack = a.ack),
                a.serverStoreTimeMicros != null &&
                  (l.serverStoreTimeMicros = a.serverStoreTimeMicros));
              var s = o("WAWebDBStoreMessage").addMsgMetadataToMsgRow({
                msg: o("WAWebDBMessageSerialization").dbRowFromMessage(l),
                chatId: i.toString(),
                hasLink: o("WAWebLinkify").hasHttpLink(l),
                rowId: void 0,
                inChatMsgId: void 0,
                pendingReadReceipt: a.pendingReadReceipt,
              });
              if (
                ((s.rowId = a.rowId),
                (s.internalId = a.internalId),
                s.rowId == null || s.internalId == null)
              )
                throw r("err")(
                  "[messaging] updateMessage: msgId::" +
                    e.id.toString() +
                    ", missing rowId or internalId",
                );
              return (
                await n.createOrReplace(s),
                o("WAWebCommonMsgUtils").isPlaceholderMsg(a.type) &&
                  o(
                    "WAWebHandlePlaceholderWam",
                  ).postPlaceholderActivityPopulateEvent([
                    o("WAWebDBMessageSerialization").messageFromDbRow(a),
                  ]),
                p == null || p.index().catch(r("WAWebNoop")),
                l
              );
            });
    }
    function b(e) {
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
              if (
                r != null &&
                o(
                  "WAWebMessageAssociationGatingUtils",
                ).isMessageAssociationInfraEnabled()
              ) {
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
            o(
              "WAWebMessageAssociationGatingUtils",
            ).isMessageAssociationInfraEnabled() &&
            r.push(
              o(
                "WAWebDBDeleteAssociatedMsgsByMsgKey",
              ).bulkDeleteMessagesByMsgKeyAndAssociationType(t),
            ),
            await Promise.all(r));
        });
    }
    function v(e) {
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
      (l.storeMessages = h),
      (l.updateExistingMessages = y),
      (l.updateMessage = C),
      (l.starMessages = b),
      (l.unstarMessages = v));
  },
  98,
);
