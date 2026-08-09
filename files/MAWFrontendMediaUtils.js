__d(
  "MAWFrontendMediaUtils",
  ["MAWDbMedia"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      if (r === !0)
        return {
          mediaType: o("MAWDbMedia").MEDIA_TYPE.GIF,
          serverMediaType: "gif",
        };
      if (e === "image/gif")
        return {
          mediaType: o("MAWDbMedia").MEDIA_TYPE.GIF,
          serverMediaType: "gif",
        };
      if (e === "image/webp" && t !== !0)
        return {
          mediaType: o("MAWDbMedia").MEDIA_TYPE.STICKER,
          serverMediaType: "sticker",
        };
      var a = n != null ? n : e.split("/")[0];
      switch (a) {
        case "image":
          return t === !0
            ? {
                mediaType: o("MAWDbMedia").MEDIA_TYPE.IMAGE,
                serverMediaType: "xma-image",
              }
            : {
                mediaType: o("MAWDbMedia").MEDIA_TYPE.IMAGE,
                serverMediaType: "image",
              };
        case "video":
          return {
            mediaType: o("MAWDbMedia").MEDIA_TYPE.VIDEO,
            serverMediaType: "video",
          };
        case "audio":
          return {
            mediaType: o("MAWDbMedia").MEDIA_TYPE.PTT,
            serverMediaType: "ptt",
          };
        case "application":
        default:
          return {
            mediaType: o("MAWDbMedia").MEDIA_TYPE.DOCUMENT_FILE,
            serverMediaType: "document",
          };
      }
    }
    l.getMediaTypeAndServerMediaTypeFromBlob = e;
  },
  98,
);
