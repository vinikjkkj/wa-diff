__d(
  "WAWebDBProcessGroupInviteMsgs",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebApiGroupInviteV4Store",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(function (e) {
            return p(e);
          });
          yield o("WAWebApiGroupInviteV4Store").persistGroupInviteV4Msgs(t);
        })),
        m.apply(this, arguments)
      );
    }
    function p(t) {
      var n = o(
          "WAWebLid1X1MigrationGating",
        ).Lid1X1MigrationUtils.isLidMigrated(),
        r = n ? o("WAWebLidMigrationUtils").toLid(t.from) : t.from,
        a = n ? o("WAWebLidMigrationUtils").toLid(t.to) : t.to;
      if (!r || !a) {
        var i = o("WAWebUserPrefsMeUser").isMeAccount(t.author),
          l = t.author != null;
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[group-invites] lidMigrated=",
              " validAuthor=",
              " isPeer=",
              "",
            ])),
          n,
          l,
          i,
        ),
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[group-invites] failed to get lid mapping for ",
                " ",
                "",
              ])),
            r ? "" : "msg.from &",
            a ? "" : "msg.to",
          ));
        var d =
          "[group-invites] failed to get lid mapping for *incoming* group invite";
        o("WALogger")
          .ERROR(
            u || (u = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
            d,
          )
          .sendLogs(d);
      }
      var m = o("WAWebLidMigrationUtils").getAddressingModeString(
          r == null ? void 0 : r.isLid(),
        ),
        p = o("WAWebLidMigrationUtils").getAddressingModeString(
          a == null ? void 0 : a.isLid(),
        );
      return (
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[group-invites] invite addr mode: from=",
              " to=",
              "",
            ])),
          m,
          p,
        ),
        {
          id: t.id.toString(),
          from: r == null ? void 0 : r.toString(),
          to: a == null ? void 0 : a.toString(),
          groupId: t.inviteGrp,
          expiration: parseInt(t.inviteCodeExp, 10),
          expired: o("WATimeUtils").unixTime() >= parseInt(t.inviteCodeExp, 10),
        }
      );
    }
    l.processGroupInviteMessages = d;
  },
  98,
);
