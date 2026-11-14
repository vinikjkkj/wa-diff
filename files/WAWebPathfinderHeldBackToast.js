__d(
  "WAWebPathfinderHeldBackToast",
  [
    "WAWebPathfinderHeldBackSurface",
    "WDSPresentationObservers",
    "WDSToastContainerID",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "toast-body",
      s = 250,
      u = 800,
      c = 3e4 + s,
      d = 6e4;
    function m(e, t) {
      _();
      var n = new Set(g()),
        a = document.getElementById(r("WDSToastContainerID")) != null;
      (o("WAWebPathfinderHeldBackSurface").openHeldBack(e, t),
        f(n, a ? c : null));
    }
    var p = !1;
    function _() {
      p ||
        ((p = !0),
        o("WDSPresentationObservers").registerWDSPresentationObserver({
          captureContext: function () {
            return o("WAWebPathfinderHeldBackSurface").captureHeldBackSurface();
          },
          combineContexts: function (t, n) {
            return t != null ? t : n;
          },
          onEvent: function (t) {
            t.kind === "toast_presented" &&
              t.context != null &&
              f(new Set(), 0);
          },
        }));
    }
    function f(t, n) {
      var r = o("WAWebPathfinderHeldBackSurface").holdBackTapsOn(e),
        a = Date.now(),
        i = new Set(),
        l = null,
        c = window.setInterval(function () {
          var e = !0,
            t = !1;
          try {
            e = _(Date.now());
          } catch (e) {
            t = !0;
          } finally {
            t ? f() || window.clearInterval(c) : e && h();
          }
        }, s),
        m = window.setTimeout(h, d + s);
      function p() {
        var e = g();
        return (
          e
            .filter(function (e) {
              return !t.has(e);
            })
            .forEach(function (e) {
              return i.add(e);
            }),
          e
        );
      }
      function _(e) {
        var t = p();
        return e - a >= d
          ? !0
          : t.length > 0
            ? ((l = null), !1)
            : n == null || i.size === 0 || e - a < n
              ? !1
              : (l != null || (l = e), e - l >= u);
      }
      function f() {
        t.forEach(function (e) {
          return i.add(e);
        });
        try {
          return (
            g().forEach(function (e) {
              return i.add(e);
            }),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function h() {
        (window.clearInterval(c), window.clearTimeout(m));
        try {
          try {
            p();
          } catch (e) {}
          i.forEach(function (e) {
            e.isConnected &&
              o("WAWebPathfinderHeldBackSurface").holdBackTapsInside(e);
          });
        } finally {
          r();
        }
      }
    }
    function g() {
      return Array.from(
        document.querySelectorAll('[data-testid="' + e + '"]'),
      ).filter(function (e) {
        return e instanceof HTMLElement;
      });
    }
    l.openHeldBackToast = m;
  },
  98,
);
