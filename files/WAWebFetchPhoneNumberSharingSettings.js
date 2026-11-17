__d(
  "WAWebFetchPhoneNumberSharingSettings",
  [
    "Promise",
    "WAJids",
    "WAWebFetchPhoneNumberSharingSettingsQuery.graphql",
    "WAWebFetchPhoneNumberSharingSettings_list.graphql",
    "WAWebMexClient",
    "WAWebModelStorageUtils",
    "WAWebPhoneNumberSharingSettingsGating",
    "WAWebPhoneNumberSharingSettingsRequests",
    "WAWebSchemaPrivacyDisallowedList",
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime",
    "compactMap",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c =
        e !== void 0
          ? e
          : (e = n("WAWebFetchPhoneNumberSharingSettingsQuery.graphql")),
      d = "none",
      m = r("err")("phone-number-sharing: snapshot invalidated");
    function p() {
      return o(
        "WAWebPhoneNumberSharingSettingsRequests",
      ).enqueuePhoneNumberSharingSettingsRequest(_);
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e, t, r;
          if (
            o(
              "WAWebPhoneNumberSharingSettingsGating",
            ).phoneNumberSharingSettingsEnabled()
          ) {
            var a = o(
                "WAWebSchemaPrivacyDisallowedList",
              ).getPrivacyDisallowedListTable(),
              i = yield (u || (u = n("Promise"))).all([
                a.get("pn_sharing:deny"),
                a.get("pn_sharing:allow"),
                a.get("pn_sharing:contact_exclude"),
              ]),
              l = i[0],
              s = i[1],
              m = i[2];
            if (
              !o(
                "WAWebPhoneNumberSharingSettingsRequests",
              ).isPhoneNumberSharingSettingsInvalidated()
            ) {
              var p = (e = l == null ? void 0 : l.dhash) != null ? e : d,
                _ = (t = s == null ? void 0 : s.dhash) != null ? t : d,
                f = (r = m == null ? void 0 : m.dhash) != null ? r : d,
                h = yield o("WAWebMexClient").fetchQuery(c, {
                  input: {
                    deny_list: { dhash: p },
                    allow_list: { dhash: _ },
                    contact_exclude_list: { dhash: f },
                  },
                });
              if (
                !o(
                  "WAWebPhoneNumberSharingSettingsRequests",
                ).isPhoneNumberSharingSettingsInvalidated()
              ) {
                var C = h.xwa2_privacy_phone_number_sharing_get,
                  b = R(C == null ? void 0 : C.setting),
                  v = [
                    {
                      type: "pn_sharing:deny",
                      expectedHash: p,
                      row: y(
                        "pn_sharing:deny",
                        C == null ? void 0 : C.deny_list,
                        l,
                      ),
                    },
                    {
                      type: "pn_sharing:allow",
                      expectedHash: _,
                      row: y(
                        "pn_sharing:allow",
                        C == null ? void 0 : C.allow_list,
                        s,
                      ),
                    },
                    {
                      type: "pn_sharing:contact_exclude",
                      expectedHash: f,
                      row: y(
                        "pn_sharing:contact_exclude",
                        C == null ? void 0 : C.contact_exclude_list,
                        m,
                      ),
                    },
                  ],
                  S = yield g(v);
                !S ||
                  o(
                    "WAWebPhoneNumberSharingSettingsRequests",
                  ).isPhoneNumberSharingSettingsInvalidated() ||
                  (yield o("WAWebUserPrefsGeneral").persistUserPrivacySettings(
                    babelHelpers.extends(
                      {},
                      o("WAWebUserPrefsGeneral").getUserPrivacySettings(),
                      { phoneNumberSharing: b },
                    ),
                  ));
              }
            }
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["privacy-disallowed-list"],
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var a = t[0],
                      i = yield (u || (u = n("Promise"))).all(
                        e.map(function (e) {
                          return a.get(e.type);
                        }),
                      );
                    if (
                      o(
                        "WAWebPhoneNumberSharingSettingsRequests",
                      ).isPhoneNumberSharingSettingsInvalidated() ||
                      e.some(function (e, t) {
                        var n, r;
                        return (
                          ((n = (r = i[t]) == null ? void 0 : r.dhash) != null
                            ? n
                            : d) !== e.expectedHash
                        );
                      })
                    )
                      return !1;
                    var l = r("compactMap")(e, function (e) {
                      return e.row;
                    });
                    if (
                      (yield a.bulkCreateOrReplace(l),
                      o(
                        "WAWebPhoneNumberSharingSettingsRequests",
                      ).isPhoneNumberSharingSettingsInvalidated())
                    )
                      throw m;
                    return !0;
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            )
            .catch(function (e) {
              if (e === m) return !1;
              throw e;
            });
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n) {
      if (t == null)
        throw r("err")("phone-number-sharing: missing requested list");
      var o = t.dhash,
        a = t.entries,
        i = b(o);
      if (a == null) {
        if (n != null && i === n.dhash) return null;
        if (i !== d)
          throw r("err")("phone-number-sharing: unexpected suppressed list");
      }
      return C(e, a, i);
    }
    function C(e, t, n) {
      var r = t != null ? t : [];
      return e === "pn_sharing:deny"
        ? {
            id: "pn_sharing:deny",
            disallowedList: Array.from(new Set(r.map(v))),
            dhash: n,
          }
        : e === "pn_sharing:allow"
          ? {
              id: "pn_sharing:allow",
              allowedList: Array.from(new Set(r.map(v))),
              dhash: n,
            }
          : e === "pn_sharing:contact_exclude"
            ? {
                id: "pn_sharing:contact_exclude",
                excludedContacts: Array.from(new Set(r.map(S))),
                dhash: n,
              }
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function b(e) {
      if (typeof e != "string" || e.length === 0)
        throw r("err")("phone-number-sharing: missing list digest");
      return e;
    }
    function v(e) {
      var t = r("nullthrows")(e),
        n = t.__typename;
      return n === "XWA2PrivacyPhoneNumberSharingGroupEntry"
        ? r("nullthrows")(
            o("WAJids").validateGroupJid(r("nullthrows")(t.group_jid)),
          )
        : S(t);
    }
    function S(e) {
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
    function R(e) {
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
      (l.fetchPhoneNumberSharingSettings = p));
  },
  98,
);
