__d(
  "WASendMsgUtilV2",
  [
    "WADevicesState",
    "WAGenReportingMeta",
    "WAGlobals",
    "WAJids",
    "WALoadReceiptApi",
    "WALogger",
    "WAMsg",
    "WAResultOrError",
    "WASaveReceiptApi",
    "WASendMsgInternal",
    "WASentBytesCache",
    "WATimeUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p;
    function _(e) {
      return Promise.resolve();
    }
    function f(e, t) {
      return o("WADevicesState")
        .getDevicesState()
        .waitForUserDevices(
          Array.from(new Set([e, o("WAGlobals").getMyUserJid()])),
          "GetDevicesBeforeSend: " + t,
        );
    }
    function g(t) {
      var n = t.chatJid,
        r = t.reason;
      return o("WAJids")
        .switchOnChatJidType(n, {
          group: function (t) {
            return _(t);
          },
          interopUser: function (t) {
            return f(t, r);
          },
          lidUser: function (t) {
            return f(t, r);
          },
          msgrUser: function (t) {
            return f(t, r);
          },
          phoneUser: function (t) {
            return f(t, r);
          },
        })
        .catch(function (t) {
          return (
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Error during get devices before sending: ",
                  "",
                ])),
              t,
            ),
            Promise.resolve()
          );
        });
    }
    async function h(e, t) {
      var n = e.loadThreadParticipants,
        r = e.messagePayload,
        a = {
          author: r.protocolMsgId.author,
          chat: r.protocolMsgId.chat,
          externalId: r.protocolMsgId.externalId,
        },
        i = await o("WALoadReceiptApi").loadReceipt(a);
      if (i.success) return i;
      (t.addPoint("get_devices_before_send_start"),
        await g({ chatJid: r.protocolMsgId.chat, reason: "prepareReceipt" }),
        t.addPoint("get_devices_before_send_end"));
      var l = await n(r.protocolMsgId.chat);
      t.addPoint("get_identities_start");
      var u = await o("WAGlobals")
          .getWaOneQueue()
          .enqueue(
            function (e) {
              var t = e.cryptoManager;
              return t.storage.bulkLoadIdentities(l);
            },
            {
              flush: !1,
              afterInit: !0,
              operationType: "prepare_receipt_load_identities",
            },
          ),
        c = [];
      if (u.size === 0) c = [].concat(l);
      else
        for (var d of u) {
          var m = d[0],
            p = d[1];
          p.size === 0 && c.push(m);
        }
      c.length > 0 &&
        (await o("WADevicesState")
          .getDevicesState()
          .waitForUserDevices(c, "GetDevicesBeforeSend: prepareReceipt", !0),
        (u = await o("WAGlobals")
          .getWaOneQueue()
          .enqueue(
            function (e) {
              var t = e.cryptoManager;
              return t.storage.bulkLoadIdentities(l);
            },
            {
              afterInit: !0,
              flush: !1,
              operationType: "prepare_receipt_load_identities",
            },
          )));
      var _ = new Map();
      for (var f of u) {
        var h = f[0],
          y = f[1];
        for (var C of y) {
          var b = C[0],
            v = C[1];
          b !== o("WAGlobals").getMyDeviceJid() && _.set(b, { pubKey: v });
        }
      }
      t.addPoint("get_identities_end");
      var S = new Set(),
        R = { permittedIdentitiesPerDevice: _, recipientDevices: S, id: a };
      return (
        t.addPoint("save_receipts_start"),
        await o("WASaveReceiptApi")
          .saveReceipt(R)
          .catch(function (e) {
            return (
              t.addPoint("save_receipts_fail"),
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to save receipt for message with error ",
                    "",
                  ])),
                e,
              ),
              o("WAResultOrError").makeError("missing-receipt")
            );
          }),
        t.addPoint("save_receipts_end"),
        o("WAResultOrError").makeResult(R)
      );
    }
    async function y(e, t) {
      var n = e.isInstamadillo,
        r = n === void 0 ? !1 : n,
        a = e.loadThreadParticipants,
        i = e.messagePayload,
        l = e.sendIdentity,
        s = l === void 0 ? !1 : l;
      t.addPoint("prepare_receipt_start");
      var p = await h({ messagePayload: i, loadThreadParticipants: a }, t);
      if (p.success === !1)
        return (
          t.addPoint("prepare_receipt_fail"),
          o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Trying to send a message that does not have a receipt in db",
              ])),
          ),
          o("WAResultOrError").makeError({ type: "missing-receipt" })
        );
      t.addPoint("prepare_receipt_end");
      var _ = p.value,
        f = i.backupDirective,
        g = i.frankingKey,
        y = i.frankingVersion,
        v = i.messageBytes,
        S = i.messageType,
        R = i.protocolMsgId,
        L = C(_.permittedIdentitiesPerDevice),
        E =
          S.type === "text" && S.invitedParticipantUserJid != null
            ? L.filter(function (e) {
                return (
                  e.user === S.invitedParticipantUserJid ||
                  e.user === o("WAGlobals").getMyUserJid()
                );
              })
            : L;
      t.addPoint("recipients-calculated", {
        int: { recipientsCount: E.length },
        string: { msgType: S.type },
      });
      var k =
          S.type === "text" && S.invitedParticipantUserJid != null
            ? S.invitedParticipantUserJid
            : R.chat,
        I = R.chat === o("WAGlobals").getMyUserJid();
      if (E.length === 0 && !I)
        return (
          o("WALogger").ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "Trying to send a message with no recipients",
              ])),
          ),
          o("WAResultOrError").makeError({
            type: "no-recipients",
            isRetriable: !1,
          })
        );
      if (E.length === 0 && I)
        return (
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "Trying to send a message with no recipients, but it is a self thread",
              ])),
          ),
          o("WAResultOrError").makeResult({
            baseKey: null,
            reportingMeta: null,
            serverTs: o("WATimeUtils").unixTime(),
          })
        );
      var T = s
          ? await o("WAGlobals")
              .getWaOneQueue()
              .enqueue(
                function (e) {
                  var t = e.cryptoManager;
                  return b(t);
                },
                {
                  operationType: "get_my_device_identity",
                  flush: !1,
                  afterInit: !0,
                },
              )
          : null,
        D = await (S.isRevoked === !0
          ? Promise.resolve(null)
          : o("WAGenReportingMeta").genReportingMeta(v.bytes, g, y));
      return o("WASendMsgInternal")
        .sendMessage(
          {
            type: "chat",
            messageBytes: v,
            chat: k,
            deviceIdentity: T,
            messageType: S,
            protocolMsgId: R,
            externalId: R.externalId,
            recipients: E,
            reportingMeta: D,
            backupDirective: f,
          },
          t,
          r,
        )
        .then(function (e) {
          return e.success
            ? o("WASentBytesCache")
                .sentBytesCache()
                .saveSentBytes({
                  ts: e.value.serverTs,
                  frankingKey: g,
                  frankingVersion: y,
                  messageBytes: v,
                  backupDirective: f,
                  messageType: S,
                  protocolMsgId: R,
                  waMsgId: o("WAMsg").craftWAMsgIdString({
                    author: R.author,
                    chat: R.chat,
                    externalId: R.externalId,
                  }),
                })
                .catch(function (e) {
                  o("WALogger").ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "sendWrittenMsg failed to save sent bytes to cache: ",
                        "",
                      ])),
                    e,
                  );
                })
                .then(function () {
                  return e;
                })
            : e;
        });
    }
    function C(e) {
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
    async function b(e) {
      try {
        var t = await e.storage.loadIdentities(o("WAGlobals").getMyUserJid()),
          n = t.get(o("WAGlobals").getMyDeviceJid());
        if (n != null) return n;
        throw r("err")("missing-identity");
      } catch (e) {
        o("WALogger").ERROR(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "Error loading current device identity ",
              "",
            ])),
          e,
        );
      }
    }
    ((l.getDevicesBeforeSend = g), (l.sendChatMessage = y));
  },
  98,
);
