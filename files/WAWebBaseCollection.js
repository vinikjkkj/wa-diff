__d(
  "WAWebBaseCollection",
  [
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WATypeUtils",
    "WAWebBackendErrors",
    "WAWebBaseCachePolicy",
    "WAWebCachePolicies",
    "WAWebCollection",
    "WAWebConnModel",
    "WAWebMiscErrors",
    "WAWebUserPrefsStore",
    "asyncToGeneratorRuntime",
    "cr:5292",
    "err",
    "gkx",
    "uniqueID",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = { QUERY: "QUERY", FIND: "FIND", UPDATE: "UPDATE" },
      g = {}.toString(),
      h = { id: "none", policy: o("WAWebBaseCachePolicy").CACHE_POLICY.NONE },
      y = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.name = "CollectionSilentQueryError"),
            (n.message = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      C = (function (t) {
        function a() {
          var e;
          return (
            (e = t.call(this) || this),
            (e._inflight = {}),
            (e._cachePolicy = o("WAWebCachePolicies").createCachePolicy(
              e,
              e.constructor.cachePolicy || h,
            )),
            e._cachePolicy.enableCaching(),
            e._cachePolicy.constructor.policy ===
              o("WAWebBaseCachePolicy").CACHE_POLICY.LOAD &&
              (e.listenTo(
                o("WAWebConnModel").Conn,
                "me_ready",
                e._updateFromCache,
              ),
              o("WAWebConnModel").Conn.meReadyTriggered &&
                e._updateFromCache()),
            e
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.initializeFromCache = function (t) {
            this.add(t);
          }),
          (i.saveToCache = function () {
            if (o("WAWebConnModel").Conn.shouldSaveToCache()) {
              var t = this._cachePolicy.id;
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "baseCollection:saveToCache save: ",
                    "",
                  ])),
                String(t),
              ),
                r("WAWebUserPrefsStore").setCollection(t, this.toJSON()));
            }
          }),
          (i.add = function (a, i) {
            var e = this;
            if (
              (r("gkx")("26258") ||
                ((n("cr:5292") == null
                  ? void 0
                  : n("cr:5292").currentTransaction) != null &&
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "UI change in txn for ",
                        ". See https://fburl.com/aleoj4tt",
                      ])),
                    this.constructor.name,
                  )),
              a)
            ) {
              if (o("WAWebConnModel").Conn.blockStoreAdds)
                throw new (o("WAWebBackendErrors").LogoutDrop)(
                  "adding to store when blocking store adds",
                );
              var l = Array.isArray(a) ? a : [a];
              if (
                l.every(function (e) {
                  return e == null ? void 0 : e.isState;
                })
              ) {
                var u = l.filter(function (t) {
                  return !e.get(t.id);
                });
                return (u.length && t.prototype.add.call(this, u, i), l);
              }
            }
            return t.prototype.add.call(this, a, i);
          }),
          (i.findQuery = function (t, n) {
            return this._query(f.QUERY, t, n);
          }),
          (i.find = function (t, a) {
            return t
              ? this._query(f.FIND, t, a)
              : (o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Called find without an id",
                      ])),
                  )
                  .sendLogs("find-without-id"),
                (_ || (_ = n("Promise"))).reject(
                  r("err")("called find without an id"),
                ));
          }),
          (i.update = function (t, a) {
            return t
              ? this._query(f.UPDATE, t, a)
              : (o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Called update without an id",
                      ])),
                  )
                  .sendLogs("update-without-id"),
                (_ || (_ = n("Promise"))).reject(
                  r("err")("called update without an id"),
                ));
          }),
          (i.gadd = function (t, n) {
            if (this.modelClass.prototype.isIdType(t)) {
              var e = this.get(t);
              return e || this.add({ id: t }, n)[0];
            }
            if (t.id) {
              var o = n || {};
              return ((o.merge = !0), this.add(t, o)[0]);
            }
            throw r("err")("gadd called without an id attr (id)");
          }),
          (i.delete = function () {
            ((this._inflight = {}), this.reset());
          }),
          (i._query = function (t, a, i) {
            var e = this,
              l = o("WATypeUtils").isString(a) ? a : a.toString();
            l === g && (l = r("uniqueID")("collection_query_"));
            var s = t === f.QUERY ? void 0 : this.get(a),
              u = "force-" + l;
            return (
              ((this._inflight[u] && t === f.FIND) || t === f.UPDATE) &&
                (l = u),
              this._inflight[l]
                ? t === f.FIND && s && !s.stale
                  ? (_ || (_ = n("Promise"))).resolve(s)
                  : this._inflight[l]
                : !s || s.stale || t === f.UPDATE
                  ? (this._inflight[l] = this._serverQuery(t, a, i)
                      .finally(function () {
                        delete e._inflight[l];
                      })
                      .catch(
                        o("WAFilteredCatch").filteredCatch(
                          o("WAWebBackendErrors").LogoutDrop,
                          function (e) {
                            o("WALogger").WARN(
                              d ||
                                (d = babelHelpers.taggedTemplateLiteralLoose([
                                  "LogoutDrop error: ",
                                  "",
                                ])),
                              e.toString(),
                            );
                          },
                        ),
                      )
                      .catch(function (e) {
                        if (e instanceof y)
                          o("WALogger").LOG(
                            m ||
                              (m = babelHelpers.taggedTemplateLiteralLoose([
                                "baseCollection:query query promise rejected: ",
                                "",
                              ])),
                            String(e),
                          );
                        else throw e;
                      }))
                  : (_ || (_ = n("Promise"))).resolve(s)
            );
          }),
          (i._serverQuery = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var r, a, i;
                e === f.UPDATE
                  ? (i = this._update(t, n))
                  : e === f.FIND
                    ? (i = this.findImpl(t, n))
                    : (i = this.findQueryImpl(t));
                var l = yield i;
                this._markResultsNotStale(l);
                var s;
                if (
                  ((n == null ? void 0 : n.set) === !0
                    ? (s = this.set(l))
                    : (s = this.add(l, { merge: !0 })),
                  Array.isArray(l))
                )
                  return s;
                if (s[0]) return s[0];
                throw new (o("WAWebMiscErrors").ModelCreateError)(
                  (r = (a = this.modelClass) == null ? void 0 : a.name) != null
                    ? r
                    : "Unknown",
                  l,
                );
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i._update = function (t, n) {
            return this.findImpl(t, n);
          }),
          (i._markResultsNotStale = function (t) {}),
          (i._updateFromCache = function () {
            var e = this._cachePolicy.id;
            (this._cachePolicy.disableCaching(),
              o("WAWebConnModel").Conn.shouldSaveToCache() &&
                (o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "baseCollection:initFromCache load: ",
                      "",
                    ])),
                  String(e),
                ),
                this.initializeFromCache(
                  r("WAWebUserPrefsStore").getCollection(e),
                ),
                this._cachePolicy.enableCaching()));
          }),
          a
        );
      })(r("WAWebCollection"));
    ((l.CollectionSilentQueryError = y), (l.BaseCollection = C));
  },
  98,
);
