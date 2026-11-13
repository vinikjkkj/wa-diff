__d(
  "WAWebCustomerManagerListSort",
  [
    "WAWebBizLabelUtils",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebCustomerManagerChatResolver",
    "WAWebCustomerManagerContactName",
    "WAWebCustomerManagerCustomFieldTypes",
    "WAWebCustomerProfileAcquisitionSourceNames",
    "WAWebFrontendContactGetters",
    "WAWebLabelCollection",
    "WAWebListItemParentType",
    "WAWebUsernameGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = new Intl.Collator();
      if (t == null) return s(e, n);
      var r = t.direction,
        o = t.key,
        a = e.map(function (e) {
          return { contact: e, value: d(o, e.leadData, e) };
        });
      return (
        a.sort(function (e, t) {
          return u({ a: e.value, b: t.value, collator: n, direction: r });
        }),
        a.map(function (e) {
          return e.contact;
        })
      );
    }
    function s(e, t) {
      var n = e.map(function (e) {
        return {
          contact: e,
          rowId: e.id,
          name: d("customer", e.leadData),
          time: d("lastMessage", e.leadData),
        };
      });
      return (
        n.sort(function (e, n) {
          var r = u({ a: e.time, b: n.time, collator: t, direction: "desc" });
          if (r !== 0) return r;
          var o = u({ a: e.name, b: n.name, collator: t, direction: "asc" });
          return o !== 0 ? o : t.compare(e.rowId, n.rowId);
        }),
        n.map(function (e) {
          return e.contact;
        })
      );
    }
    function u(e) {
      var t = e.a,
        n = e.b,
        r = e.collator,
        o = e.direction;
      if (t == null && n == null) return 0;
      if (t == null) return 1;
      if (n == null) return -1;
      var a =
        typeof t == "string" && typeof n == "string"
          ? r.compare(t, n)
          : Number(t) - Number(n);
      return o === "desc" ? -a : a;
    }
    function c(e, t) {
      var n,
        r,
        o,
        a =
          t == null
            ? void 0
            : t.find(function (t) {
                return t.fieldId === e;
              });
      return a == null
        ? null
        : a.fieldType === "NUMERIC"
          ? (n = a.numericValue) != null
            ? n
            : null
          : a.fieldType === "MONEY"
            ? (r = a.moneyAmount) != null
              ? r
              : null
            : a.fieldType === "DATE"
              ? (o = a.dateValue) != null
                ? o
                : null
              : (a.fieldType === "TEXT" || a.fieldType === "ENUM") &&
                  a.value !== ""
                ? a.value
                : null;
    }
    function d(e, t, n) {
      var r,
        a,
        i,
        l,
        s = o("WAWebCustomerManagerCustomFieldTypes").customFieldIdFromKey(e);
      return s != null
        ? c(s, n == null ? void 0 : n.customFieldValues)
        : e === "customer"
          ? p(t)
          : e === "phone"
            ? _(t)
            : e === "username"
              ? f(t)
              : e === "email"
                ? (r = t.email) != null
                  ? r
                  : null
                : e === "address"
                  ? (a = t.address) != null
                    ? a
                    : null
                  : e === "birthday"
                    ? m(t)
                    : e === "acquisitionSource"
                      ? g(t)
                      : e === "list"
                        ? h(t)
                        : e === "lastMessage" &&
                            (i =
                              (l = o(
                                "WAWebCustomerManagerChatResolver",
                              ).resolveCustomerManagerChat(t.chatJid)) == null
                                ? void 0
                                : l.t) != null
                          ? i
                          : null;
    }
    function m(e) {
      var t = e.birthday;
      if (t == null || Number(t) === 0) return null;
      var n = new Date(t * 1e3);
      return n.getUTCMonth() * 32 + n.getUTCDate();
    }
    function p(e) {
      var t = o("WAWebContactCollection").ContactCollection.get(e.chatJid);
      if (t == null) return null;
      var n = o("WAWebFrontendContactGetters").getFormattedUserAndType(t),
        r = n.displayName,
        a = n.type;
      return o("WAWebCustomerManagerContactName").resolveCustomerManagerName({
        displayName: r,
        notifyName: o("WAWebContactGetters").getNotifyName(t),
        type: a,
      });
    }
    function _(e) {
      var t = o("WAWebContactCollection").ContactCollection.get(e.chatJid);
      return t != null
        ? o("WAWebFrontendContactGetters").getFormattedPhoneAndType(t)
            .displayName
        : null;
    }
    function f(e) {
      if (!o("WAWebUsernameGatingUtils").usernameDisplayedEnabled())
        return null;
      var t = o("WAWebContactCollection").ContactCollection.get(e.chatJid);
      if (t == null) return null;
      var n = o("WAWebFrontendContactGetters").getFormattedUsername(t);
      return n != null && n !== "" ? n : null;
    }
    function g(e) {
      var t = e.acquisitionSource;
      if (t == null) return null;
      var n = o(
        "WAWebCustomerProfileAcquisitionSourceNames",
      ).getProfileAcquisitionSourceLabel(t);
      return n != null ? String(n) : null;
    }
    function h(e) {
      var t,
        n,
        r = o("WAWebBizLabelUtils").getLabelsForModelAnyAddressingMode(
          String(e.chatJid),
          o("WAWebListItemParentType").LabelItemParentType.Chat,
        );
      return r.length === 0
        ? null
        : (t =
              (n = o("WAWebLabelCollection").LabelCollection.get(r[0])) == null
                ? void 0
                : n.name) != null
          ? t
          : null;
    }
    l.sortContactRowsForDisplay = e;
  },
  98,
);
