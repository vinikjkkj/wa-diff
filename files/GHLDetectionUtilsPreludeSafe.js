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
        '],"q8":"' +
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
      v = !1,
      S = null;
    function R(e) {
      (e != null && e.remove(), S != null && (S.remove(), (S = null)));
    }
    function L() {
      if (!(_ != null && f != null)) {
        var t = null;
        try {
          var n, o, a, i;
          if (((S = null), !(e || (e = r("ExecutionEnvironment"))).canUseDOM)) {
            r("FBLogger")("ad_blocker_defense_ghost_owl").info(
              "Environment does not support DOM",
            );
            return;
          }
          var l = window.Env,
            s = document.body,
            u = s || document.documentElement;
          if (u == null) return;
          ((t = document.createElement("iframe")), (t.style.display = "none"));
          var c = l != null && "h4npx7qw" in l;
          ((v = c),
            c
              ? (t.src = "about:blank#g")
              : l != null &&
                "p9fk3wmn" in l &&
                ((t.src = "about:blank"), (t.srcdoc = "")));
          var d = u.firstElementChild,
            m = l != null && "f2yq8vnd" in l && "createElement" in document,
            L = l != null && "t5nd8vqc" in l && "createComment" in document,
            E = l != null && "m8r3kp6w" in l && "createRange" in document,
            k = l != null && "b3xk8fqm" in l && d != null && "before" in d,
            I = l != null && "q4v7nx3k" in l && d != null && "after" in d,
            T = l != null && "r7c2m9xk" in l && "prepend" in u,
            D = l != null && "z2ht6xqp" in l && "append" in u,
            x = l != null && "k7q3nv9d" in l,
            $ = l != null && "w6jt4rnq" in l,
            P = l != null && "w8kq3zmt" in l && "replaceChild" in u,
            N = l != null && "b7xr2qnf" in l && "replaceChildren" in u,
            w = m ? document.createElement("span") : null,
            A = N ? document.createElement("div") : null,
            F = P ? document.createElement("span") : null,
            O = L ? document.createComment("") : null,
            B = E ? document.createRange() : null;
          w != null && "replaceWith" in w
            ? (u.appendChild(w), w.replaceWith(t))
            : A != null
              ? ((A.style.display = "none"),
                u.appendChild(A),
                A.replaceChildren(t),
                (S = A))
              : F != null
                ? (u.appendChild(F), u.replaceChild(t, F))
                : O != null && "replaceWith" in O
                  ? (u.appendChild(O), O.replaceWith(t))
                  : B != null
                    ? (B.setStart(u, u.childNodes.length), B.insertNode(t))
                    : I && d != null
                      ? d.after(t)
                      : k && d != null
                        ? d.before(t)
                        : T
                          ? u.prepend(t)
                          : D
                            ? u.append(t)
                            : x
                              ? u.insertBefore(t, null)
                              : $
                                ? u.insertAdjacentElement("beforeend", t)
                                : u.appendChild(t);
          var W = t.contentWindow;
          _ = W == null ? void 0 : W.String;
          var q = t.contentWindow;
          f =
            q == null || (n = q.Function) == null || (n = n.prototype) == null
              ? void 0
              : n.call;
          var U = t.contentWindow;
          g = U == null || (o = U.JSON) == null ? void 0 : o.parse;
          var V = t.contentWindow;
          h =
            V == null || (a = V.Function) == null || (a = a.prototype) == null
              ? void 0
              : a.toString;
          var H = t.contentWindow.Object.getOwnPropertyDescriptor,
            G = t.contentWindow,
            z =
              G == null || (i = G.XMLHttpRequest) == null
                ? void 0
                : i.prototype,
            j = H(z, "response"),
            K = H(z, "responseText");
          (j != null && j.get && (y = j.get),
            K != null && K.get && (C = K.get));
          try {
            var Q,
              X = t.contentWindow;
            b = M(X == null || (Q = X.JSON) == null ? void 0 : Q.parse(p));
          } catch (e) {
            b = !0;
          }
        } catch (e) {
          r("FBLogger")("ad_blocker_defense_ghost_owl").warn(
            "Failed to create iframe for builtin restoration",
          );
        } finally {
          try {
            R(t);
          } catch (e) {}
        }
      }
    }
    function E() {
      L();
      var e = _;
      e != null && !B() && (window.String = e);
    }
    function k() {
      L();
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
    function I() {
      try {
        return String(p) !== p;
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
        return (t.call({}, null, [p]), Array.isArray(e) && e[0] !== p);
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
      var n = f;
      n != null && !B() && (Function.prototype.call = n);
    }
    function $() {
      if ((L(), !B())) {
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
    function P() {
      L();
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
    function N() {
      L();
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
        return M(JSON.parse(p));
      } catch (e) {
        return !1;
      }
    }
    function A(e, t) {
      try {
        var n = JSON.parse(e);
        return n != null && !M(n[t]);
      } catch (e) {
        return !1;
      }
    }
    function F() {
      return A('{"q7z":' + p + "}", "q7z");
    }
    function O() {
      return A("[" + p + "]", 0);
    }
    function B() {
      return (L(), b);
    }
    function W() {
      return (L(), !v || b ? null : g);
    }
    function q(e) {
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
    var U =
      /chrome-extension:\/\/|moz-extension:\/\/|safari-web-extension:\/\/|<anonymous>:\d/;
    function V() {
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
          q(function () {
            JSON.parse("{ ");
          }),
          q(function () {
            var e;
            (e = o.JSON) == null || e.parse("{ ");
          }),
          q(function () {
            new XMLHttpRequest().send();
          }),
          q(function () {
            new o.XMLHttpRequest().send();
          }),
        ];
        return a.some(function (e) {
          return U.test(e);
        });
      } catch (e) {
        return !1;
      } finally {
        n.remove();
      }
    }
    ((l.normalize = s),
      (l.restoreNativeString = E),
      (l.isCallShimmedCrossRealm = k),
      (l.isStringBehaviorallyShimmed = I),
      (l.isCallBehaviorallyShimmed = T),
      (l.restoreNativeCall = x),
      (l.restoreNativeXHRGetters = $),
      (l.isXHRResponseGetterShimmed = P),
      (l.isJSONParseShimmed = N),
      (l.isJSONParseBehaviorallyShimmed = w),
      (l.isBoxedParseEffective = F),
      (l.isWrappedParseEffective = O),
      (l.isHarvestPoisoned = B),
      (l.getCleanJSONParse = W),
      (l.isNativeStackTampered = V));
  },
  98,
);
