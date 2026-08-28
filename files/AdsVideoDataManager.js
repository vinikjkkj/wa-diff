__d(
  "AdsVideoDataManager",
  [
    "AdsBaseDataManager",
    "AdsGraphAPI",
    "AdsVideoActions",
    "AdsVideoFetcher",
    "FBLogger",
    "getErrorSafe",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "captions",
        "creator_product",
        "description",
        "format",
        "has_sound",
        "id",
        "length",
        "spherical",
        "thumbnails",
        "title",
        "updated_time",
        "has_hd_quality",
        "video_asset_id",
        "cropped_from_video_id",
        "cropped_from_params",
        "trimmed_from_video_id",
        "trimmed_from_params",
        "overlaid_from_video_id",
        "overlaid_from_params",
        "owner_enrolled_optimizations",
        "live_status",
        "download_sd_url",
        "download_hd_url",
        "sibling_non_spherical_video_id",
        "sibling_spherical_video_id",
        "ads_integrity_review_info",
      ],
      s = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.loadAll = function (t) {
            var e = this;
            t.forEach(function (t) {
              return e.load(t);
            });
          }),
          (a.load = function (n) {
            var t = this;
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .object("video", n)
                .batched()
                .get({ fields: e }),
              function (e) {
                return t.__handleSuccess(["load"], n, null, e);
              },
              function (e) {
                return t.__handleError(["load"], n, null, e);
              },
            );
          }),
          (a.__getMultiple = function (n) {
            return this.__withBatching(
              n,
              o("AdsGraphAPI").get(i.id).objects("video", n),
            )
              .get({ fields: e })
              .catch(function (e) {
                throw (
                  r("FBLogger")("video_ads", "get_multiple_failed")
                    .catching(r("getErrorSafe")(e))
                    .warn(
                      "AdsVideoDataManager__getMultiple failed for IDs: %s",
                      n.join(","),
                    ),
                  e
                );
              });
          }),
          (a.__onBatchLoaded = function (t) {
            var e = new Map(),
              n = new Map();
            (t.forEach(function (t, a) {
              try {
                e.set(a, o("AdsVideoFetcher").processFetchedVideo(t));
                var i = t.spherical
                    ? t.sibling_non_spherical_video_id
                    : t.sibling_spherical_video_id,
                  l = new Map();
                i !== void 0 &&
                  i != null &&
                  (r("promiseDone")(
                    o("AdsVideoFetcher").genSingleVideo(i),
                    function (e) {
                      (l.set(i, e), o("AdsVideoActions").videoBatchLoaded(l));
                    },
                  ),
                  e.set(i, o("AdsVideoFetcher").genSingleVideo(i)));
              } catch (e) {
                n.set(a, r("getErrorSafe")(e));
              }
            }),
              e.size > 0 && o("AdsVideoActions").videoBatchLoaded(e),
              n.size > 0 && o("AdsVideoActions").videoBatchLoadError(n));
          }),
          (a.__onBatchLoadError = function (t) {
            o("AdsVideoActions").videoBatchLoadError(t);
          }),
          n
        );
      })(r("AdsBaseDataManager")),
      u = new s();
    l.default = u;
  },
  98,
);
