__d(
  "WAWebHandleIdentityChange",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = new (r("WADeprecatedWapParser"))("identityChange", function (e) {
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
    function _(t) {
      var a = p.parse(t);
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
          (m || (m = n("Promise"))).reject(a.error)
        );
      var i = a.success,
        l = i.displayName,
        _ = i.lid,
        f = i.offline,
        g = i.stanzaId,
        h = i.wid,
        y = o("WAWap").wap("ack", {
          to: o("WAWebCommsWapMd").DEVICE_JID(h),
          id: o("WAWap").CUSTOM_STRING(g),
          class: "notification",
        });
      if (h.device != null && h.device !== o("WAJids").DEFAULT_DEVICE_ID)
        return (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "handleNewIdentity: ignore identity change from companion device",
              ])),
          ),
          (m || (m = n("Promise"))).resolve(y)
        );
      if (o("WAWebUserPrefsMeUser").isMePrimary(h))
        return (
          o("WAWebBackendApi").frontendFireAndForget(
            "handleSelfPrimaryIdentityChange",
            {},
          ),
          (m || (m = n("Promise"))).resolve(y)
        );
      var C =
        !r("isStringNullOrEmpty")(f) &&
        !o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.isResumeFromRestartComplete();
      return o("WAWebMessageQueue").onMessageQueue({
        chatWid: h,
        isOffline: C,
        msgCategory: null,
        action: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = _ ? o("WAWebWidFactory").asUserLidOrThrow(_) : null;
            yield o(
              "WAWebIdentityChangeApiWorkerCompatible",
            ).clearDeviceRecordForIdentityChange({
              wid: h,
              stanzaLid: e,
              offline: C,
            });
            var t = yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .loadIdentityKey(
                o("WAWebSignalCommonUtils").createSignalAddress(h).toString(),
              );
            if (!r("isStringNullOrEmpty")(t)) {
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "handleE2eIdentityChange: ",
                    " has old identity, establishing new session",
                  ])),
                h.toString(),
              );
              var n = o("WAWebWidFactory").asUserWidOrThrow(h);
              (yield o("WAWebSignal").Session.deleteRemoteInfo(h),
                o("WAWebSecurityCodeApi")
                  .addSecurityCodeChangedNotifications({
                    user: n,
                    stanzaLid: e,
                    offline: C,
                  })
                  .catch(function (e) {
                    o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "handleE2eIdentityChange: addSecurityCodeChangedNotifications failed with: ",
                          "",
                        ])),
                      e,
                    );
                  }),
                o(
                  "WAWebSendTcTokenWhenDeviceIdentityChange",
                ).sendTcTokenWhenDeviceIdentityChange(n),
                r("WAWebUserPrefsStatus").markStatusSenderKeyRotate([h]),
                o(
                  "WAWebBroadcastSenderKeyManager",
                ).markBroadcastSenderKeyRotateForUser(h),
                C ||
                  o("WAWebManageE2ESessionsJob")
                    .ensureE2ESessions(
                      [h],
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
                        e,
                      );
                    }),
                yield o(
                  "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
                ).createOrReplaceDisplayNamesAndLidPnMappings(
                  [{ id: n, lid: e, displayName: l }],
                  !f,
                ));
            }
            return y;
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      });
    }
    l.handleE2eIdentityChange = _;
  },
  98,
);
