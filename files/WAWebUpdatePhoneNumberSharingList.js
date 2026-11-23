__d(
  "WAWebUpdatePhoneNumberSharingList",
  [
    "WAJids",
    "WAWebMexClient",
    "WAWebNotifyPhoneNumberSharingSettingsChanged",
    "WAWebPhoneNumberSharingPrivacyLists",
    "WAWebPhoneNumberSharingSettingsRefresh",
    "WAWebPhoneNumberSharingSettingsRequests",
    "WAWebPhoneNumberSharingSettingsUI",
    "WAWebSchemaPrivacyDisallowedList",
    "WAWebUpdatePhoneNumberSharingListMutation.graphql",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebUpdatePhoneNumberSharingListMutation.graphql")),
      u = "none";
    function c(e, t, n) {
      return o(
        "WAWebPhoneNumberSharingSettingsRequests",
      ).enqueuePhoneNumberSharingSettingsRequest(async function () {
        var a;
        if (
          !(await o(
            "WAWebPhoneNumberSharingSettingsUI",
          ).isPhoneNumberSharingSettingsAvailable())
        )
          throw r("err")("phone-number-sharing: settings unavailable");
        var i = o(
            "WAWebSchemaPrivacyDisallowedList",
          ).getPrivacyDisallowedListTable(),
          l = await i.get(e),
          c = (a = l == null ? void 0 : l.dhash) != null ? a : u;
        if (c !== t)
          throw r("err")("phone-number-sharing: list changed before update");
        var p = o(
            "WAWebPhoneNumberSharingPrivacyLists",
          ).getPhoneNumberSharingListEntries(l),
          h = Array.from(new Set(n)),
          y = [].concat(m(e, "ADD", d(h, p)), m(e, "DEL", d(p, h)));
        if (y.length !== 0) {
          var C = await o("WAWebMexClient").fetchQuery(s, {
              input: _(e, { dhash: c, entries: y }),
            }),
            b = f(e, C.xwa2_privacy_phone_number_sharing_update);
          if (
            o(
              "WAWebPhoneNumberSharingSettingsRequests",
            ).isPhoneNumberSharingSettingsInvalidated()
          )
            throw r("err")(
              "phone-number-sharing: settings changed during update",
            );
          (await i.createOrReplace(g(e, h, b)),
            await o(
              "WAWebNotifyPhoneNumberSharingSettingsChanged",
            ).notifyOrRefreshPhoneNumberSharingSettings());
        }
      });
    }
    function d(e, t) {
      var n = new Set(t);
      return e.filter(function (e) {
        return !n.has(e);
      });
    }
    function m(e, t, n) {
      return n.map(function (n) {
        return p(e, t, n);
      });
    }
    function p(e, t, n) {
      if (o("WAJids").validateGroupJid(n) != null) {
        if (e !== "pn_sharing:allow")
          throw r("err")(
            "phone-number-sharing: groups are only allowed in inclusions",
          );
        return { operation: t, entry_type: "GROUP", group_jid: n };
      }
      if (o("WAJids").validateLidUserJid(n) != null)
        return { operation: t, entry_type: "USER", user_jid: n };
      if (t === "ADD")
        throw r("err")("phone-number-sharing: new entries need a LID");
      return { operation: t, entry_type: "USER", pn_jid: n };
    }
    function _(e, t) {
      return e === "pn_sharing:deny"
        ? { deny_list: t }
        : e === "pn_sharing:allow"
          ? { allow_list: t }
          : e === "pn_sharing:contact_exclude"
            ? { contact_exclude_list: t }
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function f(e, t) {
      var n, a, i;
      if (t == null)
        throw r("err")("phone-number-sharing: missing list update response");
      var l = t.__typename;
      if (l === "XWA2PrivacyPhoneNumberSharingUpdateFailure")
        throw (
          t.error_code === "CONFLICT" &&
            o(
              "WAWebPhoneNumberSharingSettingsRefresh",
            ).schedulePhoneNumberSharingSettingsRefresh(),
          r("err")(
            "phone-number-sharing: list update failed " + String(t.error_code),
          )
        );
      if (l !== "XWA2PrivacyPhoneNumberSharingUpdateSuccess")
        throw r("err")("phone-number-sharing: list update failed");
      var s =
        e === "pn_sharing:deny"
          ? (n = t.deny_list) == null
            ? void 0
            : n.dhash
          : e === "pn_sharing:allow"
            ? (a = t.allow_list) == null
              ? void 0
              : a.dhash
            : e === "pn_sharing:contact_exclude"
              ? (i = t.contact_exclude_list) == null
                ? void 0
                : i.dhash
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
      if (s == null || s.length === 0)
        throw (
          o(
            "WAWebPhoneNumberSharingSettingsRefresh",
          ).schedulePhoneNumberSharingSettingsRefresh(),
          r("err")("phone-number-sharing: missing list digest")
        );
      return s;
    }
    function g(e, t, n) {
      return e === "pn_sharing:deny"
        ? { id: "pn_sharing:deny", disallowedList: [].concat(t), dhash: n }
        : e === "pn_sharing:allow"
          ? { id: "pn_sharing:allow", allowedList: [].concat(t), dhash: n }
          : e === "pn_sharing:contact_exclude"
            ? {
                id: "pn_sharing:contact_exclude",
                excludedContacts: t.map(h),
                dhash: n,
              }
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function h(e) {
      var t = o("WAJids").validateLidUserJid(e);
      if (t != null) return t;
      var n = o("WAJids").validateUserJid(e),
        a = n == null ? null : o("WAJids").interpretAsPhoneUserJid(n);
      if (a == null)
        throw r("err")(
          "phone-number-sharing: contact exclusions only hold people",
        );
      return a;
    }
    l.updatePhoneNumberSharingList = c;
  },
  98,
);
