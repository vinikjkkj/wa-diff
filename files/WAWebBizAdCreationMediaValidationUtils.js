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
        IMAGES_REJECTED_WITH_EXISTING_VIDEO: function () {
          return s._(/*BTDS*/ "");
        },
        MIXED_MEDIA_VIDEO_DROPPED: function () {
          return s._(/*BTDS*/ "");
        },
        TOO_MANY_IMAGES: function () {
          return s._(/*BTDS*/ "");
        },
        TOO_MANY_VIDEOS: function () {
          return s._(/*BTDS*/ "");
        },
        VIDEO_REJECTED_WITH_EXISTING_MEDIA: function () {
          return s._(/*BTDS*/ "");
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
    function f(e, t, n) {
      var r = t.indexOf(e);
      return r === -1 ? null : n.at(r);
    }
    function g(e) {
      var t = e.getPreviewableMedias(),
        n = t.some(function (e) {
          return e.type === o("WAWebMsgType").MSG_TYPE.VIDEO;
        });
      return n ? !1 : t.length < c;
    }
    function h(t) {
      return t.length === 0 ? e : o("WAWebMimeTypes").IMAGE_MIMES;
    }
    ((l.ALLOWED_MIME_TYPES = e),
      (l.SUPPORTED_MEDIA_TYPES = u),
      (l.MAX_IMAGE_COUNT = c),
      (l.MAX_VIDEO_COUNT = d),
      (l.MAX_DESCRIPTION_LENGTH = m),
      (l.PRUNE_TOAST_MESSAGES = p),
      (l.deepCloneMediaCollection = _),
      (l.clonedCounterpartOf = f),
      (l.canAddMoreAttachments = g),
      (l.getAllowedMimeTypesForCreativeMedia = h));
  },
  226,
);
