__d(
  "WAWebMexUsersGetAboutStatus",
  [
    "$InternalEnum",
    "WAWebMexUsync",
    "WAWebPrivacyGatingUtils",
    "WAWebTrustedContactsUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored(["EMPTY", "NOT_ALLOWED", "NO_CHANGE"]);
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.tcToken,
            r = t.wid,
            a = { jid: r.toJid() };
          n != null &&
            o(
              "WAWebPrivacyGatingUtils",
            ).isProfileScrappingProtectionInUsyncEnabled() &&
            (a.privacy_token = {
              tctoken: o("WAWebTrustedContactsUtils").encodeTcTokenForMex(n),
            });
          var i = yield o("WAWebMexUsync").mexUsyncQuery({
              users: [a],
              telemetry: { context: "INTERACTIVE" },
              fetch: { about_status: !0 },
            }),
            l = i.response;
          if (l != null) {
            var s,
              u,
              c = (s = l[0].about_status_info) == null ? void 0 : s.text,
              d = e.cast(
                (u = l[0].about_status_info) == null ? void 0 : u.status,
              );
            return d == null
              ? { status: c, state: null }
              : d === e.NOT_ALLOWED
                ? { status: "", state: null }
                : d === e.EMPTY
                  ? { status: null, state: null }
                  : { state: d };
          }
          return { state: e.EMPTY };
        })),
        u.apply(this, arguments)
      );
    }
    l.getMexUsersAboutStatus = s;
  },
  98,
);
