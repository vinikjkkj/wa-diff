__d(
  "ScriptPath",
  ["ErrorGuard", "SubscriptionList", "TimeSlice", "WebStorage", "isInIframe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["nav_trigger"],
      s,
      u,
      c = "sp_pi",
      d = 3e4,
      m = null,
      p = null,
      _ = new (r("SubscriptionList"))(),
      f = null,
      g = [],
      h = r("TimeSlice").guard(
        function (e, t) {
          _.getCallbacks().forEach(function (n) {
            (s || (s = r("ErrorGuard"))).applyWithGuard(
              function () {
                n({ source: m, dest: p, cause: e, extraData: t });
              },
              null,
              [],
            );
          });
        },
        "ScriptPath Notifying callbacks",
        { propagationType: r("TimeSlice").PropagationType.ORPHAN },
      );
    function y() {
      return p ? p.scriptPath : void 0;
    }
    function C() {
      var e = (u || (u = r("WebStorage"))).getSessionStorage();
      !e ||
        r("isInIframe")() ||
        u.setItemGuarded(
          e,
          c,
          JSON.stringify({ pageInfo: p, clickPoint: f, time: Date.now() }),
        );
    }
    function b() {
      var e = (u || (u = r("WebStorage"))).getSessionStorageForRead();
      if (e) {
        var t = e.getItem(c);
        if (t != null && t !== "") {
          var n = JSON.parse(t);
          n &&
            (n.time < Date.now() - d &&
              ((e = (u || (u = r("WebStorage"))).getSessionStorage()),
              e && e.removeItem(c)),
            (p = n.pageInfo),
            (f = n.clickPoint),
            p && (p.restored = !0));
        }
      }
    }
    b();
    var v = {
      set: function (n, r, o) {
        m = p;
        var t = o != null ? o : {},
          a = t.nav_trigger,
          i = babelHelpers.objectWithoutPropertiesLoose(t, e);
        ((p = { scriptPath: n, categoryToken: r, extraData: i }),
          (g = []),
          (window._script_path = n),
          h(null, a == null ? null : { nav_trigger: a }));
      },
      openOverlayView: function (t, n, r) {
        if (t) {
          var e = g.length;
          (e === 0 || g[e - 1] !== t) &&
            ((m = babelHelpers.extends({}, p)),
            p && (p.topViewEndpoint = t),
            r != null && r.replaceTopOverlay === !0 && e > 0
              ? ((g[e - 1] = t), h("replace_overlay_view", n))
              : (g.push(t), h("open_overlay_view", n)));
        }
      },
      closeOverlayView: function (t, n) {
        var e = g.lastIndexOf(t);
        e !== -1 &&
          ((m = babelHelpers.extends({}, p)),
          p &&
            (e > 0
              ? (p.topViewEndpoint = g[e - 1])
              : (p.topViewEndpoint = null)),
          (g = g.slice(0, e)),
          h("close_overlay_view", n));
      },
      setClickPointInfo: function (t) {
        ((f = t), C());
      },
      getClickPointInfo: function () {
        return f;
      },
      getScriptPath: y,
      getCategoryToken: function () {
        return p ? p.categoryToken : void 0;
      },
      getEarlyFlushPage: function () {
        var e;
        return (e = p) == null || (e = e.extraData) == null
          ? void 0
          : e.ef_page;
      },
      getTopViewEndpoint: function () {
        var e = g.length;
        return e > 0 ? g[e - 1] : y();
      },
      getPageInfo: function () {
        return p;
      },
      getSourcePageInfo: function () {
        return m;
      },
      subscribe: function (t) {
        return _.add(r("TimeSlice").guard(t, "ScriptPath.subscribe"));
      },
      shutdown: function () {
        C();
      },
    };
    i.exports = v;
  },
  34,
);
