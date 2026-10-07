__d(
  "WAWebCustomerManagerExportData",
  [
    "WAWebBizLabelUtils",
    "WAWebCustomerContactResolver",
    "WAWebCustomerManagerChatResolver",
    "WAWebFrontendContactGetters",
    "WAWebLabelCollection",
    "WAWebListItemParentType",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return (
        n === void 0 && (n = new Map()),
        e.map(function (e) {
          var r;
          return s(e, t, (r = n.get(String(e.chatJid))) != null ? r : []);
        })
      );
    }
    function s(e, t, n) {
      var r,
        a,
        i,
        l,
        s = String(e.chatJid),
        u = o("WAWebCustomerContactResolver").resolveCustomerContact(
          o("WAWebWidFactory").createWid(s),
        ),
        c = (r = t.get(s)) != null ? r : null,
        d = Array.from(
          new Set(
            [].concat(
              o("WAWebBizLabelUtils").getLabelsForModelAnyAddressingMode(
                s,
                o("WAWebListItemParentType").LabelItemParentType.Chat,
              ),
              (a = u == null ? void 0 : u.labels) != null ? a : [],
              o("WAWebCustomerContactResolver").resolveCustomerLabelIds(s),
            ),
          ),
        ),
        m = [];
      for (var p of d) {
        var _,
          f =
            (_ = o("WAWebLabelCollection").LabelCollection.get(p)) == null
              ? void 0
              : _.name;
        f != null && m.push(f);
      }
      return {
        displayName:
          u != null ? o("WAWebFrontendContactGetters").getDisplayName(u) : "",
        phone:
          u != null
            ? o("WAWebFrontendContactGetters").getFormattedPhoneAndType(u)
                .displayName
            : "",
        username:
          u != null
            ? o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(u)
            : "",
        email: e.email,
        leadStage: e.leadStage,
        acquisitionSource: e.acquisitionSource,
        notes: c,
        birthday: e.birthday,
        birthdayIso: e.birthdayIso,
        lastOrder: e.lastOrder,
        lastMessage:
          (i =
            (l = o(
              "WAWebCustomerManagerChatResolver",
            ).resolveCustomerManagerChat(e.chatJid)) == null
              ? void 0
              : l.t) != null
            ? i
            : null,
        address: e.address,
        altPhoneNumbers: e.altPhoneNumbers,
        lists: m,
        createdAt: e.createdAt,
        modifiedAt: e.modifiedAt,
        customFieldValues: n,
      };
    }
    l.buildCustomerExportRecords = e;
  },
  98,
);
