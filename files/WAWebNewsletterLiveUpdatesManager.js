__d(
  "WAWebNewsletterLiveUpdatesManager",
  [
    "WALogger",
    "WAWebNewsletterSubscribeToLiveUpdatesAction",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t() {}
        var r = t.prototype;
        return (
          (r.$3 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = yield o(
                  "WAWebNewsletterSubscribeToLiveUpdatesAction",
                ).subscribeToLiveUpdates(t);
                if (n == null) {
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[LiveUpdatesManager] Failed to subscribe to live updates",
                      ])),
                  );
                  return;
                }
                return n.duration;
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (r.$4 = function (t, r) {
            var e = this;
            (this.unsubscribe(),
              (this.$1 = self.setTimeout(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  var n = yield e.$3(t);
                  if (n != null) return e.$4(t, n);
                }),
                r,
              )));
          }),
          (r.subscribe = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                (this.unsubscribe(), (this.$2 = e));
                var t = yield this.$3(e);
                t != null && this.$4(e, t);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.unsubscribe = function () {
            self.clearTimeout(this.$1);
          }),
          t
        );
      })(),
      u = new s();
    l.LiveUpdatesManager = u;
  },
  98,
);
