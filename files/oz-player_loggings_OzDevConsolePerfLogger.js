__d(
  "oz-player/loggings/OzDevConsolePerfLogger",
  [
    "oz-player/loggings/OzOperationLoggerBase",
    "oz-player/loggings/OzPerfLoggerProviderBase",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
      (e = console).debug.apply(e, ["[oz]"].concat(n));
    }
    function s() {
      for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
      (e = console).error.apply(e, ["[oz]"].concat(n));
    }
    function u(e, t) {
      return Math.floor(e).toString().padStart(t, "0");
    }
    function c(e, t) {
      t === void 0 && (t = null);
      var n = function (t) {
          return (
            u(t.getHours(), 2) +
            ":" +
            u(t.getMinutes(), 2) +
            ":" +
            u(t.getSeconds(), 2) +
            " " +
            u(t.getMilliseconds(), 3)
          );
        },
        r = t ? t.getTime() - e.getTime() : 0;
      return "[" + n(e) + (t ? " - " + n(t) : "") + " (" + r + " ms)]";
    }
    function d(t) {
      return t === "failed" ? s : e;
    }
    function m(e) {
      return e == null || e === 0 ? null : e.toFixed(2);
    }
    var p = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.createOperationLogger = function (t) {
            return new _(t);
          }),
          (n.createLoggerProvider = function () {
            return new t();
          }),
          t
        );
      })(r("oz-player/loggings/OzPerfLoggerProviderBase")),
      _ = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.log = function () {
            e.prototype.log.call(this);
            var t = this.getClientTimeBegin() || 0,
              n = this.getClientTimeEnd(),
              r = n != null && n !== 0 ? new Date(n) : null,
              o = this.getResult() || "success",
              a = this.getType(),
              i = this.getInitiator(),
              l = this.getResource(),
              s = m(this.getSegmentStartTime()),
              u = m(this.getSegmentEndTime());
            d(o)(
              "[" + o + "]",
              this.getOperationName() + ": " + c(new Date(t), r),
              a != null && a !== "" ? "[" + a + "]" : "",
              s != null && s !== "" && u != null && u !== ""
                ? "[segment time range: " + s + " - " + u + "]"
                : "",
              i || "",
              l || "",
            );
          }),
          t
        );
      })(r("oz-player/loggings/OzOperationLoggerBase"));
    ((l.OzDevConsolePerfLoggerProvider = p),
      (l.OzDevConsoleOperationLogger = _));
  },
  98,
);
