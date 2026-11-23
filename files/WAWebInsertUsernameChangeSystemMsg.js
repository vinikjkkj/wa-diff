__d(
  "WAWebInsertUsernameChangeSystemMsg",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebContactSystemMsg",
    "WAWebGetChatRecordByAccountLid",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLidAwareContactsDB",
    "WAWebSchemaGroupMetadata",
    "WAWebSchemaParticipant",
    "WAWebUserUtils",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t, n, r) {
      if (
        (r === void 0 && (r = "unknown"),
        !!o("WAWebUsernameGatingUtils").usernameDisplayedEnabled())
      )
        try {
          var a = new Set(),
            i = [];
          (t.forEach(function (e) {
            var t = e.userId.toString();
            if (!a.has(t)) {
              var r = d(e, n);
              r != null && (a.add(t), i.push(p(r)));
            }
          }),
            await Promise.all(i));
        } catch (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  ": failed to insert username system msg ",
                  "",
                ])),
              r,
              t instanceof Error ? t.message : String(t),
            )
            .sendLogs("username-system-msg-insert-failed");
        }
    }
    function c(e, t) {
      return (
        o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
        e.some(function (e) {
          return d(e, t) != null;
        })
      );
    }
    function d(e, t) {
      var n = e.userId;
      if (!n.isLid() || o("WAWebUserUtils").isMeAccount(n)) return null;
      var r = t.get(n.toString());
      if (r == null) return null;
      var a = e.deleteUsername === !0;
      if ((!a && e.username == null) || r.usernameChanged !== !0) return null;
      if (a) {
        if (r.isPhoneNumberKnown !== !0) return null;
      } else if (r.wasPreviouslyKnown !== !0) return null;
      var i = m(e, a);
      return {
        wid: o("WAWebWidFactory").asUserLidOrThrow(n),
        oldUsername: r.oldUsername,
        newUsername: i,
      };
    }
    function m(e, t) {
      return t || e.username == null ? null : e.username;
    }
    async function p(e) {
      var t = e.newUsername,
        n = e.oldUsername,
        r = e.wid;
      if (
        !o("WAWebUsernameTypes").isPresentUsername(n) &&
        !o("WAWebUsernameTypes").isPresentUsername(t)
      ) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[username] old+new username empty ",
                "",
              ])),
            r.toLogString(),
          )
          .sendLogs(
            "generateUsernameChangeNotificationSystemMsg-usernames-empty",
          );
        return;
      }
      var a = await _(r);
      await Promise.all([
        f({ wid: r, oldUsername: n, newUsername: t, displayName: a }),
        g({ wid: r, oldUsername: n, newUsername: t, displayName: a }),
      ]);
    }
    async function _(e) {
      var t = await r("WAWebLidAwareContactsDB").get(e.toString());
      return t == null ? void 0 : t.displayNameLID;
    }
    async function f(e) {
      var t = e.displayName,
        n = e.newUsername,
        r = e.oldUsername,
        a = e.wid,
        i = (
          await o("WAWebGetChatRecordByAccountLid").getChatRecordByAccountLid(a)
        )[0];
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
    async function g(e) {
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
      (l.hasUsernameChangeSystemMsgs = c),
      (l.generateUsernameChangeNotificationSystemMsg = p));
  },
  98,
);
