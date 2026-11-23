__d(
  "WAPublishMessage",
  [
    "FBLogger",
    "WAGenReportingMeta",
    "WAGlobals",
    "WAJids",
    "WALoadReceiptApi",
    "WALogger",
    "WAMsg",
    "WASaveReceiptApi",
    "WASendMsgInternal",
    "WASentBytesCache",
    "WATimeUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    async function u(e, t) {
      var n = e.identities,
        r = e.messagePayload,
        a = {
          author: r.protocolMsgId.author,
          chat: r.protocolMsgId.chat,
          externalId: r.protocolMsgId.externalId,
        },
        i = await o("WALoadReceiptApi").loadReceipt(a);
      if (i.success) return i.value;
      var l = new Map();
      for (var s of n) {
        var u = s[0],
          c = s[1];
        for (var d of c) {
          var m = d[0],
            p = d[1];
          m !== o("WAGlobals").getMyDeviceJid() && l.set(m, { pubKey: p });
        }
      }
      var _ = new Set(),
        f = { permittedIdentitiesPerDevice: l, recipientDevices: _, id: a };
      return (
        t.addPoint("save_receipts_start"),
        await o("WASaveReceiptApi").saveReceipt(f),
        t.addPoint("save_receipts_end"),
        f
      );
    }
    async function c(t, n) {
      var a = t.identities,
        i = t.messagePayload,
        l = t.sendIdentity,
        s = l === void 0 ? !1 : l;
      n.addPoint("prepare_receipt_start");
      var c = await u({ messagePayload: i, identities: a }, n);
      (n.addPoint("prepare_receipt_end"),
        n.addPoint("calculate_recipients_start"));
      var p = i.backupDirective,
        _ = i.frankingKey,
        f = i.frankingVersion,
        g = i.messageBytes,
        h = i.messageType,
        y = i.protocolMsgId,
        C = d(c.permittedIdentitiesPerDevice),
        b =
          h.type === "text" && h.invitedParticipantUserJid != null
            ? C.filter(function (e) {
                return (
                  e.user === h.invitedParticipantUserJid ||
                  e.user === o("WAGlobals").getMyUserJid()
                );
              })
            : C;
      n.addPoint("calculate_recipients_end", {
        int: { recipientsCount: b.length },
      });
      var v =
          h.type === "text" && h.invitedParticipantUserJid != null
            ? h.invitedParticipantUserJid
            : y.chat,
        S = y.chat === o("WAGlobals").getMyUserJid();
      if (b.length === 0 && !S)
        throw r("FBLogger")("wmi").mustfixThrow(
          "Trying to send a message with no recipients",
        );
      if (b.length === 0 && S)
        return {
          serverResponse: {
            type: "success",
            ts: o("WATimeUtils").unixTime(),
            phash: { type: "ok" },
            count: null,
            reportingMeta: null,
          },
          encryption: {
            type: "user",
            messageTo: o("WAGlobals").getMyUserJid(),
            participants: [],
            phash: "",
          },
        };
      var R = s
          ? await o("WAGlobals")
              .getWaOneQueue()
              .enqueue(
                function (e) {
                  var t = e.cryptoManager;
                  return m(t);
                },
                {
                  operationType: "get_my_device_identity",
                  flush: !1,
                  afterInit: !0,
                },
              )
          : null,
        L = await (h.isRevoked === !0
          ? Promise.resolve(null)
          : o("WAGenReportingMeta").genReportingMeta(g.bytes, _, f)),
        E = await o("WASendMsgInternal").sendMessageV2(
          {
            type: "chat",
            messageBytes: g,
            chat: v,
            deviceIdentity: R,
            messageType: h,
            protocolMsgId: y,
            externalId: y.externalId,
            recipients: b,
            reportingMeta: L,
            backupDirective: p,
          },
          n,
        ),
        k = E.serverResponse;
      return (
        k.type === "success" &&
          (await o("WASentBytesCache")
            .sentBytesCache()
            .saveSentBytes({
              ts: k.ts,
              frankingKey: _,
              frankingVersion: f,
              messageBytes: g,
              backupDirective: p,
              messageType: h,
              protocolMsgId: y,
              waMsgId: o("WAMsg").craftWAMsgIdString({
                author: y.author,
                chat: y.chat,
                externalId: y.externalId,
              }),
            })
            .catch(function (t) {
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "sendWrittenMsg failed to save sent bytes to cache: ",
                    "",
                  ])),
                t,
              );
            })),
        E
      );
    }
    function d(e) {
      var t = new Map();
      return (
        e.forEach(function (e, n) {
          var r = e.pubKey,
            a = o("WAJids").extractUserJid(n),
            i = { identity: r, jid: n },
            l = t.get(a) || [];
          (l.push(i), t.set(a, l));
        }),
        Array.from(t, function (e) {
          var t = e[0],
            n = e[1];
          return { devicesInfo: n, user: t };
        })
      );
    }
    async function m(e) {
      try {
        var t = await e.storage.loadIdentities(o("WAGlobals").getMyUserJid()),
          n = t.get(o("WAGlobals").getMyDeviceJid());
        if (n != null) return n;
        throw r("err")("missing-identity");
      } catch (e) {
        o("WALogger").ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "Error loading current device identity ",
              "",
            ])),
          e,
        );
      }
    }
    l.publishMessage = c;
  },
  98,
);
