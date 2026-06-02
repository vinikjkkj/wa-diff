__d(
  "WAWebSocketModel",
  [
    "WACommonTaskScheduler",
    "WAComms",
    "WALogger",
    "WANullthrows",
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
    "WAWebLogStorageSizeForCrash",
    "WAWebLogoutReasonConstants",
    "WAWebLruMediaStorageUtils",
    "WAWebMediaStore",
    "WAWebMiscErrors",
    "WAWebModelStorage",
    "WAWebNetworkStatus",
    "WAWebOffdStorage",
    "WAWebQplStorage",
    "WAWebReleaseToEventLoop",
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
      W = r("requireDeferred")("WAWebClearAppStatesExp").__setRef(
        "WAWebSocketModel",
      ),
      q = r("gkx")("17999"),
      U = r("gkx")("9038"),
      V = [
        (B = o("WAWebLogoutReasonConstants")).LogoutReason.WebFailAddChat,
        B.LogoutReason.WebFailEncSalt,
        B.LogoutReason.WebFailOfflineResume,
        B.LogoutReason.WebFailStorageInitialization,
      ],
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
            var t = this;
            ((this.clearAppStatesDeferred = W.load()),
              o("WAWebLogForCrash").onLogForCrashReady(function () {
                (o("WAWebLogForCrash").logForCrash(
                  "wa_web_clean_up_state_in_async_gk",
                  q,
                ),
                  o("WAWebLogForCrash").logForCrash(
                    "wa_web_skip_in_memory_app_state_cleanup",
                    U,
                  ));
              }),
              o("WAWebLogStorageSizeForCrash").initStorageSizeCrashLogging(),
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
                : o("WAWebReleaseToEventLoop").releaseToEventLoop()
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
                        .catching(r("getErrorSafe")(t))
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
                async function () {
                  if (
                    (o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[ws2] observed main_stream_mode_ready",
                        ])),
                    ),
                    !(await o(
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
                },
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
          (i.clearCredentialsAndStoredData = async function (t, a) {
            if (r("WAWebEnvironment").isWindows) {
              var e,
                i =
                  n("cr:17219") == null ||
                  (e = n("cr:17219").getWindowsBridge()) == null
                    ? void 0
                    : e.getClientKeyBridge();
              if (i != null)
                try {
                  await o("WAPromiseTimeout").promiseTimeout(
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
              (t != null && V.includes(t) && (l = !0),
              this.$SocketImpl$p_4(),
              (l = await this.clearCredentials()),
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
              r("gkx")("26258") || s.sendLogs("Logout clearCredentials failed");
            }
            (o("WAWebSubscribePushManagerAction").unsubscribePushManager(),
              o("WAWebBackendApi").frontendFireAndForget(
                "updatePeriodicBackgroundSyncRegistration",
                { forceUnregister: !0 },
              ),
              this.$SocketImpl$p_4());
            try {
              await this.destroyStorage();
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
              r("WAWebReloadAfterLogout")(l, t, a));
          }),
          (i.destroyStorage = async function () {
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
              await Promise.all(e));
          }),
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
                var n = r("getErrorSafe")(e);
                o("WALogger")
                  .LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose(
                        [
                          "WS2 logout debug, reason: ",
                          `, stack: 
 `,
                          "",
                        ],
                        ["WS2 logout debug, reason: ", ", stack: \\n ", ""],
                      )),
                    t,
                    n.stack,
                  )
                  .verbose();
              }
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "ws2:user logged out",
                ])),
            );
            var a = Promise.resolve(),
              i = 0,
              l = 20,
              s = Math.min(
                l,
                Math.max(
                  i,
                  o("WAWebSyncdGatingUtils").getSyncdSentinelTimeoutSeconds(),
                ),
              );
            a = o("WAPromiseTimeout")
              .promiseTimeout(r("WAWebSentinel")(), s * 1e3)
              .catch(function () {
                return o("WALogger").WARN(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "ws2: multi-device logout sentinel patch failed",
                    ])),
                );
              });
            var u = 3;
            o("WAPromiseTimeout")
              .promiseTimeout(
                a
                  .then(function () {
                    return e.sendCurrentLogout(t);
                  })
                  .catch(async function (n) {
                    (o("WALogger")
                      .ERROR(
                        b ||
                          (b = babelHelpers.taggedTemplateLiteralLoose([
                            "ws2: [logout error] sendCurrentLogoutPromise errored",
                          ])),
                      )
                      .catching(r("getErrorSafe")(n)),
                      await e.clearCredentialsAndStoredData(t),
                      o(
                        "WAWebBackendEventBus",
                      ).BackendEventBus.triggerLogout());
                  }),
                u * 1e3,
                "network request took more than " + u + " seconds",
              )
              .then(async function () {
                (await e.clearCredentialsAndStoredData(t),
                  e.state === o("WAWebSocketConstants").SOCKET_STATE.OPENING &&
                    e.trigger("change:state"),
                  o("WAWebBackendEventBus").BackendEventBus.triggerLogout());
              })
              .catch(async function (n) {
                (o("WALogger")
                  .ERROR(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "ws2: [logout] sentinel or sendCurrentLogout timed out",
                      ])),
                  )
                  .catching(r("getErrorSafe")(n)),
                  await e.clearCredentialsAndStoredData(t),
                  o("WAWebBackendEventBus").BackendEventBus.triggerLogout());
              })
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
                      .catching(r("getErrorSafe")(e))
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
            var e = o("WAWebUserPrefsMeUser").getMeUser();
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
            return Promise.resolve();
          }),
          (i.clearCredentials = async function () {
            r("WAWebUserPrefsStore").updatePreservedUserKeys();
            var e = !1;
            try {
              e = await this.clearState();
            } catch (t) {
              e = !0;
            }
            var t = await r("WAWebClearCredentials")();
            return e || t;
          }),
          (i.clearState = async function () {
            o("WALogger").LOG(
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
                  "ws2:clearState",
                ])),
            );
            var e = !1;
            this.unset("hasSynced");
            try {
              await r("WANullthrows")(await this.clearAppStatesDeferred)(q, U);
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
              await j();
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
          }),
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
                var t = r("getErrorSafe")(e);
                o("WALogger")
                  .ERROR(
                    F ||
                      (F = babelHelpers.taggedTemplateLiteralLoose([
                        "[CRITICAL] unpairDevice failed, proceeding with local logout",
                      ])),
                  )
                  .catching(t)
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
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("socket-model-failed-to-restart-updater");
                  });
              });
          }),
          a
        );
      })(o("WAWebBaseModel").BaseModel),
      G = o("WAWebBaseModel").defineModel(H),
      z = new G();
    async function j() {
      var e = await Promise.allSettled([
        r("WAWebDeleteAllCacheStorage")(),
        o("WAWebMediaStore").LruMediaStore.clear(),
      ]);
      e.forEach(function (e) {
        if (e.status === "rejected")
          throw e.reason instanceof Error
            ? e.reason
            : r("err")(String(e.reason));
      });
    }
    l.Socket = z;
  },
  98,
);
