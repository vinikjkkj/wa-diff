__d(
  "WAWebHandleIdentityChange",
  [
    "WADeprecatedWapParser",
    "WAJids",
    "WALogger",
    "WAWap",
    "WAWebBackendApi",
    "WAWebBroadcastSenderKeyManager",
    "WAWebCommsWapMd",
    "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
    "WAWebIdentityChangeApiWorkerCompatible",
    "WAWebJidToWid",
    "WAWebManageE2ESessionsJob",
    "WAWebMessageQueue",
    "WAWebOfflineHandler",
    "WAWebSecurityCodeApi",
    "WAWebSendTcTokenWhenDeviceIdentityChange",
    "WAWebSessionScope",
    "WAWebSignal",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStatus",
    "WAWebWidFactory",
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
      var n = m.parse(t);
      if (n.error)
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                "",
              ])),
            n.error.toString(),
          ),
          Promise.reject(n.error)
        );
      var a = n.success,
        i = a.displayName,
        l = a.lid,
        p = a.offline,
        _ = a.stanzaId,
        f = a.wid,
        g = o("WAWap").wap("ack", {
          to: o("WAWebCommsWapMd").DEVICE_JID(f),
          id: o("WAWap").CUSTOM_STRING(_),
          class: "notification",
        });
      if (f.device != null && f.device !== o("WAJids").DEFAULT_DEVICE_ID)
        return (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "handleNewIdentity: ignore identity change from companion device",
              ])),
          ),
          Promise.resolve(g)
        );
      if (o("WAWebUserPrefsMeUser").isMePrimary(f))
        return (
          o("WAWebBackendApi").frontendFireAndForget(
            "handleSelfPrimaryIdentityChange",
            {},
          ),
          Promise.resolve(g)
        );
      var h =
        !r("isStringNullOrEmpty")(p) &&
        !o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.isResumeFromRestartComplete();
      return o("WAWebMessageQueue").onMessageQueue({
        chatWid: f,
        isOffline: h,
        msgCategory: null,
        action: async function () {
          var e = l ? o("WAWebWidFactory").asUserLidOrThrow(l) : null;
          await o(
            "WAWebIdentityChangeApiWorkerCompatible",
          ).clearDeviceRecordForIdentityChange({
            wid: f,
            stanzaLid: e,
            offline: h,
          });
          var t = await o("WAWebSignalProtocolStore")
            .getSignalProtocolStore()
            .loadIdentityKey(
              o("WAWebSignalCommonUtils").createSignalAddress(f).toString(),
            );
          if (!r("isStringNullOrEmpty")(t)) {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "handleE2eIdentityChange: ",
                  " has old identity, establishing new session",
                ])),
              f.toString(),
            );
            var n = o("WAWebWidFactory").asUserWidOrThrow(f);
            (await o("WAWebSignal").Session.deleteRemoteInfo(f),
              o("WAWebSecurityCodeApi")
                .addSecurityCodeChangedNotifications({
                  user: n,
                  stanzaLid: e,
                  offline: h,
                })
                .catch(function (e) {
                  o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "handleE2eIdentityChange: addSecurityCodeChangedNotifications failed with: ",
                        "",
                      ])),
                    String(e),
                  );
                }),
              o(
                "WAWebSendTcTokenWhenDeviceIdentityChange",
              ).sendTcTokenWhenDeviceIdentityChange(n),
              r("WAWebUserPrefsStatus").markStatusSenderKeyRotate([f]),
              o(
                "WAWebBroadcastSenderKeyManager",
              ).markBroadcastSenderKeyRotateForUser(f),
              h ||
                o("WAWebManageE2ESessionsJob")
                  .ensureE2ESessions(
                    [f],
                    !0,
                    o("WAWebSessionScope").SessionScope.DEFAULT,
                  )
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
                [{ id: n, lid: e, displayName: i }],
                !p,
              ));
          }
          return g;
        },
      });
    }
    l.handleE2eIdentityChange = p;
  },
  98,
);
