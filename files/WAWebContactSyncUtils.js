__d(
  "WAWebContactSyncUtils",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebContactSyncPrivacyHints",
    "WAWebLidMigrationUtils",
    "WAWebUsync",
    "WAWebUsyncUser",
    "WAWebWidFactory",
    "uniqueBy",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t) {
      var n = new (o("WAWebUsync").USyncQuery)()
          .withMode("delta")
          .withContext("interactive")
          .withContactProtocol(o("WAWebUsync").USYNC_ADDRESSING_MODE.LID)
          .withUsernameProtocol(),
        r = [],
        a = [];
      return (
        t.forEach(function (e) {
          if (e.type === "add") {
            var t = new (o("WAWebUsyncUser").USyncUser)().withPhone(
              e.phoneNumber,
            );
            (a.push({
              user: t,
              wid: o("WAWebContactSyncPrivacyHints").userWidFromPhone(
                e.phoneNumber,
              ),
            }),
              n.withUser(t));
            return;
          }
          if (e.type === "add_username") {
            var i = new (o("WAWebUsyncUser").USyncUser)()
              .withId(e.lid)
              .withUsername(e.username);
            (a.push({ user: i, wid: e.lid }), n.withUser(i));
            return;
          }
          e.type;
          var l = e.contact,
            s = new (o("WAWebUsyncUser").USyncUser)().withType("delete");
          if (l.isLid()) s.withId(l);
          else if (l.isRegularUserPn()) {
            var u = o("WAWebLidMigrationUtils").toUserLid(l);
            (u != null && s.withId(u), s.withPnJid(l));
          } else (s.withId(l), r.length < 3 && r.push(l.toLogString()));
          (a.push({ user: s, wid: l }), n.withUser(s));
        }),
        await o("WAWebContactSyncPrivacyHints").attachUsyncPrivacyHints(a),
        r.length > 0 &&
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[constructUsyncDeltaQuery] ",
                  " not LID/PN => ",
                  "",
                ])),
              r.length,
              r,
            )
            .sendLogs("unexpected_contact_type_in_delta_delete", {
              sampling: 0.1,
            }),
        n
      );
    }
    function d(e) {
      return r("uniqueBy")(
        e
          .filter(function (e) {
            return e.isRegularUserPn() && !e.isHostedLid();
          })
          .map(function (e) {
            return o("WAWebWidFactory").asUserWidOrThrow(e);
          }),
        function (e) {
          return e.toString();
        },
      );
    }
    function m(e, t) {
      if (e.length === 0) return t;
      var n = new Map();
      (t.forEach(function (e) {
        n.set(e.wid.toString(), e);
      }),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[backfillMissingDeviceSyncEntries] req=",
              " resp=",
              "",
            ])),
          e.length,
          t.length,
        ));
      var r = [];
      if (
        (e.forEach(function (e) {
          var a = e.toString();
          if (!n.has(a)) {
            var i = o("WAWebApiContact").getCurrentLid(
              o("WAWebWidFactory").asUserWidOrThrow(e),
            );
            if (i != null) {
              var l = n.get(i.toString());
              l != null &&
                (t.push({ wid: e, devices: l.devices }),
                r.length < 3 &&
                  r.push({ lid: i.toLogString(), pn: e.toLogString() }));
            }
          }
        }),
        r.length > 0)
      ) {
        var a = r.map(function (e) {
          return e.lid + " -> " + e.pn;
        });
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[backfillMissingDeviceSyncEntries] dup=",
              " => ",
              "",
            ])),
          r.length,
          a,
        );
      }
      return t;
    }
    ((l.constructUsyncDeltaQuery = c),
      (l.getDeviceSyncBackfillPnWids = d),
      (l.backfillMissingDeviceSyncEntries = m));
  },
  98,
);
