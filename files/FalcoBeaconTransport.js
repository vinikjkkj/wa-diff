__d(
  "FalcoBeaconTransport",
  ["invariant", "XFalcoBeaconControllerRouteBuilder", "promiseDone"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 50,
      u = 30 * 1024,
      c = 48 * 1024,
      d = "]}",
      m = /^\d+$/;
    function p(e) {
      if (e == null) return { kind: "loggedOut" };
      var t = e.claims,
        n = e.appScopedIdentity;
      if (n != null)
        return n === "" || n === "0"
          ? { kind: "loggedOut" }
          : { kind: "user", identifier: n, claims: t };
      var r = e.fbIdentity;
      if (r == null || String(r.accountId) === "0")
        return { kind: "loggedOut" };
      var o = String(r.accountId),
        a = String(r.actorId);
      return !m.test(o) || !m.test(a)
        ? null
        : { kind: "user", identifier: o + ":" + a, claims: t };
    }
    function _(e) {
      for (var t = 0, n = 0; n < e.length; n++) {
        var r = e.charCodeAt(n);
        r < 128
          ? (t += 1)
          : r < 2048
            ? (t += 2)
            : r >= 55296 &&
                r <= 56319 &&
                n + 1 < e.length &&
                e.charCodeAt(n + 1) >= 56320 &&
                e.charCodeAt(n + 1) <= 57343
              ? ((t += 4), n++)
              : (t += 3);
      }
      return t;
    }
    function f(e, t) {
      var n = p(t.identity);
      if (n == null) return null;
      var r = g(t.policy.r),
        o = JSON.stringify({
          event: t.name,
          timeInMs: t.time,
          rate: r,
          payload: t.extra,
        });
      return {
        entry: e,
        prefix:
          '{"sessionId":' +
          JSON.stringify(t.sessionId) +
          "," +
          ('"user":' + JSON.stringify(n) + ',"events":['),
        part: o,
        bytes: _(o),
      };
    }
    function g(e) {
      return (Number.isInteger(e) || s(0, 185197, e), e);
    }
    function h(t) {
      var n = new Map();
      for (var r of t) {
        var o,
          a = (o = n.get(r.prefix)) != null ? o : [];
        (a.push(r), n.set(r.prefix, a));
      }
      var i = [],
        l = function () {
          var t = s[0],
            n = s[1],
            r = _(t) + d.length,
            o = [],
            a = r,
            l = function () {
              (i.push({
                entries: o.map(function (e) {
                  return e.entry;
                }),
                body:
                  t +
                  o
                    .map(function (e) {
                      return e.part;
                    })
                    .join(",") +
                  d,
                bytes: a,
              }),
                (o = []),
                (a = r));
            };
          for (var c of n)
            ((o.length >= e || (o.length > 0 && a + 1 + c.bytes > u)) && l(),
              (a += c.bytes + (o.length > 0 ? 1 : 0)),
              o.push(c));
          o.length > 0 && l();
        };
      for (var s of n) l();
      return i;
    }
    function y(e, t) {
      var n = [];
      for (var r of e) {
        var o = f(r, t(r));
        o != null && n.push(o);
      }
      return h(n);
    }
    function C(e, n) {
      var r;
      if (
        typeof ((r = t.navigator) == null ? void 0 : r.sendBeacon) != "function"
      )
        return "unsupported";
      try {
        return t.navigator.sendBeacon(e, n) ? "sent" : "refused";
      } catch (e) {
        return "refused";
      }
    }
    function b() {
      return r("XFalcoBeaconControllerRouteBuilder").buildUri({}).toString();
    }
    function v(t) {
      var n = [],
        o = 0,
        a = void 0,
        i = !1,
        l = !1,
        s = [],
        d = 0,
        m = new Set();
      function p(e) {
        if (e.bytes > c) {
          g(e, !1);
          return;
        }
        (s.push(e), _());
      }
      function _() {
        for (; s.length > 0; ) {
          var e = s[0];
          if (document.visibilityState === "hidden") {
            var n = C(b(), e.body);
            if (n === "sent") {
              (s.shift(), t.onSettled(e.entries, { kind: "assumed" }));
              continue;
            }
            if (n === "refused") return;
          }
          if (d + e.bytes > c) return;
          (s.shift(), g(e, !0));
        }
      }
      function g(e, n) {
        var o = !1,
          a = function (r) {
            o || ((o = !0), m.delete(i), t.onSettled(e.entries, r));
          },
          i = function () {
            return a({ kind: "assumed" });
          },
          l = function (r) {
            (a(r), n && ((d -= e.bytes), _()));
          };
        (n && ((d += e.bytes), m.add(i)),
          r("promiseDone")(
            window.fetch(b(), {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: e.body,
              credentials: "same-origin",
              keepalive: n,
            }),
            function (e) {
              return l(
                e.ok
                  ? { kind: "accepted" }
                  : { kind: "rejected", status: e.status },
              );
            },
            function () {
              return l(n ? { kind: "assumed" } : { kind: "unsent" });
            },
          ));
      }
      function y() {
        (window.clearTimeout(a), (a = void 0), (i = !1));
        var e = n;
        ((n = []), (o = 0));
        for (var t of h(e)) p(t);
        _();
      }
      function v() {
        y();
        var e = s;
        s = [];
        for (var n of e)
          t.onSettled(
            n.entries,
            C(b(), n.body) === "sent"
              ? { kind: "assumed" }
              : { kind: "unsent" },
          );
        for (var r of Array.from(m)) r();
      }
      function S(e) {
        var n = f(e, t.getEvent(e));
        return (n == null && t.onSettled([e], { kind: "invalid" }), n);
      }
      function R() {
        l ||
          ((l = !0),
          window.addEventListener("pagehide", y),
          document.addEventListener("visibilitychange", y));
      }
      function L(r, l) {
        R();
        var s = S(r);
        if (s != null) {
          if (
            ((n.length >= e || (n.length > 0 && o + s.bytes > u)) && y(),
            n.push(s),
            (o += s.bytes),
            document.visibilityState === "hidden")
          ) {
            y();
            return;
          }
          (a == null || (l && !i)) &&
            (window.clearTimeout(a),
            (a = window.setTimeout(
              y,
              l ? t.immediateDelayMs : t.normalDelayMs,
            )),
            (i = l));
        }
      }
      return {
        log: function (t) {
          return L(t, !1);
        },
        logImmediately: function (t) {
          return L(t, !0);
        },
        logCritical: function (t) {
          R();
          var e = S(t);
          if (e != null) for (var n of h([e])) p(n);
        },
        onUnload: v,
      };
    }
    ((l.utf8ByteLength = _),
      (l.createRequests = y),
      (l.createFalcoBeaconTransport = v));
  },
  98,
);
