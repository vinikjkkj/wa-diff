__d(
  "WAWebBizAdCreationMediaValidationUtils",
  [
    "fbt",
    "WAWebAttachMediaCollection",
    "WAWebMimeTypes",
    "WAWebMsgType",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = [
        o("WAWebMimeTypes").IMAGE_MIMES,
        o("WAWebMimeTypes").VIDEO_MIMES,
      ].join(","),
      u = new Set([
        o("WAWebMsgType").MSG_TYPE.IMAGE,
        o("WAWebMsgType").MSG_TYPE.VIDEO,
      ]),
      c = 10,
      d = 1,
      m = 90,
      p = {
        CROSS_MEDIA_VIDEO_ADDED: function () {
          return s._(/*BTDS*/ "Video added. Previous image removed.");
        },
        TOO_MANY_IMAGES: function () {
          return s._(/*BTDS*/ "Kept first 10 images. Limit reached.");
        },
        TOO_MANY_VIDEOS: function () {
          return s._(/*BTDS*/ "Kept first video. Limit reached.");
        },
      };
    async function _(e) {
      var t = new (r("WAWebAttachMediaCollection"))({
          chatParticipantCount: 1,
        }),
        n = e.map(function (e) {
          return r("nullthrows")(e.originalAttachment);
        });
      return (await t.processAttachments(n, void 0, u, c), t);
    }
    function f(e) {
      var t = e.getPreviewableMedias(),
        n = t.some(function (e) {
          return e.type === o("WAWebMsgType").MSG_TYPE.VIDEO;
        });
      return n ? !1 : t.length < c;
    }
    function g(e) {
      return e.startsWith("video/");
    }
    function h(e) {
      return e.startsWith("image/");
    }
    function y(t) {
      var n = t.getPreviewableMedias();
      return n.length === 0 ? e : o("WAWebMimeTypes").IMAGE_MIMES;
    }
    function C(e, t) {
      var n = e.getPreviewableMedias(),
        r = n.length,
        a = [];
      if (r === 0) {
        var i = t.filter(function (e) {
            return e.file && g(e.file.type);
          }),
          l = t.filter(function (e) {
            return e.file && h(e.file.type);
          });
        return i.length > 0
          ? (l.length > 0 && a.push("CROSS_MEDIA_VIDEO_ADDED"),
            i.length > d && a.push("TOO_MANY_VIDEOS"),
            {
              attachments: i.slice(0, d),
              pruneActions: a,
              shouldClearExisting: !1,
            })
          : (l.length > c && a.push("TOO_MANY_IMAGES"),
            {
              attachments: l.slice(0, c),
              pruneActions: a,
              shouldClearExisting: !1,
            });
      }
      var s = n[0].type === o("WAWebMsgType").MSG_TYPE.VIDEO;
      if (s)
        return { attachments: [], pruneActions: a, shouldClearExisting: !1 };
      var u = t.filter(function (e) {
          return e.file && g(e.file.type);
        }),
        m = t.filter(function (e) {
          return e.file && h(e.file.type);
        });
      if (u.length > 0)
        return (
          a.push("CROSS_MEDIA_VIDEO_ADDED"),
          u.length > d && a.push("TOO_MANY_VIDEOS"),
          {
            attachments: u.slice(0, d),
            pruneActions: a,
            shouldClearExisting: !0,
          }
        );
      if (r >= c)
        return { attachments: [], pruneActions: a, shouldClearExisting: !1 };
      var p = c - r;
      return (
        m.length > p && a.push("TOO_MANY_IMAGES"),
        { attachments: m.slice(0, p), pruneActions: a, shouldClearExisting: !1 }
      );
    }
    ((l.ALLOWED_MIME_TYPES = e),
      (l.SUPPORTED_MEDIA_TYPES = u),
      (l.MAX_IMAGE_COUNT = c),
      (l.MAX_DESCRIPTION_LENGTH = m),
      (l.PRUNE_TOAST_MESSAGES = p),
      (l.deepCloneMediaCollection = _),
      (l.canAddMoreAttachments = f),
      (l.getAllowedMimeTypesForCollection = y),
      (l.maybePruneNewAttachments = C));
  },
  226,
);
