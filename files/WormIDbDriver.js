__d(
  "WormIDbDriver",
  [
    "FBLogger",
    "Promise",
    "WACryptoSha256",
    "WAResolvable",
    "WATimeUtils",
    "WormIDbConsts",
    "WormIDbRetry",
    "WormIDbTransaction",
    "WormIDbTypes",
    "WormIDbUpgrade",
    "WormIDbUtils",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3,
      u = (function () {
        function t(e, t, n, o, a, i) {
          var l = this,
            s,
            u,
            c;
          ((this.$5 = null),
            (this.$8 = []),
            (this.$13 = function () {
              l.$12.log(l.$3 + ".error.db_stale");
            }),
            (this.$14 = function () {
              l.$12.log(l.$3 + ".error.db_close");
            }),
            (this.$15 = function (e) {
              r("FBLogger")("worm")
                .catching(r("getErrorSafe")(e))
                .mustfix("Unexpected error  %s", l.$3);
            }),
            (this.$2 = e),
            (this.$3 = t),
            (this.$4 = n),
            (this.$6 =
              (s = i == null ? void 0 : i.safeToDeleteStores) != null
                ? s
                : new Set()),
            (this.$9 = i == null ? void 0 : i.blockingErrorThreshold),
            (this.$10 =
              (u = i == null ? void 0 : i.onBlockingError) != null
                ? u
                : function () {}),
            (this.$11 =
              (c = i == null ? void 0 : i.onTransactionError) != null
                ? c
                : function () {}),
            (this.$7 = o),
            (this.$12 = a));
        }
        var a = t.prototype;
        return (
          (a.getDbAlias = function () {
            return this.$3;
          }),
          (a.getSchema = function () {
            return this.$4;
          }),
          (a.$16 = function () {
            return r("justknobx")._("4893");
          }),
          (a.$17 = (function () {
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
                    this.$7,
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
          (a.$18 = function (t) {
            var e, n, o;
            if (this.$9 != null) {
              var a = this.$9,
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
              if ((this.$8.push(i), !(this.$8.length < Math.max(a, 1)))) {
                var l = this.$8[this.$8.length - 1],
                  s = this.$8.every(function (e) {
                    return e === l;
                  })
                    ? l
                    : "mixed";
                (r("FBLogger")("worm").mustfix(
                  "Unrecoverable error (%s): %s",
                  this.$3,
                  s,
                ),
                  this.$10(s),
                  (this.$8 = []));
              }
            }
          }),
          (a.$19 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, a, i) {
                var l = this;
                if (this.$1 == null) {
                  var u, c;
                  ((u = i.eventFlow) == null ||
                    u.addPoint("db_reinit_start", { bool: { isDbNull: !0 } }),
                    yield this.$20(),
                    (c = i.eventFlow) == null || c.addPoint("db_reinit_end"));
                }
                if (this.$16())
                  return o("WormIDbRetry").withRetry({
                    fn: (function () {
                      var s = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (s) {
                          var u = s.attempt;
                          if (u === 1) {
                            var c;
                            (l.$12.log(l.$3 + ".error.large_idb_value"),
                              r("FBLogger")("worm").warn(
                                "Retrying transaction due to large IDB value error: %s",
                                l.$3,
                              ),
                              (c = i.eventFlow) == null ||
                                c.addPoint("large_idb_value_refetch_start"));
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
                                    yield l.$20({
                                      forceUpgrade:
                                        r.name ===
                                        o("WormIDbConsts").IDB_ERROR_NOT_FOUND,
                                    }),
                                    (u = i.eventFlow) == null ||
                                      u.addPoint("db_reinit_end"));
                                }
                                return l.$17(e, t, a, i);
                              });
                              function s(e) {
                                return r.apply(this, arguments);
                              }
                              return s;
                            })(),
                            maxRetries: 1,
                            shouldRetry: function (t) {
                              var e = t.error;
                              return d(e) && u === 0;
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
                      return m(e);
                    },
                  });
                var p;
                try {
                  p = yield this.$17(e, t, a, i);
                } catch (n) {
                  var _ = r("getErrorSafe")(n);
                  if (d(_)) return this.$21(e, t, a, i, _);
                  if (m(_)) return this.$22(e, t, a, i, n);
                  throw n;
                }
                return p;
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$21 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r, a) {
                var i, l;
                return (
                  (i = r.eventFlow) == null ||
                    i.addPoint("db_reinit_start", {
                      bool: { isDbInvalid: !0 },
                    }),
                  yield this.$20({
                    forceUpgrade:
                      a.name === o("WormIDbConsts").IDB_ERROR_NOT_FOUND,
                  }),
                  (l = r.eventFlow) == null || l.addPoint("db_reinit_end"),
                  this.$17(e, t, n, r)
                );
              },
            );
            function t(t, n, r, o, a) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$22 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, o, a) {
                var i;
                (this.$12.log(this.$3 + ".error.large_idb_value"),
                  r("FBLogger")("worm").warn(
                    "Retrying transaction due to large IDB value error: %s",
                    this.$3,
                  ),
                  (i = o.eventFlow) == null ||
                    i.addPoint("large_idb_value_refetch_start"));
                for (var l = a, u = 0; u < s; u++)
                  try {
                    var c,
                      d = yield this.$17(e, t, n, o);
                    return (
                      (c = o.eventFlow) == null ||
                        c.addPoint("large_idb_value_refetch_end"),
                      d
                    );
                  } catch (e) {
                    var p = r("getErrorSafe")(e);
                    if (m(p)) l = e;
                    else throw e;
                  }
                throw l;
              },
            );
            function t(t, n, r, o, a) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.runInTransaction = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, o) {
                var a;
                try {
                  ((a = yield this.$19(e, t, n, o)), (this.$8 = []));
                } catch (e) {
                  var i = r("getErrorSafe")(e);
                  throw (this.$11(i), this.$18(i), e);
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
                if (this.$16())
                  return yield o("WormIDbRetry").withRetry({
                    fn: function (r) {
                      var n,
                        o = r.attempt;
                      return t.$20(
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
                var n;
                try {
                  var a;
                  n = yield this.$20({
                    eventFlow:
                      (a = e == null ? void 0 : e.eventFlow) != null
                        ? a
                        : void 0,
                  });
                } catch (e) {
                  var i = r("getErrorSafe")(e);
                  if (
                    (i == null ? void 0 : i.name) ===
                    o("WormIDbConsts").IDB_ERROR_INVALID_STATE
                  )
                    n = yield this.$20();
                  else throw e;
                }
                return n;
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$23 = function (t, n) {
            var e = t.version;
            return (
              t.close(),
              o("WormIDbUtils").openIDb(
                this.$2,
                {
                  onBecomeStale: this.$13,
                  onClose: this.$14,
                  onError: this.$15,
                  onUpgrade: function (t, r) {
                    return o("WormIDbUpgrade").upgradeDb(
                      t,
                      r,
                      o("WormIDbTypes").sysSchema,
                      n,
                      {
                        isNewDbInstance: !1,
                        maybeEar: null,
                        onlyCreateNewStores: !0,
                        safeToDeleteStores: new Set(),
                      },
                    );
                  },
                },
                e + 1,
              )
            );
          }),
          (a.$20 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  n = !1;
                if (this.$5) return ((n = !0), this.$5.promise);
                this.$5 = new (o("WAResolvable").Resolvable)();
                var a = !1;
                this.$1 != null &&
                  (this.$1.close(), (this.$1 = null), (a = !0));
                var i = !0;
                try {
                  var l,
                    s,
                    u,
                    c,
                    d = babelHelpers.extends(
                      {},
                      this.$4,
                      o("WormIDbTypes").sysSchema,
                    ),
                    m = JSON.stringify(d);
                  if (m == null)
                    throw r("err")(
                      "DB schema cannot be serialized: " + this.$3,
                    );
                  var p = yield o("WACryptoSha256").sha256Str(m),
                    _ = null,
                    f = yield o("WormIDbUtils").openIDb(this.$2, {
                      onBecomeStale: this.$13,
                      onClose: this.$14,
                      onError: this.$15,
                      onUpgrade: function (n, r) {
                        return (
                          (_ = { isNewDb: !0, shouldUpgrade: !1 }),
                          o("WormIDbUpgrade").upgradeDb(n, r, d, p, {
                            isNewDbInstance: !0,
                            maybeEar: null,
                            onlyCreateNewStores: !1,
                            safeToDeleteStores: t.$6,
                          })
                        );
                      },
                    });
                  try {
                    if (
                      Object.keys(o("WormIDbTypes").sysSchema).some(
                        function (e) {
                          return f.objectStoreNames.contains(e) === !1;
                        },
                      )
                    ) {
                      var g, h;
                      (e == null ||
                        (g = e.eventFlow) == null ||
                        g.addPoint("ear_schema_recovery_start"),
                        (f = yield this.$23(f, p)),
                        e == null ||
                          (h = e.eventFlow) == null ||
                          h.addPoint("ear_schema_recovery_end"));
                    }
                  } catch (t) {
                    var y;
                    (e == null ||
                      (y = e.eventFlow) == null ||
                      y.addPoint("ear_schema_recovery_fail"),
                      r("FBLogger")("worm")
                        .catching(r("getErrorSafe")(t))
                        .mustfix("EAR initialization error"));
                  }
                  ((this.$1 = f),
                    e == null ||
                      (l = e.eventFlow) == null ||
                      l.addPoint("ear_init_start"));
                  try {
                    var C, b, v;
                    yield this.$24(
                      (C = (b = _) == null ? void 0 : b.isNewDb) != null
                        ? C
                        : !1,
                      {
                        eventFlow:
                          (v = e == null ? void 0 : e.eventFlow) != null
                            ? v
                            : void 0,
                      },
                    );
                  } catch (t) {
                    var S;
                    throw (
                      e == null ||
                        (S = e.eventFlow) == null ||
                        S.addPoint("ear_init_err"),
                      r("FBLogger")("worm")
                        .catching(r("getErrorSafe")(t))
                        .mustfix("EAR initialization error"),
                      t
                    );
                  }
                  e == null ||
                    (s = e.eventFlow) == null ||
                    s.addPoint("ear_init_end");
                  var R =
                    _ != null
                      ? _
                      : yield o("WormIDbUpgrade").shouldUpgradeDb(f, p);
                  if (
                    ((i =
                      R.shouldUpgrade ||
                      ((u = e == null ? void 0 : e.forceUpgrade) != null
                        ? u
                        : !1)),
                    i)
                  ) {
                    this.$1 = null;
                    var L = f.version;
                    (f.close(),
                      (this.$1 = yield o("WormIDbUtils").openIDb(
                        this.$2,
                        {
                          onBecomeStale: this.$13,
                          onClose: this.$14,
                          onError: this.$15,
                          onUpgrade: function (n, r) {
                            return o("WormIDbUpgrade").upgradeDb(n, r, d, p, {
                              isNewDbInstance: R.isNewDb,
                              maybeEar: t.$7,
                              onlyCreateNewStores: !1,
                              safeToDeleteStores: t.$6,
                            });
                          },
                        },
                        L + 1,
                      )));
                  }
                  var E = { isNewDb: R.isNewDb, isUpgraded: i };
                  return ((c = this.$5) == null || c.resolve(E), E);
                } catch (e) {
                  var k;
                  throw ((k = this.$5) == null || k.reject(e), e);
                } finally {
                  var I;
                  (e == null ||
                    (I = e.eventFlow) == null ||
                    I.addAnnotations({
                      bool: {
                        isClosingDb: a,
                        isCompetingInit: n,
                        shouldUpgrade: i,
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
          (a.$24 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, a) {
                var i = this,
                  l = yield this.$7.prepareNewKeyVersion(),
                  s = !1,
                  u = !1,
                  d = yield new (e || (e = n("Promise")))(function (e, n) {
                    if (i.$1 == null)
                      throw r("err")("IDB is not initialised: " + i.$3);
                    var a = [],
                      d = i.$1.transaction(
                        o("WormIDbTypes").EAR_STORE,
                        "readwrite",
                      );
                    ((d.oncomplete = function () {
                      return e(a);
                    }),
                      (d.onerror = d.onabort =
                        function () {
                          return n(d.error);
                        }));
                    var m = d.objectStore(o("WormIDbTypes").EAR_STORE),
                      p = m.getAll();
                    ((p.onsuccess = function () {
                      var n,
                        r = (n = p.result) != null ? n : [];
                      ((a = r.filter(c)),
                        (s = r.length !== a.length),
                        a.sort(function (e, t) {
                          return e.version - t.version;
                        }));
                      var i =
                        a.length === 0 ||
                        !o("WATimeUtils").isInFuture(
                          a[a.length - 1].expiration,
                        );
                      if (!i) {
                        e(a);
                        return;
                      }
                      var d = a.length === 0 ? 0 : a[a.length - 1].version;
                      u = !t && d === 0;
                      var _ = babelHelpers.extends({}, l, { version: d + 1 });
                      (m.add(_), a.push(_));
                    }),
                      (p.onerror = function () {
                        return n(p.error);
                      }));
                  });
                yield this.$7.init(
                  d,
                  { incorrectVersions: s, versionsLoss: u },
                  { eventFlow: a == null ? void 0 : a.eventFlow },
                );
              },
            );
            function a(e, n) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          t
        );
      })();
    function c(e) {
      return !(
        e == null ||
        e.version == null ||
        e.expiration == null ||
        e.clientKey == null ||
        e.clientKey.byteLength === 0 ||
        e.salt == null ||
        e.salt.byteLength === 0
      );
    }
    function d(e) {
      return (
        e.name === o("WormIDbConsts").IDB_ERROR_INVALID_STATE ||
        e.name === o("WormIDbConsts").IDB_ERROR_NOT_FOUND ||
        e.name === o("WormIDbConsts").IDB_ERROR_UNKNOWN
      );
    }
    function m(e) {
      return (
        e.message.includes(o("WormIDbConsts").LARGE_IDB_VALUE_ERROR_MSG) === !0
      );
    }
    l.WormIDbDriver = u;
  },
  98,
);
