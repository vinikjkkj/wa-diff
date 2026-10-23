__d(
  "AdsInstagramUserIdMigrationUtils",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = void 0;
    function s(e) {
      return e;
    }
    function u(e) {
      return e;
    }
    function c(e) {
      return e;
    }
    function d(e) {
      return e;
    }
    function m(e, t) {
      return t == null || t === "" || !r("gkx")("9636")
        ? { instagramAccountID: e }
        : { instagramAccountID: e, instagramUserID: t };
    }
    function p(e, t) {
      return r("gkx")("15865") ? t : e;
    }
    ((l.PLACEHOLDER_IGID_V2 = e),
      (l.convertIGIDV1FromStringToStrongType = s),
      (l.convertIGIDV2FromStringToStrongType = u),
      (l.convertIGIDV2FromStrongTypeToString = c),
      (l.convertIGIDV1OrIGIDV2ToFBID = d),
      (l.getInstagramAccountActionPayload = m),
      (l.getInstagramActorIdOrUserId = p));
  },
  98,
);
