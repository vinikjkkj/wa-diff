__d(
  "WAWebDBProcessMessage",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "cr:375",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = (e = n("cr:375")) != null ? e : {},
      _ = p.ftsLightClient,
      f = (function (e) {
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
      g = (function (e) {
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
      h = (function (e) {
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
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          return (
            a === void 0 && (a = !1),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "storeMessages: store ",
                  ", for chat ",
                  ", isHistorySync: ",
                  "",
                ])),
              e.length,
              t.toLogString(),
              a,
            ),
            o("WAWebDBMessageBulkHelper").logMissingGroupParticipantLids(e, a),
            o("WAWebCommonMsgUtils").logUndefinedMessage(e),
            yield o(
              "WAWebDbEncryptionKey",
            ).DbEncKeyStore.waitForFinalDbMsgEncKey(),
            (m || (m = n("Promise")))
              .resolve(
                o("WAWebDBStoreMessage").storeMessageInTransaction(e, t, a),
              )
              .then(function () {
                _ == null || _.index().catch(r("WAWebNoop"));
              })
              .catch(function (e) {
                throw e instanceof r("WAWeb-dexie").BulkError ||
                  e instanceof r("WAWeb-dexie").ConstraintError
                  ? new g()
                  : (o("WALogger").WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "Error storing messages",
                        ])),
                    ),
                    e);
              })
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      var a,
        i = t == null ? ((a = e[0]) == null ? void 0 : a.id.remote) : t;
      if (i) {
        var l = e.map(function (e) {
          var t = o("WAWebDBMessageSerialization").dbRowFromMessage(e);
          return o("WAWebDBStoreMessage").addMsgMetadataToMsgRow({
            msg: t,
            chatId: i.toString(),
            hasLink: o("WAWebLinkify").hasHttpLink(e),
            pendingReadReceipt: !1,
          });
        });
        return (m || (m = n("Promise")))
          .resolve(
            o("WAWebSchemaMessage").getMessageTable().bulkCreateOrMerge(l),
          )
          .then(function () {
            _ == null || _.index().catch(r("WAWebNoop"));
          })
          .catch(function (e) {
            throw (
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Error storing messages",
                  ])),
              ),
              e
            );
          });
      }
      return (m || (m = n("Promise"))).resolve();
    }
    function v(e) {
      return o("WAWebCommonMsgUtils").isPlaceholderMsg(e.type)
        ? (m || (m = n("Promise"))).resolve(e)
        : o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["message"],
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var n = t[0],
                      a = yield n.get(e.id.toString());
                    if (!a)
                      throw new f(
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
                            u ||
                              (u = babelHelpers.taggedTemplateLiteralLoose([
                                "updateMessage: msgId::",
                                ", prev row not placeholder/futureproof",
                              ])),
                            e.id.toString(),
                          )
                          .tags("messaging"),
                        new h()
                      );
                    var i = e.from,
                      l = babelHelpers.extends({}, e);
                    (a.t != null && (l.t = a.t),
                      a.ack > e.ack && (l.ack = a.ack));
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
                      yield n.createOrReplace(s),
                      o("WAWebCommonMsgUtils").isPlaceholderMsg(a.type) &&
                        o(
                          "WAWebHandlePlaceholderWam",
                        ).postPlaceholderActivityPopulateEvent([
                          o("WAWebDBMessageSerialization").messageFromDbRow(a),
                        ]),
                      _ == null || _.index().catch(r("WAWebNoop")),
                      l
                    );
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            );
    }
    function S(e) {
      return o("WAWebSchemaMessage")
        .getMessageTable()
        .bulkGet(e)
        .then(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = [],
                  r = e.filter(Boolean).map(function (e) {
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
                          viewMode:
                            o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                          parentMsgKey: null,
                        })));
                    }
                    return n;
                  }),
                  a = [
                    o("WAWebSchemaMessage")
                      .getMessageTable()
                      .bulkCreateOrMerge(r),
                  ];
                (t.length &&
                  o(
                    "WAWebMessageAssociationGatingUtils",
                  ).isMessageAssociationInfraEnabled() &&
                  a.push(
                    o(
                      "WAWebDBDeleteAssociatedMsgsByMsgKey",
                    ).bulkDeleteMessagesByMsgKeyAndAssociationType(t),
                  ),
                  yield (m || (m = n("Promise"))).all(a));
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        );
    }
    function R(e) {
      return o("WAWebSchemaMessage")
        .getMessageTable()
        .bulkCreateOrMerge(
          e.map(function (e) {
            return { id: e, isStarred: void 0 };
          }),
        );
    }
    ((l.NoMessageToUpdateError = f),
      (l.DuplicateMessageError = g),
      (l.PreviousMsgNotUpdatableError = h),
      (l.storeMessages = y),
      (l.updateExistingMessages = b),
      (l.updateMessage = v),
      (l.starMessages = S),
      (l.unstarMessages = R));
  },
  98,
);
