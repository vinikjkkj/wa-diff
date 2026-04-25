__d(
  "WAWebPassiveModeManager",
  [
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAPromiseQueue",
    "WAPromiseRaceAbort",
    "WAResolvable",
    "WASendPassiveModeProtocol",
    "WAWebBackendEventBus",
    "WAWebPageLoadLogging",
    "WAWebQplFlowWrapper",
    "WAWebWamOfflineResumeReporter",
    "qpl",
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
      E = r("qpl")._(891431279, "3267"),
      k = 6e4,
      I = (function () {
        function t() {
          var t = this;
          ((this.$1 = new AbortController()),
            (this.$2 = new (o("WAResolvable").Resolvable)()),
            (this.$3 = !1),
            (this.$4 = []),
            (this.$5 = []),
            (this.$7 = k),
            (this.$8 = new (o("WAPromiseQueue").PromiseQueue)()),
            (this.$9 = !1),
            o(
              "WAWebBackendEventBus",
            ).BackendEventBus.onSocketStreamDisconnected(function () {
              var n;
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "PassiveModeManager: trying to abort passive mode because of disconnect",
                  ])),
              ),
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "PassiveModeManager: ",
                      " tasks from current or last run: ",
                      "",
                    ])),
                  t.$5.length,
                  t.$5
                    .map(function (e) {
                      return e.name;
                    })
                    .join(", "),
                ),
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "PassiveModeManager: processing tasks finished: ",
                      "",
                    ])),
                  t.$2.resolveWasCalled(),
                ),
                (n = t.$1) == null || n.abort(),
                t.resetState());
            }));
        }
        var a = t.prototype;
        return (
          (a.passiveTimeoutTimer_TESTONLY = function () {
            return this.$6;
          }),
          (a.resetState = function () {
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "PassiveModeManager: reset status",
                ])),
            ),
              (this.$5 = []),
              this.$6 && (self.clearTimeout(this.$6), (this.$6 = null)),
              (this.$3 = !1),
              this.$2.resolveWasCalled() || this.$2.resolve(),
              (this.$2 = new (o("WAResolvable").Resolvable)()),
              (this.$1 = new AbortController()));
          }),
          (a.registerPassiveTask = function (t, n) {
            this.$4.find(function (e) {
              return e.name === t;
            })
              ? o("WALogger").WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "PassiveModeManager: passive task ",
                      " already registered",
                    ])),
                  t,
                )
              : (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "PassiveModeManager: register passive task ",
                      "",
                    ])),
                  t,
                ),
                this.$4.push({ name: t, task: n }));
          }),
          (a.enableDebugPassiveMode = function () {}),
          (a.stayInPassiveMode_GuestExperiencesOnly = function () {
            this.$9 = !0;
          }),
          (a.executePassiveTasks = function () {
            var e = this;
            if (!this.shouldConnectAsPassiveMode()) {
              this.$2.resolve();
              return;
            }
            var t = [].concat(this.$4);
            ((this.$4 = []),
              this.$8.enqueue(function () {
                ((e.$5 = t),
                  o("WAWebPageLoadLogging").startPageLoadQplMeasure(
                    "passive_tasks",
                  ),
                  o("WAWebQplFlowWrapper").QPL.markerPoint(
                    E,
                    "PassiveTasks_start",
                  ),
                  o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "PassiveModeManager: executePassiveTasks: start to execute ",
                        " passive tasks: ",
                        "",
                      ])),
                    t.length,
                    t
                      .map(function (e) {
                        return e.name;
                      })
                      .join(", "),
                  ));
                var a = r("WAPromiseRaceAbort")(
                    (L || (L = n("Promise"))).all(
                      t.map(function (t) {
                        var n = t.task;
                        return n(e.$1.signal).catch(function (e) {
                          if (e.name === o("WAAbortError").ABORT_ERROR) throw e;
                          o("WALogger").ERROR(
                            f ||
                              (f = babelHelpers.taggedTemplateLiteralLoose([
                                "PassiveModeManager: executePassiveTasks: failed for single task with ",
                                "",
                              ])),
                            e,
                          );
                        });
                      }),
                    ),
                    e.$1.signal,
                  )
                    .then(function () {
                      (o("WALogger").LOG(
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
                            "PassiveModeManager: executePassiveTasks: complete all tasks",
                          ])),
                      ),
                        e.$10());
                    })
                    .catch(
                      o("WAAbortError").catchAbort(function () {
                        (o("WALogger").LOG(
                          h ||
                            (h = babelHelpers.taggedTemplateLiteralLoose([
                              "PassiveModeManager: executePassiveTasks: abort by disconnect, skip send active",
                            ])),
                        ),
                          e.$2.resolve());
                      }),
                    )
                    .catch(function (t) {
                      (o("WALogger").ERROR(
                        y ||
                          (y = babelHelpers.taggedTemplateLiteralLoose([
                            "PassiveModeManager: executePassiveTasks: end with error ",
                            "",
                          ])),
                        t,
                      ),
                        e.$10());
                    })
                    .finally(function () {
                      (o("WAWebPageLoadLogging").endPageLoadQplMeasure(
                        "passive_tasks",
                      ),
                        o("WAWebQplFlowWrapper").QPL.markerPoint(
                          E,
                          "PassiveTasks_end",
                        ),
                        o("WALogger").LOG(
                          C ||
                            (C = babelHelpers.taggedTemplateLiteralLoose([
                              "PassiveModeManager: executePassiveTasks: done",
                            ])),
                        ),
                        e.resetState());
                    }),
                  i = new L(function (t) {
                    e.$6 = self.setTimeout(function () {
                      (o("WALogger")
                        .ERROR(
                          b ||
                            (b = babelHelpers.taggedTemplateLiteralLoose([
                              "PassiveModeManager: executePassiveTasks: passive mode end with timeout",
                            ])),
                        )
                        .sendLogs("passive-timeout"),
                        e.$10(),
                        e.resetState(),
                        t());
                    }, e.$7);
                  });
                return L.race([a, i]);
              }));
          }),
          (a.$10 = function () {
            this.$9 ||
              (o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "PassiveModeManager: _endPassiveMode",
                  ])),
              ),
              this.$2.resolve(),
              o(
                "WAWebWamOfflineResumeReporter",
              ).OfflineResumeReporter.logOfflinePassiveT(),
              this.$3 ||
                (o("WALogger").LOG(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "PassiveModeManager: send passive active iq",
                    ])),
                ),
                o("WASendPassiveModeProtocol").sendPassiveModeProtocol(
                  "active",
                )));
          }),
          (a.waitForPassiveTaskEnd = function () {
            return this.$2.promise;
          }),
          (a.shouldConnectAsPassiveMode = function () {
            return this.$3 || this.$4.length > 0 || this.$9;
          }),
          (a.setPassiveModeTimeout = function (t) {
            (o("WALogger").LOG(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "PassiveModeManager: setPassiveModeTimeout: config timeout to be ",
                  "",
                ])),
              t,
            ),
              (this.$7 = t));
          }),
          t
        );
      })(),
      T = new I();
    ((l.DEFAULT_MAX_PASSIVE_MODE_TIME_MS = k), (l.PassiveTaskManager = T));
  },
  98,
);
