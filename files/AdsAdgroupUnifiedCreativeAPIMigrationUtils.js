__d(
  "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
  ["ApiAdObjectTypes", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      return p(e) ? (e instanceof r("immutable").Record ? o(e) : n(e)) : t(e);
    }
    function s(e, t, n) {
      return p(e) ? n(e) : t(e);
    }
    function u(e, t, n) {
      return p(e) ? n(e) : t(e);
    }
    function c(e, t, n) {
      var r;
      return p({
        creative:
          e.creative != null
            ? babelHelpers.extends({}, e.creative, {
                uca_draft_version:
                  (r = e.creative.uca_draft_version) != null ? r : null,
              })
            : null,
      })
        ? n
        : t;
    }
    function d(e, t, n, r) {
      return p(e) ? r(t, e) : n(t, e);
    }
    function m(e) {
      var t;
      return (
        p(e) &&
        ((t = e.creative) == null ? void 0 : t.object_type) ===
          r("ApiAdObjectTypes").PHOTO
      );
    }
    function p(e) {
      var t;
      return ((t = e.creative) == null ? void 0 : t.uca_draft_version) === 1;
    }
    function _(e) {
      var t,
        n,
        o = e.ad ? e.ad : null,
        a = o == null || (t = o.creative) == null ? void 0 : t.object_type,
        i =
          o == null || (n = o.creative) == null ? void 0 : n.uca_draft_version;
      return a === r("ApiAdObjectTypes").PHOTO && i != null && i >= 1;
    }
    ((l.getUnifiedCreativeOrLegacyValue = e),
      (l.getUnifiedCreativeOrLegacyValueFromRecord = s),
      (l.getUnifiedCreativeOrLegacyValueFromSpec = u),
      (l.getUnifiedCreativeOrLegacyPath = c),
      (l.setUnifiedCreativeOrLegacyValueForRecord = d),
      (l.isUnifiedCreativePhotoData = m),
      (l.isUnifiedCreativePhotoDataSupported = p),
      (l.shouldUseUnifiedCreativePhotoDataSpecForExport = _));
  },
  98,
);
