__d(
  "WAWebStatusMuteContactPopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebModal.react",
    "WAWebStatusGatingUtils",
    "WAWebText.react",
    "react",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { marginBottom32: { marginBottom: "xg6s713", $$css: !0 } };
    function d(e) {
      var t = e.contact,
        n = e.onCancel,
        r = e.onMute,
        a = o("useWAWebContactValues").useContactValues(t.id, [
          o("WAWebFrontendContactGetters").getFormattedName,
        ]),
        i = a[0],
        l = s._(
          /*BTDS*/ "Mute {name-of-contact-being-muted} 's status updates?",
          [s._param("name-of-contact-being-muted", i)],
        ),
        d = s._(
          /*BTDS*/ "Hide {name-of-contact-being-hidden} 's status updates?",
          [s._param("name-of-contact-being-hidden", i)],
        ),
        m = s._(/*BTDS*/ "Mute"),
        p = s._(/*BTDS*/ "Hide"),
        _ = o("WAWebStatusGatingUtils").isStatusPrivateMentionsReceiveEnabled()
          ? s._(
              /*BTDS*/ "You won't be notified of mentions from this contact. Their new status updates also won't appear at the top of the status list anymore.",
            )
          : s._(
              /*BTDS*/ "New status updates from {name-of-contact-being-muted} won't appear at the top of the status list anymore.",
              [s._param("name-of-contact-being-muted", i)],
            ),
        f =
          o("WAWebStatusGatingUtils").isUpdatesTabInNavigationBarEnabled() ||
          o("WAWebStatusGatingUtils").isStatusHideStringEnabled();
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        type: o("WAWebModal.react").ModalTheme.StatusReport,
        title: u.jsx(o("WAWebEmojiText.react").EmojiText, { text: f ? d : l }),
        okText: f ? p : m,
        onOK: r,
        cancelText: s._(/*BTDS*/ "Cancel"),
        onCancel: n,
        children: u.jsx(o("WAWebFlex.react").FlexRow, {
          align: "center",
          justify: "center",
          children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
            xstyle: c.marginBottom32,
            children: u.jsx(o("WAWebEmojiText.react").EmojiText, { text: _ }),
          }),
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
