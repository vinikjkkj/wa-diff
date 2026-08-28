__d(
  "AdsInstagramVideoUploaderDataProviderPlugin",
  ["AdsPerfInteractionConstants", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        currentStoryID: null,
        errorMessage: null,
        isCarousel: !1,
        isProcessing: !1,
        uploadedVideoID: null,
        uploadingCarouselVideoChildrenCount: 0,
        isIGMediaPickerSource: !1,
        isLocalVideoUpload: !1,
        isBaseAsset: !1,
        isMultiUploadEligible: !1,
        callsite: o("AdsPerfInteractionConstants")
          .VideoUploadSuccessCallsiteEnums
          .ADS_INSTAGRAM_VIDEO_UPLOADER_PROVIDER,
      },
      s = r("immutable").Record(e),
      u = function () {
        return s();
      },
      c = { initialState: u() },
      d = c;
    l.default = d;
  },
  98,
);
