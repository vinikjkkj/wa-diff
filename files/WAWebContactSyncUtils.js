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
    "asyncToGeneratorRuntime",
    "uniqueBy",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new (o("WAWebUsync").USyncQuery)()
              .withMode("delta")
              .withContext("interactive")
              .withContactProtocol(o("WAWebUsync").USYNC_ADDRESSING_MODE.LID)
              .withUsernameProtocol(),
            n = [],
            r = [];
          return (
            e.forEach(function (e) {
              if (e.type === "add") {
                var a = new (o("WAWebUsyncUser").USyncUser)().withPhone(
                  e.phoneNumber,
                );
                (r.push({
                  user: a,
                  wid: o("WAWebContactSyncPrivacyHints").userWidFromPhone(
                    e.phoneNumber,
                  ),
                }),
                  t.withUser(a));
                return;
              }
              if (e.type === "add_username") {
                var i = new (o("WAWebUsyncUser").USyncUser)()
                  .withId(e.lid)
                  .withUsername(e.username);
                (r.push({ user: i, wid: e.lid }), t.withUser(i));
                return;
              }
              e.type;
              var l = e.contact,
                s = new (o("WAWebUsyncUser").USyncUser)().withType("delete");
              if (l.isLid()) s.withId(l);
              else if (l.isRegularUserPn()) {
                var u = o("WAWebLidMigrationUtils").toUserLid(l);
                (u != null && s.withId(u), s.withPnJid(l));
              } else (s.withId(l), n.length < 3 && n.push(l.toLogString()));
              (r.push({ user: s, wid: l }), t.withUser(s));
            }),
            yield o("WAWebContactSyncPrivacyHints").attachUsyncPrivacyHints(r),
            n.length > 0 &&
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[constructUsyncDeltaQuery] ",
                      " not LID/PN => ",
                      "",
                    ])),
                  n.length,
                  n,
                )
                .sendLogs("unexpected_contact_type_in_delta_delete", {
                  sampling: 0.1,
                }),
            t
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
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
    function p(t, n) {
      if (t.length === 0) return n;
      var r = new Map();
      (n.forEach(function (e) {
        r.set(e.wid.toString(), e);
      }),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[backfillMissingDeviceSyncEntries] req=",
              " resp=",
              "",
            ])),
          t.length,
          n.length,
        ));
      var a = [];
      if (
        (t.forEach(function (e) {
          var t = e.toString();
          if (!r.has(t)) {
            var i = o("WAWebApiContact").getCurrentLid(
              o("WAWebWidFactory").asUserWidOrThrow(e),
            );
            if (i != null) {
              var l = r.get(i.toString());
              l != null &&
                (n.push({ wid: e, devices: l.devices }),
                a.length < 3 &&
                  a.push({ lid: i.toLogString(), pn: e.toLogString() }));
            }
          }
        }),
        a.length > 0)
      ) {
        var i = a.map(function (e) {
          return e.lid + " -> " + e.pn;
        });
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[backfillMissingDeviceSyncEntries] dup=",
              " => ",
              "",
            ])),
          a.length,
          i,
        );
      }
      return n;
    }
    ((l.constructUsyncDeltaQuery = c),
      (l.getDeviceSyncBackfillPnWids = m),
      (l.backfillMissingDeviceSyncEntries = p));
  },
  98,
);
