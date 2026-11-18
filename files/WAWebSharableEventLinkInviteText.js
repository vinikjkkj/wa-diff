__d(
  "WAWebSharableEventLinkInviteText",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      return s
        ._(
          /*BTDS*/ "You\u2019re invited to \u201c{event name}\u201d on WhatsApp. Tap to see the details and RSVP: {link}",
          [s._param("event name", e), s._param("link", t)],
        )
        .toString();
    }
    l.getSharableEventLinkInviteText = e;
  },
  226,
);
