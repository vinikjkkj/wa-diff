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
    "asyncToGeneratorRuntime",
    "cr:17219",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m =
        n("cr:17219") == null
          ? void 0
          : n("cr:17219").getWindowsBridge(
              r("WAWebWindowsHybridBridgeInitiator").WAWebHandleSuccess,
            ),
      p = new (r("WADeprecatedWapParser"))("successParser", function (e) {
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
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a, i, l;
          (o("WAWebPageLoadLogging").addPageLoadQplPoint("success_received"),
            o("WAWebOfflineSyncQplSession").OfflineSyncQpl.mark(
              o("WAWebOfflineSyncQplSession").OfflineSyncPoint.SuccessReceived,
            ));
          var s = p.parse(t);
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
          (o("WAWebChatdLoginIdentity").onChatdLoginSucceeded(),
            o("WAWebUpdateClockSkewUtils").updateClockSkew(u.ts),
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
            r("WAWebEnvironment").isWindows && r("justknobx")._("5257") && g(c),
            m == null || (a = m.contacts) == null || a.initialize());
          var _ = (i = u.abpropsRefreshId) != null ? i : 0,
            f = o("WAWebABPropsLocalStorage").getRefreshId(),
            h = r("justknobx")._("2086"),
            C = o("WAWebABPropsLocalStorage").getWebRefreshId();
          if (
            (C !== h && o("WAWebABPropsLocalStorage").setWebRefreshId(h),
            (_ !== 0 && f !== _) || (h !== 0 && C !== h))
          ) {
            var b = o("WAWebABPropsLocalStorage").isABPropsAfterFirstSync();
            b &&
              (yield o("WAWebAbPropsSyncJob").syncABPropsTask({
                localRefreshId: f !== _ ? f : C,
                shouldSendHash: !1,
              }));
          }
          var v = (l = u.groupAbpropsRefreshId) != null ? l : 0,
            S = o("WAWebABPropsLocalStorage").getGroupAbPropsRefreshId();
          (v !== 0 &&
            v !== S &&
            o("WAWebABPropsLocalStorage").setGroupAbPropsEmergencyPushTimestamp(
              u.ts,
            ),
            yield y(1e3));
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = m == null ? void 0 : m.serverEncKeySaltBridge;
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
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        C.apply(this, arguments)
      );
    }
    l.default = _;
  },
  98,
);
