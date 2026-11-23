__d(
  "WAWebFetchAndUpdateBlocklistJob",
  [
    "WAArrayUtils",
    "WALogger",
    "WAWebApiBlocklist",
    "WAWebBackendApi",
    "WAWebBlocklistMigration",
    "WAWebCriticalEventWamEvent",
    "WAWebDBCreateLidPnMappings",
    "WAWebGetBlocklistJob",
    "WAWebLidAwareContactsDB",
    "WAWebSetUsernameJob",
    "WAWebUpdateLidMetadataJob",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsMultiDevice",
    "WAWebUsernameTypes",
    "WAWebWid",
    "compactMap",
    "partitionArray",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    async function p(t) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[blocklist] fetch blocklist reason: ",
            "",
          ])),
        t,
      ),
        t === "post-migration" &&
          (await o("WAWebUserPrefsMultiDevice").setBlocklistHash(null),
          await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
            "WAReceivedBlocklistMigrationBefore1x1Migration",
          )));
      var n = await o("WAWebGetBlocklistJob").getBlocklist();
      if (n.errorCode != null) return n;
      if (n.type === "mismatch") {
        n.dirty && (await y("LidBlocklistForceMigratedDirty"));
        var a = o("WAWebBlocklistMigration").isBlocklistMigrated(),
          i = n.list;
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[blocklist] updating blocklist with ",
              " contact(s)",
            ])),
          i.items.length,
        ),
          await o("WAWebUserPrefsMultiDevice").setBlocklistHash(n.dhash));
        var l = o("WAWebGetBlocklistJob").extractWids(i);
        if (
          (await o("WAWebApiBlocklist").updateBlocklist(l),
          o("WAWebBackendApi").frontendFireAndForget("replaceBlocklist", {
            wids: l,
          }),
          i.addressingMode === "pn")
        ) {
          a &&
            (await y("LidBlocklistUnexpectedPnBlocklist"),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[blocklist] received a pn-based blocklist on a migrated device, unmigrating it",
                ])),
            ),
            o("WAWebBlocklistMigration").setBlocklistUnmigrated());
          var m = r("compactMap")(i.items, function (e) {
            var t = e.displayName,
              n = e.wid;
            if (t == null || !n.isLid()) return null;
            var r = {};
            return (t != null && (r.displayNameLID = t), { lid: n, data: r });
          });
          await o("WAWebUpdateLidMetadataJob").updateLidMetadataJob(m);
        } else
          (i.addressingMode,
            a ||
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[blocklist] received a lid-based blocklist, marking the device as migrated",
                  ])),
              ),
              o("WAWebBlocklistMigration").setBlocklistMigrated()),
            await _(i.items));
      } else
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[blocklist] no change in blocklist, skip update",
            ])),
        );
      return n;
    }
    async function _(e) {
      var t = [],
        n = [];
      for (var r of e)
        (r.pn != null && t.push(r),
          (r.username != null || r.displayName != null) && n.push(r));
      (await f(t), await g(n));
    }
    async function f(e) {
      var t = o("WAArrayUtils").groupBy(e, function (e) {
          return e.pn.toString();
        }),
        n = [],
        a = [],
        i = 0;
      for (var l of t.values()) {
        var s = r("partitionArray")(l, function (e) {
            return e.active;
          }),
          u = s[0],
          c = s[1],
          d = c
            .sort(function (e, t) {
              return r("WAWebWid").compare(e.lid, t.lid);
            })
            .reverse();
        (n.push.apply(n, h(d)), u.length > 1 && i++, a.push.apply(a, h(u)));
      }
      (i > 0 &&
        o("WALogger")
          .ERROR(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[blocklist] ",
                " PNs have multiple active LIDs",
              ])),
            i,
          )
          .sendLogs("blocklist-multiple-active-lids"),
        await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
          mappings: n,
          write: "with_batch",
          identityChangeHandlingEnabled: !1,
          learningSource: "blocklist-inactive",
        }),
        await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
          mappings: a,
          write: "with_batch",
          identityChangeHandlingEnabled: !1,
          learningSource: "blocklist-active",
        }),
        await o("WAWebDBCreateLidPnMappings").flushLidPnMappingsToDb());
    }
    async function g(e) {
      for (
        var t = [],
          n = [],
          a = await r("WAWebLidAwareContactsDB").bulkGet(
            e.map(function (e) {
              return e.lid.toString();
            }),
          ),
          i = 0;
        i < e.length;
        i++
      ) {
        var l = e[i],
          s = a[i];
        if (l.username != null) {
          var u = o("WAWebUsernameTypes").asMaybeUsername(l.username);
          u != null &&
            (s == null || (s.username == null && s.phoneNumber == null)) &&
            t.push({ userId: l.lid, username: u });
        } else
          (l.displayName,
            (s == null || s.displayNameLID == null) &&
              n.push({ lid: l.lid, data: { displayNameLID: l.displayName } }));
      }
      (await o("WAWebSetUsernameJob").setUsernamesJob(t),
        await o("WAWebUpdateLidMetadataJob").updateLidMetadataJob(n));
    }
    function h(e) {
      return e.map(function (e) {
        return { lid: e.lid, pn: e.pn };
      });
    }
    function y(e) {
      var t = new (o("WAWebCriticalEventWamEvent").CriticalEventWamEvent)({
        name: e,
        debug: "{fetch}",
      });
      return t.commitAndWaitForFlush();
    }
    ((l.fetchAndUpdateBlocklist = p), (l.learnIdentifiers = _));
  },
  98,
);
