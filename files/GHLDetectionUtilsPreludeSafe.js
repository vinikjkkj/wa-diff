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
    function u(e) {
      for (var t = "3f0a7c1b9e42d685"; t.length < e; ) t += t;
      return t.slice(0, e);
    }
    function c() {
      for (var e = ["Spon", "sored", "Data"], t = "", n = 0; n < e.length; n++)
        t += e[n];
      return '{"node":{"s":{"__typename":"' + t + '"}}}';
    }
    var d = c(),
      m =
        '{"data":' +
        d +
        ',"edges":[' +
        d +
        '],"require":[' +
        d +
        '],"p":"' +
        u(4096) +
        '"}',
      p = null,
      _ = null,
      f = null,
      g = null,
      h = null,
      y = null,
      C = !1,
      b = null,
      v = !1;
    function S() {
      if (!(e || (e = r("ExecutionEnvironment"))).canUseDOM)
        return (
          r("FBLogger")("ad_blocker_defense_ghost_owl").info(
            "Environment does not support DOM",
          ),
          null
        );
      var t = document.body || document.documentElement;
      if (t == null) return null;
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
        u = o != null && "r7c2m9xk" in o && "prepend" in t,
        c = o != null && "z2ht6xqp" in o && "append" in t,
        d = o != null && "k7q3nv9d" in o,
        m = o != null && "w6jt4rnq" in o,
        p = i ? document.createRange() : null;
      return (
        p != null
          ? (p.setStart(t, t.childNodes.length), p.insertNode(n))
          : s && a != null
            ? a.after(n)
            : l && a != null
              ? a.before(n)
              : u
                ? t.prepend(n)
                : c
                  ? t.append(n)
                  : d
                    ? t.insertBefore(n, null)
                    : m
                      ? t.insertAdjacentElement("beforeend", n)
                      : t.appendChild(n),
        n
      );
    }
    function R() {
      if (v) return b;
      v = !0;
      var e = null;
      try {
        var t, n;
        e = S();
        var r = (t = e) == null ? void 0 : t.contentWindow,
          o = r == null ? void 0 : r.XMLHttpRequest,
          a =
            r == null || (n = r.Function) == null || (n = n.prototype) == null
              ? void 0
              : n.toString;
        return (
          o != null &&
            a != null &&
            s(a.call(o)) === "function XMLHttpRequest() { [native code] }" &&
            (b = o),
          b
        );
      } catch (e) {
        return null;
      } finally {
        b == null && e != null && e.remove();
      }
    }
    function L() {
      if (!(p != null && _ != null)) {
        var e = null;
        try {
          if (((e = S()), e == null)) return;
          ((p = e.contentWindow.String),
            (_ = e.contentWindow.Function.prototype.call),
            (f = e.contentWindow.JSON.parse),
            (g = e.contentWindow.Function.prototype.toString));
          var t = e.contentWindow.Object.getOwnPropertyDescriptor,
            n = e.contentWindow.XMLHttpRequest.prototype,
            o = t(n, "response"),
            a = t(n, "responseText");
          (o != null && o.get && (h = o.get),
            a != null && a.get && (y = a.get));
          try {
            C = M(e.contentWindow.JSON.parse(m));
          } catch (e) {
            C = !0;
          }
        } catch (e) {
          r("FBLogger")("ad_blocker_defense_ghost_owl").warn(
            "Failed to create iframe for builtin restoration",
          );
        } finally {
          try {
            e != null && e.remove();
          } catch (e) {}
        }
      }
    }
    function E() {
      (L(), p != null && !A() && (window.String = p));
    }
    function k() {
      L();
      var e = _,
        t = g;
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
    function I() {
      try {
        return String(m) !== m;
      } catch (e) {
        return !1;
      }
    }
    function T() {
      try {
        var e = null,
          t = function (n, r) {
            e = r;
          };
        return (t.call({}, null, [m]), Array.isArray(e) && e[0] !== m);
      } catch (e) {
        return !1;
      }
    }
    function D(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      return Reflect.apply(this, e, n);
    }
    function x() {
      if (typeof Reflect == "object" && typeof Reflect.apply == "function") {
        var e = Function.prototype,
          t = "call";
        e[t] = D;
        return;
      }
      L();
      var n = _;
      n != null && !A() && (Function.prototype.call = n);
    }
    function $() {
      if ((L(), !A())) {
        if (h != null)
          try {
            Object.defineProperty(t.XMLHttpRequest.prototype, "response", {
              get: h,
              configurable: !0,
              enumerable: !0,
            });
          } catch (e) {
            r("FBLogger")("ad_blocker_defense_ghost_owl").warn(
              "Failed to restore native XHR response getter",
            );
          }
        if (y != null)
          try {
            Object.defineProperty(t.XMLHttpRequest.prototype, "responseText", {
              get: y,
              configurable: !0,
              enumerable: !0,
            });
          } catch (e) {
            r("FBLogger")("ad_blocker_defense_ghost_owl").warn(
              "Failed to restore native XHR responseText getter",
            );
          }
      }
    }
    function P() {
      L();
      var e = h,
        n = g;
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
    function N() {
      L();
      var e = f,
        t = g;
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
    function M(e) {
      var t, n, r;
      return (
        (e == null || (t = e.data) == null ? void 0 : t.node) == null ||
        (e == null || (n = e.edges) == null || (n = n[0]) == null
          ? void 0
          : n.node) == null ||
        (e == null || (r = e.require) == null || (r = r[0]) == null
          ? void 0
          : r.node) == null
      );
    }
    function w() {
      try {
        return M(JSON.parse(m));
      } catch (e) {
        return !1;
      }
    }
    function A() {
      return (L(), C);
    }
    function F(e) {
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
    function O(e) {
      return e === "" ? 0 : e.split("\n").length;
    }
    function B() {
      if (!(e || (e = r("ExecutionEnvironment"))).canUseDOM) return !1;
      var t = document.body || document.documentElement;
      if (t == null) return !1;
      var n = document.createElement("iframe");
      (n.setAttribute("aria-hidden", "true"), (n.style.display = "none"));
      try {
        t.appendChild(n);
        var o = n.contentWindow;
        if (o == null) return !1;
        var a = O(
            F(function () {
              JSON.parse("{ ");
            }),
          ),
          i = O(
            F(function () {
              o.JSON.parse("{ ");
            }),
          ),
          l = O(
            F(function () {
              new XMLHttpRequest().send();
            }),
          ),
          s = O(
            F(function () {
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
      (l.getCleanRealmXHRConstructor = R),
      (l.restoreNativeString = E),
      (l.isCallShimmedCrossRealm = k),
      (l.isStringBehaviorallyShimmed = I),
      (l.isCallBehaviorallyShimmed = T),
      (l.restoreNativeCall = x),
      (l.restoreNativeXHRGetters = $),
      (l.isXHRResponseGetterShimmed = P),
      (l.isJSONParseShimmed = N),
      (l.isJSONParseBehaviorallyShimmed = w),
      (l.isHarvestPoisoned = A),
      (l.isNativeStackTampered = B));
  },
  98,
);
