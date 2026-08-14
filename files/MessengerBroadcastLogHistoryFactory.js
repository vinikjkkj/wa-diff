__d(
  "MessengerBroadcastLogHistoryFactory",
  ["FBLogger", "MessengerSimpleLogHistoryFactory", "getErrorSafe", "pageID"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
        var e = this;
        ((this.listener = function (t) {
          var n = o(
            "MessengerSimpleLogHistoryFactory",
          ).simpleFactory.getInstance(e.$1);
          (t.level === "error" && n.error(t.message, "from_" + t.page),
            t.level === "debug" && n.debug(t.message, "from_" + t.page));
        }),
          (this.debug = function (t) {
            try {
              o("MessengerSimpleLogHistoryFactory")
                .simpleFactory.getInstance(e.$1)
                .debug(t);
              for (
                var n = arguments.length,
                  a = new Array(n > 1 ? n - 1 : 0),
                  i = 1;
                i < n;
                i++
              )
                a[i - 1] = arguments[i];
              e.$2({
                args: a,
                category: e.$1,
                level: "debug",
                message: t,
                page: r("pageID"),
              });
            } catch (e) {
              r("FBLogger")("messenger_web")
                .catching(r("getErrorSafe")(e))
                .warn("MessengerLogHistory debug");
            }
          }),
          (this.error = function (t) {
            try {
              o("MessengerSimpleLogHistoryFactory")
                .simpleFactory.getInstance(e.$1)
                .error(t);
              for (
                var n = arguments.length,
                  a = new Array(n > 1 ? n - 1 : 0),
                  i = 1;
                i < n;
                i++
              )
                a[i - 1] = arguments[i];
              e.$2({
                args: a,
                category: e.$1,
                level: "error",
                message: t,
                page: r("pageID"),
              });
            } catch (e) {
              r("FBLogger")("messenger_web")
                .catching(r("getErrorSafe")(e))
                .warn("MessengerLogHistory error");
            }
          }),
          (this.$1 = t),
          (this.$2 = n));
      },
      s = (function () {
        function t() {
          var e = this,
            t;
          ((this.$1 = {}),
            (this.$3 = "ls_log_history"),
            (this.$4 = function (t) {
              var n,
                r = t.args,
                o = t.category,
                a = t.level,
                i = t.message,
                l = t.page;
              (n = e.$2) == null ||
                n.postMessage({
                  args: r,
                  category: o,
                  level: a,
                  message: i,
                  page: l,
                });
            }),
            (this.$2 =
              self.BroadcastChannel != null
                ? new self.BroadcastChannel(this.$3)
                : null),
            (t = this.$2) == null ||
              t.addEventListener("message", function (t) {
                var n = t.data;
                if ((n == null ? void 0 : n.category) != null) {
                  var r = e.$1[n == null ? void 0 : n.category];
                  r == null || r.listener(n);
                }
              }));
        }
        var n = t.prototype;
        return (
          (n.getInstance = function (n) {
            return (this.$1[n] || (this.$1[n] = new e(n, this.$4)), this.$1[n]);
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
