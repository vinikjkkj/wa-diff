__d(
  "WAWebInsertUsernameChangeSystemMsg",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          if (
            (a === void 0 && (a = "unknown"),
            !!o("WAWebUsernameGatingUtils").usernameDisplayedEnabled())
          )
            try {
              var i = t
                .map(function (e) {
                  return m(e, r);
                })
                .filter(Boolean);
              yield (u || (u = n("Promise"))).all(
                i.map(function (e) {
                  return p(e);
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
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
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
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.newUsername,
            a = e.oldUsername,
            i = e.wid;
          if (r("isStringNullOrEmpty")(a) && r("isStringNullOrEmpty")(t)) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[username] old+new username empty ",
                    "",
                  ])),
                i.toLogString(),
              )
              .sendLogs(
                "generateUsernameChangeNotificationSystemMsg-usernames-empty",
              );
            return;
          }
          var l = yield f(i);
          yield (u || (u = n("Promise"))).all([
            h({ wid: i, oldUsername: a, newUsername: t, displayName: l }),
            C({ wid: i, oldUsername: a, newUsername: t, displayName: l }),
          ]);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield r("WAWebLidAwareContactsDB").get(e.toString());
          return t == null ? void 0 : t.displayNameLID;
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.displayName,
            n = e.newUsername,
            r = e.oldUsername,
            a = e.wid,
            i = (yield o("WAWebApiChat").getChatRecordByAccountLid(a))[0];
          if (i != null) {
            var l = o("WAWebWidFactory").createWid(i.id),
              s = o("WAWebContactSystemMsg").genUsernameChangeSystemMsg({
                chatId: l,
                oldUsername: r,
                newUsername: n,
                wid: a,
                displayName: t,
              });
            yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
              chatId: l,
              newMsg: s,
              handleSingleMsgOrigin: "username_change_notification",
            });
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.displayName,
            r = e.newUsername,
            a = e.oldUsername,
            i = e.wid,
            l = o("WAWebSchemaParticipant").getParticipantTable(),
            s = i.toString(),
            c = o("WAWebApiContact").getPhoneNumber(i),
            d = c == null ? void 0 : c.toString(),
            m = yield l.anyOf(["participants"], [s, d]),
            p = Array.from(
              new Set(
                m.map(function (e) {
                  return e.groupId;
                }),
              ),
            ),
            _ = yield o("WAWebSchemaGroupMetadata")
              .getGroupMetadataTable()
              .bulkGet(p);
          yield (u || (u = n("Promise"))).all(
            p.reduce(function (e, n, l) {
              var s = _[l];
              if ((s == null ? void 0 : s.defaultSubgroup) === !0) return e;
              var u = o("WAWebWidFactory").createWid(n),
                c = o("WAWebContactSystemMsg").genUsernameChangeSystemMsg({
                  chatId: u,
                  oldUsername: a,
                  newUsername: r,
                  wid: i,
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
        })),
        b.apply(this, arguments)
      );
    }
    ((l.maybeInsertUsernameChangeSystemMsgs = c),
      (l.generateUsernameChangeNotificationSystemMsg = p));
  },
  98,
);
