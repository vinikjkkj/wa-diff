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
    "WAWebUsernameTypes",
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
              return m(e);
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
      var n = e.userId;
      if (!n.isLid() || o("WAWebUserPrefsMeUser").isMeAccount(n)) return null;
      var r = t.get(n.toString());
      if (r == null || r.wasUpdated !== !0) return null;
      var a = e.deleteUsername === !0;
      if ((!a && e.username == null) || (!a && r.wasPreviouslyKnown !== !0))
        return null;
      var i = d(e, a);
      return {
        wid: o("WAWebWidFactory").asUserLidOrThrow(n),
        oldUsername: o("WAWebUsernameTypes").serializeMaybeUsername(
          r.oldUsername,
        ),
        newUsername: i,
      };
    }
    function d(e, t) {
      return t || e.username == null
        ? ""
        : o("WAWebUsernameTypes").serializeUsername(e.username);
    }
    async function m(e) {
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
      var i = await p(a);
      await Promise.all([
        _({ wid: a, oldUsername: n, newUsername: t, displayName: i }),
        f({ wid: a, oldUsername: n, newUsername: t, displayName: i }),
      ]);
    }
    async function p(e) {
      var t = await r("WAWebLidAwareContactsDB").get(e.toString());
      return t == null ? void 0 : t.displayNameLID;
    }
    async function _(e) {
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
    async function f(e) {
      var t,
        n = e.displayName,
        r = e.newUsername,
        a = e.oldUsername,
        i = e.wid,
        l = o("WAWebSchemaParticipant").getParticipantTable(),
        s = i.toString(),
        u =
          (t = o("WAWebApiContact").getPhoneNumber(i)) == null
            ? void 0
            : t.toString(),
        c = await l.anyOf(["participants"], [s, u].filter(Boolean)),
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
        d.reduce(function (e, t, l) {
          var s = m[l];
          if ((s == null ? void 0 : s.defaultSubgroup) === !0) return e;
          var u = o("WAWebWidFactory").createWid(t),
            c = o("WAWebContactSystemMsg").genUsernameChangeSystemMsg({
              chatId: u,
              oldUsername: a,
              newUsername: r,
              wid: i,
              displayName: n,
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
      (l.generateUsernameChangeNotificationSystemMsg = m));
  },
  98,
);
