__d(
  "WAWebOpusMigration",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebOpusUtils",
    "WAWebReleaseToEventLoop",
    "WAWebSchemaChat",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = 10;
    async function p() {
      if (
        o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OPUS_MIGRATION_COMPLETE,
        ) === !0
      ) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[opus] migration skipped: completion flag already set",
            ])),
        );
        return;
      }
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[opus] starting bulk migration",
          ])),
      );
      var t = [];
      (await o("WAWebSchemaChat")
        .getChatTable()
        .forEach(function (e) {
          var n;
          ((n = e.limitSharing) == null ? void 0 : n.sharingLimited) === !0 &&
            t.push(e.id);
        }),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[opus] found ",
              " chats to process",
            ])),
          t.length,
        ));
      var n = await _(t);
      (await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OPUS_MIGRATION_COMPLETE,
        !0,
      ),
        n > 0 &&
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[opus] migration finished with ",
                  " failures out of ",
                  " chats",
                ])),
              n,
              t.length,
            )
            .sendLogs("opus-migration-failures"),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[opus] bulk migration complete (",
              " failures out of ",
              " chats)",
            ])),
          n,
          t.length,
        ));
    }
    async function _(e) {
      return f({ chatIds: e, offset: 0, failureCount: 0 });
    }
    async function f(e) {
      var t = e.chatIds,
        n = e.failureCount,
        r = e.offset;
      if (r >= t.length) return n;
      var a = t.slice(r, r + m),
        i = await Promise.allSettled(
          a.map(function (e) {
            return o("WAWebOpusUtils").opusProcessChat(e, {
              skipSharingLimitedCheck: !0,
              beforeTimestamp: o("WAWebABProps").getABPropConfigValue("opus_t"),
            });
          }),
        ),
        l = 0;
      for (var s of i) s.status === "rejected" && l++;
      var u = r + m;
      return (
        u < t.length &&
          (await o("WAWebReleaseToEventLoop").releaseToEventLoop()),
        f({ chatIds: t, offset: u, failureCount: n + l })
      );
    }
    l.runOpusMigration = p;
  },
  98,
);
