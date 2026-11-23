__d(
  "WAWebNewsletterLiveUpdatesManager",
  ["WALogger", "WAWebNewsletterSubscribeToLiveUpdatesAction"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.$3 = async function (n) {
            var t = await o(
              "WAWebNewsletterSubscribeToLiveUpdatesAction",
            ).subscribeToLiveUpdates(n);
            if (t == null) {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[LiveUpdatesManager] Failed to subscribe to live updates",
                  ])),
              );
              return;
            }
            return t.duration;
          }),
          (n.$4 = function (t, n) {
            var e = this;
            (this.unsubscribe(),
              (this.$1 = self.setTimeout(async function () {
                var n = await e.$3(t);
                if (n != null) return e.$4(t, n);
              }, n)));
          }),
          (n.subscribe = async function (t) {
            (this.unsubscribe(), (this.$2 = t));
            var e = await this.$3(t);
            e != null && this.$4(t, e);
          }),
          (n.unsubscribe = function () {
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
