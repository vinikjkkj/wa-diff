__d(
  "WAWebOfflineSimulatorMsg",
  [
    "WARandomHex",
    "WATimeUtils",
    "WAWap",
    "WAWebAck",
    "WAWebBackendJobsCommon",
    "WAWebCommsWapMd",
    "WAWebE2EProtoUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgModel",
    "WAWebOfflineSimulatorMockSignal",
    "WAWebOutgoingMessage",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgMetaNode",
    "WAWebUserUtils",
    "WAWebWidFactory",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return Math.floor(Math.random() * (t - e + 1) + e);
    }
    function s(e, t) {
      var n,
        a = e.randomSender == null ? p() : e.from;
      (e.to != null ? (n = e.to) : (n = a),
        o("WAWebUserUtils").isMeAccount(n) && (n = p()));
      var i = n.isGroup() ? a : void 0,
        l = new (r("WAWebMsgKey"))({
          fromMe: o("WAWebUserUtils").isMeAccount(n),
          remote: n,
          participant: i,
          id: r("WAWebMsgKey").newId_DEPRECATED(),
        }),
        s = babelHelpers.extends(
          { id: l },
          o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
            l,
            o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message,
          ),
          {
            body: t,
            type: "chat",
            subtype: null,
            t: o("WATimeUtils").unixTime(),
            local: !0,
            ack: o("WAWebAck").ACK.CLOCK,
          },
        ),
        u = new (o("WAWebMsgModel").Msg)(s);
      return u;
    }
    async function u(e, t, n) {
      var a,
        i = (a = e.reactionFrom) != null ? a : e.from,
        l,
        s;
      n.remote.isGroup()
        ? ((l = n.remote), (s = i != null ? i : n.participant))
        : i != null
          ? (l = i)
          : (l = n.remote);
      var u = new (r("WAWebMsgKey"))({
          fromMe: o("WAWebUserUtils").isMeAccount(s != null ? s : l),
          remote: l,
          participant: s != null ? s : void 0,
          id: await r("WAWebMsgKey").newId(),
        }),
        c = babelHelpers.extends(
          { id: u },
          o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
            u,
            o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
          ),
          {
            type: "reaction",
            t: o("WATimeUtils").unixTime(),
            local: !0,
            ack: o("WAWebAck").ACK.CLOCK,
            reactionText: t,
            reactionParentKey: n,
            reactionTimestamp: o("WATimeUtils").unixTimeMs(),
          },
        ),
        d = new (o("WAWebMsgModel").Msg)(c);
      return d;
    }
    var c = (function () {
        var e = new Map(),
          t = o("WARandomHex").randomHex(4);
        return function (n) {
          var r,
            o = (r = e.get(n.toString())) != null ? r : 0;
          return (
            e.set(n.toString(), o + 1),
            n.toString() + ": " + t + ": " + String(o)
          );
        };
      })(),
      d = (function () {
        var t = e(1e5, 999999);
        return function () {
          return (t++, o("WAWebWidFactory").createUserWidOrThrow(t + "@lid"));
        };
      })();
    async function m(e, t) {
      var n,
        a,
        i = e.randomNotify,
        l = e.randomLid,
        s = o("WAWebOutgoingMessage").createOutgoingMsgModelProtobuf(
          o("WAWebOutgoingMessage").OutgoingMessageOriginType.Debug,
          t,
        ),
        u = (n = o("WAWebBackendJobsCommon")).mediaTypeFromProtobuf(s),
        m = t.id.remote,
        p = await o("WAWebOfflineSimulatorMockSignal").encryptSignalProto(
          m,
          o("WAWebSendMsgCommonApi").encodeAndPad(s),
        ),
        _ = p.ciphertext,
        f = p.type,
        g = (a = o("WAWap")).wap(
          "enc",
          {
            v: a.CUSTOM_STRING(n.CIPHERTEXT_VERSION.toString()),
            type: a.CUSTOM_STRING(f),
            mediatype: n.encodeMaybeMediaType(u),
            "decrypt-fail": n.encodeMaybeDecryptFail(
              o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(s),
            ),
          },
          _,
        ),
        h = o("WAWebSendMsgMetaNode").genMetaNode({
          chatId: m,
          groupData: null,
          msgProtobuf: s,
          msgRecord: { type: "message", data: t },
        }),
        y = t.id.participant;
      return a.wap(
        "message",
        {
          t: a.CUSTOM_STRING(String(t.t)),
          id: a.CUSTOM_STRING(t.id.id),
          from: o("WAWebCommsWapMd").CHAT_JID(m),
          participant:
            y != null ? o("WAWebCommsWapMd").USER_JID(y) : o("WAWap").DROP_ATTR,
          type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(s),
          edit: o("WAWebSendMsgCommonApi").editAttribute(s, t.subtype),
          notify: i
            ? o("WAWap").CUSTOM_STRING(
                c(r("nullthrows")(o("WAWebMsgGetters").getSender(t))),
              )
            : o("WAWap").DROP_ATTR,
          sender_lid: l
            ? o("WAWebCommsWapMd").USER_JID(d())
            : o("WAWap").DROP_ATTR,
          offline: o("WAWap").CUSTOM_STRING(String(1)),
        },
        g,
        h,
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      return o("WAWebWidFactory").createUserWidOrThrow(
        "1650" + e(100, 999) + e(1e3, 9999) + "@s.whatsapp.net",
      );
    }
    function _(e, t) {
      var n = "mock message-" + t,
        r = s(e, n);
      return m(e, r);
    }
    async function f(e, t, n) {
      var r = "mock message-" + t,
        o = s(e, r),
        a = await m(e, o),
        i = await u(e, n, o.id),
        l = await m(e, i);
      return [a, l];
    }
    ((l.createChatTextMsgStanza = _),
      (l.createChatTextMsgStanzaWithReactions = f));
  },
  98,
);
