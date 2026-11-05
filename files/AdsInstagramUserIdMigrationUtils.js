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
      return e != null && e !== "" && e !== "0";
    }
    function d(e) {
      return e;
    }
    function m(e) {
      return e == null || e === "" || e === "0" ? null : e;
    }
    function p(e, t) {
      if (!r("gkx")("9636") || c(e)) return e;
      var n = t;
      return c(n) ? n : null;
    }
    function _(e) {
      return e;
    }
    function f(e, t) {
      return t == null || t === "" || !r("gkx")("9636")
        ? { instagramAccountID: e }
        : { instagramAccountID: e, instagramUserID: t };
    }
    function g(e, t) {
      return r("gkx")("15865") ? t : e;
    }
    ((l.PLACEHOLDER_IGID_V2 = e),
      (l.convertIGIDV1FromStringToStrongType = s),
      (l.convertIGIDV2FromStringToStrongType = u),
      (l.isInstagramID = c),
      (l.convertIGIDV2FromStrongTypeToString = d),
      (l.convertLoadedIGIDV2FromStringToStrongType = m),
      (l.getInstagramAccountLookupID = p),
      (l.convertIGIDV1OrIGIDV2ToFBID = _),
      (l.getInstagramAccountActionPayload = f),
      (l.getInstagramActorIdOrUserId = g));
  },
  98,
);
