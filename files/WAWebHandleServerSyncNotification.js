__d(
  "WAWebHandleServerSyncNotification",
  [
    "Promise",
    "WADeprecatedWapParser",
    "WALogger",
    "WASyncdConst",
    "WAWap",
    "WAWebHandleReportServerSyncNotification",
    "WAWebSyncBootstrap",
    "WAWebSyncd",
    "WAWebSyncdCollectionUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = new (r("WADeprecatedWapParser"))("serverSyncNotification", function (
        t,
      ) {
        if ((t.assertTag("notification"), !t.hasChild("collection")))
          throw t.createParseError(
            "Server sync notification does not contain any collections",
          );
        var n = t.attrString("id"),
          r = new Map(
            t.mapChildrenWithTag("collection", function (e) {
              return [e.attrString("name"), e.attrInt("version")];
            }),
          ),
          a = t.hasAttr("offline"),
          i = t.attrString("from");
        return (
          i !== o("WAWap").S_WHATSAPP_NET.toString() &&
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  'handleServerSyncNotification: "from" is not domain jid "s.whatsapp.net"',
                ])),
            ),
          { changedCollections: r, stanzaId: n, offline: a }
        );
      });
    function _(e) {
      if (e.changedCollections) {
        var t = new Map(),
          a = [];
        for (var i of e.changedCollections) {
          var l = i[0],
            d = i[1],
            p = o("WASyncdConst").CollectionName.cast(l);
          p != null ? t.set(p, d) : a.length < 3 && a.push(l);
        }
        a.length > 0 &&
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: ",
                " unknown collection names in notification => ",
                "",
              ])),
            a.length,
            a,
          );
        var _ = Array.from(t.keys());
        (e.offline &&
          _.forEach(function (e) {
            var t = o(
              "WAWebHandleReportServerSyncNotification",
            ).offlineNotificationsCount.get(e);
            t != null
              ? o(
                  "WAWebHandleReportServerSyncNotification",
                ).offlineNotificationsCount.set(e, t + 1)
              : o(
                  "WAWebHandleReportServerSyncNotification",
                ).offlineNotificationsCount.set(e, 1);
          }),
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: incoming sync notification for collections\n    ",
                "",
              ])),
            Array.from(t.entries())
              .map(function (e) {
                var t = e[0],
                  n = e[1];
                return t + " v" + n;
              })
              .join("\n"),
          ),
          r("WAWebSyncBootstrap").isSyncDCriticalDataSyncInProcess() &&
            ((_ = _.filter(function (e) {
              return o("WAWebSyncdCollectionUtils").isCriticalCollection(e);
            })),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: filtered non critical collections during bootstrap. new collections: ",
                  "",
                ])),
              _,
            )),
          o("WAWebSyncd").markCollectionsForSync(_, t));
      }
      return (m || (m = n("Promise"))).resolve(
        o("WAWap").wap("ack", {
          id: o("WAWap").CUSTOM_STRING(e.stanzaId),
          class: "notification",
          type: "server_sync",
          to: o("WAWap").S_WHATSAPP_NET,
        }),
      );
    }
    function f(e) {
      var t = p.parse(e);
      return t.error
        ? (o("WALogger").ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                "",
              ])),
            t.error.toString(),
          ),
          (m || (m = n("Promise"))).reject(t.error))
        : _(t.success);
    }
    l.handleServerSyncNotification = f;
  },
  98,
);
