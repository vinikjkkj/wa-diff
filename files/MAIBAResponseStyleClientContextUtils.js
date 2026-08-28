__d(
  "MAIBAResponseStyleClientContextUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      var r;
      if (!n) return e;
      var o = e.context;
      if (o == null) return e;
      var a = {};
      try {
        var i,
          l = JSON.parse(
            (i = o.visual_context_surface_data) != null ? i : "{}",
          );
        typeof l == "object" && l != null && !Array.isArray(l) && (a = l);
      } catch (e) {}
      var s = e.inlined_context,
        u =
          (r = s == null ? void 0 : s.entrypoint_client_context) != null
            ? r
            : {},
        c = u.additional_info,
        d = {};
      if (c != null && c !== "")
        try {
          var m = JSON.parse(c);
          d =
            typeof m == "object" && m != null && !Array.isArray(m)
              ? m
              : { original_additional_info: c };
        } catch (e) {
          d = { original_additional_info: c };
        }
      return babelHelpers.extends({}, e, {
        context: babelHelpers.extends({}, o, {
          visual_context_surface_data: JSON.stringify(
            babelHelpers.extends({}, a, { response_style: t }),
          ),
        }),
        inlined_context:
          s == null
            ? s
            : babelHelpers.extends({}, s, {
                entrypoint_client_context: babelHelpers.extends({}, u, {
                  additional_info: JSON.stringify(
                    babelHelpers.extends({}, d, { response_style: t }),
                  ),
                }),
              }),
      });
    }
    i.addResponseStyleSignal = e;
  },
  66,
);
