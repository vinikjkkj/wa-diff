__d(
  "WAWebPwaDocumentMetadataUtils",
  ["WAWebNoop", "WAWebRuntimeEnvironmentUtils"],
  function (t, n, r, o, a, i, l) {
    var e = "",
      s = -1,
      u;
    o("WAWebRuntimeEnvironmentUtils").isWorker() || (e = document.title);
    function c(t) {
      (t === void 0 && (t = null), t != null && (e = t), d(e));
    }
    function d(e, t) {
      (t === void 0 && (t = !1),
        g() && !t
          ? (document.title = " ")
          : (self.clearTimeout(u),
            (document.title += " "),
            (u = self.setTimeout(function () {
              document.title = e;
            }, 0))));
    }
    var m = 2e3,
      p = 6e4;
    function _(t) {
      var n = !1,
        r = !1,
        o = self.setInterval(function () {
          n = !n;
          var r = n ? t : e;
          d(r, !0);
        }, m),
        a = function () {
          r ||
            ((r = !0), self.clearInterval(o), self.clearTimeout(i), d(e, !0));
        },
        i = self.setTimeout(a, p);
      return a;
    }
    function f(e) {
      (e != null && (s = e),
        g != null &&
          g() &&
          "setAppBadge" in navigator &&
          (s === -1 || s === 0
            ? navigator.clearAppBadge == null ||
              navigator.clearAppBadge().catch(r("WAWebNoop"))
            : navigator.setAppBadge == null ||
              navigator.setAppBadge(s).catch(r("WAWebNoop"))));
    }
    function g() {
      return "matchMedia" in self
        ? window.matchMedia("(display-mode: standalone)").matches
        : !1;
    }
    ((l.setDocumentTitle = c),
      (l.startDocumentTitleFlash = _),
      (l.setAppBadge = f),
      (l.isCurrentWebSessionInsidePwa = g));
  },
  98,
);
