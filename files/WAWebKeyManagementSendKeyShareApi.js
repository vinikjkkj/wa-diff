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
    "WAWebOutgoingPeerMsgKey",
    "WAWebSendAppStateSyncMsgJob",
    "WAWebSyncdCryptoUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a, i;
          e: {
            var l = t;
            if (
              ((typeof l == "object" && l !== null) ||
                typeof l == "function") &&
              l.type === "key_rotation" &&
              "keys" in l
            ) {
              var c = l.keys;
              ((a = m(c)),
                (i = yield o("WAWebKeyManagementUtils").getPeerDevices()));
              break e;
            }
            if (
              ((typeof l == "object" && l !== null) ||
                typeof l == "function") &&
              l.type === "missing_key" &&
              "keys" in l &&
              "orphanKeys" in l &&
              "peerDeviceWid" in l
            ) {
              var d = l.keys,
                p = l.orphanKeys,
                _ = l.peerDeviceWid;
              if (((a = m(d, p)), !o("WAWebUserPrefsMeUser").isMeAccount(_))) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: send key share to a non-peer device ",
                        "",
                      ])),
                    _.toString(),
                  )
                  .sendLogs("key-share-non-peer");
                return;
              }
              var f = o(
                "WAWebUserPrefsMeUser",
              ).getMeDeviceForOutgoingPeerMessage();
              i = [
                o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
                  f.user,
                  f.server,
                  _.getDeviceId(),
                ),
              ];
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                l,
            );
          }
          var g = i.map(function (e) {
              var t = o("WAWebOutgoingPeerMsgKey").buildOutgoingPeerMsgKey(
                r("WAWebMsgKey").newId_DEPRECATED(),
              );
              return {
                id: t,
                to: e,
                type: "protocol",
                subtype: "app_state_sync_key_share",
                kind: o("WAWebMsgType").MsgKind.PeerMessage,
                appStateSyncKeyShare: a,
              };
            }),
            h = i.map(function (e) {
              return e.getDeviceId();
            }),
            y = t.keys.map(function (e) {
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
            y,
            h,
            t.type,
          ),
            yield o("WAWebApiPeerMessageStore").storePeerMessages(g),
            yield (u || (u = n("Promise"))).all(
              g.map(function (e) {
                return o("WAWebSendAppStateSyncMsgJob").encryptAndSendKeyMsg({
                  msg: e,
                });
              }),
            ));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
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
    l.sendAppStateSyncKeyShare = c;
  },
  98,
);
