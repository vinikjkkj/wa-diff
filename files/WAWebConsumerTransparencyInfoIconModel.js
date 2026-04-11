__d(
  "WAWebConsumerTransparencyInfoIconModel",
  [
    "WAMd5",
    "WATypeUtils",
    "WAWebApiContact",
    "WAWebLid1X1MigrationGating",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
        var e,
          n = (
            (e = r("WAWebUserPrefsStore").getMaybeMeDevicePn()) != null ? e : ""
          ).toString(),
          a = t.toString();
        return o("WAMd5").md5(n + "-" + a);
      },
      s = (function () {
        function t() {
          this.chatIds = new Set();
          var e = r("WAWebUserPrefsStore").getUser(
            o("WAWebUserPrefsKeys").KEYS.CTWA_CONSUMER_TRANSPARENCY_INFO_ICON,
          );
          e instanceof Array &&
            (this.chatIds = new Set(e.filter(o("WATypeUtils").isString)));
        }
        var n = t.prototype;
        return (
          (n.add = function (n) {
            (this.chatIds.add(e(n)),
              r("WAWebUserPrefsStore").setUser(
                o("WAWebUserPrefsKeys").KEYS
                  .CTWA_CONSUMER_TRANSPARENCY_INFO_ICON,
                Array.from(this.chatIds),
              ));
          }),
          (n.shouldShowIcon = function (n) {
            var t = this,
              r = [n];
            if (
              o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated() &&
              n.isUser()
            ) {
              var a = o("WAWebApiContact").getAlternateUserWid(n);
              a != null && r.push(a);
            }
            return r.some(function (n) {
              return t.chatIds.has(e(n));
            });
          }),
          t
        );
      })(),
      u = new s();
    l.ConsumerTransparencyInfoIconModel = u;
  },
  98,
);
