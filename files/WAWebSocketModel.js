__d(
  "WAWebSocketModel",
  [
    "Promise",
    "WACommonTaskScheduler",
    "WAComms",
    "WALogger",
    "WANullthrows",
    "WAPromiseDelays",
    "WAPromiseTimeout",
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebAddMeContactAction",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBaseModel",
    "WAWebClearCredentials",
    "WAWebConnModel",
    "WAWebCrashlog",
    "WAWebDeleteAllCacheStorage",
    "WAWebEnvironment",
    "WAWebFeatureDetectionDetermineIncognito",
    "WAWebFtsClient",
    "WAWebFtsStorage",
    "WAWebGroupABPropsCache",
    "WAWebInvocationInterface",
    "WAWebJobsStorage",
    "WAWebLocalStorage",
    "WAWebLogForCrash",
    "WAWebLogoutReasonConstants",
    "WAWebLruMediaStorageUtils",
    "WAWebMediaStore",
    "WAWebMiscErrors",
    "WAWebModelStorage",
    "WAWebNetworkStatus",
    "WAWebOffdStorage",
    "WAWebQplStorage",
    "WAWebReloadAfterLogout",
    "WAWebSentinel",
    "WAWebSocketConstants",
    "WAWebSubscribePushManagerAction",
    "WAWebSyncBootstrap",
    "WAWebSyncdGatingUtils",
    "WAWebUnpairDeviceJob",
    "WAWebUpdater",
    "WAWebUserPrefsAppStateSync",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStore",
    "WAWebWorkerStorage",
    "asyncToGeneratorRuntime",
    "cr:10201",
    "cr:17219",
    "err",
    "getErrorSafe",
    "gkx",
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
      q = r("requireDeferred")("WAWebClearAppStatesExp").__setRef(
        "WAWebSocketModel",
      ),
      U = r("gkx")("17999"),
      V = r("gkx")("9038"),
      H = [
        (W = o("WAWebLogoutReasonConstants")).LogoutReason.WebFailAddChat,
        W.LogoutReason.WebFailEncSalt,
        W.LogoutReason.WebFailOfflineResume,
        W.LogoutReason.WebFailStorageInitialization,
      ],
      G = (function (t) {
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
            var t = this;
            ((this.clearAppStatesDeferred = q.load()),
              o("WAWebLogForCrash").onLogForCrashReady(function () {
                (o("WAWebLogForCrash").logForCrash(
                  "wa_web_clean_up_state_in_async_gk",
                  U,
                ),
                  o("WAWebLogForCrash").logForCrash(
                    "wa_web_skip_in_memory_app_state_cleanup",
                    V,
                  ));
              }),
              this.listenTo(this, "change:state", function () {
                return t.$SocketImpl$p_1();
              }),
              this.listenTo(this, "change:stream", function () {
                return t.$SocketImpl$p_2();
              }),
              (o("WAWebABProps").getABPropConfigValue(
                "wmi_worker_scheduler_web",
              )
                ? r("WACommonTaskScheduler").yield()
                : o("WAPromiseDelays").releaseToEventLoop()
              )
                .then(r("WAWebFeatureDetectionDetermineIncognito"))
                .then(function (e) {
                  t.isIncognito = e;
                }),
              o("WAWebBackendEventBus").BackendEventBus.onSetSocketState(
                function (e) {
                  t.state = e;
                },
              ),
              o("WAWebBackendEventBus").BackendEventBus.onOpenSocketStream(
                function () {
                  ((r("WAWebNetworkStatus").online = !0),
                    r("WAWebNetworkStatus").checkOnline(),
                    t.openStream().catch(function (t) {
                      o("WALogger")
                        .ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "[open socket stream] failed to open stream",
                            ])),
                        )
                        .catching(t)
                        .sendLogs("socket-model-failed-to-open-stream");
                    }),
                    t.hasSynced &&
                      t.set({
                        stream: o("WAWebSocketConstants").SOCKET_STREAM
                          .CONNECTED,
                      }));
                },
              ),
              o(
                "WAWebBackendEventBus",
              ).BackendEventBus.onSocketStreamDisconnected(function () {
                (t.set({
                  stream: o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED,
                }),
                  r("WAWebNetworkStatus").checkOnline());
              }),
              o("WAWebBackendEventBus").BackendEventBus.onCriticalSyncDone(
                function () {
                  (o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[ws2] observed on_critical_sync_done",
                      ])),
                  ),
                    t.$SocketImpl$p_3());
                },
              ),
              o("WAWebBackendEventBus").BackendEventBus.onMainStreamModeReady(
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
                    }));
                }),
              ),
              o(
                "WAWebBackendEventBus",
              ).BackendEventBus.onSocketStreamDisconnected(function () {
                t.stream = o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED;
              }));
          }),
          (i.reconnect = function () {
            o("WAWebBackendEventBus").BackendEventBus.triggerReconnectSocket();
          }),
          (i.takeover = function () {
            throw r("err")("Takeover called without conflict!");
          }),
          (i.$SocketImpl$p_4 = function () {
            r("WAWebLocalStorage") == null ||
              r("WAWebLocalStorage").setItem(
                o("WAWebUserPrefsKeys").KEYS.LOGOUT_DIRTY_BIT,
                "1",
              );
          }),
          (i.$SocketImpl$p_5 = function () {
            r("WAWebLocalStorage") == null ||
              r("WAWebLocalStorage").removeItem(
                o("WAWebUserPrefsKeys").KEYS.LOGOUT_DIRTY_BIT,
              );
          }),
          (i.$SocketImpl$p_6 = function () {
            return (
              (r("WAWebLocalStorage") == null
                ? void 0
                : r("WAWebLocalStorage").getItem(
                    o("WAWebUserPrefsKeys").KEYS.LOGOUT_DIRTY_BIT,
                  )) === "1"
            );
          }),
          (i.clearCredentialsAndStoredData = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                if (r("WAWebEnvironment").isWindows) {
                  var a,
                    i =
                      n("cr:17219") == null ||
                      (a = n("cr:17219").getWindowsBridge()) == null
                        ? void 0
                        : a.getClientKeyBridge();
                  if (i != null)
                    try {
                      yield o("WAPromiseTimeout").promiseTimeout(
                        i.clearClientKey(),
                        5e3,
                      );
                    } catch (e) {
                      o("WALogger")
                        .ERROR(
                          m ||
                            (m = babelHelpers.taggedTemplateLiteralLoose([
                              "clearCredentials: native logout failed",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e))
                        .tags("logout")
                        .sendLogs("native-clear-credentials-failed");
                    }
                }
                var l = !1;
                if (
                  (e != null && H.includes(e) && (l = !0),
                  this.$SocketImpl$p_4(),
                  (l = yield this.clearCredentials()),
                  this.$SocketImpl$p_6())
                ) {
                  l = !0;
                  var s = o("WALogger")
                    .ERROR(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "clearCredentials: dirty bit is still set",
                        ])),
                    )
                    .tags("logout");
                  r("gkx")("26258") ||
                    s.sendLogs("Logout clearCredentials failed");
                }
                (o("WAWebSubscribePushManagerAction").unsubscribePushManager(),
                  o("WAWebBackendApi").frontendFireAndForget(
                    "updatePeriodicBackgroundSyncRegistration",
                    { forceUnregister: !0 },
                  ),
                  this.$SocketImpl$p_4());
                try {
                  yield this.destroyStorage();
                } catch (e) {
                  ((l = !0),
                    r("gkx")("26258")
                      ? o("WALogger")
                          .ERROR(
                            _ ||
                              (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "destroyStorage: failed with error",
                              ])),
                          )
                          .catching(r("getErrorSafe")(e))
                          .tags("logout")
                      : o("WALogger")
                          .ERROR(
                            f ||
                              (f = babelHelpers.taggedTemplateLiteralLoose([
                                "destroyStorage: failed with error",
                              ])),
                          )
                          .catching(r("getErrorSafe")(e))
                          .tags("logout")
                          .sendLogs("Logout destroyStorage failed"));
                }
                (o("WAWebABPropsCache").clearABPropConfigs(),
                  o("WAWebGroupABPropsCache").clearGroupABPropConfigs(),
                  l || this.$SocketImpl$p_5(),
                  r("WAWebReloadAfterLogout")(l, e, t));
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.destroyStorage = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = [
                o("WAWebModelStorage").destroy(),
                o("WAWebLruMediaStorageUtils").destroyStorage(),
              ];
              (e.push(o("WAWebFtsStorage").destroy()),
                e.push(o("WAWebOffdStorage").destroy()),
                e.push(o("WAWebJobsStorage").destroy()),
                e.push(o("WAWebQplStorage").destroy()),
                e.push(
                  o("WAWebFtsClient").ftsClient.clearInitializationPromises(),
                ),
                e.push(o("WAWebFtsClient").ftsClient.destroyExternalStorage()),
                e.push(o("WAWebWorkerStorage").destroy()),
                yield (B || (B = n("Promise"))).all(e));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.logout = function (t) {
            var e = this;
            if (
              (t === void 0 &&
                (t = o("WAWebLogoutReasonConstants").LogoutReason
                  .UserInitiated),
              r("WAWebLocalStorage") == null ||
                r("WAWebLocalStorage").removeItem("WebEncKeySalt"),
              r("WAWebLocalStorage") == null ||
                r("WAWebLocalStorage").removeItem("WANoiseInfo"),
              o("WAWebInvocationInterface")
                .get()
                .setLogoutState(!0)
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "[socket model] failed to set logout state",
                        ])),
                    )
                    .catching(e)
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
                var a = r("getErrorSafe")(e);
                o("WALogger")
                  .LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose(
                        ["WS2 logout debug, reason: ", ", stack: \n ", ""],
                        ["WS2 logout debug, reason: ", ", stack: \\n ", ""],
                      )),
                    t,
                    a.stack,
                  )
                  .verbose();
              }
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "ws2:user logged out",
                ])),
            );
            var i = (B || (B = n("Promise"))).resolve(),
              l = 0,
              s = 20,
              u = Math.min(
                s,
                Math.max(
                  l,
                  o("WAWebSyncdGatingUtils").getSyncdSentinelTimeoutSeconds(),
                ),
              );
            i = o("WAPromiseTimeout")
              .promiseTimeout(r("WAWebSentinel")(), u * 1e3)
              .catch(function () {
                return o("WALogger").WARN(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "ws2: multi-device logout sentinel patch failed",
                    ])),
                );
              });
            var c = 3;
            o("WAPromiseTimeout")
              .promiseTimeout(
                i
                  .then(function () {
                    return e.sendCurrentLogout(t);
                  })
                  .catch(
                    (function () {
                      var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (n) {
                          (o("WALogger")
                            .ERROR(
                              b ||
                                (b = babelHelpers.taggedTemplateLiteralLoose([
                                  "ws2: [logout error] sendCurrentLogoutPromise errored",
                                ])),
                            )
                            .catching(n),
                            yield e.clearCredentialsAndStoredData(t),
                            o(
                              "WAWebBackendEventBus",
                            ).BackendEventBus.triggerLogout());
                        },
                      );
                      return function (e) {
                        return r.apply(this, arguments);
                      };
                    })(),
                  ),
                c * 1e3,
                "network request took more than " + c + " seconds",
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
                  var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      (o("WALogger")
                        .ERROR(
                          v ||
                            (v = babelHelpers.taggedTemplateLiteralLoose([
                              "ws2: [logout] sentinel or sendCurrentLogout timed out",
                            ])),
                        )
                        .catching(n),
                        yield e.clearCredentialsAndStoredData(t),
                        o(
                          "WAWebBackendEventBus",
                        ).BackendEventBus.triggerLogout());
                    },
                  );
                  return function (e) {
                    return r.apply(this, arguments);
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
                        S ||
                          (S = babelHelpers.taggedTemplateLiteralLoose([
                            "[socket model] failed to set logout state",
                          ])),
                      )
                      .catching(e)
                      .sendLogs("socket-model-set-logout-state-failed");
                  });
              });
          }),
          (i.summary = function () {
            (o("WALogger").LOG(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "ws:summary --------------------------------",
                ])),
            ),
              o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "ws state           ",
                    "",
                  ])),
                this.state,
              ),
              o("WALogger").LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "wd online:         ",
                    "",
                  ])),
                String(navigator.onLine),
              ),
              o("WALogger").LOG(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
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
                      I ||
                        (I = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                      e,
                    );
                  }));
          }),
          (i.$SocketImpl$p_1 = function () {
            o("WALogger").LOG(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "ws2:state change: ",
                  "",
                ])),
              this.state,
            );
          }),
          (i.$SocketImpl$p_2 = function () {
            (o("WALogger").LOG(
              D ||
                (D = babelHelpers.taggedTemplateLiteralLoose([
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
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "[ws2] moving to main screen from onCriticalSyncDone",
                ])),
            ),
              this.set({
                hasSynced: !0,
                stream: o("WAWebSocketConstants").SOCKET_STREAM.CONNECTED,
              }));
          }),
          (i.openStream = function () {
            var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
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
                $ ||
                  ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "ws2:clearState",
                  ])),
              );
              var e = !1;
              this.unset("hasSynced");
              try {
                yield r("WANullthrows")(yield this.clearAppStatesDeferred)(
                  U,
                  V,
                );
              } catch (n) {
                e = !0;
                var t = r("getErrorSafe")(n);
                n instanceof o("WAWebMiscErrors").DbOnLogoutAbort
                  ? o("WALogger").WARN(
                      P ||
                        (P = babelHelpers.taggedTemplateLiteralLoose([
                          "ws2:clearState failed due to DB operations aborted: ",
                          "",
                        ])),
                      t.stack,
                    )
                  : o("WALogger")
                      .ERROR(
                        N ||
                          (N = babelHelpers.taggedTemplateLiteralLoose([
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
                t instanceof o("WAWebMiscErrors").DbOnLogoutAbort
                  ? o("WALogger").WARN(
                      M ||
                        (M = babelHelpers.taggedTemplateLiteralLoose([
                          "ws2:clearState failed due to DB operations aborted: ",
                          "",
                        ])),
                      n.stack,
                    )
                  : o("WALogger")
                      .ERROR(
                        w ||
                          (w = babelHelpers.taggedTemplateLiteralLoose([
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
          (i.sendCurrentLogout = function (t) {
            return o("WAWebUnpairDeviceJob")
              .unpairDevice(t)
              .then(function (e) {
                (e.status !== 200 &&
                  o("WALogger").WARN(
                    A ||
                      (A = babelHelpers.taggedTemplateLiteralLoose([
                        "ws2:multi-device logout failed with error code ",
                        "",
                      ])),
                    e.status,
                  ),
                  o("WAComms").stopComms());
              })
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    F ||
                      (F = babelHelpers.taggedTemplateLiteralLoose([
                        "[CRITICAL] unpairDevice failed, proceeding with local logout",
                      ])),
                  )
                  .catching(e)
                  .verbose();
              });
          }),
          (i.updateImmediately = function (t) {
            o("WAWebCrashlog")
              .upload({ reason: t, immediate: !0 })
              .finally(function () {
                o("WAWebUpdater")
                  .Updater.restart(!0)
                  .catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        O ||
                          (O = babelHelpers.taggedTemplateLiteralLoose([
                            "[socket model] failed to restart updater",
                          ])),
                      )
                      .catching(e)
                      .sendLogs("socket-model-failed-to-restart-updater");
                  });
              });
          }),
          a
        );
      })(o("WAWebBaseModel").BaseModel),
      z = o("WAWebBaseModel").defineModel(G),
      j = new z();
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
    l.Socket = j;
  },
  98,
);
