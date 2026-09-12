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
        u(4095) +
        '","extensions":{}}',
      p = null,
      _ = null,
      f = null,
      g = null,
      h = null,
      y = null,
      C = !1,
      b = null,
      v = !1,
      S = !1,
      R = null;
    function L(e) {
      (e != null && e.remove(), R != null && (R.remove(), (R = null)));
    }
    function E() {
      if (((R = null), !(e || (e = r("ExecutionEnvironment"))).canUseDOM))
        return (
          r("FBLogger")("ad_blocker_defense_ghost_owl").info(
            "Environment does not support DOM",
          ),
          null
        );
      var t = window.Env,
        n = t != null && "n4kd7pqz" in t,
        o;
      if (n) {
        var a;
        o = (a = document.body) != null ? a : document.documentElement;
      } else o = document.body || document.documentElement;
      if (o == null) return null;
      var i = document.createElement("iframe");
      i.style.display = "none";
      var l = t != null && "h4npx7qw" in t;
      ((S = l),
        l
          ? (i.src = "about:blank#g")
          : t != null &&
            "p9fk3wmn" in t &&
            ((i.src = "about:blank"), (i.srcdoc = "")));
      var s = o.firstElementChild,
        u = t != null && "t5nd8vqc" in t && "createComment" in document,
        c = t != null && "m8r3kp6w" in t && "createRange" in document,
        d = t != null && "b3xk8fqm" in t && s != null && "before" in s,
        m = t != null && "q4v7nx3k" in t && s != null && "after" in s,
        p = t != null && "r7c2m9xk" in t && "prepend" in o,
        _ = t != null && "z2ht6xqp" in t && "append" in o,
        f = t != null && "k7q3nv9d" in t,
        g = t != null && "w6jt4rnq" in t,
        h = t != null && "w8kq3zmt" in t && "replaceChild" in o,
        y = t != null && "b7xr2qnf" in t && "replaceChildren" in o,
        C = y ? document.createElement("div") : null,
        b = h ? document.createElement("span") : null,
        v = u ? document.createComment("") : null,
        L = c ? document.createRange() : null;
      return (
        C != null
          ? ((C.style.display = "none"),
            o.appendChild(C),
            C.replaceChildren(i),
            (R = C))
          : b != null
            ? (o.appendChild(b), o.replaceChild(i, b))
            : v != null && "replaceWith" in v
              ? (o.appendChild(v), v.replaceWith(i))
              : L != null
                ? (L.setStart(o, o.childNodes.length), L.insertNode(i))
                : m && s != null
                  ? s.after(i)
                  : d && s != null
                    ? s.before(i)
                    : p
                      ? o.prepend(i)
                      : _
                        ? o.append(i)
                        : f
                          ? o.insertBefore(i, null)
                          : g
                            ? o.insertAdjacentElement("beforeend", i)
                            : o.appendChild(i),
        i
      );
    }
    function k() {
      if (v) return b;
      v = !0;
      var e = null;
      try {
        var t, n;
        e = E();
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
        b == null && L(e);
      }
    }
    function I() {
      if (!(p != null && _ != null)) {
        var e = null;
        try {
          if (((e = E()), e == null)) return;
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
            C = F(e.contentWindow.JSON.parse(m));
          } catch (e) {
            C = !0;
          }
        } catch (e) {
          r("FBLogger")("ad_blocker_defense_ghost_owl").warn(
            "Failed to create iframe for builtin restoration",
          );
        } finally {
          try {
            L(e);
          } catch (e) {}
        }
      }
    }
    function T() {
      (I(), p != null && !U() && (window.String = p));
    }
    function D() {
      I();
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
    function x() {
      try {
        return String(m) !== m;
      } catch (e) {
        return !1;
      }
    }
    function $() {
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
    function P(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      return Reflect.apply(this, e, n);
    }
    function N() {
      if (typeof Reflect == "object" && typeof Reflect.apply == "function") {
        var e = Function.prototype,
          t = "call";
        e[t] = P;
        return;
      }
      I();
      var n = _;
      n != null && !U() && (Function.prototype.call = n);
    }
    function M() {
      if ((I(), !U())) {
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
    function w() {
      I();
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
    function A() {
      I();
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
    function F(e) {
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
    function O() {
      try {
        return F(JSON.parse(m));
      } catch (e) {
        return !1;
      }
    }
    function B(e, t) {
      try {
        var n = JSON.parse(e);
        return n != null && !F(n[t]);
      } catch (e) {
        return !1;
      }
    }
    function W() {
      return B('{"q7z":' + m + "}", "q7z");
    }
    function q() {
      return B("[" + m + "]", 0);
    }
    function U() {
      return (I(), C);
    }
    function V() {
      return (I(), !S || C ? null : f);
    }
    function H(e) {
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
    var G =
      /chrome-extension:\/\/|moz-extension:\/\/|safari-web-extension:\/\/|<anonymous>:\d/;
    function z() {
      if (!(e || (e = r("ExecutionEnvironment"))).canUseDOM) return !1;
      var t = document.body || document.documentElement;
      if (t == null) return !1;
      var n = document.createElement("iframe");
      (n.setAttribute("aria-hidden", "true"), (n.style.display = "none"));
      try {
        t.appendChild(n);
        var o = n.contentWindow;
        if (o == null) return !1;
        var a = [
          H(function () {
            JSON.parse("{ ");
          }),
          H(function () {
            o.JSON.parse("{ ");
          }),
          H(function () {
            new XMLHttpRequest().send();
          }),
          H(function () {
            new o.XMLHttpRequest().send();
          }),
        ];
        return a.some(function (e) {
          return G.test(e);
        });
      } catch (e) {
        return !1;
      } finally {
        n.remove();
      }
    }
    ((l.normalize = s),
      (l.getCleanRealmXHRConstructor = k),
      (l.restoreNativeString = T),
      (l.isCallShimmedCrossRealm = D),
      (l.isStringBehaviorallyShimmed = x),
      (l.isCallBehaviorallyShimmed = $),
      (l.restoreNativeCall = N),
      (l.restoreNativeXHRGetters = M),
      (l.isXHRResponseGetterShimmed = w),
      (l.isJSONParseShimmed = A),
      (l.isJSONParseBehaviorallyShimmed = O),
      (l.isBoxedParseEffective = W),
      (l.isWrappedParseEffective = q),
      (l.isHarvestPoisoned = U),
      (l.getCleanJSONParse = V),
      (l.isNativeStackTampered = z));
  },
  98,
);
