__d(
  "WAWebContactManagerListSort",
  [
    "WAWebAcquisitionSourceNames",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebLabelCollection",
    "WAWebListItemParentType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (t == null)
        return [].concat(e).sort(function (e, t) {
          var n, r;
          return (
            ((n = t.leadData.modifiedAt) != null ? n : 0) -
            ((r = e.leadData.modifiedAt) != null ? r : 0)
          );
        });
      var n = t.direction,
        r = t.key,
        o = new Intl.Collator(),
        a = e.map(function (e) {
          return { contact: e, value: u(r, e.leadData) };
        });
      return (
        a.sort(function (e, t) {
          return s({ a: e.value, b: t.value, collator: o, direction: n });
        }),
        a.map(function (e) {
          return e.contact;
        })
      );
    }
    function s(e) {
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
    function u(e, t) {
      var n, r, a, i, l;
      return e === "customer"
        ? c(t)
        : e === "phone"
          ? d(t)
          : e === "email"
            ? (n = t.email) != null
              ? n
              : null
            : e === "leadStage"
              ? (r = t.leadStage) != null
                ? r
                : null
              : e === "acquisitionSource"
                ? m(t)
                : e === "list"
                  ? p(t)
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
    function c(e) {
      var t = o("WAWebContactCollection").ContactCollection.get(e.chatJid);
      return t != null
        ? o("WAWebFrontendContactGetters").getDisplayName(t)
        : null;
    }
    function d(e) {
      var t = o("WAWebContactCollection").ContactCollection.get(e.chatJid);
      return t != null
        ? o("WAWebFrontendContactGetters").getFormattedPhoneAndType(t)
            .displayName
        : null;
    }
    function m(e) {
      var t = e.acquisitionSource;
      if (t == null) return null;
      var n = o("WAWebAcquisitionSourceNames").getAcquisitionSourceDisplayName(
        t,
      );
      return n != null ? String(n) : null;
    }
    function p(e) {
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
