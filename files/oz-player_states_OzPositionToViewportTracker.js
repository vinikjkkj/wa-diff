__d(
  "oz-player/states/OzPositionToViewportTracker",
  [
    "oz-player/shims/OzEventEmitter",
    "oz-player/utils/OzPositionToViewportUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = 0.5,
      u = (function (t) {
        function n(e) {
          var n;
          return (
            (n = t.call(this) || this),
            (n.$OzPositionToViewportTracker$p_1 = []),
            (n.$OzPositionToViewportTracker$p_5 = function (e) {
              (e.forEach(function (e) {
                var t = n.$OzPositionToViewportTracker$p_1.find(function (t) {
                  return e.target === t.video;
                });
                (t != null &&
                  (o(
                    "oz-player/utils/OzPositionToViewportUtils",
                  ).intersectionObserverEntryIsIntersecting(e)
                    ? (t.position = n.$OzPositionToViewportTracker$p_7(e))
                    : n.$OzPositionToViewportTracker$p_1.map(function (t) {
                        e.target === t.video && (t.position = null);
                      })),
                  n.$OzPositionToViewportTracker$p_1.forEach(function (e) {
                    e.positionIndexToViewportVertically =
                      n.$OzPositionToViewportTracker$p_6(e.video);
                  }));
              }),
                n.emit("state_changed"));
            }),
            (n.$OzPositionToViewportTracker$p_2 = e),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.$OzPositionToViewportTracker$p_4 = function () {
            this.$OzPositionToViewportTracker$p_3 == null &&
              (this.$OzPositionToViewportTracker$p_3 = new IntersectionObserver(
                this.$OzPositionToViewportTracker$p_5,
                {
                  rootMargin:
                    this.$OzPositionToViewportTracker$p_2.getNumber(
                      "pixels_above_viewport_to_observe",
                    ) +
                    "px 0px " +
                    this.$OzPositionToViewportTracker$p_2.getNumber(
                      "pixels_below_viewport_to_observe",
                    ) +
                    "px 0px",
                  threshold: 0,
                },
              ));
          }),
          (r.registerVideo = function (t) {
            (this.$OzPositionToViewportTracker$p_1.push({
              video: t,
              position: null,
              positionIndexToViewportVertically: -1,
            }),
              this.$OzPositionToViewportTracker$p_4(),
              this.$OzPositionToViewportTracker$p_3 != null &&
                this.$OzPositionToViewportTracker$p_3.observe(t));
          }),
          (r.getPositionIndexOfVideoFromViewportVertically = function (t) {
            var e = this.$OzPositionToViewportTracker$p_1.find(function (e) {
              return e.video === t;
            });
            return e != null ? e.positionIndexToViewportVertically : -1;
          }),
          (r.$OzPositionToViewportTracker$p_6 = function (t) {
            return o(
              "oz-player/utils/OzPositionToViewportUtils",
            ).determinePositionIndexOfVideoFromViewportVertically(
              t,
              this.$OzPositionToViewportTracker$p_1,
              s,
            );
          }),
          (r.$OzPositionToViewportTracker$p_7 = function (t) {
            var e = t.boundingClientRect;
            return {
              x: e.x + window.scrollX,
              y: e.y + window.scrollY,
              width: e.width,
              height: e.height,
            };
          }),
          (n.getInstance = function (r) {
            return (e == null && (e = new n(r)), e);
          }),
          (r.unregisterVideo = function (t) {
            var e = this,
              n = [];
            (this.$OzPositionToViewportTracker$p_1.forEach(function (r) {
              r.video === t && e.$OzPositionToViewportTracker$p_3 != null
                ? e.$OzPositionToViewportTracker$p_3.unobserve(t)
                : n.push(r);
            }),
              (this.$OzPositionToViewportTracker$p_1 = n),
              this.$OzPositionToViewportTracker$p_1.length === 0 &&
                this.$OzPositionToViewportTracker$p_3 != null &&
                (this.$OzPositionToViewportTracker$p_3.disconnect(),
                (this.$OzPositionToViewportTracker$p_3 = null)));
          }),
          n
        );
      })(r("oz-player/shims/OzEventEmitter"));
    l.default = u;
  },
  98,
);
