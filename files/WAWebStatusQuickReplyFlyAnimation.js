__d(
  "WAWebStatusQuickReplyFlyAnimation",
  ["WAWebL10N"],
  function (t, n, r, o, a, i, l) {
    var e = 805,
      s = 1.9,
      u = 0.6,
      c = -20,
      d = 30,
      m = 100,
      p = 30,
      _ = 1.1,
      f = 320,
      g = "cubic-bezier(0.05, 0.55, 0.85, 0.95)",
      h = "cubic-bezier(0.6, 0.07, 0.85, 0.35)",
      y = "cubic-bezier(0.34, 1.4, 0.64, 1)",
      C = 160,
      b = new Set();
    function v() {
      Array.from(b).forEach(function (e) {
        return e.cancel();
      });
    }
    function S(t) {
      var n, o;
      if (
        !(
          t == null ||
          window.matchMedia("(prefers-reduced-motion: reduce)").matches
        )
      ) {
        var a = t.getBoundingClientRect(),
          i =
            (n = t.closest("[data-status-player]")) == null
              ? void 0
              : n.querySelector("[data-status-poster-avatar]"),
          l = i == null ? void 0 : i.getBoundingClientRect(),
          v = l ? l.left + l.width / 2 - a.left - a.width / 2 : 0,
          S = l ? l.top + l.height / 2 - a.top - a.height / 2 : -C,
          R = r("WAWebL10N").isRTL() ? -1 : 1,
          L = document.createElement("div"),
          E = document.createElement("div");
        (L.setAttribute("aria-hidden", "true"),
          E.appendChild(t.cloneNode(!0)),
          L.appendChild(E),
          (L.style.cssText =
            "position:fixed;left:" +
            a.left +
            "px;top:" +
            a.top +
            "px;width:" +
            a.width +
            "px;height:" +
            a.height +
            "px;display:flex;pointer-events:none;z-index:1000;offset-anchor:0 0;offset-rotate:0deg"),
          (L.style.offsetPath =
            "path('M 0 0 C " +
            m * R +
            " " +
            S / 2 +
            ", " +
            (v - p * R) +
            " " +
            S * 0.6 +
            ", " +
            v +
            " " +
            S +
            "')"));
        var k = [
          L.animate(
            [
              { offsetDistance: "0%", easing: g },
              { offsetDistance: "33.333%", offset: 1 / 3, easing: h },
              { offsetDistance: "100%" },
            ],
            e,
          ),
          E.animate(
            [
              { scale: "1", rotate: "0deg", opacity: "1" },
              { scale: "1", offset: 25 / e, easing: y },
              { scale: "" + s, offset: 110 / e },
              { rotate: c * R + "deg", offset: 1 / 3 },
              { opacity: "1", offset: 280 / e },
              { scale: "" + u, rotate: d * R + "deg", opacity: "0" },
            ],
            e,
          ),
        ];
        ((o = document.body) == null || o.appendChild(L),
          k.forEach(function (e) {
            return b.add(e);
          }));
        var I = function () {
          (k.forEach(function (e) {
            return b.delete(e);
          }),
            L.remove());
        };
        ((k[0].oncancel = I),
          (k[0].onfinish = function () {
            I();
            var e =
              i == null
                ? void 0
                : i.animate(
                    [
                      { transform: "scale(" + _ + ")" },
                      { transform: "scale(1)" },
                    ],
                    { duration: f, easing: y },
                  );
            e != null &&
              (b.add(e),
              (e.onfinish = e.oncancel =
                function () {
                  return b.delete(e);
                }));
          }));
      }
    }
    ((l.cancelStatusQuickReplyFlyAnimations = v),
      (l.playStatusQuickReplyFlyAnimation = S));
  },
  98,
);
