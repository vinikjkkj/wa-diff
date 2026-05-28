__d(
  "GHLDetectionUtilsPreludeSafe",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return typeof e.replace == "function"
        ? e.replace(/\n/g, " ").replace(/\s+/g, " ")
        : null;
    }
    var s = null,
      u = null,
      c = null,
      d = null,
      m = null,
      p = null;
    function _() {
      if (!(s != null && u != null)) {
        var e = document.body || document.documentElement;
        if (e != null) {
          var t = document.createElement("iframe");
          ((t.style.display = "none"),
            window.Env != null &&
              "p9fk3wmn" in window.Env &&
              ((t.src = "about:blank"), (t.srcdoc = "")));
          var n = window.Env != null && "w6jt4rnq" in window.Env;
          try {
            (n ? e.insertAdjacentElement("beforeend", t) : e.appendChild(t),
              (s = t.contentWindow.String),
              (u = t.contentWindow.Function.prototype.call),
              (c = t.contentWindow.JSON.parse),
              (d = t.contentWindow.Function.prototype.toString));
            var o = t.contentWindow.Object.getOwnPropertyDescriptor,
              a = t.contentWindow.XMLHttpRequest.prototype,
              i = o(a, "response"),
              l = o(a, "responseText");
            (i != null && i.get && (m = i.get),
              l != null && l.get && (p = l.get));
          } catch (e) {
            r("FBLogger")("ad_blocker_defense_ghost_owl").warn(
              "Failed to create iframe for builtin restoration",
            );
          } finally {
            try {
              n ? t.remove() : e.removeChild(t);
            } catch (e) {}
          }
        }
      }
    }
    function f() {
      (_(), s != null && (window.String = s));
    }
    function g() {
      (_(), u != null && (Function.prototype.call = u));
    }
    function h() {
      if ((_(), m != null))
        try {
          Object.defineProperty(t.XMLHttpRequest.prototype, "response", {
            get: m,
            configurable: !0,
            enumerable: !0,
          });
        } catch (e) {
          r("FBLogger")("ad_blocker_defense_ghost_owl").warn(
            "Failed to restore native XHR response getter",
          );
        }
      if (p != null)
        try {
          Object.defineProperty(t.XMLHttpRequest.prototype, "responseText", {
            get: p,
            configurable: !0,
            enumerable: !0,
          });
        } catch (e) {
          r("FBLogger")("ad_blocker_defense_ghost_owl").warn(
            "Failed to restore native XHR responseText getter",
          );
        }
    }
    function y() {
      _();
      var n = m,
        r = d;
      if (n != null && r != null)
        try {
          var o = Object.getOwnPropertyDescriptor(
            t.XMLHttpRequest.prototype,
            "response",
          );
          if ((o == null ? void 0 : o.get) != null)
            return r.call(o.get) !== r.call(n);
        } catch (e) {}
      try {
        var a = Object.getOwnPropertyDescriptor(
            t.XMLHttpRequest.prototype,
            "response",
          ),
          i = a == null ? void 0 : a.get;
        if (i != null && typeof i == "function")
          return !(
            i.toString === i.toString.toString &&
            e(i.toString()) === "function get response() { [native code] }" &&
            e(i.toString.toString()) === "function toString() { [native code] }"
          );
      } catch (e) {}
      return !1;
    }
    function C() {
      _();
      var t = c,
        n = d;
      if (t != null && n != null)
        try {
          return n.call(JSON.parse) !== n.call(t);
        } catch (e) {}
      return (
        typeof JSON.parse == "function" &&
        !(
          JSON.parse.toString === JSON.parse.toString.toString &&
          e(JSON.parse.toString()) === "function parse() { [native code] }" &&
          e(JSON.parse.toString.toString()) ===
            "function toString() { [native code] }"
        )
      );
    }
    ((l.normalize = e),
      (l.restoreNativeString = f),
      (l.restoreNativeCall = g),
      (l.restoreNativeXHRGetters = h),
      (l.isXHRResponseGetterShimmed = y),
      (l.isJSONParseShimmed = C));
  },
  98,
);
