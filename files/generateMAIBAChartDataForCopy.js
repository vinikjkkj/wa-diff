__d(
  "generateMAIBAChartDataForCopy",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 100,
      s = 20;
    function u(t, n) {
      try {
        if (!(t != null && t.length) || !(n != null && n.length)) return;
        var o = t.slice(0, s),
          a = n.slice(0, e).map(function (e) {
            var t, n;
            return babelHelpers.extends({}, e, {
              composed_text_values:
                (t =
                  (n = e.composed_text_values) == null
                    ? void 0
                    : n.slice(0, s)) != null
                  ? t
                  : [],
            });
          }),
          i = o.map(function (e) {
            var t, n;
            return (t =
              (n = e.composed_text_label) == null
                ? void 0
                : n.content[0].text) != null
              ? t
              : "";
          }),
          l = a.map(function (e) {
            var t, n;
            return (t =
              (n = e.composed_text_values) == null
                ? void 0
                : n.map(function (e) {
                    var t;
                    return (t = e.content[0].text) != null ? t : "";
                  })) != null
              ? t
              : [];
          }),
          u = [i].concat(l);
        return JSON.stringify({ data: u });
      } catch (e) {
        r("FBLogger")("MAIBA").warn("Error creating copy data for chart");
        return;
      }
    }
    l.default = u;
  },
  98,
);
