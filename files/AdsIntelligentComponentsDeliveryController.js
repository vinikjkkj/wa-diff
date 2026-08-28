__d(
  "AdsIntelligentComponentsDeliveryController",
  [
    "AdsICBadgesPlacement",
    "AdsICBluesCluesPlacement",
    "AdsICCampaignManagerMegaphonePlacement",
    "AdsICCampaignModalPlacement",
    "AdsICFloatingPlacement",
    "AdsICGlobalBannerPlacement",
    "AdsICInFlowPlacement",
    "AdsICMessage",
    "AdsICMessagesMap",
    "AdsICPlacementWithCap",
    "AdsIntelligentComponentsMessageContentStore",
    "AdsIntelligentComponentsTargeting",
    "AdsIntelligentComponentsTimerProvider",
    "AdsIntelligentComponentsTimerStartAction",
    "gkx",
    "immutable",
    "isTruthy",
    "requestIdleCallback",
    "throttle",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("throttle")(function (e) {
        r("requestIdleCallback")(e);
      }),
      s = (function () {
        function t() {
          var t = this,
            n;
          ((this.tryStartCycle = function () {
            e(function () {
              (!r("gkx")("22348") ||
                !r("AdsIntelligentComponentsTimerProvider")().get("timerOn")) &&
                r("AdsIntelligentComponentsTimerStartAction").dispatch(
                  {},
                  {
                    line: "116",
                    module: "AdsIntelligentComponentsDeliveryController.js",
                    moduleID: i.id,
                  },
                );
            });
          }),
            (this.$9 = 0),
            (this.$1 = (n = r("immutable")).Set([
              r("AdsICBluesCluesPlacement"),
              r("AdsICInFlowPlacement"),
              r("AdsICBadgesPlacement"),
              r("AdsICFloatingPlacement"),
              r("AdsICCampaignModalPlacement"),
              r("AdsICGlobalBannerPlacement"),
              r("AdsICCampaignManagerMegaphonePlacement"),
            ])),
            (this.$4 = n.Map()),
            (this.$3 = n.Set()),
            (this.$2 = n.Map().withMutations(function (e) {
              t.$1.forEach(function (t) {
                return e.set(t.getName(), r("immutable").OrderedSet());
              });
            })));
        }
        var n = t.prototype;
        return (
          (n.canUpdateVisibleMessagesCheck = function (t) {
            var e = this.$9;
            return ((this.$9 = t), this.$9 !== e);
          }),
          (n.update = function (t, n, r, o, a, i) {
            var e = this;
            (this.$8 != t && (this.resetCap(), (this.$8 = t)),
              (this.$4 = n),
              (this.$5 = r),
              (this.$6 = o),
              (this.$7 = a));
            var l = this.$10();
            return (
              this.$1.forEach(function (t) {
                e.$2 = e.$2.set(
                  t.getName(),
                  t.updateVisibleMessages(l, e.$7, i),
                );
              }),
              this.$2
            );
          }),
          (n.resetCap = function () {
            return (
              this.$1.forEach(function (e) {
                e instanceof r("AdsICPlacementWithCap") && e.resetCap();
              }),
              this
            );
          }),
          (n.getMessageState = function (t) {
            var e,
              n = this.$4.get(t),
              a = (e = this.$11()) == null ? void 0 : e[t],
              i = r("AdsIntelligentComponentsMessageContentStore").getAYMTTip(
                t,
              );
            return !n && !a && !i
              ? null
              : new (r("AdsICMessage"))({
                  id: t,
                  visiblePlacements: this.$12(t),
                  isMounted: !!this.$4.has(t),
                  isLoaded: !!a,
                  isClosed: !!this.$5.has(t),
                  passValidateCondition: !!(n && n.validateCondition(t)),
                  isMatchingContext: o(
                    "AdsIntelligentComponentsTargeting",
                  ).isMessageMatchingContext(i && i.ic_targeting_spec, this.$7),
                  adObjectID: this.$7.get("object_id"),
                  format: n && n.messageFormat,
                  componentName: n && n.componentName,
                  messageGroup: n && n.messageGroup,
                  messageType: a && a.message_type,
                  messageTypeID: a && a.message_type_id,
                  aymtData: i && i.aymt_data,
                  mustShow: a && a.must_show,
                  experiments: a && a.experiments,
                  fbJoinerKey: r(
                    "AdsIntelligentComponentsMessageContentStore",
                  ).getFBJoinerKey(t),
                  score: a && a.score,
                  qeState: a && a.qe_state,
                  isInjected: a && a.is_injected,
                  bpID: a && a.bp_id,
                  opResult: a && a.op_result,
                  messageContentCategory: a && a.message_content_category,
                });
          }),
          (n.getInvisibleReason = function (t) {
            var e;
            return (
              this.$1.forEach(function (n) {
                var o = n.getInvisibleReason(t);
                r("isTruthy")(o) && o !== "InvalidDeliveryPlacement" && (e = o);
              }),
              e
            );
          }),
          (n.$10 = function () {
            var e = this,
              t = this.$2.reduce(function (e, t) {
                return e.union(t);
              }, r("immutable").Set(this.$4.keys())),
              n = new (r("AdsICMessagesMap"))();
            return (
              t.forEach(function (t) {
                var r = e.getMessageState(t);
                r && (n = n.addMessage(r));
              }),
              n
            );
          }),
          (n.$12 = function (t) {
            return this.$2.reduce(function (e, n, r) {
              return n.has(t) ? e.add(r) : e;
            }, r("immutable").Set());
          }),
          (n.$11 = function () {
            return this.$6
              ? this.$6.messages && this.$6.messages.aymt_tips
              : null;
          }),
          t
        );
      })(),
      u = new s();
    l.default = u;
  },
  98,
);
