__d(
  "scrollIntoView",
  ["FBLogger", "debounce", "emptyFunction", "scrollTo"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      center: "center",
      top: "start",
      bottom: "end",
      closest: "nearest",
    };
    function s(t, n) {
      var o;
      n === void 0 && (n = Object.freeze({}));
      var a = n,
        i = a.behavior,
        l = i === void 0 ? "auto" : i,
        s = a.onScrollComplete,
        c = s === void 0 ? r("emptyFunction") : s,
        d = a.onScrollStart,
        m = d === void 0 ? r("emptyFunction") : d,
        p = a.force,
        _ = p === void 0 ? !1 : p,
        f = a.localScroll,
        g = f === void 0 ? !1 : f,
        h = t.getBoundingClientRect(),
        y = g && t instanceof HTMLElement ? u(t) : document.documentElement;
      if (y == null)
        return (
          r("FBLogger")("comet_ui").mustfix(
            "There is no scrolling element accessible on document, something is seriously wrong and I couldn't imagine the situation you have found yourself in",
          ),
          { dispose: r("emptyFunction") }
        );
      var C = y.clientHeight,
        b = h.top <= C && h.bottom >= 0;
      if ((m(), !_ && b))
        return (c != null && c(), { dispose: r("emptyFunction") });
      var v = (o = n.verticalAlign) != null ? o : "closest";
      try {
        var S = "scrollBehavior" in y.style;
        if (S) {
          t.scrollIntoView({ behavior: l, block: v != null ? e[v] : void 0 });
          var R,
            L = !1;
          return (
            c != null &&
              ((R = r("debounce")(function () {
                ((L = !0),
                  window.removeEventListener("scroll", R, { capture: !0 }),
                  c());
              }, 200)),
              window.addEventListener("scroll", R, {
                passive: !0,
                capture: !0,
              }),
              window.dispatchEvent(new Event("scroll"))),
            {
              dispose: function () {
                L ||
                  (R && R.reset(),
                  window.removeEventListener("scroll", R, { capture: !0 }),
                  window.scrollTo(window.pageYOffset, window.pageXOffset));
              },
            }
          );
        }
      } catch (e) {}
      v === "closest" && (h.top >= C ? (v = "bottom") : (v = "top"));
      var E;
      switch (v) {
        case "top":
          E = window.pageYOffset + h.top;
          break;
        case "bottom":
          E = window.pageYOffset + h.bottom - C;
          break;
        case "center":
          E = window.pageYOffset + h.bottom - C + (C - h.height) / 2;
          break;
      }
      return r("scrollTo")({ behavior: l, top: E, onScrollComplete: c });
    }
    function u(e) {
      return e == null || !(e.parentElement instanceof HTMLElement)
        ? document.documentElement
        : e.scrollHeight > e.clientHeight
          ? e
          : u(e.parentElement);
    }
    l.default = s;
  },
  98,
);
