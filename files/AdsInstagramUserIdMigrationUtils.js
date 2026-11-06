__d(
  "AdsInstagramUserIdMigrationUtils",
  ["ODS", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "igid_v2_migration",
      u = void 0;
    function c(e) {
      return e;
    }
    function d(e) {
      return e;
    }
    function m(e) {
      return e != null && e !== "" && e !== "0";
    }
    function p(e) {
      return e === "" || e === "0";
    }
    function _(e) {
      return g(e);
    }
    function f(e) {
      return e;
    }
    function g(e) {
      return e == null || e === "" || e === "0" ? null : e;
    }
    function h(e, t) {
      if (!r("gkx")("9636") || m(e)) return e;
      var n = t;
      return m(n) ? n : null;
    }
    function y(e) {
      return e;
    }
    function C(e, t) {
      return t == null || !m(t) || !r("gkx")("9636")
        ? { instagramAccountID: e }
        : { instagramAccountID: e, instagramUserID: t };
    }
    function b(e) {
      return m(e) && r("gkx")("9636") ? e : null;
    }
    function v(e, t) {
      return r("gkx")("15865")
        ? t != null && t !== ""
          ? t
          : (e != null && e !== "" && S(t), e)
        : e;
    }
    function S(t) {
      var n =
        t === void 0 ? "v2_undefined" : t === null ? "v2_null" : "v2_empty";
      (e || (e = o("ODS"))).bumpEntityKey(68, s, "read_path.v1_fallback." + n);
    }
    ((l.PLACEHOLDER_IGID_V2 = u),
      (l.convertIGIDV1FromStringToStrongType = c),
      (l.convertIGIDV2FromStringToStrongType = d),
      (l.isInstagramID = m),
      (l.isBlankIGIDV2 = p),
      (l.parseIGIDV2 = _),
      (l.convertIGIDV2FromStrongTypeToString = f),
      (l.convertLoadedIGIDV2FromStringToStrongType = g),
      (l.getInstagramAccountLookupID = h),
      (l.convertIGIDV1OrIGIDV2ToFBID = y),
      (l.getInstagramAccountActionPayload = C),
      (l.getDoubleWriteIGIDV2 = b),
      (l.getInstagramActorIdOrUserId = v));
  },
  98,
);
