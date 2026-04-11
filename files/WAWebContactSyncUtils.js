__d(
  "WAWebContactSyncUtils",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebLidMigrationUtils",
    "WAWebUsernameGatingUtils",
    "WAWebUsync",
    "WAWebUsyncUser",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t) {
      var n = new (o("WAWebUsync").USyncQuery)()
          .withMode("delta")
          .withContext("interactive")
          .withContactProtocol(o("WAWebUsync").USYNC_ADDRESSING_MODE.LID)
          .withUsernameProtocol(),
        r = [];
      return (
        t.forEach(function (e) {
          if (e.type === "add") {
            n.withUser(
              new (o("WAWebUsyncUser").USyncUser)().withPhone(e.phoneNumber),
            );
            return;
          }
          e.type;
          var t = e.contact,
            a = new (o("WAWebUsyncUser").USyncUser)().withType("delete");
          if (t.isLid()) a.withId(t);
          else if (t.isRegularUserPn()) {
            var i = o("WAWebLidMigrationUtils").toUserLid(t);
            (i != null && a.withId(i), a.withPnJid(t));
          } else (a.withId(t), r.length < 3 && r.push(t.toLogString()));
          n.withUser(a);
        }),
        r.length > 0 &&
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[constructUsyncDeltaQueryLid] ",
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
      var t = new (o("WAWebUsync").USyncQuery)()
        .withMode("delta")
        .withContext("interactive")
        .withContactProtocol(o("WAWebUsync").USYNC_ADDRESSING_MODE.PN)
        .withLidProtocol()
        .withUsernameProtocol();
      return (
        e.forEach(function (e) {
          if (e.type === "add") {
            t.withUser(
              new (o("WAWebUsyncUser").USyncUser)().withPhone(e.phoneNumber),
            );
            return;
          }
          e.type;
          var n = e.contact,
            r = new (o("WAWebUsyncUser").USyncUser)()
              .withId(n)
              .withType("delete"),
            a = n.isLid() ? null : o("WAWebApiContact").getCurrentLid(n);
          (a && r.withLid(a), t.withUser(r));
        }),
        t
      );
    }
    function m(e) {
      return o("WAWebUsernameGatingUtils").usernameContactUsyncLidBased()
        ? c(e)
        : d(e);
    }
    function p(e, t) {
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
    ((l.constructUsyncDeltaQuery = m),
      (l.backfillMissingDeviceSyncEntries = p));
  },
  98,
);
