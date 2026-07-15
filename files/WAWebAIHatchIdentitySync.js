__d(
  "WAWebAIHatchIdentitySync",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebAIHatchIdentityStore",
    "WAWebBotUtils",
    "WAWebContactCollection",
    "WAWebHatchGating",
    "WAWebMediaInMemoryBlobCache",
    "WAWebProfilePicThumbCollection",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = !1,
      u = r("JSResourceForInteraction")(
        "WAWebHatchDownloadSecureAvatar",
      ).__setRef("WAWebAIHatchIdentitySync"),
      c = null,
      d = null;
    function m() {
      s ||
        ((s = !0),
        o("WAWebAIHatchIdentityStore").subscribeToIdentityChanges(function (e) {
          var t = o("WAWebContactCollection").ContactCollection.get(
            o("WAWebBotUtils").HATCH_BOT_FBID_WID,
          );
          t != null && _(t, o("WAWebBotUtils").HATCH_BOT_FBID_WID, e);
        }));
    }
    function p(e) {
      var t = e.contact,
        n = e.wid;
      m();
      var r = o("WAWebAIHatchIdentityStore").getCachedHatchIdentity();
      r != null && _(t, n, r);
    }
    function _(e, t, n) {
      (g(e, n.name), f(t, n));
    }
    function f(t, n) {
      var a,
        i = n.avatarUrl;
      if (i != null) {
        var l;
        ((l = d) == null || l.abort(), (d = null), C(), h(t, i));
        return;
      }
      var s = n.secureImage;
      if (
        !(s == null || !o("WAWebHatchGating").isHatchEncryptedMediaEnabled())
      ) {
        var c = s.filehash;
        (a = d) == null || a.abort();
        var m = new AbortController();
        ((d = m),
          u
            .load()
            .then(function (e) {
              var t = e.downloadHatchSecureMedia;
              return t(s, m.signal);
            })
            .then(function (e) {
              e != null && d === m && (y(c), h(t, e));
            })
            .catch(function (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch: secure thumb resolve failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("hatch-secure-thumb-resolve-failed");
            })
            .finally(function () {
              d === m && (d = null);
            }));
      }
    }
    function g(e, t) {
      t !== "" && t !== e.get("name") && e.set({ name: t });
    }
    function h(e, t) {
      var n,
        r =
          (n = o(
            "WAWebProfilePicThumbCollection",
          ).ProfilePicThumbCollection.get(e)) == null
            ? void 0
            : n.get("eurl");
      t !== r &&
        o("WAWebProfilePicThumbCollection")
          .ProfilePicThumbCollection.gadd(e)
          .set({
            eurl: t,
            previewEurl: t,
            tag: "hat",
            stale: !1,
            timestamp: Date.now(),
          });
    }
    function y(e) {
      c !== e &&
        (C(),
        o(
          "WAWebMediaInMemoryBlobCache",
        ).InMemoryMediaBlobCache.increaseUsageCount(e),
        (c = e));
    }
    function C() {
      c != null &&
        (o(
          "WAWebMediaInMemoryBlobCache",
        ).InMemoryMediaBlobCache.decreaseUsageCount(c),
        (c = null));
    }
    function b() {
      var e;
      ((s = !1), (e = d) == null || e.abort(), (d = null), (c = null));
    }
    ((l.initIdentityChangeListener = m),
      (l.syncHatchContactIdentity = p),
      (l.__resetHatchIdentitySyncForTesting = b));
  },
  98,
);
