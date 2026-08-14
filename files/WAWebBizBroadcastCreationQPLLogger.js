__d(
  "WAWebBizBroadcastCreationQPLLogger",
  [
    "$InternalEnum",
    "WAWebBizBroadcastProOnboardingStatus",
    "WAWebQplFlowWrapper",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
        AUDIENCE_FIRST_SELECTED: "audience_first_selected",
        BILLING_FETCH_END: "billing_fetch_end",
        BILLING_FETCH_START: "billing_fetch_start",
        CHECKOUT_FETCH_END: "checkout_fetch_end",
        CHECKOUT_FETCH_START: "checkout_fetch_start",
        DRAWER_MOUNTED: "drawer_mounted",
        FLOW_MOUNTED: "flow_mounted",
      }),
      s = n("$InternalEnum")({
        AUDIENCE_CREATION: "audience_creation",
        AUDIENCE_INFO: "audience_info",
        BB_FORWARD_MODAL: "bb_forward_modal",
        BB_SHARE_MODAL: "bb_share_modal",
        BB_THREAD_HEADER: "bb_thread_header",
        BB_THREAD_INFO_DRAWER: "bb_thread_info_drawer",
        CHAT_HOME: "chat_home",
        HOME_SCREEN: "home_screen",
      }),
      u = r("qpl")._(183054996, "1362"),
      c = "web",
      d = (function () {
        function e() {
          ((this.$1 = null), (this.$2 = new Set()));
        }
        var t = e.prototype;
        return (
          (t.start = function (t, n) {
            (this.$1 != null && this.$1.drop(),
              (this.$2 = new Set()),
              (this.$1 = o("WAWebQplFlowWrapper").QPL.markerStart(u, {
                annotations: {
                  bool: { has_pre_selected_audience: n },
                  string: {
                    bb_tier: String(
                      o(
                        "WAWebBizBroadcastProOnboardingStatus",
                      ).getBizBroadcastProductTier(),
                    ),
                    entry_point: t,
                    platform: c,
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
          e
        );
      })(),
      m = new d();
    ((l.CreateBroadcastQPLPoints = e),
      (l.CreateBroadcastEntryPoint = s),
      (l.BizBroadcastCreationQPLLogger = m));
  },
  98,
);
