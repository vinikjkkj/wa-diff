__d(
  "actionabilityProcessorShared",
  [
    "fbt",
    "FBLogger",
    "MAIBAToolCallStatus",
    "XFBMAIBAToolCallStatusUtils.facebook",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      if (e == null) return null;
      var n = e.trimStart();
      if (!n.startsWith("{") && !n.startsWith("[")) return null;
      try {
        return JSON.parse(e);
      } catch (e) {
        return (
          r("FBLogger")("axp_maiba_foundations_ux").warn(
            "actionability: failed to parse %s: %s",
            t,
            e instanceof Error ? e.message : String(e),
          ),
          null
        );
      }
    }
    function d(e) {
      return c(e.tool_call_args, "tool_call_args");
    }
    function m(e) {
      return c(e.tool_result, "tool_result");
    }
    function p(e) {
      return typeof e == "string" ? e : null;
    }
    function _(e) {
      var t;
      return (t = e.tool_call_id) != null ? t : "";
    }
    function f(e) {
      var t;
      return (t = o("XFBMAIBAToolCallStatusUtils.facebook").toJSEnum(
        e.tool_status,
      )) != null
        ? t
        : "COMPLETED";
    }
    function g(e) {
      return e === "CAMPAIGN_GROUP"
        ? s._(/*BTDS*/ "")
        : e === "CAMPAIGN"
          ? s._(/*BTDS*/ "")
          : e === "ADGROUP"
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "");
    }
    function h(e) {
      return e === "CAMPAIGN_GROUP"
        ? s._(/*BTDS*/ "")
        : e === "CAMPAIGN"
          ? s._(/*BTDS*/ "")
          : e === "ADGROUP"
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "");
    }
    function y(e) {
      return e === "CAMPAIGN_GROUP"
        ? s._(/*BTDS*/ "")
        : e === "CAMPAIGN"
          ? s._(/*BTDS*/ "")
          : e === "ADGROUP"
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "");
    }
    ((l.MAIBAToolCallStatus = r("MAIBAToolCallStatus")),
      (l.parseArgs = d),
      (l.parseResult = m),
      (l.asString = p),
      (l.keyOf = _),
      (l.statusOf = f),
      (l.getAdObjectLevelLabel = g),
      (l.getAdObjectLevelLabelCapitalized = h),
      (l.getAdObjectLevelLabelPlural = y));
  },
  226,
);
