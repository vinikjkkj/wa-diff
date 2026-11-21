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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 0.01;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            c = yield C(t, l, r, i);
          if (c != null)
            try {
              (v(l), c.skipUI || (yield S(t, [l], c.update, u)));
            } catch (e) {
              L(e, l, t);
            }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            var c = function* (n) {
              yield m({
                chatId: t,
                isOffline: r,
                messageOverwriteOption: i,
                msg: n,
                preserveOrder: u,
              }).catch(function (e) {
                return L(e, n, t);
              });
            };
            for (var d of l) yield* c(d);
            return;
          }
          var p = [],
            _ = function* (n) {
              var e = yield C(t, n, r, i).catch(function (e) {
                return (L(e, n, t), null);
              });
              if (e != null && !e.skipUI) {
                var o = p.at(-1);
                o != null && o.update === e.update
                  ? o.msgs.push(n)
                  : p.push({ msgs: [n], update: e.update });
              }
            };
          for (var f of l) yield* _(f);
          for (var h of p) yield g(t, h.msgs, h.update, u);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n, r) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            try {
              yield S(e, t, n, a);
            } catch (l) {
              if (l instanceof o("WAWebBackendErrors").LogoutDrop) return;
              if (t.length === 1) {
                L(l, t[0], e);
                return;
              }
              (o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "updateUIForMessages: adding ",
                      " messages at once failed, adding them one at a time",
                    ])),
                  t.length,
                )
                .catching(r("getErrorSafe")(l))
                .tags("messaging")
                .sendLogs("update-ui-for-messages-run-failed", { sampling: d }),
                n || y(e, t));
              for (var i of t) yield g(e, [i], n, a);
            }
          },
        )),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
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
    function C(e, t, n, r) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = !n,
              i = yield o(
                "WAWebHandleForMessageRange",
              ).handleForActiveMessageRange(e, t, a);
            if (
              i.has(
                o("WAWebHandleForMessageRangeEnums").ActiveRangeHandlerAction
                  .DropMessage,
              )
            )
              return null;
            var l =
                r !==
                o("WAWebHandleMsgTypes").MessageOverwriteOption.NO_OVERWRITE,
              s = i.has(
                o("WAWebHandleForMessageRangeEnums").ActiveRangeHandlerAction
                  .SkipUI,
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
                    o("WAWebCommonMsgUtils").isSomewhatParsedRichResponseMsg(
                      t,
                    )) ||
                  o("WAWebCommonMsgUtils").isPlaceholderSubtypeUpgrade(
                    t.subtype,
                    u.subtype,
                  )
                ? { skipUI: s, update: !0 }
                : u.fromQuotedMsg
                  ? (o("WAWebMsgCollection").MsgCollection.remove(u),
                    { skipUI: s, update: l })
                  : { skipUI: !0, update: l };
          },
        )),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      o("WAWebMsgGetters").getIsStatus(e) &&
        o("WAWebStatusCollection").StatusCollection.handleUpdate(e, !1);
    }
    function S(e, t, n, r) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = { add: "after", update: n, isHistory: !1 };
            yield o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
              e,
              t.map(function (e) {
                return babelHelpers.extends({}, e, {
                  recvFresh: !0,
                  isNewMsg: !0,
                  expiredTimestamp: I(e),
                });
              }),
              a,
              "updateMessageUIAction",
              null,
              r,
            );
          },
        )),
        R.apply(this, arguments)
      );
    }
    function L(t, n, a) {
      if (!(t instanceof o("WAWebBackendErrors").LogoutDrop)) {
        if (
          t instanceof o("WAWebDBProcessMessage").PreviousMsgNotUpdatableError
        ) {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Msg: ",
                " chat: ",
                " Error: PreviousMsgNotUpdatableError",
              ])),
            String(n.id),
            String(a),
          );
          return;
        }
        var i = r("getErrorSafe")(t);
        r("gkx")("9092")
          ? o("WALogger")
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
                String(a),
                i.name,
                i.message,
                i.stack,
              )
              .tags("messaging")
              .sendLogs(
                "msg_handler for MD: error storing/processing single message",
              )
          : o("WALogger")
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
                String(a),
                i.name,
                i.message,
                i.stack,
              )
              .tags("messaging");
      }
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebMsgCollection").MsgCollection.get(e.id);
          t != null && t.delete();
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
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
    ((l.updateUI = m), (l.updateUIForMessages = _), (l.removePlaceholder = E));
  },
  98,
);
