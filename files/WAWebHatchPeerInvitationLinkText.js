__d(
  "WAWebHatchPeerInvitationLinkText",
  ["WALinkify", "WAWebHatchPeerInviteUrl", "WAWebHatchPeerPairingUrl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /[!-~]+/g,
      s =
        /^(?:[\t\n\r\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F])$/,
      u = /^[0-9A-Fa-f]{2}$/,
      c = /^[A-Za-z0-9\-._~/\\]$/,
      d = /^[/\\]$/,
      m = /^[A-Za-z0-9\-._~%/\\]$/,
      p = /^[A-Za-z]$/,
      _ = /^[A-Za-z0-9\-._~%+/=]$/,
      f = /[A-Za-z0-9]/,
      g = "peer",
      h = "accept",
      y = -2;
    function C(e) {
      var t = M(e, v(e));
      return o("WALinkify")
        .findLinks(t)
        .filter(function (e) {
          return b(e.href);
        })
        .reduceRight(function (e, t) {
          return e.slice(0, t.index) + e.slice(t.index + t.url.length);
        }, t)
        .trim();
    }
    function b(e) {
      return (
        o("WAWebHatchPeerPairingUrl").isHatchPeerPairingInvitationUrl(e) ||
        o("WAWebHatchPeerInviteUrl").isHatchPeerInviteUrl(
          e.replace(/^http:/i, "https:"),
        )
      );
    }
    function v(t) {
      var n = Array.from(t.matchAll(e), function (e) {
          var t, n;
          return {
            end: ((t = e.index) != null ? t : 0) + e[0].length,
            start: (n = e.index) != null ? n : 0,
          };
        }),
        r = [];
      for (var o of S(t, n)) {
        var a = k(o);
        r.push.apply(r, a.concat(N(t, o, a)));
      }
      return r;
    }
    function S(e, t) {
      var n = [],
        r = null;
      for (var o of t)
        (r != null && R(e, r.end, o.start)
          ? n[n.length - 1].push(o)
          : n.push([o]),
          (r = o));
      return n.map(function (t) {
        return L(e, t);
      });
    }
    function R(e, t, n) {
      for (var r = t; r < n; r++) if (!s.test(e[r])) return !1;
      return !0;
    }
    function L(e, t) {
      var n = [],
        r = [],
        o = [],
        a = [];
      return (
        t.forEach(function (t, i) {
          a.push(n.length);
          for (var l = t.start; l < t.end; ) {
            var s = l + 2 < t.end ? E(e, l) : null;
            (n.push(s != null ? s : e[l]),
              r.push(l),
              o.push(i),
              (l += s != null ? 3 : 1));
          }
        }),
        { origins: r, runOf: o, runStarts: a, runs: t, text: n.join("") }
      );
    }
    function E(e, t) {
      var n = e.slice(t + 1, t + 3);
      if (e[t] !== "%" || !u.test(n)) return null;
      var r = String.fromCharCode(parseInt(n, 16));
      return c.test(r) ? r : null;
    }
    function k(e) {
      for (
        var t = e.text, n = [], r = { at: -1 }, o = 0, a = t.indexOf(g);
        a >= 0;
      ) {
        var i = I(t, a, r);
        if (i == null) {
          a = t.indexOf(g, a + 1);
          continue;
        }
        var l = x(e, a, o),
          s = $(e, i);
        (n.push([e.origins[l], P(e, s)]), (o = s), (a = t.indexOf(g, s)));
      }
      return n;
    }
    function I(e, t, n) {
      if (t === 0 || !d.test(e[t - 1])) return null;
      var r = T(e, t + g.length);
      if (r == null || !e.startsWith(h, r)) return null;
      for (var o = r + h.length; o < e.length && d.test(e[o]); ) o++;
      return e[o] === "#" ? o : e[o] !== "?" ? null : D(e, o, n);
    }
    function T(e, t) {
      var n;
      if (!d.test((n = e[t]) != null ? n : "")) return null;
      for (var r = t; r < e.length; ) {
        var o;
        if (d.test(e[r])) r++;
        else if (e[r] === "." && d.test((o = e[r + 1]) != null ? o : ""))
          r += 2;
        else break;
      }
      return r;
    }
    function D(e, t, n) {
      if (n.at === y) return null;
      if (n.at < t) {
        var r = e.indexOf("#", t);
        n.at = r >= 0 ? r : y;
      }
      return n.at >= 0 ? n.at : null;
    }
    function x(e, t, n) {
      for (
        var r = e.runOf,
          o = e.runStarts,
          a = e.text,
          i = Math.max(n, o[r[t]]),
          l = t - 1;
        l - 2 >= i;
        l--
      )
        if (a.startsWith("://", l - 2)) {
          for (var s = l - 2; s - 1 >= i && p.test(a[s - 1]); ) s--;
          return s;
        }
      for (var u = t; u - 1 >= i && m.test(a[u - 1]); ) u--;
      return u;
    }
    function $(e, t) {
      for (
        var n = e.runOf, r = e.text, o = t + 1;
        o < r.length && n[o] === n[t] && _.test(r[o]);
      )
        o++;
      return o;
    }
    function P(e, t) {
      var n = e.origins,
        r = e.runOf,
        o = e.runs;
      return t < n.length && r[t] === r[t - 1] ? n[t] : o[r[t - 1]].end;
    }
    function N(e, t, n) {
      var r = [],
        o = 0;
      for (var a of t.runs) {
        for (; o < n.length && n[o][1] <= a.start; ) o++;
        for (
          var i = "", l = a.start, s = !1, u = o;
          u < n.length && n[u][0] < a.end;
          u++
        )
          ((s = !0),
            (i += e.slice(l, Math.max(l, n[u][0]))),
            (l = Math.max(l, n[u][1])));
        ((i += e.slice(Math.min(l, a.end), a.end)),
          s && !f.test(i) && r.push([a.start, a.end]));
      }
      return r;
    }
    function M(e, t) {
      if (t.length === 0) return e;
      var n = [].concat(t).sort(function (e, t) {
          return e[0] - t[0];
        }),
        r = "",
        o = 0;
      for (var a of n) {
        var i = a[0],
          l = a[1];
        (i > o && (r += e.slice(o, i)), (o = Math.max(o, l)));
      }
      return r + e.slice(o);
    }
    l.withoutHatchPeerInvitationLinks = C;
  },
  98,
);
