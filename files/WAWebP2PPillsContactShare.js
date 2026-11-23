__d(
  "WAWebP2PPillsContactShare",
  [
    "WAJids",
    "WALogger",
    "WAWebApiBusinessProfile",
    "WAWebLidMigrationUtils",
    "WAWebP2PPillsGating",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n, r) {
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
          l = await o("WAWebApiBusinessProfile").getBusinessProfileRowLidAware(
            t.id.toString(),
          ),
          s = (i = l == null ? void 0 : l.pills) != null ? i : [];
        return o("WAWebP2PPillsGating").shouldAttachContactCardPills(s)
          ? { businessJid: o("WAJids").toPhoneUserJid(a.user), pillTypes: s }
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
    }
    l.getContactCardPillsToShare = s;
  },
  98,
);
