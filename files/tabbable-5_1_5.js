__d(
  "tabbable-5.1.5",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      Object.defineProperty(e, "__esModule", { value: !0 });
      var t = [
          "input",
          "select",
          "textarea",
          "a[href]",
          "button",
          "[tabindex]",
          "audio[controls]",
          "video[controls]",
          '[contenteditable]:not([contenteditable="false"])',
          "details>summary:first-of-type",
          "details",
        ],
        n = t.join(","),
        r =
          typeof Element == "undefined"
            ? function () {}
            : Element.prototype.matches ||
              Element.prototype.msMatchesSelector ||
              Element.prototype.webkitMatchesSelector,
        o = function (t, o, a) {
          var e = Array.prototype.slice.apply(t.querySelectorAll(n));
          return (o && r.call(t, n) && e.unshift(t), (e = e.filter(a)), e);
        },
        a = function (t) {
          return t.contentEditable === "true";
        },
        i = function (t) {
          var e = parseInt(t.getAttribute("tabindex"), 10);
          return isNaN(e)
            ? a(t) ||
              ((t.nodeName === "AUDIO" ||
                t.nodeName === "VIDEO" ||
                t.nodeName === "DETAILS") &&
                t.getAttribute("tabindex") === null)
              ? 0
              : t.tabIndex
            : e;
        },
        l = function (t, n) {
          return t.tabIndex === n.tabIndex
            ? t.documentOrder - n.documentOrder
            : t.tabIndex - n.tabIndex;
        },
        s = function (t) {
          return t.tagName === "INPUT";
        },
        u = function (t) {
          return s(t) && t.type === "hidden";
        },
        c = function (t) {
          var e =
            t.tagName === "DETAILS" &&
            Array.prototype.slice.apply(t.children).some(function (e) {
              return e.tagName === "SUMMARY";
            });
          return e;
        },
        d = function (t, n) {
          for (var e = 0; e < t.length; e++)
            if (t[e].checked && t[e].form === n) return t[e];
        },
        m = function (t) {
          if (!t.name) return !0;
          var e = t.form || t.ownerDocument,
            n = function (n) {
              return e.querySelectorAll(
                'input[type="radio"][name="' + n + '"]',
              );
            },
            r;
          if (
            typeof window != "undefined" &&
            typeof window.CSS != "undefined" &&
            typeof window.CSS.escape == "function"
          )
            r = n(window.CSS.escape(t.name));
          else
            try {
              r = n(t.name);
            } catch (e) {
              return (e.message, !1);
            }
          var o = d(r, t.form);
          return !o || o === t;
        },
        p = function (t) {
          return s(t) && t.type === "radio";
        },
        _ = function (t) {
          return p(t) && !m(t);
        },
        f = function (t) {
          if (getComputedStyle(t).visibility === "hidden") return !0;
          var e = r.call(t, "details>summary:first-of-type"),
            n = e ? t.parentElement : t;
          if (r.call(n, "details:not([open]) *")) return !0;
          for (; t; ) {
            if (getComputedStyle(t).display === "none") return !0;
            t = t.parentElement;
          }
          return !1;
        },
        g = function (t) {
          return !(t.disabled || u(t) || f(t) || c(t));
        },
        h = function (t) {
          return !(!g(t) || _(t) || i(t) < 0);
        },
        y = function (t, n) {
          n = n || {};
          var e = [],
            r = [],
            a = o(t, n.includeContainer, h);
          a.forEach(function (t, n) {
            var o = i(t);
            o === 0
              ? e.push(t)
              : r.push({ documentOrder: n, tabIndex: o, node: t });
          });
          var s = r
            .sort(l)
            .map(function (e) {
              return e.node;
            })
            .concat(e);
          return s;
        },
        C = function (t, n) {
          n = n || {};
          var e = o(t, n.includeContainer, g);
          return e;
        },
        b = function (t) {
          if (!t) throw new Error("No node provided");
          return r.call(t, n) === !1 ? !1 : h(t);
        },
        v = t.concat("iframe").join(","),
        S = function (t) {
          if (!t) throw new Error("No node provided");
          return r.call(t, v) === !1 ? !1 : g(t);
        };
      ((e.focusable = C),
        (e.isFocusable = S),
        (e.isTabbable = b),
        (e.tabbable = y));
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    function d(e) {
      switch (e) {
        case void 0:
          return c();
      }
    }
    a.exports = d;
  },
  null,
);
