__d(
  "WASendAppDataFanoutProtocol",
  [
    "WAAsMessageApplication",
    "WABridge",
    "WAConvertAppData",
    "WAEncUserMsg",
    "WAErrorMessage",
    "WAGetCurrentUserDeviceInfoApi",
    "WAGlobals",
    "WAMsgApplication.pb",
    "WAOdsEnums",
    "WAPublishAppDataProtocol",
    "WAResultOrError",
    "WASmaxAppdataPublishPeerRPC",
    "WATagsLogger",
    "WATimeUtils",
    "encodeProtobuf",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = o("WATagsLogger").TAGS(["sendAppDataFanout"]),
      f = 24;
    function g(t) {
      var n = t.checkPhash,
        r = n === void 0 ? "checkPhash" : n,
        a = t.contents,
        i = t.externalId,
        l = t.permittedIdentitiesPerDevice;
      return h(a, i, l, r).catch(function (t) {
        var n = o("WAErrorMessage").maybeGetMessageFromError(t);
        return (
          _.ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to send appdata to devices with error: ",
                "",
              ])),
            n,
          ),
          o("WAResultOrError").makeError("runtime-error")
        );
      });
    }
    async function h(e, t, n, a) {
      (a === void 0 && (a = "checkPhash"),
        _.LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "Sending appdata, externalId: ",
              "",
            ])),
          t,
        ));
      var i = o("WAConvertAppData").convertAppData(e),
        l = {
          bytes: o("WAAsMessageApplication").castToMessageApplicationBytes(
            o("encodeProtobuf")
              .encodeProtobuf(
                o("WAMsgApplication.pb").MessageApplicationSpec,
                i,
              )
              .readByteArrayView(),
          ),
          version: "v3",
        };
      if (r("gkx")("23056")) {
        var g = new Map([
            [
              o("WAGlobals").getMyUserJid(),
              new Map(
                Array.from(n.entries()).map(function (e) {
                  var t = e[0],
                    n = e[1];
                  return [t, n.pubKey];
                }),
              ),
            ],
          ]),
          h = await o("WAPublishAppDataProtocol").publishAppDataAsMessage({
            externalId: t,
            identities: g,
            messageBytes: l,
          });
        return h.type === "success"
          ? o("WAResultOrError").makeResult({
              phashMismatch: h.phash.type === "mismatch",
              serverTs: h.ts,
            })
          : o("WAResultOrError").makeError("ack-failure");
      }
      var y = [],
        C = Array.from(n.entries()).map(function (e) {
          var t = e[0],
            n = e[1];
          return { identity: n.pubKey, jid: t };
        }),
        b = f;
      C.length > b &&
        (_.WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "Attempting to send an appData stanza to ",
              " devices",
            ])),
          C.length,
        ),
        _.ERROR(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "Attempting to send an appData stanza to more than the allowed ",
              " devices",
            ])),
          b,
        ),
        (C = C.slice(0, b)));
      var v = [{ devicesInfo: C, user: o("WAGlobals").getMyUserJid() }],
        S = await o("WAGlobals")
          .getWaOneQueue()
          .enqueue(
            function (e) {
              var t = e.cryptoManager;
              return o("WAEncUserMsg").encryptUserMsg(
                v,
                { messageBytes: l, type: "appdata" },
                { cryptoManager: t },
              );
            },
            { operationType: "encrypt", flush: !0 },
          ),
        R = S.phash,
        L = !1;
      S.participants != null &&
        S.participants.forEach(function (e) {
          (e.type === "pkmsg" && (L = !0),
            y.push({
              toJid: e.to,
              encTypeIndividualMixinArgs: {
                encType: e.type,
                encElementValue: e.ciphertext,
              },
              encVersionFutureproofMixinArgs: { encV: parseInt(e.v, 10) },
            }));
        });
      var E = { appdataTo: o("WAGlobals").getMyUserJid(), toArgs: y },
        k = { peerPeerFanout: E },
        I = void 0;
      if (L) {
        var T = await o(
            "WAGetCurrentUserDeviceInfoApi",
          ).getCurrentUserDeviceInfo(),
          D = T == null ? void 0 : T.identityKey;
        if (D == null)
          return (
            _.ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to fetch current device public identity key",
                ])),
            ),
            o("WAResultOrError").makeError("no-public-identity")
          );
        I = { deviceIdentityElementValue: D };
      }
      var x = { appdataDeviceListCheck: a === "checkPhash" ? "true" : "false" },
        $ = {
          appdataId: t,
          peerMsgTypesArgs: k,
          deviceIdentityMixinArgs: I,
          withDeviceListCheckMixinArgs: x,
        },
        P = await o("WASmaxAppdataPublishPeerRPC").sendPeerRPC($);
      switch (P.name) {
        case "PeerResponseSuccess": {
          var N,
            M = (N = P.value.deviceListStaleMixin) == null ? void 0 : N.phash;
          return M != null && R != null && M !== R
            ? (_.LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "Got phash mismatch on appdata, local[",
                    "] server[",
                    "]",
                  ])),
                R,
                M,
              ),
              o("WABridge")
                .getBridge()
                .fireAndForget("event", "odsBumpEntityKey", {
                  entity: o("WAOdsEnums").Entity.PHASH_MISMATCH,
                  key: "appdata",
                }),
              o("WAResultOrError").makeResult({
                phashMismatch: !0,
                serverTs: o("WATimeUtils").castToUnixTime(P.value.t),
              }))
            : o("WAResultOrError").makeResult({
                phashMismatch: !1,
                serverTs: o("WATimeUtils").castToUnixTime(P.value.t),
              });
        }
        default:
          return (
            P.name,
            _.ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to send appdata. Error: ",
                  "",
                ])),
              P.value.error,
            ),
            o("WAResultOrError").makeError("ack-failure")
          );
      }
    }
    ((l.MAX_APPDATA_RECIPIENTS = f), (l.sendAppDataToDevicesProtocol = g));
  },
  98,
);
