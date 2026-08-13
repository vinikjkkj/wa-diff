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
      for (var t = "0123456789abcdef"; t.length < e; ) t += t;
      return t.slice(0, e);
    }
    var c =
        '{"data":{"node":{"s":{"__typename":"SponsoredData"}}},"edges":[{"node":{"s":{"__typename":"SponsoredData"}}}],"require":[{"node":{"s":{"__typename":"SponsoredData"}}}],"p":"' +
        u(4096) +
        '"}',
      d = null,
      m = null,
      p = null,
      _ = null,
      f = null,
      g = null,
      h = !1;
    function y() {
      if (!(d != null && m != null)) {
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
            u = o != null && "r7c2m9xk" in o && "prepend" in t,
            y = o != null && "z2ht6xqp" in o && "append" in t,
            C = o != null && "k7q3nv9d" in o,
            b = o != null && "w6jt4rnq" in o;
          try {
            if (i) {
              var v = document.createRange();
              (v.setStart(t, t.childNodes.length), v.insertNode(n));
            } else
              s && a != null
                ? a.after(n)
                : l && a != null
                  ? a.before(n)
                  : u
                    ? t.prepend(n)
                    : y
                      ? t.append(n)
                      : C
                        ? t.insertBefore(n, null)
                        : b
                          ? t.insertAdjacentElement("beforeend", n)
                          : t.appendChild(n);
            ((d = n.contentWindow.String),
              (m = n.contentWindow.Function.prototype.call),
              (p = n.contentWindow.JSON.parse),
              (_ = n.contentWindow.Function.prototype.toString));
            var S = n.contentWindow.Object.getOwnPropertyDescriptor,
              R = n.contentWindow.XMLHttpRequest.prototype,
              L = S(R, "response"),
              E = S(R, "responseText");
            (L != null && L.get && (f = L.get),
              E != null && E.get && (g = E.get));
            try {
              h = T(n.contentWindow.JSON.parse(c));
            } catch (e) {
              h = !0;
            }
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
    function C() {
      (y(), d != null && !x() && (window.String = d));
    }
    function b() {
      y();
      var e = m,
        t = _;
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
    function v() {
      try {
        return String(c) !== c;
      } catch (e) {
        return !1;
      }
    }
    function S() {
      try {
        var e = null,
          t = function (n, r) {
            e = r;
          };
        return (t.call({}, null, [c]), Array.isArray(e) && e[0] !== c);
      } catch (e) {
        return !1;
      }
    }
    function R(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      return Reflect.apply(this, e, n);
    }
    function L() {
      if (typeof Reflect == "object" && typeof Reflect.apply == "function") {
        var e = Function.prototype,
          t = "call";
        e[t] = R;
        return;
      }
      y();
      var n = m;
      n != null && !x() && (Function.prototype.call = n);
    }
    function E() {
      if ((y(), !x())) {
        if (f != null)
          try {
            Object.defineProperty(t.XMLHttpRequest.prototype, "response", {
              get: f,
              configurable: !0,
              enumerable: !0,
            });
          } catch (e) {
            r("FBLogger")("ad_blocker_defense_ghost_owl").warn(
              "Failed to restore native XHR response getter",
            );
          }
        if (g != null)
          try {
            Object.defineProperty(t.XMLHttpRequest.prototype, "responseText", {
              get: g,
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
    function k() {
      y();
      var e = f,
        n = _;
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
    function I() {
      y();
      var e = p,
        t = _;
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
    function T(e) {
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
    function D() {
      try {
        return T(JSON.parse(c));
      } catch (e) {
        return !1;
      }
    }
    function x() {
      return (y(), h);
    }
    function $(e) {
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
    function P(e) {
      return e === "" ? 0 : e.split("\n").length;
    }
    function N() {
      if (!(e || (e = r("ExecutionEnvironment"))).canUseDOM) return !1;
      var t = document.body || document.documentElement;
      if (t == null) return !1;
      var n = document.createElement("iframe");
      (n.setAttribute("aria-hidden", "true"), (n.style.display = "none"));
      try {
        t.appendChild(n);
        var o = n.contentWindow;
        if (o == null) return !1;
        var a = P(
            $(function () {
              JSON.parse("{ ");
            }),
          ),
          i = P(
            $(function () {
              o.JSON.parse("{ ");
            }),
          ),
          l = P(
            $(function () {
              new XMLHttpRequest().send();
            }),
          ),
          s = P(
            $(function () {
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
      (l.restoreNativeString = C),
      (l.isCallShimmedCrossRealm = b),
      (l.isStringBehaviorallyShimmed = v),
      (l.isCallBehaviorallyShimmed = S),
      (l.restoreNativeCall = L),
      (l.restoreNativeXHRGetters = E),
      (l.isXHRResponseGetterShimmed = k),
      (l.isJSONParseShimmed = I),
      (l.isJSONParseBehaviorallyShimmed = D),
      (l.isHarvestPoisoned = x),
      (l.isNativeStackTampered = N));
  },
  98,
);
