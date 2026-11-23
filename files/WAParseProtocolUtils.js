__d(
  "WAParseProtocolUtils",
  ["WAGlobals", "WALogger", "WALongInt", "WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      var n = c(t, e.serverTs),
        r = n == null ? void 0 : n.expirationTs,
        o = n == null ? void 0 : n.deleteTs,
        a = n == null ? void 0 : n.ephemeralSetting;
      return { expirationTs: r, deleteTs: o, ephemeralSetting: a };
    }
    function u(e, t) {
      var n = d(t);
      return (n != null && (e.reportingMeta = n), n);
    }
    function c(e, t) {
      var n,
        r,
        a =
          e == null || (n = e.chatEphemeralSetting) == null
            ? void 0
            : n.ephemeralExpiration,
        i =
          e == null || (r = e.chatEphemeralSetting) == null
            ? void 0
            : r.ephemeralSettingTimestamp;
      if (a == null || i == null || a === 0) return null;
      var l = o("WATimeUtils").castToUnixTime(
          t +
            o("WAGlobals")
              .getDependencies()
              .ephemeralMaxDeletionWindowForUnseenMessage(),
        ),
        s = l,
        u = null;
      try {
        var c = o("WALongInt").numberOrThrowIfTooLarge(i) / 1e3;
        u = o("WATimeUtils").castToUnixTime(c);
      } catch (e) {
        return null;
      }
      return {
        expirationTs: l,
        deleteTs: s,
        ephemeralSetting: { expirationTs: a, updatedTs: u },
      };
    }
    function d(t) {
      var n = t == null ? void 0 : t.frankingVersion;
      return (
        n != null &&
          n !== 0 &&
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Unsupported franking version ",
                "",
              ])),
            n,
          ),
        {
          frankingKey: void 0,
          frankingTag: void 0,
          frankingVersion: n,
          reportingContent: void 0,
          reportingTag: void 0,
        }
      );
    }
    ((l.parseEphemerality = s), (l.enhanceReportingMeta = u));
  },
  98,
);
