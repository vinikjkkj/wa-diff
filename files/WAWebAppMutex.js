__d(
  "WAWebAppMutex",
  [
    "fbt",
    "Promise",
    "WACustomError",
    "WAFilteredCatch",
    "WALogger",
    "WAPromiseTimeout",
    "WAResolvable",
    "WAWebAlarm",
    "WAWebCallCollection",
    "WAWebCmd",
    "WAWebEventsWaitForEvent",
    "WAWebL10N",
    "WAWebLaunchSocket",
    "WAWebPageLoadLogging",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "WAWebUserPrefsTabMutex",
    "WAWebVoipGatingUtils",
    "asyncToGeneratorRuntime",
    "justknobx",
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
      R,
      L,
      E = 6e5,
      k = {
        INIT: "init",
        PING: "ping",
        PONG: "pong",
        TAKEOVER: "local-takeover",
        CHECK_ACTIVE_CALL: "check-active-call",
        ACTIVE_CALL_RESPONSE: "active-call-response",
        FOCUS_REQUEST: "focus-request",
      },
      I = (function () {
        function t() {
          var e = this;
          ((this.$3 = !1),
            (this.$4 = !0),
            (this.$5 = new (o("WAResolvable").Resolvable)()),
            (this.$6 = !1),
            (this.$8 = function () {
              e.$10();
              var t = Date.now();
              (o("WAWebUserPrefsTabMutex").setMutex((e.$1 = k.INIT + "_" + t)),
                (e.$2 = r("WAWebAlarm").setLocalTimeout(e.$8, t + E)));
            }),
            o("WAWebCmd").Cmd.on("ab_props_loaded_from_bridge", D),
            o("WAWebCmd").Cmd.on("on_ab_props_update_from_bridge", D));
        }
        var a = t.prototype;
        return (
          (a.hasShownCallTakeoverModal = function () {
            return this.$6;
          }),
          (a.waitForCompletion = function () {
            return this.$5.promise;
          }),
          (a.setShouldLaunchSocket = function (t) {
            this.$4 = t;
          }),
          (a.init = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                (t === void 0 && (t = 0),
                  this.$3 ||
                    (o("WAWebPageLoadLogging").startPageLoadQplMeasure(
                      "acquire_mutex",
                    ),
                    (this.$3 = !0)));
                var n = t + 1;
                if (n > 3)
                  return (
                    o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[app] AppMutex init generation: ",
                          "",
                        ])),
                      n,
                    ),
                    !0
                  );
                var a = o("WAWebUserPrefsTabMutex").getNoTakeover();
                o("WAWebUserPrefsTabMutex").setNoTakeover();
                var i = yield this.$7();
                if (i)
                  return (
                    this.$8(),
                    o("WAWebPageLoadLogging").endPageLoadQplMeasure(
                      "acquire_mutex",
                    ),
                    this.$4 &&
                      (yield o("WAWebLaunchSocket").launchSocket(null)),
                    this.$5.resolve(),
                    r(
                      "WAWebL10N",
                    ).checkForLocaleMismatchBetweenCookieAndUserPref(),
                    !1
                  );
                if (r("justknobx")._("4316")) {
                  var l = yield this.$9();
                  if (l)
                    return (
                      o("WALogger").LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "app:init: Other tab has active call, setting flag",
                          ])),
                      ),
                      (this.$6 = !0),
                      !0
                    );
                }
                if (a)
                  return (
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[app] AppMutex init no take over",
                        ])),
                    ),
                    !0
                  );
                throw n;
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.takeoverLocal = function (t) {
            var e = this;
            return o("WAWebUserPrefsTabMutex").getMutex()
              ? (o("WAWebPageLoadLogging").startPageLoadQplMeasure(
                  "mutex_takeover",
                ),
                o("WAWebUserPrefsTabMutex").setMutex(k.TAKEOVER),
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
          (a.unloadMutex = function () {
            var e = o("WAWebUserPrefsTabMutex").getMutex();
            e &&
              this.$1 &&
              e.includes(this.$1) &&
              o("WAWebUserPrefsTabMutex").removeMutex();
          }),
          (a.storagePong = function (t) {
            if (o("WAWebUserPrefsTabMutex").mutexFilter(t)) {
              var e = o("WAWebUserPrefsTabMutex").parseMutex(t.newValue);
              if (e) {
                if (e === k.TAKEOVER)
                  return (
                    this.$10(),
                    o("WAWebUserPrefsTabMutex").localTakeoverSuccess(),
                    !0
                  );
                if (e.indexOf(k.PING) === 0)
                  o("WAWebUserPrefsTabMutex").setMutex(k.PONG + Math.random());
                else if (e.indexOf(k.CHECK_ACTIVE_CALL) === 0) {
                  if (o("WAWebVoipGatingUtils").isCallingEnabled()) {
                    var n = r("WAWebCallCollection").activeCall != null;
                    (o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "app:storagePong: responding to active call check, hasCall: ",
                          "",
                        ])),
                      n,
                    ),
                      o("WAWebUserPrefsTabMutex").setMutex(
                        k.ACTIVE_CALL_RESPONSE + "_" + String(n),
                      ));
                  }
                } else
                  e.indexOf(k.FOCUS_REQUEST) === 0 &&
                    o("WAWebVoipGatingUtils").isCallingEnabled() &&
                    (o("WALogger").LOG(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "app:storagePong: received focus request, focusing window",
                        ])),
                    ),
                    this.$11());
              }
            }
          }),
          (a.$10 = function () {
            this.$2 != null && r("WAWebAlarm").clearTimeout(this.$2);
          }),
          (a.$7 = function () {
            var e = o("WAWebUserPrefsTabMutex").getMutex();
            if (e) {
              (o("WAWebPageLoadLogging").startPageLoadQplMeasure("mutex_ping"),
                (e += ""));
              var t = 1e3;
              if (e.indexOf("_") > 0) {
                var a = e.split("."),
                  i = parseInt(a[a.length - 1], 10);
                if (Number.isFinite(i)) {
                  var l = Date.now() - E * 1.5;
                  i < l &&
                    (o("WALogger").LOG(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "[app] _pingForOtherLocalSession stale mutex",
                        ])),
                    ),
                    (t = 1e3));
                }
              }
              var s = o("WAPromiseTimeout")
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
                s.finally(function () {
                  return o("WAWebPageLoadLogging").endPageLoadQplMeasure(
                    "mutex_ping",
                  );
                }),
                o("WAWebUserPrefsTabMutex").setMutex(k.PING + Math.random()),
                s
              );
            }
            return (L || (L = n("Promise"))).resolve(!0);
          }),
          (a.$9 = function () {
            var e = o("WAWebUserPrefsTabMutex").getMutex();
            if (!e) return (L || (L = n("Promise"))).resolve(!1);
            var t = o("WAPromiseTimeout")
              .promiseTimeout(
                r("WAWebEventsWaitForEvent")(window, "storage", function (e) {
                  return (
                    o("WAWebUserPrefsTabMutex").mutexFilter(e) &&
                    e.newValue != null &&
                    e.newValue.indexOf(k.ACTIVE_CALL_RESPONSE) >= 0
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
                if (n && n.indexOf(k.ACTIVE_CALL_RESPONSE) === 0) {
                  var r = n.split("_")[1] === "true";
                  return (
                    o("WALogger").LOG(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "app:_checkForActiveCallInOtherTab: other tab has active call: ",
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
                k.CHECK_ACTIVE_CALL + Math.random(),
              ),
              t
            );
          }),
          (a.requestFocusOnOtherTab = function () {
            var e = this;
            (o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "app:requestFocusOnOtherTab: requesting notification permission in this tab first",
                ])),
            ),
              Notification !== void 0 && Notification.permission === "default"
                ? Notification.requestPermission()
                    .then(function () {
                      e.$12();
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
                        e.$12());
                    })
                : this.$12());
          }),
          (a.$12 = function () {
            (o("WALogger").LOG(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "app:requestFocusOnOtherTab: sending focus request to other tab",
                ])),
            ),
              o("WAWebUserPrefsTabMutex").setMutex(
                k.FOCUS_REQUEST + Math.random(),
              ));
          }),
          (a.$11 = function () {
            Notification !== void 0 &&
              Notification.permission === "granted" &&
              this.$13();
          }),
          (a.$13 = function () {
            var e = new Notification(s._(/*BTDS*/ "WhatsApp Web").toString(), {
              body: s
                ._(/*BTDS*/ "You have an active call in this window")
                .toString(),
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
    function T(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.MUTEX_PING_TIMEOUT_SECONDS,
        e,
      );
    }
    function D() {
      (T(1),
        o("WALogger").LOG(
          R ||
            (R = babelHelpers.taggedTemplateLiteralLoose([
              "[mutex] setMutexBlockStrategy: ",
              "",
            ])),
          0,
        ),
        r("WAWebUserPrefsStore").set(
          o("WAWebUserPrefsKeys").UserPrefs.MutexBlockStrategy,
          0,
        ));
    }
    var x = new I();
    l.default = x;
  },
  226,
);
