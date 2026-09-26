__d(
  "getActiveAttachmentFeatureDefinition",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return e.find(function (e) {
        return (
          (e.featureType === "ATTACHMENT" ||
            e.featureType === "READ_ONLY_ATTACHMENT") &&
          e.attachmentType === t
        );
      });
    }
    i.default = e;
  },
  66,
);
