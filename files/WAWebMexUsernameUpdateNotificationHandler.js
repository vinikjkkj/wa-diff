__d(
  "WAWebMexUsernameUpdateNotificationHandler",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebInsertUsernameChangeSystemMsg",
    "WAWebQueryExistsJob",
    "WAWebSetUsernameJob",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    async function m(t, n) {
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
          s = [{ userId: l, username: a }],
          u = await o("WAWebSetUsernameJob").setUsernamesJob(s);
        await o(
          "WAWebInsertUsernameChangeSystemMsg",
        ).maybeInsertUsernameChangeSystemMsgs(s, u, "mexHandleUsernameChange");
      }
    }
    async function p(e, t) {
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
    async function _(e, t) {
      var n;
      if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[mex][username] side-sub change notification",
            ])),
        );
        var r = t.xwa2_notify_username_on_update_side_sub.hash,
          a = await o("WAWebApiContact").getContactRecordByHash(r);
        if (a == null) {
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[mex][username] side contact hash not found",
              ])),
          );
          return;
        }
        if (a.isAddressBookContact === 1) {
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[mex][username] side-sub notif for contact, skip",
              ])),
          );
          return;
        }
        var i = o("WAWebWidFactory").createUserLidOrThrow(a.id);
        if (!o("WAWebUserPrefsMeUser").isMeAccount(i)) {
          var l = await o("WAWebQueryExistsJob").queryWidUsernameExists(i);
          l == null ||
            l.wasUpdated !== !0 ||
            (l.wasPreviouslyKnown === !0 &&
              (await o(
                "WAWebInsertUsernameChangeSystemMsg",
              ).generateUsernameChangeNotificationSystemMsg({
                wid: o("WAWebWidFactory").asUserLidOrThrow(i),
                oldUsername: l.oldUsername,
                newUsername: (n = l.username) != null ? n : "",
              })));
        }
      }
    }
    ((l.mexHandleUsernameChange = m),
      (l.mexHandleUsernameDelete = p),
      (l.mexHandleUsernameChangeForSideSub = _));
  },
  98,
);
