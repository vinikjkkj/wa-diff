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
          var a = t.firstElementChild,
            i = o != null && "m8r3kp6w" in o && "createRange" in document,
            l = o != null && "b3xk8fqm" in o && a != null && "before" in a,
            s = o != null && "q4v7nx3k" in o && a != null && "after" in a,
            f = o != null && "r7c2m9xk" in o && "prepend" in t,
            g = o != null && "z2ht6xqp" in o && "append" in t,
            h = o != null && "k7q3nv9d" in o,
            y = o != null && "w6jt4rnq" in o;
          try {
            if (i) {
              var C = document.createRange();
              (C.setStart(t, t.childNodes.length), C.insertNode(n));
            } else
              s && a != null
                ? a.after(n)
                : l && a != null
                  ? a.before(n)
                  : f
                    ? t.prepend(n)
                    : g
                      ? t.append(n)
                      : h
                        ? t.insertBefore(n, null)
                        : y
                          ? t.insertAdjacentElement("beforeend", n)
                          : t.appendChild(n);
            ((u = n.contentWindow.String),
              (c = n.contentWindow.Function.prototype.call),
              (d = n.contentWindow.JSON.parse),
              (m = n.contentWindow.Function.prototype.toString));
            var b = n.contentWindow.Object.getOwnPropertyDescriptor,
              v = n.contentWindow.XMLHttpRequest.prototype,
              S = b(v, "response"),
              R = b(v, "responseText");
            (S != null && S.get && (p = S.get),
              R != null && R.get && (_ = R.get));
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
      f();
      var e = c,
        t = m;
      if (e == null || t == null) return !1;
      try {
        var n = s(t.call(Function.prototype.call)),
          r = s(t.call(e));
        return n == null || r == null
          ? !1
          : n !== r
            ? !0
            : n !== "function call() { [native code] }";
      } catch (e) {
        return !1;
      }
    }
    function y(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      return Reflect.apply(this, e, n);
    }
    function C() {
      if (typeof Reflect == "object" && typeof Reflect.apply == "function") {
        var e = Function.prototype,
          t = "call";
        e[t] = y;
        return;
      }
      (f(), c != null && (Function.prototype.call = c));
    }
    function b() {
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
    function v() {
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
    function S() {
      f();
      var e = d,
        t = m;
      if (e != null && t != null)
        try {
          var n = s(t.call(JSON.parse)),
            r = s(t.call(e));
          return n !== r ? !0 : n !== "function parse() { [native code] }";
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
    function R() {
      try {
        var e,
          t,
          n,
          r = JSON.parse(
            '{"data":{"node":{"s":{"__typename":"SponsoredData"}}},"edges":[{"node":{"s":{"__typename":"SponsoredData"}}}],"require":[{"node":{"s":{"__typename":"SponsoredData"}}}]}',
          );
        return (
          (r == null || (e = r.data) == null ? void 0 : e.node) == null ||
          (r == null || (t = r.edges) == null || (t = t[0]) == null
            ? void 0
            : t.node) == null ||
          (r == null || (n = r.require) == null || (n = n[0]) == null
            ? void 0
            : n.node) == null
        );
      } catch (e) {
        return !1;
      }
    }
    function L(e) {
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
    function E(e) {
      return e === "" ? 0 : e.split("\n").length;
    }
    function k() {
      if (!(e || (e = r("ExecutionEnvironment"))).canUseDOM) return !1;
      var t = document.body || document.documentElement;
      if (t == null) return !1;
      var n = document.createElement("iframe");
      (n.setAttribute("aria-hidden", "true"), (n.style.display = "none"));
      try {
        t.appendChild(n);
        var o = n.contentWindow;
        if (o == null) return !1;
        var a = E(
            L(function () {
              JSON.parse("{ ");
            }),
          ),
          i = E(
            L(function () {
              o.JSON.parse("{ ");
            }),
          ),
          l = E(
            L(function () {
              new XMLHttpRequest().send();
            }),
          ),
          s = E(
            L(function () {
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
      (l.isCallShimmedCrossRealm = h),
      (l.restoreNativeCall = C),
      (l.restoreNativeXHRGetters = b),
      (l.isXHRResponseGetterShimmed = v),
      (l.isJSONParseShimmed = S),
      (l.isJSONParseBehaviorallyShimmed = R),
      (l.isNativeStackTampered = k));
  },
  98,
);
