__d(
  "WAWebWindowsNotificationCloseBatcher",
  ["WALogger", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "hybrid-bridge-batch-failed",
      c = (function () {
        function t(e) {
          var t = this;
          ((this.$2 = !1),
            (this.$3 = !1),
            (this.$4 = []),
            (this.$5 = !1),
            (this.$7 = function () {
              ((t.$5 = !1), t.flush());
            }),
            (this.$1 = e));
        }
        var r = t.prototype;
        return (
          (r.send = function (t) {
            var e = this;
            if (this.$2 || !this.$6()) {
              this.$1.sendClose(t);
              return;
            }
            (this.$3 ||
              ((this.$3 = !0),
              self.addEventListener("pagehide", function () {
                return e.flush();
              })),
              this.$4.push(t),
              this.$5 || ((this.$5 = !0), self.setTimeout(this.$7, 0)));
          }),
          (r.flush = function () {
            var e = this.$4;
            ((this.$4 = []),
              e.length > 1 && !this.$2 ? this.$8(e) : this.$9(e));
          }),
          (r.$6 = function () {
            try {
              return this.$1.isEnabled();
            } catch (e) {
              return (this.$10("gate", e), !1);
            }
          }),
          (r.$8 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                try {
                  yield this.$1.sendCloses(e);
                } catch (t) {
                  (this.$10("batch", t), this.$9(e));
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$9 = function (n) {
            var t = 0,
              r = null;
            for (var a of n)
              try {
                this.$1.sendClose(a);
              } catch (e) {
                (t++, (r = e));
              }
            t > 0 &&
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[hybrid-bridge] systemIntegrations.closeMessageNotification send failed count=",
                      "",
                    ])),
                  t,
                )
                .sendLogs(u);
          }),
          (r.$10 = function (t, n) {
            ((this.$2 = !0),
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[hybrid-bridge] systemIntegrations.closeMessageNotification batching stopped step=",
                      "",
                    ])),
                  t,
                )
                .sendLogs(u));
          }),
          t
        );
      })();
    l.WindowsNotificationCloseBatcher = c;
  },
  98,
);
