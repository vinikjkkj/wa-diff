__d(
  "FalcoBeaconTransport",
  ["invariant", "XFalcoBeaconControllerRouteBuilder", "promiseDone"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 50,
      u = 30 * 1024,
      c = 48 * 1024,
      d = "]}",
      m = /^\d+$/,
      p = /^[1-9]\d{0,17}$/,
      _ = 128,
      f = 4,
      g = 1024;
    function h(e) {
      if (e == null) return { kind: "loggedOut" };
      var t = e.claims,
        n =
          t.length > 0 &&
          t.length <= f &&
          t.every(function (e) {
            return e !== "" && y(e) <= g;
          }),
        r = e.appScopedIdentity;
      if (r != null)
        return r === "" || r === "0"
          ? { kind: "loggedOut" }
          : n
            ? {
                kind: "user",
                identifierType: "appScoped",
                identifier: r,
                claims: t,
              }
            : null;
      var o = e.fbIdentity;
      if (o == null || String(o.accountId) === "0")
        return { kind: "loggedOut" };
      var a = String(o.accountId),
        i = String(o.actorId);
      return !n || !m.test(a) || !m.test(i)
        ? null
        : {
            kind: "user",
            identifierType: "facebook",
            identifier: a + ":" + i,
            claims: t,
          };
    }
    function y(e) {
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
    function C(e, t) {
      var n = h(t.identity),
        r = t.appId,
        o = t.deviceId;
      if (
        n == null ||
        typeof r != "string" ||
        !p.test(r) ||
        typeof o != "string" ||
        y(o) > _
      )
        return null;
      var a = b(t.policy.r),
        i = JSON.stringify({
          event: t.name,
          timeInMs: t.time,
          rate: a,
          payload: t.extra,
        });
      return {
        entry: e,
        prefix:
          '{"sessionId":' +
          JSON.stringify(t.sessionId) +
          "," +
          ('"appId":' + JSON.stringify(r) + ",") +
          ('"machineId":' + JSON.stringify(o) + ",") +
          ('"user":' + JSON.stringify(n) + ',"events":['),
        part: i,
        bytes: y(i),
      };
    }
    function b(e) {
      return (Number.isInteger(e) || s(0, 185197, e), e);
    }
    function v(t) {
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
            r = y(t) + d.length,
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
    function S(e, t) {
      var n = [];
      for (var r of e) {
        var o = C(r, t(r));
        o != null && n.push(o);
      }
      return v(n);
    }
    function R(e, n) {
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
    function L() {
      return r("XFalcoBeaconControllerRouteBuilder").buildUri({}).toString();
    }
    function E(t) {
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
          f(e, !1);
          return;
        }
        (s.push(e), _());
      }
      function _() {
        for (; s.length > 0; ) {
          var e = s[0];
          if (document.visibilityState === "hidden") {
            var n = R(L(), e.body);
            if (n === "sent") {
              (s.shift(), t.onSettled(e.entries, { kind: "assumed" }));
              continue;
            }
            if (n === "refused") return;
          }
          if (d + e.bytes > c) return;
          (s.shift(), f(e, !0));
        }
      }
      function f(e, n) {
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
            window.fetch(L(), {
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
      function g() {
        (window.clearTimeout(a), (a = void 0), (i = !1));
        var e = n;
        ((n = []), (o = 0));
        for (var t of v(e)) p(t);
        _();
      }
      function h() {
        g();
        var e = s;
        s = [];
        for (var n of e)
          t.onSettled(
            n.entries,
            R(L(), n.body) === "sent"
              ? { kind: "assumed" }
              : { kind: "unsent" },
          );
        for (var r of Array.from(m)) r();
      }
      function y(e) {
        var n = C(e, t.getEvent(e));
        return (n == null && t.onSettled([e], { kind: "invalid" }), n);
      }
      function b() {
        l ||
          ((l = !0),
          window.addEventListener("pagehide", g),
          document.addEventListener("visibilitychange", g));
      }
      function S(r, l) {
        b();
        var s = y(r);
        if (s != null) {
          if (
            ((n.length >= e || (n.length > 0 && o + s.bytes > u)) && g(),
            n.push(s),
            (o += s.bytes),
            document.visibilityState === "hidden")
          ) {
            g();
            return;
          }
          (a == null || (l && !i)) &&
            (window.clearTimeout(a),
            (a = window.setTimeout(
              g,
              l ? t.immediateDelayMs : t.normalDelayMs,
            )),
            (i = l));
        }
      }
      return {
        log: function (t) {
          return S(t, !1);
        },
        logImmediately: function (t) {
          return S(t, !0);
        },
        logCritical: function (t) {
          b();
          var e = y(t);
          if (e != null) for (var n of v([e])) p(n);
        },
        onUnload: h,
      };
    }
    ((l.utf8ByteLength = y),
      (l.createRequests = S),
      (l.createFalcoBeaconTransport = E));
  },
  98,
);
