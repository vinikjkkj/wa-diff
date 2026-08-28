__d(
  "getPostTypeFromAttachments",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.firstAttachmentMediaType,
        n = e.firstAttachmentType,
        r = e.isFbStories,
        o = e.numAttachments,
        a = o > 0 ? (t === "link" ? "status" : t) : "status";
      if (r === !0)
        e: {
          if (n === "story_card_video") {
            a = "video";
            break e;
          }
          if (n === "story_card_photo") {
            a = "photo";
            break e;
          }
          break e;
        }
      return a;
    }
    i.default = e;
  },
  66,
);
