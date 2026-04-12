__d(
  "WAWebDeleteNewsletterMsgModal.react",
  [
    "fbt",
    "WAAckLevel",
    "WAWebConfirmPopup.react",
    "WAWebEnforcementActionLogging",
    "WAWebWamEnumInteractionSurface",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u.useEffect;
    function m(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.fromChannelAlerts,
        l = a.msgList,
        u = a.onCancel,
        m = a.onRevoke;
      d(function () {
        r("WAWebEnforcementActionLogging").setSurface(
          o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE
            .DELETE_CHANNEL_MSG_CONFIRMATION_SCREEN,
        );
      }, []);
      var p =
          i === !0
            ? s._(
                /*BTDS*/ '_j{"*":"Followers will no longer be able to see these updates on your channel.","_1":"Followers will no longer be able to see this update on your channel."}',
                [s._plural(l.length)],
              )
            : s._(/*BTDS*/ '_j{"*":"Delete updates?","_1":"Delete update?"}', [
                s._plural(l.length),
              ]),
        _ = l.every(function (e) {
          return e.ack < o("WAAckLevel").ACK.SENT;
        })
          ? s._(/*BTDS*/ "Delete for me")
          : s._(/*BTDS*/ "Delete for everyone");
      return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: p,
        okText: _,
        onOK: m,
        okButtonType: "solid-warning",
        onCancel: u,
        ref: n,
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
