__d(
  "resolveMAIBAUserMediaAttachmentsForWire",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e == null
        ? []
        : e.map(function (e) {
            return e.media_type === "MAIBA_INTERNAL" &&
              e.maiba_internal_kind === "IMAGE_HASH" &&
              e.account_id != null
              ? babelHelpers.extends({}, e, { media_id: e.account_id })
              : e;
          });
    }
    i.default = e;
  },
  66,
);
