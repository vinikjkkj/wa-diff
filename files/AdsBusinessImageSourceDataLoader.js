__d(
  "AdsBusinessImageSourceDataLoader",
  [
    "AdsAssetListBaseDataLoader",
    "AdsBusinessImageListLoadedAction",
    "AdsGraphAPI",
    "AdsImageDialogPanelUtils",
    "AdsImageIDClasses",
    "AdsImageSelectorV2Types",
    "buildBusinessImagesRequest",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          for (var t, n = arguments.length, a = new Array(n), l = 0; l < n; l++)
            a[l] = arguments[l];
          return (
            (t = e.call.apply(e, [this].concat(a)) || this),
            (t.load = function (e, n) {
              return t.sendRequest(e, n).then(function (e) {
                var t,
                  n,
                  a,
                  l = e.data.map(function (e) {
                    return {
                      height: e.height,
                      hash: e.hash,
                      id: e.id,
                      url: e.url,
                      url_128: e.url_128,
                      width: e.width,
                      name: e.name,
                      ads_integrity_review_info: e.ads_integrity_review_info,
                    };
                  }),
                  s = l.map(function (e) {
                    return o(
                      "AdsImageIDClasses",
                    ).AdsImageID.fromBusinessImageIDAndHash(e.id, e.hash);
                  }),
                  u = s;
                return (
                  r("AdsBusinessImageListLoadedAction").dispatch(
                    { imageDataList: l, imageIDList: u },
                    {
                      line: "72",
                      module: "AdsBusinessImageSourceDataLoader.js",
                      moduleID: i.id,
                    },
                  ),
                  {
                    imageIDs: r("immutable").OrderedSet(s),
                    after:
                      (e == null || (t = e.paging) == null ? void 0 : t.next) !=
                        null &&
                      (e == null || (n = e.paging) == null
                        ? void 0
                        : n.next) !== ""
                        ? e == null ||
                          (a = e.paging) == null ||
                          (a = a.cursors) == null
                          ? void 0
                          : a.after
                        : void 0,
                  }
                );
              });
            }),
            (t.loadOne = function (e) {
              var t = {
                fields: [
                  "height",
                  "hash",
                  "id",
                  "name",
                  "url",
                  "url_128",
                  "width",
                  "ads_integrity_review_info",
                ],
              };
              return o("AdsGraphAPI")
                .get(i.id)
                .object("image", e.getBusinessImageID())
                .get(t);
            }),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.sendRequest = function (t, n) {
            return r("buildBusinessImagesRequest")(t, n)
              .go()
              .then(function (e) {
                return (
                  e.data.length === 0 &&
                    t.title != null &&
                    t.title !== "" &&
                    o("AdsImageDialogPanelUtils").logEmptySearchResult(
                      o("AdsImageSelectorV2Types").AdsImageSource
                        .BUSINESS_IMAGE,
                      t.title,
                    ),
                  e
                );
              });
          }),
          t
        );
      })(r("AdsAssetListBaseDataLoader")),
      s = new e();
    l.default = s;
  },
  98,
);
