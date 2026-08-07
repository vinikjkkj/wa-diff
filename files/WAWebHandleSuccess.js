__d(
  "WAWebHandleSuccess",
  [
    "Promise",
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
    "WAWebWindowsHybridBridgeInitiator",
    "asyncToGeneratorRuntime",
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
      p =
        n("cr:17219") == null
          ? void 0
          : n("cr:17219").getWindowsBridge(
              r("WAWebWindowsHybridBridgeInitiator").WAWebHandleSuccess,
            ),
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
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a, i, l;
          (o("WAWebPageLoadLogging").addPageLoadQplPoint("success_received"),
            o("WAWebQplFlowWrapper").QPL.markerPoint(m, "SuccessReceived"));
          var s = _.parse(t);
          if (s.error)
            return (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "handleSuccess: failed to parse ",
                    "",
                  ])),
                s.error,
              ),
              (d || (d = n("Promise"))).reject(s.error)
            );
          var u = s.success;
          (o("WAWebUpdateClockSkewUtils").updateClockSkew(u.ts),
            o("WAWebUpdateMeLidUtils").updateMeLid(
              u.lid != null ? o("WAWebWidFactory").createWid(u.lid) : null,
            ),
            u.displayName != null &&
              o("WAWebUserPrefsMeUser").setMeDisplayName(u.displayName),
            o("WAWebSyncdGetActionHandler").setActionHandlers(
              o("WAWebCollectionHandlerActions").ActionHandlers,
            ),
            o("WAWebBackendEventBus").BackendEventBus.triggerTemporaryBan({
              banned: !1,
            }),
            o(
              "WAWebPassiveModeManager",
            ).PassiveTaskManager.executePassiveTasks(),
            o("WAWebUserPrefsGeneral").setOfflinePushDisabled(!1));
          var c = u.companionEncStatic;
          (o(
            "WAWebDbEncryptionKey",
          ).DbEncKeyStore.generateFinalDbEncryptionAndFtsKey(c),
            o(
              "WAWebCryptoEncKeyHelper",
            ).generateFinalDbEncryptionAndFtsKeyForInvoker(c),
            r("WAWebEnvironment").isWindows && r("justknobx")._("5257") && h(c),
            p == null || (a = p.contacts) == null || a.initialize());
          var f = (i = u.abpropsRefreshId) != null ? i : 0,
            g = o("WAWebABPropsLocalStorage").getRefreshId(),
            y = r("justknobx")._("2086"),
            b = o("WAWebABPropsLocalStorage").getWebRefreshId();
          if (
            (b !== y && o("WAWebABPropsLocalStorage").setWebRefreshId(y),
            (f !== 0 && g !== f) || (y !== 0 && b !== y))
          ) {
            var v = o("WAWebABPropsLocalStorage").isABPropsAfterFirstSync();
            v &&
              (yield o("WAWebAbPropsSyncJob").syncABPropsTask({
                localRefreshId: g !== f ? g : b,
                shouldSendHash: !1,
              }));
          }
          var S = (l = u.groupAbpropsRefreshId) != null ? l : 0,
            R = o("WAWebABPropsLocalStorage").getGroupAbPropsRefreshId();
          (S !== 0 &&
            S !== R &&
            o("WAWebABPropsLocalStorage").setGroupAbPropsEmergencyPushTimestamp(
              u.ts,
            ),
            yield C(1e3));
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = p == null ? void 0 : p.serverEncKeySaltBridge;
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
          yield t.setServerEncKeySalt(r);
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            yield o("WAPromiseTimeout").promiseTimeout(
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
        })),
        b.apply(this, arguments)
      );
    }
    l.default = f;
  },
  98,
);
