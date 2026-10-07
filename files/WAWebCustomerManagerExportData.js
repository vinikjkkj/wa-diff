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
    function e(e, t) {
      return e.map(function (e) {
        return s(e, t);
      });
    }
    function s(e, t) {
      var n,
        r,
        a,
        i,
        l = String(e.chatJid),
        s = o("WAWebCustomerContactResolver").resolveCustomerContact(
          o("WAWebWidFactory").createWid(l),
        ),
        u = (n = t.get(l)) != null ? n : null,
        c = Array.from(
          new Set(
            [].concat(
              o("WAWebBizLabelUtils").getLabelsForModelAnyAddressingMode(
                l,
                o("WAWebListItemParentType").LabelItemParentType.Chat,
              ),
              (r = s == null ? void 0 : s.labels) != null ? r : [],
              o("WAWebCustomerContactResolver").resolveCustomerLabelIds(l),
            ),
          ),
        ),
        d = [];
      for (var m of c) {
        var p,
          _ =
            (p = o("WAWebLabelCollection").LabelCollection.get(m)) == null
              ? void 0
              : p.name;
        _ != null && d.push(_);
      }
      return {
        displayName:
          s != null ? o("WAWebFrontendContactGetters").getDisplayName(s) : "",
        phone:
          s != null
            ? o("WAWebFrontendContactGetters").getFormattedPhoneAndType(s)
                .displayName
            : "",
        username:
          s != null
            ? o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(s)
            : "",
        email: e.email,
        leadStage: e.leadStage,
        acquisitionSource: e.acquisitionSource,
        notes: u,
        birthday: e.birthday,
        birthdayIso: e.birthdayIso,
        lastOrder: e.lastOrder,
        lastMessage:
          (a =
            (i = o(
              "WAWebCustomerManagerChatResolver",
            ).resolveCustomerManagerChat(e.chatJid)) == null
              ? void 0
              : i.t) != null
            ? a
            : null,
        address: e.address,
        altPhoneNumbers: e.altPhoneNumbers,
        lists: d,
        createdAt: e.createdAt,
        modifiedAt: e.modifiedAt,
      };
    }
    l.buildCustomerExportRecords = e;
  },
  98,
);
