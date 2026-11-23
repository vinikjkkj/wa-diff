__d(
  "WAWebBaseCollection",
  [
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
    "cr:18506",
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
              (r("gkx")("16539") &&
                (n("cr:18506") == null
                  ? void 0
                  : n("cr:18506").currentTransaction) != null &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "UI change in txn for ",
                      ". See https://fburl.com/aleoj4tt",
                    ])),
                  this.constructor.name,
                ),
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
            return this._query({ data: t, options: n, type: f.QUERY });
          }),
          (i.find = function (t, n) {
            return t
              ? this._query({ data: t, options: n, type: f.FIND })
              : (o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Called find without an id",
                      ])),
                  )
                  .sendLogs("find-without-id"),
                Promise.reject(r("err")("called find without an id")));
          }),
          (i.update = function (t, n) {
            return t
              ? this._query({ data: t, options: n, type: f.UPDATE })
              : (o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Called update without an id",
                      ])),
                  )
                  .sendLogs("update-without-id"),
                Promise.reject(r("err")("called update without an id")));
          }),
          (i.gadd = function (t, n) {
            if (this.modelClass.prototype.isIdType(t)) {
              var e = this.get(t);
              return e || this.add({ id: t }, n)[0];
            }
            if (t.id != null && t.id !== "") {
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
              n = t.data,
              a = t.options,
              i = t.type,
              l = o("WATypeUtils").isString(n) ? n : n.toString();
            l === g && (l = r("uniqueID")("collection_query_"));
            var s = i === f.QUERY ? void 0 : this.get(n),
              u = "force-" + l;
            return (
              ((this._inflight[u] && i === f.FIND) || i === f.UPDATE) &&
                (l = u),
              this._inflight[l]
                ? i === f.FIND && s && !s.stale
                  ? Promise.resolve(s)
                  : this._inflight[l]
                : !s || s.stale || i === f.UPDATE
                  ? (this._inflight[l] = this._serverQuery({
                      data: n,
                      options: a,
                      type: i,
                    })
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
                  : Promise.resolve(s)
            );
          }),
          (i._serverQuery = async function (t) {
            var e,
              n,
              r = t.data,
              a = t.options,
              i = t.type,
              l;
            i === f.UPDATE
              ? (l = this._update(r, a))
              : i === f.FIND
                ? (l = this.findImpl(r, a))
                : (l = this.findQueryImpl(r));
            var s = await l;
            this._markResultsNotStale(s);
            var u;
            if (
              ((a == null ? void 0 : a.set) === !0
                ? (u = this.set(s))
                : (u = this.add(s, { merge: !0 })),
              Array.isArray(s))
            )
              return u;
            if (u[0]) return u[0];
            throw new (o("WAWebMiscErrors").ModelCreateError)(
              (e = (n = this.modelClass) == null ? void 0 : n.name) != null
                ? e
                : "Unknown",
              s,
            );
          }),
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
    ((l.CollectionSilentQueryError = y), (l.BaseCollection = C));
  },
  98,
);
