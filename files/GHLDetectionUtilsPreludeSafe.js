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
      v = !1,
      S = !1;
    function R() {
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
      var o = window.Env,
        a = o != null && "h4npx7qw" in o;
      ((S = a),
        a
          ? (n.src = "about:blank#g")
          : o != null &&
            "p9fk3wmn" in o &&
            ((n.src = "about:blank"), (n.srcdoc = "")));
      var i = t.firstElementChild,
        l = o != null && "m8r3kp6w" in o && "createRange" in document,
        s = o != null && "b3xk8fqm" in o && i != null && "before" in i,
        u = o != null && "q4v7nx3k" in o && i != null && "after" in i,
        c = o != null && "r7c2m9xk" in o && "prepend" in t,
        d = o != null && "z2ht6xqp" in o && "append" in t,
        m = o != null && "k7q3nv9d" in o,
        p = o != null && "w6jt4rnq" in o,
        _ = l ? document.createRange() : null;
      return (
        _ != null
          ? (_.setStart(t, t.childNodes.length), _.insertNode(n))
          : u && i != null
            ? i.after(n)
            : s && i != null
              ? i.before(n)
              : c
                ? t.prepend(n)
                : d
                  ? t.append(n)
                  : m
                    ? t.insertBefore(n, null)
                    : p
                      ? t.insertAdjacentElement("beforeend", n)
                      : t.appendChild(n),
        n
      );
    }
    function L() {
      if (v) return b;
      v = !0;
      var e = null;
      try {
        var t, n;
        e = R();
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
    function E() {
      if (!(p != null && _ != null)) {
        var e = null;
        try {
          if (((e = R()), e == null)) return;
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
            C = w(e.contentWindow.JSON.parse(m));
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
    function k() {
      (E(), p != null && !F() && (window.String = p));
    }
    function I() {
      E();
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
    function T() {
      try {
        return String(m) !== m;
      } catch (e) {
        return !1;
      }
    }
    function D() {
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
    function x(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      return Reflect.apply(this, e, n);
    }
    function $() {
      if (typeof Reflect == "object" && typeof Reflect.apply == "function") {
        var e = Function.prototype,
          t = "call";
        e[t] = x;
        return;
      }
      E();
      var n = _;
      n != null && !F() && (Function.prototype.call = n);
    }
    function P() {
      if ((E(), !F())) {
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
    function N() {
      E();
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
    function M() {
      E();
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
    function w(e) {
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
    function A() {
      try {
        return w(JSON.parse(m));
      } catch (e) {
        return !1;
      }
    }
    function F() {
      return (E(), C);
    }
    function O() {
      return (E(), !S || C ? null : f);
    }
    function B(e) {
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
    function W(e) {
      return e === "" ? 0 : e.split("\n").length;
    }
    function q() {
      if (!(e || (e = r("ExecutionEnvironment"))).canUseDOM) return !1;
      var t = document.body || document.documentElement;
      if (t == null) return !1;
      var n = document.createElement("iframe");
      (n.setAttribute("aria-hidden", "true"), (n.style.display = "none"));
      try {
        t.appendChild(n);
        var o = n.contentWindow;
        if (o == null) return !1;
        var a = W(
            B(function () {
              JSON.parse("{ ");
            }),
          ),
          i = W(
            B(function () {
              o.JSON.parse("{ ");
            }),
          ),
          l = W(
            B(function () {
              new XMLHttpRequest().send();
            }),
          ),
          s = W(
            B(function () {
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
      (l.getCleanRealmXHRConstructor = L),
      (l.restoreNativeString = k),
      (l.isCallShimmedCrossRealm = I),
      (l.isStringBehaviorallyShimmed = T),
      (l.isCallBehaviorallyShimmed = D),
      (l.restoreNativeCall = $),
      (l.restoreNativeXHRGetters = P),
      (l.isXHRResponseGetterShimmed = N),
      (l.isJSONParseShimmed = M),
      (l.isJSONParseBehaviorallyShimmed = A),
      (l.isHarvestPoisoned = F),
      (l.getCleanJSONParse = O),
      (l.isNativeStackTampered = q));
  },
  98,
);
