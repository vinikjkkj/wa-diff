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
        m = o("WAWebCustomerContactResolver").resolveCustomerContact(
          o("WAWebWidFactory").createWid(s),
        ),
        p = (r = t.get(s)) != null ? r : null,
        _ = Array.from(
          new Set(
            [].concat(
              o("WAWebBizLabelUtils").getLabelsForModelAnyAddressingMode(
                s,
                o("WAWebListItemParentType").LabelItemParentType.Chat,
              ),
              (a = m == null ? void 0 : m.labels) != null ? a : [],
              o("WAWebCustomerContactResolver").resolveCustomerLabelIds(s),
            ),
          ),
        ),
        f = [];
      for (var g of _) {
        var h,
          y =
            (h = o("WAWebLabelCollection").LabelCollection.get(g)) == null
              ? void 0
              : h.name;
        y != null && f.push(c(y));
      }
      return {
        displayName:
          m != null ? o("WAWebFrontendContactGetters").getDisplayName(m) : "",
        phone:
          m != null
            ? u(
                o("WAWebFrontendContactGetters").getFormattedPhoneAndType(m)
                  .displayName,
              )
            : "",
        username: m != null ? d(m) : "",
        email: e.email,
        leadStage: e.leadStage,
        acquisitionSource: e.acquisitionSource,
        notes: p,
        birthday: e.birthday,
        birthdayIso: e.birthdayIso,
        lastOrderDescription: e.lastOrderDescription,
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
        lists: f,
        createdAt: e.createdAt,
        modifiedAt: e.modifiedAt,
        customFieldValues: n,
      };
    }
    function u(e) {
      return e.replace(/\+(?=\d)/g, "");
    }
    function c(e) {
      return e.replace(
        /^[\u200E\u200F\u061C\u202A-\u202E\u2066-\u2069]+|[\u200E\u200F\u061C\u202A-\u202E\u2066-\u2069]+$/g,
        "",
      );
    }
    function d(e) {
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
