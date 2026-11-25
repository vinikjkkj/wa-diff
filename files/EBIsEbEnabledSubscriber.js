__d(
  "EBIsEbEnabledSubscriber",
  [
    "EBDeps",
    "EBIsEbEnabled",
    "I64",
    "LSEncryptedBackupsBackupTenancy",
    "LSIntEnum",
    "ReQL",
    "WAPubSub",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (function () {
        function t(e) {
          ((this.$1 = o("WAPubSub").simplePubSub()),
            (this.$4 = e),
            (this.$2 = !1));
        }
        var n = t.prototype;
        return (
          (n.initialize = async function () {
            ((this.$2 = await o("EBIsEbEnabled").isEbEnabledLS(this.$4.tables)),
              this.$5(this.$4));
          }),
          (n.$6 = function (t) {
            ((this.$2 = t), this.$1.publish(t));
          }),
          (n.$5 = function (n) {
            var t = this;
            return (
              this.$3 == null &&
                (this.$3 = o("ReQL")
                  .fromTableAscending(
                    n.tables.secure_encrypted_backups_client_state,
                  )
                  .take(1)
                  .subscribe(function (n, a) {
                    (a.operation === "delete" && t.$6(!1),
                      (a.operation === "add" || a.operation === "put") &&
                        (a.value.backupTenancy != null &&
                        (e || (e = o("I64"))).equal(
                          a.value.backupTenancy,
                          (s || (s = o("LSIntEnum"))).ofNumber(
                            r("LSEncryptedBackupsBackupTenancy").PRODUCTION,
                          ),
                        )
                          ? t.$6(!0)
                          : t.$6(!1)));
                  })),
              this.$3
            );
          }),
          (n.subscribe = function (t) {
            return this.$1.subscribe(t);
          }),
          (n.isEnabled = function () {
            return this.$2;
          }),
          t
        );
      })(),
      c;
    async function d(e) {
      if (c != null) return Promise.resolve();
      ((c = new u(e)), await c.initialize());
    }
    async function m() {
      if (c == null) {
        var e = await o("EBDeps").getDeps().getLSDB();
        await d(e);
      }
      return c;
    }
    async function p(e) {
      if (c == null) {
        var t = await o("EBDeps").getDeps().getLSDB();
        await d(t);
      }
      e(c.isEnabled());
      var n = c.subscribe(e);
      return n;
    }
    ((l.initIsEbEnabledPubSub = d),
      (l.isEbEnabledSubscriber = m),
      (l.subscribeToEbChanges = p));
  },
  98,
);
