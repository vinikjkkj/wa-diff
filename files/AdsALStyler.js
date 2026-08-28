__d(
  "AdsALStyler",
  ["AdsALEAUtils", "FBLogger", "isStringNullOrEmpty"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "al-styled-element",
      s = "al-overlay",
      u = "al-surface-label",
      c = "al-hover-info-text",
      d = "al-hover-info-text-visible",
      m = "al-copied",
      p = "al-styler-tree-overlay",
      _ = "al-full-overlay",
      f = "al-dynamic-",
      g = "al-clipboard-textarea",
      h = "data-al-styler-id",
      y = "ads-al-styler-stylesheet",
      C = null;
    function b() {
      if (C != null) return C;
      var t = document.createElement("style");
      ((t.id = y),
        document.head != null
          ? document.head.appendChild(t)
          : document.documentElement != null
            ? document.documentElement.appendChild(t)
            : r("FBLogger")("ads_auto_logging").mustfix(
                "Cannot append style element: document.head is null",
              ));
      var n = t.sheet;
      if (n == null) {
        r("FBLogger")("ads_auto_logging").mustfix(
          "Failed to get stylesheet from style element",
        );
        return;
      }
      return (
        (C = n),
        v("." + e, "box-sizing: border-box;"),
        v(
          "." + s,
          "position: absolute; top: 0; left: 0; right: 0; bottom: 0; pointer-events: none; z-index: 1;",
        ),
        v(
          "." + u,
          "position: absolute; top: 0; left: 0; background-color: rgba(0, 0, 0, 0.7); color: white; padding: 2px 5px; font-size: 10px; pointer-events: auto; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 200px; cursor: pointer;",
        ),
        v(
          "." + c,
          "position: absolute; top: 0; left: 0; background-color: rgba(0, 0, 0, 0.7); color: white; padding: 2px 5px; font-size: 12px; pointer-events: auto; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 200px; cursor: pointer; z-index: 10000; display: none;",
        ),
        v("." + d, "display: block;"),
        v(
          "." + m,
          "background-color: #4CAF50 !important; color: white !important;",
        ),
        v("." + g, "position: absolute; left: -9999px; top: 0; opacity: 0;"),
        C
      );
    }
    function v(e, t) {
      var n,
        r = b(),
        o = (n = r == null ? void 0 : r.cssRules.length) != null ? n : 0;
      r == null || r.insertRule(e + " { " + t + " }", o);
    }
    function S(e) {
      var t = Date.now(),
        n = k++,
        r = f + t + "-" + n;
      return (v("." + r, e), r);
    }
    var R = new Map(),
      L = new Map(),
      E = new Map(),
      k = 1;
    function I(e) {
      var t = e.getAttribute(h);
      return (t == null && ((t = "al-styler-" + k++), e.setAttribute(h, t)), t);
    }
    function T(e) {
      if (!R.has(e)) {
        var t = S("background-color: " + e + " !important;");
        R.set(e, t);
      }
      return R.get(e) || "";
    }
    function D(e) {
      var t = "input-" + e;
      if (!R.has(t)) {
        var n = S(
          "background-color: " +
            e +
            " !important; " +
            ("box-shadow: 0 0 0 3px " + e + " !important; ") +
            ("border: 2px solid " + e + " !important; ") +
            "opacity: 0.8 !important;",
        );
        R.set(t, n);
      }
      return R.get(t) || "";
    }
    function x(e) {
      if (!L.has(e)) {
        var t = S(
          "outline: 2px solid " + e + " !important; outline-offset: 0;",
        );
        L.set(e, t);
      }
      return L.get(e) || "";
    }
    function $(e) {
      if (!E.has(e)) {
        var t = S("z-index: " + e + " !important;");
        E.set(e, t);
      }
      return E.get(e) || "";
    }
    function P(e) {
      var t = [];
      function n(e) {
        var r = Array.from(e.childNodes).some(function (e) {
          return (
            e.nodeType === Node.TEXT_NODE &&
            e.textContent != null &&
            e.textContent.trim().length > 0
          );
        });
        r
          ? t.push(e)
          : Array.from(e.children).forEach(function (e) {
              e instanceof HTMLElement && n(e);
            });
      }
      return (n(e), t.length === 0 && t.push(e), t);
    }
    function N(e) {
      var t = e.tagName.toLowerCase(),
        n = ["input", "button", "select", "textarea"],
        r = e.getAttribute("role"),
        o = r != null && ["button", "switch", "checkbox", "radio"].includes(r);
      return n.includes(t) || o;
    }
    function M(t, n, r, o) {
      (r === void 0 && (r = !1), o === void 0 && (o = !1), b());
      var a = function (a) {
        (I(a), a.classList.add(e));
        var n = N(a),
          i = P(a),
          l = i.length > 0 && (i.length > 1 || i[0] !== a);
        if (!o)
          if (n) {
            var u = D(t);
            a.classList.add(u);
          } else if (l) {
            var c = i[0] !== a ? i[0] : i[1] || i[0],
              d = document.createElement("div");
            d.classList.add(s);
            var m = T(t);
            d.classList.add(m);
            var p = c.querySelector("." + s);
            p && p.remove();
            var _ = window.getComputedStyle(c).position;
            (_ === "static" &&
              c.style.setProperty("position", "relative", "important"),
              c.appendChild(d));
          } else {
            var f = a.querySelectorAll(
              'input, button, select, textarea, [role="button"], [role="switch"], [role="checkbox"], [role="radio"]',
            );
            if (f.length > 0)
              f.forEach(function (e) {
                if (e instanceof HTMLElement) {
                  var n = D(t);
                  e.classList.add(n);
                }
              });
            else {
              var g = document.createElement("div");
              g.classList.add(s);
              var h = T(t);
              g.classList.add(h);
              var y = a.querySelector("." + s);
              y && y.remove();
              var C = window.getComputedStyle(a).position;
              (C === "static" &&
                a.style.setProperty("position", "relative", "important"),
                a.appendChild(g));
            }
          }
        if (r) {
          var b = x(t);
          a.classList.add(b);
        }
      };
      return (a(n), n);
    }
    function w(t) {
      var n = function (n) {
        var t = n.getAttribute(h);
        if (t != null) {
          n.classList.remove(e);
          var r = Array.from(n.classList);
          r.forEach(function (e) {
            e.startsWith(f) && n.classList.remove(e);
          });
          var o = n.querySelectorAll("." + s + ", ." + p + ", ." + _);
          (o.forEach(function (e) {
            e.remove();
          }),
            n.removeAttribute(h));
        }
      };
      n(t);
    }
    function A() {
      var t = document.querySelectorAll("[" + h + "]");
      t.forEach(function (t) {
        if (t instanceof HTMLElement) {
          var n = t.getAttribute(h);
          if (n == null) return;
          t.classList.remove(e);
          var r = Array.from(t.classList);
          (r.forEach(function (e) {
            e.startsWith(f) && t.classList.remove(e);
          }),
            t.removeAttribute(h));
        }
      });
      var n = document.querySelectorAll("." + u);
      n.forEach(function (e) {
        e.remove();
      });
      var r = document.querySelectorAll("." + c);
      r.forEach(function (e) {
        e.remove();
      });
      var o = document.querySelectorAll("." + s + ", ." + p + ", ." + _);
      (o.forEach(function (e) {
        e.remove();
      }),
        R.clear(),
        L.clear(),
        E.clear());
    }
    function F(t, n, o, a, i, l) {
      (o === void 0 && (o = !1),
        a === void 0 && (a = !1),
        i === void 0 && (i = null),
        l === void 0 && (l = null),
        b(),
        n.classList.add(e));
      var u = document.createElement("div");
      if ((u.classList.add(s), u.classList.add(_), !a)) {
        var m = T(t);
        u.classList.add(m);
      }
      if (o) {
        var p = x(t);
        n.classList.add(p);
      }
      if (!r("isStringNullOrEmpty")(l)) {
        (n.addEventListener("mouseover", function (e) {
          f.classList.add(d);
        }),
          n.addEventListener("mouseout", function (e) {
            f.classList.remove(d);
          }));
        var f = document.createElement("div");
        (f.classList.add(c), (f.textContent = l), n.appendChild(f));
      }
      var g = window.getComputedStyle(n).position;
      if (
        (g === "static" &&
          n instanceof HTMLElement &&
          n.style.setProperty("position", "relative", "important"),
        i != null)
      ) {
        var h = $(i);
        u.classList.add(h);
      }
      var y = n.querySelector("." + _);
      return (y && y.remove(), n.appendChild(u), I(n), u);
    }
    var O = null,
      B = "",
      W = null,
      q = !1,
      U = null;
    function V(e, t, n, r) {
      (n === void 0 && (n = null),
        r === void 0 && (r = !0),
        b(),
        (O = new Map(e)),
        (B = t),
        (W = n),
        H(e, t, n),
        r ? G() : z());
    }
    function H(t, n, r) {
      r === void 0 && (r = null);
      var o = x(n),
        a = r != null ? $(r) : null;
      t.forEach(function (t, n) {
        t.forEach(function (t) {
          if (document.documentElement.contains(t)) {
            (t.classList.add(e),
              t.classList.add(o),
              a != null && t.classList.add(a));
            var r = window.getComputedStyle(t).position;
            r === "static" &&
              t instanceof HTMLElement &&
              t.style.setProperty("position", "relative", "important");
            var i = document.createElement("div");
            (i.classList.add(u),
              (i.textContent = n),
              (i.title = n + " (click to copy)"),
              a != null && i.classList.add(a),
              i.addEventListener("click", function (e) {
                var t = document.createElement("textarea");
                ((t.value = n),
                  t.setAttribute("readonly", ""),
                  t.classList.add(g),
                  document.documentElement.appendChild(t),
                  t.select(),
                  document.execCommand("copy"),
                  document.documentElement.removeChild(t),
                  i.classList.add(m),
                  (i.textContent = "Copied!"),
                  window.setTimeout(function () {
                    (i.classList.remove(m), (i.textContent = n));
                  }, 1e3),
                  e.stopPropagation());
              }));
            var l = t.querySelector("." + u);
            (l && l.remove(), t.appendChild(i), I(t));
          }
        });
      });
    }
    function G() {
      (z(),
        (q = !0),
        (U = window.setTimeout(function () {
          if (!(!q || !O)) {
            if (O && B)
              try {
                var e = o("AdsALEAUtils").buildSurfaceMap();
                e && (H(e, B, W), (O = e));
              } catch (e) {}
            G();
          }
        }, 2e3)));
    }
    function z() {
      ((q = !1),
        U != null && (window.clearTimeout(U), (U = null)),
        (O = null),
        (B = ""),
        (W = null));
    }
    function j() {
      (z(), A());
    }
    ((l.applyStyleToElement = M),
      (l.removeStyleFromElement = w),
      (l.clearAllStyles = A),
      (l.createElementOverlay = F),
      (l.showAllSurfaces = V),
      (l.disableShowAllSurfaces = j));
  },
  98,
);
