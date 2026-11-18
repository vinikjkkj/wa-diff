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
            (this.$8 = new WeakMap()),
            (this.$9 = new WeakMap()),
            (this.$10 = new (r("IteratableElementWeakSet"))()),
            (this.loadingStateObserverCallback = function (e) {
              Array.from(e).forEach(function (e) {
                (o("WebAPIs").intersectionObserverEntryIsVisible(e)
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
                    }),
                    t.$12(e.target, !0))
                  : (t.loadingElementRemoved(e.target),
                    e.target.isConnected !== !1 && t.$12(e.target, !1)),
                  t.$10.delete(e.target));
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
                  this.$11());
            }
          }),
          (n.$12 = function (t, n) {
            var e;
            this.$9.get(t) !== n &&
              (this.$9.set(t, n),
              (e = this.$8.get(t)) == null ||
                e.forEach(function (e) {
                  e(n);
                }));
          }),
          (n.observeLoadingState = function (t, n) {
            var e = this;
            if (this.$3.reported) return function () {};
            var r = this.$8.get(t);
            r == null && ((r = new Set()), this.$8.set(t, r));
            var o = r;
            o.add(n);
            var a = this.$9.get(t);
            return (
              a != null && n(a),
              function () {
                (o.delete(n),
                  o.size === 0 && e.$8.get(t) === o && e.$8.delete(t));
              }
            );
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
              (o("VisibilityAPI").canUseVisibilityAPI &&
                !o("VisibilityAPI").isVisibilityHidden()) ||
              o("VisualCompletionUtil").isInAboveTheFold(t, this.$3)
                ? this.loadingElementAdded(t)
                : o("VisibilityAPI").canUseVisibilityAPI && this.$12(t, !1));
            var r = function () {
              (e.loadingStateObserver && e.loadingStateObserver.unobserve(t),
                e.$1.delete(t),
                e.$10.delete(t));
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
                n ? e.$11() : (e.$13(), e.$14());
              })),
              o("VisibilityAPI").isVisibilityHidden() && this.$11());
          }),
          (n.$11 = function () {
            var e = this;
            if (this.$5 == null) {
              var n = this.pendingLoadingElements.size();
              n !== 0 &&
                ((this.$7 = n),
                (this.$5 = r("setInterval")(function () {
                  e.$15();
                }, t.BACKGROUND_POLLING_INTERVAL_MS)));
            }
          }),
          (n.$14 = function () {
            var e = this.loadingStateObserver;
            if (e != null)
              for (var t of this.$10.values()) (e.unobserve(t), e.observe(t));
            this.$10.clear();
          }),
          (n.$13 = function () {
            this.$5 != null && (r("clearInterval")(this.$5), (this.$5 = null));
          }),
          (n.$15 = function () {
            if (this.$3.reported) {
              this.$13();
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
                this.loadingElementRemoved(c),
                d === "outside_viewport" && (this.$10.add(c), this.$12(c, !1)));
            }
            var m = this.pendingLoadingElements.size();
            (m === 0 &&
              this.$7 > 0 &&
              a < this.$7 &&
              (this.$3.addMarkerPoint("bg_poll_loading_gc", t),
              this.$3.attemptMeasurementFromLoadingStateTracker()),
              (this.$7 = m),
              m === 0 && this.$13());
          }),
          (n.disconnect = function () {
            ((this.$8 = new WeakMap()),
              this.$10.clear(),
              this.$13(),
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
