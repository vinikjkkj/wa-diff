__d(
  "AdsUEditorAdgroupCachedChildMediaFomatDataRecord",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(
      r("immutable").Record({
        description: null,
        imageCrops: null,
        imageHash: null,
        imageURL: null,
        link: null,
        name: null,
        thumbnailURL: null,
        videoID: null,
        captionIDs: null,
        parentSourceInstagramMediaID: null,
        parentSourceFacebookPostID: null,
      }),
    );
    e.getEmptyRecord = function () {
      return s;
    };
    var s = new e();
    l.default = e;
  },
  98,
);
