__d(
  "AdsStockImageSourceImageDataStore",
  [
    "invariant",
    "AdsDataAtom",
    "AdsStockImageSourceDataLoader",
    "AdsStockImageSourceImageDataLoadedActionFlux",
    "AdsStockImageSourceImageListLoadedDataActionFlux",
    "AdsStockImageSourceImageLoadFullSizeURLAction",
    "AdsStockImageSourceImageLoadFullSizeURLActionFlux",
    "FluxLoadObjectStore",
    "LoadObject",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = (function (e) {
        function t() {
          for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(o)) || this),
            (t.getWithFullSizeURL = function (e) {
              var n = t.get(e),
                o = n.getValue();
              return (
                o &&
                  (o.fullSizeURL == null || o.fullSizeURL === "") &&
                  !n.isUpdating() &&
                  r("AdsStockImageSourceImageLoadFullSizeURLAction").dispatch(
                    { imageID: e },
                    {
                      line: "75",
                      module: "AdsStockImageSourceImageDataStore.js",
                      moduleID: i.id,
                    },
                  ),
                n
              );
            }),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getInitialState = function () {
            return r("immutable").Map();
          }),
          (n.__getActionTypes = function () {
            return [
              this.getActionTypeStartLoad(),
              o("AdsStockImageSourceImageDataLoadedActionFlux").actionType,
              o("AdsStockImageSourceImageListLoadedDataActionFlux").actionType,
              o("AdsStockImageSourceImageLoadFullSizeURLActionFlux").actionType,
            ];
          }),
          (n.reduce = function (t, n) {
            var e = n.action;
            switch (e.type) {
              case o("AdsStockImageSourceImageListLoadedDataActionFlux")
                .actionType:
                return this.$AdsStockImageSourceImageDataStore$p_1(
                  t,
                  e.response,
                );
              case o("AdsStockImageSourceImageDataLoadedActionFlux").actionType:
                return this.$AdsStockImageSourceImageDataStore$p_2(
                  t,
                  e.response,
                );
              case o("AdsStockImageSourceImageLoadFullSizeURLActionFlux")
                .actionType:
                return this.$AdsStockImageSourceImageDataStore$p_3(
                  t,
                  e.imageID,
                );
              default:
                return t;
            }
          }),
          (n.__load = function (t) {
            r("AdsStockImageSourceDataLoader").loadOneImageData(t);
          }),
          (n.$AdsStockImageSourceImageDataStore$p_2 = function (t, n) {
            var e = n.imageData,
              o = n.imageID,
              a = this.get(o).getValue();
            return (
              a && (e.preview = a.preview),
              t.set(o, r("LoadObject").withValue(e, { creatorModuleID: i.id }))
            );
          }),
          (n.$AdsStockImageSourceImageDataStore$p_1 = function (t, n) {
            var e = n.imageDataList,
              o = n.imageIDs;
            return (
              o.length === e.length || s(0, 3789),
              t.withMutations(function (t) {
                return o.forEach(function (n, o) {
                  return t.set(
                    n,
                    r("LoadObject").withValue(e[o], { creatorModuleID: i.id }),
                  );
                });
              })
            );
          }),
          (n.$AdsStockImageSourceImageDataStore$p_3 = function (t, n) {
            var e = this.get(n);
            return e.isUpdating()
              ? t
              : (this.__load(n), this.__setUpdating(t, [n]));
          }),
          t
        );
      })(r("FluxLoadObjectStore"));
    u.__moduleID = i.id;
    var c = new u(e || (e = r("AdsDataAtom")));
    l.default = c;
  },
  98,
);
