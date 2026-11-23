__d(
  "WAWebMexUsernameUpdateNotificationHandler",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebCurrentUser",
    "WAWebInsertUsernameChangeSystemMsg",
    "WAWebLidAwareContactsDB",
    "WAWebQueryExistsJob",
    "WAWebSetUsernameJob",
    "WAWebUserUtils",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameODS",
    "WAWebUsernameTypes",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    async function _(t, n) {
      if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[mex][username] set notification received",
            ])),
        );
        var r = n.xwa2_notify_username_on_change,
          a = r.username,
          i = r.lid,
          l = o("WAWebWidFactory").createUserLidOrThrow(i),
          s = [{ userId: l, username: o("WAWebUsernameTypes").asUsername(a) }],
          u = await o("WAWebSetUsernameJob").setUsernamesJob(s);
        await o(
          "WAWebInsertUsernameChangeSystemMsg",
        ).maybeInsertUsernameChangeSystemMsgs(s, u, "mexHandleUsernameChange");
      }
    }
    async function f(e, t) {
      var n;
      if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[mex][username] delete notification received",
            ])),
        );
        var r = t.xwa2_notify_username_delete,
          a = r.lid,
          i = (n = r.display_name) != null ? n : "",
          l = o("WAWebWidFactory").createUserLidOrThrow(a),
          u = await o("WAWebSetUsernameJob").deleteUsernamesJob([
            { userId: l, displayNameLID: i },
          ]);
        await o(
          "WAWebInsertUsernameChangeSystemMsg",
        ).maybeInsertUsernameChangeSystemMsgs(
          [{ userId: l, deleteUsername: !0, displayNameLID: i }],
          u,
          "mexHandleUsernameDelete",
        );
      }
    }
    async function g(e, t) {
      if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[mex][username] side-sub change notification",
            ])),
        );
        var n = t.xwa2_notify_username_on_update_side_sub.hash,
          r = await o("WAWebApiContact").getContactRecordByHash(n);
        if (r == null) {
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[mex][username] side contact hash not found",
              ])),
          );
          return;
        }
        var a = await h(n, r.id);
        if (a == null) {
          o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[mex][username] pn side contact hash found, but no lid contact found",
              ])),
          );
          return;
        }
        if (
          await o("WAWebApiContact").isAddressBookContact(
            o("WAWebWidToJid").widToUserJid(a),
          )
        ) {
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[mex][username] side-sub notif for contact, skip",
              ])),
          );
          return;
        }
        if (!o("WAWebUserUtils").isMeAccount(a)) {
          var i = await o("WAWebQueryExistsJob").queryWidUsernameExists(a);
          if (!(i == null || i.usernameChanged !== !0)) {
            var l = o("WAWebUsernameTypes").asMaybeUsername(i.username),
              s = l == null;
            if (s) {
              if (i.isPhoneNumberKnown !== !0) return;
            } else if (i.wasPreviouslyKnown !== !0) return;
            await o(
              "WAWebInsertUsernameChangeSystemMsg",
            ).generateUsernameChangeNotificationSystemMsg({
              wid: a,
              oldUsername: o("WAWebUsernameTypes").asMaybeUsername(
                i.oldUsername,
              ),
              newUsername: l,
            });
          }
        }
      }
    }
    async function h(e, t) {
      if (r("WAWebWid").isStringLid(t))
        return o("WAWebWidFactory").createUserLidOrThrow(t);
      var n = await y(e);
      if (n == null)
        return (o("WAWebUsernameODS").logUsernameSideSubNoLidForHash(), null);
      var a = o("WAWebWidFactory").createUserLidOrThrow(n);
      return (
        o("WAWebUsernameODS").logUsernameSideSubHashCollision(),
        o("WAWebCurrentUser").isEmployee() &&
          o("WALogger")
            .ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[mex][username] side-sub hash matched a pn contact, using the lid that carries it: pn ",
                  ", lid ",
                  ", hash ",
                  "",
                ])),
              o("WAWebWidFactory").createWid(t).toLogString(),
              a.toLogString(),
              e,
            )
            .sendLogs("mex-username-side-sub-recovered-lid"),
        a
      );
    }
    async function y(e) {
      var t = await r("WAWebLidAwareContactsDB").equalsPrimaryKeys(
        ["contactHash"],
        e,
      );
      return t.find(function (e) {
        return r("WAWebWid").isStringLid(e);
      });
    }
    ((l.mexHandleUsernameChange = _),
      (l.mexHandleUsernameDelete = f),
      (l.mexHandleUsernameChangeForSideSub = g));
  },
  98,
);
