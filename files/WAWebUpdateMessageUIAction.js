__d(
  "WAWebUpdateMessageUIAction",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAfterReadUtils",
    "WAWebBackendErrors",
    "WAWebChatGetExistingBridge",
    "WAWebCommonMsgUtils",
    "WAWebDBProcessMessage",
    "WAWebHandleForMessageRange",
    "WAWebHandleForMessageRangeEnums",
    "WAWebHandleMsgTypes",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebStatusCollection",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 0.01;
    async function m(e) {
      var t = e.chatId,
        n = e.isOffline,
        r = n === void 0 ? !1 : n,
        a = e.messageOverwriteOption,
        i =
          a === void 0
            ? o("WAWebHandleMsgTypes").MessageOverwriteOption.NO_OVERWRITE
            : a,
        l = e.msg,
        s = e.preserveOrder,
        u = s === void 0 ? !0 : s,
        c = await g(t, l, r, i);
      if (c != null)
        try {
          (h(l), c.skipUI || (await y(t, [l], c.update, u)));
        } catch (e) {
          C(e, l, t);
        }
    }
    async function p(e) {
      var t = e.chatId,
        n = e.isOffline,
        r = n === void 0 ? !1 : n,
        a = e.messageOverwriteOption,
        i =
          a === void 0
            ? o("WAWebHandleMsgTypes").MessageOverwriteOption.NO_OVERWRITE
            : a,
        l = e.msgs,
        s = e.preserveOrder,
        u = s === void 0 ? !0 : s;
      if (l.some(o("WAWebMsgGetters").getIsStatus)) {
        var c = async function (n) {
          await m({
            chatId: t,
            isOffline: r,
            messageOverwriteOption: i,
            msg: n,
            preserveOrder: u,
          }).catch(function (e) {
            return C(e, n, t);
          });
        };
        for (var d of l) await c(d);
        return;
      }
      var p = [],
        f = async function (n) {
          var e = await g(t, n, r, i).catch(function (e) {
            return (C(e, n, t), null);
          });
          if (e != null && !e.skipUI) {
            var o = p.at(-1);
            o != null && o.update === e.update
              ? o.msgs.push(n)
              : p.push({ msgs: [n], update: e.update });
          }
        };
      for (var h of l) await f(h);
      for (var y of p) await _(t, y.msgs, y.update, u);
    }
    async function _(t, n, a, i) {
      try {
        await y(t, n, a, i);
      } catch (s) {
        if (s instanceof o("WAWebBackendErrors").LogoutDrop) return;
        if (n.length === 1) {
          C(s, n[0], t);
          return;
        }
        (o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "updateUIForMessages: adding ",
                " messages at once failed, adding them one at a time",
              ])),
            n.length,
          )
          .catching(r("getErrorSafe")(s))
          .tags("messaging")
          .sendLogs("update-ui-for-messages-run-failed", { sampling: d }),
          a || f(t, n));
        for (var l of n) await _(t, [l], a, i);
      }
    }
    function f(e, t) {
      var n,
        r =
          (n = o("WAWebChatGetExistingBridge").getChatOrNewsletter(e)) == null
            ? void 0
            : n.msgs;
      r != null &&
        t.forEach(function (e) {
          var t = o("WAWebMsgCollection").MsgCollection.get(e.id);
          t != null &&
            r.get(e.id) == null &&
            o("WAWebMsgCollection").MsgCollection.remove(t);
        });
    }
    async function g(e, t, n, r) {
      var a = !n,
        i = await o("WAWebHandleForMessageRange").handleForActiveMessageRange(
          e,
          t,
          a,
        );
      if (
        i.has(
          o("WAWebHandleForMessageRangeEnums").ActiveRangeHandlerAction
            .DropMessage,
        )
      )
        return null;
      var l =
          r !== o("WAWebHandleMsgTypes").MessageOverwriteOption.NO_OVERWRITE,
        s = i.has(
          o("WAWebHandleForMessageRangeEnums").ActiveRangeHandlerAction.SkipUI,
        ),
        u = o("WAWebMsgCollection").MsgCollection.get(t.id);
      return u == null
        ? { skipUI: s, update: l }
        : ((o("WAWebCommonMsgUtils").isPlaceholderMsg(u.type) ||
              o("WAWebCommonMsgUtils").isFutureproofMsg(u.type)) &&
              !(
                o("WAWebCommonMsgUtils").isPlaceholderMsg(t.type) ||
                o("WAWebCommonMsgUtils").isFutureproofMsg(t.type)
              )) ||
            (o("WAWebCommonMsgUtils").isQuarantinedMsg(u.type) &&
              !o("WAWebCommonMsgUtils").isQuarantinedMsg(t.type)) ||
            (o("WAWebCommonMsgUtils").isRichResponseMsg(u.type) &&
              o("WAWebCommonMsgUtils").isSomewhatParsedRichResponseMsg(t)) ||
            o("WAWebCommonMsgUtils").isPlaceholderSubtypeUpgrade(
              t.subtype,
              u.subtype,
            )
          ? { skipUI: s, update: !0 }
          : u.fromQuotedMsg
            ? (o("WAWebMsgCollection").MsgCollection.remove(u),
              { skipUI: s, update: l })
            : { skipUI: !0, update: l };
    }
    function h(e) {
      o("WAWebMsgGetters").getIsStatus(e) &&
        o("WAWebStatusCollection").StatusCollection.handleUpdate(e, !1);
    }
    async function y(e, t, n, r) {
      var a = { add: "after", update: n, isHistory: !1 };
      await o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
        e,
        t.map(function (e) {
          return babelHelpers.extends({}, e, {
            recvFresh: !0,
            isNewMsg: !0,
            expiredTimestamp: v(e),
          });
        }),
        a,
        "updateMessageUIAction",
        null,
        r,
      );
    }
    function C(e, t, n) {
      if (!(e instanceof o("WAWebBackendErrors").LogoutDrop)) {
        if (
          e instanceof o("WAWebDBProcessMessage").PreviousMsgNotUpdatableError
        ) {
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Msg: ",
                " chat: ",
                " Error: PreviousMsgNotUpdatableError",
              ])),
            String(t.id),
            String(n),
          );
          return;
        }
        var a = r("getErrorSafe")(e);
        r("gkx")("9092")
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
                String(t.id),
                String(n),
                a.name,
                a.message,
                a.stack,
              )
              .tags("messaging")
              .sendLogs(
                "msg_handler for MD: error storing/processing single message",
              )
          : o("WALogger")
              .WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Msg: ",
                    " chat: ",
                    " Error: ",
                    ", message: ",
                    ", stack: ",
                    "",
                  ])),
                String(t.id),
                String(n),
                a.name,
                a.message,
                a.stack,
              )
              .tags("messaging");
      }
    }
    async function b(e) {
      var t = o("WAWebMsgCollection").MsgCollection.get(e.id);
      t != null && t.delete();
    }
    function v(e) {
      var t,
        n = e.afterReadDuration;
      if (
        n == null ||
        n <= 0 ||
        e.expiredTimestamp != null ||
        !o("WAWebAfterReadUtils").isAfterReadEnabled()
      ) {
        var r;
        return (r = e.expiredTimestamp) != null ? r : null;
      }
      var a = (t = e.t) != null ? t : o("WATimeUtils").unixTime();
      return e.id.fromMe || (e.ack != null && e.ack >= o("WAWebAck").ACK.READ)
        ? a + n
        : o("WAWebMsgGetters").getEphemeralExpirationTimestamp(e);
    }
    ((l.updateUI = m), (l.updateUIForMessages = p), (l.removePlaceholder = b));
  },
  98,
);
