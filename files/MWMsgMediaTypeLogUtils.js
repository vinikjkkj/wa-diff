__d(
  "MWMsgMediaTypeLogUtils",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum")({
      Application: "application",
      Audio: "audio",
      Avatar: "avatar",
      HotEmoji: "hot_emoji",
      File: "file",
      Gif: "gif",
      Image: "image",
      Link: "link",
      None: "none",
      Poll: "poll",
      Reaction: "reaction",
      Sticker: "sticker",
      Video: "video",
      Share: "share",
      NoteReply: "note_reply",
    });
    function l(t) {
      var n = t.hasFile,
        r = n === void 0 ? !1 : n,
        o = t.hasGif,
        a = o === void 0 ? !1 : o,
        i = t.hasHotEmoji,
        l = i === void 0 ? !1 : i,
        s = t.hasImage,
        u = s === void 0 ? !1 : s,
        c = t.hasLinks,
        d = c === void 0 ? !1 : c,
        m = t.hasNoteReply,
        p = m === void 0 ? !1 : m,
        _ = t.hasShare,
        f = _ === void 0 ? !1 : _,
        g = t.hasSticker,
        h = g === void 0 ? !1 : g,
        y = t.hasVideo,
        C = y === void 0 ? !1 : y,
        b = t.hasVoiceClip,
        v = b === void 0 ? !1 : b,
        S = e.None;
      return (
        u
          ? (S = e.Image)
          : C
            ? (S = e.Video)
            : l
              ? (S = e.HotEmoji)
              : h
                ? (S = e.Sticker)
                : a
                  ? (S = e.Gif)
                  : v
                    ? (S = e.Audio)
                    : r
                      ? (S = e.File)
                      : f
                        ? (S = e.Share)
                        : d
                          ? (S = e.Link)
                          : p && (S = e.NoteReply),
        S
      );
    }
    ((i.AttachmentType = e), (i.getAttachmentType = l));
  },
  66,
);
