__d(
  "AdsNUXTourStore",
  [
    "AdsDataAtom",
    "AdsNUXTourStepConfig",
    "AdsNuxTourAbandonedDataActionFlux",
    "AdsNuxTourActionType",
    "AdsNuxTourJumpToStepDataActionFlux",
    "AdsNuxTourNextStepClickedDataActionFlux",
    "AdsNuxTourShowOrHideDataActionFlux",
    "AdsNuxTourStartedDataActionFlux",
    "AdsNuxTourUpdateTourConfigDataActionFlux",
    "FluxReduceStore",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function n() {
          return t.call(this, e || (e = r("AdsDataAtom"))) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getCurrentCountedStepIndex = function () {
            var e = this.getState();
            return e.currentCountedStepIndex;
          }),
          (a.getCurrentStepIndex = function () {
            var e = this.getState();
            return e.currentStepIndex;
          }),
          (a.getTourConfig = function () {
            var e = this.getState();
            return e.tourConfig;
          }),
          (a.getCurrentStepConfig = function () {
            var e = this.getState(),
              t = e.tourConfig;
            return t ? t.getStep(this.getCurrentStepIndex()) : null;
          }),
          (a.isHidden = function () {
            return this.getState().hideActionCount > 0;
          }),
          (a.isTourOver = function () {
            var e = this.getState();
            return e.tourConfig
              ? e.tourConfig.getTourSize() <= e.currentStepIndex
              : null;
          }),
          (a.getCountedTourSize = function () {
            var e = this.getState();
            return e.tourConfig ? e.tourConfig.getCountedStepNumber() : null;
          }),
          (a.getTourSize = function () {
            var e = this.getState();
            return e.tourConfig ? e.tourConfig.getTourSize() : null;
          }),
          (a.__getActionTypes = function () {
            return [].concat(o("AdsNuxTourActionType").ADS_NUX_TOUR_ACTIONS);
          }),
          (a.reduce = function (t, n) {
            var e = babelHelpers.extends({}, t),
              r = n.action,
              a = this.getCurrentStepConfig(),
              i = a != null ? a.getCompleteAction() : null;
            if (
              e.tourTerminalActions &&
              e.tourTerminalActions.indexOf(r.type) !== -1
            )
              return ((e.tourConfig = null), e);
            if (a && i != null && r.type === i)
              return (this.$AdsNUXTourStoreClass$p_1(e), e);
            switch (r.type) {
              case o("AdsNuxTourStartedDataActionFlux").actionType:
                return (
                  (e.tourConfig = r.tourConfig),
                  (e.currentCountedStepIndex = 0),
                  (e.currentStepIndex = 0),
                  e.tourConfig &&
                    (e.tourTerminalActions = e.tourConfig.getTerminalActions()),
                  this.$AdsNUXTourStoreClass$p_2(),
                  e
                );
              case o("AdsNuxTourNextStepClickedDataActionFlux").actionType:
                return (this.$AdsNUXTourStoreClass$p_1(e), e);
              case o("AdsNuxTourAbandonedDataActionFlux").actionType:
                return ((e.tourConfig = null), e);
              case o("AdsNuxTourShowOrHideDataActionFlux").actionType:
                return (
                  e.tourConfig &&
                    e.tourConfig.getTourID() === r.tourID &&
                    (r.shouldShow
                      ? e.hideActionCount > 0 && e.hideActionCount--
                      : e.hideActionCount++),
                  e
                );
              case o("AdsNuxTourUpdateTourConfigDataActionFlux").actionType:
                return ((e.tourConfig = r.tourConfig), e);
              case o("AdsNuxTourJumpToStepDataActionFlux").actionType:
                var l =
                    r.tourID == null ||
                    (e.tourConfig != null &&
                      e.tourConfig.getTourID() === r.tourID),
                  s = r.mustBeNext === !0,
                  u = e.currentStepIndex === r.step - 1;
                if (!l || (s && !u)) return e;
                if (
                  ((e.currentStepIndex = r.step),
                  (e.currentCountedStepIndex = 0),
                  e.tourConfig)
                ) {
                  var c = e.tourConfig.getAllSteps();
                  c &&
                    c.forEach(function (t, n) {
                      n < e.currentStepIndex &&
                        t.getIsCounted() &&
                        (e.currentCountedStepIndex += 1);
                    });
                }
                return e;
            }
            return t;
          }),
          (a.$AdsNUXTourStoreClass$p_1 = function (t) {
            var e = this.getCurrentStepConfig();
            (e && e.getIsCounted() && t.currentCountedStepIndex++,
              t.currentStepIndex++,
              this.$AdsNUXTourStoreClass$p_2());
          }),
          (a.$AdsNUXTourStoreClass$p_2 = function () {
            var e = this.getCurrentStepConfig();
            if (e && e instanceof r("AdsNUXTourStepConfig")) {
              var t = e.getOnViewCallback();
              t && t();
            }
          }),
          (a.getInitialState = function () {
            var e = 0,
              t = 0,
              n = null;
            return {
              currentCountedStepIndex: e,
              currentStepIndex: t,
              hideActionCount: 0,
              tourConfig: n,
            };
          }),
          n
        );
      })(r("FluxReduceStore"));
    s.__moduleID = i.id;
    var u = new s(),
      c = u;
    l.default = c;
  },
  98,
);
