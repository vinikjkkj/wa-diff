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
    function c(e) {
      for (var t = " "; t.length < e; ) t += t;
      return t.slice(0, e);
    }
    function d() {
      for (var e = ["Spon", "sored", "Data"], t = "", n = 0; n < e.length; n++)
        t += e[n];
      return '{"node":{"s":{"__typename":"' + t + '"}}}';
    }
    var m = d(),
      p =
        '{"data":' +
        m +
        ',"edges":[' +
        m +
        '],"require":[' +
        m +
        '],"p":"' +
        u(16) +
        '","extensions":{"is_final":true}' +
        c(4079) +
        "}",
      _ = null,
      f = null,
      g = null,
      h = null,
      y = null,
      C = null,
      b = !1,
      v = null,
      S = !1,
      R = !1,
      L = null;
    function E(e) {
      (e != null && e.remove(), L != null && (L.remove(), (L = null)));
    }
    function k() {
      if (((L = null), !(e || (e = r("ExecutionEnvironment"))).canUseDOM))
        return (
          r("FBLogger")("ad_blocker_defense_ghost_owl").info(
            "Environment does not support DOM",
          ),
          null
        );
      var t = window.Env,
        n = document.body,
        o = n || document.documentElement;
      if (o == null) return null;
      var a = document.createElement("iframe");
      a.style.display = "none";
      var i = t != null && "h4npx7qw" in t;
      ((R = i),
        i
          ? (a.src = "about:blank#g")
          : t != null &&
            "p9fk3wmn" in t &&
            ((a.src = "about:blank"), (a.srcdoc = "")));
      var l = o.firstElementChild,
        s = t != null && "f2yq8vnd" in t && "createElement" in document,
        u = t != null && "t5nd8vqc" in t && "createComment" in document,
        c = t != null && "m8r3kp6w" in t && "createRange" in document,
        d = t != null && "b3xk8fqm" in t && l != null && "before" in l,
        m = t != null && "q4v7nx3k" in t && l != null && "after" in l,
        p = t != null && "r7c2m9xk" in t && "prepend" in o,
        _ = t != null && "z2ht6xqp" in t && "append" in o,
        f = t != null && "k7q3nv9d" in t,
        g = t != null && "w6jt4rnq" in t,
        h = t != null && "w8kq3zmt" in t && "replaceChild" in o,
        y = t != null && "b7xr2qnf" in t && "replaceChildren" in o,
        C = s ? document.createElement("span") : null,
        b = y ? document.createElement("div") : null,
        v = h ? document.createElement("span") : null,
        S = u ? document.createComment("") : null,
        E = c ? document.createRange() : null;
      return (
        C != null && "replaceWith" in C
          ? (o.appendChild(C), C.replaceWith(a))
          : b != null
            ? ((b.style.display = "none"),
              o.appendChild(b),
              b.replaceChildren(a),
              (L = b))
            : v != null
              ? (o.appendChild(v), o.replaceChild(a, v))
              : S != null && "replaceWith" in S
                ? (o.appendChild(S), S.replaceWith(a))
                : E != null
                  ? (E.setStart(o, o.childNodes.length), E.insertNode(a))
                  : m && l != null
                    ? l.after(a)
                    : d && l != null
                      ? l.before(a)
                      : p
                        ? o.prepend(a)
                        : _
                          ? o.append(a)
                          : f
                            ? o.insertBefore(a, null)
                            : g
                              ? o.insertAdjacentElement("beforeend", a)
                              : o.appendChild(a),
        a
      );
    }
    function I() {
      if (S) return v;
      S = !0;
      var e = null;
      try {
        var t, n;
        e = k();
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
            (v = o),
          v
        );
      } catch (e) {
        return null;
      } finally {
        v == null && E(e);
      }
    }
    function T() {
      if (!(_ != null && f != null)) {
        var e = null;
        try {
          var t, n, o;
          if (((e = k()), e == null)) return;
          var a = e.contentWindow;
          _ = a == null ? void 0 : a.String;
          var i = e.contentWindow;
          f =
            i == null || (t = i.Function) == null || (t = t.prototype) == null
              ? void 0
              : t.call;
          var l = e.contentWindow;
          g = l == null || (n = l.JSON) == null ? void 0 : n.parse;
          var s = e.contentWindow;
          h =
            s == null || (o = s.Function) == null || (o = o.prototype) == null
              ? void 0
              : o.toString;
          var u = e.contentWindow.Object.getOwnPropertyDescriptor,
            c = e.contentWindow.XMLHttpRequest.prototype,
            d = u(c, "response"),
            m = u(c, "responseText");
          (d != null && d.get && (y = d.get),
            m != null && m.get && (C = m.get));
          try {
            var v,
              S = e.contentWindow;
            b = O(S == null || (v = S.JSON) == null ? void 0 : v.parse(p));
          } catch (e) {
            b = !0;
          }
        } catch (e) {
          r("FBLogger")("ad_blocker_defense_ghost_owl").warn(
            "Failed to create iframe for builtin restoration",
          );
        } finally {
          try {
            E(e);
          } catch (e) {}
        }
      }
    }
    function D() {
      T();
      var e = _;
      e != null && !V() && (window.String = e);
    }
    function x() {
      T();
      var e = f,
        t = h;
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
    function $() {
      try {
        return String(p) !== p;
      } catch (e) {
        return !1;
      }
    }
    function P() {
      try {
        var e = null,
          t = function (n, r) {
            e = r;
          };
        return (t.call({}, null, [p]), Array.isArray(e) && e[0] !== p);
      } catch (e) {
        return !1;
      }
    }
    function N(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      return Reflect.apply(this, e, n);
    }
    function M() {
      if (typeof Reflect == "object" && typeof Reflect.apply == "function") {
        var e = Function.prototype,
          t = "call";
        e[t] = N;
        return;
      }
      T();
      var n = f;
      n != null && !V() && (Function.prototype.call = n);
    }
    function w() {
      if ((T(), !V())) {
        if (y != null)
          try {
            Object.defineProperty(t.XMLHttpRequest.prototype, "response", {
              get: y,
              configurable: !0,
              enumerable: !0,
            });
          } catch (e) {
            r("FBLogger")("ad_blocker_defense_ghost_owl").warn(
              "Failed to restore native XHR response getter",
            );
          }
        if (C != null)
          try {
            Object.defineProperty(t.XMLHttpRequest.prototype, "responseText", {
              get: C,
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
    function A() {
      T();
      var e = y,
        n = h;
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
    function F() {
      T();
      var e = g,
        t = h;
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
    function O(e) {
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
    function B() {
      try {
        return O(JSON.parse(p));
      } catch (e) {
        return !1;
      }
    }
    function W(e, t) {
      try {
        var n = JSON.parse(e);
        return n != null && !O(n[t]);
      } catch (e) {
        return !1;
      }
    }
    function q() {
      return W('{"q7z":' + p + "}", "q7z");
    }
    function U() {
      return W("[" + p + "]", 0);
    }
    function V() {
      return (T(), b);
    }
    function H() {
      return (T(), !R || b ? null : g);
    }
    function G(e) {
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
    var z =
      /chrome-extension:\/\/|moz-extension:\/\/|safari-web-extension:\/\/|<anonymous>:\d/;
    function j() {
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
          G(function () {
            JSON.parse("{ ");
          }),
          G(function () {
            var e;
            (e = o.JSON) == null || e.parse("{ ");
          }),
          G(function () {
            new XMLHttpRequest().send();
          }),
          G(function () {
            new o.XMLHttpRequest().send();
          }),
        ];
        return a.some(function (e) {
          return z.test(e);
        });
      } catch (e) {
        return !1;
      } finally {
        n.remove();
      }
    }
    ((l.normalize = s),
      (l.getCleanRealmXHRConstructor = I),
      (l.restoreNativeString = D),
      (l.isCallShimmedCrossRealm = x),
      (l.isStringBehaviorallyShimmed = $),
      (l.isCallBehaviorallyShimmed = P),
      (l.restoreNativeCall = M),
      (l.restoreNativeXHRGetters = w),
      (l.isXHRResponseGetterShimmed = A),
      (l.isJSONParseShimmed = F),
      (l.isJSONParseBehaviorallyShimmed = B),
      (l.isBoxedParseEffective = q),
      (l.isWrappedParseEffective = U),
      (l.isHarvestPoisoned = V),
      (l.getCleanJSONParse = H),
      (l.isNativeStackTampered = j));
  },
  98,
);
