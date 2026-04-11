__d(
  "MarauderLogger",
  ["Banzai", "CacheStorage", "MarauderConfig"],
  function (t, n, r, o, a, i) {
    var e = "client_event",
      l = "navigation",
      s = 18e4,
      u = "marauder",
      c = "marauder_last_event_time",
      d = "marauder_last_session_id",
      m = {},
      p = [],
      _ = !1,
      f = null,
      g = null,
      h = null,
      y = 0,
      C,
      b,
      v = !1,
      S = null;
    function R() {
      P().set(c, L());
    }
    n("Banzai").subscribe(n("Banzai").SHUTDOWN, R);
    function L() {
      return ((C = C || P().get(c) || 0), C);
    }
    function E() {
      v || ((b = P().get(d)), (v = !0));
      var e = Date.now();
      return (
        (!b || e - s > L()) &&
          ((b =
            e.toString(16) + "-" + (~~(Math.random() * 16777215)).toString(16)),
          P().set(d, b)),
        b
      );
    }
    function k() {
      var e;
      return {
        user_agent: window.navigator.userAgent,
        screen_height: window.screen.availHeight,
        screen_width: window.screen.availWidth,
        density: (e = window.screen.devicePixelRatio) != null ? e : null,
        platform: window.navigator.platform || null,
        locale: window.navigator.language || null,
      };
    }
    function I() {
      return { locale: navigator.language };
    }
    function T(e, t, n, r, o, a, i) {
      var l = i != null && i != 0 ? i : Date.now();
      C = i != null && i != 0 ? Date.now() : l;
      var s = t != null && t != "" ? t : f;
      return {
        name: e,
        time: l / 1e3,
        module: s,
        obj_type: r,
        obj_id: o,
        uuid: a,
        extra: n,
      };
    }
    function D(e, t, n) {
      return T("content", null, { flags: t }, null, null, e, n);
    }
    function x(e) {
      var t = window.__mrdr;
      if (t)
        for (var n in t) {
          var r = t[n];
          if (r[3] !== 0) {
            if ((delete t[n], n === "1"))
              if (h !== null) n = h;
              else continue;
            (e.push(D(n, 1, r[1])),
              e.push(D(n, 2, r[2])),
              e.push(D(n, 3, r[3])));
          }
        }
    }
    function $(t, r) {
      if ((x(t), t.length !== 0)) {
        _ && t.push(T("counters", null, m));
        var o = n("Banzai").BASIC;
        r === "vital" && (o = n("Banzai").VITAL);
        var a = n("MarauderConfig").gk_enabled;
        if (
          (y === 0 &&
            a &&
            (t.push(T("device_status", null, I())), (o = { delay: 5e3 })),
          r === "signal" && (o = { signal: !0 }),
          a && Math.random() < 0.01 && t.push(T("device_info", null, k())),
          h !== null)
        )
          for (var i = 0; i < t.length; i++) {
            var l = t[i];
            l.uuid == null && (l.uuid = h);
          }
        var s = {
            app_ver: n("MarauderConfig").app_version,
            data: t,
            device_id: void 0,
            log_type: e,
            seq: y++,
            session_id: E(),
          },
          c = P().get("device_id");
        (c && (s.device_id = c), (m = {}), (_ = !1), n("Banzai").post(u, s, o));
      }
    }
    function P() {
      return (S || (S = new (n("CacheStorage"))("localstorage", "")), S);
    }
    function N(e) {
      (m[e] || (m[e] = 0), m[e]++, (_ = !0));
    }
    function M(e, t, n, r, o, a, i, l) {
      $([T(e, t, n, r, o, a, i)], l);
    }
    function w(e, t) {
      f !== t &&
        (p.push(T(l, f, { dest_module: t, source_url: g, destination_url: e })),
        (f = t),
        (g = e));
    }
    function A(e, t) {
      f !== t && ((h = null), w(e, t));
    }
    function F(e, t, n) {
      M(t ? "show_module" : "hide_module", e, n);
    }
    function O(e) {
      f = e;
    }
    function B() {
      return f;
    }
    function W(e) {
      h === null && ((h = e), e !== null && ($(p), (p = [])));
    }
    a.exports = {
      count: N,
      log: M,
      navigateTo: A,
      navigateWithinSession: w,
      toggleModule: F,
      setUUID: W,
      setNavigationModule: O,
      getNavigationModule: B,
    };
  },
  null,
);
