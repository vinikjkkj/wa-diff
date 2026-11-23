__d(
  "WAWebHandleSuccess",
  [
    "WABase64",
    "WACustomError",
    "WADeprecatedWapParser",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebABPropsLocalStorage",
    "WAWebAbPropsSyncJob",
    "WAWebBackendEventBus",
    "WAWebChatdLoginIdentity",
    "WAWebCollectionHandlerActions",
    "WAWebCryptoEncKeyHelper",
    "WAWebDbEncryptionKey",
    "WAWebEnvironment",
    "WAWebMediaHosts",
    "WAWebOfflineSyncQplSession",
    "WAWebPageLoadLogging",
    "WAWebPassiveModeManager",
    "WAWebSyncdGetActionHandler",
    "WAWebUpdateClockSkewUtils",
    "WAWebUpdateMeLidUtils",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "WAWebWindowsHybridBridgeInitiator",
    "cr:17219",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d =
        n("cr:17219") == null
          ? void 0
          : n("cr:17219").getWindowsBridge(
              r("WAWebWindowsHybridBridgeInitiator").WAWebHandleSuccess,
            ),
      m = new (r("WADeprecatedWapParser"))("successParser", function (e) {
        return (
          e.assertTag("success"),
          {
            ts: e.attrTime("t"),
            companionEncStatic:
              e.maybeAttrString("companion_enc_static") || "NULL",
            lid: e.maybeAttrString("lid"),
            displayName: e.maybeAttrString("display_name"),
            abpropsRefreshId: e.maybeAttrInt("abprops"),
            groupAbpropsRefreshId: e.maybeAttrInt("group_abprops"),
          }
        );
      });
    async function p(t) {
      var n, a, i;
      (o("WAWebPageLoadLogging").addPageLoadQplPoint("success_received"),
        o("WAWebOfflineSyncQplSession").OfflineSyncQpl.mark(
          o("WAWebOfflineSyncQplSession").OfflineSyncPoint.SuccessReceived,
        ));
      var l = m.parse(t);
      if (l.error)
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "handleSuccess: failed to parse ",
                "",
              ])),
            l.error,
          ),
          Promise.reject(l.error)
        );
      var s = l.success;
      (o("WAWebChatdLoginIdentity").onChatdLoginSucceeded(),
        o("WAWebUpdateClockSkewUtils").updateClockSkew(s.ts),
        o("WAWebUpdateMeLidUtils").updateMeLid(
          s.lid != null ? o("WAWebWidFactory").createWid(s.lid) : null,
        ),
        s.displayName != null &&
          o("WAWebUserPrefsMeUser").setMeDisplayName(s.displayName),
        o("WAWebSyncdGetActionHandler").setActionHandlers(
          o("WAWebCollectionHandlerActions").ActionHandlers,
        ),
        o("WAWebBackendEventBus").BackendEventBus.triggerTemporaryBan({
          banned: !1,
        }),
        o("WAWebPassiveModeManager").PassiveTaskManager.executePassiveTasks(),
        o("WAWebUserPrefsGeneral").setOfflinePushDisabled(!1));
      var u = s.companionEncStatic;
      (o(
        "WAWebDbEncryptionKey",
      ).DbEncKeyStore.generateFinalDbEncryptionAndFtsKey(u),
        o(
          "WAWebCryptoEncKeyHelper",
        ).generateFinalDbEncryptionAndFtsKeyForInvoker(u),
        r("WAWebEnvironment").isWindows && r("justknobx")._("5257") && _(u),
        d == null || (n = d.contacts) == null || n.initialize());
      var c = (a = s.abpropsRefreshId) != null ? a : 0,
        p = o("WAWebABPropsLocalStorage").getRefreshId(),
        g = r("justknobx")._("2086"),
        h = o("WAWebABPropsLocalStorage").getWebRefreshId();
      if (
        (h !== g && o("WAWebABPropsLocalStorage").setWebRefreshId(g),
        (c !== 0 && p !== c) || (g !== 0 && h !== g))
      ) {
        var y = o("WAWebABPropsLocalStorage").isABPropsAfterFirstSync();
        y &&
          (await o("WAWebAbPropsSyncJob").syncABPropsTask({
            localRefreshId: p !== c ? p : h,
            shouldSendHash: !1,
          }));
      }
      var C = (i = s.groupAbpropsRefreshId) != null ? i : 0,
        b = o("WAWebABPropsLocalStorage").getGroupAbPropsRefreshId();
      (C !== 0 &&
        C !== b &&
        o("WAWebABPropsLocalStorage").setGroupAbPropsEmergencyPushTimestamp(
          s.ts,
        ),
        await f(1e3));
    }
    async function _(e) {
      var t = d == null ? void 0 : d.serverEncKeySaltBridge;
      if (t == null) {
        o("WALogger").ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[saveServerEncKeySalt] bridge unavailable",
            ])),
        );
        return;
      }
      var n = new TextEncoder(),
        r = o("WABase64").encodeB64(n.encode(e));
      await t.setServerEncKeySalt(r);
    }
    async function f(e) {
      try {
        await o("WAPromiseTimeout").promiseTimeout(
          o("WAWebMediaHosts").mediaHosts.forceRefresh(
            new AbortController().signal,
          ),
          e,
        );
      } catch (e) {
        e instanceof o("WACustomError").TimeoutError
          ? o("WALogger")
              .LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "fetching mms4 hosts on startup exceeded timeout",
                  ])),
              )
              .sendLogs("mms4-fetch-host-timeout", { sampling: 0 })
          : o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "fetching mms4 hosts on startup failed: ",
                    "",
                  ])),
                e,
              )
              .sendLogs("mms4-fetch-host-failed");
      }
    }
    l.default = p;
  },
  98,
);
