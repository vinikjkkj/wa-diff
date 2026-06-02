__d(
  "WAWebBizCatalogUtils",
  [
    "WATypeUtils",
    "WAWebCatalogCollection",
    "WAWebFrontendConstants",
    "WAWebNonEmptyString",
    "WAWebQplFlowWrapper",
    "WAWebUserPrefsMeUser",
    "isStringNullOrEmpty",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("qpl")._(774780089, "3436"),
      s = r("qpl")._(774781666, "3445"),
      u = r("qpl")._(774768970, "3447"),
      c = 3;
    async function d(e, t) {
      var n = e.getData().length || 0,
        r = !e.getCanLoadMore() || !g(n, e.listItemHeight),
        a = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
      if (
        (t &&
          o("WAWebQplFlowWrapper").QPL.markerAnnotate(t, {
            bool: { IsCached: r, IsConsumer: !a.equals(e.catalog.id) },
          }),
        r)
      )
        return !0;
      await e.loadMore(!0);
      var i = e.getData().length || 0;
      return g(i, e.listItemHeight) ? e.loadInitialItems() : !0;
    }
    var m = (function () {
        function t(e, t, n, o) {
          if (
            ((this.loading = null),
            (this.catalog = e),
            (this.collectionId = t),
            (this.forCatalogManager = n),
            (this.listItemHeight = o),
            r("isStringNullOrEmpty")(t))
          )
            this.canLoadMoreAllItems =
              e.productCollection.length > 0 ? !!this.catalog.afterCursor : !0;
          else {
            var a;
            this.canLoadMoreCollectionItems =
              e.collections.length > 0
                ? ((a = this.catalog.collections.get(t)) == null
                    ? void 0
                    : a.afterCursor) !== ""
                : !0;
          }
        }
        var n = t.prototype;
        return (
          (n.loadMore = function (n) {
            var t = this;
            if (this.loading) return this.loading;
            if (!this.getCanLoadMore()) return Promise.resolve();
            var a = this.collectionId;
            if (r("isStringNullOrEmpty")(a))
              this.loading = o("WAWebCatalogCollection")
                .CatalogCollection.update(this.catalog.id)
                .then(function () {
                  ((t.canLoadMoreAllItems = !!t.catalog.afterCursor),
                    (t.loading = null));
                });
            else {
              var i = n === !0 ? e : void 0;
              this.loading = this.catalog.collections
                .findCollectionProducts(this.catalog.id, a, !1, i)
                .then(function () {
                  var e;
                  ((t.canLoadMoreCollectionItems = !!(
                    (e = t.catalog.collections.get(a)) != null && e.afterCursor
                  )),
                    (t.loading = null));
                });
            }
            return this.loading;
          }),
          (n.loadInitialItems = function () {
            var t = e;
            return d(this, t);
          }),
          (n.getCanLoadMore = function () {
            return this.canLoadMoreCollectionItems || this.canLoadMoreAllItems;
          }),
          (n.getData = function () {
            var e = this.collectionId,
              t;
            if (r("isStringNullOrEmpty")(e))
              t =
                this.catalog.productCollection.getProductModels(
                  this.forCatalogManager,
                ) || [];
            else {
              var n;
              t =
                ((n = this.catalog.collections.get(e)) == null
                  ? void 0
                  : n.productCollection.getProductModels(
                      this.forCatalogManager,
                    )) || [];
            }
            return t.map(function (e) {
              return { product: e, collection: void 0 };
            });
          }),
          t
        );
      })(),
      p = (function () {
        function e(e, t, n, r) {
          ((this.loading = null),
            (this.catalog = e),
            (this.forCatalogManager = t),
            (this.listItemHeight = n),
            (this.canLoadMoreCollections =
              e.collections.length > 0
                ? !!this.catalog.collections.afterCursor
                : !0),
            (this.canLoadMoreCatalog =
              e.productCollection.length > 0 ? !!this.catalog.afterCursor : !0),
            (this.canLogQpl = r));
        }
        var t = e.prototype;
        return (
          (t.loadMore = function (t) {
            var e = this;
            if (this.loading) return this.loading;
            if (!this.getCanLoadMore()) return Promise.resolve();
            if (this.canLoadMoreCollections) {
              var n = this.canLogQpl && t === !0 ? s : void 0;
              this.loading = this.catalog.collections
                .findCollectionsList(
                  this.catalog.id,
                  c,
                  this.forCatalogManager,
                  n,
                )
                .then(function () {
                  ((e.canLoadMoreCollections =
                    !!e.catalog.collections.afterCursor),
                    (e.loading = null));
                });
            } else
              this.loading = o("WAWebCatalogCollection")
                .CatalogCollection.update(this.catalog.id)
                .then(function () {
                  ((e.canLoadMoreCatalog = !!e.catalog.afterCursor),
                    (e.loading = null));
                });
            return this.loading;
          }),
          (t.loadInitialItems = function () {
            var e = this.canLogQpl ? s : void 0;
            return d(this, e);
          }),
          (t.getCanLoadMore = function () {
            return this.canLoadMoreCollections || this.canLoadMoreCatalog;
          }),
          (t.getData = function () {
            var e = this,
              t = this.catalog.collections.getCollectionModels(
                this.forCatalogManager,
              ),
              n = t.reduce(function (t, n) {
                t === void 0 && (t = []);
                var r =
                  n.productCollection.getProductModels(e.forCatalogManager) ||
                  [];
                if (r.length !== 0) {
                  var o;
                  (t.push({ collection: n, product: void 0 }),
                    r.length > c && (r.length = c),
                    (o = t).push.apply(
                      o,
                      r.map(function (e) {
                        return { product: e, collection: n };
                      }),
                    ));
                }
                return t;
              }, []),
              r = n.length > 0;
            if (this.canLoadMoreCollections) return n;
            r && n.push({ allItems: { totalItemsCount: n.length } });
            var o = this.catalog.productCollection
              .getProductModels(this.forCatalogManager)
              .map(function (e) {
                return { product: e, collection: void 0 };
              });
            return (n.push.apply(n, o), n);
          }),
          e
        );
      })(),
      _ = (function () {
        function e(e, t, n, r) {
          ((this.loading = null),
            (this.canLoadMoreCollections = !0),
            (this.catalog = e),
            (this.forCatalogManager = t),
            (this.listItemHeight = n),
            (this.canLogQpl = r));
        }
        var t = e.prototype;
        return (
          (t.loadMore = function (t) {
            var e = this;
            if (this.loading) return this.loading;
            if (!this.getCanLoadMore()) return Promise.resolve();
            if (this.canLoadMoreCollections) {
              var n = this.canLogQpl && t === !0 ? u : void 0;
              this.loading = this.catalog.collections
                .findCollectionsList(
                  this.catalog.id,
                  c,
                  this.forCatalogManager,
                  n,
                )
                .then(function () {
                  ((e.canLoadMoreCollections =
                    !!e.catalog.collections.afterCursor),
                    (e.loading = null));
                });
            }
            return this.loading || Promise.resolve();
          }),
          (t.loadInitialItems = function () {
            var e = this.canLogQpl ? u : void 0;
            return d(this, e);
          }),
          (t.getCanLoadMore = function () {
            return this.canLoadMoreCollections;
          }),
          (t.resetData = function () {
            var e;
            ((e = this.catalog) != null &&
              e.collections &&
              (this.catalog.collections.reset(),
              (this.catalog.collections.afterCursor = "")),
              (this.canLoadMoreCollections = !0));
          }),
          (t.getData = function () {
            return this.catalog.collections
              .getCollectionModels(this.forCatalogManager)
              .map(function (e) {
                return { collection: e, product: void 0 };
              });
          }),
          e
        );
      })(),
      f = (function () {
        function e(e, t, n) {
          ((this.loading = null),
            (this.canLoadMore = !0),
            (this.catalog = e),
            (this.catalog.stale = !0),
            this.catalog.markProductCollectionOld(),
            this.catalog.productCollection.reset(),
            (this.listItemHeight = t),
            (this.collectionId = o("WAWebNonEmptyString").asMaybeNonEmptyString(
              n,
            )));
        }
        var t = e.prototype;
        return (
          (t.loadMore = function () {
            var e = this;
            return this.loading
              ? this.loading
              : this.getCanLoadMore()
                ? (this.canLoadMore &&
                    (r("isStringNullOrEmpty")(this.collectionId)
                      ? (this.loading = o("WAWebCatalogCollection")
                          .CatalogCollection.update(this.catalog.id)
                          .then(function () {
                            ((e.canLoadMore = !!e.catalog.afterCursor),
                              (e.loading = null));
                          }))
                      : (this.loading = o("WAWebCatalogCollection")
                          .CatalogCollection.findCollectionMembership(
                            this.catalog.id,
                            this.collectionId,
                          )
                          .then(function () {
                            ((e.canLoadMore = !!e.catalog.afterCursor),
                              (e.loading = null));
                          }))),
                  this.loading || Promise.resolve())
                : Promise.resolve();
          }),
          (t.loadInitialItems = function () {
            return d(this);
          }),
          (t.getCanLoadMore = function () {
            return this.canLoadMore;
          }),
          (t.getData = function () {
            return this.catalog.productCollection
              .getProductModels(!0)
              .map(function (e) {
                return { product: e, collection: void 0 };
              });
          }),
          e
        );
      })();
    function g(e, t) {
      return e * t < window.innerHeight;
    }
    var h = (function () {
      function e(e) {
        this.dataSource = e;
      }
      var t = e.prototype;
      return (
        (t.isScrollAtBottom = function (t) {
          return (
            t.scrollTop + o("WAWebFrontendConstants").SCROLL_FUDGE >=
            t.scrollHeight - t.clientHeight
          );
        }),
        (t.willLoadMore = function (t) {
          return !!(this.dataSource.loading || this.isScrollAtBottom(t));
        }),
        (t.onScroll = async function (t, n) {
          return this.dataSource.loading
            ? (await this.dataSource.loading, !0)
            : this.isScrollAtBottom(n)
              ? (await this.dataSource.loadMore(), !0)
              : !1;
        }),
        e
      );
    })();
    function y(e, t, n) {
      var a = o("WAWebCatalogCollection").CatalogCollection.get(e),
        i,
        l;
      if (a) {
        if (!r("isStringNullOrEmpty")(t) && n) {
          var s = a.productCollection.get(n.id);
          return (
            (i = s && a.productCollection.indexOf(s)),
            {
              productId: n.id.toString(),
              productIndex:
                o("WATypeUtils").isNumber(i) && i > -1 ? i.toString() : void 0,
            }
          );
        }
        if (!r("isStringNullOrEmpty")(t)) {
          var u = a.collections.get(t);
          l = u && a.collections.indexOf(u);
          var c = n && (u == null ? void 0 : u.productCollection.get(n.id));
          i = c && (u == null ? void 0 : u.productCollection.indexOf(c));
        }
        return {
          collectionId: t || "",
          productId: n == null ? void 0 : n.id.toString(),
          collectionIndex:
            o("WATypeUtils").isNumber(l) && l > -1 ? l.toString() : void 0,
          productIndex:
            o("WATypeUtils").isNumber(i) && i > -1 ? i.toString() : void 0,
        };
      }
    }
    ((l.SingleCollectionDataSource = m),
      (l.CatalogWithCollectionsDataSource = p),
      (l.CollectionsDataSource = _),
      (l.CollectionsContentDataSource = f),
      (l.CatalogListItemScrollHelper = h),
      (l.getProductStatsInFetched = y));
  },
  98,
);
