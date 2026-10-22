__d(
  "WAWebDBProcessGroupInviteMsgs",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebApiGroupInviteV4Store",
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
      var n = o("WAWebLidMigrationUtils").toLid(t.from),
        r = o("WAWebLidMigrationUtils").toLid(t.to);
      if (!n || !r) {
        var a = o("WAWebUserPrefsMeUser").isMeAccount(t.author),
          i = t.author != null;
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[group-invites] validAuthor=",
              " isPeer=",
              "",
            ])),
          i,
          a,
        ),
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[group-invites] failed to get lid mapping for ",
                " ",
                "",
              ])),
            n ? "" : "msg.from &",
            r ? "" : "msg.to",
          ));
        var l =
          "[group-invites] failed to get lid mapping for *incoming* group invite";
        o("WALogger")
          .ERROR(
            u || (u = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
            l,
          )
          .sendLogs(l);
      }
      var d = o("WAWebLidMigrationUtils").getAddressingModeString(
          n == null ? void 0 : n.isLid(),
        ),
        m = o("WAWebLidMigrationUtils").getAddressingModeString(
          r == null ? void 0 : r.isLid(),
        );
      return (
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[group-invites] invite addr mode: from=",
              " to=",
              "",
            ])),
          d,
          m,
        ),
        {
          id: t.id.toString(),
          from: n == null ? void 0 : n.toString(),
          to: r == null ? void 0 : r.toString(),
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
