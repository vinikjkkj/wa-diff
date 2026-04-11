__d(
  "WAWebUpdateMessageUIAction",
  [
    "WALogger",
    "WAWebAck",
    "WAWebAfterReadUtils",
    "WAWebBackendErrors",
    "WAWebCommonMsgUtils",
    "WAWebDBProcessMessage",
    "WAWebHandleForMessageRange",
    "WAWebHandleForMessageRangeEnums",
    "WAWebHandleMsgTypes.flow",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebStatusCollection",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t, n, r, o) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i, l) {
            (a === void 0 &&
              (a = o("WAWebHandleMsgTypes.flow").MessageOverwriteOption
                .NO_OVERWRITE),
              i === void 0 && (i = !0),
              l === void 0 && (l = !1));
            var c = {
                add: "after",
                update:
                  a !==
                  o("WAWebHandleMsgTypes.flow").MessageOverwriteOption
                    .NO_OVERWRITE,
                isHistory: !1,
              },
              d = !l,
              m = yield o(
                "WAWebHandleForMessageRange",
              ).handleForActiveMessageRange(t, n, d);
            if (
              !m.has(
                o("WAWebHandleForMessageRangeEnums").ActiveRangeHandlerAction
                  .DropMessage,
              )
            ) {
              var p = m.has(
                  o("WAWebHandleForMessageRangeEnums").ActiveRangeHandlerAction
                    .SkipUI,
                ),
                f = o("WAWebMsgCollection").MsgCollection.get(n.id);
              f &&
                (((o("WAWebCommonMsgUtils").isPlaceholderMsg(f.type) ||
                  o("WAWebCommonMsgUtils").isFutureproofMsg(f.type)) &&
                  !(
                    o("WAWebCommonMsgUtils").isPlaceholderMsg(n.type) ||
                    o("WAWebCommonMsgUtils").isFutureproofMsg(n.type)
                  )) ||
                (o("WAWebCommonMsgUtils").isQuarantinedMsg(f.type) &&
                  !o("WAWebCommonMsgUtils").isQuarantinedMsg(n.type)) ||
                (o("WAWebCommonMsgUtils").isRichResponseMsg(f.type) &&
                  o("WAWebCommonMsgUtils").isSomewhatParsedRichResponseMsg(n))
                  ? (c.update = !0)
                  : f.fromQuotedMsg
                    ? o("WAWebMsgCollection").MsgCollection.remove(f)
                    : (p = !0));
              try {
                (o("WAWebMsgGetters").getIsStatus(n) &&
                  o("WAWebStatusCollection").StatusCollection.handleUpdate(
                    n,
                    !1,
                  ),
                  p ||
                    (yield o(
                      "WAWebMsgCollection",
                    ).MsgCollection.processMultipleMessages(
                      t,
                      [
                        babelHelpers.extends({}, n, {
                          recvFresh: !0,
                          isNewMsg: !0,
                          expiredTimestamp: _(n),
                        }),
                      ],
                      c,
                      "updateMessageUIAction",
                      null,
                      i,
                    )));
              } catch (a) {
                if (a instanceof o("WAWebBackendErrors").LogoutDrop) return;
                if (
                  a instanceof
                  o("WAWebDBProcessMessage").PreviousMsgNotUpdatableError
                ) {
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Msg: ",
                        " chat: ",
                        " Error: PreviousMsgNotUpdatableError",
                      ])),
                    String(n.id),
                    String(t),
                  );
                  return;
                }
                var g = r("getErrorSafe")(a);
                r("gkx")("26258")
                  ? o("WALogger")
                      .WARN(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "Msg: ",
                            " chat: ",
                            " Error: ",
                            ", message: ",
                            ", stack: ",
                            "",
                          ])),
                        String(n.id),
                        String(t),
                        g.name,
                        g.message,
                        g.stack,
                      )
                      .tags("messaging")
                  : o("WALogger")
                      .WARN(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "Msg: ",
                            " chat: ",
                            " Error: ",
                            ", message: ",
                            ", stack: ",
                            "",
                          ])),
                        String(n.id),
                        String(t),
                        g.name,
                        g.message,
                        g.stack,
                      )
                      .tags("messaging")
                      .sendLogs(
                        "msg_handler for MD: error storing/processing single message",
                      );
              }
            }
          },
        )),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebMsgCollection").MsgCollection.get(e.id);
          t != null && t.delete();
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return e.afterReadDuration != null &&
        e.afterReadDuration > 0 &&
        (e.ack == null || e.ack < o("WAWebAck").ACK.READ) &&
        e.expiredTimestamp == null &&
        o("WAWebAfterReadUtils").isAfterReadEnabled()
        ? o("WAWebMsgGetters").getEphemeralExpirationTimestamp(e)
        : e.expiredTimestamp;
    }
    ((l.updateUI = c), (l.removePlaceholder = m));
  },
  98,
);
