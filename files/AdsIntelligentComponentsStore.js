__d(
  "AdsIntelligentComponentsStore",
  [
    "AHGLogUtils",
    "AYMTClientSideLogging",
    "AYMTTipDismissalNotifier",
    "AdsCMPageChangeActionFlux",
    "AdsDataAtom",
    "AdsICDeliveryDebuggerUtils",
    "AdsIntelligentComponentsActions",
    "AdsIntelligentComponentsClickMessageActionFlux",
    "AdsIntelligentComponentsCloseMessageActionFlux",
    "AdsIntelligentComponentsCompleteTourActionFlux",
    "AdsIntelligentComponentsMessageContentStore",
    "AdsIntelligentComponentsMountingBatchActionFlux",
    "AdsIntelligentComponentsResetMessagesCapActionFlux",
    "AdsIntelligentComponentsTourStepActionFlux",
    "AdsInterfacesRouteUpdateParamsDataActionFlux",
    "FBLogger",
    "FluxReduceStore",
    "immutable",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 100,
      u = new Set();
    function c(e) {
      var t = e.tip_id;
      t == null ||
        t === "" ||
        u.has(t) ||
        (u.add(t),
        r("setTimeout")(function () {
          (u.delete(t), o("AYMTTipDismissalNotifier").notifyTipDismissal(t));
        }, 0));
    }
    var d = r("immutable").Record({
        mountedContainers: r("immutable").Map(),
        closedMessages: r("immutable").Set(),
        resetCapCycle: 0,
      }),
      m = (function (t) {
        function n() {
          return t.call(this, e || (e = r("AdsDataAtom"))) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getInitialState = function () {
            return d();
          }),
          (a.__getActionTypes = function () {
            return [
              o("AdsCMPageChangeActionFlux").actionType,
              o("AdsIntelligentComponentsClickMessageActionFlux").actionType,
              o("AdsIntelligentComponentsCloseMessageActionFlux").actionType,
              o("AdsIntelligentComponentsCompleteTourActionFlux").actionType,
              o("AdsIntelligentComponentsMountingBatchActionFlux").actionType,
              o("AdsIntelligentComponentsResetMessagesCapActionFlux")
                .actionType,
              o("AdsIntelligentComponentsTourStepActionFlux").actionType,
              o("AdsInterfacesRouteUpdateParamsDataActionFlux").actionType,
            ];
          }),
          (a.$AdsIntelligentComponentsStore$p_1 = function (t, n) {
            return t.set("closedMessages", t.get("closedMessages").add(n));
          }),
          (a.$AdsIntelligentComponentsStore$p_2 = function (t, n, r, a, i, l) {
            var e = t.get("mountedContainers");
            return (
              e.has(n) ||
                ((e = e.set(n, {
                  messageFormat: r,
                  componentName: a,
                  messageGroup: i,
                  validateCondition: l,
                })),
                o("AHGLogUtils").logMountContainer(r, a, n)),
              t.set("mountedContainers", e)
            );
          }),
          (a.$AdsIntelligentComponentsStore$p_3 = function (t, n) {
            var e = t.get("mountedContainers");
            return e.has(n)
              ? ((e = e.remove(n)), t.set("mountedContainers", e))
              : t;
          }),
          (a.$AdsIntelligentComponentsStore$p_4 = function (t, n, o, a) {
            a === void 0 && (a = []);
            var e = r("AdsIntelligentComponentsMessageContentStore").getAYMTTip(
              t,
            );
            return e
              ? (e && e.aymt_data && o.apply(void 0, [e.aymt_data].concat(a)),
                !1)
              : (r("FBLogger")("ads").warn(n), !0);
          }),
          (a.reduce = function (t, n) {
            var e = n.action;
            switch (
              (r("AdsICDeliveryDebuggerUtils").isVerboseDebugModeOn() &&
                e.type.startsWith("AdsIntelligentComponents") &&
                r("FBLogger")("ads").info(e.type, JSON.stringify(e)),
              e.type)
            ) {
              case o("AdsIntelligentComponentsResetMessagesCapActionFlux")
                .actionType:
                return t.update("resetCapCycle", function (e) {
                  return e + 1;
                });
              case o("AdsInterfacesRouteUpdateParamsDataActionFlux").actionType:
                var a = e.data.isNavigation;
                return (
                  a &&
                    r("setTimeout")(function () {
                      return o(
                        "AdsIntelligentComponentsActions",
                      ).resetMessagesCap();
                    }, s),
                  t
                );
              case o("AdsCMPageChangeActionFlux").actionType:
                return (
                  r("setTimeout")(function () {
                    return o(
                      "AdsIntelligentComponentsActions",
                    ).resetMessagesCap();
                  }, s),
                  t
                );
              case o("AdsIntelligentComponentsMountingBatchActionFlux")
                .actionType: {
                for (var i = t, l = 0; l < e.changes.length; l++) {
                  var u = e.changes[l];
                  switch (u.type) {
                    case "mount": {
                      i = this.$AdsIntelligentComponentsStore$p_2(
                        i,
                        u.messageID,
                        u.messageFormat,
                        u.componentName,
                        u.messageGroup,
                        u.validateCondition,
                      );
                      break;
                    }
                    case "unmount": {
                      i = this.$AdsIntelligentComponentsStore$p_3(
                        i,
                        u.messageID,
                      );
                      break;
                    }
                  }
                }
                return i;
              }
              case o("AdsIntelligentComponentsClickMessageActionFlux")
                .actionType: {
                var d = e.messageID,
                  m = this.$AdsIntelligentComponentsStore$p_4(
                    d,
                    "Failed to click message " + d + ". It is not visible.",
                    o("AYMTClientSideLogging").logClickNew,
                  );
                return m
                  ? t
                  : e.shouldClose
                    ? this.$AdsIntelligentComponentsStore$p_1(t, d)
                    : t;
              }
              case o("AdsIntelligentComponentsCloseMessageActionFlux")
                .actionType: {
                var p,
                  _,
                  f,
                  g,
                  h = e.messageID,
                  y = e.step,
                  C = this.$AdsIntelligentComponentsStore$p_4(
                    h,
                    "Failed to close message " + h + ". It is not visible.",
                    function (e) {
                      (o("AYMTClientSideLogging").logXoutNew(e, void 0, !1),
                        c(e));
                    },
                  );
                if (C) return t;
                var b = t.get("mountedContainers"),
                  v =
                    (p = e.messageFormat) != null
                      ? p
                      : (_ = b.get(h)) == null
                        ? void 0
                        : _.messageFormat;
                return (
                  o("AHGLogUtils").logXOut(
                    v != null ? v : "",
                    (f = (g = b.get(h)) == null ? void 0 : g.componentName) !=
                      null
                      ? f
                      : "",
                    h,
                    r(
                      "AdsIntelligentComponentsMessageContentStore",
                    ).getFBJoinerKey(h),
                    y,
                  ),
                  this.$AdsIntelligentComponentsStore$p_1(t, h)
                );
              }
              case o("AdsIntelligentComponentsCompleteTourActionFlux")
                .actionType: {
                var S = e.messageID,
                  R = this.$AdsIntelligentComponentsStore$p_4(
                    S,
                    "Failed to complete tour " + S + ". It is not visible.",
                    o("AYMTClientSideLogging").logTourCompleteNew,
                  );
                return R
                  ? t
                  : e.shouldClose
                    ? this.$AdsIntelligentComponentsStore$p_1(t, S)
                    : t;
              }
              case o("AdsIntelligentComponentsTourStepActionFlux").actionType: {
                var L = e.messageID,
                  E = e.step;
                return (
                  this.$AdsIntelligentComponentsStore$p_4(
                    L,
                    "Failed to step tour " + L + ". It is not visible.",
                    o("AYMTClientSideLogging").logTourStepImpressionNew,
                    [E],
                  ),
                  t
                );
              }
              default:
                return t;
            }
          }),
          n
        );
      })(r("FluxReduceStore"));
    m.__moduleID = i.id;
    var p = new m();
    l.default = p;
  },
  98,
);
