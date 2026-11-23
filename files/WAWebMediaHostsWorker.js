__d(
  "WAWebMediaHostsWorker",
  [
    "WAGenericStateManager",
    "WAPromiseRaceAbort",
    "WAPromiseTimeout",
    "WAWebMediaHost",
    "WAWebMediaHostsErrors",
    "WAWebMediaHostsRouteSelection",
    "WAWebMediaHostsStaleness",
    "WAWebNoop",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 5e3;
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
        var n = t.prototype;
        return (
          (n.acceptSnapshot = function (t) {
            this.$2.set(t == null ? null : s(t));
          }),
          (n.getHostsInfo = async function (t) {
            var e = this.$2.get();
            if (
              t.forceRefresh === !0 ||
              o("WAWebMediaHostsStaleness").isExpiredOrMissing(e)
            ) {
              if (
                (await this.$3(t.signal),
                o("WAWebMediaHostsStaleness").isExpiredOrMissing(this.$2.get()))
              )
                throw new (o("WAWebMediaHostsErrors").NoMediaHostsError)(
                  "no fetched data",
                );
            } else
              o("WAWebMediaHostsStaleness").needsRefresh(e) &&
                this.$1.fireAndForget("mainthread_mediaHostsSync", "refresh");
            return this.$4(t);
          }),
          (n.$3 = async function (n) {
            var t = this,
              a = r("WAWebNoop"),
              i = new Promise(function (e) {
                a = t.$2.onSet(function () {
                  return e();
                });
              });
            this.$1.fireAndForget("mainthread_mediaHostsSync", "refresh");
            try {
              await r("WAPromiseRaceAbort")(
                o("WAPromiseTimeout")
                  .promiseTimeout(i, e)
                  .catch(r("WAWebNoop")),
                n,
              );
            } finally {
              a();
            }
          }),
          (n.$4 = function (t) {
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
      var t = new u(e);
      return ((c = t), t);
    }
    ((l.MediaHostsWorker = u),
      (l.getMediaHostsWorker = d),
      (l.createAndSetMediaHostsWorker = m));
  },
  98,
);
