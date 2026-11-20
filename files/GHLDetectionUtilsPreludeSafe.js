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
    function c(e, t) {
      for (var n = t; n.length < e; ) n += n;
      return n.slice(0, e);
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
    function _(e, t, n) {
      return (
        '{"data":' +
        p +
        ',"edges":[' +
        p +
        '],"require":[' +
        p +
        '],"' +
        n +
        '":"' +
        u(16) +
        '","extensions":{"is_final":true}' +
        e +
        c(4079, t) +
        "}"
      );
    }
    var f = _("", " ", "g8"),
      g = _("", " ", "b3"),
      h = null;
    function y() {
      return typeof window != "undefined" &&
        window.Env != null &&
        "rk21poeg" in window.Env
        ? "g8"
        : "b3";
    }
    function C() {
      var e = y();
      return typeof window == "undefined" ||
        window.Env == null ||
        !("ubzald07" in window.Env)
        ? e === "g8"
          ? f
          : g
        : (h == null && (h = _(m(), "	", e)), h);
    }
    var b = null,
      v = null,
      S = null,
      R = null,
      L = null,
      E = null,
      k = !1,
      I = !1,
      T = null;
    function D(e) {
      (e != null && e.remove(), T != null && (T.remove(), (T = null)));
    }
    function x(e, t, n) {
      var r = e.firstElementChild,
        o = n != null && "f2yq8vnd" in n && "createElement" in document,
        a = n != null && "t5nd8vqc" in n && "createComment" in document,
        i = n != null && "m8r3kp6w" in n && "createRange" in document,
        l = n != null && "b3xk8fqm" in n && r != null && "before" in r,
        s = n != null && "q4v7nx3k" in n && r != null && "after" in r,
        u = n != null && "r7c2m9xk" in n && "prepend" in e,
        c = n != null && "z2ht6xqp" in n && "append" in e,
        d = n != null && "k7q3nv9d" in n,
        m = n != null && "w6jt4rnq" in n,
        p = n != null && "w8kq3zmt" in n && "replaceChild" in e,
        _ = n != null && "b7xr2qnf" in n && "replaceChildren" in e,
        f = o ? document.createElement("span") : null,
        g = _ ? document.createElement("div") : null,
        h = p ? document.createElement("span") : null,
        y = a ? document.createComment("") : null,
        C = i ? document.createRange() : null;
      if (f != null && "replaceWith" in f) (e.appendChild(f), f.replaceWith(t));
      else {
        if (g != null)
          return (
            (g.style.display = "none"),
            e.appendChild(g),
            g.replaceChildren(t),
            g
          );
        h != null
          ? (e.appendChild(h), e.replaceChild(t, h))
          : y != null && "replaceWith" in y
            ? (e.appendChild(y), y.replaceWith(t))
            : C != null
              ? (C.setStart(e, e.childNodes.length), C.insertNode(t))
              : s && r != null
                ? r.after(t)
                : l && r != null
                  ? r.before(t)
                  : u
                    ? e.prepend(t)
                    : c
                      ? e.append(t)
                      : d
                        ? e.insertBefore(t, null)
                        : m
                          ? e.insertAdjacentElement("beforeend", t)
                          : e.appendChild(t);
      }
      return null;
    }
    function $() {
      if (!(b != null && v != null)) {
        var t = null;
        try {
          var n, o, a, i;
          if (((T = null), !(e || (e = r("ExecutionEnvironment"))).canUseDOM)) {
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
          ((I = c),
            c
              ? (t.src = "about:blank#g")
              : l != null &&
                "p9fk3wmn" in l &&
                ((t.src = "about:blank"), (t.srcdoc = "")),
            (T = x(u, t, l)));
          var d = t.contentWindow;
          b = d == null ? void 0 : d.String;
          var m = t.contentWindow;
          v =
            m == null || (n = m.Function) == null || (n = n.prototype) == null
              ? void 0
              : n.call;
          var p = t.contentWindow;
          S = p == null || (o = p.JSON) == null ? void 0 : o.parse;
          var _ = t.contentWindow;
          R =
            _ == null || (a = _.Function) == null || (a = a.prototype) == null
              ? void 0
              : a.toString;
          var f = t.contentWindow.Object.getOwnPropertyDescriptor,
            g = t.contentWindow,
            h =
              g == null || (i = g.XMLHttpRequest) == null
                ? void 0
                : i.prototype,
            y = f(h, "response"),
            $ = f(h, "responseText");
          (y != null && y.get && (L = y.get),
            $ != null && $.get && (E = $.get));
          try {
            var P,
              N = t.contentWindow;
            k = q(N == null || (P = N.JSON) == null ? void 0 : P.parse(C()));
          } catch (e) {
            k = !0;
          }
        } catch (e) {
          r("FBLogger")("ad_blocker_defense_ghost_owl").warn(
            "Failed to create iframe for builtin restoration",
          );
        } finally {
          try {
            D(t);
          } catch (e) {}
        }
      }
    }
    function P() {
      $();
      var e = b;
      e != null && !z() && (window.String = e);
    }
    function N() {
      $();
      var e = v,
        t = R;
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
    function M() {
      try {
        var e = C();
        return String(e) !== e;
      } catch (e) {
        return !1;
      }
    }
    function w() {
      try {
        var e = null,
          t = function (n, r) {
            e = r;
          },
          n = C();
        return (t.call({}, null, [n]), Array.isArray(e) && e[0] !== n);
      } catch (e) {
        return !1;
      }
    }
    function A(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      return Reflect.apply(this, e, n);
    }
    function F() {
      if (typeof Reflect == "object" && typeof Reflect.apply == "function") {
        var e = Function.prototype,
          t = "call";
        e[t] = A;
        return;
      }
      $();
      var n = v;
      n != null && !z() && (Function.prototype.call = n);
    }
    function O() {
      if (($(), !z())) {
        if (L != null)
          try {
            Object.defineProperty(t.XMLHttpRequest.prototype, "response", {
              get: L,
              configurable: !0,
              enumerable: !0,
            });
          } catch (e) {
            r("FBLogger")("ad_blocker_defense_ghost_owl").warn(
              "Failed to restore native XHR response getter",
            );
          }
        if (E != null)
          try {
            Object.defineProperty(t.XMLHttpRequest.prototype, "responseText", {
              get: E,
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
    function B() {
      $();
      var e = L,
        n = R;
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
    function W() {
      $();
      var e = S,
        t = R;
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
    function q(e) {
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
    function U() {
      try {
        return q(JSON.parse(C()));
      } catch (e) {
        return !1;
      }
    }
    function V(e, t) {
      try {
        var n = JSON.parse(e);
        return n != null && !q(n[t]);
      } catch (e) {
        return !1;
      }
    }
    function H() {
      return V('{"q7z":' + C() + "}", "q7z");
    }
    function G() {
      return V("[" + C() + "]", 0);
    }
    function z() {
      return ($(), k);
    }
    function j() {
      return ($(), !I || k ? null : S);
    }
    function K(e) {
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
    var Q =
      /chrome-extension:\/\/|moz-extension:\/\/|safari-web-extension:\/\/|<anonymous>:\d/;
    function X() {
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
          K(function () {
            JSON.parse("{ ");
          }),
          K(function () {
            var e;
            (e = o.JSON) == null || e.parse("{ ");
          }),
          K(function () {
            new XMLHttpRequest().send();
          }),
          K(function () {
            new o.XMLHttpRequest().send();
          }),
        ];
        return a.some(function (e) {
          return Q.test(e);
        });
      } catch (e) {
        return !1;
      } finally {
        n.remove();
      }
    }
    ((l.normalize = s),
      (l.restoreNativeString = P),
      (l.isCallShimmedCrossRealm = N),
      (l.isStringBehaviorallyShimmed = M),
      (l.isCallBehaviorallyShimmed = w),
      (l.restoreNativeCall = F),
      (l.restoreNativeXHRGetters = O),
      (l.isXHRResponseGetterShimmed = B),
      (l.isJSONParseShimmed = W),
      (l.isJSONParseBehaviorallyShimmed = U),
      (l.isBoxedParseEffective = H),
      (l.isWrappedParseEffective = G),
      (l.isHarvestPoisoned = z),
      (l.getCleanJSONParse = j),
      (l.isNativeStackTampered = X));
  },
  98,
);
