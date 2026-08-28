__d(
  "AdsVideoUploadStoreState",
  ["AdsVideoUploadConsts", "AdsVideoUploadStatus", "immutable"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("immutable").Record({
        __internalUploader: null,
        encodingTime: null,
        entryPoint: null,
        errorMessage: null,
        fileHandle: null,
        isOriginallySphericalVideo: null,
        isSphericalToggleEnabled: !1,
        newlyUploadedVideoErrors: null,
        nonSphericalSiblingVideoID: null,
        progress: 0,
        recentUploadedVideoID_DO_NOT_USE: null,
        sphericalSiblingVideoID: null,
        status: n("AdsVideoUploadStatus").NONE,
        title: "",
        uploadedUrl: null,
        uploaderKey: n("AdsVideoUploadConsts").DEFAULT_UPLOADER_KEY,
        uploadTime: null,
        videoBackgroundUploadInfo: null,
        videoUploadDLOInfo: null,
        videoUploadPACInfo: null,
      }),
      l = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e),
      s = l;
    i.default = s;
  },
  66,
);
