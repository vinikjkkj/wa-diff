__d(
  "WAWebMediaHostsWorker",
  [
    "Promise",
    "WAGenericStateManager",
    "WAWebMediaHost",
    "WAWebMediaHostsErrors",
    "WAWebMediaHostsRouteSelection",
    "WAWebMediaHostsStaleness",
    "WAWebNoop",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
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
    var u = (function () {
        function t(e) {
          ((this.$1 = e),
            (this.$2 = new (o("WAGenericStateManager").WAGenericStateManager)(
              null,
            )));
        }
        var a = t.prototype;
        return (
          (a.acceptSnapshot = function (t) {
            this.$2.set(t == null ? null : s(t));
          }),
          (a.getHostsInfo = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this.$2.get();
                return (
                  e.forceRefresh === !0 ||
                  o("WAWebMediaHostsStaleness").isExpiredOrMissing(t)
                    ? yield this.$3()
                    : o("WAWebMediaHostsStaleness").needsRefresh(t) &&
                      this.$1.fireAndForget(
                        "mainthread_mediaHostsSync",
                        "refresh",
                      ),
                  this.$4(e)
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$3 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = this,
                o = this.$2.get();
              (yield this.$1.sendAndReceive(
                "mainthread_mediaHostsSync",
                "refresh",
              ),
                this.$2.get() === o &&
                  (yield new (e || (e = n("Promise")))(function (e) {
                    var n = r("WAWebNoop");
                    n = t.$2.onSet(function () {
                      (n(), e());
                    });
                  })));
            });
            function o() {
              return t.apply(this, arguments);
            }
            return o;
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
      c = null;
    function d() {
      return r("nullthrows")(c, "MediaHostsWorker is not initialised");
    }
    function m(e) {
      c = new u(e);
    }
    ((l.MediaHostsWorker = u),
      (l.getMediaHostsWorker = d),
      (l.createAndSetMediaHostsWorker = m));
  },
  98,
);
