__d(
  "WAWebContactManagerListSort",
  [
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebCustomerProfileAcquisitionSourceNames",
    "WAWebFrontendContactGetters",
    "WAWebLabelCollection",
    "WAWebListItemParentType",
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
          name: c("customer", e.leadData),
          time: c("lastMessage", e.leadData),
        };
      });
      return (
        n.sort(function (e, n) {
          var r = u({ a: e.time, b: n.time, collator: t, direction: "desc" });
          return r !== 0
            ? r
            : u({ a: e.name, b: n.name, collator: t, direction: "asc" });
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
        ? d(t)
        : e === "phone"
          ? m(t)
          : e === "email"
            ? (n = t.email) != null
              ? n
              : null
            : e === "leadStage"
              ? (r = t.leadStage) != null
                ? r
                : null
              : e === "acquisitionSource"
                ? p(t)
                : e === "list"
                  ? _(t)
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
      var t = o("WAWebContactCollection").ContactCollection.get(e.chatJid);
      return t != null
        ? o("WAWebFrontendContactGetters").getDisplayName(t)
        : null;
    }
    function m(e) {
      var t = o("WAWebContactCollection").ContactCollection.get(e.chatJid);
      return t != null
        ? o("WAWebFrontendContactGetters").getFormattedPhoneAndType(t)
            .displayName
        : null;
    }
    function p(e) {
      var t = e.acquisitionSource;
      if (t == null) return null;
      var n = o(
        "WAWebCustomerProfileAcquisitionSourceNames",
      ).getProfileAcquisitionSourceLabel(t);
      return n != null ? String(n) : null;
    }
    function _(e) {
      var t,
        n,
        r = o("WAWebLabelCollection").LabelCollection.getLabelsForModel(
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
