__d(
  "WAWebVoipMainThreadLockReporter",
  [
    "WALogger",
    "WAWebVoipMainThreadLockMarker",
    "WAWebVoipMainThreadLockODSKeys",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 5e3,
      c = 35e3,
      d = 336 * 60 * 6e4,
      m = 6e4,
      p = 0.01,
      _ = 1,
      f = !1;
    function g() {
      if (!f) {
        f = !0;
        try {
          h(Date.now());
        } catch (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [MainThreadLock] marker report failed",
                ])),
            )
            .catching(r("getErrorSafe")(t));
        }
      }
    }
    function h(e) {
      var t = [],
        n = !1;
      for (var r of o("WAWebVoipMainThreadLockMarker").MAIN_THREAD_LOCK_SITES) {
        var a = y(r, e);
        (a == null ? void 0 : a.kind) === "freeze"
          ? t.push(a.marker)
          : (a == null ? void 0 : a.kind) === "offload_event" && (n = !0);
      }
      var i = v(t);
      (R(i, e),
        (i.length > 0 || n) &&
          o("WAWebVoipMainThreadLockODSKeys").flushMainThreadLockCounts());
    }
    function y(e, t) {
      var n = o("WAWebVoipMainThreadLockMarker").readMainThreadLockMarkerValue(
        e,
      );
      if (n == null) return null;
      var r = L(n);
      if (r == null) return (C(e, n), null);
      if (
        r.s ===
        o("WAWebVoipMainThreadLockMarker").getMainThreadLockPageSession()
      )
        return null;
      var a = b(r, t - r.t);
      return a === "young"
        ? null
        : (o("WAWebVoipMainThreadLockMarker").removeMainThreadLockMarker(e),
          a === "freeze"
            ? { kind: "freeze", marker: { record: r, site: e } }
            : a === "discard"
              ? null
              : (o(
                  "WAWebVoipMainThreadLockODSKeys",
                ).logMainThreadLockOffloadEvent(a),
                { kind: "offload_event" }));
    }
    function C(e, t) {
      E(t) || o("WAWebVoipMainThreadLockMarker").removeMainThreadLockMarker(e);
    }
    function b(e, t) {
      return t > d || t < -m
        ? "discard"
        : e.m === "main"
          ? t >= u
            ? "freeze"
            : "young"
          : e.x === 1
            ? "pending_exit"
            : t >= c
              ? "pending_death"
              : "young";
    }
    function v(e) {
      var t = new Map();
      for (var n of e) {
        var r = t.get(n.record.s);
        (r == null || S(n.record, r.record)) && t.set(n.record.s, n);
      }
      return Array.from(t.values());
    }
    function S(e, t) {
      return e.t !== t.t ? e.t > t.t : k(e) > k(t);
    }
    function R(e, t) {
      var n,
        r,
        a = null;
      for (var i of e)
        (o("WAWebVoipMainThreadLockODSKeys").logMainThreadLockFreezeFound(
          i.site,
          i.record.a,
        ),
          i.site === "jsworker_create" &&
            o(
              "WAWebVoipMainThreadLockODSKeys",
            ).logMainThreadLockJsWorkerFreezeFound(
              i.record.c,
              i.record.i,
              i.record.a,
            ),
          o("WAWebVoipMainThreadLockODSKeys").logMainThreadLockFreezeFoundAny(
            i.record.a,
          ),
          (a == null || i.record.t > a.record.t) && (a = i));
      if (a != null) {
        var l = a,
          u = l.record,
          c = l.site,
          d = Math.round((t - u.t) / 1e3);
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [MainThreadLock] freeze found site=",
                " arm=",
                " ageSec=",
                " caller=",
                " initState=",
                " frozenPages=",
                "",
              ])),
            c,
            u.a,
            d,
            (n = u.c) != null ? n : "none",
            (r = u.i) != null ? r : "none",
            e.length,
          )
          .tags("non-sad")
          .sendLogs("voip-main-thread-lock-freeze-found", {
            sampling: p,
            sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
          });
      }
    }
    function L(e) {
      var t = I(e);
      if (t == null || t.v !== _) return null;
      var n = T(t.a),
        r = D(t.m),
        o = t.k,
        a = t.s,
        i = t.t;
      return n == null ||
        r == null ||
        typeof o != "string" ||
        typeof a != "string" ||
        typeof i != "number"
        ? null
        : {
            a: n,
            c: x(t.c),
            i: x(t.i),
            k: o,
            m: r,
            s: a,
            t: i,
            v: _,
            x: t.x === 1 ? 1 : 0,
          };
    }
    function E(e) {
      var t,
        n = (t = I(e)) == null ? void 0 : t.v;
      return typeof n == "number" && n > _;
    }
    function k(e) {
      var t = Number(e.k.slice(e.k.lastIndexOf(".") + 1));
      return Number.isFinite(t) ? t : 0;
    }
    function I(e) {
      try {
        var t = JSON.parse(e);
        return t != null && typeof t == "object" ? t : null;
      } catch (e) {
        return null;
      }
    }
    function T(e) {
      return e === "test"
        ? "test"
        : e === "control"
          ? "control"
          : e === "none"
            ? "none"
            : null;
    }
    function D(e) {
      return e === "main" ? "main" : e === "offload" ? "offload" : null;
    }
    function x(e) {
      return typeof e == "string" ? e : void 0;
    }
    ((l.reportMainThreadLockMarkers = g),
      (l.parseMainThreadLockMarkerRecord = L));
  },
  98,
);
