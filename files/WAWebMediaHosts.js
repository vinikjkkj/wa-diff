__d(
  "WAWebMediaHosts",
  [
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAMemoizeConcurrent",
    "WAWebBackendErrors",
    "WAWebMediaHost",
    "WAWebMediaHostsErrors",
    "WAWebMediaHostsRouteSelection",
    "WAWebNormalizeStack",
    "WAWebQueryMediaConnsBridge",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
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
      _,
      f = (function () {
        function t() {
          var e = this;
          ((this._locked = !1),
            (this._fetch = r("WAMemoizeConcurrent")(
              function () {
                return "all";
              },
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var r = t.signal;
                    try {
                      var a = yield o(
                        "WAWebQueryMediaConnsBridge",
                      ).sendQueryMediaConn(r);
                      ((e._data = e._createMediaConnData(a)),
                        o("WAWebUserPrefsMultiDevice").setMms4Conn(a),
                        (e._err = null));
                    } catch (t) {
                      var i = t;
                      if (i instanceof o("WAWebBackendErrors").E507) {
                        var l;
                        ((e._data = e._previousData),
                          (e._previousData = null),
                          (e._locked = !0),
                          self.setTimeout(
                            n("asyncToGeneratorRuntime").asyncToGenerator(
                              function* () {
                                (yield e._refreshIfStale({ signal: r }),
                                  (e._locked = !1));
                              },
                            ),
                            (l = i.backoff) != null ? l : void 0,
                          ));
                        return;
                      }
                      if (
                        ((e._data = null),
                        (e._err = i),
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
                          h(i),
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
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            )),
            this._reset());
        }
        var a = t.prototype;
        return (
          (a.forceRefresh = function (t) {
            if (this._locked) return (_ || (_ = n("Promise"))).resolve(!1);
            var e = { signal: t, forceRefresh: !0 };
            return this._refreshIfStale(e);
          }),
          (a.getCachedHostsInfo = function (t) {
            var e = this;
            if (!this._locked) {
              var r = {
                signal: t.signal || new AbortController().signal,
                forceRefresh: !1,
              };
              self.setTimeout(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  (yield e._refreshIfStale(r), (e._locked = !1));
                }),
                0,
              );
            }
            return this._getPreferredHostsInfo(t);
          }),
          (a.maybeLoadMediaConnFromStorage = function () {
            var e = o("WAWebUserPrefsMultiDevice").getMms4Conn();
            if (e != null)
              try {
                this._data = this._createMediaConnData(e);
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to init media conn from storage: ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("media-conn-failed-to-load");
              }
          }),
          (a.getHostsInfo = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.directPath,
                  n = e.encFilehash,
                  r = e.forceRefresh,
                  o = r === void 0 ? !1 : r,
                  a = e.operation,
                  i = e.signal,
                  l = e.type;
                if (!this._locked) {
                  var s = {
                    signal: i || new AbortController().signal,
                    forceRefresh: o,
                  };
                  yield this._refreshIfStale(s);
                }
                return this._getPreferredHostsInfo({
                  directPath: t,
                  encFilehash: n,
                  operation: a,
                  type: l,
                });
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.getHostsInfoByBucket = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.forceRefresh,
                  n = t === void 0 ? !1 : t,
                  r = e.preferredBuckets,
                  a = e.signal;
                if (!this._locked) {
                  var i = {
                    signal: a || new AbortController().signal,
                    forceRefresh: n,
                  };
                  yield this._refreshIfStale(i);
                }
                if (!this._data)
                  throw new (o("WAWebMediaHostsErrors").NoMediaHostsError)(
                    "no fetched data",
                  );
                var l = this._data,
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
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a._createMediaConnData = function (t) {
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
          (a._isExpiredOrMissing = function () {
            if (!this._data) return !0;
            var e = this._data;
            return new Date() >= e.authExpirationTime;
          }),
          (a._getPreferredHostsInfo = function (t) {
            if (!this._data)
              throw new (o("WAWebMediaHostsErrors").NoMediaHostsError)(
                "no fetched data",
              );
            var e = t.encFilehash,
              n = t.operation,
              r = t.type,
              a = this._data,
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
          (a._needsRefresh = function () {
            if (!this._data) return !0;
            var e = this._data;
            if (new Date() >= e.hostsRefreshTime) return !0;
            var t = e.authTTL,
              n = e.queryStartTime,
              r = Math.floor(t * 0.8),
              o = new Date(n.getTime() + r);
            return new Date() >= o;
          }),
          (a._refreshIfStale = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = t.forceRefresh,
                  r = babelHelpers.objectWithoutPropertiesLoose(t, e);
                return this._isExpiredOrMissing() || n
                  ? (this._reset(), yield this._fetch(r), !0)
                  : (this._needsRefresh() &&
                      this._fetch(r).catch(function () {
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
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a._reset = function () {
            ((this._previousData = this._data),
              (this._data = null),
              (this._err = null));
          }),
          t
        );
      })(),
      g = new f();
    function h(e) {
      var t = e.message,
        n = e.name,
        a = e.stack,
        i = babelHelpers.objectWithoutPropertiesLoose(e, s),
        l = o("WAWebNormalizeStack").normalizeStack(e),
        u = l.slice(l.indexOf("\n") + 1),
        c = r("isEmptyObject")(i)
          ? ""
          : " " +
            JSON.stringify(i, function (e, t) {
              return e && typeof t == "object" ? String(t) : t;
            });
      return (e.name || "Error") + ": " + e.message + c + "\n" + u;
    }
    l.mediaHosts = g;
  },
  98,
);
