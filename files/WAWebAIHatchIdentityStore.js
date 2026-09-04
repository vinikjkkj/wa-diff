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
            secureImage: C(t.secureImage),
            secureVideoVariants: b(t.secureVideoVariants),
            fetchedAt: t.fetchedAt,
          };
      } catch (e) {}
      return null;
    }
    function C(e) {
      if (e == null || typeof e != "object") return null;
      var t = e,
        n = v(t.mediaType),
        r = S(t.directPath),
        o = S(t.mediaKey),
        a = S(t.encFilehash),
        i = S(t.filehash);
      return n == null || r == null || o == null || a == null || i == null
        ? null
        : {
            directPath: r,
            mediaKey: o,
            encFilehash: a,
            filehash: i,
            mediaType: n,
            mimeType: S(t.mimeType),
            sidecarB64: S(t.sidecarB64),
            fileLength: typeof t.fileLength == "number" ? t.fileLength : null,
            staticUrl: g(S(t.staticUrl), "secure media"),
          };
    }
    function b(e) {
      if (e == null || typeof e != "object") return null;
      var t = e,
        n = {},
        r = !1;
      for (var o of Object.keys(t)) {
        var a = C(t[o]);
        a != null && ((n[o] = a), (r = !0));
      }
      return r ? n : null;
    }
    function v(e) {
      return e === "image" || e === "video" ? e : null;
    }
    function S(e) {
      return typeof e == "string" && e !== "" ? e : null;
    }
    function R(e) {
      var t = g(e.staticUrl, "secure media");
      return t === e.staticUrl
        ? e
        : babelHelpers.extends({}, e, { staticUrl: t });
    }
    function L(e) {
      if (e == null) return null;
      var t = {};
      for (var n of Object.keys(e)) t[n] = R(e[n]);
      return t;
    }
    function E(e) {
      var t,
        n,
        r = {
          name: (t = e.name) != null ? t : "",
          secureImage: e.secureImage != null ? R(e.secureImage) : null,
          secureVideoVariants: L(
            (n = e.secureVideoVariants) != null ? n : null,
          ),
          fetchedAt: o("WATimeUtils").unixTime(),
        };
      ((m = r),
        h(r),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "AIHatchIdentityStore: identity applied from push",
            ])),
        ),
        f(r));
    }
    function k() {
      return (m == null && (m = y()), m);
    }
    function I() {
      var e = k();
      return {
        name:
          (e == null ? void 0 : e.name) ||
          o("WAWebHatchGating").getHatchBotName(),
        profileThumb: o("WAWebHatchGating").getHatchBotProfileThumb(),
      };
    }
    function T() {
      ((m = null), (p = new Set()));
      try {
        r("WAWebLocalStorage") == null || r("WAWebLocalStorage").removeItem(c);
      } catch (e) {}
    }
    ((l.subscribeToIdentityChanges = _),
      (l.validateWhatsAppNetUrl = g),
      (l.applyHatchIdentity = E),
      (l.getCachedHatchIdentity = k),
      (l.getHatchInitialIdentity = I),
      (l.__resetCacheForTesting = T));
  },
  98,
);
