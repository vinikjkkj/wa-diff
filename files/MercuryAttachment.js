__d(
  "MercuryAttachment",
  ["cx", "EmojiLikeUtils", "MercuryAudioType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        return t === Object(t);
      },
      s = "_1c_u",
      u = new Set(["animated_image", "photo", "video", "third_party_sticker"]),
      c = {
        getAttachIconClass: function (t) {
          switch (t) {
            case "attach:image":
              return "_y2-";
            case "attach:video":
              return "_y2_";
            case "attach:music":
              return "_y30";
            case "attach:voice":
              return "_y31";
            case "attach:text":
              return "_y32";
            case "attach:pdf":
              return "_1k9k";
            case "attach:richtext":
              return "_1k9l";
            case "attach:spreadsheet":
              return "_1k9p";
            case "attach:presentation":
              return "_1k9r";
            case "attach:archive":
              return "_1k9s";
            case "attach:ms:word":
              return "_y33";
            case "attach:ms:xls":
              return "_y34";
            case "attach:ms:ppt":
              return "_y35";
          }
          return "_y36";
        },
        getAttachIconClassByMime: function (t) {
          return c.getAttachIconClass(c.getAttachTypeByMime(t));
        },
        getAttachTypeByMime: function (t) {
          return t == null || t === ""
            ? "attach:unknown"
            : t.startsWith("image")
              ? "attach:image"
              : t.startsWith("video")
                ? "attach:video"
                : t.startsWith("audio")
                  ? "attach:music"
                  : t.startsWith("text/plain")
                    ? "attach:text"
                    : t == "text/pdf" ||
                        t == "application/pdf" ||
                        t == "application/vnd.pdf" ||
                        t == "application/x-pdf"
                      ? "attach:pdf"
                      : t == "text/richtext" ||
                          t == "application/rtf" ||
                          t == "application/x-iwork-pages-sffkey"
                        ? "attach:richtext"
                        : t == "text/csv" ||
                            t == "application/x-iwork-numbers-sffkey"
                          ? "attach:spreadsheet"
                          : t == "application/x-iwork-keynote-sffkey"
                            ? "attach:presentation"
                            : t == "application/vnd.ms-cab-compressed" ||
                                t == "application/x-7z-compressed" ||
                                t == "application/x-ace-compressed" ||
                                t == "application/x-apple-diskimage" ||
                                t == "application/x-compress" ||
                                t == "application/x-compressed" ||
                                t == "application/x-gzip" ||
                                t == "application/x-rar-compressed" ||
                                t == "application/x-tar" ||
                                t == "application/x-zip-compressed" ||
                                t == "application/zip"
                              ? "attach:archive"
                              : t == "application/msword" ||
                                  t.startsWith("application/vnd.ms-word") ||
                                  t.startsWith(
                                    "application/vnd.openxmlformats-officedocument.wordprocessingml",
                                  )
                                ? "attach:ms:word"
                                : t.startsWith("application/vnd.ms-excel") ||
                                    t.startsWith(
                                      "application/vnd.openxmlformats-officedocument.spreadsheetml",
                                    )
                                  ? "attach:ms:xls"
                                  : t.startsWith(
                                        "application/vnd.ms-powerpoint",
                                      ) ||
                                      t.startsWith(
                                        "application/vnd.openxmlformats-officedocument.presentationml",
                                      )
                                    ? "attach:ms:ppt"
                                    : "attach:unknown";
        },
        convertRaw: function (t) {
          for (var e = [], n = 0; n < t.length; n++) {
            var r = t[n];
            if (r.attach_type === "photo") e.push(r);
            else if (r.filename != null) {
              var o = c.getAttachTypeByMime(r.filetype),
                a = {
                  attach_type: "file",
                  name: r.filename,
                  icon_type: o,
                  url: "",
                };
              e.push(a);
            }
          }
          return e;
        },
        get: function (t) {
          var e = [];
          t.attachments
            ? (e = t.attachments)
            : t.raw_attachments && (e = c.convertRaw(t.raw_attachments));
          var r = n("EmojiLikeUtils").getEmojiSize(t);
          if (
            (r != null &&
              r !== "" &&
              (e = e.concat([{ attach_type: "emoji_like", size: r }])),
            !(t.attachments && t.attachments.length > 0))
          ) {
            if (t.sticker_id) return e.concat([{ attach_type: "sticker" }]);
            if (t.preview_attachments && t.preview_attachments.length > 0)
              return e.concat(t.preview_attachments);
          }
          return e;
        },
        resizeContain: function (t, n) {
          var e = t.width / t.height,
            r = n.width / n.height;
          return r < e
            ? {
                width: Math.ceil(Math.min(t.height * r, n.width)),
                height: Math.ceil(Math.min(t.height, n.height)),
              }
            : {
                width: Math.ceil(Math.min(t.width, n.width)),
                height: Math.ceil(Math.min(t.width / r, n.height)),
              };
        },
        isBubblePreferred: function (t) {
          return c.isFileAttachment(t);
        },
        isPhotoAttachment: function (t) {
          return c != null &&
            c.getAttachTypeByMime &&
            c.getAttachTypeByMime(t.mime_type) === "attach:pdf"
            ? !1
            : !!(
                t.attach_type == "photo" ||
                t.attach_type == "animated_image" ||
                t.attach_type == "third_party_sticker" ||
                (t.attach_type == "file" && t.preview_url)
              );
        },
        isPhotoGroupAttachment: function (t) {
          return u.has(t.attach_type);
        },
        isSinglePhotoGroupAttachment: function (t) {
          return !!(
            t.attachments &&
            t.attachments.length === 1 &&
            t.attachments[0] &&
            c.isPhotoGroupAttachment(t.attachments[0])
          );
        },
        isVideoAttachment: function (t) {
          return t.attach_type == "video";
        },
        isShareAttachment: function (t) {
          return t.attach_type == "share";
        },
        isFileAttachment: function (t) {
          return t.attach_type == "file";
        },
        isErrorAttachment: function (t) {
          return t.attach_type == "error";
        },
        isStickerAttachment: function (t) {
          return t.attach_type == "sticker";
        },
        isEmojiLikeAttachment: function (t) {
          return t.attach_type === "emoji_like";
        },
        isVoiceAttachment: function (t) {
          return t.metadata
            ? t.metadata.type === n("MercuryAudioType").AudioClip ||
                t.metadata.type ===
                  n("MercuryAudioType").VoiceMessageWithTranscript
            : !1;
        },
        hasAttribution: function (t) {
          return !!t.app_attribution;
        },
        isLightweightActionAttachment: function (t) {
          return !!(
            c.isShareAttachment(t) &&
            t.share &&
            t.share.target != null &&
            t.share.target.lwa_type != null
          );
        },
        isSingleVideoAttachment: function (n) {
          var t = c
            .get(n)
            .filter(e)
            .filter(function (e) {
              return c.isVideoAttachment(e);
            });
          return t.length === 1;
        },
        isSharedVideoAttachment: function (t) {
          var e =
            t.attach_type === "share" &&
            t.share &&
            t.share.subattachments &&
            t.share.subattachments[0];
          return !!(e && e.target && e.target.video_id);
        },
        isGenieSharedVideoAttachment: function (t) {
          return !!(
            t.attach_type === "share" &&
            t.share &&
            t.share.style_list.indexOf("genie_message") > -1 &&
            t.share.target &&
            t.share.target.attachment &&
            c.isSharedVideoAttachment(t.share.target.attachment)
          );
        },
        isSharedVideoAttachmentMessage: function (n) {
          var t = c
            .get(n)
            .filter(e)
            .filter(function (e) {
              return (
                c.isSharedVideoAttachment(e) ||
                c.isGenieSharedVideoAttachment(e)
              );
            });
          return t.length === 1;
        },
        getVideoElem: function (t, n) {
          var e = n.getMessageElement(t);
          if (!e) return null;
          var r = e.getElementsByClassName(s);
          return r && r.length ? r[0] : e;
        },
      },
      d = c;
    i.default = d;
  },
  66,
);
