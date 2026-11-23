__d(
  "WAFlowsFormUtils",
  ["WAFlowsComponentConstants", "WAFlowsTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(["ChipsSelector", "CheckboxGroup", "RadioButtonsGroup"]);
    function s(e, t) {
      return t.reduce(function (e, t) {
        if (o("WAFlowsComponentConstants").FORM_COMPONENT_TYPES.has(t.type))
          e.push(t);
        else if (
          o("WAFlowsComponentConstants").CONDITIONAL_COMPONENT_TYPES.has(t.type)
        ) {
          if (t.type === o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.IF) {
            var n = t,
              r = n.condition === !0 ? (n == null ? void 0 : n.then) : n.else;
            s(e, r != null ? r : []);
          } else if (
            t.type === o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.SWITCH
          ) {
            var a,
              i,
              l,
              u = t,
              c = u.value,
              d =
                (a =
                  (i = (l = u.cases) == null ? void 0 : l[c]) != null
                    ? i
                    : u == null
                      ? void 0
                      : u.cases.default) != null
                  ? a
                  : [];
            s(e, d);
          }
        }
        return e;
      }, e);
    }
    var u = function (t, n) {
        var e = s([], n);
        return e.length > 0 && e[e.length - 1].name === t;
      },
      c = function (n, r, o) {
        var t = n[r],
          a = d(n, r);
        return r > 0 && o === "android" && t.visible !== !1
          ? a && e.has(a.type) && t.type !== "Footer"
          : void 0;
      },
      d = function (t, n) {
        for (var e, r = n - 1; r >= 0; r--)
          if (t[r].visible !== !1) {
            e = r;
            break;
          }
        return e != null ? t[e] : null;
      };
    ((l.isLastChild = u), (l.isHorizontalDividerVisible = c));
  },
  98,
);
