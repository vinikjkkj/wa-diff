__d(
  "AdsImageStore",
  [
    "AdsAccountStore",
    "AdsBaseDataStore_LEGACY",
    "AdsDraftDraftPublishCompletedDataActionFlux",
    "AdsImageBatchLoadErrorDataActionFlux",
    "AdsImageBatchLoadedDataActionFlux",
    "AdsImageDataDispatcher",
    "AdsImageDataManager",
    "AdsImageListLoadedDataActionFlux",
    "AdsImageLoadDimensionErrorActionFlux",
    "AdsImageLoadDimensionSuccessActionFlux",
    "AdsImageLoadImagesSuccessActionFlux",
    "AdsImageLoadNextPageDataActionFlux",
    "AdsLoadState_LEGACY",
    "AdsPEDiscardConfirmDialogToggleActionFlux",
    "BoostedComponentCreativeV2UpdateImageActionFlux",
    "curry",
    "deepFreezeValue",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [];
    r("deepFreezeValue")(e);
    var s = Object.freeze({});
    r("deepFreezeValue")(s);
    var u = {},
      c = (function (t) {
        function n() {
          var e;
          return (
            (e = t.call(this) || this),
            (e.getOneFor = function (t, n) {
              return e.getAllFor(t, [n]).get(n);
            }),
            (e.getAllFor = function (t, n) {
              var o = e.__updateLoading(n);
              if (o.length > 0) {
                var a = r("AdsAccountStore").getSelectedBusinessID();
                r("AdsImageDataManager").loadAllFor(t, o, a);
              }
              return e.getAllCached(n);
            }),
            (e.$AdsImageStore$p_8 = function (e, t, n) {
              if (n.url && n.width && n.height) {
                var o = { width: n.width, height: n.height };
                (r("deepFreezeValue")(o), (u[n.url] = o));
              }
              var a = d(n),
                i = t[a];
              typeof i == "number"
                ? (e[i] = n)
                : (e.push(n), (i = e.length - 1), (t[a] = i));
            }),
            (e.$AdsImageStore$p_1 = {}),
            (e.$AdsImageStore$p_2 = new Map()),
            (e.$AdsImageStore$p_3 = new Set()),
            e
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getDataManager = function () {
            return r("AdsImageDataManager");
          }),
          (a.__getActionTypes = function () {
            return [
              o("AdsDraftDraftPublishCompletedDataActionFlux").actionType,
              o("AdsImageLoadDimensionErrorActionFlux").actionType,
              o("AdsImageLoadDimensionSuccessActionFlux").actionType,
              o("AdsImageLoadImagesSuccessActionFlux").actionType,
              o("AdsImageBatchLoadedDataActionFlux").actionType,
              o("AdsImageBatchLoadErrorDataActionFlux").actionType,
              o("AdsImageListLoadedDataActionFlux").actionType,
              o("AdsImageLoadNextPageDataActionFlux").actionType,
              o("AdsPEDiscardConfirmDialogToggleActionFlux").actionType,
              o("BoostedComponentCreativeV2UpdateImageActionFlux").actionType,
            ];
          }),
          (a.__onDispatch = function (t) {
            var e = this,
              n = t.action;
            switch (n.actionType) {
              case o("AdsDraftDraftPublishCompletedDataActionFlux").actionType:
              case o("AdsPEDiscardConfirmDialogToggleActionFlux").actionType:
                (this.$AdsImageStore$p_3.forEach(function (t) {
                  e.__invalidate(t);
                }),
                  (this.$AdsImageStore$p_3 = new Set()),
                  this.__emitChange());
                break;
              case o("AdsImageBatchLoadedDataActionFlux").actionType:
                this.__handleData(n.images, r("AdsLoadState_LEGACY").LOADED);
                break;
              case o("AdsImageBatchLoadErrorDataActionFlux").actionType:
                this.__handleData(n.errors, r("AdsLoadState_LEGACY").ERROR);
                break;
              case o("AdsImageLoadImagesSuccessActionFlux").actionType:
                (this.$AdsImageStore$p_4(n.accountID, n.images),
                  this.$AdsImageStore$p_2.set(n.accountID, {
                    loadNextPage: n.loadNextPage,
                    isLoadingNextPage: !1,
                  }),
                  this.__emitChange());
                break;
              case o("AdsImageLoadDimensionSuccessActionFlux").actionType:
                var a = { width: n.width, height: n.height };
                (r("deepFreezeValue")(a), (u[n.url] = a), this.__emitChange());
                break;
              case o("AdsImageLoadDimensionErrorActionFlux").actionType:
                (delete u[n.url], this.__emitChange());
                break;
              case o("AdsImageLoadNextPageDataActionFlux").actionType:
                this.$AdsImageStore$p_5(n.accountID) && this.__emitChange();
                break;
              case o("AdsImageListLoadedDataActionFlux").actionType:
                this.$AdsImageStore$p_6(n);
                break;
              case o("BoostedComponentCreativeV2UpdateImageActionFlux")
                .actionType:
                var i = n.image.toJSON();
                this.$AdsImageStore$p_4(n.accountID, [
                  {
                    hash: i.hash,
                    height: i.height,
                    loadState: "LOADED",
                    name: i.name,
                    url: i.url,
                    url_128: i.url_128,
                    url_256: i.url_256,
                    url_256_height: 0,
                    url_256_width: 0,
                    width: i.width,
                    variants: i.variants || { data: [] },
                    ads_integrity_review_info: i.ads_integrity_review_info,
                    thumbnail_id: i.thumbnail_id,
                  },
                ]);
                break;
              default:
                return;
            }
          }),
          (a.$AdsImageStore$p_6 = function (t) {
            var e = this,
              n = t.images,
              o = new Map();
            (n.forEach(function (t) {
              var n = t.hash;
              if (n != null) {
                var r = babelHelpers.extends({}, e.getCached(n), t);
                o.set(n, r);
              }
            }),
              this.__handleData(o, r("AdsLoadState_LEGACY").LOADED));
          }),
          (a.$AdsImageStore$p_7 = function (t) {
            ((this.$AdsImageStore$p_1[t] = s),
              r("AdsImageDataDispatcher").loadPagedImagesForAccountID(t));
          }),
          (a.getImages_DEPRECATED = function (n) {
            var t = this.$AdsImageStore$p_1[n];
            return t === s ? e : t ? t.list : (this.$AdsImageStore$p_7(n), e);
          }),
          (a.getImageByHash_DEPRECATED = function (t, n) {
            var e = this.$AdsImageStore$p_1[t];
            if (e === s) return null;
            if (!e) return (this.getImages_DEPRECATED(t), null);
            if (e.map) {
              var o = e.map[n];
              if (o === s) return null;
              if (typeof o == "number") return e.list[o];
              e.map[n] = s;
            }
            return (
              r("AdsImageDataDispatcher").loadAllImagesForAccountID(t, [n]),
              null
            );
          }),
          (a.getImageDimensionsByURL = function (t) {
            var e = u[t];
            if (e) {
              if (e === s) return null;
              if (typeof e.height == "number" && typeof e.width == "number")
                return { height: e.height, width: e.width };
            }
            return (
              (u[t] = s),
              r("AdsImageDataDispatcher").loadImageDimensionsForURL(t),
              null
            );
          }),
          (a.$AdsImageStore$p_4 = function (t, n) {
            var e = this.$AdsImageStore$p_1[t];
            ((e && e !== s) || (e = { list: [], map: {} }),
              n.forEach(r("curry")(this.$AdsImageStore$p_8, e.list, e.map)),
              (this.$AdsImageStore$p_1[t] = e));
          }),
          (a.$AdsImageStore$p_5 = function (t) {
            var e = this.$AdsImageStore$p_2.get(t);
            return e && !e.isLoadingNextPage && e.loadNextPage
              ? (e.loadNextPage(), (e.isLoadingNextPage = !0), !0)
              : !1;
          }),
          (a.isFetchingNextPage = function (t) {
            var e = this.$AdsImageStore$p_2.get(t);
            return e ? e.isLoadingNextPage : !1;
          }),
          (a.hasCursorForNextPage = function (t) {
            var e = this.$AdsImageStore$p_2.get(t);
            return e ? !!e.loadNextPage : !1;
          }),
          (a.getImageDataFromHash = function (t, n) {
            var e,
              r,
              o,
              a,
              i = "",
              l = n ? this.getImageByHash_DEPRECATED(t, n) : null;
            return (
              l && (i = l.url || l.url_128 || i),
              {
                dimensions: i ? this.getImageDimensionsByURL(i) : null,
                fullSizeUrl: (e = l == null ? void 0 : l.url) != null ? e : "",
                name: (r = l == null ? void 0 : l.name) != null ? r : "",
                thumbnailUrl:
                  (o =
                    (a = l == null ? void 0 : l.url_256) != null
                      ? a
                      : l == null
                        ? void 0
                        : l.url_128) != null
                    ? o
                    : "",
                url: i,
              }
            );
          }),
          (a.getImageHases_TEST_ONLY = function () {
            return this.$AdsImageStore$p_3;
          }),
          n
        );
      })(r("AdsBaseDataStore_LEGACY"));
    function d(e) {
      return r("isTruthy")(e.stockImageID)
        ? e.stockImageID
        : r("isTruthy")(e.hash)
          ? e.hash
          : e.url;
    }
    var m = new c();
    l.default = m;
  },
  98,
);
