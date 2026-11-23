__d(
  "MAIBARecommendationCardState",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function l(t) {
      var n = [],
        r = t == null ? void 0 : t.children;
      if (Array.isArray(r))
        for (var o of r) {
          var a = e(o);
          if (a != null) {
            var i = a.custom_type;
            if (typeof i == "string") {
              var l = e(a.state);
              l != null && n.push({ custom_type: i, state: l });
            }
          }
        }
      return {
        children: n,
        description:
          typeof (t == null ? void 0 : t.description) == "string"
            ? t.description
            : "",
        title: typeof (t == null ? void 0 : t.title) == "string" ? t.title : "",
      };
    }
    i.parseMAIBARecommendationCardState = l;
  },
  66,
);
