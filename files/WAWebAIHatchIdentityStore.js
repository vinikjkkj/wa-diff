__d(
  "WAWebAIHatchIdentityStore",
  ["WALogger", "WATimeUtils", "WAWebHatchGating", "WAWebLocalStorage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = "hatch-identity",
      d = /^https:\/\/[a-z0-9.-]+\.whatsapp\.net\//,
      m = null,
      p = new Set();
    function _(e) {
      return (
        p.add(e),
        function () {
          p.delete(e);
        }
      );
    }
    function f(e) {
      p.forEach(function (t) {
        t(e);
      });
    }
    function g(t, n) {
      if (t == null || t === "") return null;
      if (!d.test(t)) {
        var r = n != null ? n : "avatar";
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[AIHatchIdentityStore] invalid ",
                " URL, not whatsapp.net",
              ])),
            r,
          ),
          null
        );
      }
      return t;
    }
    function h(e) {
      try {
        r("WAWebLocalStorage") == null ||
          r("WAWebLocalStorage").setItem(c, JSON.stringify(e));
      } catch (e) {
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "AIHatchIdentityStore: localStorage persist failed",
              ])),
          )
          .sendLogs("hatch-identity-storage-persist-failed", {
            sampling: 0.01,
          });
      }
    }
    function y() {
      try {
        var e =
          r("WAWebLocalStorage") == null
            ? void 0
            : r("WAWebLocalStorage").getItem(c);
        if (e == null) return null;
        var t = JSON.parse(e);
        if (
          t != null &&
          typeof t.name == "string" &&
          typeof t.fetchedAt == "number"
        )
          return {
            name: t.name,
            avatarUrl: typeof t.avatarUrl == "string" ? g(t.avatarUrl) : null,
            videoVariants: b(t.videoVariants),
            secureImage: v(t.secureImage),
            secureVideoVariants: S(t.secureVideoVariants),
            fetchedAt: t.fetchedAt,
          };
      } catch (e) {}
      return null;
    }
    function C(e) {
      if (e == null) return null;
      var t = {},
        n = !1;
      for (var r of Object.keys(e)) {
        var o = g(e[r], "video variant");
        o != null && ((t[r] = o), (n = !0));
      }
      return n ? t : null;
    }
    function b(e) {
      if (e == null || typeof e != "object") return null;
      var t = e,
        n = {};
      for (var r of Object.keys(t)) {
        var o = t[r];
        typeof o == "string" && (n[r] = o);
      }
      return C(n);
    }
    function v(e) {
      if (e == null || typeof e != "object") return null;
      var t = e,
        n = R(t.mediaType),
        r = L(t.directPath),
        o = L(t.mediaKey),
        a = L(t.encFilehash),
        i = L(t.filehash);
      return n == null || r == null || o == null || a == null || i == null
        ? null
        : {
            directPath: r,
            mediaKey: o,
            encFilehash: a,
            filehash: i,
            mediaType: n,
            mimeType: L(t.mimeType),
            sidecarB64: L(t.sidecarB64),
            fileLength: typeof t.fileLength == "number" ? t.fileLength : null,
            staticUrl: g(L(t.staticUrl), "secure media"),
          };
    }
    function S(e) {
      if (e == null || typeof e != "object") return null;
      var t = e,
        n = {},
        r = !1;
      for (var o of Object.keys(t)) {
        var a = v(t[o]);
        a != null && ((n[o] = a), (r = !0));
      }
      return r ? n : null;
    }
    function R(e) {
      return e === "image" || e === "video" ? e : null;
    }
    function L(e) {
      return typeof e == "string" && e !== "" ? e : null;
    }
    function E(e) {
      var t = g(e.staticUrl, "secure media");
      return t === e.staticUrl
        ? e
        : babelHelpers.extends({}, e, { staticUrl: t });
    }
    function k(e) {
      if (e == null) return null;
      var t = {};
      for (var n of Object.keys(e)) t[n] = E(e[n]);
      return t;
    }
    function I(e) {
      var t,
        n,
        r,
        a = {
          name: (t = e.name) != null ? t : "",
          avatarUrl: g(e.avatarUrl),
          videoVariants: C((n = e.videoVariants) != null ? n : null),
          secureImage: e.secureImage != null ? E(e.secureImage) : null,
          secureVideoVariants: k(
            (r = e.secureVideoVariants) != null ? r : null,
          ),
          fetchedAt: o("WATimeUtils").unixTime(),
        };
      ((m = a),
        h(a),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "AIHatchIdentityStore: identity applied from push",
            ])),
        ),
        f(a));
    }
    function T() {
      return (m == null && (m = y()), m);
    }
    function D() {
      var e,
        t = T();
      return {
        name:
          (t == null ? void 0 : t.name) ||
          o("WAWebHatchGating").getHatchBotName(),
        profileThumb:
          (e = t == null ? void 0 : t.avatarUrl) != null
            ? e
            : o("WAWebHatchGating").getHatchBotProfileThumb() || "",
      };
    }
    function x() {
      ((m = null), (p = new Set()));
      try {
        r("WAWebLocalStorage") == null || r("WAWebLocalStorage").removeItem(c);
      } catch (e) {}
    }
    ((l.subscribeToIdentityChanges = _),
      (l.validateWhatsAppNetUrl = g),
      (l.applyHatchIdentity = I),
      (l.getCachedHatchIdentity = T),
      (l.getHatchInitialIdentity = D),
      (l.__resetCacheForTesting = x));
  },
  98,
);
