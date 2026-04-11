__d(
  "WAWebKeyManagementSendKeyShareApi",
  [
    "Promise",
    "WALogger",
    "WASyncdKeyTypes",
    "WAWebApiPeerMessageStore",
    "WAWebKeyManagementUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSendAppStateSyncMsgJob",
    "WAWebSyncdCryptoUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a, i;
          e: {
            var l = t;
            if (
              ((typeof l == "object" && l !== null) ||
                typeof l == "function") &&
              l.type === "key_rotation" &&
              "keys" in l
            ) {
              var u = l.keys;
              ((a = d(u)),
                (i = yield o("WAWebKeyManagementUtils").getPeerDevices()));
              break e;
            }
            if (
              ((typeof l == "object" && l !== null) ||
                typeof l == "function") &&
              l.type === "missing_key" &&
              "keys" in l &&
              "orphanKeys" in l &&
              "peerDeviceId" in l
            ) {
              var c = l.keys,
                m = l.orphanKeys,
                p = l.peerDeviceId;
              ((a = d(c, m)), (i = [p]));
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                l,
            );
          }
          var _ = i.map(function (e) {
              var t = new (r("WAWebMsgKey"))({
                fromMe: !0,
                remote: o(
                  "WAWebUserPrefsMeUser",
                ).getMePnUserOrThrow_DO_NOT_USE(),
                id: r("WAWebMsgKey").newId_DEPRECATED(),
              });
              return {
                id: t,
                to: e,
                type: "protocol",
                subtype: "app_state_sync_key_share",
                kind: o("WAWebMsgType").MsgKind.PeerMessage,
                appStateSyncKeyShare: a,
              };
            }),
            f = i.map(function (e) {
              return e.getDeviceId();
            }),
            g = t.keys.map(function (e) {
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
            g,
            f,
            t.type,
          ),
            yield o("WAWebApiPeerMessageStore").storePeerMessages(_),
            yield (s || (s = n("Promise"))).all(
              _.map(function (e) {
                return o("WAWebSendAppStateSyncMsgJob").encryptAndSendKeyMsg({
                  msg: e,
                });
              }),
            ));
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
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
    l.sendAppStateSyncKeyShare = u;
  },
  98,
);
