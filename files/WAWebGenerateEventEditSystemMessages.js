__d(
  "WAWebGenerateEventEditSystemMessages",
  [
    "Promise",
    "WANullthrows",
    "WAWebBackendApi",
    "WAWebDBProcessMessage",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          yield (e || (e = n("Promise"))).all(
            t.map(
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var a = t[0],
                      i = t[1],
                      l = o("WAWebWidFactory").createWid(a),
                      s = yield (e || (e = n("Promise"))).all(
                        r("compactMap")(i, function (e) {
                          var t = e.protocolMsg.latestEditSenderTimestampMs;
                          if (
                            !(
                              t == null ||
                              o("WAWebMsgGetters").getIsFailed(e.protocolMsg)
                            )
                          )
                            return c(l, t, e);
                        }),
                      ),
                      u = yield o("WAWebBackendApi").frontendSendAndReceive(
                        "processMultipleMessages",
                        {
                          chatId: l,
                          msgObjs: s,
                          meta: { add: "after", isHistory: !1 },
                          processMessagesOrigin: "eventEditMessage",
                        },
                      );
                    u && (yield o("WAWebDBProcessMessage").storeMessages(s, l));
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            ),
          );
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a,
            i,
            l,
            s,
            u = n.editedMsgData,
            c = n.protocolMsg,
            d = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            m = r("WANullthrows")(o("WAWebMsgGetters").getSender(c)),
            p = {
              eventName: r("WANullthrows")(u == null ? void 0 : u.eventName),
              eventStartTime: r("WANullthrows")(
                u == null ? void 0 : u.eventStartTime,
              ),
              eventEndTime: u == null ? void 0 : u.eventEndTime,
              isEventCanceled:
                (a = u == null ? void 0 : u.isEventCanceled) != null ? a : !1,
              eventLocation:
                (i = u == null ? void 0 : u.eventLocation) != null ? i : void 0,
              eventDescription:
                (l = u == null ? void 0 : u.eventDescription) != null
                  ? l
                  : void 0,
              eventJoinLink:
                (s = u == null ? void 0 : u.eventJoinLink) != null ? s : void 0,
            };
          return babelHelpers.extends(
            {
              id: new (r("WAWebMsgKey"))({
                id: yield r("WAWebMsgKey").newId(),
                fromMe: o("WAWebUserPrefsMeUser").isMeAccount(m),
                remote: e,
                participant: m,
              }),
              author: m,
              from: e,
              to: d,
              t: c.t,
              type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
              subtype: "event_edit_decrypted",
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              kind: o("WAWebMsgType").MsgKind.ProtocolEventEdit,
              editMsgType: o("WAWebMsgType").MSG_TYPE.EVENT_CREATION,
              latestEditMsgKey: c.latestEditMsgKey,
              latestEditSenderTimestampMs: t,
              protocolMessageKey: n.parentMsg.id,
            },
            p,
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.generateEventEditSystemMessages = s;
  },
  98,
);
