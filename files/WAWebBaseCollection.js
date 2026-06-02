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
      _ = { QUERY: "QUERY", FIND: "FIND", UPDATE: "UPDATE" },
      f = {}.toString(),
      g = { id: "none", policy: o("WAWebBaseCachePolicy").CACHE_POLICY.NONE },
      h = (function (e) {
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
      y = (function (t) {
        function a() {
          var e;
          return (
            (e = t.call(this) || this),
            (e._inflight = {}),
            (e._cachePolicy = o("WAWebCachePolicies").createCachePolicy(
              e,
              e.constructor.cachePolicy || g,
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
            return this._query(_.QUERY, t, n);
          }),
          (i.find = function (t, n) {
            return t
              ? this._query(_.FIND, t, n)
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
              ? this._query(_.UPDATE, t, n)
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
            if (t.id) {
              var o = n || {};
              return ((o.merge = !0), this.add(t, o)[0]);
            }
            throw r("err")("gadd called without an id attr (id)");
          }),
          (i.delete = function () {
            ((this._inflight = {}), this.reset());
          }),
          (i._query = function (t, n, a) {
            var e = this,
              i = o("WATypeUtils").isString(n) ? n : n.toString();
            i === f && (i = r("uniqueID")("collection_query_"));
            var l = t === _.QUERY ? void 0 : this.get(n),
              s = "force-" + i;
            return (
              ((this._inflight[s] && t === _.FIND) || t === _.UPDATE) &&
                (i = s),
              this._inflight[i]
                ? t === _.FIND && l && !l.stale
                  ? Promise.resolve(l)
                  : this._inflight[i]
                : !l || l.stale || t === _.UPDATE
                  ? (this._inflight[i] = this._serverQuery(t, n, a)
                      .finally(function () {
                        delete e._inflight[i];
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
                        if (e instanceof h)
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
                  : Promise.resolve(l)
            );
          }),
          (i._serverQuery = async function (t, n, r) {
            var e, a, i;
            t === _.UPDATE
              ? (i = this._update(n, r))
              : t === _.FIND
                ? (i = this.findImpl(n, r))
                : (i = this.findQueryImpl(n));
            var l = await i;
            this._markResultsNotStale(l);
            var s;
            if (
              ((r == null ? void 0 : r.set) === !0
                ? (s = this.set(l))
                : (s = this.add(l, { merge: !0 })),
              Array.isArray(l))
            )
              return s;
            if (s[0]) return s[0];
            throw new (o("WAWebMiscErrors").ModelCreateError)(
              (e = (a = this.modelClass) == null ? void 0 : a.name) != null
                ? e
                : "Unknown",
              l,
            );
          }),
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
    ((l.CollectionSilentQueryError = h), (l.BaseCollection = y));
  },
  98,
);
