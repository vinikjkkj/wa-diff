__d(
  "EBIsEbEnabledSubscriber",
  [
    "EBDeps",
    "EBIsEbEnabled",
    "I64",
    "LSEncryptedBackupsBackupTenancy",
    "LSIntEnum",
    "Promise",
    "ReQL",
    "WAPubSub",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = (function () {
        function e(e) {
          ((this.$1 = o("WAPubSub").simplePubSub()),
            (this.$4 = e),
            (this.$2 = !1));
        }
        var t = e.prototype;
        return (
          (t.initialize = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              ((this.$2 = yield o("EBIsEbEnabled").isEbEnabledLS(
                this.$4.tables,
              )),
                this.$5(this.$4));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.$6 = function (t) {
            ((this.$2 = t), this.$1.publish(t));
          }),
          (t.$5 = function (t) {
            var e = this;
            return (
              this.$3 == null &&
                (this.$3 = o("ReQL")
                  .fromTableAscending(
                    t.tables.secure_encrypted_backups_client_state,
                  )
                  .take(1)
                  .subscribe(function (t, n) {
                    (n.operation === "delete" && e.$6(!1),
                      (n.operation === "add" || n.operation === "put") &&
                        (n.value.backupTenancy != null &&
                        (s || (s = o("I64"))).equal(
                          n.value.backupTenancy,
                          (u || (u = o("LSIntEnum"))).ofNumber(
                            r("LSEncryptedBackupsBackupTenancy").PRODUCTION,
                          ),
                        )
                          ? e.$6(!0)
                          : e.$6(!1)));
                  })),
              this.$3
            );
          }),
          (t.subscribe = function (t) {
            return this.$1.subscribe(t);
          }),
          (t.isEnabled = function () {
            return this.$2;
          }),
          e
        );
      })(),
      d;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (d != null) return (e || (e = n("Promise"))).resolve();
          ((d = new c(t)), yield d.initialize());
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (d == null) {
            var e = yield o("EBDeps").getDeps().getLSDB();
            yield m(e);
          }
          return d;
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (d == null) {
            var t = yield o("EBDeps").getDeps().getLSDB();
            yield m(t);
          }
          e(d.isEnabled());
          var n = d.subscribe(e);
          return n;
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (d == null) {
            var e = yield o("EBDeps").getDeps().getLSDB();
            yield m(e);
          }
          return d.isEnabled();
        })),
        C.apply(this, arguments)
      );
    }
    ((l.initIsEbEnabledPubSub = m),
      (l.isEbEnabledSubscriber = _),
      (l.subscribeToEbChanges = g),
      (l.isEBEnabledValueFromSubscriber = y));
  },
  98,
);
