__d(
  "LCP",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l =
        typeof ((e = window.PerformanceObserver) == null ||
        (e = e.supportedEntryTypes) == null
          ? void 0
          : e.includes) == "function" &&
        window.PerformanceObserver.supportedEntryTypes.includes(
          "largest-contentful-paint",
        );
    function s() {
      return document == null
        ? []
        : Array.from(
            document.querySelectorAll('link[rel="preload"][as="image"]'),
          ).map(function (e) {
            var t;
            return (t = e.attributes.getNamedItem("href")) == null
              ? void 0
              : t.value;
          });
    }
    var u = null,
      c = null,
      d = null,
      m = null,
      p = !1;
    function _() {
      u != null ||
        !l ||
        ((u = new window.PerformanceObserver(function (e) {
          for (var t of e.getEntries())
            (!p &&
              d != null &&
              ((p = !0), d(), (d = null), m != null && (m(), (m = null))),
              (c = t));
        })),
        u.observe({ buffered: !0, type: "largest-contentful-paint" }));
    }
    function f(e) {
      if (!(!l || e == null)) {
        if (p) {
          e();
          return;
        }
        ((d = e), _());
        var t = function (t) {
          (!p && d != null && ((p = !0), d(t.type), (d = null)),
            m != null && (m(), (m = null)));
        };
        m = function () {
          (window.removeEventListener("click", t),
            window.removeEventListener("scroll", t),
            window.removeEventListener("keydown", t));
        };
        try {
          (window.addEventListener("click", t, { passive: !0, capture: !0 }),
            window.addEventListener("scroll", t, { passive: !0, capture: !0 }),
            window.addEventListener("keydown", t, {
              passive: !0,
              capture: !0,
            }));
        } catch (e) {}
      }
    }
    function g() {
      return l
        ? (_(),
          function () {
            var e, t, n;
            return c == null
              ? null
              : {
                  className: (e = c.element) == null ? void 0 : e.className,
                  element: (t = c.element) == null ? void 0 : t.tagName,
                  elementRef: c.element,
                  size: c.size,
                  timestamp: c.startTime,
                  url: c.url,
                  preloaded: s().includes((n = c) == null ? void 0 : n.url),
                };
          })
        : null;
    }
    ((i.canUseLCP = l), (i.catchFirstLcpCallback = f), (i.getLCPCallback = g));
  },
  66,
);
