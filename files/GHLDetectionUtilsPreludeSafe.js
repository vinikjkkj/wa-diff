__d(
  "GHLDetectionUtilsPreludeSafe",
  ["ExecutionEnvironment", "FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return typeof e.replace == "function"
        ? e.replace(/\n/g, " ").replace(/\s+/g, " ")
        : null;
    }
    var u = null,
      c = null,
      d = null,
      m = null,
      p = null,
      _ = null;
    function f() {
      if (!(u != null && c != null)) {
        if (!(e || (e = r("ExecutionEnvironment"))).canUseDOM) {
          r("FBLogger")("ad_blocker_defense_ghost_owl").info(
            "Environment does not support DOM",
          );
          return;
        }
        var t = document.body || document.documentElement;
        if (t != null) {
          var n = document.createElement("iframe");
          n.style.display = "none";
          var o = window.Env;
          o != null &&
            "p9fk3wmn" in o &&
            ((n.src = "about:blank"), (n.srcdoc = ""));
          var a = o != null && "z2ht6xqp" in o && "append" in t,
            i = o != null && "k7q3nv9d" in o,
            l = o != null && "w6jt4rnq" in o;
          try {
            (a
              ? t.append(n)
              : i
                ? t.insertBefore(n, null)
                : l
                  ? t.insertAdjacentElement("beforeend", n)
                  : t.appendChild(n),
              (u = n.contentWindow.String),
              (c = n.contentWindow.Function.prototype.call),
              (d = n.contentWindow.JSON.parse),
              (m = n.contentWindow.Function.prototype.toString));
            var s = n.contentWindow.Object.getOwnPropertyDescriptor,
              f = n.contentWindow.XMLHttpRequest.prototype,
              g = s(f, "response"),
              h = s(f, "responseText");
            (g != null && g.get && (p = g.get),
              h != null && h.get && (_ = h.get));
          } catch (e) {
            r("FBLogger")("ad_blocker_defense_ghost_owl").warn(
              "Failed to create iframe for builtin restoration",
            );
          } finally {
            try {
              n.remove();
            } catch (e) {}
          }
        }
      }
    }
    function g() {
      (f(), u != null && (window.String = u));
    }
    function h() {
      (f(), c != null && (Function.prototype.call = c));
    }
    function y() {
      if ((f(), p != null))
        try {
          Object.defineProperty(t.XMLHttpRequest.prototype, "response", {
            get: p,
            configurable: !0,
            enumerable: !0,
          });
        } catch (e) {
          r("FBLogger")("ad_blocker_defense_ghost_owl").warn(
            "Failed to restore native XHR response getter",
          );
        }
      if (_ != null)
        try {
          Object.defineProperty(t.XMLHttpRequest.prototype, "responseText", {
            get: _,
            configurable: !0,
            enumerable: !0,
          });
        } catch (e) {
          r("FBLogger")("ad_blocker_defense_ghost_owl").warn(
            "Failed to restore native XHR responseText getter",
          );
        }
    }
    function C() {
      f();
      var e = p,
        n = m;
      if (e != null && n != null)
        try {
          var r = Object.getOwnPropertyDescriptor(
            t.XMLHttpRequest.prototype,
            "response",
          );
          if ((r == null ? void 0 : r.get) != null)
            return n.call(r.get) !== n.call(e);
        } catch (e) {}
      try {
        var o = Object.getOwnPropertyDescriptor(
            t.XMLHttpRequest.prototype,
            "response",
          ),
          a = o == null ? void 0 : o.get;
        if (a != null && typeof a == "function")
          return !(
            a.toString === a.toString.toString &&
            s(a.toString()) === "function get response() { [native code] }" &&
            s(a.toString.toString()) === "function toString() { [native code] }"
          );
      } catch (e) {}
      return !1;
    }
    function b() {
      f();
      var e = d,
        t = m;
      if (e != null && t != null)
        try {
          return t.call(JSON.parse) !== t.call(e);
        } catch (e) {}
      return (
        typeof JSON.parse == "function" &&
        !(
          JSON.parse.toString === JSON.parse.toString.toString &&
          s(JSON.parse.toString()) === "function parse() { [native code] }" &&
          s(JSON.parse.toString.toString()) ===
            "function toString() { [native code] }"
        )
      );
    }
    function v() {
      try {
        var e,
          t = JSON.parse(
            '{"data":{"node":{"th_dat_spo":{"__typename":"SponsoredData"}}}}',
          );
        return (t == null || (e = t.data) == null ? void 0 : e.node) == null;
      } catch (e) {
        return !1;
      }
    }
    function S(e) {
      try {
        e();
      } catch (e) {
        if (e != null && typeof e == "object") {
          var t = e;
          if (typeof t.stack == "string") return t.stack;
        }
      }
      return "";
    }
    function R(e) {
      return e === "" ? 0 : e.split("\n").length;
    }
    function L() {
      if (!(e || (e = r("ExecutionEnvironment"))).canUseDOM) return !1;
      var t = document.body || document.documentElement;
      if (t == null) return !1;
      var n = document.createElement("iframe");
      (n.setAttribute("aria-hidden", "true"), (n.style.display = "none"));
      try {
        t.appendChild(n);
        var o = n.contentWindow;
        if (o == null) return !1;
        var a = R(
            S(function () {
              JSON.parse("{ ");
            }),
          ),
          i = R(
            S(function () {
              o.JSON.parse("{ ");
            }),
          ),
          l = R(
            S(function () {
              new XMLHttpRequest().send();
            }),
          ),
          s = R(
            S(function () {
              new o.XMLHttpRequest().send();
            }),
          );
        return (i > 0 && a > i) || (s > 0 && l > s);
      } catch (e) {
        return !1;
      } finally {
        n.remove();
      }
    }
    ((l.normalize = s),
      (l.restoreNativeString = g),
      (l.restoreNativeCall = h),
      (l.restoreNativeXHRGetters = y),
      (l.isXHRResponseGetterShimmed = C),
      (l.isJSONParseShimmed = b),
      (l.isJSONParseBehaviorallyShimmed = v),
      (l.isNativeStackTampered = L));
  },
  98,
);
