__d(
  "WAWebSecurityCodeApi",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebContactSystemMsg",
    "WAWebDBEncryptMultipleMsgs",
    "WAWebDBStoreEncryptedMsgs",
    "WAWebGetMessageCache",
    "WAWebSchemaChat",
    "WAWebSchemaGroupMetadata",
    "WAWebSchemaParticipant",
    "WAWebUserPrefsNotifications",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.offline,
            r = t.stanzaLid,
            a = t.user;
          if (!a.isBot()) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "addSecurityCodeChangedNotifications",
                ])),
            );
            var i = null;
            a.isLid()
              ? (i = o("WAWebApiContact").getPnIfLidIsLatestMapping(a))
              : a.isRegularUser() && r != null && (i = r);
            var l = yield d(a, i),
              s = l.notifications,
              u = l.chatIds;
            if (s.length !== 0) {
              if (!n) {
                s = s.map(function (e) {
                  return babelHelpers.extends({}, e, {
                    recvFresh: !0,
                    isNewMsg: !0,
                  });
                });
                for (var c of s)
                  o("WAWebBackendApi").frontendFireAndForget(
                    "processMultipleMessages",
                    {
                      chatId: c.from,
                      msgObjs: [c],
                      meta: { add: "after", isHistory: !1 },
                      processMessagesOrigin: "securityCodeApi",
                    },
                  );
                var m = yield o(
                  "WAWebDBEncryptMultipleMsgs",
                ).encryptMultipleDBMsgs(s);
                return (
                  yield o("WAWebDBStoreEncryptedMsgs").storeEncryptedDBMessages(
                    m,
                    u,
                    !1,
                  ),
                  l
                );
              }
              return (
                o("WAWebGetMessageCache")
                  .getMessageCache()
                  .addMessages(
                    s.map(function (e) {
                      return { msg: e };
                    }),
                    !1,
                  ),
                l
              );
            }
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = { notifications: [], chatIds: [] },
            a = t == null ? [e] : [e, t];
          if (
            !o("WAWebUserPrefsNotifications").getGlobalSecurityNotifications()
          )
            return n;
          var i = [];
          try {
            var l = (yield o("WAWebSchemaChat")
              .getChatTable()
              .bulkGet(
                a.map(function (e) {
                  return e.toString();
                }),
                !1,
              )).filter(Boolean);
            i.push.apply(
              i,
              l.map(function (e) {
                return {
                  chatId: o("WAWebWidFactory").createWid(e.id),
                  codeChangedUser: o("WAWebWidFactory").createUserWidOrThrow(
                    e.id,
                  ),
                };
              }),
            );
            var u = yield o("WAWebSchemaParticipant")
                .getParticipantTable()
                .anyOf(["participants"], a.map(String)),
              c = new Map();
            if (u.length > 0) {
              var d = u.map(function (e) {
                return e.groupId;
              });
              (yield o("WAWebSchemaGroupMetadata")
                .getGroupMetadataTable()
                .bulkGet(d)).forEach(function (e) {
                e != null && c.set(e.id, e);
              });
            }
            u.forEach(function (t) {
              var n = c.get(t.groupId);
              (n != null && n.defaultSubgroup && e.isLid()) ||
                i.push({
                  chatId: o("WAWebWidFactory").createWid(t.groupId),
                  codeChangedUser: e,
                });
            });
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "get chats failed",
                    ])),
                )
                .verbose()
                .sendLogs("get chats failed when creating device notification"),
              r("err")("get chats failed")
            );
          }
          var m = i.map(function (e) {
            var t = e.chatId,
              n = e.codeChangedUser;
            return o("WAWebContactSystemMsg").genSecurityCodeNotificationMsg(
              t,
              n,
            );
          });
          return (
            (n.notifications = m),
            (n.chatIds = i.map(function (e) {
              var t = e.chatId;
              return t.toString();
            })),
            n
          );
        })),
        m.apply(this, arguments)
      );
    }
    ((l.addSecurityCodeChangedNotifications = u),
      (l.generateSecurityCodeChangedNotifications = d));
  },
  98,
);
