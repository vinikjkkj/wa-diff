__d(
  "WAPublishAppDataProtocol",
  [
    "FBLogger",
    "WABridge",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAEncUserMsg",
    "WAGetCurrentUserDeviceInfoApi",
    "WAGlobals",
    "WAOdsEnums",
    "WAParseFranking",
    "WASmaxAppdataPublishPeerRPC",
    "WASmaxMessagePublishIndividualRPC",
    "WATagsLogger",
    "WATimeUtils",
    "WAWap",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = o("WATagsLogger").TAGS(["sendAppDataFanout"]);
    function p(e) {
      var t = e.externalId,
        n = e.groupJid,
        o = e.identities,
        a = e.messagePayload,
        i = e.recipientUserJid,
        l = a.messageBytes;
      return r("gkx")("23056")
        ? f({
            externalId: t,
            groupJid: n,
            identities: o,
            messageBytes: l,
            recipientUserJid: i,
          })
        : _({ externalId: t, identities: o, messageBytes: l });
    }
    async function _(t) {
      var n = t.externalId,
        a = t.identities,
        i = t.messageBytes,
        l = a.get(o("WAGlobals").getMyUserJid());
      if (l == null)
        throw r("FBLogger")("wmi").mustfixThrow("Missing my user identities");
      var u = Array.from(l.entries()).map(function (e) {
          var t = e[0],
            n = e[1];
          return { identity: n, jid: t };
        }),
        c = [{ devicesInfo: u, user: o("WAGlobals").getMyUserJid() }],
        d = await o("WAGlobals")
          .getWaOneQueue()
          .enqueue(
            function (e) {
              var t = e.cryptoManager;
              return o("WAEncUserMsg").encryptUserMsg(
                c,
                { messageBytes: i, type: "appdata" },
                { cryptoManager: t },
              );
            },
            { operationType: "encrypt", flush: !0 },
          ),
        p = d.phash,
        _ = !1,
        f = [];
      d.participants != null &&
        d.participants.forEach(function (e) {
          (e.type === "pkmsg" && (_ = !0),
            f.push({
              toJid: e.to,
              encTypeIndividualMixinArgs: {
                encType: e.type,
                encElementValue: e.ciphertext,
              },
              encVersionFutureproofMixinArgs: { encV: parseInt(e.v, 10) },
            }));
        });
      var g = { appdataTo: o("WAGlobals").getMyUserJid(), toArgs: f },
        h = { peerPeerFanout: g },
        y = void 0;
      if (_) {
        var C = await o(
            "WAGetCurrentUserDeviceInfoApi",
          ).getCurrentUserDeviceInfo(),
          b = C == null ? void 0 : C.identityKey;
        if (b == null)
          throw (
            m.ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to fetch current device public identity key",
                ])),
            ),
            r("FBLogger")("wmi").mustfixThrow("No public identity key")
          );
        y = { deviceIdentityElementValue: b };
      }
      var v = { appdataDeviceListCheck: "true" },
        S = {
          appdataId: n,
          peerMsgTypesArgs: h,
          deviceIdentityMixinArgs: y,
          withDeviceListCheckMixinArgs: v,
        },
        R = await o("WASmaxAppdataPublishPeerRPC").sendPeerRPC(S);
      switch (R.name) {
        case "PeerResponseSuccess": {
          var L,
            E = (L = R.value.deviceListStaleMixin) == null ? void 0 : L.phash;
          return E != null && p != null && E !== p
            ? (m.LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Got phash mismatch on appdata, local[",
                    "] server[",
                    "]",
                  ])),
                p,
                E,
              ),
              o("WABridge")
                .getBridge()
                .fireAndForget("event", "odsBumpEntityKey", {
                  entity: o("WAOdsEnums").Entity.PHASH_MISMATCH,
                  key: "appdata",
                }),
              {
                type: "success",
                ts: o("WATimeUtils").castToUnixTime(R.value.t),
                phash: { type: "mismatch", local: p, server: E },
                count: null,
                reportingMeta: null,
              })
            : {
                type: "success",
                ts: o("WATimeUtils").castToUnixTime(R.value.t),
                phash: { type: "ok" },
                count: null,
                reportingMeta: null,
              };
        }
        default:
          throw (
            R.name,
            r("FBLogger")("wmi").mustfixThrow(
              "Failed to send appdata %s",
              R.value.error,
            )
          );
      }
    }
    async function f(e) {
      var t = e.externalId,
        n = e.groupJid,
        a = e.identities,
        i = e.messageBytes,
        l = e.recipientUserJid;
      if (n != null)
        return g({
          externalId: t,
          groupJid: n,
          identities: a,
          messageBytes: i,
        });
      var s = a.get(o("WAGlobals").getMyUserJid());
      if (s == null)
        throw r("FBLogger")("wmi").mustfixThrow("Missing my user identities");
      var d = Array.from(s.entries()).map(function (e) {
          var t = e[0],
            n = e[1];
          return { identity: n, jid: t };
        }),
        p = [{ devicesInfo: d, user: o("WAGlobals").getMyUserJid() }],
        _ = await o("WAGlobals")
          .getWaOneQueue()
          .enqueue(
            function (e) {
              var t = e.cryptoManager;
              return o("WAEncUserMsg").encryptUserMsg(
                p,
                {
                  messageBytes: i,
                  type: "message",
                  chat: o("WAGlobals").getMyUserJid(),
                  messageType: { type: "text", isRevoked: !1 },
                  backupDirective: null,
                },
                { cryptoManager: t },
              );
            },
            { operationType: "encrypt", flush: !0 },
          ),
        f = !1,
        h = [];
      if (
        (_.participants != null &&
          _.participants.forEach(function (e) {
            (e.type === "pkmsg" && (f = !0),
              h.push({
                toJid: e.to,
                encTypeIndividualMixinArgs: {
                  encType: e.type,
                  encElementValue: e.ciphertext,
                },
                encVersionArgs:
                  e.v === "2" ? { isEncVersion2: !0 } : { isEncVersion3: !0 },
              }));
          }),
        h.length === 0)
      )
        return {
          type: "success",
          ts: o("WATimeUtils").unixTime(),
          phash: { type: "ok" },
          count: null,
          reportingMeta: null,
        };
      var y = void 0;
      if (f) {
        var C = await o(
            "WAGetCurrentUserDeviceInfoApi",
          ).getCurrentUserDeviceInfo(),
          b = C == null ? void 0 : C.identityKey;
        if (b == null)
          throw (
            m.ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to fetch current device public identity key",
                ])),
            ),
            r("FBLogger")("wmi").mustfixThrow("No public identity key")
          );
        y = { deviceIdentityElementValue: b };
      }
      var v = l != null ? l : o("WAGlobals").getMyUserJid(),
        S = {
          messageId: t,
          deviceIdentityMixinArgs: y,
          hasNoExtraFanout: l != null ? !0 : null,
          coexV2IndividualMixinsArgs: {
            individualIndividualFanout: {
              messageTo: v,
              toArgs: h,
              contentFanoutMixinsArgs: { isContentTypeText: !0 },
            },
          },
        },
        R = await o("WASmaxMessagePublishIndividualRPC").sendIndividualRPC(S);
      switch (R.name) {
        case "IndividualResponseSuccess": {
          var L,
            E = (L = R.value.deviceListStaleMixin) == null ? void 0 : L.phash;
          return E != null
            ? (m.LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Got phash mismatch on appdata message, server[",
                    "]",
                  ])),
                E,
              ),
              o("WABridge")
                .getBridge()
                .fireAndForget("event", "odsBumpEntityKey", {
                  entity: o("WAOdsEnums").Entity.PHASH_MISMATCH,
                  key: "appdata",
                }),
              {
                type: "success",
                ts: o("WATimeUtils").castToUnixTime(R.value.t),
                phash: { type: "mismatch", local: null, server: E },
                count: null,
                reportingMeta: null,
              })
            : {
                type: "success",
                ts: o("WATimeUtils").castToUnixTime(R.value.t),
                phash: { type: "ok" },
                count: null,
                reportingMeta: null,
              };
        }
        default: {
          var k;
          R.name;
          var I =
            (k = R.value.applicationNegativeAckMixin) == null
              ? void 0
              : k.applicationError;
          throw r("FBLogger")("wmi").mustfixThrow(
            "Failed to send appdata as message error=%s appError=%s",
            R.value.error,
            String(I != null ? I : "none"),
          );
        }
      }
    }
    async function g(e) {
      var t = e.externalId,
        n = e.groupJid,
        a = e.identities,
        i = e.messageBytes,
        l = a.get(o("WAGlobals").getMyUserJid());
      if (l == null)
        throw r("FBLogger")("wmi").mustfixThrow("Missing my user identities");
      var s = Array.from(l.entries()).map(function (e) {
          var t = e[0],
            n = e[1];
          return { identity: n, jid: t };
        }),
        u = [{ devicesInfo: s, user: o("WAGlobals").getMyUserJid() }],
        c = await o("WAGlobals")
          .getWaOneQueue()
          .enqueue(
            function (e) {
              var t = e.cryptoManager;
              return o("WAEncUserMsg").encryptUserMsg(
                u,
                {
                  messageBytes: i,
                  type: "message",
                  chat: n,
                  messageType: { type: "text", isRevoked: !1 },
                  backupDirective: null,
                },
                { cryptoManager: t },
              );
            },
            { operationType: "encrypt", flush: !0 },
          ),
        p = c.participants;
      if (p == null || p.length === 0)
        return {
          type: "success",
          ts: o("WATimeUtils").unixTime(),
          phash: { type: "ok" },
          count: null,
          reportingMeta: null,
        };
      var _ = o("WAWap").wap(
          "participants",
          null,
          p.map(function (e) {
            var t;
            return (t = o("WAWap")).wap(
              "to",
              { jid: t.DEVICE_JID(e.to) },
              t.wap(
                "enc",
                { type: t.CUSTOM_STRING(e.type), v: t.CUSTOM_STRING(e.v) },
                e.ciphertext,
              ),
            );
          }),
        ),
        f = p.some(function (e) {
          return e.type === "pkmsg";
        }),
        g = null;
      if (f) {
        var C = await o(
            "WAGetCurrentUserDeviceInfoApi",
          ).getCurrentUserDeviceInfo(),
          b = C == null ? void 0 : C.identityKey;
        if (b == null)
          throw (
            m.ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to fetch current device public identity key",
                ])),
            ),
            r("FBLogger")("wmi").mustfixThrow("No public identity key")
          );
        g = o("WAWap").wap("device-identity", null, b);
      }
      var v = o("WAWap").wap(
          "message",
          {
            device_fanout: "false",
            id: o("WAWap").CUSTOM_STRING(t),
            phash: o("WAWap").CUSTOM_STRING(c.phash),
            to: o("WAWap").JID(n),
            type: "text",
          },
          o("WAWap").wap("meta", { appdata: "default" }),
          o("WAWap").wap("enc", {
            "decrypt-fail": "hide",
            type: "skmsg",
            v: "2",
          }),
          _,
          g,
        ),
        S = await o("WADeprecatedSendIq").deprecatedSendStanzaAndReturnAck(v, {
          id: t,
          class: "message",
          from: n,
          participant: null,
        }),
        R = h.parse(S);
      return R.success ? y(R.success) : { type: "parsing_error" };
    }
    var h = new (r("WADeprecatedWapParser"))(
      "publishAppDataAsGroupMessageAck",
      function (e) {
        return (
          e.assertTag("ack"),
          {
            count: e.maybeAttrInt("count"),
            errorCode: e.maybeAttrInt("error"),
            phash: e.maybeAttrString("phash"),
            applicationError: e.maybeAttrInt("application_error"),
            ts: e.attrTime("t"),
            reportingMeta: o("WAParseFranking").parseFrankingNode(
              e.maybeChild("franking"),
            ),
            backoff: e.maybeAttrInt("backoff"),
          }
        );
      },
    );
    function y(e) {
      var t = e.applicationError,
        n = e.backoff,
        r = e.count,
        o = e.errorCode,
        a = e.phash,
        i = e.reportingMeta,
        l = e.ts;
      return o != null
        ? { type: "error", errorCode: o, applicationError: t, backoff: n }
        : {
            type: "success",
            ts: l,
            phash:
              a != null
                ? { type: "mismatch", local: null, server: a }
                : { type: "ok" },
            count: r,
            reportingMeta: i,
          };
    }
    ((l.publishAppData = p), (l.publishAppDataAsMessage = f));
  },
  98,
);
