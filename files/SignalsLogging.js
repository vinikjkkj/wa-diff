__d(
  "SignalsLogging",
  [
    "SignalsLoggingGenerated",
    "SignalsLoggingMetadataUtil",
    "SignalsLoggingSessions",
    "nullthrows",
    "react",
    "signalsLogAction",
    "signalsLogError",
    "signalsLogUserFeedback",
    "signalsLoggingAddScopes",
    "signalsLoggingAddSecondary",
    "signalsLoggingAssertComplete",
    "signalsLoggingDefineSessionByComponentLifetime",
    "signalsLoggingLogPromise",
    "signalsLoggingMakeTimer",
    "signalsLoggingSetNamespace",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.mutateInternal = function (n) {
            return new t(n(this.getInternalDataDoNotUse()));
          }),
          (n.$SignalsLogging$p_1 = function () {
            r("signalsLoggingAssertComplete")(this.getInternalDataDoNotUse());
          }),
          (n.scope = function () {
            for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
              n[o] = arguments[o];
            return new t(
              r("signalsLoggingAddScopes")(this.getInternalDataDoNotUse(), n),
            );
          }),
          (n.namespace = function (n) {
            return new t(
              r("signalsLoggingSetNamespace")(
                this.getInternalDataDoNotUse(),
                n,
              ),
            );
          }),
          (n.secondary = function (n, o) {
            var e = n(o);
            return new t(
              r("signalsLoggingAddSecondary")(
                this.getInternalDataDoNotUse(),
                babelHelpers.extends({}, e),
              ),
            );
          }),
          (n.addSecondaryConfigInternal = function (n) {
            return new t(
              r("signalsLoggingAddSecondary")(
                this.getInternalDataDoNotUse(),
                babelHelpers.extends({}, n),
              ),
            );
          }),
          (n.performanceTimer = function (t) {
            return r("signalsLoggingMakeTimer")(
              this.getInternalDataDoNotUse(),
              t,
            );
          }),
          (n.startEvent = function (n, r) {
            (e.prototype.startEvent.call(this, n, r),
              this.annotateEvent(n, {
                string: babelHelpers.extends(
                  {},
                  o("SignalsLoggingMetadataUtil").getUsefulIDs(),
                  o("SignalsLoggingMetadataUtil").getCurrentURL(),
                ),
              }));
          }),
          (n.startEventFromNavStart = function (n, r) {
            (e.prototype.startEventFromNavStart.call(this, n, r),
              this.annotateEvent(n, {
                string: babelHelpers.extends(
                  {},
                  o("SignalsLoggingMetadataUtil").getUsefulIDs(),
                  o("SignalsLoggingMetadataUtil").getCurrentURL(),
                ),
              }));
          }),
          (n.startUserFlowEvent = function (n) {
            (e.prototype.startUserFlowEvent.call(this, n),
              this.annotateEvent(n, {
                string: babelHelpers.extends(
                  {},
                  o("SignalsLoggingMetadataUtil").getUsefulIDs(),
                  o("SignalsLoggingMetadataUtil").getCurrentURL(),
                ),
              }));
          }),
          (n.logPromise = function (t, n) {
            return r("signalsLoggingLogPromise")(
              this.getInternalDataDoNotUse(),
              n,
              t,
            );
          }),
          (n.logClick = function (t) {
            var e = t === void 0 ? {} : t,
              n = e.flowId;
            r("signalsLogAction")(this.getInternalDataDoNotUse(), "click", n);
          }),
          (n.logRender = function (t) {
            var e = t === void 0 ? {} : t,
              n = e.flowId;
            r("signalsLogAction")(this.getInternalDataDoNotUse(), "render", n);
          }),
          (n.logFetch = function (t) {
            var e = t === void 0 ? {} : t,
              n = e.flowId;
            r("signalsLogAction")(this.getInternalDataDoNotUse(), "fetch", n);
          }),
          (n.logDone = function (t) {
            var e = t === void 0 ? {} : t,
              n = e.flowId;
            r("signalsLogAction")(this.getInternalDataDoNotUse(), "done", n);
          }),
          (n.logCustomActionUseSparingly = function (t, n) {
            var e = n === void 0 ? {} : n,
              o = e.flowId;
            r("signalsLogAction")(this.getInternalDataDoNotUse(), t, o);
          }),
          (n.logError = function (t, n, o) {
            var e = o === void 0 ? {} : o,
              a = e.disableSecondary,
              i = a === void 0 ? !1 : a,
              l = e.flowId;
            (this.$SignalsLogging$p_1(),
              r("signalsLogError")({
                action: n,
                config: this.getInternalDataDoNotUse(),
                disableSecondary: i,
                error: t,
                flowId: l,
              }));
          }),
          (n.startSession = function (t) {
            var e = this;
            this.$SignalsLogging$p_1();
            var n = r("SignalsLoggingSessions").start(
              this.getInternalDataDoNotUse(),
              t,
            );
            return (
              this.logCustomActionUseSparingly("SESSION_START"),
              function () {
                (e.logCustomActionUseSparingly("SESSION_END"), n());
              }
            );
          }),
          (n.defineSession = function (t, n) {
            return r("signalsLoggingDefineSessionByComponentLifetime")(
              this,
              t,
              n,
            );
          }),
          (n.getSessionStart = function (t) {
            var e = r("SignalsLoggingSessions").getSession(
              r("nullthrows")(this.getInternalDataDoNotUse().namespace),
              t,
            );
            return e != null ? e.start : null;
          }),
          (n.logUserFeedback = function (t) {
            r("signalsLogUserFeedback")(this, t);
          }),
          t
        );
      })(r("SignalsLoggingGenerated"));
    l.default = u;
  },
  98,
);
