__d(
  "WAWebWindowsNotificationCloseBatcher",
  ["WALogger"],
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
        var n = t.prototype;
        return (
          (n.send = function (t) {
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
          (n.flush = function () {
            var e = this.$4;
            ((this.$4 = []),
              e.length > 1 && !this.$2 ? this.$8(e) : this.$9(e));
          }),
          (n.$6 = function () {
            try {
              return this.$1.isEnabled();
            } catch (e) {
              return (this.$10("gate", e), !1);
            }
          }),
          (n.$8 = async function (t) {
            try {
              await this.$1.sendCloses(t);
            } catch (e) {
              (this.$10("batch", e), this.$9(t));
            }
          }),
          (n.$9 = function (n) {
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
          (n.$10 = function (t, n) {
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
