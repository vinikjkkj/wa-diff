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
      m,
      p = r("qpl")._(891431279, "3267"),
      _ = (e = n("cr:17219")) == null ? void 0 : e.getWindowsBridge(),
      f = new (r("WADeprecatedWapParser"))("successParser", function (e) {
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
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t, a, i;
          (o("WAWebPageLoadLogging").addPageLoadQplPoint("success_received"),
            o("WAWebQplFlowWrapper").QPL.markerPoint(p, "SuccessReceived"));
          var l = f.parse(e);
          if (l.error)
            return (
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "handleSuccess: failed to parse ",
                    "",
                  ])),
                l.error,
              ),
              (m || (m = n("Promise"))).reject(l.error)
            );
          var u = l.success;
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
            r("WAWebEnvironment").isWindows && r("justknobx")._("5257") && y(c),
            _ == null || (t = _.contacts) == null || t.initialize());
          var d = (a = u.abpropsRefreshId) != null ? a : 0,
            g = o("WAWebABPropsLocalStorage").getRefreshId(),
            h = r("justknobx")._("2086"),
            C = o("WAWebABPropsLocalStorage").getWebRefreshId();
          if (
            (C !== h && o("WAWebABPropsLocalStorage").setWebRefreshId(h),
            (d !== 0 && g !== d) || (h !== 0 && C !== h))
          ) {
            var v = o("WAWebABPropsLocalStorage").isABPropsAfterFirstSync();
            v &&
              (yield o("WAWebAbPropsSyncJob").syncABPropsTask({
                localRefreshId: g !== d ? g : C,
                shouldSendHash: !1,
              }));
          }
          var S = (i = u.groupAbpropsRefreshId) != null ? i : 0,
            R = o("WAWebABPropsLocalStorage").getGroupAbPropsRefreshId();
          (S !== 0 &&
            S !== R &&
            o("WAWebABPropsLocalStorage").setGroupAbPropsEmergencyPushTimestamp(
              u.ts,
            ),
            yield b(1e3));
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
          var t = _ == null ? void 0 : _.serverEncKeySaltBridge;
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
          yield t.setServerEncKeySalt(r);
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        })),
        v.apply(this, arguments)
      );
    }
    l.default = g;
  },
  98,
);
