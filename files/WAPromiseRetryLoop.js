__d(
  "WAPromiseRetryLoop",
  [
    "Promise",
    "WALogger",
    "WAPromiseBackoffs",
    "WAPromiseDelays",
    "WAResolvable",
    "asyncToGeneratorRuntime",
    "err",
    "gkx",
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
      y = (function () {
        function t(e) {
          var t = this;
          ((this.$2 = new (o("WAResolvable").Resolvable)()),
            (this.$3 = null),
            (this.$4 = null),
            (this.$5 = 0),
            (this.$6 = new (o("WAResolvable").Resolvable)()),
            (this.endWithValue = function (e) {
              (t.$5++, t.$2.resolve(e));
            }),
            (this.$1 = e));
        }
        var a = t.prototype;
        return (
          (a.resetTimeoutAfter = function (t) {
            this.$4 = Date.now() + t;
          }),
          (a.cancelReset = function () {
            this.$4 = null;
          }),
          (a.reset = function () {
            this.$2.resolveWasCalled() ||
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "PromiseRetryLoop: resetting ",
                    "",
                  ])),
                this.$1.name,
              ),
              this.$5++,
              this.$6.resolve(),
              this.$7());
          }),
          (a.start = function () {
            this.$2.resolveWasCalled() ||
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "PromiseRetryLoop: starting ",
                    "",
                  ])),
                this.$1.name,
              ),
              this.$5 !== 0 &&
                o("WALogger").ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "PromiseRetryLoop was called several times. You may have race conditions",
                    ])),
                ),
              this.$5++,
              this.$6.resolve(),
              this.$7());
          }),
          (a.pauseOnNextIteration = function () {
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "PromiseRetryLoop: pause requested on next iteration",
                ])),
            ),
              this.$6.resolve(),
              (this.$6 = new (o("WAResolvable").Resolvable)()));
          }),
          (a.unpause = function () {
            (this.$6.resolveWasCalled() ||
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "PromiseRetryLoop: loop unpaused",
                  ])),
              ),
              this.$6.resolve());
          }),
          (a.$7 = function () {
            var e = this,
              t = this.$1,
              a = this.$5,
              i = o("WAPromiseBackoffs").createTimer(this.$1.timer);
            i();
            var l = function () {
                return e.$1.isPauseEnabled !== !0
                  ? (h || (h = n("Promise"))).resolve()
                  : (e.$6.resolveWasCalled() ||
                      o("WALogger").LOG(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "PromiseRetryLoop: loop paused - waiting for unpause",
                          ])),
                      ),
                    e.$6.promise);
              },
              s = function () {
                if (!e.$2.resolveWasCalled() && a === e.$5) {
                  var n = Date.now();
                  return (
                    (e.$3 = (0, t.code)(e.endWithValue).then(function () {
                      if (!e.$2.resolveWasCalled()) {
                        var r = t.resetDelay;
                        (((r !== void 0 && Date.now() >= n + r) ||
                          (e.$4 != null && e.$4 <= Date.now())) &&
                          (o("WALogger").LOG(
                            p ||
                              (p = babelHelpers.taggedTemplateLiteralLoose([
                                "PromiseRetryLoop: resetting ",
                                "",
                              ])),
                            t.name,
                          ),
                          (i = o("WAPromiseBackoffs").createTimer(e.$1.timer))),
                          (e.$4 = null));
                        var a = i();
                        return (
                          o("WALogger").LOG(
                            _ ||
                              (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "PromiseRetryLoop: retrying ",
                                " in ",
                                "ms",
                              ])),
                            t.name,
                            a,
                          ),
                          o("WAPromiseDelays").delayMs(a).then(l).then(s)
                        );
                      }
                    })),
                    e.$3
                  );
                }
              },
              u = (function () {
                var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    for (;;) {
                      if (e.$2.resolveWasCalled() || a !== e.$5) return;
                      var n = Date.now();
                      if (
                        (yield t.code.call(void 0, e.endWithValue),
                        e.$2.resolveWasCalled())
                      )
                        return;
                      var r = t.resetDelay;
                      (((r !== void 0 && Date.now() >= n + r) ||
                        (e.$4 != null && e.$4 <= Date.now())) &&
                        (o("WALogger").LOG(
                          f ||
                            (f = babelHelpers.taggedTemplateLiteralLoose([
                              "PromiseRetryLoop: resetting ",
                              "",
                            ])),
                          t.name,
                        ),
                        (i = o("WAPromiseBackoffs").createTimer(e.$1.timer))),
                        (e.$4 = null));
                      var s = i();
                      (o("WALogger").LOG(
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
                            "PromiseRetryLoop: retrying ",
                            " in ",
                            "ms",
                          ])),
                        t.name,
                        s,
                      ),
                        yield o("WAPromiseDelays").delayMs(s),
                        yield l());
                    }
                  },
                );
                return function () {
                  return r.apply(this, arguments);
                };
              })();
            r("gkx")("9841")
              ? (this.$3 = (h || (h = n("Promise"))).resolve().then(u))
              : (this.$3 = (h || (h = n("Promise"))).resolve().then(s));
          }),
          (a.promise = function () {
            var e = this;
            return this.$2.resolveWasCalled()
              ? this.$2.promise
              : this.$3
                ? (h || (h = n("Promise"))).race([
                    this.$2.promise,
                    this.$3.then(function () {
                      return e.$2.promise;
                    }),
                  ])
                : (h || (h = n("Promise"))).reject(
                    r("err")(
                      "PromiseRetryLoop " +
                        this.$1.name +
                        " had promise() called before start()",
                    ),
                  );
          }),
          t
        );
      })();
    l.PromiseRetryLoop = y;
  },
  98,
);
