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
    "WAWebOrgMemberContactName",
    "WAWebSystemMessageGatingUtils",
    "WAWebWidFormat",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    function e(e, t) {
      (t === void 0 && (t = !1), e.subtype === "device" || u(0, 56347));
      var n = o(
          "WAWebSystemMessageGatingUtils",
        ).systemMessageActionTextStylingEnabled(),
        r =
          e.body != null && e.body !== ""
            ? o("WAWebContactCollection").ContactCollection.get(e.body)
            : null,
        a,
        i = e.devicesAdded === 1 && e.devicesRemoved === 0,
        l = e.devicesAdded === 0 && e.devicesRemoved === 1,
        c = !i && !l;
      if (r != null && o("WAWebContactGetters").getIsMe(r)) {
        var d = o("WAWebFrontendMsgGetters").getChat(e.unsafe());
        if (o("WAWebChatGetters").getIsUser(d)) {
          var m,
            p =
              (m = o("WAWebOrgMemberContactName").getOrgMemberDisplayName(
                d.contact,
              )) != null
                ? m
                : o("WAWebFrontendContactGetters").getFormattedName(d.contact);
          t
            ? i
              ? e.isThisDeviceAdded
                ? (a = s._(
                    /*BTDS*/ "Your security code with {contactName} changed because there was a login on this device.",
                    [s._param("contactName", p)],
                  ))
                : (a = s._(
                    /*BTDS*/ "Your security code with {contactName} changed because there was a login on a new device of yours.",
                    [s._param("contactName", p)],
                  ))
              : l
                ? (a = s._(
                    /*BTDS*/ "Your security code with {contactName} changed because there was a logout from one of your devices.",
                    [s._param("contactName", p)],
                  ))
                : c &&
                  (a = s._(
                    /*BTDS*/ "Your security code with {contactName} changed because there was a login or logout from one or more of your devices.",
                    [s._param("contactName", p)],
                  ))
            : (a = n
                ? s._(
                    /*BTDS*/ "Your security code with {contactName} changed",
                    [s._param("contactName", p)],
                  )
                : s._(
                    /*BTDS*/ "Your security code with {contactName} changed. Click to learn more",
                    [s._param("contactName", p)],
                  ));
        } else
          o("WAWebChatGetters").getIsGroup(d)
            ? t
              ? i
                ? e.isThisDeviceAdded
                  ? (a = s._(
                      /*BTDS*/ 'Your security code with all members changed because there was a login on this device. To verify a contact\'s security code, open their contact info page and click "Encryption".',
                    ))
                  : (a = s._(
                      /*BTDS*/ 'Your security code with all members changed because there was a login on a new device of yours. To verify a contact\'s security code, open their contact info page and click "Encryption".',
                    ))
                : l
                  ? (a = s._(
                      /*BTDS*/ 'Your security code with all members changed because there was a logout from one of your devices. To verify a contact\'s security code, open their contact info page and click "Encryption".',
                    ))
                  : c &&
                    (a = s._(
                      /*BTDS*/ 'Your security code with all members changed because there was a login or logout from one or more of your devices. To verify a contact\'s security code, open their contact info page and click "Encryption".',
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
                        /*BTDS*/ 'Your security code with all recipients changed because there was a login on this device. To verify a contact\'s security code, open their contact info page and click "Encryption".',
                      ))
                    : (a = s._(
                        /*BTDS*/ 'Your security code with all recipients changed because there was a login on a new device of yours. To verify a contact\'s security code, open their contact info page and click "Encryption".',
                      ))
                  : l
                    ? (a = s._(
                        /*BTDS*/ 'Your security code with all recipients changed because there was a logout from one of your devices. To verify a contact\'s security code, open their contact info page and click "Encryption".',
                      ))
                    : c &&
                      (a = s._(
                        /*BTDS*/ 'Your security code with all recipients changed because there was a login or logout from one or more of your devices. To verify a contact\'s security code, open their contact info page and click "Encryption".',
                      ))
                : (a = n
                    ? s._(
                        /*BTDS*/ "Your security code with all recipients changed",
                      )
                    : s._(
                        /*BTDS*/ "Your security code with all recipients changed. Click to learn more",
                      )));
      } else {
        var _,
          f = e.body;
        r =
          f == null
            ? null
            : o("WAWebContactCollection").ContactCollection.get(f);
        var g = r
          ? (_ = o("WAWebOrgMemberContactName").getOrgMemberDisplayName(r)) !=
            null
            ? _
            : o("WAWebFrontendContactGetters").getFormattedName(r)
          : o("WAWebWidFormat").widToFormattedUser(f);
        t
          ? i
            ? (a = s._(
                /*BTDS*/ "Your security code with {contactName} changed because they registered WhatsApp on their phone again.",
                [s._param("contactName", g)],
              ))
            : l
              ? (a = s._(
                  /*BTDS*/ "Your security code with {contactName} changed because there was a logout from one of their devices.",
                  [s._param("contactName", g)],
                ))
              : c &&
                (a = s._(
                  /*BTDS*/ "Your security code with {contactName} changed because there was a login or logout from one or more of their devices.",
                  [s._param("contactName", g)],
                ))
          : (a = n
              ? s._(/*BTDS*/ "Your security code with {contactName} changed", [
                  s._param("contactName", g),
                ])
              : s._(
                  /*BTDS*/ "Your security code with {contactName} changed. Click to learn more",
                  [s._param("contactName", g)],
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
