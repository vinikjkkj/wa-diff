__d(
  "WAWebKeyManagementSendKeyRequestApi",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = yield o("WAWebKeyManagementUtils").getPeerDevices();
          if (a.length === 0)
            throw r("err")(
              "syncd: sendAppStateSyncKeyRequest: no peer devices available to request key from",
            );
          var i = t.map(function (e) {
              return { keyId: o("WASyncdKeyTypes").fromSyncKeyId(e) };
            }),
            l = { keyIds: i },
            d = a.map(function (e) {
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
                subtype: "app_state_sync_key_request",
                kind: o("WAWebMsgType").MsgKind.PeerMessage,
                appStateSyncKeyRequest: l,
              };
            }),
            m = a.map(function (e) {
              return e.getDeviceId();
            }),
            p = t.map(function (e) {
              return o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e);
            });
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: send key request key id ",
                " to peer deviceIds ",
                "",
              ])),
            p,
            m,
          ),
            yield o("WAWebApiPeerMessageStore").storePeerMessages(d));
          var _ = yield (c || (c = n("Promise"))).allSettled(
              d.map(function (e) {
                return o("WAWebSendAppStateSyncMsgJob").encryptAndSendKeyMsg({
                  msg: e,
                });
              }),
            ),
            f = _.filter(function (e) {
              return e.status === "rejected";
            });
          if (f.length > 0 && f.length < _.length)
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: sendAppStateSyncKeyRequest: ",
                  "/",
                  " peer device(s) failed",
                ])),
              f.length,
              _.length,
            );
          else if (f.length === _.length) {
            var g = f
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
                _.length,
                g,
              ),
              r("err")(
                "syncd: sendAppStateSyncKeyRequest failed for all " +
                  _.length +
                  " peer device(s): " +
                  g,
              )
            );
          }
          var h = m.filter(function (e, t) {
            return _[t].status === "fulfilled";
          });
          return (
            o(
              "WAWebSyncdCriticalBootstrapProcessingApi",
            ).logCriticalBootstrapStageIfNecessary(
              o("WAWebWamEnumBootstrapAppStateDataStageCode")
                .BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.MISSING_KEYS_REQUESTED,
            ),
            h
          );
        })),
        m.apply(this, arguments)
      );
    }
    l.sendAppStateSyncKeyRequest = d;
  },
  98,
);
