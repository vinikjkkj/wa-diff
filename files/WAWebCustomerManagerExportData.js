__d(
  "WAWebCustomerManagerExportData",
  [
    "WAWebBizLabelUtils",
    "WAWebCustomerContactResolver",
    "WAWebCustomerManagerChatResolver",
    "WAWebFrontendContactGetters",
    "WAWebLabelCollection",
    "WAWebListItemParentType",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
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
        d = o("WAWebCustomerContactResolver").resolveCustomerContact(
          o("WAWebWidFactory").createWid(s),
        ),
        m = (r = t.get(s)) != null ? r : null,
        p = Array.from(
          new Set(
            [].concat(
              o("WAWebBizLabelUtils").getLabelsForModelAnyAddressingMode(
                s,
                o("WAWebListItemParentType").LabelItemParentType.Chat,
              ),
              (a = d == null ? void 0 : d.labels) != null ? a : [],
              o("WAWebCustomerContactResolver").resolveCustomerLabelIds(s),
            ),
          ),
        ),
        _ = [];
      for (var f of p) {
        var g,
          h =
            (g = o("WAWebLabelCollection").LabelCollection.get(f)) == null
              ? void 0
              : g.name;
        h != null && _.push(h);
      }
      return {
        displayName:
          d != null ? o("WAWebFrontendContactGetters").getDisplayName(d) : "",
        phone:
          d != null
            ? u(
                o("WAWebFrontendContactGetters").getFormattedPhoneAndType(d)
                  .displayName,
              )
            : "",
        username: d != null ? c(d) : "",
        email: e.email,
        leadStage: e.leadStage,
        acquisitionSource: e.acquisitionSource,
        notes: m,
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
        altPhoneNumbers:
          e.altPhoneNumbers != null ? u(e.altPhoneNumbers) : null,
        lists: _,
        createdAt: e.createdAt,
        modifiedAt: e.modifiedAt,
        customFieldValues: n,
      };
    }
    function u(e) {
      return e.replace(/\+(?=\d)/g, "");
    }
    function c(e) {
      var t = o("WAWebFrontendContactGetters").getUsername(e);
      return o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
        o("WAWebUsernameTypes").isPresentUsername(t)
        ? o("WAWebUsernameTypes").serializeUsername(t)
        : "";
    }
    l.buildCustomerExportRecords = e;
  },
  98,
);
