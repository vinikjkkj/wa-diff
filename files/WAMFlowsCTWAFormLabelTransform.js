__d(
  "WAMFlowsCTWAFormLabelTransform",
  [
    "ClickToWhatsAppFeatureGating",
    "WAMFlowsCTWAFormInputTypes",
    "WAMFlowsHSMComponentLabels",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(t, n, r, a) {
      for (var i of t) {
        var l = i.label;
        if (typeof l == "string") {
          var s = o("WAMFlowsCTWAFormInputTypes").detectPresetType(l, i.name);
          if (s != null) {
            var u = n[s];
            if (
              (u != null && (i.label = u),
              r != null && typeof i["helper-text"] == "string")
            ) {
              var c = r[s];
              c != null && (i["helper-text"] = c);
            }
            if (a != null && Array.isArray(i["data-source"]))
              for (var d of i["data-source"]) {
                var m = a[d.id];
                m != null && (d.title = m);
              }
          }
        }
        Array.isArray(i.children) && e(i.children, n, r, a);
      }
    }
    function s(t, n, r, o) {
      var a = JSON.parse(JSON.stringify(t));
      for (var i of (l = a.screens) != null ? l : []) {
        var l,
          s,
          u = (s = i.layout) == null ? void 0 : s.children;
        Array.isArray(u) && e(u, n, r, o);
      }
      return a;
    }
    function u(e) {
      if (
        o("ClickToWhatsAppFeatureGating").enableCTWACategorizedFormInputs() !==
        !0
      )
        return e;
      try {
        var t = JSON.parse(e),
          n = {};
        for (var r of Object.keys(
          o("WAMFlowsHSMComponentLabels").CTWA_FORM_INPUT_TYPE_LABELS,
        ))
          n[r] = String(
            o("WAMFlowsHSMComponentLabels").CTWA_FORM_INPUT_TYPE_LABELS[r],
          );
        var a = {};
        for (var i of Object.keys(
          o("WAMFlowsHSMComponentLabels").CTWA_NATIONAL_ID_HELPER_TEXT,
        ))
          a[i] = String(
            o("WAMFlowsHSMComponentLabels").CTWA_NATIONAL_ID_HELPER_TEXT[i],
          );
        var l = {};
        for (var u of Object.keys(
          o("WAMFlowsHSMComponentLabels").CTWA_PRESET_OPTION_FBT_TITLES,
        ))
          l[u] = String(
            o("WAMFlowsHSMComponentLabels").CTWA_PRESET_OPTION_FBT_TITLES[u],
          );
        return JSON.stringify(s(t, n, a, l));
      } catch (t) {
        return e;
      }
    }
    ((l.transformFlowJSONLabels = s), (l.transformFlowJSONStringLabels = u));
  },
  98,
);
