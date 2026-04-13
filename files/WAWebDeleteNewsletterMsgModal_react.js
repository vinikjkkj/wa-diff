__d(
  "WAWebDeleteNewsletterMsgModal.react",
  [
    "fbt",
    "WAAckLevel",
    "WAWebConfirmPopup.react",
    "WAWebEnforcementActionLogging",
    "WAWebWamEnumInteractionSurface",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u.useEffect;
    function m(t) {
      var n = o("react-compiler-runtime").c(15),
        r,
        a;
      n[0] !== t
        ? ((a = t.ref),
          (r = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = r),
          (n[2] = a))
        : ((r = n[1]), (a = n[2]));
      var i = r,
        l = i.fromChannelAlerts,
        u = i.msgList,
        m = i.onCancel,
        f = i.onRevoke,
        g;
      (n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = []), (n[3] = g))
        : (g = n[3]),
        d(_, g));
      var h;
      n[4] !== l || n[5] !== u.length
        ? ((h =
            l === !0
              ? s._(
                  /*BTDS*/ '_j{"*":"Followers will no longer be able to see these updates on your channel.","_1":"Followers will no longer be able to see this update on your channel."}',
                  [s._plural(u.length)],
                )
              : s._(
                  /*BTDS*/ '_j{"*":"Delete updates?","_1":"Delete update?"}',
                  [s._plural(u.length)],
                )),
          (n[4] = l),
          (n[5] = u.length),
          (n[6] = h))
        : (h = n[6]);
      var y = h,
        C;
      n[7] !== u
        ? ((C = u.every(p)
            ? s._(/*BTDS*/ "Delete for me")
            : s._(/*BTDS*/ "Delete for everyone")),
          (n[7] = u),
          (n[8] = C))
        : (C = n[8]);
      var b = C,
        v;
      return (
        n[9] !== b || n[10] !== m || n[11] !== f || n[12] !== a || n[13] !== y
          ? ((v = c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              title: y,
              okText: b,
              onOK: f,
              okButtonType: "solid-warning",
              onCancel: m,
              ref: a,
            })),
            (n[9] = b),
            (n[10] = m),
            (n[11] = f),
            (n[12] = a),
            (n[13] = y),
            (n[14] = v))
          : (v = n[14]),
        v
      );
    }
    function p(e) {
      return e.ack < o("WAAckLevel").ACK.SENT;
    }
    function _() {
      r("WAWebEnforcementActionLogging").setSurface(
        o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE
          .DELETE_CHANNEL_MSG_CONFIRMATION_SCREEN,
      );
    }
    l.default = m;
  },
  226,
);
