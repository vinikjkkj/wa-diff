__d(
  "WAWebContactManagerListSort",
  [
    "WAWebBizLabelUtils",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebContactManagerContactName",
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
          return { contact: e, value: c(o, e.leadData) };
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
          name: c("customer", e.leadData),
          time: c("lastMessage", e.leadData),
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
      var n, r, a, i, l;
      return e === "customer"
        ? m(t)
        : e === "phone"
          ? p(t)
          : e === "username"
            ? _(t)
            : e === "email"
              ? (n = t.email) != null
                ? n
                : null
              : e === "address"
                ? (r = t.address) != null
                  ? r
                  : null
                : e === "birthday"
                  ? d(t)
                  : e === "acquisitionSource"
                    ? f(t)
                    : e === "list"
                      ? g(t)
                      : e === "lastMessage"
                        ? (a =
                            (i = o("WAWebChatCollection").ChatCollection.get(
                              t.chatJid,
                            )) == null
                              ? void 0
                              : i.t) != null
                          ? a
                          : null
                        : e === "lastOrder"
                          ? (l = t.lastOrder) != null
                            ? l
                            : null
                          : e === "select" || e === "actions" || e === "notes"
                            ? null
                            : (function () {
                                throw Error(
                                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                    e,
                                );
                              })();
    }
    function d(e) {
      var t = e.birthday;
      if (t == null || Number(t) === 0) return null;
      var n = new Date(t * 1e3);
      return n.getUTCMonth() * 32 + n.getUTCDate();
    }
    function m(e) {
      var t = o("WAWebContactCollection").ContactCollection.get(e.chatJid);
      if (t == null) return null;
      var n = o("WAWebFrontendContactGetters").getFormattedUserAndType(t),
        r = n.displayName,
        a = n.type;
      return o("WAWebContactManagerContactName").resolveContactManagerName({
        displayName: r,
        notifyName: o("WAWebContactGetters").getNotifyName(t),
        type: a,
      });
    }
    function p(e) {
      var t = o("WAWebContactCollection").ContactCollection.get(e.chatJid);
      return t != null
        ? o("WAWebFrontendContactGetters").getFormattedPhoneAndType(t)
            .displayName
        : null;
    }
    function _(e) {
      if (!o("WAWebUsernameGatingUtils").usernameDisplayedEnabled())
        return null;
      var t = o("WAWebContactCollection").ContactCollection.get(e.chatJid);
      if (t == null) return null;
      var n = o("WAWebFrontendContactGetters").getFormattedUsername(t);
      return n != null && n !== "" ? n : null;
    }
    function f(e) {
      var t = e.acquisitionSource;
      if (t == null) return null;
      var n = o(
        "WAWebCustomerProfileAcquisitionSourceNames",
      ).getProfileAcquisitionSourceLabel(t);
      return n != null ? String(n) : null;
    }
    function g(e) {
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
