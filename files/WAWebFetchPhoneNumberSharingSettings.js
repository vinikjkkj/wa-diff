__d(
  "WAWebFetchPhoneNumberSharingSettings",
  [
    "WAJids",
    "WAPromiseQueue",
    "WAWebFetchPhoneNumberSharingSettingsQuery.graphql",
    "WAWebMexClient",
    "WAWebModelStorageUtils",
    "WAWebPhoneNumberSharingSettingsGating",
    "WAWebSchemaPrivacyDisallowedList",
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebFetchPhoneNumberSharingSettingsQuery.graphql")),
      u = "none",
      c = new (o("WAPromiseQueue").PromiseQueue)();
    function d() {
      return c.enqueue(m);
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          if (
            o(
              "WAWebPhoneNumberSharingSettingsGating",
            ).phoneNumberSharingSettingsEnabled()
          ) {
            var t = yield o("WAWebSchemaPrivacyDisallowedList")
                .getPrivacyDisallowedListTable()
                .get("pn_sharing:deny"),
              n = (e = t == null ? void 0 : t.dhash) != null ? e : u,
              r = yield o("WAWebMexClient").fetchQuery(s, {
                input: { deny_list: { dhash: n } },
              }),
              a = r.xwa2_privacy_phone_number_sharing_get,
              i = C(a == null ? void 0 : a.setting),
              l = g(a == null ? void 0 : a.deny_list, t),
              c = yield _(l, n);
            c &&
              (yield o("WAWebUserPrefsGeneral").persistUserPrivacySettings(
                babelHelpers.extends(
                  {},
                  o("WAWebUserPrefsGeneral").getUserPrivacySettings(),
                  { phoneNumberSharing: i },
                ),
              ));
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["privacy-disallowed-list"],
              (function () {
                var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (n) {
                    var r,
                      o = n[0],
                      a = yield o.get("pn_sharing:deny");
                    return ((r = a == null ? void 0 : a.dhash) != null
                      ? r
                      : u) !== t
                      ? !1
                      : (e != null && (yield o.createOrReplace(e)), !0);
                  },
                );
                return function (e) {
                  return r.apply(this, arguments);
                };
              })(),
            );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      if (e == null)
        throw r("err")("phone-number-sharing: missing requested list");
      var n = e.dhash,
        o = e.entries,
        a = h(n);
      if (o == null) {
        if (t != null && a === t.dhash) return null;
        if (a !== u)
          throw r("err")("phone-number-sharing: unexpected suppressed list");
        return { id: "pn_sharing:deny", disallowedList: [], dhash: a };
      }
      return {
        id: "pn_sharing:deny",
        disallowedList: Array.from(new Set(o.map(y))),
        dhash: a,
      };
    }
    function h(e) {
      if (typeof e != "string" || e.length === 0)
        throw r("err")("phone-number-sharing: missing list digest");
      return e;
    }
    function y(e) {
      var t = r("nullthrows")(e),
        n = t.__typename;
      if (n === "XWA2PrivacyPhoneNumberSharingUserEntry") {
        var a;
        if (t.user_jid != null)
          return r("nullthrows")(o("WAJids").validateLidUserJid(t.user_jid));
        var i = r("nullthrows")(
          o("WAJids").validateUserJid((a = t.pn_jid) != null ? a : ""),
        );
        return r("nullthrows")(o("WAJids").interpretAsPhoneUserJid(i));
      }
      if (n === "XWA2PrivacyPhoneNumberSharingGroupEntry")
        return r("nullthrows")(
          o("WAJids").validateGroupJid(r("nullthrows")(t.group_jid)),
        );
      throw r("err")("phone-number-sharing: invalid list entry");
    }
    function C(e) {
      e: {
        if (e === "ALL") return "all";
        if (e === "MYCONTACTS") return "contacts";
        if (e === "MYCONTACTSEXCEPT") return "contact_blacklist";
        if (e === "NONE") return "none";
        throw r("err")("phone-number-sharing: invalid setting response");
      }
    }
    l.fetchPhoneNumberSharingSettings = d;
  },
  98,
);
