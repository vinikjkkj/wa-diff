__d(
  "AdsVideoCaptionUtils",
  [
    "errorCode",
    "fbt",
    "AdsCFErrorCodeDeprecated",
    "AdsGraphAPI",
    "AdsImageImageCollectionAddToFrontDataAction",
    "AdsImageImageCollectionSetSelectedDataAction",
    "AdsImageListLoadedDataAction",
    "AdsImageListStoreRecord",
    "AdsVideoFetcher",
    "Promise",
    "VideoCaptionValidator",
    "imperativelyShowGeoModal",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = 180;
    function d(e, t) {
      var n,
        r =
          (n = t.value.split("\\").pop()) == null ? void 0 : n.split("/").pop(),
        a = new FormData();
      return (
        a.append("captions_file", t.files[0], r),
        o("AdsGraphAPI")
          .get(i.id)
          .object("video", e)
          .edge("captions")
          .post(a)
          .then(function (t) {
            return o("AdsVideoFetcher").genSingleVideo(e, !0);
          })
      );
    }
    function m(e, t, n, r) {
      var a = new FormData();
      return (
        t.forEach(function (e, t) {
          var n = "captions_file" + t,
            r = e.getFile();
          a.append(n, r);
        }),
        r != null && a.append("default_locale", r),
        n.forEach(function (e, t) {
          a.append("locales_to_delete[" + t + "]", e);
        }),
        r != null && a.append("default_locale", r),
        o("AdsGraphAPI")
          .get(i.id)
          .object("video", e)
          .edge("captions")
          .post(a)
          .then(function (t) {
            return o("AdsVideoFetcher").genSingleVideo(e, !0);
          })
      );
    }
    function p(t) {
      return new (e || (e = n("Promise")))(function (e, n) {
        var r = t.length,
          a = [];
        if (r == 0) {
          var i = {
            code: null,
            message: null,
            captionText: a.join("\n---EOF---\n"),
          };
          e(i);
        }
        t.forEach(function (t, i) {
          var l = new FileReader();
          (l.readAsText(t.getFile()),
            (l.onload = function (t) {
              var i,
                l = (i = t.target) == null ? void 0 : i.result,
                s = o("VideoCaptionValidator").validateCaptions(l);
              if ((s && n(s), a.push(l), --r == 0)) {
                var u = {
                  code: null,
                  message: null,
                  captionText: a.join("\n---EOF---\n"),
                };
                e(u);
              }
            }));
        });
      });
    }
    function _(e, t) {
      return o("AdsGraphAPI")
        .get(i.id)
        .object("video", e)
        .edge("captions")
        .post({ default_locale: t })
        .then(function (t) {
          return o("AdsVideoFetcher").genSingleVideo(e, !0);
        });
    }
    function f(e, t) {
      return o("AdsGraphAPI")
        .get(i.id)
        .object("video", e)
        .edge("captions")
        .remove({ locale: t })
        .then(function (t) {
          return o("AdsVideoFetcher").genSingleVideo(e, !0);
        });
    }
    function g(e) {
      return o("AdsGraphAPI")
        .get(i.id)
        .object("video", e)
        .edge("captions")
        .get()
        .then(function (t) {
          return o("AdsVideoFetcher").genSingleVideo(e, !0);
        });
    }
    function h(e, t) {
      var n = u._(/*BTDS*/ "Delete Caption"),
        o = u._(/*BTDS*/ "Are you sure you want to delete this video caption?");
      r("imperativelyShowGeoModal")({
        body: o,
        title: n,
        label: n,
        callback: function (r) {
          r && e(t);
        },
      });
    }
    function y(e) {
      return !!e && (e.creator_product === 5 || e.length >= c);
    }
    function C(e) {
      if (!e) return null;
      var t = r("AdsCFErrorCodeDeprecated").errorCodeMap,
        n;
      switch (e.code) {
        case t.API_EC_EDIT_VIDEO_CAPTIONS_UPLOAD_INVALID_LOCALE:
          n = u._(
            /*BTDS*/ "You uploaded a .SRT file with an incorrect file name. Please use this format: filename.en_US.srt",
          );
          break;
        case t.API_EC_EDIT_VIDEO_CAPTIONS_UPLOAD_BAD_FILE_FORMAT:
          n = u._(
            /*BTDS*/ "The file format isn't supported. Please upload SubRip (.srt) files for video captions.",
          );
          break;
        case t.API_EC_EDIT_VIDEO_CAPTIONS_UPLOAD_FILE_TOO_LARGE:
          n = u._(/*BTDS*/ "You uploaded a .SRT file that is too large.");
          break;
        case 2415001:
        case 2415002:
        case 2415003:
        case 2415004:
          n = e.message;
          break;
        default:
          n = u._(/*BTDS*/ "Caption Upload Failed.");
      }
      return n;
    }
    function b(e, t) {
      (r("AdsImageImageCollectionAddToFrontDataAction").dispatch(
        { accountID: t, images: e },
        { line: "265", module: "AdsVideoCaptionUtils.js", moduleID: i.id },
      ),
        e.length === 1 &&
          r("AdsImageImageCollectionSetSelectedDataAction").dispatch(
            { accountID: t, images: e },
            { line: "270", module: "AdsVideoCaptionUtils.js", moduleID: i.id },
          ));
    }
    function v(e, t) {
      var n = {
        created_time: Date.now(),
        hash: e.getAdAccountHash(),
        height: e.getHeight(),
        original_height: e.getHeight(),
        original_width: e.getWidth(),
        url: e.getUrl(),
        width: e.getWidth(),
      };
      r("AdsImageListLoadedDataAction").dispatch(
        {
          images: [n],
          imageListRecord: r("AdsImageListStoreRecord")({ accountID: t }),
        },
        { line: "291", module: "AdsVideoCaptionUtils.js", moduleID: i.id },
      );
    }
    ((l.upload = d),
      (l.uploadCaptions = m),
      (l.validateCaptions = p),
      (l.changeDefaultLocale = _),
      (l.remove = f),
      (l.fetchCaption = g),
      (l.onClickDeleteCaption = h),
      (l.isFBReviewDisabled = y),
      (l.getCaptionUploadError = C),
      (l.onUploadThumbnailEnd = b),
      (l.onUploadThumbnailSuccess = v));
  },
  226,
);
