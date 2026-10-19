__d(
  "WAWebHatchIdeaExecutePayload",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.ideaCardId,
        n = e.locale,
        r = e.scope;
      if (t === "") return null;
      var o = n != null ? { locale: n } : null;
      if (r.mode === "full" || r.itemIds.includes(t + ":full"))
        return babelHelpers.extends(
          { method: "ideas.execute", ideaCardId: t, mode: "full" },
          o,
        );
      var a = r.itemIds;
      return a.length === 0 || a.includes("") || new Set(a).size !== a.length
        ? null
        : babelHelpers.extends(
            {
              method: "ideas.execute",
              ideaCardId: t,
              mode: "selectedItems",
              itemIds: a,
            },
            o,
          );
    }
    var l = /^[a-z]{2,3}(-[A-Z][a-z]{3})?(-([A-Z]{2}|\d{3}))?$/,
      s = { es_LA: "es-419", ar_AR: "ar" };
    function u(e) {
      var t;
      if (e == null) return null;
      var n = (t = s[e]) != null ? t : e.replaceAll("_", "-");
      return l.test(n) ? n : null;
    }
    ((i.buildHatchIdeaExecuteRequest = e), (i.toHatchIdeaLocale = u));
  },
  66,
);
