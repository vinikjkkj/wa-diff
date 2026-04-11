__d(
  "WAWebBizBroadcastMarketingCampaignNotificationEmitter",
  ["WALogger", "WAWebBoolFunc", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function () {
        function t() {
          ((this.$1 = new Set()), (this.$2 = o("WAWebBoolFunc").returnFalse));
        }
        var n = t.prototype;
        return (
          (n.registerDefaultHandler = function (t) {
            this.$2 = t;
          }),
          (n.subscribe = function (t) {
            var e = this;
            return (
              this.$1.add(t),
              function () {
                e.$1.delete(t);
              }
            );
          }),
          (n.emit = function (n) {
            var t = !1;
            try {
              t = this.$2(n);
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:campaign-emitter] defaultHandler err",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("business-broadcast-emitter-default-handler-error");
            }
            this.$1.forEach(function (e) {
              try {
                e(babelHelpers.extends({}, n, { backgroundSendHandling: t }));
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast:campaign-emitter] Error in listener",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("business-broadcast-emitter-listener-error");
              }
            });
          }),
          t
        );
      })(),
      c = new u();
    l.marketingCampaignNotificationEmitter = c;
  },
  98,
);
