__d(
  "LoadingStateTracker",
  [
    "IteratableElementWeakMap",
    "IteratableElementWeakSet",
    "VisibilityAPI",
    "VisibilityState",
    "VisualCompletionUtil",
    "WebAPIs",
    "clearInterval",
    "performanceNow",
    "setInterval",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e) {
          var t = this;
          ((this.$1 = new (r("IteratableElementWeakMap"))()),
            (this.loadingStateObserver = null),
            (this.$2 = []),
            (this.pendingLoadingElements = new (r(
              "IteratableElementWeakMap",
            ))()),
            (this.visibleLoadingElements = new (r(
              "IteratableElementWeakSet",
            ))()),
            (this.$4 = 0),
            (this.$5 = null),
            (this.$6 = null),
            (this.$7 = 0),
            (this.loadingStateObserverCallback = function (e) {
              Array.from(e).forEach(function (e) {
                o("WebAPIs").intersectionObserverEntryIsVisible(e)
                  ? (t.loadingElementAdded(e.target),
                    t.$3.logLoadingElementStart(
                      e.target,
                      e.boundingClientRect,
                      e.time,
                    ),
                    t.visibleLoadingElements.add(e.target),
                    t.$3.addFirstMarkerPoint("loadingState_start", e.time),
                    t.$3.addFirstMarkerPoint("firstPaint", e.time, {
                      mutationType: "loadingState",
                    }))
                  : t.loadingElementRemoved(e.target);
              });
            }),
            (this.$3 = e),
            o("WebAPIs").IntersectionObserver &&
              (this.loadingStateObserver = new (o(
                "WebAPIs",
              ).IntersectionObserver)(this.loadingStateObserverCallback)));
        }
        var n = t.prototype;
        return (
          (n.loadingElementRemoved = function (n) {
            var t = this.pendingLoadingElements.get(n);
            if (t != null) {
              var o = this.$3.stateLog.get(t);
              (o != null && (o[1] = (e || (e = r("performanceNow")))()),
                this.$3.logLoadingElementEnd(
                  n,
                  (e || (e = r("performanceNow")))(),
                ),
                this.pendingLoadingElements.delete(n),
                this.visibleLoadingElements.has(n) &&
                  (this.visibleLoadingElements.delete(n),
                  this.$3.addMarkerPoint(
                    "loadingState_end",
                    (e || (e = r("performanceNow")))(),
                  )),
                this.$3.attemptMeasurementFromLoadingStateTracker());
            }
          }),
          (n.loadingElementAdded = function (n) {
            if (!this.$3.reported) {
              var t = "loadingState_" + this.$4++;
              (this.pendingLoadingElements.set(n, t),
                this.$3.stateLog.set(t, [
                  (e || (e = r("performanceNow")))(),
                  -1,
                ]),
                this.$3.config.enable_background_loading_state_polling === !0 &&
                  this.$5 == null &&
                  o("VisibilityAPI").isVisibilityHidden() &&
                  this.$8());
            }
          }),
          (n.waitLoadingState = function (t) {
            var e = this;
            if (this.$3.reported) return function () {};
            var n = this.$1.get(t);
            if (n)
              return function () {
                (n(), e.loadingElementRemoved(t));
              };
            if (o("VisualCompletionUtil").shouldIgnoreMutation(t, this.$3))
              return function () {};
            if (
              this.$3.config.bypass_detached_element === !0 &&
              t.isConnected === !1
            )
              return function () {};
            (this.loadingStateObserver && this.loadingStateObserver.observe(t),
              ((o("VisibilityAPI").canUseVisibilityAPI &&
                !o("VisibilityAPI").isVisibilityHidden()) ||
                o("VisualCompletionUtil").isInAboveTheFold(t, this.$3)) &&
                this.loadingElementAdded(t));
            var r = function () {
              (e.loadingStateObserver && e.loadingStateObserver.unobserve(t),
                e.$1.delete(t));
            };
            return (
              this.$1.set(t, r),
              function () {
                (r(), e.loadingElementRemoved(t));
              }
            );
          }),
          (n.hasLoadingStateUnmountCallback = function (t) {
            return this.$1.has(t);
          }),
          (n.forEachLoadingStateUnmountCallback = function (t) {
            this.$1.forEach(t);
          }),
          (n.clearLoadingStateUnmountCallbacks = function () {
            this.$1.clear();
          }),
          (n.addTailLoadLoadingStateObserver = function (t) {
            this.$2.push(t);
          }),
          (n.disconnectTailLoadLoadingStateObservers = function () {
            this.$2.forEach(function (e) {
              e && e.disconnect();
            });
          }),
          (n.initBackgroundPolling = function () {
            var e = this;
            this.$3.config.enable_background_loading_state_polling === !0 &&
              o("VisibilityAPI").canUseVisibilityAPI &&
              ((this.$6 = o("VisibilityState").subscribe(function (t, n) {
                n ? e.$8() : e.$9();
              })),
              o("VisibilityAPI").isVisibilityHidden() && this.$8());
          }),
          (n.$8 = function () {
            var e = this;
            if (this.$5 == null) {
              var n = this.pendingLoadingElements.size();
              n !== 0 &&
                ((this.$7 = n),
                (this.$5 = r("setInterval")(function () {
                  e.$10();
                }, t.BACKGROUND_POLLING_INTERVAL_MS)));
            }
          }),
          (n.$9 = function () {
            this.$5 != null && (r("clearInterval")(this.$5), (this.$5 = null));
          }),
          (n.$10 = function () {
            if (this.$3.reported) {
              this.$9();
              return;
            }
            var t = (e || (e = r("performanceNow")))(),
              n = [],
              a = 0;
            for (var i of this.pendingLoadingElements.entries()) {
              var l = i[0],
                s = i[1];
              if ((a++, l.isConnected === !1)) {
                n.push({ element: l, reason: "detached" });
                continue;
              }
              o("VisualCompletionUtil").isInAboveTheFold(l, this.$3) ||
                n.push({ element: l, reason: "outside_viewport" });
            }
            for (var u of n) {
              var c = u.element,
                d = u.reason;
              (this.$3.addMarkerPoint("bg_poll_loading_removed_" + d, t),
                this.loadingElementRemoved(c));
            }
            var m = this.pendingLoadingElements.size();
            (m === 0 &&
              this.$7 > 0 &&
              a < this.$7 &&
              (this.$3.addMarkerPoint("bg_poll_loading_gc", t),
              this.$3.attemptMeasurementFromLoadingStateTracker()),
              (this.$7 = m),
              m === 0 && this.$9());
          }),
          (n.disconnect = function () {
            (this.$9(),
              this.$6 != null && (this.$6(), (this.$6 = null)),
              this.loadingStateObserver &&
                this.loadingStateObserver.disconnect());
          }),
          t
        );
      })();
    ((s.BACKGROUND_POLLING_INTERVAL_MS = 200), (l.default = s));
  },
  98,
);
