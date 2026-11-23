__d(
  "adsMAIBAFormatGoalPhrase",
  ["fbt", "adsMAIBABoostGoalConfig"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      var n = e != null ? e : "",
        r = t != null ? t : "";
      if (n === "") return null;
      if (n === "CONVERSATIONS" || n === "CONVERSATION")
        return s._(/*BTDS*/ "").toString();
      if (
        (n === "LINK_CLICKS" || n === "LANDING_PAGE_VIEWS") &&
        r === "WEBSITE"
      )
        return o("adsMAIBABoostGoalConfig").getBoostGoalTitle(n, r);
      if (n === "QUALITY_CALL" && r === "PHONE_CALL")
        return s._(/*BTDS*/ "").toString();
      if (n === "PROFILE_VISIT")
        return r === "INSTAGRAM_PROFILE"
          ? s._(/*BTDS*/ "").toString()
          : r === "FACEBOOK_PAGE"
            ? s._(/*BTDS*/ "").toString()
            : s._(/*BTDS*/ "").toString();
      if (
        n === "LINK_CLICKS" &&
        (r === "INSTAGRAM_PROFILE" || r === "FACEBOOK_PAGE")
      )
        return r === "INSTAGRAM_PROFILE"
          ? s._(/*BTDS*/ "").toString()
          : s._(/*BTDS*/ "").toString();
      if (n === "VIDEO_VIEWS") return s._(/*BTDS*/ "").toString();
      if (n === "THRUPLAY") return s._(/*BTDS*/ "").toString();
      if (n === "REACH") return s._(/*BTDS*/ "").toString();
      if (n === "IMPRESSIONS") return s._(/*BTDS*/ "").toString();
      if (n === "POST_ENGAGEMENT") return s._(/*BTDS*/ "").toString();
      if (n === "LINK_CLICKS") return s._(/*BTDS*/ "").toString();
      var a = n.toLowerCase().replace(/_/g, " ");
      return s._(/*BTDS*/ "", [s._param("goal", a)]).toString();
    }
    l.default = e;
  },
  226,
);
