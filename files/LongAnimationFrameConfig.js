__d(
  "LongAnimationFrameConfig",
  ["CurrentUser", "FBLogger", "WebResponsivenessConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      app_id: "default",
      skip_script_position_conversion: [
        "smit.vn$",
        "ag-scripts\\.js",
        "sctx\\.part",
      ],
      logging_ratio: 1,
    };
    function s(t) {
      var n,
        o,
        a,
        i,
        l = t != null ? t : r("CurrentUser").getAppID(),
        s =
          (n =
            (o = r("WebResponsivenessConfig").long_animation_frame) == null
              ? void 0
              : o.app_config) != null
            ? n
            : [];
      return s.length === 0
        ? e
        : (a =
              (i = s.find(function (e) {
                return "" + e.app_id == "" + (l != null ? l : 0);
              })) != null
                ? i
                : s.find(function (e) {
                    return e.app_id === "default";
                  })) != null
          ? a
          : e;
    }
    function u(e) {
      var t = s(e),
        n = t.skip_script_position_conversion;
      if (n == null)
        return babelHelpers.extends({}, t, {
          skip_script_position_conversion: [],
        });
      var o = [];
      for (var a of n)
        try {
          var i = a.trim();
          (i.startsWith("/") &&
            i.endsWith("/") &&
            (i = i.slice(1, i.length - 1)),
            o.push(new RegExp(i)));
        } catch (e) {
          r("FBLogger")("long-animation-frame").warn(
            "Failed to construct regex from %s",
            a,
          );
        }
      return babelHelpers.extends({}, t, {
        skip_script_position_conversion: o,
      });
    }
    var c = null;
    function d(e) {
      var t, n;
      c == null && (c = u(e));
      var r = (t = (n = c) == null ? void 0 : n.logging_ratio) != null ? t : 1;
      return Math.random() <= r;
    }
    ((l.getLoAFAppConfig = u), (l.shouldLogLoAF = d));
  },
  98,
);
