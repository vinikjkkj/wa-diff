__d(
  "ZenonSimulcastSdpUtils",
  ["FBLogger", "Random", "UserAgent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "\r\n";
    function s(e) {
      var t = e
        .filter(function (e) {
          return e.startsWith("a=ssrc:");
        })
        .map(function (e) {
          return e.split(" ")[0].split(":")[1];
        });
      return new Set(t);
    }
    function u(e, t) {
      var n = new RegExp("^a=ssrc:\\d+ " + t + ":"),
        r = e.filter(function (e) {
          return n.test(e);
        })[0];
      return r && r.split(" ")[1].split(":")[1];
    }
    function c(e) {
      var t = e
        .filter(function (e) {
          return e.startsWith("a=ssrc-group:FID");
        })
        .map(function (e) {
          return e.split(" ")[2];
        });
      return new Set(t);
    }
    function d(e) {
      var t = new RegExp("^a=ssrc:\\d+ msid:"),
        n = e.filter(function (e) {
          return t.test(e);
        })[0],
        r = n.split(" ");
      return r.length > 2 ? r[2] : null;
    }
    function m(e, t) {
      for (var n = [], r = 0; r < e; r++) {
        for (var a = 0; a === 0 || t.has(a.toString()); )
          a = o("Random").uint32();
        (t.add(a.toString()), n.push(a.toString()));
      }
      return n;
    }
    function p(t, n) {
      if (!r("UserAgent").isBrowser("Chrome >= 88"))
        return (
          r("FBLogger")("rtc_www").mustfix(
            "Attempted to add unified-plan simulcast in unsupported browser",
          ),
          t
        );
      if (n <= 1 || n > 3)
        return (
          r("FBLogger")("rtc_www").mustfix(
            "Unsupported number of layers passed: %s",
            n,
          ),
          t
        );
      var o = t.trim().split(e),
        a = s(o),
        i = o.findIndex(function (e) {
          return /^m=video/.test(e);
        });
      if (i === -1) return t;
      for (var l = i + 1; l < o.length && !o[l].startsWith("m="); ) l++;
      var p = o.splice(i, l - i),
        _ = s(p),
        f = c(p),
        g = new Set(
          Array.from(_).filter(function (e) {
            return !f.has(e);
          }),
        );
      if (g.size !== 1 || f.size > 1)
        return [].concat(o.slice(0, i), p, o.slice(i)).join(e);
      var h = f.size === 1,
        y = Array.from(g)[0],
        C = "";
      h && (C = Array.from(f)[0]);
      var b = u(p, "cname"),
        v = u(p, "msid"),
        S = d(p);
      S != null && (v += " " + S);
      var R = u(p, "mslabel"),
        L = u(p, "label"),
        E = [y].concat(m(n - 1, a)),
        k = [];
      h &&
        (E.forEach(function (e) {
          return a.add(e);
        }),
        (k = [C].concat(m(n - 1, a))));
      var I = [];
      I.push("a=ssrc-group:SIM " + E.join(" "));
      for (var T = 0; T < k.length; T++)
        I.push("a=ssrc-group:FID " + E[T] + " " + k[T]);
      var D = [];
      if (h) for (var x = 0; x < E.length; x++) (D.push(E[x]), D.push(k[x]));
      else D = E;
      return (
        D.forEach(function (e) {
          (I.push("a=ssrc:" + e + " cname:" + b),
            I.push("a=ssrc:" + e + " msid:" + v),
            R && I.push("a=ssrc:" + e + " mslabel:" + R),
            L && I.push("a=ssrc:" + e + " label:" + L));
        }),
        (p = p.filter(function (e) {
          return !e.startsWith("a=ssrc");
        })),
        (p = [].concat(p, I)),
        [].concat(o.slice(0, i), p, o.slice(i)).join(e) + e
      );
    }
    l.addSimulcastToChromeOffer = p;
  },
  98,
);
