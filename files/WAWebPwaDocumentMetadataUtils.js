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
    function _(t, n, r, o) {
      (n === void 0 && (n = m),
        r === void 0 && (r = !0),
        o === void 0 && (o = p));
      var a = !1,
        i = !1,
        l = self.setInterval(function () {
          a = !a;
          var n = a ? t : e;
          d(n, r);
        }, n),
        s = function () {
          i || ((i = !0), self.clearInterval(l), self.clearTimeout(u), d(e, r));
        },
        u = self.setTimeout(s, o);
      return s;
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
