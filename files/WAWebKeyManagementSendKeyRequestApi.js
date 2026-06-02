__d(
  "WAWebKeyManagementSendKeyRequestApi",
  [
    "WALogger",
    "WASyncdKeyTypes",
    "WAWebApiPeerMessageStore",
    "WAWebKeyManagementUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSendAppStateSyncMsgJob",
    "WAWebSyncdCriticalBootstrapProcessingApi",
    "WAWebSyncdCryptoUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumBootstrapAppStateDataStageCode",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t) {
      var n = await o("WAWebKeyManagementUtils").getPeerDevices();
      if (n.length === 0)
        throw r("err")(
          "syncd: sendAppStateSyncKeyRequest: no peer devices available to request key from",
        );
      var a = t.map(function (e) {
          return { keyId: o("WASyncdKeyTypes").fromSyncKeyId(e) };
        }),
        i = { keyIds: a },
        l = n.map(function (e) {
          var t = new (r("WAWebMsgKey"))({
            fromMe: !0,
            remote: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            id: r("WAWebMsgKey").newId_DEPRECATED(),
          });
          return {
            id: t,
            to: e,
            type: "protocol",
            subtype: "app_state_sync_key_request",
            kind: o("WAWebMsgType").MsgKind.PeerMessage,
            appStateSyncKeyRequest: i,
          };
        }),
        c = n.map(function (e) {
          return e.getDeviceId();
        }),
        d = t.map(function (e) {
          return o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e);
        });
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: send key request key id ",
            " to peer deviceIds ",
            "",
          ])),
        d,
        c,
      ),
        await o("WAWebApiPeerMessageStore").storePeerMessages(l));
      var m = await Promise.allSettled(
          l.map(function (e) {
            return o("WAWebSendAppStateSyncMsgJob").encryptAndSendKeyMsg({
              msg: e,
            });
          }),
        ),
        p = m.filter(function (e) {
          return e.status === "rejected";
        });
      if (p.length > 0 && p.length < m.length)
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: sendAppStateSyncKeyRequest: ",
              "/",
              " peer device(s) failed",
            ])),
          p.length,
          m.length,
        );
      else if (p.length === m.length) {
        var _ = p
          .map(function (e) {
            return r("getErrorSafe")(e.reason).message;
          })
          .join(", ");
        throw (
          o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[syncd] sendAppStateSyncKeyRequest: all ",
                " peers failed: ",
                "",
              ])),
            m.length,
            _,
          ),
          r("err")(
            "syncd: sendAppStateSyncKeyRequest failed for all " +
              m.length +
              " peer device(s): " +
              _,
          )
        );
      }
      var f = c.filter(function (e, t) {
        return m[t].status === "fulfilled";
      });
      return (
        o(
          "WAWebSyncdCriticalBootstrapProcessingApi",
        ).logCriticalBootstrapStageIfNecessary(
          o("WAWebWamEnumBootstrapAppStateDataStageCode")
            .BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.MISSING_KEYS_REQUESTED,
        ),
        f
      );
    }
    l.sendAppStateSyncKeyRequest = c;
  },
  98,
);
