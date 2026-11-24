__d(
  "WAWebMultiStepFormData",
  ["WAWebMultiStepFormTypes"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = s(e);
      if (t == null || !Array.isArray(t.components)) return null;
      var n = t.components.find(function (e) {
          return (
            e != null &&
            typeof e == "object" &&
            e.component === "form" &&
            e.id === t.root
          );
        }),
        r = n == null ? void 0 : n.children;
      return Array.isArray(r) && r.length > 0 ? r.length : null;
    }
    function s(e) {
      var t,
        n = (t = c(u(e))) == null ? void 0 : t.data;
      if (n == null || typeof n != "object") return null;
      var r = n.components,
        o = n.root;
      return typeof o == "string" ? { root: o, components: r } : null;
    }
    function u(e) {
      try {
        return JSON.parse(e);
      } catch (e) {
        return null;
      }
    }
    function c(e) {
      if (
        e == null ||
        typeof e != "object" ||
        e.version !== o("WAWebMultiStepFormTypes").A2UI_FORM_VERSION
      )
        return null;
      var t = e.payload;
      return t != null &&
        typeof t == "object" &&
        t.type === o("WAWebMultiStepFormTypes").A2UI_FORM_PAYLOAD_TYPE
        ? t
        : null;
    }
    ((l.countMultiStepFormSteps = e), (l.readMultiStepFormData = s));
  },
  98,
);
