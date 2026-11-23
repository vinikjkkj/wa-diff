__d(
  "WAWebVoipBridgePhoneNumberJidBatcher",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "hybrid-bridge-batch-failed",
      c = (function () {
        function t(e) {
          var t = this;
          ((this.$2 = !1),
            (this.$3 = []),
            (this.$4 = !1),
            (this.$6 = function () {
              t.$4 = !1;
              var e = t.$3;
              ((t.$3 = []), e.length > 1 && !t.$2 ? t.$8(e) : t.$9(e));
            }),
            (this.$1 = e));
        }
        var n = t.prototype;
        return (
          (n.send = function (t) {
            if (this.$2 || !this.$5()) {
              this.$1.sendReply(t);
              return;
            }
            (this.$3.push(t),
              this.$4 || ((this.$4 = !0), self.setTimeout(this.$6, 0)));
          }),
          (n.$5 = function () {
            try {
              return this.$1.isEnabled();
            } catch (e) {
              return (this.$7("gate", e), !1);
            }
          }),
          (n.$8 = async function (t) {
            try {
              await this.$1.sendReplies(t);
            } catch (e) {
              (this.$7("batch", e), this.$9(t));
            }
          }),
          (n.$9 = function (n) {
            var t = 0,
              r = null;
            for (var a of n)
              try {
                this.$1.sendReply(a);
              } catch (e) {
                (t++, (r = e));
              }
            t > 0 &&
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[hybrid-bridge] voip.handlePhoneNumberJid send failed count=",
                      "",
                    ])),
                  t,
                )
                .sendLogs(u);
          }),
          (n.$7 = function (t, n) {
            ((this.$2 = !0),
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[hybrid-bridge] voip.handlePhoneNumberJid batching stopped step=",
                      "",
                    ])),
                  t,
                )
                .sendLogs(u));
          }),
          t
        );
      })();
    l.VoipBridgePhoneNumberJidBatcher = c;
  },
  98,
);
