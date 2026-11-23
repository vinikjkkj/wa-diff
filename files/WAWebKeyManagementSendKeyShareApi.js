__d(
  "WAWebKeyManagementSendKeyShareApi",
  [
    "WALogger",
    "WAWebApiPeerMessageStore",
    "WAWebKeyManagementUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebOutgoingPeerMsgKey",
    "WAWebSendAppStateSyncMsgJob",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdKeyTypes",
    "WAWebUserUtils",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      var n, a;
      e: {
        var i = t;
        if (
          ((typeof i == "object" && i !== null) || typeof i == "function") &&
          i.type === "key_rotation" &&
          "keys" in i
        ) {
          var l = i.keys;
          ((n = c(l)),
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
          var u = i.keys,
            d = i.orphanKeys,
            m = i.peerDeviceWid;
          if (((n = c(u, d)), !o("WAWebUserUtils").isMeAccount(m))) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: send key share to a non-peer device ",
                    "",
                  ])),
                m.toString(),
              )
              .sendLogs("key-share-non-peer");
            return;
          }
          var p = o("WAWebUserUtils").getMeDeviceLidOrThrow();
          a = [
            o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
              p.user,
              p.server,
              m.getDeviceId(),
            ),
          ];
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            i,
        );
      }
      var _ = a.map(function (e) {
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
        f = a.map(function (e) {
          return e.getDeviceId();
        }),
        g = t.keys.map(function (e) {
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
        g,
        f,
        t.type,
      ),
        await o("WAWebApiPeerMessageStore").storePeerMessages(_),
        await Promise.all(
          _.map(function (e) {
            return o("WAWebSendAppStateSyncMsgJob").encryptAndSendKeyMsg({
              msg: e,
            });
          }),
        ));
    }
    function c(e, t) {
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
    l.sendAppStateSyncKeyShare = u;
  },
  98,
);
