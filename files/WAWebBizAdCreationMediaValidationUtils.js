__d(
  "WAWebBizAdCreationMediaValidationUtils",
  [
    "fbt",
    "WAWebAttachMediaCollection",
    "WAWebMimeTypes",
    "WAWebMsgType",
    "asyncToGeneratorRuntime",
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
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new (r("WAWebAttachMediaCollection"))({
              chatParticipantCount: 1,
            }),
            n = e.map(function (e) {
              return r("nullthrows")(e.originalAttachment);
            });
          return (yield t.processAttachments(n, void 0, u, c), t);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      var t = e.getPreviewableMedias(),
        n = t.some(function (e) {
          return e.type === o("WAWebMsgType").MSG_TYPE.VIDEO;
        });
      return n ? !1 : t.length < c;
    }
    function h(e) {
      return e.startsWith("video/");
    }
    function y(e) {
      return e.startsWith("image/");
    }
    function C(t) {
      var n = t.getPreviewableMedias();
      return n.length === 0 ? e : o("WAWebMimeTypes").IMAGE_MIMES;
    }
    function b(e, t) {
      var n = e.getPreviewableMedias(),
        r = n.length,
        a = [];
      if (r === 0) {
        var i = t.filter(function (e) {
            return e.file && h(e.file.type);
          }),
          l = t.filter(function (e) {
            return e.file && y(e.file.type);
          });
        return i.length > 0
          ? (l.length > 0 && a.push("CROSS_MEDIA_VIDEO_ADDED"),
            i.length > d && a.push("TOO_MANY_VIDEOS"),
            {
              attachments: i.slice(0, d),
              shouldClearExisting: !1,
              pruneActions: a,
            })
          : (l.length > c && a.push("TOO_MANY_IMAGES"),
            {
              attachments: l.slice(0, c),
              shouldClearExisting: !1,
              pruneActions: a,
            });
      }
      var s = n[0].type === o("WAWebMsgType").MSG_TYPE.VIDEO;
      if (s)
        return { attachments: [], shouldClearExisting: !1, pruneActions: a };
      var u = t.filter(function (e) {
          return e.file && h(e.file.type);
        }),
        m = t.filter(function (e) {
          return e.file && y(e.file.type);
        });
      if (u.length > 0)
        return (
          a.push("CROSS_MEDIA_VIDEO_ADDED"),
          u.length > d && a.push("TOO_MANY_VIDEOS"),
          {
            attachments: u.slice(0, d),
            shouldClearExisting: !0,
            pruneActions: a,
          }
        );
      if (r >= c)
        return { attachments: [], shouldClearExisting: !1, pruneActions: a };
      var p = c - r;
      return (
        m.length > p && a.push("TOO_MANY_IMAGES"),
        { attachments: m.slice(0, p), shouldClearExisting: !1, pruneActions: a }
      );
    }
    ((l.ALLOWED_MIME_TYPES = e),
      (l.SUPPORTED_MEDIA_TYPES = u),
      (l.MAX_IMAGE_COUNT = c),
      (l.MAX_DESCRIPTION_LENGTH = m),
      (l.PRUNE_TOAST_MESSAGES = p),
      (l.deepCloneMediaCollection = _),
      (l.canAddMoreAttachments = g),
      (l.getAllowedMimeTypesForCollection = C),
      (l.maybePruneNewAttachments = b));
  },
  226,
);
