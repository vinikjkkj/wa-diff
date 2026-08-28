__d(
  "WormIDbDriver",
  [
    "FBLogger",
    "Promise",
    "WACryptoSha256",
    "WAResolvable",
    "WormIDbConsts",
    "WormIDbEARKeychain",
    "WormIDbRetry",
    "WormIDbTransaction",
    "WormIDbTypes",
    "WormIDbUtils",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3,
      u = (function () {
        function t(e, n, o, a, i, l) {
          var s = this,
            u,
            c,
            d;
          if (
            ((this.$5 = null),
            (this.$6 = []),
            (this.$11 = function () {
              s.$10.log(s.$3 + ".error.db_stale");
            }),
            (this.$12 = function () {
              s.$10.log(s.$3 + ".error.db_close");
            }),
            (this.$13 = function (e) {
              r("FBLogger")("worm")
                .catching(r("getErrorSafe")(e))
                .mustfix("Unexpected error  %s", s.$3);
            }),
            this.constructor === t)
          )
            throw r("err")(
              "WormIDbDriver is abstract: construct WormIDbDriverEarAsync or WormIDbDriverEarSync; db: " +
                n,
            );
          ((this.$2 = e),
            (this.$3 = n),
            (this.$4 = o),
            (this.safeToDeleteStores =
              (u = l == null ? void 0 : l.safeToDeleteStores) != null
                ? u
                : new Set()),
            (this.$7 = l == null ? void 0 : l.blockingErrorThreshold),
            (this.$8 =
              (c = l == null ? void 0 : l.onBlockingError) != null
                ? c
                : function () {}),
            (this.$9 =
              (d = l == null ? void 0 : l.onTransactionError) != null
                ? d
                : function () {}),
            (this.ear = a),
            (this.$10 = i));
        }
        var a = t.prototype;
        return (
          (a.getDbAlias = function () {
            return this.$3;
          }),
          (a.getSchema = function () {
            return this.$4;
          }),
          (a.openDb = function (t, n) {
            return o("WormIDbUtils").openIDb(
              this.$2,
              {
                onBecomeStale: this.$11,
                onClose: this.$12,
                onError: this.$13,
                onUpgrade: t,
              },
              n,
            );
          }),
          (a.reopenForUpgrade = function (t, n) {
            var e = t.version;
            return (t.close(), this.openDb(n, e + 1));
          }),
          (a.loadKeychain = function (a, i) {
            var t = this.$3;
            return new (e || (e = n("Promise")))(function (e, n) {
              var l = null,
                s = a.transaction(o("WormIDbTypes").EAR_STORE, "readwrite");
              ((s.oncomplete = function () {
                if (l == null) {
                  n(r("err")("EAR keychain was never read: " + t));
                  return;
                }
                e(l);
              }),
                (s.onerror = s.onabort =
                  function () {
                    return n(s.error);
                  }));
              var u = s.objectStore(o("WormIDbTypes").EAR_STORE),
                c = u.getAll();
              ((c.onsuccess = function () {
                var e,
                  t = o("WormIDbEARKeychain").reconcileKeychain(
                    (e = c.result) != null ? e : [],
                  ),
                  n = t.curVersion,
                  r = t.needNewVersion,
                  a = t.versions;
                if (r) {
                  var s = babelHelpers.extends({}, i(), { version: n + 1 });
                  (u.add(s), a.push(s));
                }
                l = { versions: a };
              }),
                (c.onerror = function () {
                  return n(c.error);
                }));
            });
          }),
          (a.openAndUpgrade = function (t) {
            throw r("err")("openAndUpgrade is not implemented: " + this.$3);
          }),
          (a.$14 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this.$5;
                if (t != null) {
                  var n;
                  return (
                    e == null ||
                      (n = e.eventFlow) == null ||
                      n.addAnnotations({ bool: { isCompetingInit: !0 } }),
                    t.promise
                  );
                }
                var a = new (o("WAResolvable").Resolvable)();
                this.$5 = a;
                var i = !1;
                this.$1 != null &&
                  (this.$1.close(), (this.$1 = null), (i = !0));
                var l = !1;
                try {
                  var s,
                    u = babelHelpers.extends(
                      {},
                      this.$4,
                      o("WormIDbTypes").sysSchema,
                    ),
                    c = JSON.stringify(u);
                  if (c == null)
                    throw r("err")(
                      "DB schema cannot be serialized: " + this.$3,
                    );
                  var d = yield o("WACryptoSha256").sha256Str(c),
                    m = yield this.openAndUpgrade({
                      eventFlow: e == null ? void 0 : e.eventFlow,
                      forceUpgrade:
                        (s = e == null ? void 0 : e.forceUpgrade) != null
                          ? s
                          : !1,
                      schema: u,
                      schemaHash: d,
                    }),
                    p = m.db,
                    _ = m.isNewDb,
                    f = m.isUpgraded;
                  ((l = f), (this.$1 = p));
                  var g = { isNewDb: _, isUpgraded: f };
                  return (a.resolve(g), g);
                } catch (e) {
                  throw (a.reject(e), e);
                } finally {
                  var h;
                  (e == null ||
                    (h = e.eventFlow) == null ||
                    h.addAnnotations({
                      bool: {
                        isClosingDb: i,
                        isCompetingInit: !1,
                        shouldUpgrade: l,
                      },
                    }),
                    (this.$5 = null));
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$15 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, a) {
                if (
                  (this.$5 != null && (yield this.$5.promise), this.$1 == null)
                )
                  throw r("err")("IDB is not initialised: " + this.$3);
                var i = new (o("WormIDbTransaction").WormIDbTransaction)(
                    this.$1.transaction(
                      e.map(function (e) {
                        return e.toString();
                      }),
                      t,
                      { durability: "relaxed" },
                    ),
                    a,
                    this.ear,
                    e,
                    this.$4,
                  ),
                  l;
                try {
                  ((l = yield n(i)), yield i.commit());
                } catch (e) {
                  var s = r("getErrorSafe")(e);
                  throw (
                    o("WormIDbConsts").IDB_ERRORS.has(s.name) || i.abort(),
                    e
                  );
                }
                return l;
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$16 = function (t) {
            var e, n, o;
            if (this.$7 != null) {
              var a = this.$7,
                i =
                  (e =
                    (n =
                      (o = t == null ? void 0 : t.name) != null
                        ? o
                        : t == null
                          ? void 0
                          : t.message) != null
                      ? n
                      : t == null
                        ? void 0
                        : t.toString()) != null
                    ? e
                    : "unknown";
              if ((this.$6.push(i), !(this.$6.length < Math.max(a, 1)))) {
                var l = this.$6[this.$6.length - 1],
                  s = this.$6.every(function (e) {
                    return e === l;
                  })
                    ? l
                    : "mixed";
                (r("FBLogger")("worm").mustfix(
                  "Unrecoverable error (%s): %s",
                  this.$3,
                  s,
                ),
                  this.$8(s),
                  (this.$6 = []));
              }
            }
          }),
          (a.$17 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, a, i) {
                var l = this;
                if (this.$1 == null) {
                  var u, m;
                  ((u = i.eventFlow) == null ||
                    u.addPoint("db_reinit_start", { bool: { isDbNull: !0 } }),
                    yield this.$14(),
                    (m = i.eventFlow) == null || m.addPoint("db_reinit_end"));
                }
                return o("WormIDbRetry").withRetry({
                  fn: (function () {
                    var s = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (s) {
                        var u = s.attempt;
                        if (u === 1) {
                          var d;
                          (l.$10.log(l.$3 + ".error.large_idb_value"),
                            r("FBLogger")("worm").warn(
                              "Retrying transaction due to large IDB value error: %s",
                              l.$3,
                            ),
                            (d = i.eventFlow) == null ||
                              d.addPoint("large_idb_value_refetch_start"));
                        }
                        var m = yield o("WormIDbRetry").withRetry({
                          fn: (function () {
                            var r = n(
                              "asyncToGeneratorRuntime",
                            ).asyncToGenerator(function* (n) {
                              var r = n.error;
                              if (r != null) {
                                var s, u;
                                ((s = i.eventFlow) == null ||
                                  s.addPoint("db_reinit_start", {
                                    bool: { isDbInvalid: !0 },
                                  }),
                                  yield l.$14({
                                    forceUpgrade:
                                      r.name ===
                                      o("WormIDbConsts").IDB_ERROR_NOT_FOUND,
                                  }),
                                  (u = i.eventFlow) == null ||
                                    u.addPoint("db_reinit_end"));
                              }
                              return l.$15(e, t, a, i);
                            });
                            function s(e) {
                              return r.apply(this, arguments);
                            }
                            return s;
                          })(),
                          maxRetries: 1,
                          shouldRetry: function (t) {
                            var e = t.error;
                            return c(e) && u === 0;
                          },
                        });
                        if (u > 0) {
                          var p;
                          (p = i.eventFlow) == null ||
                            p.addPoint("large_idb_value_refetch_end");
                        }
                        return m;
                      },
                    );
                    function u(e) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                  maxRetries: s,
                  shouldRetry: function (t) {
                    var e = t.error;
                    return d(e);
                  },
                });
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.runInTransaction = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, o) {
                var a;
                try {
                  ((a = yield this.$17(e, t, n, o)), (this.$6 = []));
                } catch (e) {
                  var i = r("getErrorSafe")(e);
                  throw (this.$9(i), this.$16(i), e);
                }
                return a;
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.close = function () {
            var e;
            (e = this.$1) == null || e.close();
          }),
          (a.init = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this;
                return yield o("WormIDbRetry").withRetry({
                  fn: function (r) {
                    var n,
                      o = r.attempt;
                    return t.$14(
                      o === 0
                        ? {
                            eventFlow:
                              (n = e == null ? void 0 : e.eventFlow) != null
                                ? n
                                : void 0,
                          }
                        : void 0,
                    );
                  },
                  maxRetries: 1,
                  shouldRetry: function (t) {
                    var e = t.error;
                    return (
                      (e == null ? void 0 : e.name) ===
                      o("WormIDbConsts").IDB_ERROR_INVALID_STATE
                    );
                  },
                });
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })();
    function c(e) {
      return (
        e.name === o("WormIDbConsts").IDB_ERROR_INVALID_STATE ||
        e.name === o("WormIDbConsts").IDB_ERROR_NOT_FOUND ||
        e.name === o("WormIDbConsts").IDB_ERROR_UNKNOWN
      );
    }
    function d(e) {
      return (
        e.message.includes(o("WormIDbConsts").LARGE_IDB_VALUE_ERROR_MSG) === !0
      );
    }
    l.WormIDbDriver = u;
  },
  98,
);
