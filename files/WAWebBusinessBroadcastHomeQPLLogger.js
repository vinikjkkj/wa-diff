__d(
  "WAWebBusinessBroadcastHomeQPLLogger",
  [
    "$InternalEnum",
    "WAWebBizBroadcastProOnboardingStatus",
    "WAWebQplFlowWrapper",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
        CAMPAIGNS_FETCH_END: "campaigns_fetch_end",
        CAMPAIGNS_FETCH_START: "campaigns_fetch_start",
        CAMPAIGNS_LOADED: "campaigns_loaded",
        FLOW_MOUNTED: "flow_mounted",
        PRO_RELAY_ENVIRONMENT_FETCH_END: "pro_relay_environment_fetch_end",
        PRO_RELAY_ENVIRONMENT_FETCH_START: "pro_relay_environment_fetch_start",
        SCREEN_MOUNTED: "screen_mounted",
      }),
      s = r("qpl")._(183054653, "728"),
      u = "web",
      c = (function () {
        function e() {
          ((this.$1 = null), (this.$2 = new Set()));
        }
        var t = e.prototype;
        return (
          (t.start = function (t) {
            (this.$1 != null && this.$1.drop(),
              (this.$2 = new Set()),
              (this.$1 = o("WAWebQplFlowWrapper").QPL.markerStart(s, {
                annotations: {
                  string: {
                    bb_tier: String(
                      o(
                        "WAWebBizBroadcastProOnboardingStatus",
                      ).getBizBroadcastProductTier(),
                    ),
                    entry_point: String(t),
                    platform: u,
                  },
                },
              })));
          }),
          (t.pointOnce = function (t) {
            var e = this.$1;
            e == null || this.$2.has(t) || (this.$2.add(t), e.addPoint(t));
          }),
          (t.hasFired = function (t) {
            return this.$2.has(t);
          }),
          (t.annotate = function (t) {
            this.$1 != null && this.$1.annotate(t);
          }),
          (t.end = function (t) {
            this.$1 != null &&
              (this.$1.end(t), (this.$1 = null), (this.$2 = new Set()));
          }),
          (t.drop = function () {
            this.$1 != null &&
              (this.$1.drop(), (this.$1 = null), (this.$2 = new Set()));
          }),
          (t.dropIfActive = function () {
            this.$1 != null && this.drop();
          }),
          (t.isActive = function () {
            return this.$1 != null;
          }),
          e
        );
      })(),
      d = new c();
    ((l.BusinessBroadcastHomeQPLPoints = e),
      (l.BusinessBroadcastHomeQPLLogger = d));
  },
  98,
);
