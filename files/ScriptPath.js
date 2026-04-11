__d(
  "ScriptPath",
  ["ErrorGuard", "SubscriptionList", "TimeSlice", "WebStorage", "isInIframe"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l,
      s = "sp_pi",
      u = 3e4,
      c = null,
      d = null,
      m = new (n("SubscriptionList"))(),
      p = null,
      _ = [],
      f = n("TimeSlice").guard(
        function (t, r) {
          m.getCallbacks().forEach(function (o) {
            (e || (e = n("ErrorGuard"))).applyWithGuard(
              function () {
                o({ source: c, dest: d, cause: t, extraData: r });
              },
              null,
              [],
            );
          });
        },
        "ScriptPath Notifying callbacks",
        { propagationType: n("TimeSlice").PropagationType.ORPHAN },
      );
    function g() {
      return d ? d.scriptPath : void 0;
    }
    function h() {
      var e = (l || (l = n("WebStorage"))).getSessionStorage();
      !e ||
        n("isInIframe")() ||
        l.setItemGuarded(
          e,
          s,
          JSON.stringify({ pageInfo: d, clickPoint: p, time: Date.now() }),
        );
    }
    function y() {
      var e = (l || (l = n("WebStorage"))).getSessionStorageForRead();
      if (e) {
        var t = e.getItem(s);
        if (t) {
          var r = JSON.parse(t);
          r &&
            (r.time < Date.now() - u &&
              ((e = (l || (l = n("WebStorage"))).getSessionStorage()),
              e && e.removeItem(s)),
            (d = r.pageInfo),
            (p = r.clickPoint),
            d && (d.restored = !0));
        }
      }
    }
    y();
    var C = {
      set: function (t, n, r) {
        ((c = d),
          (d = { scriptPath: t, categoryToken: n, extraData: r || {} }),
          (_ = []),
          (window._script_path = t),
          f());
      },
      openOverlayView: function (t, n, r) {
        if (t) {
          var e = _.length;
          (e === 0 || _[e - 1] !== t) &&
            ((c = babelHelpers.extends({}, d)),
            d && (d.topViewEndpoint = t),
            r && r.replaceTopOverlay && e > 0
              ? ((_[e - 1] = t), f("replace_overlay_view", n))
              : (_.push(t), f("open_overlay_view", n)));
        }
      },
      closeOverlayView: function (t, n) {
        var e = _.lastIndexOf(t);
        e !== -1 &&
          ((c = babelHelpers.extends({}, d)),
          d &&
            (e > 0
              ? (d.topViewEndpoint = _[e - 1])
              : (d.topViewEndpoint = null)),
          (_ = _.slice(0, e)),
          f("close_overlay_view", n));
      },
      setClickPointInfo: function (t) {
        ((p = t), h());
      },
      getClickPointInfo: function () {
        return p;
      },
      getScriptPath: g,
      getCategoryToken: function () {
        return d ? d.categoryToken : void 0;
      },
      getEarlyFlushPage: function () {
        var e;
        return (e = d) == null || (e = e.extraData) == null
          ? void 0
          : e.ef_page;
      },
      getTopViewEndpoint: function () {
        var e = _.length;
        return e > 0 ? _[e - 1] : g();
      },
      getPageInfo: function () {
        return d;
      },
      getSourcePageInfo: function () {
        return c;
      },
      subscribe: function (t) {
        return m.add(n("TimeSlice").guard(t, "ScriptPath.subscribe"));
      },
      shutdown: function () {
        h();
      },
    };
    a.exports = C;
  },
  null,
);
