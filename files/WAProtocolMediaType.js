__d(
  "WAProtocolMediaType",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      switch (e) {
        case "image":
        case "sticker":
        case "gif":
        case "video":
        case "ptt":
        case "audio":
        case "document":
          return e;
        case "xma-image":
          return "document";
        default:
          return null;
      }
    }
    i.castToProtocolMediaType = e;
  },
  66,
);
