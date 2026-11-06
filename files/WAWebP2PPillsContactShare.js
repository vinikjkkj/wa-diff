__d(
  "WAWebP2PPillsContactShare",
  [
    "WAJids",
    "WALogger",
    "WAWebApiBusinessProfile",
    "WAWebLidMigrationUtils",
    "WAWebP2PPillsGating",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          if (
            (r == null ? void 0 : r.includePhoneNumber) === !1 ||
            !t.isBusiness ||
            !n.id.isRegularUser() ||
            !o("WAWebP2PPillsGating").canAttachContactCardPills()
          )
            return null;
          var a = o("WAWebLidMigrationUtils").toPn(t.id);
          if (a == null) return null;
          try {
            var i,
              l = yield o(
                "WAWebApiBusinessProfile",
              ).getBusinessProfileRowLidAware(t.id.toString()),
              s = (i = l == null ? void 0 : l.pills) != null ? i : [];
            return o("WAWebP2PPillsGating").shouldAttachContactCardPills(s)
              ? {
                  businessJid: o("WAJids").toPhoneUserJid(a.user),
                  pillTypes: s,
                }
              : null;
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[P2PPills] failed to read stored pills for a shared card",
                    ])),
                )
                .sendLogs("p2p-pills-contact-share-read-failed"),
              null
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.getContactCardPillsToShare = s;
  },
  98,
);
