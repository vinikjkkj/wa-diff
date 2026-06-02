__d(
  "WAWebKeyManagementSendKeyShareApi",
  [
    "WALogger",
    "WASyncdKeyTypes",
    "WAWebApiPeerMessageStore",
    "WAWebKeyManagementUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSendAppStateSyncMsgJob",
    "WAWebSyncdCryptoUtils",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      var n, a;
      e: {
        var i = t;
        if (
          ((typeof i == "object" && i !== null) || typeof i == "function") &&
          i.type === "key_rotation" &&
          "keys" in i
        ) {
          var l = i.keys;
          ((n = u(l)),
            (a = await o("WAWebKeyManagementUtils").getPeerDevices()));
          break e;
        }
        if (
          ((typeof i == "object" && i !== null) || typeof i == "function") &&
          i.type === "missing_key" &&
          "keys" in i &&
          "orphanKeys" in i &&
          "peerDeviceId" in i
        ) {
          var s = i.keys,
            c = i.orphanKeys,
            d = i.peerDeviceId;
          ((n = u(s, c)), (a = [d]));
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            i,
        );
      }
      var m = a.map(function (e) {
          var t = new (r("WAWebMsgKey"))({
            fromMe: !0,
            remote: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            id: r("WAWebMsgKey").newId_DEPRECATED(),
          });
          return {
            id: t,
            to: e,
            type: "protocol",
            subtype: "app_state_sync_key_share",
            kind: o("WAWebMsgType").MsgKind.PeerMessage,
            appStateSyncKeyShare: n,
          };
        }),
        p = a.map(function (e) {
          return e.getDeviceId();
        }),
        _ = t.keys.map(function (e) {
          return o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e.keyId);
        });
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: send key share key id ",
            " to peer deviceIds ",
            " due to ",
            "",
          ])),
        _,
        p,
        t.type,
      ),
        await o("WAWebApiPeerMessageStore").storePeerMessages(m),
        await Promise.all(
          m.map(function (e) {
            return o("WAWebSendAppStateSyncMsgJob").encryptAndSendKeyMsg({
              msg: e,
            });
          }),
        ));
    }
    function u(e, t) {
      var n = e.map(function (e) {
        return {
          keyId: { keyId: o("WASyncdKeyTypes").fromSyncKeyId(e.keyId) },
          keyData: {
            keyData: o("WASyncdKeyTypes").fromSyncKeyData(e.keyData),
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
            keyId: { keyId: o("WASyncdKeyTypes").fromSyncKeyId(e) },
            keyData: void 0,
          };
        });
        n = n.concat(r);
      }
      return { keys: n };
    }
    l.sendAppStateSyncKeyShare = s;
  },
  98,
);
