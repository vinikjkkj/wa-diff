__d(
  "WAWebDBMessageEditAddOnProvider",
  [
    "Promise",
    "WALogger",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebMessageAddOnType",
    "WAWebMessageEditUtils",
    "WAWebMsgType",
    "WAWebQuarantineDataStore",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = {
        type: o("WAWebMessageAddOnType").MessageAddOnType.MessageEdit,
        matches: function (t) {
          return (
            t.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
            t.subtype === "message_edit"
          );
        },
        matchesFutureproof: function (t) {
          return (
            t.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
            t.futureproofType === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
            t.futureproofSubtype === "message_edit"
          );
        },
        canRenderInUi: function (t) {
          var e = t.editMsgType
            ? o("WAWebMessageEditUtils").getMsgEditType(t.editMsgType)
            : o("WAWebMessageEditUtils").MsgEditType.TextEdit;
          if (!e) return !1;
          switch (e) {
            case o("WAWebMessageEditUtils").MsgEditType.EventEdit:
            case o("WAWebMessageEditUtils").MsgEditType.PollEdit:
              return !1;
            case o("WAWebMessageEditUtils").MsgEditType.CaptionEdit:
            case o("WAWebMessageEditUtils").MsgEditType.TextEdit:
            case o("WAWebMessageEditUtils").MsgEditType.RichResponseEdit:
            case o("WAWebMessageEditUtils").MsgEditType.LoadingMediaEdit:
              return !0;
          }
        },
        processOrphansForNewMsg: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n,
                r = yield o(
                  "WAWebDBProcessEditProtocolMsgs",
                ).processEditProtocolMsgsWithOutcomes(
                  t.map(function (e) {
                    return e.parsedMsgPayload;
                  }),
                ),
                a = r.consumedProtocolMsgs,
                i = r.latestMessageEdits,
                l =
                  (n = i.find(function (t) {
                    return t.parentMsg.id.equals(e.id);
                  })) == null
                    ? void 0
                    : n.editedMsgData;
              return (l && Object.assign(e, l), c(t, a));
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      };
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (r("justknobx")._("572")) {
            var o = new Set(
                t.map(function (e) {
                  return e.id.toString();
                }),
              ),
              a = yield (s || (s = n("Promise"))).all(
                e.map(function (e) {
                  return m(e, o);
                }),
              );
            return {
              retainedOrphanMsgKeys: a.filter(function (e) {
                return e != null;
              }),
            };
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            return (yield o("WAWebQuarantineDataStore").getQuarantineData(
              t.msgKey,
            )) == null
              ? null
              : n.has(t.parsedMsgPayload.id.toString())
                ? ((yield o("WAWebSchemaMessage")
                    .getMessageTable()
                    .get(t.msgKey)) == null &&
                    (yield o("WAWebQuarantineDataStore").deleteQuarantineData(
                      t.msgKey,
                    )),
                  null)
                : t.msgKey;
          } catch (n) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "cleanupQuarantinedEditOrphans: cleanup failed, retaining orphan",
                    ])),
                )
                .catching(r("getErrorSafe")(n))
                .sendLogs("quarantine-edit-orphan-cleanup-failed", {
                  sampling: 0.01,
                }),
              t.msgKey
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    l.messageEditAddOnProvider = u;
  },
  98,
);
