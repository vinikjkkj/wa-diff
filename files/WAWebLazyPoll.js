__d(
  "WAWebLazyPoll",
  ["WALogger", "asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = (function () {
        function t(e) {
          var t = e.handler,
            n = t === void 0 ? null : t,
            o = e.interval,
            a = o === void 0 ? 3600 : o,
            i = e.name,
            l = e.randomIntervalExtension,
            s = l === void 0 ? 0 : l,
            u = e.restingInterval,
            c = u === void 0 ? 18e3 : u,
            d = e.sleepWhileResting,
            m = d === void 0 ? !1 : d;
          if (
            ((this.$6 = !1),
            (this.$7 = !1),
            (this.$8 = !1),
            (this.$1 = i),
            (this.$2 = a * 1e3),
            (this.$3 = c * 1e3),
            (this.$4 = m),
            (this.$5 = s * 1e3),
            this.$13(),
            typeof n == "function")
          )
            this.poll(n);
          else if (n != null)
            throw r("err")("Poll handler must be a function or null");
        }
        var a = t.prototype;
        return (
          (a.$14 = function () {
            return Math.ceil(Math.random() * this.$5);
          }),
          (a.$15 = function () {
            return (this.$7 ? this.$3 : this.$2) + this.$14();
          }),
          (a.$13 = function () {
            var t = this;
            document.addEventListener(
              "visibilitychange",
              function () {
                t.$12 ||
                  (document.hidden
                    ? t.$4
                      ? (o("WALogger").LOG(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "[",
                              "] inactive paused",
                            ])),
                          t.$1,
                        ),
                        t.$16())
                      : (o("WALogger").LOG(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "[",
                              "] inactive slowing down",
                            ])),
                          t.$1,
                        ),
                        (t.$7 = !0))
                    : t.$10 &&
                      (o("WALogger").LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[",
                            "] active resuming",
                          ])),
                        t.$1,
                      ),
                      t.$17()));
              },
              !1,
            );
          }),
          (a.$18 = function () {
            if (!this.$11) return !0;
            var e = Date.now() - this.$11;
            return e >= this.$15();
          }),
          (a.$16 = function () {
            (self.clearTimeout(this.$9), (this.$6 = !1));
          }),
          (a.$17 = function () {
            ((this.$7 = !1), (this.$6 = !0), this.$19());
          }),
          (a.$19 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this;
              if (this.$6) {
                if (this.$18())
                  if (this.$8)
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[",
                          "] skipping poll - already executing",
                        ])),
                      this.$1,
                    );
                  else {
                    this.$8 = !0;
                    try {
                      (o("WALogger").LOG(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[",
                            "] polling",
                          ])),
                        this.$1,
                      ),
                        yield this.$10(),
                        (this.$11 = Date.now()));
                    } finally {
                      this.$8 = !1;
                    }
                  }
                (self.clearTimeout(this.$9),
                  (this.$9 = self.setTimeout(function () {
                    return e.$19();
                  }, this.$15())));
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.poll = function (t) {
            if (this.$10 != null) {
              this.resume();
              return;
            }
            ((this.$10 = t), (this.$6 = !0), this.$19());
          }),
          (a.pause = function () {
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[",
                  "] manually paused",
                ])),
              this.$1,
            ),
              (this.$12 = !0),
              this.$16());
          }),
          (a.resume = function () {
            (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[",
                  "] manually resumed",
                ])),
              this.$1,
            ),
              (this.$12 = !1),
              this.$17());
          }),
          t
        );
      })();
    l.default = _;
  },
  98,
);
