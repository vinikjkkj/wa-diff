__d(
  "WAWebInsertUsernameChangeSystemMsg",
  [
    "WALogger",
    "WAWebApiChat",
    "WAWebApiContact",
    "WAWebContactSystemMsg",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLidAwareContactsDB",
    "WAWebSchemaGroupMetadata",
    "WAWebSchemaParticipant",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "compactMap",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t, n, a) {
      if (
        (a === void 0 && (a = "unknown"),
        !!o("WAWebUsernameGatingUtils").usernameDisplayedEnabled())
      )
        try {
          var i = r("compactMap")(t, function (e) {
            return c(e, n);
          });
          await Promise.all(
            i.map(function (e) {
              return d(e);
            }),
          );
        } catch (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  ": failed to insert username system msg ",
                  "",
                ])),
              a,
              t instanceof Error ? t.message : String(t),
            )
            .sendLogs("username-system-msg-insert-failed");
        }
    }
    function c(e, t) {
      var n,
        r = e.userId;
      if (!r.isLid() || o("WAWebUserPrefsMeUser").isMeAccount(r)) return null;
      var a = t.get(r.toString());
      if (a == null || a.wasUpdated !== !0) return null;
      var i = e.deleteUsername === !0;
      return (!i && e.username == null) || (!i && a.wasPreviouslyKnown !== !0)
        ? null
        : {
            wid: o("WAWebWidFactory").asUserLidOrThrow(r),
            oldUsername: a.oldUsername,
            newUsername: i ? "" : (n = e.username) != null ? n : "",
          };
    }
    async function d(e) {
      var t = e.newUsername,
        n = e.oldUsername,
        a = e.wid;
      if (r("isStringNullOrEmpty")(n) && r("isStringNullOrEmpty")(t)) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[username] old+new username empty ",
                "",
              ])),
            a.toLogString(),
          )
          .sendLogs(
            "generateUsernameChangeNotificationSystemMsg-usernames-empty",
          );
        return;
      }
      var i = await m(a);
      await Promise.all([
        p({ wid: a, oldUsername: n, newUsername: t, displayName: i }),
        _({ wid: a, oldUsername: n, newUsername: t, displayName: i }),
      ]);
    }
    async function m(e) {
      var t = await r("WAWebLidAwareContactsDB").get(e.toString());
      return t == null ? void 0 : t.displayNameLID;
    }
    async function p(e) {
      var t = e.displayName,
        n = e.newUsername,
        r = e.oldUsername,
        a = e.wid,
        i = (await o("WAWebApiChat").getChatRecordByAccountLid(a))[0];
      if (i != null) {
        var l = o("WAWebWidFactory").createWid(i.id),
          s = o("WAWebContactSystemMsg").genUsernameChangeSystemMsg({
            chatId: l,
            oldUsername: r,
            newUsername: n,
            wid: a,
            displayName: t,
          });
        await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
          chatId: l,
          newMsg: s,
          handleSingleMsgOrigin: "username_change_notification",
        });
      }
    }
    async function _(e) {
      var t = e.displayName,
        n = e.newUsername,
        r = e.oldUsername,
        a = e.wid,
        i = o("WAWebSchemaParticipant").getParticipantTable(),
        l = a.toString(),
        s = o("WAWebApiContact").getPhoneNumber(a),
        u = s == null ? void 0 : s.toString(),
        c = await i.anyOf(["participants"], [l, u]),
        d = Array.from(
          new Set(
            c.map(function (e) {
              return e.groupId;
            }),
          ),
        ),
        m = await o("WAWebSchemaGroupMetadata")
          .getGroupMetadataTable()
          .bulkGet(d);
      await Promise.all(
        d.reduce(function (e, i, l) {
          var s = m[l];
          if ((s == null ? void 0 : s.defaultSubgroup) === !0) return e;
          var u = o("WAWebWidFactory").createWid(i),
            c = o("WAWebContactSystemMsg").genUsernameChangeSystemMsg({
              chatId: u,
              oldUsername: r,
              newUsername: n,
              wid: a,
              displayName: t,
              viewMode:
                o("WAWebViewMode.flow").ViewModeType.GROUP_MEMBER_UPDATES,
            });
          return (
            e.push(
              o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: u,
                newMsg: c,
                handleSingleMsgOrigin: "username_change_notification",
              }),
            ),
            e
          );
        }, []),
      );
    }
    ((l.maybeInsertUsernameChangeSystemMsgs = u),
      (l.generateUsernameChangeNotificationSystemMsg = d));
  },
  98,
);
