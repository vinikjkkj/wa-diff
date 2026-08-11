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
      f,
      g = { QUERY: "QUERY", FIND: "FIND", UPDATE: "UPDATE" },
      h = {}.toString(),
      y = { id: "none", policy: o("WAWebBaseCachePolicy").CACHE_POLICY.NONE },
      C = (function (e) {
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
      b = (function (t) {
        function a() {
          var e;
          return (
            (e = t.call(this) || this),
            (e._inflight = {}),
            (e._cachePolicy = o("WAWebCachePolicies").createCachePolicy(
              e,
              e.constructor.cachePolicy || y,
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
            return this._query({ data: t, options: n, type: g.QUERY });
          }),
          (i.find = function (t, a) {
            return t
              ? this._query({ data: t, options: a, type: g.FIND })
              : (o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Called find without an id",
                      ])),
                  )
                  .sendLogs("find-without-id"),
                (f || (f = n("Promise"))).reject(
                  r("err")("called find without an id"),
                ));
          }),
          (i.update = function (t, a) {
            return t
              ? this._query({ data: t, options: a, type: g.UPDATE })
              : (o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Called update without an id",
                      ])),
                  )
                  .sendLogs("update-without-id"),
                (f || (f = n("Promise"))).reject(
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
          (i._query = function (t) {
            var e = this,
              a = t.data,
              i = t.options,
              l = t.type,
              s = o("WATypeUtils").isString(a) ? a : a.toString();
            s === h && (s = r("uniqueID")("collection_query_"));
            var u = l === g.QUERY ? void 0 : this.get(a),
              c = "force-" + s;
            return (
              ((this._inflight[c] && l === g.FIND) || l === g.UPDATE) &&
                (s = c),
              this._inflight[s]
                ? l === g.FIND && u && !u.stale
                  ? (f || (f = n("Promise"))).resolve(u)
                  : this._inflight[s]
                : !u || u.stale || l === g.UPDATE
                  ? (this._inflight[s] = this._serverQuery(l, a, i)
                      .finally(function () {
                        delete e._inflight[s];
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
                        if (e instanceof C)
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
                  : (f || (f = n("Promise"))).resolve(u)
            );
          }),
          (i._serverQuery = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var r, a, i;
                e === g.UPDATE
                  ? (i = this._update(t, n))
                  : e === g.FIND
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
            if (
              (this._cachePolicy.disableCaching(),
              !!o("WAWebConnModel").Conn.shouldSaveToCache())
            ) {
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "baseCollection:initFromCache load: ",
                    "",
                  ])),
                String(e),
              );
              var t = self.performance.now(),
                n = r("WAWebUserPrefsStore").getCollection(e),
                a = self.performance.now();
              this.initializeFromCache(n);
              var i = self.performance.now();
              (o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "baseCollection:initFromCache complete: ",
                    " items=",
                    " readParse=",
                    "ms initialize=",
                    "ms total=",
                    "ms",
                  ])),
                String(e),
                Array.isArray(n) ? n.length : 0,
                Math.round(a - t),
                Math.round(i - a),
                Math.round(i - t),
              ),
                this._cachePolicy.enableCaching());
            }
          }),
          a
        );
      })(r("WAWebCollection"));
    ((l.CollectionSilentQueryError = C), (l.BaseCollection = b));
  },
  98,
);
