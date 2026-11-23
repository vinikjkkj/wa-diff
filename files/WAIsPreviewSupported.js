__d(
  "WAIsPreviewSupported",
  ["$InternalEnum", "WAProgressiveJpegGetPJpegDetails"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored(["NO", "YES"]),
      s = n("$InternalEnum").Mirrored(["NO", "YES", "DuplicatedWithFullSize"]);
    function u(t) {
      var n = t.serverMediaType;
      switch (n) {
        case "image": {
          var r,
            a,
            i =
              (r = o(
                "WAProgressiveJpegGetPJpegDetails",
              ).maybeGetProgressiveJpegDetailsUsingMediaEntry(t).value) != null
                ? r
                : null,
            l = i != null ? e.YES : e.NO;
          if (
            ((a = t.downloadableThumbnail) == null ? void 0 : a.directPath) ==
            null
          )
            return [l, s.NO];
          t.downloadableThumbnail.directPath;
          var u =
            t.downloadableThumbnail.directPath === t.directPath
              ? s.DuplicatedWithFullSize
              : s.YES;
          return [l, u];
        }
        case "video": {
          var c;
          if (
            ((c = t.downloadableThumbnail) == null ? void 0 : c.directPath) ==
            null
          )
            return [e.NO, s.NO];
          t.downloadableThumbnail.directPath;
          var d =
            t.downloadableThumbnail.directPath === t.directPath ? s.NO : s.YES;
          return [e.NO, d];
        }
        case "sticker":
        case "ptt":
        case "audio":
        case "document":
        case "gif":
        case "ppic":
        case "md-app-state":
        case "md-msg-hist":
        case "kyc-id":
        case "template":
        case "thumbnail-image":
        case "thumbnail-video":
        case "thumbnail-gif":
        case "thumbnail-document":
        case "thumbnail-link":
        case "novi-video":
        case "novi-image":
        case "payment-bg-image":
        case "xma-image":
        case "biz-cover-photo":
        case "preview":
        case "newsletter-audio":
        case "newsletter-document":
        case "newsletter-image":
        case "newsletter-gif":
        case "newsletter-music-artwork":
        case "newsletter-ptt":
        case "newsletter-sticker":
        case "newsletter-sticker-pack":
        case "newsletter-thumbnail-link":
        case "newsletter-video":
        case "newsletter-ptv":
        case "sticker-pack":
        case "thumbnail-sticker-pack":
        case "music-artwork":
        case "group-history":
        case "ads-image":
        case "ads-video":
        case "ptv":
        case "maiba-file":
          return [e.NO, s.NO];
        default:
          return [e.NO, s.NO];
      }
    }
    ((l.PjpegPreviewSupport = e),
      (l.DownloadablePreviewSupport = s),
      (l.checkPreviewSupport = u));
  },
  98,
);
