__d(
  "WAWebSignalProtocolStoreCacheApi",
  [
    "NativeSchedulerTickStrategy",
    "TaskScheduler",
    "TaskSchedulerPriority",
    "WAPromiseDelays",
    "WASemaphore",
    "WAWebABProps",
    "asyncToGeneratorRuntime",
    "lodash",
    "structuredClone",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e() {
        var e;
        ((this.RegistrationInfo = null),
          (this.SignedPreKeyStore = new Map()),
          (this.PrekeyStore = new Map()),
          (this.SessionStore = new Map()),
          (this.IdentityStore = new Map()),
          (this.SenderKeyStore = new Map()),
          (this.Mutex = {
            session: new (e = o("WASemaphore")).Semaphore(),
            identity: new e.Semaphore(),
            senderKey: new e.Semaphore(),
            preKey: new e.Semaphore(),
          }),
          (this.Dirty = {
            session: new Set(),
            identity: new Set(),
            senderKey: new Set(),
            preKey: new Set(),
          }));
      }
      var t = e.prototype;
      return (
        (t.$1 = function () {
          var e = this,
            t = [],
            n = [];
          return (
            this.Dirty.session.forEach(function (o) {
              var a = e.SessionStore.get(o);
              a &&
                (a.deleted
                  ? n.push(o)
                  : t.push({
                      address: o,
                      session: r("lodash").cloneDeep(a.session),
                    }));
            }),
            { update: t, remove: n }
          );
        }),
        (t.$2 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = this,
              t = [],
              n = [],
              a = o("WAWebABProps").getABPropConfigValue(
                "web_anr_async_msg_send_handler",
              ),
              i = function (i) {
                var o = e.SessionStore.get(i);
                o &&
                  (o.deleted
                    ? n.push(i)
                    : t.push({
                        address: i,
                        session:
                          r("structuredClone") != null && a
                            ? r("structuredClone")(o.session)
                            : r("lodash").cloneDeep(o.session),
                      }));
              },
              l = o("WAWebABProps").getABPropConfigValue(
                "wmi_worker_scheduler_web",
              );
            if (l) {
              var s = o("TaskScheduler").taskScheduler(
                "signal",
                { concurrency: 1 },
                o(
                  "NativeSchedulerTickStrategy",
                ).makeNativeSchedulerTickStrategy(),
              );
              for (var c of this.Dirty.session)
                (i(c), yield s.yield(o("TaskSchedulerPriority").HIGH_PRIORITY));
            } else {
              var d = a ? 20 : u,
                m = self.performance.now();
              for (var p of this.Dirty.session)
                (self.performance.now() - m > d &&
                  (yield o("WAPromiseDelays").releaseToEventLoop(),
                  (m = self.performance.now())),
                  i(p));
            }
            return { update: t, remove: n };
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$3 = function () {
          var e = this,
            t = [];
          return (
            this.Dirty.senderKey.forEach(function (n) {
              var o = e.SenderKeyStore.get(n);
              if (o) {
                var a = n.split("::");
                a.length === 2 &&
                  t.push({
                    senderKeyName: n,
                    senderId: a[1],
                    senderKey: r("lodash").cloneDeep(o),
                  });
              }
            }),
            t
          );
        }),
        (t.$4 = function () {
          var e = this,
            t = [],
            n = [];
          return (
            this.Dirty.identity.forEach(function (r) {
              var o = e.IdentityStore.get(r);
              o &&
                (o.deleted
                  ? n.push(r)
                  : t.push({
                      identifier: r,
                      identityKey: o.identityKey,
                      rowId: o.rowId,
                      sentAddonRowId: o.sentAddonRowId,
                    }));
            }),
            { update: t, remove: n }
          );
        }),
        (t.$5 = function () {
          var e = this,
            t = [];
          return (
            this.Dirty.preKey.forEach(function (n) {
              var r = e.PrekeyStore.get(n);
              r != null && r.deleted && t.push(parseInt(n, 10));
            }),
            t
          );
        }),
        (t.generateCacheUpdate = function () {
          var e = this.$4(),
            t = this.$1(),
            n = {
              sessionUpdate: t.update,
              sessionRemove: t.remove,
              identityUpdate: e.update,
              identityRemove: e.remove,
              senderKeyUpdate: this.$3(),
              preKeyRemove: this.$5(),
            };
          return n;
        }),
        (t.generateCacheUpdateThrottled = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = this.$4(),
              t = yield this.$2(),
              n = {
                sessionUpdate: t.update,
                sessionRemove: t.remove,
                identityUpdate: e.update,
                identityRemove: e.remove,
                senderKeyUpdate: this.$3(),
                preKeyRemove: this.$5(),
              };
            return n;
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.clearDirty = function () {
          this.Dirty = {
            session: new Set(),
            identity: new Set(),
            senderKey: new Set(),
            preKey: new Set(),
          };
        }),
        (t.clear = function () {
          ((this.RegistrationInfo = null),
            this.SignedPreKeyStore.clear(),
            this.PrekeyStore.clear(),
            this.SessionStore.clear(),
            this.IdentityStore.clear(),
            this.SenderKeyStore.clear(),
            this.clearDirty());
        }),
        e
      );
    })();
    function s(e) {}
    var u = 100;
    l.SignalStoreCache = e;
  },
  98,
);
