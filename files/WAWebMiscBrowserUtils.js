__d(
  "WAWebMiscBrowserUtils",
  [
    "WABase64",
    "WALogger",
    "WATimeUtils",
    "WAWebDebounce",
    "WAWebUserPrefsGeneral",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = !1,
      u = r("WAWebDebounce")(function () {
        return (s = !1);
      }, 500),
      c = 2160 * 60 * 60;
    function d() {
      var e = new Uint8Array(16);
      return (self.crypto.getRandomValues(e), o("WABase64").encodeB64(e));
    }
    var m = {
      id: function () {
        var e = o("WAWebUserPrefsGeneral").getBrowserId();
        return e || ((e = d()), o("WAWebUserPrefsGeneral").setBrowserId(e), e);
      },
      persistentExpiringId: function () {
        var e = o("WAWebUserPrefsGeneral").getPersistentExpiringId();
        if (e != null) {
          var t = o("WATimeUtils").unixTime() - e.ts >= c;
          if (!t) return e.value;
        }
        var n = { ts: o("WATimeUtils").unixTime(), value: d() };
        return (o("WAWebUserPrefsGeneral").setPersistentExpiringId(n), n.value);
      },
      hardRefresh: function () {
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[reload] hardRefresh",
            ])),
        ),
          this.promptUnloadGuards++,
          location.reload(!1));
      },
      startDownloading: function () {
        ((s = !0), u());
      },
      clearDownloading: function () {
        s = !1;
      },
      isDownloading: function () {
        return s;
      },
      promptUnloadGuards: 0,
    };
    l.default = m;
  },
  98,
);
