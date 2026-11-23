__d(
  "WAPromiseRetryLoop",
  [
    "WALogger",
    "WAPromiseBackoffs",
    "WAPromiseDelays",
    "WAResolvable",
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
      h = (function () {
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
        var n = t.prototype;
        return (
          (n.resetTimeoutAfter = function (t) {
            this.$4 = Date.now() + t;
          }),
          (n.cancelReset = function () {
            this.$4 = null;
          }),
          (n.reset = function () {
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
          (n.start = function () {
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
          (n.pauseOnNextIteration = function () {
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "PromiseRetryLoop: pause requested on next iteration",
                ])),
            ),
              this.$6.resolve(),
              (this.$6 = new (o("WAResolvable").Resolvable)()));
          }),
          (n.unpause = function () {
            (this.$6.resolveWasCalled() ||
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "PromiseRetryLoop: loop unpaused",
                  ])),
              ),
              this.$6.resolve());
          }),
          (n.$7 = function () {
            var e = this,
              t = this.$1,
              n = this.$5,
              a = o("WAPromiseBackoffs").createTimer(this.$1.timer);
            a();
            var i = function () {
                return e.$1.isPauseEnabled !== !0
                  ? Promise.resolve()
                  : (e.$6.resolveWasCalled() ||
                      o("WALogger").LOG(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "PromiseRetryLoop: loop paused - waiting for unpause",
                          ])),
                      ),
                    e.$6.promise);
              },
              l = function () {
                if (!e.$2.resolveWasCalled() && n === e.$5) {
                  var r = Date.now();
                  return (
                    (e.$3 = (0, t.code)(e.endWithValue).then(function () {
                      if (!e.$2.resolveWasCalled()) {
                        var n = t.resetDelay;
                        (((n !== void 0 && Date.now() >= r + n) ||
                          (e.$4 != null && e.$4 <= Date.now())) &&
                          (o("WALogger").LOG(
                            p ||
                              (p = babelHelpers.taggedTemplateLiteralLoose([
                                "PromiseRetryLoop: resetting ",
                                "",
                              ])),
                            t.name,
                          ),
                          (a = o("WAPromiseBackoffs").createTimer(e.$1.timer))),
                          (e.$4 = null));
                        var s = a();
                        return (
                          o("WALogger").LOG(
                            _ ||
                              (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "PromiseRetryLoop: retrying ",
                                " in ",
                                "ms",
                              ])),
                            t.name,
                            s,
                          ),
                          o("WAPromiseDelays").delayMs(s).then(i).then(l)
                        );
                      }
                    })),
                    e.$3
                  );
                }
              },
              s = async function () {
                for (;;) {
                  if (e.$2.resolveWasCalled() || n !== e.$5) return;
                  var r = Date.now();
                  if (
                    (await t.code.call(void 0, e.endWithValue),
                    e.$2.resolveWasCalled())
                  )
                    return;
                  var l = t.resetDelay;
                  (((l !== void 0 && Date.now() >= r + l) ||
                    (e.$4 != null && e.$4 <= Date.now())) &&
                    (o("WALogger").LOG(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "PromiseRetryLoop: resetting ",
                          "",
                        ])),
                      t.name,
                    ),
                    (a = o("WAPromiseBackoffs").createTimer(e.$1.timer))),
                    (e.$4 = null));
                  var s = a();
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
                    await o("WAPromiseDelays").delayMs(s),
                    await i());
                }
              };
            r("gkx")("9841")
              ? (this.$3 = Promise.resolve().then(s))
              : (this.$3 = Promise.resolve().then(l));
          }),
          (n.promise = function () {
            var e = this;
            return this.$2.resolveWasCalled()
              ? this.$2.promise
              : this.$3
                ? Promise.race([
                    this.$2.promise,
                    this.$3.then(function () {
                      return e.$2.promise;
                    }),
                  ])
                : Promise.reject(
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
    l.PromiseRetryLoop = h;
  },
  98,
);
