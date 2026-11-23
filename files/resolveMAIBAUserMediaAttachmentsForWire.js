__d(
  "resolveMAIBAUserMediaAttachmentsForWire",
  ["MAIBAMediaAttachmentHelper"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e == null
        ? []
        : e.map(function (e) {
            var t = o("MAIBAMediaAttachmentHelper").isLocalPreviewURL(
              e.media_url,
            )
              ? babelHelpers.extends({}, e, { media_url: null })
              : e;
            return t.media_type === "MAIBA_INTERNAL" &&
              t.maiba_internal_kind === "IMAGE_HASH" &&
              t.account_id != null
              ? babelHelpers.extends({}, t, { media_id: t.account_id })
              : t;
          });
    }
    l.default = e;
  },
  98,
);
