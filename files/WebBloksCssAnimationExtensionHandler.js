__d(
  "WebBloksCssAnimationExtensionHandler",
  ["WebBloksSSRUtils", "WebBloksStyle", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    var e = "ease",
      s = new Map(),
      u = 128;
    function c() {
      return !o("WebBloksSSRUtils").canUseDOM || window.matchMedia == null
        ? !1
        : window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    function d(e, t, n, r) {
      return (
        "translate3d(" +
        (e != null ? e : "0px") +
        "," +
        (t != null ? t : "0px") +
        ",0) " +
        ("rotate(" +
          (n != null ? n : 0) +
          "deg) scale(" +
          (r != null ? r : 1) +
          ")")
      );
    }
    function m(e) {
      if (e == null || e.length === 0) return null;
      var t = {};
      for (var n of e) {
        var r,
          a = (r = n.get("offset")) != null ? r : 0,
          i = d(
            o("WebBloksUtils").toPx(n.get("at_translate_x")),
            o("WebBloksUtils").toPx(n.get("at_translate_y")),
            n.get("at_rotation"),
            n.get("at_scale"),
          ),
          l = n.get("at_opacity"),
          c = l != null ? String(l) : "1";
        t[a + "%"] = { opacity: c, transform: i };
      }
      var m = Object.keys(t)
          .map(function (e) {
            return e + ":" + t[e].transform + ":" + t[e].opacity;
          })
          .join("|"),
        p = s.get(m);
      if (p == null) {
        if (((p = o("WebBloksStyle").keyframes(t).trim()), s.size >= u)) {
          var _ = s.keys().next().value;
          _ != null && s.delete(_);
        }
        s.set(m, p);
      }
      return p;
    }
    function p(t) {
      var n,
        r,
        a,
        i = m(t.getSubNodes("keyframes")),
        l = (n = t.get("respect_reduced_motion")) != null ? n : !0;
      if (i == null || (l && c())) return {};
      var s = t.get("duration_ms"),
        u = (r = t.get("timing_function")) != null ? r : e,
        d = (a = t.get("delay_ms")) != null ? a : 0,
        p = t.get("iteration_count"),
        _ = t.get("direction"),
        f = t.get("fill_mode"),
        g = t.get("play_state"),
        h = t.get("transform_origin_x"),
        y = t.get("transform_origin_y");
      return babelHelpers.extends(
        {
          animationName: i,
          animationDuration: s != null ? s + "ms" : void 0,
          animationTimingFunction: u,
          animationDelay: d !== 0 ? d + "ms" : void 0,
          animationIterationCount: p != null && p >= 0 ? String(p) : "infinite",
          animationDirection: _ != null ? _ : void 0,
          animationFillMode: f != null ? f : void 0,
          animationPlayState: g != null ? g : void 0,
          willChange: "transform, opacity",
        },
        h != null || y != null
          ? {
              transformOrigin:
                (h != null ? o("WebBloksUtils").toPx(h) : "50%") +
                " " +
                ("" + (y != null ? o("WebBloksUtils").toPx(y) : "50%")),
            }
          : null,
      );
    }
    var _ = {
        getStyles: function (t) {
          return p(t);
        },
      },
      f = _;
    l.default = f;
  },
  98,
);
