__d(
  "WAWebSocketModel",
  [
    "Promise",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebAddMeContactAction",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBaseModel",
    "WAWebCanonicalUtils",
    "WAWebClearCredentials",
    "WAWebConnModel",
    "WAWebDbErrors",
    "WAWebDeleteAllCacheStorage",
    "WAWebEnvironment",
    "WAWebFeatureDetectionDetermineIncognito",
    "WAWebGroupABPropsCache",
    "WAWebInvocationInterface",
    "WAWebLocalStorage",
    "WAWebLogStorageSizeForCrash",
    "WAWebLogoutReasonConstants",
    "WAWebMediaStore",
    "WAWebNetworkStatus",
    "WAWebNotifyWorkerUnregistered",
    "WAWebReleaseToEventLoop",
    "WAWebReloadAfterLogout",
    "WAWebSentinel",
    "WAWebSocketConstants",
    "WAWebSocketLogoutStorageUtils",
    "WAWebSocketLogoutUtils",
    "WAWebSubscribePushManagerAction",
    "WAWebSyncBootstrap",
    "WAWebUserPrefsAppStateSync",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStore",
    "WAWebUserUtils",
    "WAWebWindowsHybridBridgeInitiator",
    "asyncToGeneratorRuntime",
    "cr:17219",
    "cr:18917",
    "err",
    "getErrorSafe",
    "gkx",
    "nullthrows",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N,
      M,
      w,
      A,
      F,
      O,
      B,
      W,
      q = r("requireDeferred")("WAWebClearAppStates").__setRef(
        "WAWebSocketModel",
      ),
      U = [
        (W = o("WAWebLogoutReasonConstants")).LogoutReason.WebFailAddChat,
        W.LogoutReason.WebFailEncSalt,
        W.LogoutReason.WebFailOfflineResume,
        W.LogoutReason.WebFailStorageInitialization,
      ],
      V = 5e3,
      H = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.socket = o("WAWebBaseModel").session()),
            (e.launchGeneration = o("WAWebBaseModel").session(0)),
            (e.backoffGeneration = o("WAWebBaseModel").session(0)),
            (e.hasSynced = o("WAWebBaseModel").session()),
            (e.state = o("WAWebBaseModel").session(
              o("WAWebSocketConstants").SOCKET_STATE.UNLAUNCHED,
            )),
            (e.stream = o("WAWebBaseModel").session(
              o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED,
            )),
            (e.isIncognito = o("WAWebBaseModel").session()),
            (e.retryTimestamp = o("WAWebBaseModel").session()),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.initialize = function () {
            var t = this,
              a;
            ((this.clearAppStatesDeferred = q.load()),
              o("WAWebLogStorageSizeForCrash").initStorageSizeCrashLogging(),
              this.listenTo(this, "change:state", function () {
                return t.$SocketImpl$p_1();
              }),
              this.listenTo(this, "change:stream", function () {
                return t.$SocketImpl$p_2();
              }),
              o("WAWebReleaseToEventLoop")
                .releaseToEventLoop()
                .then(r("WAWebFeatureDetectionDetermineIncognito"))
                .then(function (e) {
                  t.isIncognito = e;
                }),
              (a = o("WAWebBackendEventBus")).BackendEventBus.onSetSocketState(
                function (e) {
                  t.state = e;
                },
              ),
              a.BackendEventBus.onOpenSocketStream(function () {
                (r("WAWebNetworkStatus").markOnline(),
                  r("WAWebNetworkStatus").checkOnline("socket_open"),
                  t.openStream().catch(function (t) {
                    o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[open socket stream] failed to open stream",
                          ])),
                      )
                      .catching(r("getErrorSafe")(t))
                      .sendLogs("socket-model-failed-to-open-stream");
                  }),
                  t.hasSynced &&
                    t.set({
                      stream: o("WAWebSocketConstants").SOCKET_STREAM.CONNECTED,
                    }));
              }),
              a.BackendEventBus.onSocketStreamDisconnected(function () {
                (t.set({
                  stream: o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED,
                }),
                  r("WAWebNetworkStatus").checkOnline("socket_disconnect"));
              }),
              a.BackendEventBus.onCriticalSyncDone(function () {
                (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[ws2] observed on_critical_sync_done",
                    ])),
                ),
                  t.$SocketImpl$p_3());
              }),
              a.BackendEventBus.onMainStreamModeReady(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  if (
                    (o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[ws2] observed main_stream_mode_ready",
                        ])),
                    ),
                    !(yield o(
                      "WAWebUserPrefsAppStateSync",
                    ).getAllCriticalDataSynced()))
                  ) {
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[ws2] did not meet conditions to move to main screen",
                        ])),
                    );
                    return;
                  }
                  (o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[ws2] moving to main screen from main_stream_mode_ready",
                      ])),
                  ),
                    t.set({
                      hasSynced: !0,
                      stream: o("WAWebSocketConstants").SOCKET_STREAM.CONNECTED,
                    }),
                    o("WAWebUserPrefsMeUser").getMaybeMeLidUser() == null &&
                      o("WALogger")
                        .ERROR(
                          m ||
                            (m = babelHelpers.taggedTemplateLiteralLoose([
                              "[lid] self LID is null when main app unlocked",
                            ])),
                        )
                        .sendLogs("self-lid-null-on-refresh"));
                }),
              ),
              a.BackendEventBus.onSocketStreamDisconnected(function () {
                t.stream = o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED;
              }));
          }),
          (i.reconnect = function () {
            o("WAWebBackendEventBus").BackendEventBus.triggerReconnectSocket();
          }),
          (i.takeover = function () {
            throw r("err")("Takeover called without conflict!");
          }),
          (i.clearCredentialsAndStoredData = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                (o("WAWebNotifyWorkerUnregistered").notifyWorkerUnregistered(),
                  o("WAWebInvocationInterface")
                    .get()
                    .setLogoutState(!0)
                    .catch(function (e) {
                      o("WALogger")
                        .ERROR(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "[socket model] failed to set logout state",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs("socket-model-set-logout-state-failed");
                    }),
                  o("WAWebBackendApi").frontendFireAndForget(
                    "triggerLogoutDiagnosticFromBridge",
                    { reason: e },
                  ));
                var a = !1;
                if (r("WAWebEnvironment").isWindows) {
                  var i,
                    l =
                      n("cr:17219") == null ||
                      (i = n("cr:17219").getWindowsBridge(
                        r("WAWebWindowsHybridBridgeInitiator").WAWebSocketModel,
                      )) == null
                        ? void 0
                        : i.getClientKeyBridge();
                  if (l != null)
                    try {
                      yield o("WAPromiseTimeout").promiseTimeout(
                        l.clearClientKey(),
                        5e3,
                      );
                    } catch (e) {
                      o("WALogger")
                        .ERROR(
                          _ ||
                            (_ = babelHelpers.taggedTemplateLiteralLoose([
                              "clearCredentials: native logout failed",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e))
                        .tags("logout")
                        .sendLogs("native-clear-credentials-failed");
                    }
                }
                (e != null && U.includes(e) && (a = !0),
                  o("WAWebSocketLogoutUtils").setLogoutDirtyBit());
                var s = j("clear_credentials", e);
                try {
                  a = yield this.clearCredentials();
                } finally {
                  self.clearTimeout(s);
                }
                if (o("WAWebSocketLogoutUtils").hasDirtyBitSet()) {
                  a = !0;
                  var u = o("WALogger")
                    .ERROR(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "clearCredentials: dirty bit is still set",
                        ])),
                    )
                    .tags("logout");
                  r("gkx")("26258") ||
                    u.sendLogs("Logout clearCredentials failed");
                }
                (o("WAWebSubscribePushManagerAction").unsubscribePushManager(),
                  o("WAWebBackendApi").frontendFireAndForget(
                    "updatePeriodicBackgroundSyncRegistration",
                    { forceUnregister: !0 },
                  ),
                  o("WAWebSocketLogoutUtils").setLogoutDirtyBit());
                var c = j("destroy_storage", e);
                try {
                  yield o("WAWebSocketLogoutStorageUtils").destroyStorage();
                } catch (e) {
                  ((a = !0),
                    r("gkx")("26258")
                      ? o("WALogger")
                          .ERROR(
                            g ||
                              (g = babelHelpers.taggedTemplateLiteralLoose([
                                "destroyStorage: failed with error",
                              ])),
                          )
                          .catching(r("getErrorSafe")(e))
                          .tags("logout")
                      : o("WALogger")
                          .ERROR(
                            h ||
                              (h = babelHelpers.taggedTemplateLiteralLoose([
                                "destroyStorage: failed with error",
                              ])),
                          )
                          .catching(r("getErrorSafe")(e))
                          .tags("logout")
                          .sendLogs("Logout destroyStorage failed"));
                } finally {
                  self.clearTimeout(c);
                }
                (o("WAWebABPropsCache").clearABPropConfigs(),
                  o("WAWebGroupABPropsCache").clearGroupABPropConfigs(),
                  a || o("WAWebSocketLogoutUtils").removeLogoutDirtyBit(),
                  o("WAWebReloadAfterLogout").reloadAfterLogout(a, e, t));
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.logout = function (t, a) {
            var e = this;
            if (
              (t === void 0 &&
                (t = o("WAWebLogoutReasonConstants").LogoutReason
                  .UserInitiated),
              o("WAWebCanonicalUtils").setCanonicalReloadPending(!1),
              n("cr:18917") != null && n("cr:18917").endCanonicalAuthSession(),
              r("WAWebLocalStorage") == null ||
                r("WAWebLocalStorage").removeItem("WebEncKeySalt"),
              r("WAWebLocalStorage") == null ||
                r("WAWebLocalStorage").removeItem("WANoiseInfo"),
              o("WAWebNotifyWorkerUnregistered").notifyWorkerUnregistered(),
              o("WAWebInvocationInterface")
                .get()
                .setLogoutState(!0)
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "[socket model] failed to set logout state",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("socket-model-set-logout-state-failed");
                }),
              o("WAWebBackendEventBus").BackendEventBus.triggerStartingLogout(),
              !r("gkx")("26258"))
            )
              try {
                throw r("err")(
                  "Non Error - WS2 logout, thrown only for getting logout stack trace",
                );
              } catch (e) {
                var i = r("getErrorSafe")(e);
                o("WALogger")
                  .LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose(
                        ["WS2 logout debug, reason: ", ", stack: \n ", ""],
                        ["WS2 logout debug, reason: ", ", stack: \\n ", ""],
                      )),
                    t,
                    i.stack,
                  )
                  .verbose();
              }
            o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "ws2:user logged out",
                ])),
            );
            var l = (B || (B = n("Promise"))).resolve(),
              s = 0,
              u = 20,
              c = Math.min(
                u,
                Math.max(
                  s,
                  o("WAWebABProps").getABPropConfigValue(
                    "syncd_sentinel_timeout_seconds",
                  ),
                ),
              );
            l = o("WAPromiseTimeout")
              .promiseTimeout(r("WAWebSentinel")(), c * 1e3)
              .catch(function () {
                return o("WALogger").WARN(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "ws2: multi-device logout sentinel patch failed",
                    ])),
                );
              });
            var d = 3;
            o("WAPromiseTimeout")
              .promiseTimeout(
                l
                  .then(function () {
                    return o("WAWebSocketLogoutUtils").sendCurrentLogout(t, a);
                  })
                  .catch(
                    (function () {
                      var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (n) {
                          (o("WALogger")
                            .ERROR(
                              S ||
                                (S = babelHelpers.taggedTemplateLiteralLoose([
                                  "ws2: [logout error] sendCurrentLogoutPromise errored",
                                ])),
                            )
                            .catching(r("getErrorSafe")(n)),
                            yield e.clearCredentialsAndStoredData(t),
                            o(
                              "WAWebBackendEventBus",
                            ).BackendEventBus.triggerLogout());
                        },
                      );
                      return function (e) {
                        return a.apply(this, arguments);
                      };
                    })(),
                  ),
                d * 1e3,
                "network request took more than " + d + " seconds",
              )
              .then(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  (yield e.clearCredentialsAndStoredData(t),
                    e.state ===
                      o("WAWebSocketConstants").SOCKET_STATE.OPENING &&
                      e.trigger("change:state"),
                    o("WAWebBackendEventBus").BackendEventBus.triggerLogout());
                }),
              )
              .catch(
                (function () {
                  var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      (o("WALogger")
                        .ERROR(
                          R ||
                            (R = babelHelpers.taggedTemplateLiteralLoose([
                              "ws2: [logout] sentinel or sendCurrentLogout timed out",
                            ])),
                        )
                        .catching(r("getErrorSafe")(n)),
                        yield e.clearCredentialsAndStoredData(t),
                        o(
                          "WAWebBackendEventBus",
                        ).BackendEventBus.triggerLogout());
                    },
                  );
                  return function (e) {
                    return a.apply(this, arguments);
                  };
                })(),
              )
              .finally(function () {
                o("WAWebInvocationInterface")
                  .get()
                  .setLogoutState(!1)
                  .catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        L ||
                          (L = babelHelpers.taggedTemplateLiteralLoose([
                            "[socket model] failed to set logout state",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("socket-model-set-logout-state-failed");
                  });
              });
          }),
          (i.summary = function () {
            (o("WALogger").LOG(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "ws:summary --------------------------------",
                ])),
            ),
              o("WALogger").LOG(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "ws state           ",
                    "",
                  ])),
                this.state,
              ),
              o("WALogger").LOG(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "wd online:         ",
                    "",
                  ])),
                String(navigator.onLine),
              ),
              o("WALogger").LOG(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "ws socket id:      ",
                    "",
                  ])),
                this.socket ? this.socket.id : "n/a",
              ),
              r("gkx")("26258") ||
                r("WAWebSyncBootstrap")
                  .getCriticalSyncDebugSummary()
                  .then(function (e) {
                    o("WALogger").LOG(
                      D ||
                        (D = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                      e,
                    );
                  }));
          }),
          (i.$SocketImpl$p_1 = function () {
            o("WALogger").LOG(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "ws2:state change: ",
                  "",
                ])),
              this.state,
            );
          }),
          (i.$SocketImpl$p_2 = function () {
            (o("WALogger").LOG(
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
                  "ws2:stream change: ",
                  "",
                ])),
              this.stream,
            ),
              this.stream ===
                o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED &&
                this.unset("resumePromise"));
          }),
          (i.$SocketImpl$p_3 = function () {
            (o("WALogger").LOG(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "[ws2] moving to main screen from onCriticalSyncDone",
                ])),
            ),
              this.set({
                hasSynced: !0,
                stream: o("WAWebSocketConstants").SOCKET_STREAM.CONNECTED,
              }));
          }),
          (i.openStream = function () {
            var e = o("WAWebUserUtils").getMeUserOrThrow();
            if (e) {
              var t;
              return (
                ((t = o("WAWebConnModel")).Conn.blockStoreAdds = !1),
                (t.Conn.id = "1"),
                t.Conn.trigger("me_ready"),
                (t.Conn.meReadyTriggered = !0),
                o("WAWebAddMeContactAction").addMeToContacts(e)
              );
            }
            return (B || (B = n("Promise"))).resolve();
          }),
          (i.clearCredentials = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              r("WAWebUserPrefsStore").updatePreservedUserKeys();
              var e = !1;
              try {
                e = yield this.clearState();
              } catch (t) {
                e = !0;
              }
              var t = yield r("WAWebClearCredentials")();
              return e || t;
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.clearState = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              o("WALogger").LOG(
                N ||
                  (N = babelHelpers.taggedTemplateLiteralLoose([
                    "ws2:clearState",
                  ])),
              );
              var e = !1;
              this.unset("hasSynced");
              try {
                yield r("nullthrows")(yield this.clearAppStatesDeferred)();
              } catch (n) {
                e = !0;
                var t = r("getErrorSafe")(n);
                n instanceof o("WAWebDbErrors").DbOnLogoutAbort
                  ? o("WALogger").WARN(
                      M ||
                        (M = babelHelpers.taggedTemplateLiteralLoose([
                          "ws2:clearState failed due to DB operations aborted: ",
                          "",
                        ])),
                      t.stack,
                    )
                  : o("WALogger")
                      .ERROR(
                        w ||
                          (w = babelHelpers.taggedTemplateLiteralLoose([
                            "ws2:clearState error",
                          ])),
                      )
                      .catching(t)
                      .sendLogs("clear_session_app_state");
              }
              try {
                yield K();
              } catch (t) {
                e = !0;
                var n = r("getErrorSafe")(t);
                t instanceof o("WAWebDbErrors").DbOnLogoutAbort
                  ? o("WALogger").WARN(
                      A ||
                        (A = babelHelpers.taggedTemplateLiteralLoose([
                          "ws2:clearState failed due to DB operations aborted: ",
                          "",
                        ])),
                      n.stack,
                    )
                  : o("WALogger")
                      .ERROR(
                        F ||
                          (F = babelHelpers.taggedTemplateLiteralLoose([
                            "ws2:clearState error",
                          ])),
                      )
                      .catching(n)
                      .sendLogs("clear_persistent_app_state");
              }
              return e;
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          a
        );
      })(o("WAWebBaseModel").BaseModel),
      G = o("WAWebBaseModel").defineModel(H),
      z = new G();
    function j(e, t) {
      return self.setTimeout(function () {
        var n = o("WALogger")
          .ERROR(
            O ||
              (O = babelHelpers.taggedTemplateLiteralLoose([
                "logout cleanup stalled: stage=",
                ", reason=",
                ", elapsed_threshold_ms=",
                "",
              ])),
            e,
            t != null ? t : "unknown",
            V,
          )
          .tags("logout");
        r("gkx")("26258") || n.sendLogs("logout-cleanup-stalled");
      }, V);
    }
    function K() {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield (B || (B = n("Promise"))).allSettled([
            r("WAWebDeleteAllCacheStorage")(),
            o("WAWebMediaStore").LruMediaStore.clear(),
          ]);
          e.forEach(function (e) {
            if (e.status === "rejected")
              throw e.reason instanceof Error
                ? e.reason
                : r("err")(String(e.reason));
          });
        })),
        Q.apply(this, arguments)
      );
    }
    l.Socket = z;
  },
  98,
);
