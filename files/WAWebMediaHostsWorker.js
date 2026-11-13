__d(
  "WAWebMediaHostsWorker",
  [
    "Promise",
    "WAGenericStateManager",
    "WAPromiseRaceAbort",
    "WAPromiseTimeout",
    "WAWebMediaHost",
    "WAWebMediaHostsErrors",
    "WAWebMediaHostsRouteSelection",
    "WAWebMediaHostsStaleness",
    "WAWebNoop",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 5e3;
    function u(e) {
      var t = new Date(e.queryStartTime);
      return {
        auth: e.auth,
        authTTL: e.authTTL,
        authExpirationTime: new Date(t.getTime() + e.authTTL),
        hosts: e.hosts.map(function (e) {
          return new (o("WAWebMediaHost").MediaHost)(e);
        }),
        hostsRefreshTime: new Date(t.getTime() + e.ttl),
        queryStartTime: t,
        maxBuckets: e.maxBuckets,
      };
    }
    var c = (function () {
        function t(e) {
          ((this.$1 = e),
            (this.$2 = new (o("WAGenericStateManager").WAGenericStateManager)(
              null,
            )));
        }
        var a = t.prototype;
        return (
          (a.acceptSnapshot = function (t) {
            this.$2.set(t == null ? null : u(t));
          }),
          (a.getHostsInfo = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this.$2.get();
                if (
                  e.forceRefresh === !0 ||
                  o("WAWebMediaHostsStaleness").isExpiredOrMissing(t)
                ) {
                  if (
                    (yield this.$3(e.signal),
                    o("WAWebMediaHostsStaleness").isExpiredOrMissing(
                      this.$2.get(),
                    ))
                  )
                    throw new (o("WAWebMediaHostsErrors").NoMediaHostsError)(
                      "no fetched data",
                    );
                } else
                  o("WAWebMediaHostsStaleness").needsRefresh(t) &&
                    this.$1.fireAndForget(
                      "mainthread_mediaHostsSync",
                      "refresh",
                    );
                return this.$4(e);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$3 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a = this,
                  i = r("WAWebNoop"),
                  l = new (e || (e = n("Promise")))(function (e) {
                    i = a.$2.onSet(function () {
                      return e();
                    });
                  });
                this.$1.fireAndForget("mainthread_mediaHostsSync", "refresh");
                try {
                  yield r("WAPromiseRaceAbort")(
                    o("WAPromiseTimeout")
                      .promiseTimeout(l, s)
                      .catch(r("WAWebNoop")),
                    t,
                  );
                } finally {
                  i();
                }
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.$4 = function (t) {
            var e = this.$2.get();
            if (e == null || e.hosts.length === 0)
              throw new (o("WAWebMediaHostsErrors").NoMediaHostsError)(
                "no fetched data",
              );
            var n = o("WAWebMediaHostsRouteSelection").routeSelection({
                encFilehash: t.encFilehash,
                hosts: e.hosts,
                operation: t.operation,
                type: t.type,
                maxBuckets: e.maxBuckets,
              }),
              r = n.fallbackHost,
              a = n.selectedHost;
            if (!a)
              throw new (o("WAWebMediaHostsErrors").NoMediaHostsError)(
                "no selected host",
              );
            return { auth: e.auth, selectedHost: a, fallbackHost: r };
          }),
          t
        );
      })(),
      d = null;
    function m() {
      return r("nullthrows")(d, "MediaHostsWorker is not initialised");
    }
    function p(e) {
      var t = new c(e);
      return ((d = t), t);
    }
    ((l.MediaHostsWorker = c),
      (l.getMediaHostsWorker = m),
      (l.createAndSetMediaHostsWorker = p));
  },
  98,
);
