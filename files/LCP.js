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
      c = null;
    function d() {
      u != null ||
        !l ||
        ((u = new window.PerformanceObserver(function (e) {
          for (var t of e.getEntries()) c = t;
        })),
        u.observe({ buffered: !0, type: "largest-contentful-paint" }));
    }
    function m() {
      return l
        ? (d(),
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
    ((i.canUseLCP = l), (i.getLCPCallback = m));
  },
  66,
);
