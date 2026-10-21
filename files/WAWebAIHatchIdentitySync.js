__d(
  "WAWebAIHatchIdentitySync",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebAIHatchIdentityStore",
    "WAWebBotUtils",
    "WAWebContactCollection",
    "WAWebMediaInMemoryBlobCache",
    "WAWebProfilePicThumbCollection",
    "WAWebWamEnumDownloadOriginType",
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
        i = n.secureImage;
      if (i != null) {
        var l = i.filehash;
        (a = d) == null || a.abort();
        var s = new AbortController();
        ((d = s),
          u
            .load()
            .then(function (e) {
              var t = e.downloadHatchSecureMedia;
              return t(
                i,
                s.signal,
                o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE
                  .PROFILE_PICTURE,
              );
            })
            .then(function (e) {
              e != null && d === s && (C(l), h(t, e));
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
              d === s && (d = null);
            }));
      }
    }
    function g(e, t) {
      t !== "" && t !== e.get("name") && e.set({ name: t });
    }
    function h(e, t) {
      y(
        o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(e),
        t,
      ) ||
        o("WAWebProfilePicThumbCollection")
          .ProfilePicThumbCollection.gadd(e)
          .set({
            eurl: t,
            previewEurl: t,
            raw: void 0,
            previewDirectPath: null,
            fullDirectPath: null,
            filehash: null,
            tag: "hat",
            stale: !1,
            eurlStale: !1,
            timestamp: Date.now(),
          });
    }
    function y(e, t) {
      return (
        e != null &&
        e.eurl === t &&
        e.previewEurl === t &&
        e.raw == null &&
        e.previewDirectPath == null &&
        e.fullDirectPath == null &&
        e.filehash == null &&
        !e.stale &&
        !e.eurlStale
      );
    }
    function C(e) {
      c !== e &&
        (b(),
        o(
          "WAWebMediaInMemoryBlobCache",
        ).InMemoryMediaBlobCache.increaseUsageCount(e),
        (c = e));
    }
    function b() {
      c != null &&
        (o(
          "WAWebMediaInMemoryBlobCache",
        ).InMemoryMediaBlobCache.decreaseUsageCount(c),
        (c = null));
    }
    l.syncHatchContactIdentity = p;
  },
  98,
);
