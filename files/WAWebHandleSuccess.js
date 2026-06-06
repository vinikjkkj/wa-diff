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
    "WAWebCollectionHandlerActions",
    "WAWebCryptoEncKeyHelper",
    "WAWebDbEncryptionKey",
    "WAWebEnvironment",
    "WAWebMediaHosts",
    "WAWebPageLoadLogging",
    "WAWebPassiveModeManager",
    "WAWebQplFlowWrapper",
    "WAWebSyncdGetActionHandler",
    "WAWebUpdateClockSkewUtils",
    "WAWebUpdateMeLidUtils",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "cr:17219",
    "justknobx",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = r("qpl")._(891431279, "3267"),
      p = (e = n("cr:17219")) == null ? void 0 : e.getWindowsBridge(),
      _ = new (r("WADeprecatedWapParser"))("successParser", function (e) {
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
    async function f(e) {
      var t, n, a;
      (o("WAWebPageLoadLogging").addPageLoadQplPoint("success_received"),
        o("WAWebQplFlowWrapper").QPL.markerPoint(m, "SuccessReceived"));
      var i = _.parse(e);
      if (i.error)
        return (
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "handleSuccess: failed to parse ",
                "",
              ])),
            i.error,
          ),
          Promise.reject(i.error)
        );
      var l = i.success;
      (o("WAWebUpdateClockSkewUtils").updateClockSkew(l.ts),
        o("WAWebUpdateMeLidUtils").updateMeLid(
          l.lid != null ? o("WAWebWidFactory").createWid(l.lid) : null,
        ),
        l.displayName != null &&
          o("WAWebUserPrefsMeUser").setMeDisplayName(l.displayName),
        o("WAWebSyncdGetActionHandler").setActionHandlers(
          o("WAWebCollectionHandlerActions").ActionHandlers,
        ),
        o("WAWebBackendEventBus").BackendEventBus.triggerTemporaryBan({
          banned: !1,
        }),
        o("WAWebPassiveModeManager").PassiveTaskManager.executePassiveTasks(),
        o("WAWebUserPrefsGeneral").setOfflinePushDisabled(!1));
      var u = l.companionEncStatic;
      (o(
        "WAWebDbEncryptionKey",
      ).DbEncKeyStore.generateFinalDbEncryptionAndFtsKey(u),
        o(
          "WAWebCryptoEncKeyHelper",
        ).generateFinalDbEncryptionAndFtsKeyForInvoker(u),
        r("WAWebEnvironment").isWindows && r("justknobx")._("5257") && g(u),
        p == null || (t = p.contacts) == null || t.initialize());
      var c = (n = l.abpropsRefreshId) != null ? n : 0,
        d = o("WAWebABPropsLocalStorage").getRefreshId(),
        f = r("justknobx")._("2086"),
        y = o("WAWebABPropsLocalStorage").getWebRefreshId();
      if (
        (y !== f && o("WAWebABPropsLocalStorage").setWebRefreshId(f),
        (c !== 0 && d !== c) || (f !== 0 && y !== f))
      ) {
        var C = o("WAWebABPropsLocalStorage").isABPropsAfterFirstSync();
        C &&
          (await o("WAWebAbPropsSyncJob").syncABPropsTask({
            localRefreshId: d !== c ? d : y,
            shouldSendHash: !1,
          }));
      }
      var b = (a = l.groupAbpropsRefreshId) != null ? a : 0,
        v = o("WAWebABPropsLocalStorage").getGroupAbPropsRefreshId();
      (b !== 0 &&
        b !== v &&
        o("WAWebABPropsLocalStorage").setGroupAbPropsEmergencyPushTimestamp(
          l.ts,
        ),
        await h(1e3));
    }
    async function g(e) {
      var t = p == null ? void 0 : p.serverEncKeySaltBridge;
      if (t == null) {
        o("WALogger").ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[saveServerEncKeySalt] bridge unavailable",
            ])),
        );
        return;
      }
      var n = new TextEncoder(),
        r = o("WABase64").encodeB64(n.encode(e));
      await t.setServerEncKeySalt(r);
    }
    async function h(e) {
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
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "fetching mms4 hosts on startup exceeded timeout",
                  ])),
              )
              .sendLogs("mms4-fetch-host-timeout", { sampling: 0 })
          : o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "fetching mms4 hosts on startup failed: ",
                    "",
                  ])),
                e,
              )
              .sendLogs("mms4-fetch-host-failed");
      }
    }
    l.default = f;
  },
  98,
);
