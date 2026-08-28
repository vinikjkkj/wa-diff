__d(
  "AdsVideoUploadUtil",
  [
    "AdsGraphAPI",
    "AdsVideoUploadConsts",
    "AdsVideoUploadStatus",
    "AdsVideoUploadStoreState",
    "URI",
    "UrlMapConfig",
    "adsMemoizeWithArgs",
    "immutable",
    "memoizeWithArgsCapped",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 20;
    function u(e, t, n) {
      return String(e) + String(t) + String(n);
    }
    function c(e) {
      return "video_upload_" + e;
    }
    function d(e, t) {
      return t + "_" + e;
    }
    function m(e) {
      var t = e.name,
        n = t.lastIndexOf("\\");
      return (
        n === -1 && (n = t.lastIndexOf("/")),
        n === -1 ? t : t.substring(n + 1)
      );
    }
    function p(t, n, a) {
      var i = "/v" + o("AdsGraphAPI").getVersion() + "/act_" + n + "/advideos",
        l = {};
      ((l.access_token = t), a != null && (l.title = a));
      var s = (e || (e = r("URI")))
        .getRequestURI()
        .setPath(i)
        .setQueryData(l)
        .setDomain(r("UrlMapConfig").graph);
      return s.toString();
    }
    function _(e) {
      return (
        !!e &&
        e.some(function (e) {
          return (
            e.status === r("AdsVideoUploadStatus").UPLOADING ||
            e.status === r("AdsVideoUploadStatus").ENCODING
          );
        })
      );
    }
    function f(e, t) {
      return e.find(function (e) {
        return e.videoUploadDLOInfo && e.videoUploadDLOInfo.language === t;
      });
    }
    function g(e) {
      var t =
        e &&
        e.find(function (e) {
          return !!e.errorMessage;
        });
      return t && t.errorMessage;
    }
    function h(e) {
      return e >= 0 && e <= 1 ? Math.round(e * 100) : e;
    }
    function y(e, t, n) {
      var r = new Map();
      return (
        n.forEach(function (n, o) {
          r.set(d(e + o, t), n);
        }),
        r
      );
    }
    function C(e, t) {
      return (
        (e = e.filter(function (e, n) {
          return t.has(n);
        })),
        e.size === t.size &&
          e.every(function (e, t) {
            return (
              r("AdsVideoUploadStatus").ERROR === e.status ||
              e.recentUploadedVideoID_DO_NOT_USE != null
            );
          })
      );
    }
    function b(e, t) {
      if (t.size === 0) return 0;
      var n = e.reduce(function (e, n, r) {
        return t.has(r) ? e + n.progress : e;
      }, 0);
      return n / t.size;
    }
    var v = r("memoizeWithArgsCapped")(
        function (e, t, n) {
          var a;
          return r("immutable").Map(
            ((a = {}),
            (a[o("AdsVideoUploadConsts").DEFAULT_UPLOADER_KEY] = new (r(
              "AdsVideoUploadStoreState",
            ))({
              title: e || "",
              progress: t || 0,
              status: n || r("AdsVideoUploadStatus").NONE,
            })),
            a),
          );
        },
        u,
        s,
      ),
      S = r("adsMemoizeWithArgs")(
        function (e) {
          if (e.videoBackgroundUploadInfo != null) {
            var t = babelHelpers.extends({}, e.videoBackgroundUploadInfo, {
              uploadToLibrary: !0,
              videoUploadingAdgroupIDs: [],
            });
            return babelHelpers.extends({}, e, {
              videoBackgroundUploadInfo: t,
            });
          }
          return e;
        },
        function (e) {
          return JSON.stringify(e);
        },
        i.id,
      );
    ((l.generateUploaderKey = c),
      (l.generateCustomUploaderKey = d),
      (l.getVideoTitle = m),
      (l.getPostEndpoint = p),
      (l.atLeastOneVideoUploading = _),
      (l.getDLOVideoUploadingForLanguage = f),
      (l.getFirstErrorMessage = g),
      (l.normalizeProgress = h),
      (l.generateFileMap = y),
      (l.isBulkVideoUploadComplete = C),
      (l.calculateBulkVideoUploadProgress = b),
      (l.wrapLegacyUploadInfoAsImmMap = v),
      (l.getBulkUploadVideoUploaderContext = S));
  },
  98,
);
