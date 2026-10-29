__d(
  "ScriptPath",
  ["ErrorGuard", "SubscriptionList", "TimeSlice", "WebStorage", "isInIframe"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = ["nav_trigger"],
      l,
      s,
      u = "sp_pi",
      c = 3e4,
      d = null,
      m = null,
      p = new (n("SubscriptionList"))(),
      _ = null,
      f = [],
      g = n("TimeSlice").guard(
        function (e, t) {
          p.getCallbacks().forEach(function (r) {
            (l || (l = n("ErrorGuard"))).applyWithGuard(
              function () {
                r({ source: d, dest: m, cause: e, extraData: t });
              },
              null,
              [],
            );
          });
        },
        "ScriptPath Notifying callbacks",
        { propagationType: n("TimeSlice").PropagationType.ORPHAN },
      );
    function h() {
      return m ? m.scriptPath : void 0;
    }
    function y() {
      var e = (s || (s = n("WebStorage"))).getSessionStorage();
      !e ||
        n("isInIframe")() ||
        s.setItemGuarded(
          e,
          u,
          JSON.stringify({ pageInfo: m, clickPoint: _, time: Date.now() }),
        );
    }
    function C() {
      var e = (s || (s = n("WebStorage"))).getSessionStorageForRead();
      if (e) {
        var t = e.getItem(u);
        if (t != null && t !== "") {
          var r = JSON.parse(t);
          r &&
            (r.time < Date.now() - c &&
              ((e = (s || (s = n("WebStorage"))).getSessionStorage()),
              e && e.removeItem(u)),
            (m = r.pageInfo),
            (_ = r.clickPoint),
            m && (m.restored = !0));
        }
      }
    }
    C();
    var b = {
      set: function (n, r, o) {
        d = m;
        var t = o != null ? o : {},
          a = t.nav_trigger,
          i = babelHelpers.objectWithoutPropertiesLoose(t, e);
        ((m = { scriptPath: n, categoryToken: r, extraData: i }),
          (f = []),
          (window._script_path = n),
          g(null, a == null ? null : { nav_trigger: a }));
      },
      openOverlayView: function (t, n, r) {
        if (t) {
          var e = f.length;
          (e === 0 || f[e - 1] !== t) &&
            ((d = babelHelpers.extends({}, m)),
            m && (m.topViewEndpoint = t),
            r != null && r.replaceTopOverlay === !0 && e > 0
              ? ((f[e - 1] = t), g("replace_overlay_view", n))
              : (f.push(t), g("open_overlay_view", n)));
        }
      },
      closeOverlayView: function (t, n) {
        var e = f.lastIndexOf(t);
        e !== -1 &&
          ((d = babelHelpers.extends({}, m)),
          m &&
            (e > 0
              ? (m.topViewEndpoint = f[e - 1])
              : (m.topViewEndpoint = null)),
          (f = f.slice(0, e)),
          g("close_overlay_view", n));
      },
      setClickPointInfo: function (t) {
        ((_ = t), y());
      },
      getClickPointInfo: function () {
        return _;
      },
      getScriptPath: h,
      getCategoryToken: function () {
        return m ? m.categoryToken : void 0;
      },
      getEarlyFlushPage: function () {
        var e;
        return (e = m) == null || (e = e.extraData) == null
          ? void 0
          : e.ef_page;
      },
      getTopViewEndpoint: function () {
        var e = f.length;
        return e > 0 ? f[e - 1] : h();
      },
      getPageInfo: function () {
        return m;
      },
      getSourcePageInfo: function () {
        return d;
      },
      subscribe: function (t) {
        return p.add(n("TimeSlice").guard(t, "ScriptPath.subscribe"));
      },
      shutdown: function () {
        y();
      },
    };
    a.exports = b;
  },
  null,
);
