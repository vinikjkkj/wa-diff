__d(
  "applyMAIBAPageIdentityToClientContext",
  ["Cookie"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return ((t = e.inlined_context) == null ? void 0 : t.tool) !==
        "BUSINESS_HELP_CENTER" || r("Cookie").get("i_user") == null
        ? e
        : babelHelpers.extends({}, e, { page_identity: !0 });
    }
    l.default = e;
  },
  98,
);
