__d(
  "WAWebFormatE2ENotificationForDeviceChange",
  [
    "fbt",
    "invariant",
    "WAWebChatGetters",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebSystemMessageGatingUtils",
    "WAWebWidFormat",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    function e(e, t) {
      (t === void 0 && (t = !1), e.subtype === "device" || u(0, 56347));
      var n = o(
          "WAWebSystemMessageGatingUtils",
        ).systemMessageActionTextStylingEnabled(),
        r = e.body
          ? o("WAWebContactCollection").ContactCollection.get(e.body)
          : null,
        a,
        i = e.devicesAdded === 1 && e.devicesRemoved === 0,
        l = e.devicesAdded === 0 && e.devicesRemoved === 1,
        c = !i && !l;
      if (r != null && o("WAWebContactGetters").getIsMe(r)) {
        var d = o("WAWebFrontendMsgGetters").getChat(e.unsafe());
        if (o("WAWebChatGetters").getIsUser(d)) {
          var m = o("WAWebFrontendContactGetters").getFormattedName(d.contact);
          t
            ? i
              ? e.isThisDeviceAdded
                ? (a = s._(
                    /*BTDS*/ "Your security code with {contactName} changed because there was a login on this device.",
                    [s._param("contactName", m)],
                  ))
                : (a = s._(
                    /*BTDS*/ "Your security code with {contactName} changed because there was a login on a new device of yours.",
                    [s._param("contactName", m)],
                  ))
              : l
                ? (a = s._(
                    /*BTDS*/ "Your security code with {contactName} changed because there was a logout from one of your devices.",
                    [s._param("contactName", m)],
                  ))
                : c &&
                  (a = s._(
                    /*BTDS*/ "Your security code with {contactName} changed because there was a login or logout from one or more of your devices.",
                    [s._param("contactName", m)],
                  ))
            : (a = n
                ? s._(
                    /*BTDS*/ "Your security code with {contactName} changed",
                    [s._param("contactName", m)],
                  )
                : s._(
                    /*BTDS*/ "Your security code with {contactName} changed. Click to learn more",
                    [s._param("contactName", m)],
                  ));
        } else
          o("WAWebChatGetters").getIsGroup(d)
            ? t
              ? i
                ? e.isThisDeviceAdded
                  ? (a = s._(
                      /*BTDS*/ 'Your security code with all members changed because there was a login on this device. To verify a contact\'s security code, open their Contact Info page and click "Encryption".',
                    ))
                  : (a = s._(
                      /*BTDS*/ 'Your security code with all members changed because there was a login on a new device of yours. To verify a contact\'s security code, open their Contact Info page and click "Encryption"',
                    ))
                : l
                  ? (a = s._(
                      /*BTDS*/ 'Your security code with all members changed because there was a logout from one of your devices. To verify a contact\'s security code, open their Contact Info page and click "Encryption".',
                    ))
                  : c &&
                    (a = s._(
                      /*BTDS*/ 'Your security code with all members changed because there was a login or logout from one or more of your devices. To verify a contact\'s security code, open their Contact Info page and click "Encryption".',
                    ))
              : (a = n
                  ? s._(/*BTDS*/ "Your security code with all members changed")
                  : s._(
                      /*BTDS*/ "Your security code with all members changed. Click to learn more",
                    ))
            : o("WAWebChatGetters").getIsBroadcast(d) &&
              (t
                ? i
                  ? e.isThisDeviceAdded
                    ? (a = s._(
                        /*BTDS*/ 'Your security code with all recipients changed because there was a login on this device. To verify a contact\'s security code, open their Contact Info page and click "Encryption".',
                      ))
                    : (a = s._(
                        /*BTDS*/ 'Your security code with all recipients changed because there was a login on a new device of yours. To verify a contact\'s security code, open their Contact Info page and click "Encryption".',
                      ))
                  : l
                    ? (a = s._(
                        /*BTDS*/ 'Your security code with all recipients changed because there was a logout from one of your devices. To verify a contact\'s security code, open their Contact Info page and click "Encryption".',
                      ))
                    : c &&
                      (a = s._(
                        /*BTDS*/ 'Your security code with all recipients changed because there was a login or logout from one or more of your devices. To verify a contact\'s security code, open their Contact Info page and click "Encryption".',
                      ))
                : (a = n
                    ? s._(
                        /*BTDS*/ "Your security code with all recipients changed",
                      )
                    : s._(
                        /*BTDS*/ "Your security code with all recipients changed. Click to learn more",
                      )));
      } else {
        var p = e.body;
        r =
          p == null
            ? null
            : o("WAWebContactCollection").ContactCollection.get(p);
        var _ = r
          ? o("WAWebFrontendContactGetters").getFormattedName(r)
          : o("WAWebWidFormat").widToFormattedUser(p);
        t
          ? i
            ? (a = s._(
                /*BTDS*/ "Your security code with {contactName} changed because they registered WhatsApp on their phone again.",
                [s._param("contactName", _)],
              ))
            : l
              ? (a = s._(
                  /*BTDS*/ "Your security code with {contactName} changed because there was a logout from one of their devices.",
                  [s._param("contactName", _)],
                ))
              : c &&
                (a = s._(
                  /*BTDS*/ "Your security code with {contactName} changed because there was a login or logout from one or more of their devices.",
                  [s._param("contactName", _)],
                ))
          : (a = n
              ? s._(/*BTDS*/ "Your security code with {contactName} changed", [
                  s._param("contactName", _),
                ])
              : s._(
                  /*BTDS*/ "Your security code with {contactName} changed. Click to learn more",
                  [s._param("contactName", _)],
                ));
      }
      return (a != null || u(0, 56348), { text: a });
    }
    function c(t, n) {
      return (n === void 0 && (n = !1), e(t, n).text);
    }
    function d(t, n) {
      return (n === void 0 && (n = !1), e(t, n).enumType);
    }
    ((l.formatE2ENotificationForDeviceChange = c),
      (l.getE2ENotificationForDeviceChangeEnum = d));
  },
  226,
);
