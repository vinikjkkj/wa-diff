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
        IMAGES_REJECTED_WITH_EXISTING_VIDEO: function () {
          return s._(
            /*BTDS*/ "Photos can't be added when a video is selected.",
          );
        },
        MIXED_MEDIA_VIDEO_DROPPED: function () {
          return s._(
            /*BTDS*/ "Can't mix photos and video. Only photos were kept.",
          );
        },
        TOO_MANY_IMAGES: function () {
          return s._(/*BTDS*/ "Kept first 10 images. Limit reached.");
        },
        TOO_MANY_VIDEOS: function () {
          return s._(/*BTDS*/ "Kept first video. Limit reached.");
        },
        VIDEO_REJECTED_WITH_EXISTING_MEDIA: function () {
          return s._(
            /*BTDS*/ "Videos can't be added when images are selected.",
          );
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
    function g(e, t, n) {
      var r = t.indexOf(e);
      return r === -1 ? null : n.at(r);
    }
    function h(e) {
      var t = e.getPreviewableMedias(),
        n = t.some(function (e) {
          return e.type === o("WAWebMsgType").MSG_TYPE.VIDEO;
        });
      return n ? !1 : t.length < c;
    }
    function y(t) {
      return t.length === 0 ? e : o("WAWebMimeTypes").IMAGE_MIMES;
    }
    ((l.ALLOWED_MIME_TYPES = e),
      (l.SUPPORTED_MEDIA_TYPES = u),
      (l.MAX_IMAGE_COUNT = c),
      (l.MAX_VIDEO_COUNT = d),
      (l.MAX_DESCRIPTION_LENGTH = m),
      (l.PRUNE_TOAST_MESSAGES = p),
      (l.deepCloneMediaCollection = _),
      (l.clonedCounterpartOf = g),
      (l.canAddMoreAttachments = h),
      (l.getAllowedMimeTypesForCreativeMedia = y));
  },
  226,
);
