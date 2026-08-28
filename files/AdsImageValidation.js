__d(
  "AdsImageValidation",
  [
    "errorCode",
    "errorDesc",
    "fbt",
    "AdImageSpecs",
    "AdsAPIAdgroupPaths",
    "AdsBuyingTypes",
    "AdsCFImageTypes",
    "AdsError",
    "AdsErrorsCTAStrings",
    "AdsInstagramSoftErrors",
    "AdsInterfacesLogger",
    "AdsPageTypes",
    "AdsStockImageSourceUtils",
    "AdsThreadsMediaSpecs",
    "FBLogger",
    "InstagramAdImageStoryPortalSpecs",
    "gkx",
    "keyMirror",
  ],
  function (t, n, r, o, a, i, l, s, u, c) {
    "use strict";
    var e = 0.8,
      d = { minWidth: 600, minHeight: 600 };
    function m(e) {
      for (var t in r("AdImageSpecs")) if (r("AdImageSpecs")[t] === e) return t;
      return null;
    }
    var p = {
      isValidFormat: function (t) {
        return Object.prototype.hasOwnProperty.call(r("AdsCFImageTypes"), t);
      },
      isWarningSize: function (t, n) {
        var e = t.getWidth(),
          r = t.getHeight();
        if (t.isStockImage() && !t.hasFullSizeDimensions()) {
          var a = Math.min(
            o("AdsStockImageSourceUtils").MAX_STOCK_IMAGE_WIDTH / e,
            o("AdsStockImageSourceUtils").MAX_STOCK_IMAGE_HEIGHT / r,
          );
          ((r = Math.round(r * a)), (e = Math.round(e * a)));
        }
        return e >= n.minWarningWidth && r >= n.minWarningHeight;
      },
      isValidCropSize: function (t, n) {
        return (
          t[1][0] - t[0][0] + 1 >= n.minWarningWidth &&
          t[1][1] - t[0][1] + 1 >= n.minWarningHeight
        );
      },
      isValidAspectRatio: function (t, n) {
        return p.validateAspectRatio(
          t.getWidth() / t.getHeight(),
          Object.prototype.hasOwnProperty.call(n, "maxWarningAspectRatio")
            ? n.maxWarningAspectRatio
            : null,
          Object.prototype.hasOwnProperty.call(n, "minWarningAspectRatio")
            ? n.minWarningAspectRatio
            : null,
          Object.prototype.hasOwnProperty.call(n, "aspectRatioTolerance")
            ? n.aspectRatioTolerance
            : null,
        );
      },
      validateAspectRatio: function (t, n, r, o) {
        var e = o || 0;
        return !((r && t < r * (1 - e)) || (n && t > n * (1 + e)));
      },
      isRecommendedSize: function (t, n) {
        var e = n.height,
          r = n.width;
        return (
          e != null && r != null && t.getHeight() >= e && t.getWidth() >= r
        );
      },
      isLargeSize: function (t, n) {
        var e = n.minLargeHeight,
          r = n.minLargeWidth,
          o = r != null && t.getWidth() >= (r != null ? r : 0),
          a = e != null && t.getHeight() >= (e != null ? e : 0);
        return p.isRecommendedSize(t, n) || (o && a);
      },
      isSmallSize: function (t, n) {
        return p.isLargeSize(t, n) || p.isWarningSize(t, n);
      },
      hasSmallFormat: function (t) {
        var e = t;
        return !!(e.minLargeWidth && e.minLargeHeight);
      },
      validate: function (t, n, r) {
        if (n.placement != null && n.placement in t.validationMap) {
          r(t, n, t.validationMap[n.placement]);
          return;
        }
        var e = p._imageDimensionsReady.bind(p, t, n, r);
        t.setDimensionsReadyCallback(e);
      },
      validateNow: function (t, n, o, a, i) {
        if (!t.isValidated(n.placement)) {
          if (!t.hasDimensions()) {
            r("FBLogger")("ads").warn(
              "validateNow requires an image's dimensions to be set. Use the validate function if you do not have these available",
            );
            return;
          }
          var e = p._getValidation(t, n, o, a, i);
          n.placement && (t.validationMap[n.placement] = e);
        }
      },
      _imageDimensionsReady: function (t, n, r) {
        var e = p._getValidation(t, n, t.getCrops());
        r(t, n, e);
      },
      _getImageResolutionError: function (t, n) {
        return (
          r("AdsInterfacesLogger").logOnce({
            eventName: "ig_image_resolution_validation_warning_message",
            data: {
              subsequent_data: JSON.stringify({
                minWarningWidth: t.minWarningWidth,
                minWarningHeight: t.minWarningHeight,
              }),
            },
          }),
          c._(
            /*BTDS*/ "Images must be at least {minimum Instagram ad image width} x {minimum Instagram ad image height} pixels.",
            [
              c._param("minimum Instagram ad image width", t.minWarningWidth),
              c._param("minimum Instagram ad image height", t.minWarningHeight),
            ],
          )
        );
      },
      _getValidation: function (t, n, o, a, i) {
        var e,
          l,
          s,
          u = [],
          d,
          _,
          f,
          g,
          h = n.placement,
          y = n,
          C =
            Object.prototype.hasOwnProperty.call(n, "height") &&
            Object.prototype.hasOwnProperty.call(n, "width"),
          b = "\n",
          v = "\n\n",
          S = C
            ? c._(
                /*BTDS*/ '_j{"*":{"*":{"*":{"*":"This image is too small. Please use a larger image.{newLine1}Minimum Size: {minimumWidth} x {minimumHeight} pixels{newLine2}Recommended Size: {recommendedWidth} x {recommendedHeight} pixels"}}}}',
                [
                  c._param("minimumWidth", n.minWarningWidth, [0]),
                  c._param("minimumHeight", n.minWarningHeight, [0]),
                  c._param("recommendedWidth", y.width, [0]),
                  c._param("recommendedHeight", y.height, [0]),
                  c._param("newLine1", v),
                  c._param("newLine2", b),
                ],
              )
            : c._(
                /*BTDS*/ '_j{"*":{"*":"This image is too small. Please use a larger image.{newLine}Minimum Size: {width} x {height} pixels"}}',
                [
                  c._param("width", n.minWarningWidth, [0]),
                  c._param("height", n.minWarningHeight, [0]),
                  c._param("newLine", v),
                ],
              );
        if (h === r("AdsPageTypes").WHATSAPP_STATUS)
          return {
            successMessage: e,
            warningMessage: l,
            errorMessage: s,
            specificErrors: u,
          };
        var R = r("keyMirror")(r("AdImageSpecs")),
          L = m(n);
        switch (L) {
          case R.EVENT_DESKTOP_FEED:
          case R.EVENT_MOBILE_FEED:
          case R.EVENT_RHC:
            break;
          default:
            if (
              ((d = p.isWarningSize(t, n)),
              d
                ? (h === r("AdsPageTypes").DESKTOP_FEED ||
                    h === r("AdsPageTypes").MOBILE_FEED) &&
                  p.hasSmallFormat(n) &&
                  ((g = p.isRecommendedSize(t, n)),
                  (f = p.isLargeSize(t, n)),
                  (_ = p.isSmallSize(t, n)),
                  g
                    ? (e = c._(
                        /*BTDS*/ "This image will display in high-resolution on Facebook.",
                      ))
                    : f && !g
                      ? (e = C
                          ? c._(
                              /*BTDS*/ '_j{"*":{"*":"This image will show in the wider format in Feed.{newLine}Recommended Size: {width} x {height} pixels"}}',
                              [
                                c._param("width", y.width, [0]),
                                c._param("height", y.height, [0]),
                                c._param("newLine", v),
                              ],
                            )
                          : c._(
                              /*BTDS*/ "This image will show in the wider format in Feed.",
                            ))
                      : _ &&
                        !g &&
                        (l = C
                          ? c._(
                              /*BTDS*/ '_j{"*":{"*":"Upload a larger image to be eligible for the wider format in Feed.{newLine}Recommended size: {width} x {height} pixels"}}',
                              [
                                c._param("width", y.width, [0]),
                                c._param("height", y.height, [0]),
                                c._param("newLine", v),
                              ],
                            )
                          : c._(
                              /*BTDS*/ "Upload a larger image to be eligible for the wider format in Feed.",
                            )))
                : h === r("AdsPageTypes").MOBILE_FB_STORY
                  ? (l = S)
                  : (s = S),
              h === r("AdsPageTypes").INSTAGRAM_STREAM ||
                h === r("AdsPageTypes").INSTAGRAM_STORY ||
                h === r("AdsPageTypes").INSTAGRAM_EXPLORE ||
                h === r("AdsPageTypes").INSTAGRAM_SHOP ||
                h === r("AdsPageTypes").INSTAGRAM_REELS_OVERLAY ||
                h === r("AdsPageTypes").INSTAGRAM_EXPLORE_HOME ||
                h === r("AdsPageTypes").INSTAGRAM_PROFILE_FEED ||
                h === r("AdsPageTypes").INSTAGRAM_SEARCH)
            ) {
              var E = void 0,
                k = o && o[n.cropKey];
              if (p.isWarningSize(t, n)) {
                if (o && k && !p.isValidCropSize(o[n.cropKey], n)) {
                  var T = p._getImageResolutionError(n, a);
                  (u.push(
                    new (r("AdsError"))(2016007, T, {
                      level: r("AdsError").Level.WARN,
                      path: r("AdsAPIAdgroupPaths").CREATIVE.IMAGE_HASH,
                    }),
                  ),
                    (E = T));
                }
              } else {
                var I = p._getImageResolutionError(n, a);
                (u.push(
                  new (r("AdsError"))(1772077, I, {
                    level: r("AdsError").Level.WARN,
                    path: r("AdsAPIAdgroupPaths").CREATIVE.IMAGE_HASH,
                  }),
                ),
                  (E = I));
              }
              E != null && (s = E);
            }
        }
        return {
          successMessage: e,
          warningMessage: l,
          errorMessage: s,
          specificErrors: u,
        };
      },
      getAdsErrorForImageWithImageSpec: function (t, n, o, a) {
        p.validateNow(t, n, null, o, a);
        var e = t.getValidation(n.placement),
          i = e.errorMessage;
        if (!i) return null;
        var l =
            n.placement === r("AdsPageTypes").INSTAGRAM_STREAM ||
            n.placement === r("AdsPageTypes").INSTAGRAM_STORY ||
            n.placement === r("AdsPageTypes").INSTAGRAM_EXPLORE ||
            n.placement === r("AdsPageTypes").INSTAGRAM_SHOP ||
            n.placement === r("AdsPageTypes").INSTAGRAM_REELS_OVERLAY ||
            n.placement === r("AdsPageTypes").INSTAGRAM_EXPLORE_HOME ||
            n.placement === r("AdsPageTypes").INSTAGRAM_PROFILE_FEED ||
            n.placement === r("AdsPageTypes").INSTAGRAM_SEARCH,
          s = l ? 2016006 : 1487015,
          u = l ? null : r("AdsErrorsCTAStrings").UPDATE_ADGROUP_CREATIVE_CTA;
        return new (r("AdsError"))(s, i, {
          level: r("AdsError").Level.WARN,
          cta: u,
        });
      },
      getAdsErrorsForImage: function (t, n, o, a, i) {
        var e;
        if (
          (a === void 0 && (a = r("AdsError").Level.RECOMMEND),
          n.length === 0 || !t.hasDimensions())
        )
          return [];
        var l = [];
        if (h(n, r("AdsPageTypes").THREADS_STREAM)) {
          var s;
          (s = l).push.apply(s, _(t));
        }
        return (
          (e = l).push.apply(e, f(t, n, a)),
          n.forEach(function (e) {
            if (
              !g(
                e,
                r("AdsPageTypes").INSTAGRAM_STORY,
                r("AdsPageTypes").INSTAGRAM_STREAM,
                r("AdsPageTypes").INSTAGRAM_EXPLORE,
                r("AdsPageTypes").INSTAGRAM_SHOP,
                r("AdsPageTypes").INSTAGRAM_REELS_OVERLAY,
                r("AdsPageTypes").INSTAGRAM_EXPLORE_HOME,
                r("AdsPageTypes").INSTAGRAM_PROFILE_FEED,
                r("AdsPageTypes").INSTAGRAM_SEARCH,
                r("AdsPageTypes").WHATSAPP_STATUS,
              )
            ) {
              (e.placement === r("AdsPageTypes").MOBILE_FB_STORY &&
                (p.isWarningSize(t, e)
                  ? p.isValidAspectRatio(t, e) ||
                    l.push(
                      new (r("AdsError"))(
                        1443207,
                        u._(function (e, t) {
                          return e._(
                            /*BTDS*/ "Ads in Facebook Stories must have an aspect ratio ranging from 9:16 to 1.91:1.",
                          );
                        }, {}),
                        {
                          level: a,
                          path: r("AdsAPIAdgroupPaths").CREATIVE.IMAGE_HASH,
                        },
                      ),
                    )
                  : l.push(
                      new (r("AdsError"))(
                        1443205,
                        u._(function (e, t) {
                          return e._(
                            /*BTDS*/ "The width of photo and video has to be larger than 500px for ads in Facebook Stories.",
                          );
                        }, {}),
                        {
                          level: a,
                          path: r("AdsAPIAdgroupPaths").CREATIVE.IMAGE_HASH,
                        },
                      ),
                    )),
                e.placement === r("AdsPageTypes").MOBILE_INSTREAM_VIDEO &&
                  (p.isValidAspectRatio(t, e)
                    ? p.isWarningSize(t, e) ||
                      l.push(
                        new (r("AdsError"))(
                          1815938,
                          u._(function (e, t) {
                            return e._(
                              /*BTDS*/ "Non-interruptive in-stream reels must be at least 92 pixels.",
                            );
                          }, {}),
                          {
                            level: a,
                            path: r("AdsAPIAdgroupPaths").CREATIVE.IMAGE_HASH,
                          },
                        ),
                      )
                    : l.push(
                        new (r("AdsError"))(
                          1815862,
                          u._(function (e, t) {
                            return e._(
                              /*BTDS*/ "Images used for in-stream ads cannot be portrait.",
                            );
                          }, {}),
                          {
                            level: a,
                            path: r("AdsAPIAdgroupPaths").CREATIVE.IMAGE_HASH,
                          },
                        ),
                      )));
              var n = p.getAdsErrorForImageWithImageSpec(t, e, o);
              n && l.push(n);
            }
          }),
          l.length !== 0 ||
            (n.forEach(function (e, n) {
              if (
                g(
                  e,
                  r("AdsPageTypes").INSTAGRAM_STORY,
                  r("AdsPageTypes").INSTAGRAM_STREAM,
                  r("AdsPageTypes").INSTAGRAM_EXPLORE,
                  r("AdsPageTypes").INSTAGRAM_SHOP,
                  r("AdsPageTypes").INSTAGRAM_REELS_OVERLAY,
                  r("AdsPageTypes").INSTAGRAM_EXPLORE_HOME,
                  r("AdsPageTypes").INSTAGRAM_PROFILE_FEED,
                  r("AdsPageTypes").INSTAGRAM_SEARCH,
                )
              ) {
                var a = i != null ? i[n] : null,
                  s = p.getAdsErrorForImageWithImageSpec(t, e, o, a);
                s && l.push(s);
              }
            }),
            l.length !== 0 &&
              n.length > 1 &&
              (!o || !o.includes(r("AdsBuyingTypes").RESERVED)) &&
              (l = l.map(function (e) {
                return (
                  e.key in r("AdsInstagramSoftErrors") &&
                    e.level === r("AdsError").Level.WARN &&
                    (e.level = r("AdsError").Level.RECOMMEND),
                  e
                );
              }))),
          l
        );
      },
      getDefaultImageSpec: function (t, n, o) {
        if (t !== "instagram") return o[0];
        var e = n.getWidth(),
          a = n.getHeight(),
          i;
        (o.some(function (e) {
          return (
            e.cropKey === r("AdImageSpecs").INSTAGRAM_STREAM_LANDSCAPE.cropKey
          );
        }) &&
        e > 0 &&
        a > 0 &&
        p.isWarningSize(n, r("AdImageSpecs").INSTAGRAM_STREAM_NO_CROP) &&
        !p.isValidAspectRatio(n, r("AdImageSpecs").INSTAGRAM_STREAM_NO_CROP)
          ? (i =
              e > a
                ? r("AdImageSpecs").INSTAGRAM_STREAM_LANDSCAPE.cropKey
                : r("AdImageSpecs").INSTAGRAM_STREAM.cropKey)
          : (i = r("AdImageSpecs").INSTAGRAM_STREAM_NO_CROP.cropKey),
          o.some(function (e) {
            return e.cropKey === r("AdImageSpecs").INSTAGRAM_STORY_CROP.cropKey;
          }) &&
          e > 0 &&
          a > 0 &&
          p.isWarningSize(n, r("AdImageSpecs").INSTAGRAM_STORY) &&
          !p.isValidAspectRatio(n, r("AdImageSpecs").INSTAGRAM_STORY)
            ? (i = r("AdImageSpecs").INSTAGRAM_STORY_CROP.cropKey)
            : o.some(function (e) {
                  return (
                    e.placement === r("AdsPageTypes").INSTAGRAM_STORY &&
                    e.cropKey ===
                      r("InstagramAdImageStoryPortalSpecs")
                        .INSTAGRAM_STORY_SQUARE.cropKey
                  );
                })
              ? (i = r("InstagramAdImageStoryPortalSpecs")
                  .INSTAGRAM_STORY_SQUARE.cropKey)
              : (i = r("AdImageSpecs").INSTAGRAM_STORY.cropKey));
        var l = o.find(function (e) {
          return e.cropKey === i;
        });
        return (l || (l = o[0]), l);
      },
    };
    function _(e) {
      var t = [],
        n = e.getWidth(),
        o = e.getHeight(),
        a = n && o ? n / o : null,
        i = r("gkx")("1742"),
        l = i ? 4588046 : 4588035,
        s = i
          ? u._(function (e, t) {
              return e._(
                /*BTDS*/ "Threads feed supports media aspect ratios 1.91:1 to 9:16. This image or video will be cropped to fit.",
              );
            }, {})
          : u._(function (e, t) {
              return e._(
                /*BTDS*/ "Threads feed supports media aspect ratios 1.91:1 to 4:5. This image or video will be cropped to fit.",
              );
            }, {});
      return (
        a &&
          a < r("AdsThreadsMediaSpecs").MIN_ASPECT_RATIO &&
          t.push(
            new (r("AdsError"))(l, s, {
              level: r("AdsError").Level.RECOMMEND,
              path: r("AdsAPIAdgroupPaths").CREATIVE.IMAGE_HASH,
            }),
          ),
        t
      );
    }
    function f(t, n, o) {
      if (!h(n, r("AdsPageTypes").MOBILE_FEED)) return [];
      var a = [],
        i = t.getWidth(),
        l = t.getHeight(),
        s = i && l ? i / l : null;
      return (
        s &&
          s < e &&
          a.push(
            new (r("AdsError"))(
              1443311,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "This image will be masked on Mobile News Feed. The tallest supported aspect ratio for images without links and videos on Mobile Feed is vertical (4:5).",
                );
              }, {}),
              {
                level: r("AdsError").Level.RECOMMEND,
                path: r("AdsAPIAdgroupPaths").CREATIVE.IMAGE_HASH,
              },
            ),
          ),
        (t.getWidth() < d.minWidth || t.getHeight() < d.minHeight) &&
          a.push(
            new (r("AdsError"))(
              1443303,
              u._(
                function (e, t) {
                  return e._(
                    /*BTDS*/ "Images smaller than {minWidth} x {minHeight} may display as a small image tile on high resolution devices. Use a higher resolution image so your ad displays optimally across devices.",
                    [
                      e._param("minWidth", t.minWidth),
                      e._param("minHeight", t.minHeight),
                    ],
                  );
                },
                { minWidth: d.minWidth, minHeight: d.minHeight },
              ),
              { level: o, path: r("AdsAPIAdgroupPaths").CREATIVE.IMAGE_HASH },
            ),
          ),
        a
      );
    }
    function g(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      return e.placement != null && n.includes(e.placement);
    }
    function h(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      return e.some(function (e) {
        return g.apply(void 0, [e].concat(n));
      });
    }
    var y = p;
    l.default = y;
  },
  226,
);
