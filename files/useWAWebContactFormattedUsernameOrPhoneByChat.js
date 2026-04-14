__d(
  "useWAWebContactFormattedUsernameOrPhoneByChat",
  [
    "WAWebChatCommunityUtils",
    "WAWebFrontendContactGetters",
    "WAWebLidMigrationUtils",
    "useWAWebContactValues",
    "useWAWebEventTargetValue",
    "useWAWebIAmCommunityAdmin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        a,
        i = t.id,
        l = o("useWAWebContactValues").useContactValues(t.id, [
          o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone,
          o("WAWebFrontendContactGetters").getMaskedPhoneLid,
        ]),
        s = l[0],
        u = l[1],
        c =
          e == null ||
          (n = e.groupMetadata) == null ||
          (n = n.getParentGroupChat()) == null
            ? void 0
            : n.groupMetadata,
        d = r("useWAWebIAmCommunityAdmin")(c),
        m = (a = o("WAWebLidMigrationUtils").toPn(i)) != null ? a : i,
        p = r("useWAWebEventTargetValue")(
          c == null ? void 0 : c.participants,
          ["bulk_add", "bulk_remove"],
          function () {
            var e;
            return (
              m.isUser() &&
              !!(
                !(c == null || (e = c.participants) == null) && e.userIsAdmin(m)
              )
            );
          },
        );
      return o("WAWebChatCommunityUtils").shouldMaskPhoneNumberForChat(e, t, {
        iAmCommunityAdmin: d,
        isSenderAdmin: p,
      })
        ? { formattedUsernameOrPhone: u, isPhoneNumberForceMasked: !0 }
        : { formattedUsernameOrPhone: s, isPhoneNumberForceMasked: null };
    }
    l.default = e;
  },
  98,
);
