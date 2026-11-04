__d(
  "WAWebFtsV3Signaller",
  [
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "WAWebBackgroundPauseState",
    "WAWebBrokerGlobalAppState",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 18e5,
      c = (function () {
        function t() {
          var e = this;
          ((this.$1 = !1),
            (this.$2 = null),
            (this.waitWhilePaused = function () {
              var t;
              return e.$3()
                ? (s || (s = n("Promise"))).resolve()
                : (t = e.$2) != null
                  ? t
                  : e.$4();
            }));
        }
        var a = t.prototype;
        return (
          (a.shouldTerminateAll = function () {
            return r("WAWebBrokerGlobalAppState").isLogoutInProgress;
          }),
          (a.$3 = function () {
            return (
              this.shouldTerminateAll() ||
              !o("WAWebBackgroundPauseState").backgroundPauseState.get() ||
              this.$1
            );
          }),
          (a.$4 = function () {
            var t = this,
              r = new (s || (s = n("Promise")))(function (e) {
                var n = o(
                  "WAWebBackgroundPauseState",
                ).backgroundPauseState.onSet(function (r) {
                  r || ((t.$1 = !1), (t.$2 = null), n(), e());
                });
              }),
              a = o("WAPromiseDelays")
                .withTimeout(r, u, function () {
                  ((t.$1 = !0),
                    o("WALogger")
                      .WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[fts] background pause exceeded the max park; resuming indexing",
                          ])),
                      )
                      .sendLogs("fts-bg-pause-timeout"));
                })
                .finally(function () {
                  t.$2 === a && (t.$2 = null);
                });
            return ((this.$2 = a), a);
          }),
          t
        );
      })();
    l.default = c;
  },
  98,
);
