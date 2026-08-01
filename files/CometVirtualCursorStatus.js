__d(
  "CometVirtualCursorStatus",
  ["ExecutionEnvironment", "UserAgent", "cr:1345969", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null,
      u = null;
    function c() {
      ((u = function () {
        ((s = null), d());
      }),
        window.addEventListener("blur", u));
    }
    function d() {
      u != null && (window.removeEventListener("blur", u), (u = null));
    }
    function m(e) {
      ((s = e.keyCode), c());
    }
    function p(e) {
      ((s = null), d());
    }
    if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
      var _ = document.documentElement;
      if (_) {
        if ("addEventListener" in _)
          (_.addEventListener("keydown", m, !0),
            _.addEventListener("keyup", p, !0));
        else if (_.attachEvent) {
          var f = _.attachEvent;
          (f("onkeydown", m), f("onkeyup", p));
        }
      }
    }
    var g = {
        getKeyDownCode: function () {
          return s;
        },
        isKeyDown: function () {
          return !!s;
        },
      },
      h = !1,
      y = !1,
      C = null,
      b = !1;
    function v(e) {
      var t = new Set(),
        n = g.isKeyDown(),
        o = e.WEBKIT_FORCE_AT_MOUSE_DOWN,
        a = e.clientX,
        i = e.clientY,
        l = e.isTrusted,
        s = e.mozInputSource,
        u = e.offsetX,
        c = e.offsetY,
        d = e.webkitForce;
      if (
        (a === 0 &&
          i === 0 &&
          u >= 0 &&
          c >= 0 &&
          y &&
          l &&
          s == null &&
          t.add("Chrome"),
        h &&
          y &&
          !n &&
          d != null &&
          d < o &&
          u === 0 &&
          c === 0 &&
          s == null &&
          t.add("Safari-edge"),
        a === 0 &&
          i === 0 &&
          u < 0 &&
          c < 0 &&
          y &&
          s == null &&
          t.add("Safari-old"),
        !h &&
          !y &&
          !n &&
          l &&
          r("UserAgent").isBrowser("IE >= 10") &&
          s == null)
      ) {
        var m = e.target,
          p = m.clientHeight,
          _ = m.clientWidth;
        a < 0 && i < 0
          ? t.add("IE")
          : (u < 0 || u > _) && (c < 0 || c > p) && t.add("MSIE");
      }
      return (s === 0 && l && t.add("Firefox"), t);
    }
    function S() {
      ((h = !0),
        r("setTimeout")(function () {
          h = !1;
        }, 0));
    }
    function R() {
      ((y = !0),
        r("setTimeout")(function () {
          y = !1;
        }, 0));
    }
    function L(e) {
      b &&
        n("cr:1345969").log({
          extra_data: { source_app: "comet" },
          indicated_browsers: C,
          is_virtual_cursor_action: e,
        });
    }
    function E(e) {
      (C === null && (C = Array.from(v(e))), (b = C != null && C.length > 0));
      var t =
        e.target != null &&
        e.target.getAttribute != null &&
        e.target.getAttribute("data-accessibilityid") ===
          "virtual_cursor_trigger";
      (L(t),
        r("setTimeout")(function () {
          ((b = !1), (C = null));
        }, 0));
    }
    function k() {
      (document.addEventListener("click", E, !0),
        document.addEventListener("mousedown", S, !0),
        document.addEventListener("mouseup", R, !0));
    }
    l.initLogging = k;
  },
  98,
);
