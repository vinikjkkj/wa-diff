__d(
  "VisualCompletionUtil",
  [
    "ImageDownloadTracker",
    "ResourceTimingAPI",
    "VisualCompletionConstants",
    "VisualCompletionUtilCommon",
    "WebAPIs",
    "addAnnotations",
    "performance",
    "performanceNavigationStart",
    "performanceNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = /url\(.*(http.*)\)/gi;
    function d(e) {
      return { height: window.innerHeight, width: window.innerWidth };
    }
    function m(e, t) {
      if (typeof e.getBoundingClientRect != "function") return !1;
      var n = d(t),
        r = e.getBoundingClientRect(),
        a = r.bottom,
        i = r.left,
        l = r.right,
        s = r.top,
        u = o("VisualCompletionUtilCommon").getPixels(
          o("VisualCompletionUtilCommon").getRectIntersection(
            { bottom: a, left: i, right: l, top: s },
            { bottom: n.height, left: 0, right: n.width, top: -p(t).scrollY },
          ),
        );
      return u > 0;
    }
    function p(e) {
      var t,
        n,
        r = (t = window.scrollX) != null ? t : 0,
        o = (n = window.scrollY) != null ? n : 0;
      return { scrollX: r, scrollY: o };
    }
    function _(e, t) {
      for (
        var n = 0, r = e;
        r && r.offsetParent && typeof r.offsetTop == "number";
      )
        ((n += r.offsetTop), (r = r.offsetParent));
      if (
        r &&
        r.offsetParent == null &&
        typeof r.getBoundingClientRect == "function"
      ) {
        var o = r.getBoundingClientRect(),
          a = o.top;
        a >= 0 ? (n += a) : r === document.body && (n -= t.initialScrollY);
      }
      return n;
    }
    function f(e) {
      if (e == null || e === "") return !1;
      var t = e.replace(/ /g, "");
      return (
        t.indexOf("display:none") >= 0 ||
        t.indexOf("visibility:hidden") >= 0 ||
        t.indexOf("content-visibility:hidden") >= 0
      );
    }
    function g(e) {
      for (var t = e; t; ) {
        if (
          (typeof t.getAttribute == "function" && f(t.getAttribute("style"))) ||
          (typeof t.hasAttribute == "function" && t.hasAttribute("hidden"))
        )
          return !0;
        t = t.parentElement;
      }
      return !1;
    }
    function h(e, t) {
      if (t.has(e)) return t.get(e) === !0;
      var n = !1;
      return (
        (typeof e.getAttribute == "function" && f(e.getAttribute("style"))) ||
        (typeof e.hasAttribute == "function" && e.hasAttribute("hidden"))
          ? (n = !0)
          : e.parentElement != null && (n = h(e.parentElement, t)),
        t.set(e, n),
        n
      );
    }
    function y(t, n, o) {
      if (n.config.useIntersectionObserverForVisibility !== !0) {
        if (n.config.invisibleStyleMemoization === !0 && o != null) {
          if (h(t, o)) return !0;
        } else if (g(t)) return !0;
      }
      for (var a = t; a; ) {
        if (n.mutationRoots.has(a)) return !1;
        if (n.getPendingLoadingElements().has(a)) return !0;
        if (typeof a.getAttribute == "function") {
          var i = a.getAttribute(
            (e || (e = r("VisualCompletionConstants"))).ATTRIBUTE_NAME,
          );
          if (i === (e || (e = r("VisualCompletionConstants"))).IGNORE)
            return !0;
          if (
            a !== t &&
            i === (e || (e = r("VisualCompletionConstants"))).IGNORE_DYNAMIC
          )
            return (n.excludeElement(t), !0);
        }
        a = a.parentElement;
      }
      return !1;
    }
    function C(e, t, n) {
      if (
        F(t) &&
        !y(t, e) &&
        t.textContent != null &&
        t.parentElement != null
      ) {
        var r = t.parentElement;
        if (A(r)) {
          var o = t.textContent;
          if ((typeof o == "string" && (o = o.trim()), o !== ""))
            return n != null && n.trim() === o ? null : r;
        }
      }
      return null;
    }
    function b(e, t, n) {
      var r = [],
        o = null;
      return (
        n.config.invisibleStyleMemoization === !0 && (o = new Map()),
        Array.from(e).forEach(function (e) {
          if (!(!A(e.target) && !F(e.target))) {
            var a = e.target;
            if (e.type === "childList" && e.addedNodes && e.addedNodes.length)
              Array.from(e.addedNodes).forEach(function (e) {
                var a = e;
                if (!y(a, n, o)) {
                  if (v(a)) {
                    T(n.mutationSeq, a, "imgLoad", t, n);
                    return;
                  } else if (A(a)) {
                    var i;
                    (typeof a.querySelectorAll == "function" &&
                      I(n.mutationSeq, a, t, n, o),
                      n.interactionType === "INITIAL_LOAD" &&
                      (i = n.config.SSRInjectedElements) != null &&
                      i.has(a)
                        ? r.push([a, "ssrInject"])
                        : r.push([a, "mutationAdd"]));
                  } else if (n.config.observeTextMutation && F(a)) {
                    var l = C(n, a);
                    l != null && r.push([l, "mutationTextAdd"]);
                  }
                }
              });
            else if (e.type === "attributes" && !y(a, n, o))
              if (e.attributeName === "hidden") {
                if (!a.hasAttribute("hidden")) {
                  var i;
                  n.interactionType === "INITIAL_LOAD" &&
                  (i = n.config.SSRInjectedElements) != null &&
                  i.has(a)
                    ? r.push([a, "ssrUnhide"])
                    : r.push([a, "mutationHiddenAttribute"]);
                }
              } else if (e.attributeName === "style") {
                var l = a.getAttribute("style"),
                  s = e.oldValue;
                if (f(s) && !f(l)) {
                  var u;
                  n.interactionType === "INITIAL_LOAD" &&
                  (u = n.config.SSRInjectedElements) != null &&
                  u.has(a)
                    ? r.push([a, "ssrUnhide"])
                    : r.push([a, "mutationStyleAttribute"]);
                }
              } else
                ((w(a) === "image" && e.attributeName === "href") ||
                  (w(a) === "IMG" && e.attributeName === "src")) &&
                  T(n.mutationSeq, a, "mutationImageAttribute", t, n);
            else if (
              n.config.observeTextMutation &&
              e.type === "characterData" &&
              F(a)
            ) {
              var c = C(n, a, e.oldValue);
              c != null && r.push([c, "mutationTextUpdate"]);
            }
          }
        }),
        n.config.invisibleStyleMemoization === !0 && o != null && o.clear(),
        r
      );
    }
    function v(e) {
      return w(e) === "IMG" || w(e) === "image";
    }
    function S(e) {
      return w(e) === "picture";
    }
    function R(e) {
      return v(e) || S(e);
    }
    function L(e) {
      if (typeof window.getComputedStyle != "function") return null;
      var t = window.getComputedStyle(e),
        n = t["background-image"];
      if (t.visibility !== "hidden" && n && n !== "none") {
        c.lastIndex = 0;
        var r = c.exec(n);
        if (r && r.length > 1) return r[1].replace('"', "");
      }
      return null;
    }
    function E(e) {
      if (!e.reported) {
        var t = (s || (s = r("performanceNow")))();
        (e.checkViewport(),
          e.mutationRoots.forEach(function (t) {
            if (t && typeof t.querySelectorAll == "function") {
              var n = t.querySelectorAll("div,i,span,li");
              Array.prototype.forEach.call(n, function (t) {
                if (
                  !(
                    t.textContent ||
                    t.children.length ||
                    e.cssBgElements.has(t) ||
                    y(t, e) ||
                    !e.inViewport(t)
                  )
                ) {
                  var n = L(t);
                  if ((e.bgCheckCount++, n != null)) {
                    var r = {
                      element: new (o("WebAPIs").WeakRef)(t),
                      url: n,
                      resourceTiming:
                        o("ResourceTimingAPI").getResourceTiming(n),
                    };
                    e.cssBgElements.set(t, r);
                  }
                }
              });
            }
          }),
          (e.cssBgScanOverhead = s() - t));
      }
    }
    function k(t, n) {
      if (
        typeof t.getAttribute == "function" &&
        t.getAttribute(
          (e || (e = r("VisualCompletionConstants"))).ATTRIBUTE_NAME,
        ) === (e || (e = r("VisualCompletionConstants"))).LOADING_STATE
      )
        n.waitLoadingState(t);
      else if (typeof t.querySelectorAll == "function") {
        var o = t.querySelectorAll(
          "[" +
            (e || (e = r("VisualCompletionConstants"))).ATTRIBUTE_NAME +
            "=" +
            e.LOADING_STATE +
            "]",
        );
        Array.from(o).forEach(function (e) {
          n.waitLoadingState(e);
        });
      }
    }
    function I(e, t, n, r, o) {
      var a = t.querySelectorAll("img, image");
      Array.from(a).forEach(function (t) {
        y(t, r, o) || T(e, t, "imgLoad", n, r);
      });
    }
    function T(t, n, o, a, i) {
      if (!i.trackedImages.has(n)) {
        if ((i.trackedImages.add(n), n.complete)) {
          n.getAttribute(
            (e || (e = r("VisualCompletionConstants"))).ATTRIBUTE_NAME,
          ) === (e || (e = r("VisualCompletionConstants"))).MEDIA_VC_IMAGE &&
            i.scheduleIntersectionObserver(t, n, o, a);
          return;
        }
        var l = n.currentSrc || n.src,
          u = n.crossOrigin;
        if (w(n) === "image" && typeof n.getAttribute == "function") {
          var c = n.getAttribute("xlink:href");
          c != null && (l = c);
        }
        if (!(l == null || l === "" || l.indexOf("http") !== 0)) {
          var d = function () {
              i.imageDone(n);
            },
            m = function () {
              i.imageWait(n);
            };
          if (n.getAttribute("loading") === "lazy") {
            var p = D(t, n, o, a, d, i),
              _ = p.errorHandler,
              f = p.loadHandler;
            i.scheduleElementVisibleObserver(
              n,
              function () {
                i.reported ||
                  n.complete ||
                  (m(),
                  n.addEventListener("load", f),
                  n.addEventListener("error", _));
              },
              { executeOnce: !0, cleanAfterReport: !0 },
            );
          } else if (i.config.use_image_download_tracker === !0) {
            var g = (s || (s = r("performanceNow")))();
            r("ImageDownloadTracker")(l, m, u)
              .then(function () {
                var e = (s || (s = r("performanceNow")))();
                (i.scheduleIntersectionObserver(t, n, o, a, g, e), d());
              })
              .catch(function () {
                return d();
              });
          } else {
            var h = D(t, n, o, a, d, i),
              y = h.errorHandler,
              C = h.loadHandler;
            (m(),
              n.addEventListener("load", C),
              n.addEventListener("error", y));
          }
        }
      }
    }
    function D(e, t, n, o, a, i) {
      var l = (s || (s = r("performanceNow")))(),
        u = function () {
          var d = (s || (s = r("performanceNow")))();
          (i.scheduleIntersectionObserver(e, t, n, o, l, d),
            a(),
            t.removeEventListener("load", u),
            t.removeEventListener("error", c));
        },
        c = function () {
          (a(),
            t.removeEventListener("load", u),
            t.removeEventListener("error", c));
        };
      return { loadHandler: u, errorHandler: c };
    }
    function x(t, n) {
      return (
        typeof t.getAttribute == "function" &&
        t.getAttribute(
          (e || (e = r("VisualCompletionConstants"))).ATTRIBUTE_NAME,
        ) === n
      );
    }
    function $(e) {
      var t = function () {
        ((e.scrolled = !0),
          e.markerPoints.has("scroll_start") ||
            e.addMarkerPoint(
              "scroll_start",
              (s || (s = r("performanceNow")))(),
            ));
      };
      try {
        (window.addEventListener("scroll", t, { passive: !0 }),
          e.onComplete(function () {
            window.removeEventListener("scroll", t);
          }));
      } catch (e) {
        if (e.message !== "can't access dead object") throw e;
      }
    }
    function P(t, n) {
      t instanceof HTMLImageElement &&
        ((n.record.isMediaVCElement = x(
          t,
          (e || (e = r("VisualCompletionConstants"))).MEDIA_VC_IMAGE,
        )),
        (n.record.imgNaturalWidth = t.naturalWidth),
        (n.record.imgNaturalHeight = t.naturalHeight));
    }
    function N(e, t) {
      if (
        (typeof window.devicePixelRatio == "number" &&
          r("addAnnotations")(e.annotations, {
            double: { devicePixelRatio: window.devicePixelRatio },
          }),
        e.navSequence === 1 &&
          (u || (u = r("performance"))) &&
          (u || (u = r("performance"))).timing &&
          (u || (u = r("performance"))).timing.responseStart &&
          e.markerPoints.set("TTFB", {
            timestamp:
              (u || (u = r("performance"))).timing.responseStart -
              r("performanceNavigationStart")(),
          }),
        t.interactionType === "INITIAL_LOAD")
      ) {
        var n =
          (u || (u = r("performance"))) == null ||
          (u || (u = r("performance"))).getEntriesByType == null
            ? void 0
            : (u || (u = r("performance"))).getEntriesByType("paint");
        n &&
          n.forEach(function (e) {
            e.name === "first-contentful-paint" &&
              t.addFirstMarkerPoint("FCP", e.startTime);
          });
      }
    }
    var M = {
      attributeFilter: ["hidden", "style", "href", "src"],
      attributeOldValue: !0,
      attributes: !0,
      characterData: !0,
      childList: !0,
      subtree: !0,
    };
    function w(e) {
      var t;
      return (t = e.tagName) != null ? t : "";
    }
    function A(e) {
      return (
        e.nodeType === Node.ELEMENT_NODE &&
        e.tagName !== "SCRIPT" &&
        e.tagName !== "STYLE" &&
        e.tagName !== "LINK"
      );
    }
    function F(e) {
      return e.nodeType === Node.TEXT_NODE;
    }
    function O(e) {
      return {
        onError: function () {},
        onLoad: function () {},
        unmountCallback: function () {},
      };
    }
    function B(e) {
      var t = 4,
        n = 0,
        r = 0;
      e.visualChangeRecordList = e.visualChangeRecordList.filter(function (o) {
        var a = o.record;
        if (
          a.isMediaVCElement &&
          a.visibleAtMutation === !0 &&
          a.imgNaturalHeight != null &&
          a.imgNaturalWidth != null
        ) {
          var i = a.imgNaturalHeight * a.imgNaturalWidth,
            l = +(i < n * t),
            s = {
              ignored: l,
              resolution: i,
              mutationType: a.mutationType,
              naturalWidth: String(a.imgNaturalWidth),
              naturalHeight: String(a.imgNaturalHeight),
            };
          return (
            n > 0 && (s.ratio = i / n),
            e.addMarkerPoint("mediaVCImage_" + r++, a.paintTime, s),
            l
              ? !1
              : (e.addMarkerPoint("ImageMediaVC", a.paintTime), (n = i), !0)
          );
        }
        return !0;
      });
    }
    function W(e, t, n) {
      e.mutationRoots.forEach(function (e) {
        var r = function () {
          t(null, !0);
        };
        (n.push(function () {
          e.removeEventListener("click", r);
        }),
          e.addEventListener("click", r));
        var o = function () {
          t(null, !0);
        };
        (n.push(function () {
          e.removeEventListener("keyDown", o);
        }),
          e.addEventListener("keyDown", o));
      });
    }
    ((l.getViewportSize = d),
      (l.isInAboveTheFold = m),
      (l.getScrollPosition = p),
      (l.offsetTop = _),
      (l.checkInvisibleStyle = f),
      (l.checkInvisibleStyleElement = g),
      (l.checkInvisibleStyleElementRecursive = h),
      (l.shouldIgnoreMutation = y),
      (l.getParentElementForTextNodeChange = C),
      (l.extractMutationElements = b),
      (l.isImage = v),
      (l.isPicture = S),
      (l.isImageOrPicture = R),
      (l.getStyleBackground = L),
      (l.scanCssBgElements = E),
      (l.checkLoadingStates = k),
      (l.trackAllChildImages = I),
      (l.trackImage = T),
      (l.getImageLoadHandlers = D),
      (l.checkDOMElementAttributeValue = x),
      (l.setupScrollHandler = $),
      (l.getImageNaturalSize = P),
      (l.addPlatformMetaData = N),
      (l.mutationObserverConfig = M),
      (l.getTagName = w),
      (l.isElementNode = A),
      (l.isTextNode = F),
      (l.trackImageLoad = O),
      (l.processMediaVCImage = B),
      (l.subscribeUserInputForExtraMutation = W));
  },
  98,
);
