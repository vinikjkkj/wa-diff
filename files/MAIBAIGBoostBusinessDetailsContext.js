__d(
  "MAIBAIGBoostBusinessDetailsContext",
  ["MAIBAIGBoostToolName", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = c(!1);
    function p(e) {
      return (
        (e == null
          ? void 0
          : e.some(function (e) {
              return (
                ((e == null ? void 0 : e.tool_name) === "get_ig_profile_info" ||
                  (e == null ? void 0 : e.tool_name) === "ig_boost_context") &&
                (e == null ? void 0 : e.is_completed) === !0 &&
                (e.tool_status == null || e.tool_status === "COMPLETED")
              );
            })) === !0
      );
    }
    function _(e) {
      var t = !1;
      return e.map(function (e) {
        var n = t;
        return (
          e.some(function (e) {
            return (
              e != null &&
              e.tool_name === String(r("MAIBAIGBoostToolName").DRAFT) &&
              e.is_completed === !0 &&
              (e.tool_status == null || e.tool_status === "COMPLETED")
            );
          })
            ? (t = !1)
            : p(e) && (t = !0),
          n
        );
      });
    }
    function f(e) {
      var t = e.children,
        n = e.hasPriorBusinessDetails;
      return s.jsx(m.Provider, { value: n, children: t });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      return d(m);
    }
    ((l.hasMAIBAIGBoostBusinessDetails = p),
      (l.getMAIBAIGBoostPriorBusinessDetails = _),
      (l.MAIBAIGBoostBusinessDetailsProvider = f),
      (l.useMAIBAIGBoostHasPriorBusinessDetails = g));
  },
  98,
);
