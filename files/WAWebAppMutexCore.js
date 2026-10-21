__d(
  "WAWebAppMutexCore",
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
    "WAWebEventsWaitForEvent",
    "WAWebPageLoadLogging",
    "WAWebUserPrefsTabMutex",
    "WAWebVoipGatingUtils",
    "asyncToGeneratorRuntime",
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
      L = 6e5,
      E = {
        INIT: "init",
        PING: "ping",
        PONG: "pong",
        TAKEOVER: "local-takeover",
        CHECK_ACTIVE_CALL: "check-active-call",
        ACTIVE_CALL_RESPONSE: "active-call-response",
        FOCUS_REQUEST: "focus-request",
      },
      k = (function () {
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
              (o("WAWebUserPrefsTabMutex").setMutex((t.$1 = E.INIT + "_" + e)),
                (t.$2 = r("WAWebAlarm").setLocalTimeout(t.$13, e + L)));
            }),
            (this.$9 = e));
        }
        var a = t.prototype;
        return (
          (a.hasShownCallTakeoverModal = function () {
            return this.$8;
          }),
          (a.waitForCompletion = function () {
            return this.$7.promise;
          }),
          (a.setShouldLaunchSocket = function (t) {
            this.$6 = t;
          }),
          (a.init = function (t) {
            var e = this;
            if (
              (t === void 0 && (t = 0),
              this.$4 && o("WAWebUserPrefsTabMutex").currentTabHasMutex())
            )
              return (R || (R = n("Promise"))).resolve(!1);
            if (this.$5 != null) return this.$5;
            var r = this.$10(t);
            return (
              (this.$5 = r),
              r.then(
                function () {
                  return e.$11(r);
                },
                function () {
                  return e.$11(r);
                },
              ),
              r
            );
          }),
          (a.$10 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                this.$3 ||
                  (o("WAWebPageLoadLogging").startPageLoadQplMeasure(
                    "acquire_mutex",
                  ),
                  (this.$3 = !0));
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
                var r = o("WAWebUserPrefsTabMutex").getNoTakeover();
                o("WAWebUserPrefsTabMutex").setNoTakeover();
                var a = yield this.$12();
                if (a) {
                  var i, l;
                  return (
                    this.$13(),
                    o("WAWebPageLoadLogging").endPageLoadQplMeasure(
                      "acquire_mutex",
                    ),
                    this.$6 && (yield this.$9.onAcquired()),
                    (this.$4 = !0),
                    this.$7.resolve(),
                    (i = (l = this.$9).onAcquiredComplete) == null || i.call(l),
                    !1
                  );
                }
                if (this.$9.shouldPreventTakeoverOnActiveCall()) {
                  var s = yield this.$14();
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
                throw n;
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.$11 = function (t) {
            this.$5 === t && (this.$5 = null);
          }),
          (a.takeoverLocal = function (t) {
            var e = this;
            return o("WAWebUserPrefsTabMutex").getMutex()
              ? (o("WAWebPageLoadLogging").startPageLoadQplMeasure(
                  "mutex_takeover",
                ),
                o("WAWebUserPrefsTabMutex").setMutex(E.TAKEOVER),
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
                if (e === E.TAKEOVER)
                  return (
                    this.$15(),
                    o("WAWebUserPrefsTabMutex").localTakeoverSuccess(),
                    !0
                  );
                if (e.indexOf(E.PING) === 0)
                  o("WAWebUserPrefsTabMutex").setMutex(E.PONG + Math.random());
                else if (e.indexOf(E.CHECK_ACTIVE_CALL) === 0) {
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
                        E.ACTIVE_CALL_RESPONSE + "_" + String(n),
                      ));
                  }
                } else
                  e.indexOf(E.FOCUS_REQUEST) === 0 &&
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
          (a.$15 = function () {
            this.$2 != null && r("WAWebAlarm").clearTimeout(this.$2);
          }),
          (a.$12 = function () {
            var e = o("WAWebUserPrefsTabMutex").getMutex();
            if (e) {
              (o("WAWebPageLoadLogging").startPageLoadQplMeasure("mutex_ping"),
                (e += ""));
              var t = 1e3;
              if (e.indexOf("_") > 0) {
                var a = e.split("."),
                  i = parseInt(a[a.length - 1], 10);
                if (Number.isFinite(i)) {
                  var l = Date.now() - L * 1.5;
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
                o("WAWebUserPrefsTabMutex").setMutex(E.PING + Math.random()),
                s
              );
            }
            return (R || (R = n("Promise"))).resolve(!0);
          }),
          (a.$14 = function () {
            var e = o("WAWebUserPrefsTabMutex").getMutex();
            if (!e) return (R || (R = n("Promise"))).resolve(!1);
            var t = o("WAPromiseTimeout")
              .promiseTimeout(
                r("WAWebEventsWaitForEvent")(window, "storage", function (e) {
                  return (
                    o("WAWebUserPrefsTabMutex").mutexFilter(e) &&
                    e.newValue != null &&
                    e.newValue.indexOf(E.ACTIVE_CALL_RESPONSE) >= 0
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
                if (n && n.indexOf(E.ACTIVE_CALL_RESPONSE) === 0) {
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
                E.CHECK_ACTIVE_CALL + Math.random(),
              ),
              t
            );
          }),
          (a.requestFocusOnOtherTab = function () {
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
          (a.$17 = function () {
            (o("WALogger").LOG(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "app:requestFocusOnOtherTab sending focus request",
                ])),
            ),
              o("WAWebUserPrefsTabMutex").setMutex(
                E.FOCUS_REQUEST + Math.random(),
              ));
          }),
          (a.$16 = function () {
            Notification !== void 0 &&
              Notification.permission === "granted" &&
              this.$18();
          }),
          (a.$18 = function () {
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
    l.WAWebAppMutexCore = k;
  },
  226,
);
