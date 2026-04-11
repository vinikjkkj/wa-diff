__d(
  "VisualCompletionLogger",
  [
    "CLS",
    "IteratableElementWeakMap",
    "IteratableElementWeakSet",
    "LCP",
    "LateMutationUtilities",
    "ReactStackUtils",
    "ResourceDownloadLogger",
    "ResourceTimingAPI",
    "VisibilityState",
    "VisualCompletionConstants",
    "VisualCompletionTraceObserver",
    "VisualCompletionUtil",
    "VisualCompletionUtilCommon",
    "WebAPIs",
    "addAnnotations",
    "performanceNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "manualVCPointCandidate",
      c = 1;
    function d() {
      return { bottom: 0, left: 0, right: 0, top: 0 };
    }
    var m = (function () {
      function t(e, t, n, a, i) {
        var l;
        ((this.bgCheckCount = 0),
          (this.$8 = 0),
          (this.$9 = 0),
          (this.cssBgScanOverhead = 0),
          (this.mutationProcessingOverhead = 0),
          (this.trackedImages = new WeakSet()),
          (this.initialScrollY = 0),
          (this.scrolledVC = 0),
          (this.reported = !1),
          (this.measureOriginalViewport = !0),
          (this.mutationRoots = new (r("IteratableElementWeakSet"))()),
          (this.mutatedElementCount = 0),
          (this.lateMutationIgnoreElements = new WeakSet()),
          (this.config = i),
          (this.$3 = new (l = r("IteratableElementWeakMap"))()),
          (this.$6 = new l()),
          (this.$4 = new l()),
          (this.$5 = []),
          (this.$1 = []),
          (this.$2 = []),
          (this.cssBgElements = new l()),
          (this.visualChangeRecordList = []),
          (this.$10 = new (r("IteratableElementWeakSet"))()),
          (this.startTime = e),
          (this.$7 = { height: 0, width: 0 }),
          (this.initialScrollY =
            a === "INITIAL_LOAD"
              ? 0
              : o("VisualCompletionUtil").getScrollPosition(this).scrollY),
          (this.$11 = this.initialScrollY),
          (this.currentScrollY = this.initialScrollY),
          (this.navSequence = t),
          (this.traceID = n),
          (this.markerPoints = new Map()),
          (this.stateLog = new Map()),
          (this.annotations = {
            string: {},
            int: {},
            double: {},
            bool: {},
            string_array: {},
            int_array: {},
            double_array: {},
            bool_array: {},
          }),
          (this.tagSet = new Map()),
          (this.navDone = !1),
          (this.interactionType = a),
          (this.scrolled = !1),
          (this.$12 = o("CLS").getCLSCallback()),
          a === "INITIAL_LOAD" && (this.$13 = o("LCP").getLCPCallback()),
          r("VisualCompletionTraceObserver").emitStart(a));
      }
      var n = t.prototype;
      return (
        (n.addAnnotation = function (t, n) {
          var e;
          r("addAnnotations")(this.annotations, {
            string: ((e = {}), (e[t] = n), e),
          });
        }),
        (n.addAnnotationInt = function (t, n) {
          var e;
          r("addAnnotations")(this.annotations, {
            int: ((e = {}), (e[t] = n), e),
          });
        }),
        (n.addAnnotationDouble = function (t, n) {
          var e;
          r("addAnnotations")(this.annotations, {
            double: ((e = {}), (e[t] = n), e),
          });
        }),
        (n.addAnnotationBoolean = function (t, n) {
          var e;
          r("addAnnotations")(this.annotations, {
            bool: ((e = {}), (e[t] = n), e),
          });
        }),
        (n.addAnnotationIntArray = function (t, n) {
          var e;
          r("addAnnotations")(this.annotations, {
            int_array: ((e = {}), (e[t] = n), e),
          });
        }),
        (n.addAnnotationDoubleArray = function (t, n) {
          var e;
          r("addAnnotations")(this.annotations, {
            double_array: ((e = {}), (e[t] = n), e),
          });
        }),
        (n.addAnnotationStringArray = function (t, n) {
          var e;
          r("addAnnotations")(this.annotations, {
            string_array: ((e = {}), (e[t] = n), e),
          });
        }),
        (n.addAnnotationBooleanArray = function (t, n) {
          var e;
          r("addAnnotations")(this.annotations, {
            bool_array: ((e = {}), (e[t] = n), e),
          });
        }),
        (n.addFirstMarkerPoint = function (t, n, r) {
          r === void 0 && (r = {});
          var e = this.markerPoints.get(t);
          n >= this.startTime &&
            (!e || e.timestamp > n) &&
            this.markerPoints.set(t, { data: r, timestamp: n });
        }),
        (n.addMarkerPoint = function (t, n, r) {
          (r === void 0 && (r = {}),
            n >= this.startTime &&
              this.markerPoints.set(t, { data: r, timestamp: n }));
        }),
        (n.addVCPointCandidate = function (t, n) {
          (n === void 0 && (n = {}), this.addMarkerPoint(u, t, n));
        }),
        (n.addVisualElement = function (t, n, r, a, i, l, s, u, d) {
          this.scrolled &&
            ((this.currentScrollY = o("VisualCompletionUtil").getScrollPosition(
              this,
            ).scrollY),
            (this.scrolled = !1));
          var e = l;
          l === !0 &&
            s != null &&
            (s.bottom === s.top || s.left === s.right) &&
            (e = !1);
          var m = {
            element: new (o("WebAPIs").WeakRef)(n),
            record: {
              detached: !1,
              imgLoadEnd: d,
              imgLoadStart: u,
              isMediaVCElement: !1,
              mutationSeq: t,
              mutationTime: a,
              mutationType: r,
              paintTime: i,
              rectAtMutation: s,
              scrollY: this.currentScrollY,
              veid: c++,
              visibleAtMutation: e,
              visibleAtTraceEnd: !1,
            },
          };
          (o("VisualCompletionUtil").getImageNaturalSize(n, m),
            this.visualChangeRecordList.push(m));
        }),
        (n.logLoadingElementStart = function (t, n, r) {
          this.$4.set(t, {
            start: r,
            rectangle: o("VisualCompletionUtilCommon").castToRect(n),
          });
        }),
        (n.logLoadingElementEnd = function (t, n) {
          var e = this.$4.get(t);
          e &&
            (this.$5.push(babelHelpers.extends({}, e, { end: n })),
            this.$4.delete(t));
        }),
        (n.trackPagelet = function (t, n, r, a, i) {
          this.$6.set(t, {
            data: {},
            element: new (o("WebAPIs").WeakRef)(t),
            mutationSeq: 0,
            name: n,
            pageletTypeName: i,
            points: { hydration: r - this.startTime },
            vcCallback: a,
          });
        }),
        (n.addTag = function (t, n) {
          this.tagSet.has(t) || this.tagSet.set(t, new Set());
          var e = this.tagSet.get(t);
          e && e.add(n);
        }),
        (n.checkViewport = function () {
          this.$7 = o("VisualCompletionUtil").getViewportSize(this);
        }),
        (n.calculate = function (n) {
          var t = this;
          (n === void 0 && (n = !1), this.checkViewport());
          var a = (e || (e = r("performanceNow")))();
          ((this.$9 = 0),
            this.initTree(),
            !n &&
              o("ResourceTimingAPI").canUseResourceTimingAPI() &&
              this.getBackgroundImages(),
            this.calculatePaintedPixels());
          var i = {
            annotations: this.annotations,
            cssBgScanOverhead: this.cssBgScanOverhead,
            bgChecked: this.bgCheckCount,
            bgNum: 0,
            bgPixels: 0,
            vcCalculationOverhead: 0,
            mutationProcessingOverhead: this.mutationProcessingOverhead,
            compNum: 0,
            compPixels: 0,
            cssBgElements: Array.from(this.cssBgElements.values()),
            elements: this.$2,
            finalScrollY: this.$11,
            imgNum: 0,
            imgPixels: 0,
            initialScrollY: this.initialScrollY,
            interactionType: this.interactionType,
            loadingElements: this.$5,
            markerPoints: this.markerPoints,
            navComplete: e(),
            navSequence: this.navSequence,
            pagelets: Array.from(this.$6.values()),
            paintedPixels: this.$9,
            scrollY: o("VisualCompletionUtil").getScrollPosition(this).scrollY,
            scrolledVC: this.scrolledVC,
            speedIndex: 0,
            startTime: this.startTime,
            tagSet: this.tagSet,
            totalPixels: this.$8,
            traceId: this.traceID,
            tracePolicy: this.tracePolicy,
            stateLog: this.stateLog,
            vcWithoutImage: 0,
            viewport: this.$7,
            visuallyComplete: 0,
          };
          (r("addAnnotations")(this.annotations, {
            int: {
              mutationRootCount: this.mutationRoots.size(),
              mutatedElementCount: this.mutatedElementCount,
              visualChangeRecordCount: this.visualChangeRecordList.length,
              paintedElementCount: this.$2.length,
            },
          }),
            this.$2.length &&
              (this.addMarkerPoint("FP", this.$2[this.$2.length - 1].timestamp),
              this.$2.forEach(function (e) {
                var n = o("WebAPIs").derefOnlyAttachedElement(e.element);
                if (n) {
                  var r = e.pagelet;
                  if (i.vcWithoutImage === 0 && e.type === "component") {
                    var a = {
                      height: Math.floor(e.rectangle.bottom - e.rectangle.top),
                      mutationType: e.mutationType,
                      tagName: o("VisualCompletionUtil").getTagName(n),
                      type: e.type,
                      width: Math.floor(e.rectangle.right - e.rectangle.left),
                      x: Math.floor(e.rectangle.left),
                      y: Math.floor(e.rectangle.top),
                    };
                    (r && (a.pagelet = r.name),
                      (i.vcWithoutImage = e.latency),
                      i.markerPoints.set("vcWithoutImage", {
                        data: a,
                        element: new (o("WebAPIs").WeakRef)(n),
                        timestamp: e.latency + t.startTime,
                      }),
                      i.markerPoints.set("lastMutationBeforeVC", {
                        element: new (o("WebAPIs").WeakRef)(n),
                        timestamp: e.mutationTimestamp,
                      }));
                  }
                  if (i.visuallyComplete === 0) {
                    var l = {
                      height: Math.floor(e.rectangle.bottom - e.rectangle.top),
                      mutationType: e.mutationType,
                      tagName: o("VisualCompletionUtil").getTagName(n),
                      type: e.type,
                      width: Math.floor(e.rectangle.right - e.rectangle.left),
                      x: Math.floor(e.rectangle.left),
                      y: Math.floor(e.rectangle.top),
                    };
                    (r && (l.pagelet = r.name),
                      (i.visuallyComplete = e.latency),
                      i.markerPoints.set("visuallyComplete", {
                        data: l,
                        element: new (o("WebAPIs").WeakRef)(n),
                        timestamp: e.latency + t.startTime,
                      }),
                      (i.scrollY = e.scrollY));
                  }
                  switch (
                    ((i.speedIndex += (e.pixels / t.$9) * e.latency), e.type)
                  ) {
                    case "component":
                      (i.compNum++, (i.compPixels += e.pixels));
                      break;
                    case "img":
                      (i.imgNum++, (i.imgPixels += e.pixels));
                      break;
                    case "bg":
                      (i.bgNum++, (i.bgPixels += e.pixels));
                      break;
                  }
                }
              })),
            this.logPagelets(),
            this.logPixelProgress(),
            n &&
              ((i.visuallyComplete = i.vcWithoutImage =
                (e || (e = r("performanceNow")))() - this.startTime),
              i.markerPoints.set("visuallyComplete", {
                data: {},
                timestamp: i.visuallyComplete + this.startTime,
              }),
              i.markerPoints.set("vcWithoutImage", {
                data: {},
                timestamp: i.vcWithoutImage + this.startTime,
              })));
          var l = e();
          ((i.vcCalculationOverhead = l - a),
            this.setupMetaData(i),
            this.logCssBgElementsMetaData(),
            (this.reported = !0));
          var s = e() - l;
          return (
            r("addAnnotations")(i.annotations, {
              double: {
                vcMetaDataLoggingLatency: s,
                vcTotalLoggingOverhead:
                  s +
                  i.cssBgScanOverhead +
                  i.mutationProcessingOverhead +
                  i.vcCalculationOverhead,
              },
            }),
            i
          );
        }),
        (n.cleanupPaintedElements = function () {
          for (var e = new Set(), t = [].concat(this.$2); t.length > 0; ) {
            var n = t.pop();
            e.has(n) ||
              (e.add(n), delete n.element, t.push.apply(t, n.children));
          }
        }),
        (n.tearDown = function () {
          (this.$3.clear(),
            (this.$1 = []),
            (this.visualChangeRecordList = []),
            this.$10.clear(),
            this.config.enableInstrumentationCorrectnessLogging ||
              this.mutationRoots.clear(),
            this.$4.clear(),
            (this.$5 = []),
            this.config.retain_element_reference ||
              (this.cleanupPaintedElements(),
              this.cssBgElements.forEach(function (e) {
                delete e.element;
              }),
              this.$6.forEach(function (e) {
                delete e.element;
              })),
            this.$6.clear(),
            this.markerPoints.forEach(function (e) {
              delete e.element;
            }),
            this.cssBgElements.clear());
        }),
        (n.findPagelet = function (t) {
          for (var e = t; e; ) {
            if (this.$6.has(e)) return this.$6.get(e);
            e = e.parentElement;
          }
          return null;
        }),
        (n.findParent = function (t) {
          for (var e = t.parentElement; e; ) {
            if (this.$3.has(e)) return this.$3.get(e);
            e = e.parentElement;
          }
          return null;
        }),
        (n.checkExcluded = function (t) {
          for (var e = t; e; ) {
            if (this.$10.has(e)) return !0;
            if (this.$3.has(e) || this.mutationRoots.has(e)) return !1;
            if (
              o("VisualCompletionUtil").checkDOMElementAttributeValue(
                e,
                (s || (s = r("VisualCompletionConstants"))).IGNORE,
              )
            )
              return !0;
            e = e.parentElement;
          }
          return !1;
        }),
        (n.getBackgroundImages = function () {
          var e = this;
          this.cssBgElements.forEach(function (t) {
            if (t.element) {
              var n,
                r,
                a = o("WebAPIs").derefOnlyAttachedElement(t.element);
              if (!a) return;
              var i = e.findParent(a);
              if (!i) return;
              var l = o("VisualCompletionUtil").offsetTop(a, e),
                s = e.getRelativeBoundingClientRect(
                  a,
                  e.measureOriginalViewport ? l : void 0,
                ),
                u = o("VisualCompletionUtilCommon").getRectIntersection(
                  s,
                  i.rectangle,
                ),
                d = o("VisualCompletionUtilCommon").getPixels(u);
              if (d === 0 || (e.measureOriginalViewport && l > e.$7.height))
                return;
              if (
                (((n = t.resourceTiming) == null ? void 0 : n.responseEnd) ==
                  null &&
                  (t.resourceTiming = o("ResourceTimingAPI").getResourceTiming(
                    t.url,
                  )),
                ((r = t.resourceTiming) == null ? void 0 : r.responseEnd) !=
                  null)
              ) {
                var m = t.resourceTiming,
                  p = m.responseEnd,
                  _ = e.findPagelet(a);
                if (m.startTime >= e.startTime && p > i.timestamp) {
                  var f = {
                    children: [],
                    element: new (o("WebAPIs").WeakRef)(a),
                    hadLateMutationExpected: !1,
                    hadLateMutationUnexpected: !1,
                    latency: p - e.startTime,
                    mutationSeq: i.mutationSeq,
                    mutationType: "bg",
                    mutationTimestamp: i.mutationTimestamp,
                    offsetTop: l,
                    pagelet: _,
                    parent: i,
                    pixels: d,
                    rectangle: u,
                    scrollY: i.scrollY,
                    timestamp: p,
                    type: "bg",
                    veid: String(c++),
                  };
                  (i.children.push(f), e.$3.set(a, f), e.$2.push(f));
                }
              }
            }
          });
        }),
        (n.getRelativeBoundingClientRect = function (t, n) {
          var e = d();
          return typeof t.getBoundingClientRect != "function"
            ? e
            : ((e = o("VisualCompletionUtilCommon").castToRect(
                t.getBoundingClientRect(),
              )),
              {
                bottom: n != null ? n + (e.bottom - e.top) : e.bottom,
                left: e.left,
                right: e.right,
                top: n != null ? n : e.top,
              });
        }),
        (n.findFirstVisibleChild = function (t) {
          for (
            var e = this,
              n = [t],
              r = function () {
                var t = [],
                  r = 0,
                  a;
                if (
                  (n.forEach(function (n) {
                    if (typeof n.getBoundingClientRect == "function") {
                      var i = o("VisualCompletionUtilCommon").castToRect(
                          n.getBoundingClientRect(),
                        ),
                        l = o("VisualCompletionUtilCommon").getPixels(i);
                      (l > 0 &&
                        (i.bottom <= 0 ||
                          i.right <= 0 ||
                          i.left >= e.$7.width ||
                          i.top >= e.$7.height)) ||
                        (l > r && !e.checkExcluded(n) && ((r = l), (a = n)),
                        n.children != null &&
                          (t = t.concat(Array.from(n.children))));
                    }
                  }),
                  r > 0 && a)
                )
                  return { v: a };
                n = t;
              },
              a;
            n && n.length;
          )
            if (((a = r()), a)) return a.v;
          return null;
        }),
        (n.getRectangle = function (t, n) {
          var e = this.findFirstVisibleChild(t);
          if (e == null) return d();
          var r = this.getRelativeBoundingClientRect(e),
            a = r.bottom,
            i = r.left,
            l = r.right,
            s = r.top,
            u = { bottom: a, left: i, right: l, top: s };
          return o("VisualCompletionUtilCommon").getRectIntersection(u, n);
        }),
        (n.excludeElement = function (t) {
          this.$10.add(t);
        }),
        (n.initTree = function () {
          var e = this,
            t = {
              bottom: this.$7.height,
              left: 0,
              right: this.$7.width,
              top: -this.initialScrollY,
            };
          ((this.visualChangeRecordList = this.visualChangeRecordList.sort(
            function (e, t) {
              return e.record.paintTime - t.record.paintTime;
            },
          )),
            o("VisualCompletionUtil").processMediaVCImage(this),
            this.visualChangeRecordList.forEach(function (n) {
              var r = n.element,
                a = n.record,
                i = o("WebAPIs").derefOnlyAttachedElement(r);
              if (i == null) {
                ((a.detached = !0), (a.finalState = "detached"));
                return;
              }
              var l = i,
                s = o("VisualCompletionUtil").offsetTop(i, e);
              a.offsetTop = s;
              var u = e.getRelativeBoundingClientRect(
                i,
                e.measureOriginalViewport ? s : void 0,
              );
              if (((a.rectAtTraceEnd = u), a.visibleAtMutation === !1)) {
                if (e.config.useIntersectionObserverForVisibility === !0)
                  return;
                l = e.findFirstVisibleChild(i);
              }
              if (l == null) {
                a.finalState =
                  u.bottom - u.top > 0 && u.right - u.left > 0
                    ? "offscreen"
                    : "invisible";
                return;
              }
              if (
                (l !== i &&
                  ((a.nonEmptyChildFound = !0),
                  (s = o("VisualCompletionUtil").offsetTop(l, e)),
                  (a.offsetTop = s),
                  (u = e.getRelativeBoundingClientRect(
                    l,
                    e.measureOriginalViewport ? s : void 0,
                  )),
                  (a.rectAtTraceEnd = u)),
                e.inAboveTheFold(l))
              ) {
                var c = o("VisualCompletionUtilCommon").getRectIntersection(
                  u,
                  t,
                );
                if (
                  (a.paintTime - e.startTime > e.scrolledVC &&
                    ((e.scrolledVC = a.paintTime - e.startTime),
                    (e.$11 = a.scrollY)),
                  e.measureOriginalViewport && s > e.$7.height)
                ) {
                  a.finalState = "offscreen";
                  return;
                }
                var d = e.findPagelet(l),
                  m = {
                    children: [],
                    element: new (o("WebAPIs").WeakRef)(l),
                    hadLateMutationExpected: !1,
                    hadLateMutationUnexpected: !1,
                    imgLoadStart:
                      a.imgLoadStart != null
                        ? a.imgLoadStart - e.startTime
                        : void 0,
                    latency: a.paintTime - e.startTime,
                    mutationSeq: a.mutationSeq,
                    mutationType: a.mutationType,
                    mutationTimestamp: a.mutationTime,
                    offsetTop: s,
                    pagelet: d,
                    parent: null,
                    pixels: o("VisualCompletionUtilCommon").getPixels(c),
                    rectangle: c,
                    scrollY: a.scrollY,
                    timestamp: a.paintTime,
                    type:
                      a.mutationType === "imgLoad" ||
                      a.mutationType === "mutationImageAttribute"
                        ? "img"
                        : "component",
                    veid: String(a.veid),
                  };
                ((a.visibleAtTraceEnd = !0),
                  (a.finalState = "visible"),
                  e.$3.set(l, m));
              }
            }),
            this.$3.forEach(function (t) {
              var n = o("WebAPIs").derefOnlyAttachedElement(t.element);
              if (n) {
                var r = e.findParent(n);
                r
                  ? (t.type !== "component" && (t.scrollY = r.scrollY),
                    r.children.push(t),
                    (t.parent = r))
                  : e.$1.push(t);
              }
            }),
            this.$3.forEach(function (t, n) {
              for (var r = t.parent; r; ) {
                if (t.timestamp < r.timestamp) {
                  e.$3.delete(n);
                  return;
                }
                r = r.parent;
              }
              e.$2.push(t);
            }));
        }),
        (n.logPixelProgress = function () {
          for (
            var e = this,
              t = new Map([
                ["vc98", 0.02],
                ["vc95", 0.05],
              ]),
              n = 0,
              r = 0,
              o = function () {
                var o = e.$2[a];
                if (((n += o.pixels), t.size === 0)) return 1;
                (t.forEach(function (t, r) {
                  !e.markerPoints.has(r) &&
                    n / e.$9 >= t &&
                    e.addMarkerPoint(r, o.latency + e.startTime);
                }),
                  o.type === "component" &&
                    ((r += o.pixels),
                    o.children.forEach(function (e) {
                      e.type !== "component" && (r += e.pixels);
                    }),
                    t.forEach(function (n, a) {
                      !e.markerPoints.has(a + "WithoutImage") &&
                        r / e.$9 >= n &&
                        (e.addMarkerPoint(
                          a + "WithoutImage",
                          o.latency + e.startTime,
                        ),
                        t.delete(a));
                    })));
              },
              a = 0;
            a < this.$2.length && !o();
            a++
          );
        }),
        (n.logPagelets = function () {
          var e = this;
          (this.$6.forEach(function (t, n) {
            if (!e.inViewport(n)) {
              (t.vcCallback != null && t.vcCallback(null, null, t.data),
                e.$6.delete(n));
              return;
            }
            var r = e.$3.has(n) ? e.$3.get(n) : e.findParent(n),
              a = o("WebAPIs").derefOnlyAttachedElement(t.element);
            if (a != null && e.config.log_pagelet_size === !0) {
              var i = e.getRelativeBoundingClientRect(a);
              ((t.data.height = Math.floor(i.bottom - i.top)),
                (t.data.width = Math.floor(i.right - i.left)));
            }
            if (r) {
              var l = r.latency + e.startTime;
              ((t.points.firstPaint = l),
                (t.points.visuallyComplete = l),
                (t.points.vcWithoutImage = l),
                (t.mutationSeq = r.mutationSeq));
            }
          }),
            this.$2.forEach(function (t) {
              for (var n = t.pagelet; n != null; ) {
                var r,
                  a = t.latency + e.startTime;
                if (
                  ((n.points.visuallyComplete = Math.max(
                    (r = n.points.visuallyComplete) != null ? r : 0,
                    a,
                  )),
                  t.type === "component")
                ) {
                  var i;
                  n.points.vcWithoutImage = Math.max(
                    (i = n.points.vcWithoutImage) != null ? i : 0,
                    a,
                  );
                }
                var l = o("WebAPIs").derefOnlyAttachedElement(n.element);
                n =
                  (l == null ? void 0 : l.parentElement) != null
                    ? e.findPagelet(l == null ? void 0 : l.parentElement)
                    : null;
              }
            }),
            this.$6.forEach(function (t) {
              (t.points.visuallyComplete != null &&
                t.pageletTypeName != null &&
                t.pageletTypeName !== "" &&
                e.markerPoints.set(t.pageletTypeName + "VC", {
                  timestamp: t.points.visuallyComplete,
                }),
                t.points.vcWithoutImage != null &&
                  e.markerPoints.set("VC_" + t.name, {
                    data: t.data,
                    timestamp: t.points.vcWithoutImage,
                  }),
                t.vcCallback != null &&
                  t.points.visuallyComplete != null &&
                  t.points.vcWithoutImage != null &&
                  t.vcCallback(
                    t.points.visuallyComplete,
                    t.points.vcWithoutImage,
                    t.data,
                  ),
                e.config.retain_element_reference || delete t.element);
            }));
        }),
        (n.calculatePaintedPixels = function () {
          var e = this;
          ((this.$2 = this.$2.sort(function (e, t) {
            return t.latency - e.latency;
          })),
            this.$2.forEach(function (t) {
              for (var n = t.pixels, r = t.parent; r; )
                ((t.rectangle = o(
                  "VisualCompletionUtilCommon",
                ).getRectIntersection(t.rectangle, r.rectangle)),
                  (t.pixels = o("VisualCompletionUtilCommon").getPixels(
                    t.rectangle,
                  )),
                  (n = Math.min(n, t.pixels, r.pixels)),
                  (r = r.parent));
              for (t.pixels = n, r = t.parent; r; )
                ((r.pixels -= n), (r = r.parent));
              e.$9 += n;
            }),
            (this.$8 = this.$9));
        }),
        (n.inAboveTheFold = function (t) {
          var e = o("VisualCompletionUtil").getViewportSize(this),
            n = o("VisualCompletionUtilCommon").getPixels(
              this.getRectangle(t, {
                bottom: e.height,
                left: 0,
                right: e.width,
                top: -o("VisualCompletionUtil").getScrollPosition(this).scrollY,
              }),
            );
          return n > 0;
        }),
        (n.inOriginalViewport = function (t) {
          return (
            this.inAboveTheFold(t) &&
            o("VisualCompletionUtil").offsetTop(t, this) <= this.$7.height
          );
        }),
        (n.inViewport = function (t) {
          return this.measureOriginalViewport
            ? this.inOriginalViewport(t)
            : this.inAboveTheFold(t);
        }),
        (n.setInitialScrollY = function (t) {
          ((this.initialScrollY = t), (this.currentScrollY = t));
        }),
        (n.setTracePolicy = function (t) {
          this.tracePolicy = t;
        }),
        (n.setupMetaData = function (t) {
          var e = this,
            n = this.markerPoints.get(u);
          (n &&
            n.timestamp > t.visuallyComplete + t.startTime &&
            ((t.visuallyComplete = n.timestamp - t.startTime),
            this.markerPoints.set("visuallyComplete", n),
            r("addAnnotations")(t.annotations, { int: { isVCOverriden: 1 } })),
            t.tracePolicy != null &&
              t.tracePolicy !== "" &&
              r("addAnnotations")(t.annotations, {
                string: { tracePolicy: t.tracePolicy },
              }),
            r("addAnnotations")(t.annotations, {
              string: { interactionId: t.traceId },
              int: {
                height: t.viewport.height,
                width: t.viewport.width,
                scrollY: t.scrollY,
              },
            }),
            o("VisualCompletionUtil").addPlatformMetaData(t, this),
            r("addAnnotations")(t.annotations, {
              double: {
                vcCalculationOverhead: t.vcCalculationOverhead,
                mutationProcessingOverhead: t.mutationProcessingOverhead,
                cssBgScanOverhead: t.cssBgScanOverhead,
              },
              int: {
                finalScrollY: t.finalScrollY,
                initialScrollY: t.initialScrollY,
              },
            }),
            t.markerPoints.set("logVC", { timestamp: t.navComplete }),
            t.speedIndex > 0 &&
              t.markerPoints.set("speedIndex", {
                timestamp: t.speedIndex + t.startTime,
              }),
            t.elements.length &&
              this.measureOriginalViewport &&
              t.scrolledVC > 0 &&
              t.markerPoints.set("scrolledVC", {
                timestamp: t.scrolledVC + t.startTime,
              }));
          var a = o("VisibilityState").getHiddenSpans(
            t.startTime,
            t.visuallyComplete + t.startTime,
          );
          (a.length > 0 && this.addMarkerPoint("backgrounded", a[0].start),
            r("addAnnotations")(t.annotations, {
              int: {
                hidden: Number(
                  o("VisibilityState").wasHidden(
                    t.startTime,
                    t.visuallyComplete + t.startTime,
                  ),
                ),
              },
            }));
          var i = r("ResourceDownloadLogger")(
            t.startTime,
            t.startTime + t.visuallyComplete,
          );
          if (
            (i.forEach(function (e, n) {
              var o;
              r("addAnnotations")(t.annotations, {
                int: ((o = {}), (o[n] = e), o),
              });
            }),
            o("WebAPIs").unavailableAPIs.forEach(function (t) {
              e.addTag("unavailableAPIs", t);
            }),
            o("LateMutationUtilities").logLateMutationData(this, t),
            this.$12)
          ) {
            var l = this.$12();
            r("addAnnotations")(t.annotations, { double: { CLS: l } });
          }
          if (this.$13) {
            var s = this.$13();
            if (s != null) {
              var c,
                d,
                m,
                p =
                  this.config.log_lcp_metadata === !0
                    ? {
                        lcpClassname: (c = s.className) != null ? c : "",
                        lcpElement: (d = s.element) != null ? d : "",
                        lcpWasPreloaded: s.preloaded,
                        lcpSize: (m = s.size) != null ? m : "",
                      }
                    : void 0;
              if (p != null && this.config.log_lcp_image_url === !0) {
                var _;
                p.lcpUrl = (_ = s.url) != null ? _ : "";
              }
              if (
                p != null &&
                s.elementRef != null &&
                this.config.getMeaningfulReactComponentName != null
              ) {
                var f = this.config.getMeaningfulReactComponentName(
                  s.elementRef,
                );
                f != null && (p.lcpReactComponentName = f);
              }
              var g = s.elementRef;
              if (p != null && g != null && this.config.logLCPReactStack) {
                if (this.config.getReactComponentStackFromDOMElement != null) {
                  var h = o("ReactStackUtils").getTrimmedReactStack(
                    g,
                    "HeroPagelet",
                    this.config.getReactComponentStackFromDOMElement,
                  );
                  h != null && h.length > 0 && (p.lcpReactStack = h.join(","));
                }
                if (
                  this.config.getWrapperComponentPropArrayFromDOMElement != null
                ) {
                  var y =
                    this.config.getWrapperComponentPropArrayFromDOMElement(
                      g,
                      "HeroPagelet",
                      "name",
                    );
                  y != null && y.length > 0 && (p.lcpPageletName = y[0]);
                }
              }
              (p != null &&
                s.elementRef instanceof HTMLImageElement &&
                (p.lcpNaturalSize =
                  s.elementRef.naturalWidth * s.elementRef.naturalHeight),
                this.addMarkerPoint("LCP", s.timestamp, p));
            }
          }
        }),
        (n.logCssBgElementsMetaData = function () {
          var e = 0;
          (this.cssBgElements.forEach(function (t) {
            var n;
            ((n = t.resourceTiming) == null ? void 0 : n.responseEnd) != null &&
              e++;
          }),
            r("addAnnotations")(this.annotations, {
              int: {
                cssBgElementCount: this.cssBgElements.size(),
                cssBgTimingCount: e,
              },
            }));
        }),
        t
      );
    })();
    l.default = m;
  },
  98,
);
