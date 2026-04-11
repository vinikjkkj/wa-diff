__d(
  "WAWebBizCatalogUtils",
  [
    "Promise",
    "WATypeUtils",
    "WAWebCatalogCollection",
    "WAWebFrontendConstants",
    "WAWebNonEmptyString",
    "WAWebQplFlowWrapper",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("qpl")._(774780089, "3436"),
      u = r("qpl")._(774781666, "3445"),
      c = r("qpl")._(774768970, "3447"),
      d = 3;
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.getData().length || 0,
            r = !e.getCanLoadMore() || !y(n, e.listItemHeight),
            a = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
          if (
            (t &&
              o("WAWebQplFlowWrapper").QPL.markerAnnotate(t, {
                bool: { IsCached: r, IsConsumer: !a.equals(e.catalog.id) },
              }),
            r)
          )
            return !0;
          yield e.loadMore(!0);
          var i = e.getData().length || 0;
          return y(i, e.listItemHeight) ? e.loadInitialItems() : !0;
        })),
        p.apply(this, arguments)
      );
    }
    var _ = (function () {
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
        var a = t.prototype;
        return (
          (a.loadMore = function (a) {
            var t = this;
            if (this.loading) return this.loading;
            if (!this.getCanLoadMore())
              return (e || (e = n("Promise"))).resolve();
            var i = this.collectionId;
            if (r("isStringNullOrEmpty")(i))
              this.loading = o("WAWebCatalogCollection")
                .CatalogCollection.update(this.catalog.id)
                .then(function () {
                  ((t.canLoadMoreAllItems = !!t.catalog.afterCursor),
                    (t.loading = null));
                });
            else {
              var l = a === !0 ? s : void 0;
              this.loading = this.catalog.collections
                .findCollectionProducts(this.catalog.id, i, !1, l)
                .then(function () {
                  var e;
                  ((t.canLoadMoreCollectionItems = !!(
                    (e = t.catalog.collections.get(i)) != null && e.afterCursor
                  )),
                    (t.loading = null));
                });
            }
            return this.loading;
          }),
          (a.loadInitialItems = function () {
            var e = s;
            return m(this, e);
          }),
          (a.getCanLoadMore = function () {
            return this.canLoadMoreCollectionItems || this.canLoadMoreAllItems;
          }),
          (a.getData = function () {
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
      f = (function () {
        function t(e, t, n, r) {
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
        var r = t.prototype;
        return (
          (r.loadMore = function (r) {
            var t = this;
            if (this.loading) return this.loading;
            if (!this.getCanLoadMore())
              return (e || (e = n("Promise"))).resolve();
            if (this.canLoadMoreCollections) {
              var a = this.canLogQpl && r === !0 ? u : void 0;
              this.loading = this.catalog.collections
                .findCollectionsList(
                  this.catalog.id,
                  d,
                  this.forCatalogManager,
                  a,
                )
                .then(function () {
                  ((t.canLoadMoreCollections =
                    !!t.catalog.collections.afterCursor),
                    (t.loading = null));
                });
            } else
              this.loading = o("WAWebCatalogCollection")
                .CatalogCollection.update(this.catalog.id)
                .then(function () {
                  ((t.canLoadMoreCatalog = !!t.catalog.afterCursor),
                    (t.loading = null));
                });
            return this.loading;
          }),
          (r.loadInitialItems = function () {
            var e = this.canLogQpl ? u : void 0;
            return m(this, e);
          }),
          (r.getCanLoadMore = function () {
            return this.canLoadMoreCollections || this.canLoadMoreCatalog;
          }),
          (r.getData = function () {
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
                    r.length > d && (r.length = d),
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
          t
        );
      })(),
      g = (function () {
        function t(e, t, n, r) {
          ((this.loading = null),
            (this.canLoadMoreCollections = !0),
            (this.catalog = e),
            (this.forCatalogManager = t),
            (this.listItemHeight = n),
            (this.canLogQpl = r));
        }
        var r = t.prototype;
        return (
          (r.loadMore = function (r) {
            var t = this;
            if (this.loading) return this.loading;
            if (!this.getCanLoadMore())
              return (e || (e = n("Promise"))).resolve();
            if (this.canLoadMoreCollections) {
              var o = this.canLogQpl && r === !0 ? c : void 0;
              this.loading = this.catalog.collections
                .findCollectionsList(
                  this.catalog.id,
                  d,
                  this.forCatalogManager,
                  o,
                )
                .then(function () {
                  ((t.canLoadMoreCollections =
                    !!t.catalog.collections.afterCursor),
                    (t.loading = null));
                });
            }
            return this.loading || (e || (e = n("Promise"))).resolve();
          }),
          (r.loadInitialItems = function () {
            var e = this.canLogQpl ? c : void 0;
            return m(this, e);
          }),
          (r.getCanLoadMore = function () {
            return this.canLoadMoreCollections;
          }),
          (r.resetData = function () {
            var e;
            ((e = this.catalog) != null &&
              e.collections &&
              (this.catalog.collections.reset(),
              (this.catalog.collections.afterCursor = "")),
              (this.canLoadMoreCollections = !0));
          }),
          (r.getData = function () {
            return this.catalog.collections
              .getCollectionModels(this.forCatalogManager)
              .map(function (e) {
                return { collection: e, product: void 0 };
              });
          }),
          t
        );
      })(),
      h = (function () {
        function t(e, t, n) {
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
        var a = t.prototype;
        return (
          (a.loadMore = function () {
            var t = this;
            return this.loading
              ? this.loading
              : this.getCanLoadMore()
                ? (this.canLoadMore &&
                    (r("isStringNullOrEmpty")(this.collectionId)
                      ? (this.loading = o("WAWebCatalogCollection")
                          .CatalogCollection.update(this.catalog.id)
                          .then(function () {
                            ((t.canLoadMore = !!t.catalog.afterCursor),
                              (t.loading = null));
                          }))
                      : (this.loading = o("WAWebCatalogCollection")
                          .CatalogCollection.findCollectionMembership(
                            this.catalog.id,
                            this.collectionId,
                          )
                          .then(function () {
                            ((t.canLoadMore = !!t.catalog.afterCursor),
                              (t.loading = null));
                          }))),
                  this.loading || (e || (e = n("Promise"))).resolve())
                : (e || (e = n("Promise"))).resolve();
          }),
          (a.loadInitialItems = function () {
            return m(this);
          }),
          (a.getCanLoadMore = function () {
            return this.canLoadMore;
          }),
          (a.getData = function () {
            return this.catalog.productCollection
              .getProductModels(!0)
              .map(function (e) {
                return { product: e, collection: void 0 };
              });
          }),
          t
        );
      })();
    function y(e, t) {
      return e * t < window.innerHeight;
    }
    var C = (function () {
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
        (t.onScroll = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              return this.dataSource.loading
                ? (yield this.dataSource.loading, !0)
                : this.isScrollAtBottom(t)
                  ? (yield this.dataSource.loadMore(), !0)
                  : !1;
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        e
      );
    })();
    function b(e, t, n) {
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
    ((l.SingleCollectionDataSource = _),
      (l.CatalogWithCollectionsDataSource = f),
      (l.CollectionsDataSource = g),
      (l.CollectionsContentDataSource = h),
      (l.CatalogListItemScrollHelper = C),
      (l.getProductStatsInFetched = b));
  },
  98,
);
