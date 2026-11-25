__d(
  "WAWebKeyManagementSendKeyShareApi",
  [
    "WALogger",
    "WAWebApiPeerMessageStore",
    "WAWebCoexV2BotWid",
    "WAWebKeyManagementUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebOutgoingPeerMsgKey",
    "WAWebSendAppStateSyncMsgJob",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdKeyTypes",
    "WAWebUserUtils",
    "WAWebWidFactory",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("requireDeferred")("WAWebCoexV2SyncdKeyShareMessage").__setRef(
        "WAWebKeyManagementSendKeyShareApi",
      );
    async function c(t) {
      var n, a;
      e: {
        var i = t;
        if (
          ((typeof i == "object" && i !== null) || typeof i == "function") &&
          i.type === "key_rotation" &&
          "keys" in i
        ) {
          var l = i.keys;
          ((n = d(l)),
            (a = await o("WAWebKeyManagementUtils").getPeerDevices()));
          break e;
        }
        if (
          ((typeof i == "object" && i !== null) || typeof i == "function") &&
          i.type === "missing_key" &&
          "keys" in i &&
          "orphanKeys" in i &&
          "peerDeviceWid" in i
        ) {
          var c = i.keys,
            m = i.orphanKeys,
            p = i.peerDeviceWid;
          if (
            ((n = d(c, m)),
            p.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID))
          ) {
            var _ = await u.load(),
              f = _.sendCoexV2SyncdKeyShare;
            await f({ keyShare: n });
            return;
          }
          if (!o("WAWebUserUtils").isMeAccount(p)) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: send key share to a non-peer device ",
                    "",
                  ])),
                p.toString(),
              )
              .sendLogs("key-share-non-peer");
            return;
          }
          var g = o("WAWebUserUtils").getMeDeviceLidOrThrow();
          a = [
            o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
              g.user,
              g.server,
              p.getDeviceId(),
            ),
          ];
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            i,
        );
      }
      var h = a.map(function (e) {
          var t = o("WAWebOutgoingPeerMsgKey").buildOutgoingPeerMsgKey(
            r("WAWebMsgKey").newId_DEPRECATED(),
          );
          return {
            id: t,
            to: e,
            type: "protocol",
            subtype: "app_state_sync_key_share",
            kind: o("WAWebMsgType").MsgKind.PeerMessage,
            appStateSyncKeyShare: n,
          };
        }),
        y = a.map(function (e) {
          return e.getDeviceId();
        }),
        C = t.keys.map(function (e) {
          return o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e.keyId);
        });
      (o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: send key share key id ",
            " to peer deviceIds ",
            " due to ",
            "",
          ])),
        C,
        y,
        t.type,
      ),
        await o("WAWebApiPeerMessageStore").storePeerMessages(h),
        await Promise.all(
          h.map(function (e) {
            return o("WAWebSendAppStateSyncMsgJob").encryptAndSendKeyMsg({
              msg: e,
            });
          }),
        ));
    }
    function d(e, t) {
      var n = e.map(function (e) {
        return {
          keyId: { keyId: o("WAWebSyncdKeyTypes").fromSyncKeyId(e.keyId) },
          keyData: {
            keyData: o("WAWebSyncdKeyTypes").fromSyncKeyData(e.keyData),
            fingerprint: {
              rawId: e.fingerprint.rawId,
              currentIndex: e.fingerprint.currentIndex,
              deviceIndexes: e.fingerprint.deviceIndexes,
            },
            timestamp: e.timestamp,
          },
        };
      });
      if (t) {
        var r = t.map(function (e) {
          return {
            keyId: { keyId: o("WAWebSyncdKeyTypes").fromSyncKeyId(e) },
            keyData: void 0,
          };
        });
        n = n.concat(r);
      }
      return { keys: n };
    }
    l.sendAppStateSyncKeyShare = c;
  },
  98,
);
