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
            this.$2 == null &&
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
              this.$2 != null &&
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
            if (this.storage && this.$2 == null) {
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
            var e,
              n = t != null ? t : this.$5,
              o = ((e = this.storage) == null ? void 0 : e.getItem(n)) || "{}",
              a;
            try {
              a = JSON.parse(o);
            } catch (e) {
              var i;
              ((a = {}),
                (i = this.storage) == null || i.removeItem(n),
                r("FBLogger")("bandicoot")
                  .catching(r("getErrorSafe")(e))
                  .warn("Invalid JSON data"));
            }
            return a;
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
              var o;
              (o = this.storage) == null || o.setItem(this.$5, t);
            } catch (t) {
              var a = this.$6,
                i = Date.now();
              (a == null || i > a + e) &&
                (this.logTrackingError(), (this.$6 = i));
              try {
                var l;
                (l = this.storage) == null || l.removeItem(this.$5);
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
            for (
              var e = 0;
              e <
              ((t = (n = this.storage) == null ? void 0 : n.length) != null
                ? t
                : 0);
              ++e
            ) {
              var t,
                n,
                r,
                a = (r = this.storage) == null ? void 0 : r.key(e);
              if (a != null && a.indexOf(c) === 0 && a !== this.$5) {
                var i = this.$8(a),
                  l = Object.keys(i).every(function (e) {
                    var t = i[e];
                    return (
                      !o("BandicootSession").isValidSession(t) ||
                      o("BandicootSession").isOrphanSession(t)
                    );
                  });
                if (l) {
                  var s;
                  (s = this.storage) == null || s.removeItem(a);
                }
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
