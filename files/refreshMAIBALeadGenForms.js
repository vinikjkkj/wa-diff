__d(
  "refreshMAIBALeadGenForms",
  ["AdsLeadGenFormFormSelectorUpdateAction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      try {
        var t,
          n = JSON.parse(e),
          r =
            typeof (n == null ? void 0 : n.result) == "string"
              ? JSON.parse(n.result)
              : (t = n == null ? void 0 : n.result) != null
                ? t
                : n;
        return typeof r == "object" && r != null ? r : null;
      } catch (e) {
        return null;
      }
    }
    function s(t) {
      var n = e(t);
      (n == null ? void 0 : n.created) !== !0 ||
        n.form_id == null ||
        n.page_id == null ||
        r("AdsLeadGenFormFormSelectorUpdateAction").dispatch(
          { pageID: n.page_id },
          { line: "43", module: "refreshMAIBALeadGenForms.js", moduleID: i.id },
        );
    }
    l.default = s;
  },
  98,
);
