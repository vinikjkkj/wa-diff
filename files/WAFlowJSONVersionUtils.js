__d(
  "WAFlowJSONVersionUtils",
  [
    "WAFlowJSONConstants",
    "WAFlowJSONValidationError",
    "WhatsAppFlowsTemplateVersion",
    "WhatsAppFlowsTemplateVersionState",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 32767;
    function s() {
      return Array.from(r("WhatsAppFlowsTemplateVersion").members()).filter(
        function (e) {
          return !f(+e) && !g(+e);
        },
      );
    }
    function u(e) {
      return r("WhatsAppFlowsTemplateVersion").cast(c(e));
    }
    function c(e) {
      return e == null
        ? null
        : typeof e == "number" && !Number.isNaN(e)
          ? +e
          : typeof e != "string"
            ? null
            : d(e);
    }
    function d(t) {
      var n = t.split(".");
      if (n.length !== 2) return null;
      var r = n[0],
        o = n[1];
      return window.isNaN(Number(r)) ||
        window.isNaN(Number(o)) ||
        !(+r >= 1 && +r < e) ||
        !(+o >= 0 && +o <= 99)
        ? null
        : +r * 100 + +o;
    }
    function m(e) {
      var t = Math.floor(e / 100),
        n = e - t * 100;
      return t + "." + n;
    }
    function p(e) {
      return y(e).includes("PUBLISHED_WITH_DISABLED_FUNCTIONALITY");
    }
    function _(e) {
      return y(e).includes("NOT_AVAILABLE");
    }
    function f(e) {
      var t = y(e);
      return (
        t.includes("PUBLISHED") &&
        !t.includes("PUBLISHED_WITH_DISABLED_FUNCTIONALITY")
      );
    }
    function g(e) {
      return y(e).includes("UNDER_DEV");
    }
    function h(e) {
      return y(e).includes("ARCHIVED");
    }
    function y(e) {
      return r("WhatsAppFlowsTemplateVersionState")["V" + e];
    }
    function C(e, t) {
      if (
        !Object.prototype.hasOwnProperty.call(
          e,
          o("WAFlowJSONConstants").WA_FLOW_JSON_VERSION,
        )
      )
        return o("WAFlowJSONValidationError").missingFlowJSONVersionError(t);
      if (typeof e.version != "string")
        return o("WAFlowJSONValidationError").invalidFlowJSONVersionError(t);
      var n = u(e.version);
      return n == null || (!g(+n) && !f(+n))
        ? o("WAFlowJSONValidationError").invalidFlowJSONVersionError(t)
        : { isValid: !0, errors: [] };
    }
    ((l.getFlowJSONVersionsNotInUse = s),
      (l.getFlowJSONVersionInternal = u),
      (l.convertSemanticVersionToIntVersion = d),
      (l.convertIntVersionToSemanticVersion = m),
      (l.isFlowJSONVersionPublishedWithDisabledFunctionality = p),
      (l.isFlowJSONVersionExpired = _),
      (l.isFlowJSONVersionPublishedWithFullFunctionality = f),
      (l.isFlowJSONVersionUnderDev = g),
      (l.isFlowJSONVersionArchived = h),
      (l.isFlowJSONVersionValid = C));
  },
  98,
);
