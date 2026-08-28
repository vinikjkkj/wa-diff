__d(
  "AdsALEAUtils",
  ["ALSurfaceUtils", "AdsALStats", "URI", "hyperionAutoLogging"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u() {
      return window;
    }
    function c(e) {
      var t = e == null ? void 0 : e.href,
        n = (s || (s = r("URI"))).normalize(
          t != null ? t : window.location.href,
        );
      if (n === null) return "";
      if (/.*\/videos\/.*/.test(n)) return "videos";
      if (/.*\/help\/.*/.test(n)) return "help";
      if (/.*\/inbox\/.*/.test(n)) return "inbox";
      if (/(\/photos\/|photo.php)\'/.test(n)) return "photos";
      var o = /(http[s]?:\/\/)?([^\/]+)([^\\?#&]+)/.exec(n);
      return o !== null && (o == null ? void 0 : o.length) >= 3
        ? o[3].replace(/(^\/|\/$)/, "")
        : n;
    }
    function d() {
      var t = new Map(),
        n = new Set();
      function r(e) {
        var t = e.getBoundingClientRect();
        if (t.height > 0 && t.width > 0) return e;
        for (var n of e.children) {
          var o = r(n);
          if (o) return o;
        }
        return null;
      }
      var a = function (n, r) {
          var e;
          ((e = t.get(n)) != null && e.push(r)) || t.set(n, [r]);
        },
        i = (
          e || (e = o("hyperionAutoLogging"))
        ).ALSurfaceUtils.getElementsWithSurfaces();
      return (
        Array.from(i).map(function (t) {
          var i = (
            e || (e = o("hyperionAutoLogging"))
          ).ALSurfaceUtils.getElementSurface(t);
          if (i != null)
            if (
              (n.add(i),
              t instanceof HTMLElement &&
                t.getAttribute("data-surface-wrapper") === "1")
            ) {
              var l = r(t);
              l != null && l instanceof HTMLElement
                ? a(i, l)
                : t instanceof HTMLElement && a(i, t);
            } else t instanceof HTMLElement && a(i, t);
        }),
        t
      );
    }
    function m() {
      var e = new Map(),
        t = o("AdsALStats").traverseElements(),
        n = new Set();
      return (
        t.map(function (t) {
          var r = t.component;
          if (r != null)
            if ((n.add(r), !e.has(r))) e.set(r, [t.element]);
            else {
              var o = e.get(r),
                a =
                  o == null
                    ? void 0
                    : o.map(function (e) {
                        return e.contains(t.element)
                          ? e
                          : t.element.contains(e)
                            ? t.element
                            : e;
                      });
              (o != null &&
                o.every(function (e) {
                  return !e.contains(t.element);
                }) &&
                o != null &&
                o.every(function (e) {
                  return !t.element.contains(e);
                }) &&
                t.element &&
                (a == null || a.push(t.element)),
                a && e.set(r, Array.from(a)));
            }
        }),
        e
      );
    }
    function p() {
      var t = new Map(),
        n = new Set(),
        r = window.document.documentElement,
        a = [];
      for (a.push(r); a.length > 0; ) {
        var i = a.shift();
        if (i) {
          r = i;
          var l = (
            e || (e = o("hyperionAutoLogging"))
          ).ALInteractableDOMElement.getInteractable(r, "click");
          if (l && l instanceof HTMLElement) {
            var s, u, c;
            if (n.has(l)) {
              var d = r.childNodes;
              d.forEach(function (e) {
                e instanceof HTMLElement && a.push(e);
              });
              continue;
            }
            var m =
                (e || (e = o("hyperionAutoLogging"))).ALElementInfo.getOrCreate(
                  l,
                ).getReactComponentName() || null,
              p = o("ALSurfaceUtils").getProductSurface(l) || null,
              _ = (
                e || (e = o("hyperionAutoLogging"))
              ).ALInteractableDOMElement.getElementTextEvent(l, p, "click"),
              f =
                (s =
                  _ == null ||
                  (u = _.elementText) == null ||
                  (u = u.sourceTexts) == null
                    ? void 0
                    : u.map(function (e) {
                        return {
                          is_fbt_translated: e.isFbtTranslated,
                          source: e.source,
                          text: e.text,
                        };
                      })) != null
                  ? s
                  : [],
              g =
                (_ == null ? void 0 : _.elementName) != null &&
                _.elementName !== ""
                  ? _.elementName
                  : ((c = f.find(function (e) {
                      return e.text.trim() !== "";
                    })) == null
                      ? void 0
                      : c.text) ||
                    l.getAttribute("data-testid") ||
                    l.getAttribute("href") ||
                    l.id ||
                    l.className ||
                    l.tagName.toLowerCase() ||
                    null;
            if (m == null || p == null || h(m, p)) {
              var y = r.childNodes;
              y.forEach(function (e) {
                e instanceof HTMLElement && a.push(e);
              });
              continue;
            }
            var C = l.getBoundingClientRect();
            if (C.height <= 0 || C.width <= 0) {
              var b = r.childNodes;
              b.forEach(function (e) {
                e instanceof HTMLElement && a.push(e);
              });
              continue;
            }
            if (l.tagName.toLowerCase() === "span") {
              var v = r.childNodes;
              v.forEach(function (e) {
                e instanceof HTMLElement && a.push(e);
              });
              continue;
            }
            if (g != null) {
              var S = (
                e || (e = o("hyperionAutoLogging"))
              ).getOrSetAutoLoggingID(l);
              t.has(S) ||
                t.set(S, {
                  element: l,
                  component: m,
                  surface: p,
                  elementName: g,
                  html_element_texts: f,
                });
            }
            n.add(l);
          }
          var R = r.childNodes;
          R.forEach(function (e) {
            e instanceof HTMLElement && a.push(e);
          });
        }
      }
      return t;
    }
    function _(e) {
      e.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    var f = ["AdsALLoggingInspector", "AdsUnifiedDebugger"],
      g = f.join("|");
    function h(e, t) {
      return (
        e.match(g) != null ||
        (t == null ? void 0 : t.match(/embedded_analytics/)) != null
      );
    }
    ((l.getWindow = u),
      (l.getCurrentPage = c),
      (l.buildSurfaceMap = d),
      (l.buildComponentMap = m),
      (l.getInteractableElements = p),
      (l.scrollToElement = _),
      (l.shouldIgnoreEvent = h));
  },
  98,
);
