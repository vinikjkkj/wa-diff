__d(
  "isAttachmentLargeEnoughForWarning",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 1024,
      l = e * 1024 * 1024;
    function s(e) {
      return e.file.size > l;
    }
    ((i.attachmentSizeWarningThresholdMegabytes = e),
      (i.isAttachmentLargeEnoughForWarning = s));
  },
  66,
);
