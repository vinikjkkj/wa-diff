__d(
  "WAWebBizAiResponseSettingsV2Model",
  ["WALogger", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [],
      u = ["CONTACTS", "ADS", "ALL"];
    function c(e) {
      return e === "ADS"
        ? "ADS"
        : e === "ALL"
          ? "ALL"
          : e === "CONTACTS"
            ? "CONTACTS"
            : null;
    }
    function d(e) {
      return e === "MUTED"
        ? "MUTED"
        : e === "SUGGESTED_REPLIES"
          ? "SUGGESTED_REPLIES"
          : e === "UNMUTED"
            ? "UNMUTED"
            : null;
    }
    function m(t) {
      if (t == null) return s;
      var n = [];
      for (var r of t) {
        var a,
          i,
          l = (a = r == null ? void 0 : r.selector_type) != null ? a : null,
          u = (i = r == null ? void 0 : r.mode) != null ? i : null,
          m = l != null ? c(l) : null,
          p = u != null ? d(u) : null;
        if (m == null || p == null) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "response settings v2 dropped an audience rule this build cannot read: selector_type=",
                  " mode=",
                  "",
                ])),
              String(l),
              String(u),
            )
            .sendLogs("biz-ai-response-settings-v2-unreadable-rule");
          continue;
        }
        n.push({ mode: p, selector: m });
      }
      return n;
    }
    function p(e) {
      return e.length > 0;
    }
    function _(e) {
      return e
        .map(function (e) {
          return e.selector + ":" + e.mode;
        })
        .join(",");
    }
    function f(e) {
      return e.filter(function (e) {
        return u.includes(e.selector);
      });
    }
    function g(e, t) {
      var n;
      return (n = e.find(function (e) {
        return e.selector === t;
      })) == null
        ? void 0
        : n.mode;
    }
    function h(e, t, n) {
      if (
        !e.some(function (e) {
          return e.selector === t;
        })
      )
        throw r("err")(
          "applyMode called for an audience with no stored rule: " + t,
        );
      return e.map(function (e) {
        return e.selector === t ? { mode: n, selector: t } : e;
      });
    }
    function y(e) {
      return e.length === 0
        ? null
        : e.map(function (e) {
            return { mode: e.mode, selector_type: e.selector };
          });
    }
    ((l.NO_RULES = s),
      (l.RENDERED_SELECTORS = u),
      (l.parseRules = m),
      (l.hasV2Rules = p),
      (l.serializeRules = _),
      (l.getRenderableRules = f),
      (l.getMode = g),
      (l.applyMode = h),
      (l.toMutationInput = y));
  },
  98,
);
