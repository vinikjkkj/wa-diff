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
    function m() {
      for (
        var e = ["CometStory", "Sponsored", "LabelStrategy"],
          t = ["th_", "dat_", "spo"],
          n = "",
          r = 0;
        r < e.length;
        r++
      )
        n += e[r];
      for (var o = "", a = 0; a < t.length; a++) o += t[a];
      return (
        ',"__bbox":{"result":{"data":{"node":{"s":{"__typename":"' +
        n +
        '"},"' +
        o +
        '":{"s":1}}}}}'
      );
    }
    var p = d();
    function _(e) {
      return (
        '{"data":' +
        p +
        ',"edges":[' +
        p +
        '],"require":[' +
        p +
        '],"h4":"' +
        u(16) +
        '","extensions":{"is_final":true}' +
        e +
        c(4079) +
        "}"
      );
    }
    var f = _(""),
      g = null;
    function h() {
      return typeof window == "undefined" ||
        window.Env == null ||
        !("ubzald07" in window.Env)
        ? f
        : (g == null && (g = _(m())), g);
    }
    var y = null,
      C = null,
      b = null,
      v = null,
      S = null,
      R = null,
      L = !1,
      E = !1,
      k = null;
    function I(e) {
      (e != null && e.remove(), k != null && (k.remove(), (k = null)));
    }
    function T() {
      if (!(y != null && C != null)) {
        var t = null;
        try {
          var n, o, a, i;
          if (((k = null), !(e || (e = r("ExecutionEnvironment"))).canUseDOM)) {
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
          ((E = c),
            c
              ? (t.src = "about:blank#g")
              : l != null &&
                "p9fk3wmn" in l &&
                ((t.src = "about:blank"), (t.srcdoc = "")));
          var d = u.firstElementChild,
            m = l != null && "f2yq8vnd" in l && "createElement" in document,
            p = l != null && "t5nd8vqc" in l && "createComment" in document,
            _ = l != null && "m8r3kp6w" in l && "createRange" in document,
            f = l != null && "b3xk8fqm" in l && d != null && "before" in d,
            g = l != null && "q4v7nx3k" in l && d != null && "after" in d,
            T = l != null && "r7c2m9xk" in l && "prepend" in u,
            D = l != null && "z2ht6xqp" in l && "append" in u,
            x = l != null && "k7q3nv9d" in l,
            $ = l != null && "w6jt4rnq" in l,
            P = l != null && "w8kq3zmt" in l && "replaceChild" in u,
            N = l != null && "b7xr2qnf" in l && "replaceChildren" in u,
            M = m ? document.createElement("span") : null,
            w = N ? document.createElement("div") : null,
            A = P ? document.createElement("span") : null,
            F = p ? document.createComment("") : null,
            B = _ ? document.createRange() : null;
          M != null && "replaceWith" in M
            ? (u.appendChild(M), M.replaceWith(t))
            : w != null
              ? ((w.style.display = "none"),
                u.appendChild(w),
                w.replaceChildren(t),
                (k = w))
              : A != null
                ? (u.appendChild(A), u.replaceChild(t, A))
                : F != null && "replaceWith" in F
                  ? (u.appendChild(F), F.replaceWith(t))
                  : B != null
                    ? (B.setStart(u, u.childNodes.length), B.insertNode(t))
                    : g && d != null
                      ? d.after(t)
                      : f && d != null
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
          y = W == null ? void 0 : W.String;
          var q = t.contentWindow;
          C =
            q == null || (n = q.Function) == null || (n = n.prototype) == null
              ? void 0
              : n.call;
          var U = t.contentWindow;
          b = U == null || (o = U.JSON) == null ? void 0 : o.parse;
          var V = t.contentWindow;
          v =
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
          (j != null && j.get && (S = j.get),
            K != null && K.get && (R = K.get));
          try {
            var Q,
              X = t.contentWindow;
            L = O(X == null || (Q = X.JSON) == null ? void 0 : Q.parse(h()));
          } catch (e) {
            L = !0;
          }
        } catch (e) {
          r("FBLogger")("ad_blocker_defense_ghost_owl").warn(
            "Failed to create iframe for builtin restoration",
          );
        } finally {
          try {
            I(t);
          } catch (e) {}
        }
      }
    }
    function D() {
      T();
      var e = y;
      e != null && !V() && (window.String = e);
    }
    function x() {
      T();
      var e = C,
        t = v;
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
        var e = h();
        return String(e) !== e;
      } catch (e) {
        return !1;
      }
    }
    function P() {
      try {
        var e = null,
          t = function (n, r) {
            e = r;
          },
          n = h();
        return (t.call({}, null, [n]), Array.isArray(e) && e[0] !== n);
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
      var n = C;
      n != null && !V() && (Function.prototype.call = n);
    }
    function w() {
      if ((T(), !V())) {
        if (S != null)
          try {
            Object.defineProperty(t.XMLHttpRequest.prototype, "response", {
              get: S,
              configurable: !0,
              enumerable: !0,
            });
          } catch (e) {
            r("FBLogger")("ad_blocker_defense_ghost_owl").warn(
              "Failed to restore native XHR response getter",
            );
          }
        if (R != null)
          try {
            Object.defineProperty(t.XMLHttpRequest.prototype, "responseText", {
              get: R,
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
      var e = S,
        n = v;
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
      var e = b,
        t = v;
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
      var t, n, r, o;
      return (
        (e == null || (t = e.data) == null ? void 0 : t.node) == null ||
        (e == null || (n = e.edges) == null || (n = n[0]) == null
          ? void 0
          : n.node) == null ||
        (e == null || (r = e.require) == null || (r = r[0]) == null
          ? void 0
          : r.node) == null ||
        ((e == null ? void 0 : e.__bbox) != null &&
          ((o = e.__bbox.result) == null || (o = o.data) == null
            ? void 0
            : o.node) == null)
      );
    }
    function B() {
      try {
        return O(JSON.parse(h()));
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
      return W('{"q7z":' + h() + "}", "q7z");
    }
    function U() {
      return W("[" + h() + "]", 0);
    }
    function V() {
      return (T(), L);
    }
    function H() {
      return (T(), !E || L ? null : b);
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
