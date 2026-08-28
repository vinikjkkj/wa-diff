__d(
  "AdsVideoUploadStartReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = null;
          if (n.instagramStoryID != null && n.instagramStoryID !== "")
            e = n.instagramStoryID;
          else if (
            n.sourceInstagramMediaID != null &&
            n.sourceInstagramMediaID !== ""
          )
            e = n.sourceInstagramMediaID;
          else return t;
          var r = t.uploadingCarouselVideoChildrenCount,
            o = !1;
          return (
            n.childVideoSourceInstagramMediaID != null &&
              n.childVideoSourceInstagramMediaID !== "" &&
              (o = !0),
            t.merge({
              currentStoryID: e,
              errorMessage: null,
              isCarousel: o,
              isProcessing: !0,
              uploadedVideoID: null,
              uploadingCarouselVideoChildrenCount: o ? r + 1 : 0,
              isIGMediaPickerSource: n.isIGMediaPickerSource,
              isLocalVideoUpload: n.isLocalVideoUpload,
              isMultiUploadEligible: n.isMultiUploadEligible,
              isBaseAsset: n.isBaseAsset,
            })
          );
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
