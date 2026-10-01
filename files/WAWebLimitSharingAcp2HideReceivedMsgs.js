__d(
  "WAWebLimitSharingAcp2HideReceivedMsgs",
  [
    "WALogger",
    "WAPromiseTimeout",
    "WAWebBackendApi",
    "WAWebCommonMsgUtils",
    "WAWebHandleMsgTypes.flow",
    "WAWebLimitSharingGatingUtils",
    "WAWebLimitSharingModelUtils",
    "WAWebLimitSharingProtoUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgDataUtils",
    "WAWebParseLimitSharingHistorySyncProto",
    "WAWebProtobufsE2E.pb",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = new Set([
        (d = o("WAWebProtobufsE2E.pb")).Message$ProtocolMessage$Type
          .ACP2_SETTING,
        d.Message$ProtocolMessage$Type.LIMIT_SHARING,
        d.Message$ProtocolMessage$Type.REVOKE,
        d.Message$ProtocolMessage$Type.EPHEMERAL_SETTING,
        d.Message$ProtocolMessage$Type.EPHEMERAL_SYNC_RESPONSE,
      ]),
      p = new Set([
        o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT,
        o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP,
      ]),
      _ = 5e3;
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.messageType,
            r = t.msgs,
            a = t.proto;
          if (
            !p.has(n) ||
            r.length === 0 ||
            !o("WAWebLimitSharingGatingUtils").isAcp2Enabled() ||
            (a != null && E(a))
          )
            return r;
          var i = r[0].id.remote;
          if (!(yield C(i))) return r;
          var l = k(r);
          return (
            l != null && (yield I(i.toString(), l)),
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[acp2] hid ",
                    " message(s) received in a restricted chat",
                  ])),
                r.length,
              )
              .sendLogs("acp2-restricted-chat-msg-hidden", { sampling: 0.01 }),
            []
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatWid,
            n = e.messageType,
            r = e.t;
          return !p.has(n) ||
            !o("WAWebLimitSharingGatingUtils").isAcp2Enabled() ||
            !(yield C(t))
            ? !1
            : (yield I(t.toString(), r),
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[acp2] hid a scheduled message received in a restricted chat",
                    ])),
                )
                .sendLogs("acp2-restricted-chat-msg-hidden", {
                  sampling: 0.01,
                }),
              !0);
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.toString(),
            n = yield R(t),
            r = n
              ? o("WAWebLimitSharingProtoUtils").getPendingLimitSharingUpdate(t)
              : o("WAWebLimitSharingProtoUtils").getPendingAcp2Update(t);
          return (!n && r == null) ||
            !o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(e)
            ? !1
            : r == null
              ? !0
              : v(t, r);
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return (
            yield o("WAPromiseTimeout")
              .promiseTimeout(t, _)
              .catch(function () {
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[acp2] pending update wait timed out",
                    ])),
                );
              }),
            R(e)
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t,
              n = yield o("WAWebLimitSharingModelUtils").getChat(e);
            return (
              (n == null || (t = n.acp2Setting) == null
                ? void 0
                : t.enabled) === !0
            );
          } catch (e) {
            return (
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[acp2] restriction check failed, keeping the message: ",
                    "",
                  ])),
                e,
              ),
              !1
            );
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      var t,
        n,
        r,
        a,
        i,
        l =
          (t = (n = e.deviceSentMessage) == null ? void 0 : n.message) != null
            ? t
            : e;
      return [
        (r = l.protocolMessage) == null ? void 0 : r.type,
        (a = o(
          "WAWebParseLimitSharingHistorySyncProto",
        ).getAcp2EnvelopeFromProtobuf(l)) == null
          ? void 0
          : a.type,
        (i = o(
          "WAWebParseLimitSharingHistorySyncProto",
        ).getLimitSharingEnvelopeFromProtobuf(l)) == null
          ? void 0
          : i.type,
      ].some(function (e) {
        return e != null && m.has(e);
      });
    }
    function k(e) {
      var t = null;
      for (var n of e)
        o("WAWebMsgDataUtils").eventTypeFromMsgType(n) !==
          o("WAWebCommonMsgUtils").EventType.IGNORE &&
          n.t != null &&
          (t == null || n.t > t) &&
          (t = n.t);
      return t;
    }
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = yield o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["chat"],
              (function () {
                var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (n) {
                    var r = n[0],
                      o = yield r.get(e, !1);
                    return o == null || (o.t != null && o.t >= t)
                      ? !1
                      : (yield r.createOrMerge(e, { id: e, t: t }), !0);
                  },
                );
                return function (e) {
                  return r.apply(this, arguments);
                };
              })(),
            );
          r &&
            o("WAWebBackendApi").frontendFireAndForget("updateChatToLatest", {
              chatIdToLatestUpdates: [{ id: e, t: t }],
            });
        })),
        T.apply(this, arguments)
      );
    }
    ((l.hideMsgsReceivedInAcp2RestrictedChat = f),
      (l.hideScheduledMsgInAcp2RestrictedChat = h));
  },
  98,
);
