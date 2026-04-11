__d(
  "useWAWebConversationPanelEphemeralNux",
  [
    "WAWebAfterReadNux.react",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebModalManager",
    "WAWebNux",
    "WAWebWamEnumEphemeralSettingEntryPointType",
    "react",
    "useWAWebChatValues",
    "useWAWebListener",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useEffect;
    function c(e) {
      var t = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL),
        n = t[0],
        a = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL_AFTER_READ),
        i = a[0],
        l = o("useWAWebChatValues").useChatValues(e.id, [
          o("WAWebChatGetters").getIsUser,
        ]),
        c = l[0],
        d = null;
      n &&
        (o("WAWebChatGetters").getIsGroup(e) && e.groupMetadata != null
          ? (d = e.groupMetadata)
          : c && (d = e));
      var m = function () {
          n && o("WAWebChatEphemerality").isEphemeralSettingOn(e);
        },
        p = function () {
          var t = o("WAWebChatEphemerality").getAfterReadDurationForChat(e);
          i &&
            t != null &&
            o("WAWebModalManager").ModalManager.open(
              s.jsx(r("WAWebAfterReadNux.react"), { duration: t }),
            );
        };
      (u(m, []),
        u(p, []),
        o("useWAWebListener").useListener(d, "change:ephemeralDuration", m));
    }
    l.default = c;
  },
  98,
);
