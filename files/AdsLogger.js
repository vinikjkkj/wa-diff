__d(
  "AdsLogger",
  [
    "AdsLoggerConstants",
    "AdsUlEventFalcoEvent",
    "AdsUlPeEventFalcoEvent",
    "AdsUnifiedLoggingConfig",
    "Banzai",
    "ErrorGuard",
    "ErrorNormalizeUtils",
    "ErrorPubSub",
    "EventEmitter",
    "FBLogger",
    "Random",
    "emptyFunction",
    "err",
    "gkx",
    "ifRequired",
    "performanceAbsoluteNow",
    "safeStringify",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(r("EventEmitter")),
      d = new c();
    function m(e, t) {
      return (
        t === "errors" &&
        e !== "ADS_INTERFACES_FBLOGGER_MUSTFIX" &&
        e !== "ADS_INTERFACES_FBLOGGER_WARN"
      );
    }
    function p(e) {
      var t = e.loggerConfigName,
        n = e.normalized_error,
        o = r("FBLogger")(t);
      (n && o.catchingNormalizedError(n),
        e.event === "ADS_INTERFACES_CRITICAL_EXCEPTION" && _(o, e));
    }
    function _(e, t) {
      switch (t.error_type) {
        case "FLUX_STORE":
          e.fatal(
            "%s failed while dispatching %s",
            t.store_name,
            t.action_type_on_error,
          );
          break;
        case "VALIDATOR":
          e.warn("validation failed from %s", t.source);
          break;
        default:
          break;
      }
    }
    var f = (function () {
      function t(t, n, o, a, i, l, c) {
        var d = this;
        (i === void 0 && (i = !1),
          l === void 0 && (l = 0),
          c === void 0 && (c = 60),
          (this.$2 = 0),
          (this.$4 = (e || (e = r("performanceAbsoluteNow")))()),
          (this.$5 = i),
          (this.$7 = l),
          (this.$3 = c),
          (this.$6 = t),
          (this.$8 = (s || (s = r("ErrorGuard"))).guard(
            n || r("emptyFunction").thatReturnsNull,
          )),
          (this.$9 = o || r("emptyFunction").thatReturnsNull),
          (this.$1 = a != null ? a : "logger"),
          (u || (u = r("ErrorPubSub"))).addListener(function (e, t) {
            if (!d.__shouldSilenceError(e)) {
              var n = {
                  error_message: e.message,
                  error_type: e.name,
                  stack_trace: e.stack,
                  error_data: r("gkx")("22347")
                    ? r("safeStringify")(e)
                    : JSON.stringify(e),
                  error_script: e.script,
                  error_line: e.line,
                },
                o = r("AdsLoggerConstants").UNHANDLED_JS_EXCEPTION_EVENT_NAME;
              (t === "FBLOGGER" &&
                (e.type === "mustfix" || e.type === "error"
                  ? (o = "ADS_INTERFACES_FBLOGGER_MUSTFIX")
                  : e.type === "warn" && (o = "ADS_INTERFACES_FBLOGGER_WARN")),
                d.logError(o, n));
            }
          }));
      }
      var n = t.prototype;
      return (
        (n.__shouldSilenceError = function (t) {
          var e = t.type;
          return !!e && e !== "fatal" && e !== "error" && e !== "warn";
        }),
        (n.logForAnalytics = function (n, o, a) {
          var t = this,
            i = a != null ? a : {},
            l = i.vital === void 0 ? !0 : i.vital;
          if ((delete i.vital, this.$5))
            if ((this.$2++, this.$2 > this.$7))
              (r("Banzai").flush(),
                (this.$2 = 0),
                (this.$4 = (e || (e = r("performanceAbsoluteNow")))()));
            else {
              var s =
                ((e || (e = r("performanceAbsoluteNow")))() - this.$4) / 1e3;
              if (s >= this.$3) {
                var u = Math.floor((s / this.$3) * this.$7);
                ((this.$2 = Math.max(0, this.$2 - u)),
                  (this.$4 = (e || (e = r("performanceAbsoluteNow")))()));
              }
            }
          var c = babelHelpers.extends({}, this.$8(), i, {
            event_category: n,
            event: o,
          });
          if (
            (this.$10(o || "", c, r("AdsUnifiedLoggingConfig").stack_traces),
            c.event || (c.stack_trace = r("err")("No Event.").stack || "none"),
            m(o, n) &&
              d.emit(
                "error",
                babelHelpers.extends({}, c, {
                  loggerConfigName: this.$6,
                  time: (e || (e = r("performanceAbsoluteNow")))(),
                }),
              ),
            delete c.normalized_error,
            ["pe", "cf", "components", "bi"].includes(this.$6))
          ) {
            var p = function () {
                return { short_name: t.$6, post: c };
              },
              _ =
                this.$6 === "pe"
                  ? r("AdsUlPeEventFalcoEvent")
                  : r("AdsUlEventFalcoEvent");
            (this.$6 === "pe" &&
              r("ifRequired")("AdsALChannel", function (e) {
                e.AdsALChannel.emit("al_pe_logger_event", c);
              }),
              l ? _.logImmediately(p) : _.log(p));
            return;
          }
          r("Banzai").post(
            this.$1 + ":" + this.$6,
            c,
            l ? r("Banzai").VITAL : r("Banzai").BASIC,
          );
        }),
        (n.$11 = function (t) {
          return t === 1
            ? !0
            : t <= 0
              ? !1
              : Math.floor(r("Random").random() * Math.floor(t) + 1) === 1;
        }),
        (n.$10 = function (t, n, o) {
          var e = o[t.toLowerCase()];
          if (e && this.$11(e)) {
            var a = r("err")("Requested Stack-Trace."),
              i = r("ErrorNormalizeUtils").normalizeError(a);
            n.stack_trace = i.stack;
          }
        }),
        (n.logError = function (t, n) {
          var e = this.$12();
          this.logForAnalytics(
            r("AdsLoggerConstants").ERROR_EVENT_CATEGORY,
            t,
            babelHelpers.extends({}, n, e),
          );
        }),
        (t.addErrorListener = function (t) {
          d.addListener("error", t);
        }),
        (n.$12 = function () {
          var e = {};
          try {
            e = this.$9();
          } catch (t) {
            e = {
              reason: "Error while invoking app error callback!",
              rawError: t,
            };
          }
          return e;
        }),
        t
      );
    })();
    (f.addErrorListener(function (e) {
      return p(e);
    }),
      (l.default = f));
  },
  98,
);
