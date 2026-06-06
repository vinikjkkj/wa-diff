__d(
  "WAWebChatGetExistingBridge",
  [
    "WAWebChatCollection",
    "WAWebChatFindBridge",
    "WAWebNewsletterCollection",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebChatCollection").ChatCollection.get(e);
          if (t && !t.stale) return t;
          var n = e.isNewsletter();
          if (n) {
            var a = r("WAWebNewsletterCollection").get(e);
            if (a != null && !a.stale)
              return r("WAWebNewsletterCollection").get(e);
          }
          var i = yield o("WAWebChatFindBridge").findLocal(e.toString());
          return i
            ? n
              ? r("WAWebNewsletterCollection").gadd(i)
              : o("WAWebChatCollection").ChatCollection.gadd(i)
            : null;
        })),
        s.apply(this, arguments)
      );
    }
    l.getExisting = e;
  },
  98,
);
