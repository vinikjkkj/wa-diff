__d(
  "WAWebArchiveMenuItem.react",
  [
    "fbt",
    "WAWebChatGetters",
    "WAWebNewsletterGatingUtils",
    "WDSIconIcArchive.react",
    "WDSIconIcUnarchive.react",
    "WDSMenuItem.react",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.disabled,
        n = o("useWAWebModelValues").useModelValues(e.chat, ["archive"]),
        a = e.onArchive.bind(null, !n.archive),
        i = "mi-archive",
        l = "ArchiveMenuItem",
        c =
          o("WAWebChatGetters").getIsNewsletter(e.chat) &&
          o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled(),
        d;
      return (
        n.archive
          ? (d = c
              ? s._(/*BTDS*/ "Unarchive channel")
              : s._(/*BTDS*/ "Unarchive chat"))
          : (d = c
              ? s._(/*BTDS*/ "Archive channel")
              : s._(/*BTDS*/ "Archive chat")),
        u.jsx(
          r("WDSMenuItem.react"),
          {
            Icon: n.archive
              ? r("WDSIconIcUnarchive.react")
              : r("WDSIconIcArchive.react"),
            title: d,
            testid: void 0,
            onPress: a,
            disabled: t,
          },
          l,
        )
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
