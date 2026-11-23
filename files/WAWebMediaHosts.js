__d(
  "WAWebMediaHosts",
  [
    "WAAbortError",
    "WALogger",
    "WAMemoizeConcurrent",
    "WAWebBackendErrors",
    "WAWebMediaHost",
    "WAWebMediaHostsErrors",
    "WAWebMediaHostsRawStateManager",
    "WAWebMediaHostsRouteSelection",
    "WAWebMediaHostsStaleness",
    "WAWebNormalizeStack",
    "WAWebQueryMediaConnsBridge",
    "WAWebUserPrefsMultiDevice",
    "getErrorSafe",
    "isEmptyObject",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["forceRefresh"],
      s = ["message", "name", "stack"],
      u,
      c,
      d,
      m,
      p,
      _ = (function () {
        function t() {
          var e = this;
          ((this.$4 = !1),
            (this.$9 = r("WAMemoizeConcurrent")(
              function () {
                return "all";
              },
              async function (t) {
                var n = t.signal;
                try {
                  var a = await o(
                    "WAWebQueryMediaConnsBridge",
                  ).sendQueryMediaConn(n);
                  ((e.$1 = e.$8(a)),
                    o("WAWebUserPrefsMultiDevice").setMms4Conn(a),
                    o(
                      "WAWebMediaHostsRawStateManager",
                    ).mediaHostsRawStateManager.set(a),
                    (e.$3 = null));
                } catch (t) {
                  var i = r("getErrorSafe")(t);
                  if (i instanceof o("WAWebBackendErrors").E507) {
                    var l;
                    ((e.$1 = e.$2),
                      (e.$2 = null),
                      (e.$4 = !0),
                      self.setTimeout(
                        async function () {
                          (await e.$6({ signal: n }), (e.$4 = !1));
                        },
                        (l = i.backoff) != null ? l : void 0,
                      ));
                    return;
                  }
                  if (
                    ((e.$1 = null),
                    (e.$3 = i),
                    i.name === o("WAAbortError").ABORT_ERROR)
                  ) {
                    o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "mediaHosts.sendQueryMediaConn aborted",
                        ])),
                    );
                    return;
                  }
                  (o("WALogger")
                    .WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "mediaHosts.sendQueryMediaConn error: ",
                          "",
                        ])),
                      g(i),
                    )
                    .verbose(),
                    o("WALogger")
                      .ERROR(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed!",
                          ])),
                      )
                      .sendLogs("Error fetching mms hosts"));
                }
              },
            )),
            this.$5());
        }
        var n = t.prototype;
        return (
          (n.forceRefresh = function (t) {
            if (this.$4) return Promise.resolve(!1);
            var e = { signal: t, forceRefresh: !0 };
            return this.$6(e);
          }),
          (n.getCachedHostsInfo = function (t) {
            var e = this;
            if (!this.$4) {
              var n = {
                signal: t.signal || new AbortController().signal,
                forceRefresh: !1,
              };
              self.setTimeout(async function () {
                (await e.$6(n), (e.$4 = !1));
              }, 0);
            }
            return this.$7(t);
          }),
          (n.maybeLoadMediaConnFromStorage = function () {
            var e = o("WAWebUserPrefsMultiDevice").getMms4Conn();
            if (e != null)
              try {
                ((this.$1 = this.$8(e)),
                  o(
                    "WAWebMediaHostsRawStateManager",
                  ).mediaHostsRawStateManager.set(e));
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to init media conn from storage",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("media-conn-failed-to-load");
              }
          }),
          (n.getHostsInfo = async function (t) {
            var e = t.directPath,
              n = t.encFilehash,
              r = t.forceRefresh,
              o = r === void 0 ? !1 : r,
              a = t.operation,
              i = t.signal,
              l = t.type;
            if (!this.$4) {
              var s = {
                signal: i || new AbortController().signal,
                forceRefresh: o,
              };
              await this.$6(s);
            }
            return this.$7({
              directPath: e,
              encFilehash: n,
              operation: a,
              type: l,
            });
          }),
          (n.getHostsInfoByBucket = async function (t) {
            var e = t.forceRefresh,
              n = e === void 0 ? !1 : e,
              r = t.preferredBuckets,
              a = t.signal;
            if (!this.$4) {
              var i = {
                signal: a || new AbortController().signal,
                forceRefresh: n,
              };
              await this.$6(i);
            }
            if (!this.$1)
              throw new (o("WAWebMediaHostsErrors").NoMediaHostsError)(
                "no fetched data",
              );
            var l = this.$1,
              s = l.auth,
              u = l.hosts;
            if (!u.length)
              throw new (o("WAWebMediaHostsErrors").NoMediaHostsError)(
                "no selected host",
              );
            var c = new Map(
              r.map(function (e) {
                return [e, null];
              }),
            );
            u.forEach(function (e) {
              var t,
                n =
                  (t = e.downloadBuckets) == null
                    ? void 0
                    : t.find(function (e) {
                        return c.has(e);
                      });
              n != null && c.set(n, e);
            });
            var d, m;
            for (var p of c.values())
              if (p != null) {
                if (!d) d = p;
                else if (!m) {
                  m = p;
                  break;
                }
              }
            if ((!d && !m ? ((d = u[0]), (m = u[1])) : m || (m = u[0]), !d))
              throw new (o("WAWebMediaHostsErrors").NoMediaHostsError)(
                "no selected host",
              );
            return { auth: s, selectedHost: d, fallbackHost: m };
          }),
          (n.$8 = function (t) {
            var e = new Date(t.queryStartTime);
            return {
              auth: t.auth,
              authExpirationTime: new Date(e.getTime() + t.authTTL),
              authTTL: t.authTTL,
              hosts: t.hosts.map(function (e) {
                return new (o("WAWebMediaHost").MediaHost)(e);
              }),
              hostsRefreshTime: new Date(e.getTime() + t.ttl),
              queryStartTime: e,
              maxBuckets: t.maxBuckets,
            };
          }),
          (n.$10 = function () {
            return o("WAWebMediaHostsStaleness").isExpiredOrMissing(this.$1);
          }),
          (n.$7 = function (t) {
            if (!this.$1)
              throw new (o("WAWebMediaHostsErrors").NoMediaHostsError)(
                "no fetched data",
              );
            var e = t.encFilehash,
              n = t.operation,
              r = t.type,
              a = this.$1,
              i = a.auth,
              l = a.hosts,
              s = a.maxBuckets,
              u = o("WAWebMediaHostsRouteSelection").routeSelection({
                encFilehash: e,
                hosts: l,
                operation: n,
                type: r,
                maxBuckets: s,
              }),
              c = u.fallbackHost,
              d = u.selectedHost;
            if (!d)
              throw new (o("WAWebMediaHostsErrors").NoMediaHostsError)(
                "no selected host",
              );
            return { auth: i, selectedHost: d, fallbackHost: c };
          }),
          (n.$11 = function () {
            return o("WAWebMediaHostsStaleness").needsRefresh(this.$1);
          }),
          (n.$6 = async function (n) {
            var t = n.forceRefresh,
              r = babelHelpers.objectWithoutPropertiesLoose(n, e);
            return this.$10() || t
              ? (this.$5(), await this.$9(r), !0)
              : (this.$11() &&
                  this.$9(r).catch(function () {
                    o("WALogger")
                      .ERROR(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "[media-hosts] failed to refresh and fetch",
                          ])),
                      )
                      .sendLogs("media-hosts-failed-to-refresh-and-fetch", {
                        sampling: 0.01,
                      });
                  }),
                !1);
          }),
          (n._reset = function () {
            this.$5();
          }),
          (n.$5 = function () {
            ((this.$2 = this.$1), (this.$1 = null), (this.$3 = null));
          }),
          t
        );
      })(),
      f = new _();
    function g(e) {
      var t = e.message,
        n = e.name,
        a = e.stack,
        i = babelHelpers.objectWithoutPropertiesLoose(e, s),
        l = o("WAWebNormalizeStack").normalizeStack(e),
        u = l.slice(
          l.indexOf(`
`) + 1,
        ),
        c = r("isEmptyObject")(i)
          ? ""
          : " " +
            JSON.stringify(i, function (e, t) {
              return e && typeof t == "object" ? String(t) : t;
            });
      return (
        (e.name || "Error") +
        ": " +
        e.message +
        c +
        `
` +
        u
      );
    }
    l.mediaHosts = f;
  },
  98,
);
