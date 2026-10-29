__d(
  "WAWebParseBusinessInteractionPills",
  ["WALongInt", "WAWebBusinessInteractionPillsJid", "WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Map([
        [
          (e = o("WAWebProtobufsE2E.pb"))
            .ContextInfo$BusinessInteractionPills$PillType.VIEW_BUSINESS,
          "VIEW_BUSINESS",
        ],
        [e.ContextInfo$BusinessInteractionPills$PillType.CHAT, "CHAT"],
        [e.ContextInfo$BusinessInteractionPills$PillType.CALL, "CALL"],
        [e.ContextInfo$BusinessInteractionPills$PillType.CATALOG, "SHOP"],
        [e.ContextInfo$BusinessInteractionPills$PillType.SHOP, "SHOP"],
        [e.ContextInfo$BusinessInteractionPills$PillType.ORDER, "ORDER"],
        [e.ContextInfo$BusinessInteractionPills$PillType.MENU, "MENU"],
        [
          e.ContextInfo$BusinessInteractionPills$PillType.BOOK_APPOINTMENT,
          "BOOK_APPOINTMENT",
        ],
        [e.ContextInfo$BusinessInteractionPills$PillType.OFFERS, "OFFERS"],
        [
          e.ContextInfo$BusinessInteractionPills$PillType.BESTSELLERS,
          "BESTSELLERS",
        ],
        [e.ContextInfo$BusinessInteractionPills$PillType.ABOUT, "ABOUT"],
      ]);
    function u(e) {
      var t =
          e.businessJid != null
            ? o("WAWebBusinessInteractionPillsJid").validateBusinessJid(
                e.businessJid,
              )
            : null,
        n = c(e.pills);
      return t == null || n.length === 0
        ? null
        : babelHelpers.extends(
            { businessJid: t, pillTypes: n },
            d(e.unauthenticatedBusinessMetadata),
          );
    }
    function c(e) {
      var t = new Set();
      return (
        e.forEach(function (e) {
          var n = e.pillType,
            r = n != null ? s.get(n) : null;
          r != null && t.add(r);
        }),
        Array.from(t)
      );
    }
    function d(e) {
      var t;
      return e == null
        ? {}
        : {
            businessName: e.businessName,
            businessCategory: e.businessCategory,
            businessIsOpen: e.businessIsOpen,
            businessIsOpenSnapshotMs:
              (t = o("WALongInt").maybeNumber(e.businessIsOpenSnapshotMs)) !=
              null
                ? t
                : void 0,
          };
    }
    l.parseBusinessInteractionPills = u;
  },
  98,
);
