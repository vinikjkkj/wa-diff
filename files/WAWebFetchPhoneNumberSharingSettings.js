__d(
  "WAWebFetchPhoneNumberSharingSettings",
  [
    "WAJids",
    "WAWebFetchPhoneNumberSharingSettingsQuery.graphql",
    "WAWebFetchPhoneNumberSharingSettings_list.graphql",
    "WAWebMexClient",
    "WAWebModelStorageUtils",
    "WAWebNotifyPhoneNumberSharingSettingsChanged",
    "WAWebPhoneNumberSharingSettingsGating",
    "WAWebPhoneNumberSharingSettingsRequests",
    "WAWebSchemaPrivacyDisallowedList",
    "WAWebUserPrefsGeneral",
    "compactMap",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebFetchPhoneNumberSharingSettingsQuery.graphql")),
      c = "none",
      d = r("err")("phone-number-sharing: snapshot invalidated");
    function m() {
      return o(
        "WAWebPhoneNumberSharingSettingsRequests",
      ).enqueuePhoneNumberSharingSettingsRequest(p);
    }
    async function p() {
      var e, t, n;
      if (
        o(
          "WAWebPhoneNumberSharingSettingsGating",
        ).phoneNumberSharingSettingsEnabled()
      ) {
        var r = o(
            "WAWebSchemaPrivacyDisallowedList",
          ).getPrivacyDisallowedListTable(),
          a = await Promise.all([
            r.get("pn_sharing:deny"),
            r.get("pn_sharing:allow"),
            r.get("pn_sharing:contact_exclude"),
          ]),
          i = a[0],
          l = a[1],
          s = a[2];
        if (
          !o(
            "WAWebPhoneNumberSharingSettingsRequests",
          ).isPhoneNumberSharingSettingsInvalidated()
        ) {
          var d = (e = i == null ? void 0 : i.dhash) != null ? e : c,
            m = (t = l == null ? void 0 : l.dhash) != null ? t : c,
            p = (n = s == null ? void 0 : s.dhash) != null ? n : c,
            g = await o("WAWebMexClient").fetchQuery(u, {
              input: {
                deny_list: { dhash: d },
                allow_list: { dhash: m },
                contact_exclude_list: { dhash: p },
              },
            });
          if (
            !o(
              "WAWebPhoneNumberSharingSettingsRequests",
            ).isPhoneNumberSharingSettingsInvalidated()
          ) {
            var h = g.xwa2_privacy_phone_number_sharing_get,
              y = b(h == null ? void 0 : h.setting),
              C = [
                {
                  type: "pn_sharing:deny",
                  expectedHash: d,
                  row: f(
                    "pn_sharing:deny",
                    h == null ? void 0 : h.deny_list,
                    i,
                  ),
                },
                {
                  type: "pn_sharing:allow",
                  expectedHash: m,
                  row: f(
                    "pn_sharing:allow",
                    h == null ? void 0 : h.allow_list,
                    l,
                  ),
                },
                {
                  type: "pn_sharing:contact_exclude",
                  expectedHash: p,
                  row: f(
                    "pn_sharing:contact_exclude",
                    h == null ? void 0 : h.contact_exclude_list,
                    s,
                  ),
                },
              ],
              v = await _(C);
            if (
              !(
                !v ||
                o(
                  "WAWebPhoneNumberSharingSettingsRequests",
                ).isPhoneNumberSharingSettingsInvalidated()
              )
            ) {
              var S = babelHelpers.extends(
                {},
                o("WAWebUserPrefsGeneral").getUserPrivacySettings(),
                { phoneNumberSharing: y },
              );
              (await o("WAWebUserPrefsGeneral").persistUserPrivacySettings(S),
                await o(
                  "WAWebNotifyPhoneNumberSharingSettingsChanged",
                ).notifyPhoneNumberSharingSettingsChanged(S));
            }
          }
        }
      }
    }
    async function _(e) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["privacy-disallowed-list"], async function (t) {
          var n = t[0],
            a = await Promise.all(
              e.map(function (e) {
                return n.get(e.type);
              }),
            );
          if (
            o(
              "WAWebPhoneNumberSharingSettingsRequests",
            ).isPhoneNumberSharingSettingsInvalidated() ||
            e.some(function (e, t) {
              var n, r;
              return (
                ((n = (r = a[t]) == null ? void 0 : r.dhash) != null
                  ? n
                  : c) !== e.expectedHash
              );
            })
          )
            return !1;
          var i = r("compactMap")(e, function (e) {
            return e.row;
          });
          if (
            (await n.bulkCreateOrReplace(i),
            o(
              "WAWebPhoneNumberSharingSettingsRequests",
            ).isPhoneNumberSharingSettingsInvalidated())
          )
            throw d;
          return !0;
        })
        .catch(function (e) {
          if (e === d) return !1;
          throw e;
        });
    }
    function f(e, t, n) {
      if (t == null)
        throw r("err")("phone-number-sharing: missing requested list");
      var o = t.dhash,
        a = t.entries,
        i = h(o);
      if (a == null) {
        if (n != null && i === n.dhash) return null;
        if (i !== c)
          throw r("err")("phone-number-sharing: unexpected suppressed list");
      }
      return g(e, a, i);
    }
    function g(e, t, n) {
      var r = t != null ? t : [];
      return e === "pn_sharing:deny"
        ? {
            id: "pn_sharing:deny",
            disallowedList: Array.from(new Set(r.map(y))),
            dhash: n,
          }
        : e === "pn_sharing:allow"
          ? {
              id: "pn_sharing:allow",
              allowedList: Array.from(new Set(r.map(y))),
              dhash: n,
            }
          : e === "pn_sharing:contact_exclude"
            ? {
                id: "pn_sharing:contact_exclude",
                excludedContacts: Array.from(new Set(r.map(C))),
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
      if (typeof e != "string" || e.length === 0)
        throw r("err")("phone-number-sharing: missing list digest");
      return e;
    }
    function y(e) {
      var t = r("nullthrows")(e),
        n = t.__typename;
      return n === "XWA2PrivacyPhoneNumberSharingGroupEntry"
        ? r("nullthrows")(
            o("WAJids").validateGroupJid(r("nullthrows")(t.group_jid)),
          )
        : C(t);
    }
    function C(e) {
      var t,
        n = r("nullthrows")(e),
        a = n.__typename;
      if (a !== "XWA2PrivacyPhoneNumberSharingUserEntry")
        throw r("err")("phone-number-sharing: invalid contact entry");
      if (n.user_jid != null)
        return r("nullthrows")(o("WAJids").validateLidUserJid(n.user_jid));
      var i = r("nullthrows")(
        o("WAJids").validateUserJid((t = n.pn_jid) != null ? t : ""),
      );
      return r("nullthrows")(o("WAJids").interpretAsPhoneUserJid(i));
    }
    function b(e) {
      e: {
        if (e === "ALL") return "all";
        if (e === "MYCONTACTS") return "contacts";
        if (e === "MYCONTACTSEXCEPT") return "contact_blacklist";
        if (e === "NONE") return "none";
        throw r("err")("phone-number-sharing: invalid setting response");
      }
    }
    ((l.invalidatePhoneNumberSharingSettings = o(
      "WAWebPhoneNumberSharingSettingsRequests",
    ).invalidatePhoneNumberSharingSettings),
      (l.fetchPhoneNumberSharingSettings = m));
  },
  98,
);
