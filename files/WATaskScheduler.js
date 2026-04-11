__d(
  "WATaskScheduler",
  [
    "Promise",
    "WALogger",
    "WAPromiseBackoffs",
    "WAResolvable",
    "WATimeUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
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
      y = "no_reschedule",
      C = (function () {
        function t(e) {
          ((this.$1 = !1),
            (this.$2 = {}),
            (this.$3 = {}),
            (this.$4 = {}),
            (this.$5 = new Map()),
            (this.$6 = e.scheduledTimeResolver));
        }
        var r = t.prototype;
        return (
          (r.$7 = function (r) {
            var t = this,
              a = this.$5.get(r);
            if (a == null) {
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Tried to start task ",
                    " before registering its implementation",
                  ])),
                r,
              );
              return;
            }
            this.$6.get(r).then(function (e) {
              var i = e == null,
                l = !i && e === o("WATimeUtils").DEFAULT_UNIXTIME;
              if (l) {
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Task ",
                      " deactivated",
                    ])),
                  r,
                );
                return;
              }
              var f = e == null ? 0 : e * 1e3 - o("WATimeUtils").unixTimeMs();
              ((f = Math.max(0, f)),
                (f = Math.min(f, 2147483647)),
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Scheduling task ",
                      " in ",
                      "ms",
                    ])),
                  r,
                  f,
                ),
                (t.$4[r] = setTimeout(function () {
                  (delete t.$4[r],
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "Firing task ",
                          "",
                        ])),
                      r,
                    ),
                    a(i)
                      .then(function (e) {
                        if (e === "no_reschedule")
                          return new (h || (h = n("Promise")))(function () {});
                        var a;
                        return (
                          e === o("WATimeUtils").DEFAULT_UNIXTIME
                            ? (o("WALogger").LOG(
                                d ||
                                  (d = babelHelpers.taggedTemplateLiteralLoose([
                                    "Task ",
                                    " complete, deactivating",
                                  ])),
                                r,
                              ),
                              delete t.$3[r],
                              (a = o("WATimeUtils").DEFAULT_UNIXTIME))
                            : e >= 0
                              ? (o("WALogger").LOG(
                                  m ||
                                    (m =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "Task ",
                                        " complete, waiting ",
                                        "",
                                      ])),
                                  r,
                                  e,
                                ),
                                delete t.$3[r],
                                (a = o("WATimeUtils").futureUnixTime(e)))
                              : (o("WALogger").LOG(
                                  p ||
                                    (p =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "Task ",
                                        " will try again later",
                                      ])),
                                  r,
                                ),
                                (a = t.$8(r))),
                          t.$6.set(r, a)
                        );
                      })
                      .then(function () {
                        (t.$7(r),
                          t.$2[r] &&
                            (t.$2[r].forEach(function (e) {
                              return e();
                            }),
                            delete t.$2[r]));
                      })
                      .catch(function (e) {
                        return (
                          o("WALogger").LOG(
                            _ ||
                              (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "Task ",
                                " failed, try again later: ",
                                "",
                              ])),
                            r,
                            e,
                          ),
                          t.$6.set(r, t.$8(r)).then(function () {
                            t.$7(r);
                          })
                        );
                      }));
                }, f)));
            });
          }),
          (r.$8 = function (t) {
            return (
              this.$3[t] ||
                (this.$3[t] = o("WAPromiseBackoffs").createTimer({
                  jitter: 0.1,
                  max: o("WATimeUtils").HOUR_SECONDS * 1e3,
                  algo: { type: "fibonacci", first: 1e3, second: 2e3 },
                })),
              o("WATimeUtils").futureUnixTime(Math.round(this.$3[t]() / 1e3))
            );
          }),
          (r.$9 = function (t, n) {
            (this.$2[t] || (this.$2[t] = []), this.$2[t].push(n));
          }),
          (r.awaitTaskPromise = function (t) {
            var e = this;
            return new (h || (h = n("Promise")))(function (n) {
              e.$9(t, n);
            });
          }),
          (r.reschedule = function (t, n) {
            this.$1
              ? (this.$6.set(t, n),
                this.$4[t] != null && clearTimeout(this.$4[t]),
                this.$7(t))
              : this.$6.set(t, n);
          }),
          (r.registerTask = function (t, n) {
            (this.$1 || (this.$1 = !0), this.$5.set(t, n), this.$7(t));
          }),
          (r.getScheduledTime = function (t) {
            return this.$6.get(t);
          }),
          t
        );
      })(),
      b = null,
      v = new (o("WAResolvable").Resolvable)();
    function S(e) {
      (o("WALogger").LOG(
        f ||
          (f = babelHelpers.taggedTemplateLiteralLoose([
            "startScheduler invoked",
          ])),
      ),
        b || ((b = new C(e)), v.resolve()));
    }
    function R(e, t) {
      var n = I("reschedule");
      n.reschedule(e, t);
    }
    function L(e, t) {
      v.resolveWasCalled()
        ? R(e, t)
        : v.promise
            .then(function () {
              R(e, t);
            })
            .catch(function (t) {
              o("WALogger")
                .ERROR(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "taskScheduler: reschedule eventually failed for task ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("task-scheduler-reschedule-failed");
            });
    }
    function E(e) {
      L(e, o("WATimeUtils").unixTime());
    }
    function k(e, t) {
      var n = I("registerTask");
      n.registerTask(e, t);
    }
    function I(e) {
      if (b) return b;
      throw r("err")("TaskScheduler::" + e + " called before startScheduler");
    }
    ((l.DO_NOT_RESCHEDULE = y),
      (l.startScheduler = S),
      (l.reschedule = L),
      (l.rescheduleNow = E),
      (l.registerTask = k));
  },
  98,
);
