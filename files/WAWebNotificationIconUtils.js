__d(
  "WAWebNotificationIconUtils",
  [
    "WAAbortError",
    "WACustomError",
    "WAFilteredCatch",
    "WALogger",
    "WAPromiseRaceAbort",
    "WAPromiseTimeout",
    "WAWebChatGetters",
    "WAWebNotificationTone",
    "WAWebProfilePicThumbCollection",
    "asyncToGeneratorRuntime",
    "bx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (s = r("bx")).getURL(s("11319")),
      c = s.getURL(s("9555")),
      d = s.getURL(s("9556")),
      m = s.getURL(s("11370"));
    function p(e) {
      return o("WAWebChatGetters").getIsNewsletter(e)
        ? m
        : o("WAWebChatGetters").getIsGroup(e)
          ? c
          : d;
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return e.isLocked ? u : g(e.id, t, n != null ? n : p(e));
        })),
        f.apply(this, arguments)
      );
    }
    function g(t, n, a) {
      return o("WAPromiseTimeout")
        .promiseTimeout(
          r("WAPromiseRaceAbort")(
            o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.find(
              t,
            ),
            n,
          ),
          1500,
          "showNotificationTimeout",
        )
        .then(function (e) {
          var t;
          if (n.aborted) throw new (o("WAAbortError").AbortError)();
          var r = (t = e == null ? void 0 : e.img) != null ? t : a;
          return o("WAWebNotificationTone").cachePath(r);
        })
        .catch(
          o("WAFilteredCatch").filteredCatch(
            o("WACustomError").TimeoutError,
            function (n) {
              return (
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "NotificationBackend:IconLoadTimeoutError:",
                      "",
                    ])),
                  t.toString(),
                ),
                o("WAWebNotificationTone").cachePath(a)
              );
            },
          ),
        );
    }
    ((l.USER_DEFAULT_ICON = d),
      (l.getDefaultChatNotificationIcon = p),
      (l.getChatNotificationIcon = _),
      (l.getNotificationIconByWid = g));
  },
  98,
);
