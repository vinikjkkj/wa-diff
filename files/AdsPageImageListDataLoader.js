__d(
  "AdsPageImageListDataLoader",
  [
    "AdsAssetListBaseDataLoader",
    "AdsGraphAPI",
    "AdsImageDialogPanelUtils",
    "AdsImageIDClasses",
    "AdsImageSelectorV2Types",
    "AdsPageImageListLoadedAction",
    "AdsPerfInteractionsController",
    "FBLogger",
    "Promise",
    "buildPageImagesRequest",
    "immutable",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        "height",
        "id",
        "source",
        "picture",
        "width",
        "ads_integrity_review_info",
      ],
      u = (function (t) {
        function a() {
          for (var a, l = arguments.length, u = new Array(l), c = 0; c < l; c++)
            u[c] = arguments[c];
          return (
            (a = t.call.apply(t, [this].concat(u)) || this),
            (a.load = function (t, o) {
              return a
                .sendRequest(t, o)
                .then(function (e) {
                  var n = a.handleResponse(e, t),
                    o = n.after,
                    l = n.imageDataList,
                    s = n.imageIDList,
                    u = s,
                    c = u;
                  return (
                    r("AdsPageImageListLoadedAction").dispatch(
                      { imageDataList: l, imageIDList: c },
                      {
                        line: "95",
                        module: "AdsPageImageListDataLoader.js",
                        moduleID: i.id,
                      },
                    ),
                    { imageIDs: r("immutable").OrderedSet(s), after: o }
                  );
                })
                .catch(function (t) {
                  return (
                    r("AdsPerfInteractionsController").annotateFailure(
                      "am.dialog_editor.media_picker",
                      i.id,
                      {
                        error: t,
                        errorContext: {
                          errorCode: t == null ? void 0 : t.code,
                        },
                      },
                    ),
                    (e || (e = n("Promise"))).reject(t)
                  );
                });
            }),
            (a.loadOne = function (e) {
              var t = { fields: s },
                n = e.getFacebookID();
              if (n == null)
                throw r("FBLogger")("am_feature_pac").mustfixThrow(
                  "imageID cannot be null",
                );
              return o("AdsGraphAPI")
                .get(i.id)
                .object("photo", n)
                .get(t)
                .then(function (e) {
                  var t = e.ads_integrity_review_info,
                    n = e.height,
                    r = e.id,
                    o = e.picture,
                    a = e.source,
                    i = e.width;
                  return {
                    height: n,
                    id: r,
                    url: a,
                    url_128: o,
                    width: i,
                    ads_integrity_review_info: t,
                  };
                });
            }),
            babelHelpers.assertThisInitialized(a) ||
              babelHelpers.assertThisInitialized(a)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var l = a.prototype;
        return (
          (l.sendRequest = function (t, n) {
            return r("buildPageImagesRequest")(t, n).go();
          }),
          (l.handleResponse = function (t, n) {
            var e,
              a,
              i = t.data.map(function (e) {
                var t = e.largest_image;
                return {
                  height: t.height,
                  id: e.id,
                  url: t.source,
                  url_128: e.picture,
                  width: t.width,
                  ads_integrity_review_info: e.ads_integrity_review_info,
                };
              }),
              l = i.map(function (e) {
                return o("AdsImageIDClasses").AdsImageID.fromExternalURL(
                  e.url,
                  e.id,
                );
              }),
              s = n.title;
            return (
              l.length === 0 &&
                s != null &&
                s != "" &&
                o("AdsImageDialogPanelUtils").logEmptySearchResult(
                  o("AdsImageSelectorV2Types").AdsImageSource.PAGE_IMAGE,
                  s,
                ),
              {
                imageIDList: l,
                imageDataList: i,
                after: r("isTruthy")(
                  t == null || (e = t.paging) == null ? void 0 : e.next,
                )
                  ? t == null ||
                    (a = t.paging) == null ||
                    (a = a.cursors) == null
                    ? void 0
                    : a.after
                  : void 0,
                query: n,
              }
            );
          }),
          a
        );
      })(r("AdsAssetListBaseDataLoader")),
      c = new u();
    l.default = c;
  },
  98,
);
