__d(
  "WAFlowsDynamicDataUtils",
  ["WAFlowsActionHandlerTypes", "WAFlowsTypeGuards"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /^\$\{(screen\.([a-zA-Z,_]*)\.)(data|form)+(\..+)?\}/,
      s =
        /(^.+\${(screen\..+\.){0,1}(data|form)+(\..+)?\}+.*|^.*\${(screen\..+\.){0,1}(data|form)+(\..+)?\}+.+)/,
      u = {
        LOCAL_DATA: "data",
        GLOBAL_SCREEN_DATA: "screen",
        FORM_DATA: "form",
        EXTERNAL_DATA: "external_data",
      },
      c = [u.EXTERNAL_DATA, u.LOCAL_DATA, u.FORM_DATA];
    function d(t) {
      return o("WAFlowsTypeGuards").isString(t) && e.test(t);
    }
    function m(e) {
      return (
        o("WAFlowsTypeGuards").isString(e) &&
        c.some(function (t) {
          return typeof t == "string" && e.startsWith("${" + t);
        }) &&
        e.endsWith("}")
      );
    }
    function p(e) {
      return o("WAFlowsTypeGuards").isString(e) && (d(e) || m(e));
    }
    function _(e) {
      return (
        o("WAFlowsTypeGuards").isString(e) &&
        e.startsWith("`") &&
        e.endsWith("`")
      );
    }
    function f(e) {
      return (
        e != null &&
        typeof e == "object" &&
        Object.prototype.hasOwnProperty.call(e, "name") &&
        e.name === o("WAFlowsActionHandlerTypes").WELJActionType.OPEN_URL
      );
    }
    function g(e) {
      return (
        e != null &&
        typeof e == "object" &&
        Object.prototype.hasOwnProperty.call(e, "name") &&
        e.name === o("WAFlowsActionHandlerTypes").WELJActionType.UPDATE_DATA
      );
    }
    function h(e) {
      return e.replace("${screen.", "").replace("${", "").replace("}", "");
    }
    function y(e) {
      return h(e).split(".");
    }
    function C(e, t) {
      if (typeof e == "string" && p(e)) {
        var n = y(e),
          r = t.data[n[n.length - 1]];
        if (r instanceof Array) return r;
      }
      return e;
    }
    ((l.DYNAMIC_DATA_STRING_INTERPOLATION_PATTERN = s),
      (l.isGlobalBindingValue = d),
      (l.isLocalBindingValue = m),
      (l.isBindingValue = p),
      (l.isNestedExpressionValue = _),
      (l.isExternalUrlValue = f),
      (l.isUpdateDataAction = g),
      (l.getDataKey = h),
      (l.getBindingKeyArray = y),
      (l.bindDataSourceForSelectableComponents = C));
  },
  98,
);
