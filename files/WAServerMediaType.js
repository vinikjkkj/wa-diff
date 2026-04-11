__d(
  "WAServerMediaType",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [
      "image",
      "sticker",
      "ptt",
      "audio",
      "document",
      "video",
      "gif",
      "ppic",
      "md-app-state",
      "md-msg-hist",
      "kyc-id",
      "template",
      "thumbnail-image",
      "thumbnail-video",
      "thumbnail-gif",
      "thumbnail-document",
      "thumbnail-link",
      "payment-bg-image",
      "novi-video",
      "novi-image",
      "xma-image",
      "biz-cover-photo",
      "preview",
      "newsletter-music-artwork",
      "newsletter-audio",
      "newsletter-document",
      "newsletter-image",
      "newsletter-gif",
      "newsletter-ptt",
      "newsletter-sticker",
      "newsletter-thumbnail-link",
      "newsletter-video",
      "sticker-pack",
      "thumbnail-sticker-pack",
      "music-artwork",
      "group-history",
    ];
    function l(e) {
      switch (e) {
        case "image":
        case "sticker":
        case "ptt":
        case "audio":
        case "document":
        case "video":
        case "gif":
        case "ppic":
        case "md-app-state":
        case "md-msg-hist":
        case "kyc-id":
        case "thumbnail-image":
        case "thumbnail-video":
        case "thumbnail-gif":
        case "thumbnail-document":
        case "thumbnail-link":
        case "payment-bg-image":
        case "novi-video":
        case "novi-image":
        case "template":
        case "xma-image":
        case "biz-cover-photo":
        case "preview":
        case "newsletter-music-artwork":
        case "newsletter-audio":
        case "newsletter-document":
        case "newsletter-image":
        case "newsletter-gif":
        case "newsletter-ptt":
        case "newsletter-sticker":
        case "newsletter-thumbnail-link":
        case "newsletter-video":
        case "sticker-pack":
        case "thumbnail-sticker-pack":
        case "music-artwork":
        case "group-history":
          return e;
        default:
          return null;
      }
    }
    function s(e) {
      return e === "Image"
        ? "image"
        : e === "Video"
          ? "video"
          : e === "Ptt"
            ? "ptt"
            : e === "Gif"
              ? "gif"
              : e === "Sticker"
                ? "sticker"
                : e === "DocumentFile"
                  ? "document"
                  : e === "Text" ||
                      e === "Futureproof" ||
                      e === "Ciphertext" ||
                      e === "Unavailable" ||
                      e === "ExpiredEphemeral" ||
                      e === "Admin" ||
                      e === "Revoked" ||
                      e === "DeleteForMe" ||
                      e === "EphemeralSettingAdmin" ||
                      e === "EphemeralSyncResponse" ||
                      e === "EphemeralSettingChangeFromCurrentDevice" ||
                      e === "AlertICDC" ||
                      e === "GroupInvite" ||
                      e === "SenderKeyDistribution" ||
                      e === "Reaction" ||
                      e === "EditAction" ||
                      e === "ReceiverFetch" ||
                      e === "Raven" ||
                      e === "GroupPollCreate" ||
                      e === "GroupPollUpdate"
                    ? null
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            e,
                        );
                      })();
    }
    ((i.SERVER_MEDIA = e), (i.castToServerMediaType = l), (i.getMediaType = s));
  },
  66,
);
