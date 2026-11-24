__d(
  "WAWebAppMutexCore",
  [
    "fbt",
    "WACustomError",
    "WAFilteredCatch",
    "WALogger",
    "WAPromiseTimeout",
    "WAResolvable",
    "WAWebAlarm",
    "WAWebEventsWaitForEvent",
    "WAWebPageLoadLogging",
    "WAWebUserPrefsTabMutex",
    "WAWebVoipGatingUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
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
      R = 6e5,
      L = {
        INIT: "init",
        PING: "ping",
        PONG: "pong",
        TAKEOVER: "local-takeover",
        CHECK_ACTIVE_CALL: "check-active-call",
        ACTIVE_CALL_RESPONSE: "active-call-response",
        FOCUS_REQUEST: "focus-request",
      },
      E = (function () {
        function t(e) {
          var t = this;
          ((this.$3 = !1),
            (this.$4 = !1),
            (this.$6 = !0),
            (this.$7 = new (o("WAResolvable").Resolvable)()),
            (this.$8 = !1),
            (this.$13 = function () {
              t.$15();
              var e = Date.now();
              (o("WAWebUserPrefsTabMutex").setMutex((t.$1 = L.INIT + "_" + e)),
                (t.$2 = r("WAWebAlarm").setLocalTimeout(t.$13, e + R)));
            }),
            (this.$9 = e));
        }
        var n = t.prototype;
        return (
          (n.hasShownCallTakeoverModal = function () {
            return this.$8;
          }),
          (n.waitForCompletion = function () {
            return this.$7.promise;
          }),
          (n.setShouldLaunchSocket = function (t) {
            this.$6 = t;
          }),
          (n.init = function (t) {
            var e = this;
            if (
              (t === void 0 && (t = 0),
              this.$4 && o("WAWebUserPrefsTabMutex").currentTabHasMutex())
            )
              return Promise.resolve(!1);
            if (this.$5 != null) return this.$5;
            var n = this.$10(t);
            return (
              (this.$5 = n),
              n.then(
                function () {
                  return e.$11(n);
                },
                function () {
                  return e.$11(n);
                },
              ),
              n
            );
          }),
          (n.$10 = async function (n) {
            this.$3 ||
              (o("WAWebPageLoadLogging").startPageLoadQplMeasure(
                "acquire_mutex",
              ),
              (this.$3 = !0));
            var t = n + 1;
            if (t > 3)
              return (
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[app] AppMutex init generation: ",
                      "",
                    ])),
                  t,
                ),
                !0
              );
            var r = o("WAWebUserPrefsTabMutex").getNoTakeover();
            o("WAWebUserPrefsTabMutex").setNoTakeover();
            var a = await this.$12();
            if (a) {
              var i, l;
              return (
                this.$13(),
                o("WAWebPageLoadLogging").endPageLoadQplMeasure(
                  "acquire_mutex",
                ),
                this.$6 && (await this.$9.onAcquired()),
                (this.$4 = !0),
                this.$7.resolve(),
                (i = (l = this.$9).onAcquiredComplete) == null || i.call(l),
                !1
              );
            }
            if (this.$9.shouldPreventTakeoverOnActiveCall()) {
              var s = await this.$14();
              if (s)
                return (
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "app:init: Other tab has active call, setting flag",
                      ])),
                  ),
                  (this.$8 = !0),
                  !0
                );
            }
            if (r)
              return (
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[app] AppMutex init no take over",
                    ])),
                ),
                !0
              );
            throw t;
          }),
          (n.$11 = function (t) {
            this.$5 === t && (this.$5 = null);
          }),
          (n.takeoverLocal = function (t) {
            var e = this;
            return o("WAWebUserPrefsTabMutex").getMutex()
              ? (o("WAWebPageLoadLogging").startPageLoadQplMeasure(
                  "mutex_takeover",
                ),
                o("WAWebUserPrefsTabMutex").setMutex(L.TAKEOVER),
                o("WAPromiseTimeout")
                  .promiseTimeout(
                    r("WAWebEventsWaitForEvent")(
                      window,
                      "storage",
                      o("WAWebUserPrefsTabMutex").takeoverFilter,
                    ),
                    3e4,
                    "takeoverLocalTimeout",
                  )
                  .then(function (n) {
                    return (
                      o("WAWebUserPrefsTabMutex").removeMutex(),
                      o("WAWebPageLoadLogging").endPageLoadQplMeasure(
                        "mutex_takeover",
                      ),
                      e.init(t)
                    );
                  })
                  .catch(
                    o("WAFilteredCatch").filteredCatch(
                      o("WACustomError").TimeoutError,
                      function () {
                        return (
                          o("WALogger").WARN(
                            d ||
                              (d = babelHelpers.taggedTemplateLiteralLoose([
                                "[app] takeoverLocal timeout",
                              ])),
                          ),
                          o("WAWebUserPrefsTabMutex").removeMutex(),
                          o("WAWebPageLoadLogging").addPageLoadQplAnnotation({
                            mutex_takeover_timeout: !0,
                          }),
                          o("WAWebPageLoadLogging").endPageLoadQplMeasure(
                            "mutex_takeover",
                          ),
                          e.init(t)
                        );
                      },
                    ),
                  )
                  .finally(function () {
                    o("WALogger").ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "[mutex] shut down an existing instance of WA Web",
                        ])),
                    );
                  }))
              : this.init(t);
          }),
          (n.unloadMutex = function () {
            var e = o("WAWebUserPrefsTabMutex").getMutex();
            e &&
              this.$1 &&
              e.includes(this.$1) &&
              o("WAWebUserPrefsTabMutex").removeMutex();
          }),
          (n.storagePong = function (t) {
            if (o("WAWebUserPrefsTabMutex").mutexFilter(t)) {
              var e = o("WAWebUserPrefsTabMutex").parseMutex(t.newValue);
              if (e) {
                if (e === L.TAKEOVER)
                  return (
                    this.$15(),
                    (this.$4 = !1),
                    o("WAWebUserPrefsTabMutex").localTakeoverSuccess(),
                    !0
                  );
                if (e.indexOf(L.PING) === 0)
                  o("WAWebUserPrefsTabMutex").setMutex(L.PONG + Math.random());
                else if (e.indexOf(L.CHECK_ACTIVE_CALL) === 0) {
                  if (this.$4) {
                    var n = this.$9.hasActiveCall();
                    (o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "app:storagePong: responding to active call check, hasCall: ",
                          "",
                        ])),
                      n,
                    ),
                      o("WAWebUserPrefsTabMutex").setMutex(
                        L.ACTIVE_CALL_RESPONSE + "_" + String(n),
                      ));
                  }
                } else
                  e.indexOf(L.FOCUS_REQUEST) === 0 &&
                    o("WAWebVoipGatingUtils").isCallingEnabled() &&
                    (o("WALogger").LOG(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "app:storagePong: received focus request, focusing window",
                        ])),
                    ),
                    this.$16());
              }
            }
          }),
          (n.$15 = function () {
            this.$2 != null && r("WAWebAlarm").clearTimeout(this.$2);
          }),
          (n.$12 = function () {
            var e = o("WAWebUserPrefsTabMutex").getMutex();
            if (e) {
              (o("WAWebPageLoadLogging").startPageLoadQplMeasure("mutex_ping"),
                (e += ""));
              var t = 1e3;
              if (e.indexOf("_") > 0) {
                var n = e.split("."),
                  a = parseInt(n[n.length - 1], 10);
                if (Number.isFinite(a)) {
                  var i = Date.now() - R * 1.5;
                  a < i &&
                    (o("WALogger").LOG(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "[app] _pingForOtherLocalSession stale mutex",
                        ])),
                    ),
                    (t = 1e3));
                }
              }
              var l = o("WAPromiseTimeout")
                .promiseTimeout(
                  r("WAWebEventsWaitForEvent")(
                    window,
                    "storage",
                    o("WAWebUserPrefsTabMutex").mutexFilter,
                  ),
                  t,
                  "waitForOtherLocalSessionTimeout",
                )
                .then(function () {
                  return (
                    o("WALogger").LOG(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "[app] _pingForOtherLocalSession other session is alive",
                        ])),
                    ),
                    !1
                  );
                })
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    o("WACustomError").TimeoutError,
                    function () {
                      return (
                        o("WALogger").WARN(
                          h ||
                            (h = babelHelpers.taggedTemplateLiteralLoose([
                              "[app] _pingForOtherLocalSession mutex timeout after ",
                              "ms",
                            ])),
                          t,
                        ),
                        o("WAWebPageLoadLogging").addPageLoadQplAnnotation({
                          mutex_ping_timeout: !0,
                        }),
                        !0
                      );
                    },
                  ),
                );
              return (
                l.finally(function () {
                  return o("WAWebPageLoadLogging").endPageLoadQplMeasure(
                    "mutex_ping",
                  );
                }),
                o("WAWebUserPrefsTabMutex").setMutex(L.PING + Math.random()),
                l
              );
            }
            return Promise.resolve(!0);
          }),
          (n.$14 = function () {
            var e = o("WAWebUserPrefsTabMutex").getMutex();
            if (!e) return Promise.resolve(!1);
            var t = o("WAPromiseTimeout")
              .promiseTimeout(
                r("WAWebEventsWaitForEvent")(window, "storage", function (e) {
                  return (
                    o("WAWebUserPrefsTabMutex").mutexFilter(e) &&
                    e.newValue != null &&
                    e.newValue.indexOf(L.ACTIVE_CALL_RESPONSE) >= 0
                  );
                }),
                2e3,
                "checkActiveCallTimeout",
              )
              .then(function (e) {
                var t,
                  n = o("WAWebUserPrefsTabMutex").parseMutex(
                    (t = e.newValue) != null ? t : "",
                  );
                if (n && n.indexOf(L.ACTIVE_CALL_RESPONSE) === 0) {
                  var r = n.split("_")[1] === "true";
                  return (
                    o("WALogger").LOG(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "app:_checkForActiveCallInOtherTab other tab hasCall: ",
                          "",
                        ])),
                      r,
                    ),
                    r
                  );
                }
                return !1;
              })
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WACustomError").TimeoutError,
                  function () {
                    return (
                      o("WALogger").LOG(
                        C ||
                          (C = babelHelpers.taggedTemplateLiteralLoose([
                            "app:_checkForActiveCallInOtherTab timeout",
                          ])),
                      ),
                      !1
                    );
                  },
                ),
              );
            return (
              o("WAWebUserPrefsTabMutex").setMutex(
                L.CHECK_ACTIVE_CALL + Math.random(),
              ),
              t
            );
          }),
          (n.requestFocusOnOtherTab = function () {
            var e = this;
            (o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "app:requestFocusOnOtherTab requesting notif permission",
                ])),
            ),
              Notification !== void 0 && Notification.permission === "default"
                ? Notification.requestPermission()
                    .then(function () {
                      e.$17();
                    })
                    .catch(function (t) {
                      (o("WALogger").WARN(
                        v ||
                          (v = babelHelpers.taggedTemplateLiteralLoose([
                            "[app] Failed to request notification permission: ",
                            "",
                          ])),
                        t,
                      ),
                        e.$17());
                    })
                : this.$17());
          }),
          (n.$17 = function () {
            (o("WALogger").LOG(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "app:requestFocusOnOtherTab sending focus request",
                ])),
            ),
              o("WAWebUserPrefsTabMutex").setMutex(
                L.FOCUS_REQUEST + Math.random(),
              ));
          }),
          (n.$16 = function () {
            Notification !== void 0 &&
              Notification.permission === "granted" &&
              this.$18();
          }),
          (n.$18 = function () {
            var e = new Notification(s._(/*BTDS*/ "").toString(), {
              body: s._(/*BTDS*/ "").toString(),
              requireInteraction: !0,
              tag: "wa-web-call-active",
            });
            ((e.onclick = function () {
              (window.focus(), e.close());
            }),
              window.setTimeout(function () {
                e.close();
              }, 5e3));
          }),
          t
        );
      })();
    l.WAWebAppMutexCore = E;
  },
  226,
);
