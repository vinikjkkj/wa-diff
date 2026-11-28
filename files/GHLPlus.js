__d(
  "GHLPlus",
  [
    "Banzai",
    "ExecutionEnvironment",
    "FBLogger",
    "GHLPlusConfig.experimental",
    "Promise",
    "cr:1601648",
    "getErrorSafe",
    "gkx",
    "memoize",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new Map(),
      c = 0,
      d = function () {
        h();
      },
      m = function (t) {
        var e = t.e,
          o = t.hd,
          a = t.token;
        try {
          var i = Date.now(),
            l = p(e),
            u = g(r("GHLPlusConfig.experimental").gcs);
          return h()
            .then(function () {
              var e = y(),
                t = C(i, Date.now());
              r("Banzai").post("ghl:plus", {
                ad: t,
                hde: l,
                ec: c,
                hd: o,
                idr: e,
                sr: u,
                token: a,
              });
            })
            .catch(function (e) {
              r("FBLogger")("GHL")
                .catching(r("getErrorSafe")(e))
                .warn("Failed to run GHL Plus monitoring");
            });
        } catch (e) {
          return (
            r("FBLogger")("GHL")
              .catching(r("getErrorSafe")(e))
              .warn("Failed to run GHL Plus monitoring"),
            (s || (s = n("Promise"))).resolve()
          );
        }
      },
      p = function (t) {
        var e = t.parentElement;
        return !_(t) &&
          !(r("gkx")("21000") && f(t)) &&
          e !== null &&
          e instanceof HTMLElement &&
          n("cr:1601648")(e)
          ? 1 + p(e)
          : 0;
      },
      _ = function (t) {
        return window.getComputedStyle(t).display === "none";
      },
      f = function (t) {
        var e = window.getComputedStyle(t);
        return e["content-visibility"] === "hidden";
      },
      g = function (t) {
        var e = {};
        return (
          t.forEach(function (t) {
            try {
              e[t] = document.querySelector(t) !== null;
            } catch (e) {
              r("FBLogger")("GHL").warn("Invalid selector %s", t);
            }
          }),
          e
        );
      },
      h = r("memoize")(function () {
        var t = r("GHLPlusConfig.experimental").idt;
        if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
          var o,
            a = document.createElement("div");
          ((a.style.visibility = "hidden"),
            (a.style.pointerEvents = "none"),
            (a.style.position = "absolute"),
            (a.style.clip = "rect(0, 0, 0, 0)"),
            (a.style.clipPath = "polygon(0 0, 0 0, 0 0, 0 0)"),
            (a.style.top = "0px"),
            t !== void 0 &&
              t.forEach(function (e) {
                var t = document.createElement("div");
                ((t.innerHTML = e), a.appendChild(t), u.set(e, t));
              }),
            (o = document.body) == null || o.appendChild(a));
        }
        return new (s || (s = n("Promise")))(function (e) {
          return setTimeout(e, 3e3);
        });
      }),
      y = function () {
        var e = {};
        return (
          u.forEach(function (t, n) {
            e[n] = t.offsetHeight === 0;
          }),
          e
        );
      },
      C = function (t, n) {
        return Math.max(0, 100 * Math.round((n - t) / 100));
      },
      b = m,
      v = d;
    ((l.b = b), (l.i = v));
  },
  98,
);
