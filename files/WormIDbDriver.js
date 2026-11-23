__d(
  "WormIDbDriver",
  [
    "FBLogger",
    "WACryptoSha256",
    "WAResolvable",
    "WormIDbConsts",
    "WormIDbEARKeychain",
    "WormIDbRetry",
    "WormIDbTransaction",
    "WormIDbTypes",
    "WormIDbUtils",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3,
      s = (function () {
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
        var n = t.prototype;
        return (
          (n.getDbAlias = function () {
            return this.$3;
          }),
          (n.getSchema = function () {
            return this.$4;
          }),
          (n.openDb = function (t, n) {
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
          (n.reopenForUpgrade = function (t, n) {
            var e = t.version;
            return (t.close(), this.openDb(n, e + 1));
          }),
          (n.loadKeychain = function (t, n) {
            var e = this.$3;
            return new Promise(function (a, i) {
              var l = null,
                s = t.transaction(o("WormIDbTypes").EAR_STORE, "readwrite");
              ((s.oncomplete = function () {
                if (l == null) {
                  i(r("err")("EAR keychain was never read: " + e));
                  return;
                }
                a(l);
              }),
                (s.onerror = s.onabort =
                  function () {
                    return i(s.error);
                  }));
              var u = s.objectStore(o("WormIDbTypes").EAR_STORE),
                c = u.getAll();
              ((c.onsuccess = function () {
                var e,
                  t = o("WormIDbEARKeychain").reconcileKeychain(
                    (e = c.result) != null ? e : [],
                  ),
                  r = t.curVersion,
                  a = t.needNewVersion,
                  i = t.versions;
                if (a) {
                  var s = babelHelpers.extends({}, n(), { version: r + 1 });
                  (u.add(s), i.push(s));
                }
                l = { versions: i };
              }),
                (c.onerror = function () {
                  return i(c.error);
                }));
            });
          }),
          (n.openAndUpgrade = function (t) {
            throw r("err")("openAndUpgrade is not implemented: " + this.$3);
          }),
          (n.$14 = async function (t) {
            var e = this.$5;
            if (e != null) {
              var n;
              return (
                t == null ||
                  (n = t.eventFlow) == null ||
                  n.addAnnotations({ bool: { isCompetingInit: !0 } }),
                e.promise
              );
            }
            var a = new (o("WAResolvable").Resolvable)();
            this.$5 = a;
            var i = !1;
            this.$1 != null && (this.$1.close(), (this.$1 = null), (i = !0));
            var l = !1;
            try {
              var s, u, c;
              t == null ||
                (s = t.eventFlow) == null ||
                s.addPoint("schema_hash_start");
              var d = babelHelpers.extends(
                  {},
                  this.$4,
                  o("WormIDbTypes").sysSchema,
                ),
                m = JSON.stringify(d);
              if (m == null)
                throw r("err")("DB schema cannot be serialized: " + this.$3);
              var p = await o("WACryptoSha256").sha256Str(m);
              t == null ||
                (u = t.eventFlow) == null ||
                u.addPoint("schema_hash_end");
              var _ = await this.openAndUpgrade({
                  eventFlow: t == null ? void 0 : t.eventFlow,
                  forceUpgrade:
                    (c = t == null ? void 0 : t.forceUpgrade) != null ? c : !1,
                  schema: d,
                  schemaHash: p,
                }),
                f = _.db,
                g = _.isNewDb,
                h = _.isUpgraded;
              ((l = h), (this.$1 = f));
              var y = { isNewDb: g, isUpgraded: h };
              return (a.resolve(y), y);
            } catch (e) {
              throw (a.reject(e), e);
            } finally {
              var C;
              (t == null ||
                (C = t.eventFlow) == null ||
                C.addAnnotations({
                  bool: {
                    isClosingDb: i,
                    isCompetingInit: !1,
                    shouldUpgrade: l,
                  },
                }),
                (this.$5 = null));
            }
          }),
          (n.$15 = async function (t, n, a, i) {
            if ((this.$5 != null && (await this.$5.promise), this.$1 == null))
              throw r("err")("IDB is not initialised: " + this.$3);
            var e = new (o("WormIDbTransaction").WormIDbTransaction)(
                this.$1.transaction(
                  t.map(function (e) {
                    return e.toString();
                  }),
                  n,
                  { durability: "relaxed" },
                ),
                i,
                this.ear,
                t,
                this.$4,
              ),
              l;
            try {
              ((l = await a(e)), await e.commit());
            } catch (t) {
              var s = r("getErrorSafe")(t);
              throw (o("WormIDbConsts").IDB_ERRORS.has(s.name) || e.abort(), t);
            }
            return l;
          }),
          (n.$16 = function (t) {
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
          (n.$17 = async function (n, a, i, l) {
            var t = this;
            if (this.$1 == null) {
              var s, d;
              ((s = l.eventFlow) == null ||
                s.addPoint("db_reinit_start", { bool: { isDbNull: !0 } }),
                await this.$14(),
                (d = l.eventFlow) == null || d.addPoint("db_reinit_end"));
            }
            return o("WormIDbRetry").withRetry({
              fn: async function (s) {
                var e = s.attempt;
                if (e === 1) {
                  var c;
                  (t.$10.log(t.$3 + ".error.large_idb_value"),
                    r("FBLogger")("worm").warn(
                      "Retrying transaction due to large IDB value error: %s",
                      t.$3,
                    ),
                    (c = l.eventFlow) == null ||
                      c.addPoint("large_idb_value_refetch_start"));
                }
                var d = await o("WormIDbRetry").withRetry({
                  fn: async function (r) {
                    var e = r.error;
                    if (e != null) {
                      var s, u;
                      ((s = l.eventFlow) == null ||
                        s.addPoint("db_reinit_start", {
                          bool: { isDbInvalid: !0 },
                        }),
                        await t.$14({
                          forceUpgrade:
                            e.name === o("WormIDbConsts").IDB_ERROR_NOT_FOUND,
                        }),
                        (u = l.eventFlow) == null ||
                          u.addPoint("db_reinit_end"));
                    }
                    return t.$15(n, a, i, l);
                  },
                  maxRetries: 1,
                  shouldRetry: function (n) {
                    var t = n.error;
                    return u(t) && e === 0;
                  },
                });
                if (e > 0) {
                  var m;
                  (m = l.eventFlow) == null ||
                    m.addPoint("large_idb_value_refetch_end");
                }
                return d;
              },
              maxRetries: e,
              shouldRetry: function (t) {
                var e = t.error;
                return c(e);
              },
            });
          }),
          (n.runInTransaction = async function (t, n, o, a) {
            var e;
            try {
              ((e = await this.$17(t, n, o, a)), (this.$6 = []));
            } catch (e) {
              var i = r("getErrorSafe")(e);
              throw (this.$9(i), this.$16(i), e);
            }
            return e;
          }),
          (n.close = function () {
            var e;
            (e = this.$1) == null || e.close();
          }),
          (n.init = async function (t) {
            var e = this;
            return await o("WormIDbRetry").withRetry({
              fn: function (r) {
                var n,
                  o = r.attempt;
                return e.$14(
                  o === 0
                    ? {
                        eventFlow:
                          (n = t == null ? void 0 : t.eventFlow) != null
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
          }),
          t
        );
      })();
    function u(e) {
      return (
        e.name === o("WormIDbConsts").IDB_ERROR_INVALID_STATE ||
        e.name === o("WormIDbConsts").IDB_ERROR_NOT_FOUND ||
        e.name === o("WormIDbConsts").IDB_ERROR_UNKNOWN
      );
    }
    function c(e) {
      return (
        e.message.includes(o("WormIDbConsts").LARGE_IDB_VALUE_ERROR_MSG) === !0
      );
    }
    l.WormIDbDriver = s;
  },
  98,
);
