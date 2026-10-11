__d(
  "WAWebUnquarantineMessageJob",
  [
    "WALogger",
    "WAWebAddonQueryUtils",
    "WAWebBackendApi",
    "WAWebDBMessageDelete",
    "WAWebDBMessageSerialization",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebDBProcessOrphansForNewMsg",
    "WAWebE2EProtoParser",
    "WAWebFutureproofProtoUtils",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebQuarantineActionUtils",
    "WAWebQuarantineDataStore",
    "WAWebSchemaMessage",
    "WAWebSchemaMessageOrphans",
    "WAWebWamEnumEditType",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "err",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "unquarantineMessageJob: Starting unquarantine for message ",
                "",
              ])),
            t.toString(),
          );
          var a = o("WAWebSchemaMessage").getMessageTable(),
            i = yield a.get(t.toString());
          if (i == null) return m(t);
          var l =
            n != null
              ? n
              : yield o("WAWebQuarantineDataStore").getQuarantineData(
                  t.toString(),
                );
          if (l == null)
            throw r("err")("unquarantineMessageJob: Quarantine data not found");
          var u = yield _(t, i, l);
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "unquarantineMessageJob: Successfully unquarantined message ",
                  "",
                ])),
              t.toString(),
            ),
            u
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaMessageOrphans")
            .getMessageOrphanTable()
            .get(e.toString());
          if (t == null)
            throw r("err")(
              "unquarantineMessageJob: Message not found in database",
            );
          if (
            t.parsedMsgPayload.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL ||
            t.parsedMsgPayload.subtype !== "message_edit"
          )
            throw r("err")(
              "unquarantineMessageJob: Cannot resume quarantine restore: orphan is not a message edit",
            );
          if (!r("justknobx")._("572"))
            throw r("err")(
              "unquarantineMessageJob: Quarantined edit restore is disabled",
            );
          if (
            (yield o("WAWebQuarantineDataStore").getQuarantineData(
              e.toString(),
            )) == null
          )
            throw r("err")(
              "unquarantineMessageJob: Quarantined edit data not found",
            );
          return g(
            o("WAWebDBMessageSerialization").messageFromDbRow(
              t.parsedMsgPayload,
            ),
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = n.originalProtobuf,
            i;
          try {
            i = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsE2E.pb").MessageSpec,
              new Uint8Array(a),
            );
          } catch (e) {
            throw (
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "unquarantineMessageJob: Failed to decode protobuf",
                  ])),
              ),
              r("err")(
                "unquarantineMessageJob: Failed to decode original protobuf",
              )
            );
          }
          var l = o("WAWebDBMessageSerialization").messageFromDbRow(t),
            s = L(l),
            c = S(i),
            d = o("WAWebE2EProtoParser").parseMsgProto({
              message: s,
              messageProtobuf: i,
              msgContext: "relay",
              editAttr: c ? o("WAWebWamEnumEditType").EDIT_TYPE.EDITED : void 0,
            });
          if (d.type === o("WAWebMsgType").MSG_TYPE.QUARANTINED)
            throw r("err")(
              "unquarantineMessageJob: Failed to parse original protobuf",
            );
          if (
            d.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
            d.subtype === "message_edit" &&
            c
          )
            return g(d);
          var m = babelHelpers.extends({}, d, {
              quarantineExtractedText: null,
            }),
            p = o("WAWebDBMessageSerialization").dbRowFromMessage(m);
          return (
            (p.rowId = t.rowId),
            (p.internalId = t.internalId),
            yield o("WAWebSchemaMessage").getMessageTable().createOrReplace(p),
            yield o("WAWebQuarantineDataStore").deleteQuarantineData(
              e.toString(),
            ),
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "updateMessageUI",
              { chatId: e.remote, msg: m },
            ),
            yield o("WAWebDBProcessOrphansForNewMsg").processOrphansForNewMsg(
              m,
            ),
            !0
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield y(e);
          var t = yield b(e),
            n = e.id.toString();
          return (
            yield o("WAWebDBMessageDelete").removeMessagesFromHistory([n], {
              deleteAssociatedMsgs: !1,
              preserveQuarantineData: !t,
            }),
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "chatDeleteMessages",
              { chatId: e.id.remote.toString(), messageIds: [n] },
            ),
            t
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.id.toString(),
            n = o("WAWebSchemaMessageOrphans").getMessageOrphanTable();
          if ((yield n.get(t)) == null) {
            var a = e.protocolMessageKey;
            if (a != null) {
              var i,
                l = yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([a]),
                s = l.get(a.toString());
              if (
                (s == null || (i = s.latestEditMsgKey) == null
                  ? void 0
                  : i.equals(e.id)) === !0
              )
                return;
            }
            var u = yield o(
                "WAWebDBProcessEditProtocolMsgs",
              ).processEditProtocolMsgsWithOutcomes([e]),
              c = u.processedProtocolMsgs;
            if (!(c.length > 0))
              throw r("err")(
                "unquarantineMessageJob: Edit was not applied or stored",
              );
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            (yield o("WAWebSchemaMessageOrphans")
              .getMessageOrphanTable()
              .get(e.id.toString())) == null
          )
            return !0;
          var t = e.protocolMessageKey;
          if (t == null) return !1;
          var n = yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([t]),
            r = n.get(t.toString());
          return r == null ||
            r.type === o("WAWebMsgType").MSG_TYPE.QUARANTINED ||
            r.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT
            ? !1
            : (yield o(
                "WAWebDBProcessOrphansForNewMsg",
              ).processOrphansForNewMsg(r),
              (yield o("WAWebSchemaMessageOrphans")
                .getMessageOrphanTable()
                .get(e.id.toString())) == null);
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return r("justknobx")._("572") && R(e);
    }
    function R(e) {
      for (
        var t = e, n = 0;
        n <= o("WAWebQuarantineActionUtils").MESSAGE_MAX_INSPECTION_DEPTH;
        n++
      ) {
        var r, a;
        if (t == null) return !1;
        if (
          ((r = t.protocolMessage) == null ? void 0 : r.type) ===
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT
        )
          return !0;
        t =
          (a = o("WAWebFutureproofProtoUtils").maybeGetFutureproofMessage(t)) ==
          null
            ? void 0
            : a.message;
      }
      return !1;
    }
    function L(e) {
      return {
        id: e.id,
        from: e.from,
        to: e.to,
        author: e.author,
        broadcastId: e.broadcastId,
        type: e.type,
        viewMode: e.viewMode,
        subtype: e.subtype,
        count: e.count,
        notifyName: e.notifyName,
        ack: e.ack,
        t: e.t,
        clientReceivedTsMillis: e.clientReceivedTsMillis,
        invis: e.invis,
        local: e.local,
        hostedBizEncStateMismatch: e.hostedBizEncStateMismatch,
        placeholderCreatedWhenAccountIsHosted:
          e.placeholderCreatedWhenAccountIsHosted,
        senderOrRecipientAccountTypeHosted:
          e.senderOrRecipientAccountTypeHosted,
        limitSharing: e.limitSharing,
        acp2Setting: e.acp2Setting,
        mmSignalSharing: e.mmSignalSharing,
      };
    }
    l.unquarantineMessageJob = c;
  },
  98,
);
