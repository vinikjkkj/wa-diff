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
    "WAWebUsernameTypes",
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
              var i = new Set(),
                l = [];
              (t.forEach(function (e) {
                var t = e.userId.toString();
                if (!i.has(t)) {
                  var n = m(e, r);
                  n != null && (i.add(t), l.push(_(n)));
                }
              }),
                yield (u || (u = n("Promise"))).all(l));
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
      var n = e.userId;
      if (!n.isLid() || o("WAWebUserPrefsMeUser").isMeAccount(n)) return null;
      var r = t.get(n.toString());
      if (r == null) return null;
      var a = e.deleteUsername === !0;
      if ((!a && e.username == null) || r.usernameChanged !== !0) return null;
      if (a) {
        if (r.isPhoneNumberKnown !== !0) return null;
      } else if (r.wasPreviouslyKnown !== !0) return null;
      var i = p(e, a);
      return {
        wid: o("WAWebWidFactory").asUserLidOrThrow(n),
        oldUsername: o("WAWebUsernameTypes").serializeMaybeUsername(
          r.oldUsername,
        ),
        newUsername: i,
      };
    }
    function p(e, t) {
      return t || e.username == null
        ? ""
        : o("WAWebUsernameTypes").serializeUsername(e.username);
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          var l = yield g(i);
          yield (u || (u = n("Promise"))).all([
            y({ wid: i, oldUsername: a, newUsername: t, displayName: l }),
            b({ wid: i, oldUsername: a, newUsername: t, displayName: l }),
          ]);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield r("WAWebLidAwareContactsDB").get(e.toString());
          return t == null ? void 0 : t.displayNameLID;
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            r = e.displayName,
            a = e.newUsername,
            i = e.oldUsername,
            l = e.wid,
            s = o("WAWebSchemaParticipant").getParticipantTable(),
            c = l.toString(),
            d =
              (t = o("WAWebApiContact").getPhoneNumber(l)) == null
                ? void 0
                : t.toString(),
            m = yield s.anyOf(["participants"], [c, d].filter(Boolean)),
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
            p.reduce(function (e, t, n) {
              var s = _[n];
              if ((s == null ? void 0 : s.defaultSubgroup) === !0) return e;
              var u = o("WAWebWidFactory").createWid(t),
                c = o("WAWebContactSystemMsg").genUsernameChangeSystemMsg({
                  chatId: u,
                  oldUsername: i,
                  newUsername: a,
                  wid: l,
                  displayName: r,
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
        v.apply(this, arguments)
      );
    }
    ((l.maybeInsertUsernameChangeSystemMsgs = c),
      (l.generateUsernameChangeNotificationSystemMsg = _));
  },
  98,
);
