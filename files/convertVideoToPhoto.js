__d(
  "convertVideoToPhoto",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [
      "activeCaptionID",
      "fileMimeType",
      "trimData",
      "videoAttachmentAudioDescriptionsMetadata",
      "videoAttachmentMetadata",
      "videoAttachmentTextTranscriptsMetadata",
    ];
    function l(t) {
      var n = t.data.id,
        r = t.activeCaptionID,
        o = t.fileMimeType,
        a = t.trimData,
        i = t.videoAttachmentAudioDescriptionsMetadata,
        l = t.videoAttachmentMetadata,
        s = t.videoAttachmentTextTranscriptsMetadata,
        u = babelHelpers.objectWithoutPropertiesLoose(t, e);
      if (n == null) return null;
      switch (u.state) {
        case "NEW":
          return babelHelpers.extends({}, u, {
            data: { id: n },
            fileType: "PHOTO",
          });
        case "CLIENT_PROCESSING_COMPLETE":
          return babelHelpers.extends({}, u, {
            data: { id: n },
            fileType: "PHOTO",
          });
        case "CLIENT_PROCESSING":
          return babelHelpers.extends({}, u, {
            data: { id: n },
            fileType: "PHOTO",
          });
        case "QUEUED":
          return babelHelpers.extends({}, u, {
            data: { id: n },
            fileType: "PHOTO",
          });
        case "FAILED":
          return babelHelpers.extends({}, u, {
            data: { id: n },
            fileType: "PHOTO",
          });
      }
    }
    i.default = l;
  },
  66,
);
