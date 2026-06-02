__d(
  "WAWebKeyManagementHandleKeyRequestApi",
  [
    "WALogger",
    "WASyncdKeyTypes",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdHandleKeyRequest",
    "WAWebUserPrefsMeUser",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t, n) {
      if (!o("WAWebUserPrefsMeUser").isMeAccount(n)) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: key request wid error",
              ])),
          )
          .sendLogs("syncd: key request wid error");
        return;
      }
      var a = t.keyIds;
      if (a) {
        var i = r("compactMap")(a, function (e) {
          return e.keyId;
        }).map(o("WASyncdKeyTypes").toSyncKeyId);
        if (
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose(
                [
                  "syncd: handleAppStateSyncKeyRequest from device ",
                  `
    	 for keyIds: [`,
                  "]",
                ],
                [
                  "syncd: handleAppStateSyncKeyRequest from device ",
                  `
    \\t for keyIds: [`,
                  "]",
                ],
              )),
            n.getDeviceId(),
            i.map(o("WAWebSyncdCryptoUtils").syncKeyIdToHex),
          ),
          i)
        ) {
          var l = await o("WAWebSyncdHandleKeyRequest").getKeysForKeyRequest(i),
            c = l.keys,
            d = l.orphanKeys;
          return (
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose(
                  [
                    "syncd: handleAppStateSyncKeyRequest from device ",
                    `: about to send key share
      	 keys with keydata: [`,
                    `]
      	 keys without keydata: [`,
                    "]",
                  ],
                  [
                    "syncd: handleAppStateSyncKeyRequest from device ",
                    `: about to send key share
      \\t keys with keydata: [`,
                    `]
      \\t keys without keydata: [`,
                    "]",
                  ],
                )),
              n.getDeviceId(),
              c.map(function (e) {
                return o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e.keyId);
              }),
              d.map(function (e) {
                return o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e);
              }),
            ),
            o("WAWebPersistedJobManagerWorkerCompatible")
              .getJobManager()
              .waitUntilPersisted(
                o(
                  "WAWebPersistedJobDefinitions",
                ).jobSerializers.sendRequestedKeyShare(c, d, n),
              )
          );
        }
      }
    }
    l.handleAppStateSyncKeyRequest = c;
  },
  98,
);
