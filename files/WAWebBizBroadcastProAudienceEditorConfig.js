__d(
  "WAWebBizBroadcastProAudienceEditorConfig",
  [
    "WAJids",
    "WAWebBizBroadcastsAudienceUtils",
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r,
        a,
        i,
        l =
          t != null
            ? (r = t.broadcastMetadata) == null || (r = r.recipients) == null
              ? void 0
              : r.map(function (e) {
                  return e.id.user;
                })
            : n == null
              ? void 0
              : n.initialRecipientIds,
        s = (function (e) {
          if (Array.isArray(e) && e.length === 2) {
            var t,
              n = e[0];
            if (n != null)
              return ((t = n.contact.name) == null ? void 0 : t.trim()) || "";
          }
          return Array.isArray(e) && e.length === 2 && e[1] === !0
            ? ""
            : o(
                "WAWebBizBroadcastsAudienceUtils",
              ).buildAudienceNameFromRecipients(l);
        })([t, e.omitRecipientNames]);
      return babelHelpers.extends({}, e, {
        initialAudienceName: (a = e.initialAudienceName) != null ? a : s,
        initialRecipientLids:
          (i = e.initialRecipientLids) != null
            ? i
            : l == null
              ? void 0
              : l.map(function (e) {
                  return o("WAWebWidFactory").createUserLidOrThrow(
                    o("WAJids").toLidUserJid(e),
                  );
                }),
        smartAudiencesEnabled: o(
          "WAWebBusinessBroadcastsGatingUtils",
        ).isBizBroadcastProSmartAudiencesEnabled(),
      });
    }
    l.getProAudienceEditorConfig = e;
  },
  98,
);
