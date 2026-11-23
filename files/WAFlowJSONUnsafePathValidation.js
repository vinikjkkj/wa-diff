__d(
  "WAFlowJSONUnsafePathValidation",
  ["WAFlowJSONConstants", "WAFlowsObjectPathSafety"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e === "init-values" || e === "error-messages"
        ? "paths"
        : (t === o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.FORM &&
              e === "children") ||
            (t === o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.IF &&
              (e === "then" || e === "else"))
          ? "components"
          : t === o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.SWITCH &&
              e === "cases"
            ? "cases"
            : "data";
    }
    function s(e, t) {
      return e === "paths"
        ? "paths"
        : e === "root" && t === "screens"
          ? "screens"
          : e === "screen" && t === "layout"
            ? "layout"
            : (e === "layout" && t === "children") || e === "cases"
              ? "components"
              : "data";
    }
    function u(t, n, r) {
      return t === "component" ? e(n, r) : s(t, n);
    }
    var c = {
      root: "data",
      screens: "screen",
      screen: "data",
      layout: "data",
      components: "component",
      component: "data",
      cases: "data",
      paths: "paths",
      data: "data",
    };
    function d(e, t, n, r) {
      var a,
        i = Object.entries(e),
        l =
          (a = i.find(function (e) {
            var t = e[0];
            return t === "type";
          })) == null
            ? void 0
            : a[1];
      for (var s of i) {
        var c = s[0],
          d = s[1],
          m = n + "/" + c,
          p =
            t === "paths"
              ? o("WAFlowsObjectPathSafety").isSafeObjectPath(c)
              : o("WAFlowsObjectPathSafety").isSafeObjectKey(c);
        if (!p) return { path: m, kind: "key", propertyName: c };
        if (
          typeof d == "string" &&
          ((t === "component" &&
            c === "name" &&
            !o("WAFlowsObjectPathSafety").isSafeObjectPath(d)) ||
            (t === "screen" &&
              c === "id" &&
              !o("WAFlowsObjectPathSafety").isSafeObjectKey(d)))
        )
          return { path: m, kind: "value", propertyName: d };
        r.push({ value: d, path: m, kind: u(t, c, l) });
      }
      return null;
    }
    function m(e) {
      for (
        var t = [{ value: e, path: "", kind: "root" }],
          n = function () {
            var e = t.pop();
            if (e == null) return 0;
            var n = e.kind,
              r = e.path,
              o = e.value;
            if (o == null || typeof o != "object") return 1;
            if (Array.isArray(o)) {
              var a = c[n];
              return (
                o.forEach(function (e, n) {
                  t.push({ value: e, path: r + "/" + n, kind: a });
                }),
                1
              );
            }
            var i = d(o, n, r, t);
            if (i != null) return { v: i };
          },
          r;
        t.length > 0 && ((r = n()), r !== 0);
      )
        if (r !== 1 && r) return r.v;
      return null;
    }
    l.findUnsafeFlowJSONPath = m;
  },
  98,
);
