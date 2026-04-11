__d(
  "WAWebImgRetryQueue",
  [
    "Promise",
    "WAAbortError",
    "WABackoffUtils",
    "WANullthrows",
    "WAPromiseRaceAbort",
    "WAResolvable",
    "WAWebIdleTaskRunner",
    "WAWebMiscErrors",
    "WAWebNetworkStatus",
    "WAWebNoop",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 20,
      u = 10,
      c = (function () {
        function t() {
          ((this.$1 = new Map()), (this.$2 = new Map()), (this.$3 = 0));
        }
        t.maxInProgressRetry = function () {
          return s;
        };
        var a = t.prototype;
        return (
          (a.enqueue = function (r) {
            var t = this.$1.get(r.key());
            if (t) {
              if (r.hasPrivacyChecks !== t.hasPrivacyChecks) {
                var a = "Img:hasPrivacyChecks shouldn't change " + r.key();
                return (e || (e = n("Promise"))).reject(a);
              }
              return (t.refCount++, t.deferred.promise);
            }
            return (
              (r.deferred = new (o("WAResolvable").Resolvable)()),
              r.refCount++,
              this.$5(r),
              r.deferred.promise
            );
          }),
          (a.remove = function (t) {
            var e = t.key();
            this.$1.delete(e);
            var n = this.$2.get(e);
            n && (n.controller.abort(), this.$2.delete(e));
          }),
          (a.$5 = function (t) {
            var e = this,
              n = t.generation;
            if ((t.generation++, n > u)) {
              var a = "Stop retrying " + t.src + " after " + u + " times";
              throw new (o("WAWebMiscErrors").GaveUpRetry)(a);
            }
            var i = t.key();
            if (n === 0) (this.$1.set(i, t), this.$6());
            else {
              var l = new AbortController(),
                s = l.signal,
                c = r("WAPromiseRaceAbort")(
                  o("WABackoffUtils").expDelaySec(n, 60, 0),
                  s,
                ).catch(o("WAAbortError").catchAbort(r("WAWebNoop")));
              (this.$2.set(t.key(), { promise: c, controller: l }),
                c.then(function () {
                  (e.$2.delete(i), s.aborted || e.$1.set(i, t), e.$6());
                }));
            }
          }),
          (a.$6 = function () {
            var e = this;
            this.$4 ||
              (this.$4 = r("WAWebNetworkStatus")
                .waitIfOffline()
                .then(function () {
                  ((e.$4 = null),
                    o("WAWebIdleTaskRunner").UIBusyTasks.enqueue(function () {
                      e.$7();
                    }));
                }));
          }),
          (a.$7 = function () {
            for (
              var e = this.$1.values(), n;
              (n = e.next()) && !n.done && !(this.$3 > t.maxInProgressRetry());
            ) {
              var o = n.value;
              this.$8(r("WANullthrows")(o));
            }
          }),
          (a.$8 = function (t) {
            var e = this;
            if (!t.inProgress) {
              if (t.deferred.resolveWasCalled()) {
                this.$1.delete(t.key());
                return;
              }
              (this.$3++,
                t
                  .sendXHR()
                  .then(function (n) {
                    (e.$1.delete(t.key()),
                      n ? t.deferred.resolve() : t.shouldRetain() && e.$5(t));
                  })
                  .catch(function (n) {
                    (e.$1.delete(t.key()), t.deferred.reject(n));
                  })
                  .finally(function () {
                    e.$3--;
                  }));
            }
          }),
          t
        );
      })();
    l.default = c;
  },
  98,
);
