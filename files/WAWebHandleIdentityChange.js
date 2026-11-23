__d(
  "WAWebHandleIdentityChange",
  [
    "WADeprecatedWapParser",
    "WAJids",
    "WALogger",
    "WAWap",
    "WAWebAeaRollout",
    "WAWebBackendApi",
    "WAWebCommsWapMd",
    "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
    "WAWebIdentityChangeApiWorkerCompatible",
    "WAWebJidToWid",
    "WAWebManageE2ESessionsJob",
    "WAWebMarkBroadcastSenderKeyRotateForUser",
    "WAWebMessageQueue",
    "WAWebMessageQueueTimeout",
    "WAWebOfflineHandler",
    "WAWebSecurityCodeApi",
    "WAWebSendTcTokenWhenDeviceIdentityChange",
    "WAWebSessionScope",
    "WAWebSignal",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebUserPrefsStatus",
    "WAWebUserUtils",
    "WAWebWidFactory",
    "cr:17732",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = new (r("WADeprecatedWapParser"))("identityChange", function (e) {
        return (
          e.assertTag("notification"),
          e.assertAttr("type", "encrypt"),
          e.child("identity"),
          {
            wid: o("WAWebJidToWid").deviceJidToDeviceWid(
              e.attrDeviceJid("from"),
            ),
            stanzaId: e.attrString("id"),
            displayName: e.maybeAttrString("display_name"),
            lid: e.hasAttr("lid")
              ? o("WAWebJidToWid").deviceJidToDeviceWid(e.attrDeviceJid("lid"))
              : null,
            offline: e.maybeAttrString("offline"),
          }
        );
      });
    function p(t) {
      var a = m.parse(t);
      if (a.error)
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                "",
              ])),
            a.error.toString(),
          ),
          Promise.reject(a.error)
        );
      var i = a.success,
        l = i.displayName,
        p = i.lid,
        _ = i.offline,
        f = i.stanzaId,
        g = i.wid,
        h = o("WAWap").wap("ack", {
          to: o("WAWebCommsWapMd").DEVICE_JID(g),
          id: o("WAWap").CUSTOM_STRING(f),
          class: "notification",
        });
      if (g.device != null && g.device !== o("WAJids").DEFAULT_DEVICE_ID)
        return (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "handleNewIdentity: ignore from companion device",
              ])),
          ),
          Promise.resolve(h)
        );
      if (o("WAWebUserUtils").isMePrimary(g))
        return (
          o("WAWebBackendApi").frontendFireAndForget(
            "handleSelfPrimaryIdentityChange",
            {},
          ),
          Promise.resolve(h)
        );
      var y =
        !r("isStringNullOrEmpty")(_) &&
        !o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.isResumeFromRestartComplete();
      return o("WAWebMessageQueue")
        .onMessageQueue({
          chatWid: g,
          isOffline: y,
          msgCategory: null,
          action: async function () {
            var e = p ? o("WAWebWidFactory").asUserLidOrThrow(p) : null;
            await o(
              "WAWebIdentityChangeApiWorkerCompatible",
            ).clearDeviceRecordForIdentityChange({
              wid: g,
              stanzaLid: e,
              offline: y,
            });
            var t = await o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .loadIdentityKey(
                o("WAWebSignalCommonUtils").createSignalAddress(g).toString(),
              );
            if (!r("isStringNullOrEmpty")(t)) {
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleE2eIdentityChange] ",
                    " old identity, new session",
                  ])),
                g.toString(),
              );
              var a = o("WAWebWidFactory").asUserWidOrThrow(g);
              (await (n("cr:17732") == null
                ? void 0
                : n("cr:17732").saveAeaIdentityChangeBaseline(a)),
                await o("WAWebSignal").Session.deleteRemoteInfo(g),
                o("WAWebSecurityCodeApi")
                  .addSecurityCodeChangedNotifications({
                    user: a,
                    stanzaLid: e,
                    offline: y,
                  })
                  .catch(function (e) {
                    o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "addSecurityCodeChangedNotifications failed: ",
                          "",
                        ])),
                      String(e),
                    );
                  }),
                o(
                  "WAWebSendTcTokenWhenDeviceIdentityChange",
                ).sendTcTokenWhenDeviceIdentityChange(a),
                o("WAWebUserPrefsStatus").markStatusSenderKeyRotate([g]),
                o(
                  "WAWebMarkBroadcastSenderKeyRotateForUser",
                ).markBroadcastSenderKeyRotateForUser(g),
                (!y || o("WAWebAeaRollout").isAeaMonitoringEnabled()) &&
                  o("WAWebManageE2ESessionsJob")
                    .ensureE2ESessions({
                      identityChanged: !0,
                      sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
                      wids: [g],
                    })
                    .catch(function (e) {
                      o("WALogger").WARN(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "handleE2eIdentityChange: ensureE2ESessions failed with: ",
                            "",
                          ])),
                        String(e),
                      );
                    }),
                await o(
                  "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
                ).createOrReplaceDisplayNamesAndLidPnMappings(
                  [{ id: a, lid: e, displayName: l }],
                  !_,
                ));
            }
            return h;
          },
        })
        .catch(function (e) {
          return o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
            e,
            "identity_change",
          );
        });
    }
    l.handleE2eIdentityChange = p;
  },
  98,
);
