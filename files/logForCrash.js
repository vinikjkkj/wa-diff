__d(
  "logForCrash",
  [
    "BrowserCrashStaticConfig",
    "FBLogger",
    "JSErrorLoggingConfig",
    "Promise",
    "getErrorSafe",
    "gkx",
    "justknobx",
    "logForCrashUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      var e, t;
      return !(
        !("crashReport" in window) ||
        !R((e = window.crashReport) == null ? void 0 : e.set) ||
        !R((t = window.crashReport) == null ? void 0 : t.initialize)
      );
    }
    var u = s(),
      c = 28 * 1024,
      d = 50,
      m = "meta-crash-storage",
      p = !1,
      _ = [];
    function f() {
      var e = _.splice(0);
      for (var t of e) g(t);
    }
    function g(t) {
      try {
        var o = t();
        o instanceof (e || (e = n("Promise"))) &&
          o.catch(function (e) {
            r("FBLogger")("log-for-crash")
              .catching(r("getErrorSafe")(e))
              .warn("onLogForCrashReady callback failed");
          });
      } catch (e) {
        r("FBLogger")("log-for-crash")
          .catching(r("getErrorSafe")(e))
          .warn("onLogForCrashReady callback failed");
      }
    }
    function h() {
      !u || p || !r("justknobx")._("195") || !r("gkx")("207") || b(c);
    }
    function y() {
      ((p = !0), f());
    }
    function C(e) {
      return e == null
        ? !1
        : (e == null ? void 0 : e.message) ===
            "The requested size is too large.";
    }
    function b(e) {
      try {
        var t;
        (t = window.crashReport) == null ||
          (t = t.initialize(e)) == null ||
          (t = t.then(y)) == null ||
          t.catch(function (t) {
            if (C(t) && e >= d) {
              b(Math.floor(e / 2));
              return;
            }
            v();
          });
      } catch (e) {
        r("FBLogger")("log-for-crash")
          .catching(r("getErrorSafe")(e))
          .warn("Failed to initialize crash report storage");
      }
    }
    function v() {
      try {
        var e;
        (e = window.crashReport) == null ||
          (e = e.initialize(m)) == null ||
          (e = e.then(y)) == null ||
          e.catch(function (e) {
            (r("FBLogger")("log-for-crash")
              .catching(r("getErrorSafe")(e))
              .warn(
                "Failed to initialize crash report storage with name fallback",
              ),
              (p = !1));
          });
      } catch (e) {
        r("FBLogger")("log-for-crash")
          .catching(r("getErrorSafe")(e))
          .warn("Failed to initialize crash report storage with name fallback");
      }
    }
    h();
    function S(e) {
      return typeof e.replace == "function"
        ? e.replace(/\n/g, " ").replace(/\s+/g, " ")
        : null;
    }
    function R(e) {
      if (typeof e != "function" || typeof e.toString != "function") return !1;
      var t = S(e.toString());
      return t == null ? !1 : t.endsWith("{ [native code] }");
    }
    function L(e, t) {
      if (e.length <= t) return e;
      var n = e.length - t;
      return e.slice(0, t) + "...(" + n + " more)";
    }
    function E() {
      var e = r("BrowserCrashStaticConfig").LOGGING_SIZE_MAP_MAX_ENTRIES,
        t = r("BrowserCrashStaticConfig").LOGGING_SIZE_MAP_MAX_KEY_LENGTH,
        n = Array.from(x).sort(function (e, t) {
          return t[1] - e[1];
        }),
        o = n.length,
        a = n.reduce(function (e, t) {
          return e + t[1];
        }, 0),
        i = n.slice(0, e),
        l = i.map(function (e) {
          var n = e[0],
            r = e[1];
          return L(n, t) + ":" + r;
        }),
        s = l.join(",");
      return (
        o > e && (s += ",...(" + (o - e) + " more entries)"),
        (s += " [total: " + o + " entries, " + a + " bytes]"),
        s
      );
    }
    var k = 0x6c6c24b58878,
      I = o("JSErrorLoggingConfig").appId === k && r("gkx")("3981"),
      T = 0,
      D = !1,
      x = new Map(),
      $ = 0,
      P = 5,
      N = 0,
      M = 4,
      w = null;
    function A(e) {
      try {
        if (w === null) {
          var t, n;
          typeof ((t = window.crashReport) == null ? void 0 : t.remove) ==
          "function"
            ? (w = "remove")
            : typeof ((n = window.crashReport) == null ? void 0 : n.delete) ==
                "function"
              ? (w = "delete")
              : (w = "none");
        }
        w === "remove"
          ? (window.crashReport.remove(e), (T = 0))
          : w === "delete" && (window.crashReport.delete(e), (T = 0));
      } catch (t) {
        (++T > r("BrowserCrashStaticConfig").LOG_FOR_CRASH_MAX_FAIL_COUNT &&
          (D = !0),
          r("FBLogger")("log-for-crash")
            .catching(r("getErrorSafe")(t))
            .warn(
              "Failed to remove crash report storage for key: %s, logged entry sizes: %s",
              L(e, r("BrowserCrashStaticConfig").LOG_KEY_MAX_LENGTH),
              E(),
            ));
      }
    }
    function F(e, t, n) {
      if (
        (n === void 0 && (n = { isSystem: !1 }), !(D || !u || !p || t == null))
      ) {
        var o = typeof t == "object" ? W(t) : t.toString();
        if (o != null) {
          var a = n.isSystem === !0 ? e : "@" + e;
          n.isJSStackTrace === !0 &&
            (a = r("logForCrashUtils").RST_JS_STACK_KEY_PREFIX + ":" + a);
          try {
            var i;
            (A(a),
              x.set(a, o.length),
              (i = window.crashReport) == null || i.set(a, o),
              (T = 0));
          } catch (t) {
            (++T > r("BrowserCrashStaticConfig").LOG_FOR_CRASH_MAX_FAIL_COUNT &&
              (D = !0),
              (!I || N++ < M) &&
                r("FBLogger")("log-for-crash")
                  .catching(r("getErrorSafe")(t))
                  .warn(
                    "Failed to set crash report storage for key: %s, value: %s, logged entry sizes: %s",
                    L(e, r("BrowserCrashStaticConfig").LOG_KEY_MAX_LENGTH),
                    L(o, r("BrowserCrashStaticConfig").LOG_VALUE_MAX_LENGTH),
                    E(),
                  ));
          }
        }
      }
    }
    function O(e, t) {
      if ((t === void 0 && (t = { isSystem: !1 }), !(!u || !p || D))) {
        var n = t.isSystem === !0 ? e : "@" + e;
        t.isJSStackTrace === !0 &&
          (n = r("logForCrashUtils").RST_JS_STACK_KEY_PREFIX + ":" + n);
        try {
          A(n);
        } catch (t) {
          (I ? N++ < M : $++ < P) &&
            r("FBLogger")("log-for-crash")
              .catching(r("getErrorSafe")(t))
              .warn("Failed to clear crash report storage for key: %s", e);
        }
      }
    }
    function B(e) {
      if (p) {
        g(e);
        return;
      }
      _.push(e);
    }
    function W(e) {
      try {
        return JSON.stringify(e);
      } catch (e) {
        return (
          r("FBLogger")("log-for-crash").warn(
            "Failed to stringify object for browser crash storage",
          ),
          null
        );
      }
    }
    ((l.logForCrash = F), (l.clearCrashLog = O), (l.onLogForCrashReady = B));
  },
  98,
);
