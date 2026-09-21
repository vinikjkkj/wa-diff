__d(
  "WAWebPairedMediaType.flow",
  [],
  function (t, n, r, o, a, i) {
    var e = new Map([
      ["SD_VIDEO_PARENT", "SD_VIDEO_PARENT"],
      ["HD_VIDEO_CHILD", "HD_VIDEO_CHILD"],
      ["SD_IMAGE_PARENT", "SD_IMAGE_PARENT"],
      ["HD_IMAGE_CHILD", "HD_IMAGE_CHILD"],
      ["MOTION_PHOTO_PARENT", "MOTION_PHOTO_PARENT"],
      ["MOTION_PHOTO_CHILD", "MOTION_PHOTO_CHILD"],
      ["HEVC_VIDEO_PARENT", "HEVC_VIDEO_PARENT"],
      ["HEVC_VIDEO_CHILD", "HEVC_VIDEO_CHILD"],
    ]);
    function l(t) {
      return e.get(t);
    }
    ((i.PAIRED_MEDIA_TYPE_BY_NAME = e), (i.castPairedMediaType = l));
  },
  66,
);
