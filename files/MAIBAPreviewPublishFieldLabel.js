__d(
  "MAIBAPreviewPublishFieldLabel",
  ["AdsEditFieldLabels", "MAIBAPreviewPublishSettingFormatter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return (t = o("MAIBAPreviewPublishSettingFormatter").getSettingFieldLabel(
        e,
      )) != null
        ? t
        : o("AdsEditFieldLabels").getFieldLabel(e);
    }
    l.formatFieldLabel = e;
  },
  98,
);
