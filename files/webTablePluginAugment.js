__d(
  "webTablePluginAugment",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      var o = n.filter(Boolean);
      return o.length === 0 ? e : [].concat(o, [e]);
    }
    function l(e, t) {
      return t == null
        ? e
        : babelHelpers.extends(
            {},
            t != null ? t : Object.freeze({}),
            e != null ? e : Object.freeze({}),
          );
    }
    ((i.webTablePluginAugmentXStyle = e),
      (i.webTablePluginAugmentInlineStyle = l));
  },
  66,
);
