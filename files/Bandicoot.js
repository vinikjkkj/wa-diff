__d(
  "Bandicoot",
  ["invariant", "BandicootSession", "FBLogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 5e3,
      u = e * 2,
      c = "Bandicoot:";
    function d() {
      try {
        var e = window.localStorage;
        if (e) {
          var t = "__test" + Date.now();
          (e.setItem(t, ""), e.removeItem(t));
        }
        return e;
      } catch (e) {
        return (r("FBLogger")("bandicoot").warn("Local storage is full"), null);
      }
    }
    var m = d(),
      p = (function () {
        function t(e) {
          var t = this;
          ((this.$5 = c + e),
            (this.$4 = {}),
            (this.$1 = function () {
              t.$7();
            }),
            (this.sessionID = null),
            (this.sessionStartTime = null),
            (this.storage = m));
        }
        var n = t.prototype;
        return (
          (n.getCrashTimeData = function () {
            var e,
              t,
              n =
                (e = (t = window.performance) == null ? void 0 : t.memory) !=
                null
                  ? e
                  : {},
              r = this.sessionStartTime;
            return {
              duration: r != null ? Date.now() - r : 0,
              tabs: Object.keys(this.$8()).length,
              jsHeapSizeLimit: n.jsHeapSizeLimit,
              totalJSHeapSize: n.totalJSHeapSize,
              usedJSHeapSize: n.usedJSHeapSize,
              elementsInDOM: document.getElementsByTagName("*").length,
              uri: window.location.href,
            };
          }),
          (n.getLogTimeData = function () {
            return { userAgent: window.navigator.userAgent };
          }),
          (n.logCrash = function (t, n, o) {
            r("FBLogger")("bandicoot").warn("Session %s crashed at %s", t, o);
          }),
          (n.logBrowserUnsupported = function () {
            r("FBLogger")("bandicoot").warn("Browser not supported");
          }),
          (n.logTrackingError = function () {
            r("FBLogger")("bandicoot").warn(
              "Failed to record data for current session",
            );
          }),
          (n.startSession = function () {
            var t = this;
            if (!this.storage) {
              this.logBrowserUnsupported();
              return;
            }
            this.$2 ||
              ((this.sessionID == null || this.sessionID === "") &&
                (this.sessionID = Math.random().toString(36).slice(2, 9)),
              this.sessionStartTime == null &&
                (this.sessionStartTime = Date.now()),
              (this.$2 = setInterval(function () {
                t.$9();
              }, e)),
              this.$9(),
              document.addEventListener &&
                document.addEventListener("visibilitychange", this.$1),
              this.$10());
          }),
          (n.endSession = function () {
            this.storage &&
              this.$2 &&
              (clearInterval(this.$2),
              (this.$2 = null),
              this.$3 !== !0 &&
                this.$11({ status: o("BandicootSession").Status.CLOSED }),
              (this.sessionID = null),
              (this.sessionStartTime = null),
              document.removeEventListener &&
                document.removeEventListener("visibilitychange", this.$1));
          }),
          (n.logKnownCrashes = function () {
            var e = this;
            if (this.storage && !this.$2) {
              var t = this.$8();
              ((t = this.$12(t, function (t, n) {
                return o("BandicootSession").isCrashedSession(t)
                  ? (e.logCrash(n, t, e.getLogTimeData()), null)
                  : t;
              })),
                this.$13(t));
            }
          }),
          (n.$14 = function () {
            var e = this.sessionID;
            return ((e != null && e !== "") || s(0, 663), e);
          }),
          (n.$9 = function () {
            var e = this.$8();
            (this.$15(e), (e = this.$16(e)), this.$13(e));
          }),
          (n.$15 = function (t) {
            var e = this.$14(),
              n = t[e] ? t[e] : {};
            t[e] = babelHelpers.extends({}, n, this.getCrashTimeData(), {
              lastUpdated: Date.now(),
              status: this.$17(),
            });
          }),
          (n.$12 = function (t, n) {
            var e = {};
            return (
              Object.keys(t).forEach(function (r) {
                var a = t[r];
                if (
                  o("BandicootSession").isValidSession(a) &&
                  o("BandicootSession").isTrackedSession(a) &&
                  !o("BandicootSession").isOrphanSession(a)
                ) {
                  var i = n(a, r);
                  i && (e[r] = i);
                }
              }),
              e
            );
          }),
          (n.$16 = function (t) {
            var e = this;
            return this.$12(t, function (t, n) {
              if (o("BandicootSession").isCrashedSession(t)) {
                var r = t.loggerReportTime || 0;
                if (Date.now() - r > u)
                  ((t.loggerReportTime = Date.now()),
                    (t.loggerReportSession = e.$14()));
                else if (t.loggerReportSession == e.$14())
                  return (
                    e.logCrash(n, t, e.getLogTimeData()),
                    (e.$4[n] = !0),
                    null
                  );
              }
              return t;
            });
          }),
          (n.$8 = function (t) {
            var e = t != null ? t : this.$5,
              n = this.storage.getItem(e) || "{}";
            try {
              n = JSON.parse(n);
            } catch (t) {
              ((n = {}),
                this.storage.removeItem(e),
                r("FBLogger")("bandicoot")
                  .catching(r("getErrorSafe")(t))
                  .warn("Invalid JSON data"));
            }
            return n;
          }),
          (n.$11 = function (t) {
            t.lastUpdated = Date.now();
            var e = this.$8(),
              n = this.sessionID;
            n != null &&
              n !== "" &&
              e[n] &&
              ((e[n] = babelHelpers.extends({}, e[n], t)), this.$13(e));
          }),
          (n.$13 = function (n) {
            var t = JSON.stringify(n);
            try {
              this.storage.setItem(this.$5, t);
            } catch (t) {
              var o = this.$6,
                a = Date.now();
              (o == null || a > o + e) &&
                (this.logTrackingError(), (this.$6 = a));
              try {
                this.storage.removeItem(this.$5);
              } catch (e) {
                ((this.$3 = !0),
                  this.endSession(),
                  r("FBLogger")("bandicoot")
                    .catching(r("getErrorSafe")(e))
                    .warn("Removing from storage failed"));
              }
            }
          }),
          (n.$10 = function () {
            for (var e = 0; e < this.storage.length; ++e) {
              var t = this.storage.key(e);
              if (t.indexOf(c) === 0 && t !== this.$5) {
                var n = this.$8(t),
                  r = Object.keys(n).every(function (e) {
                    var t = n[e];
                    return (
                      !o("BandicootSession").isValidSession(t) ||
                      o("BandicootSession").isOrphanSession(t)
                    );
                  });
                r && this.storage.removeItem(t);
              }
            }
          }),
          (n.$7 = function () {
            this.$11({ status: this.$17() });
          }),
          (n.$17 = function () {
            return document.hidden
              ? o("BandicootSession").Status.INACTIVE
              : o("BandicootSession").Status.ACTIVE;
          }),
          t
        );
      })();
    l.default = p;
  },
  98,
);
