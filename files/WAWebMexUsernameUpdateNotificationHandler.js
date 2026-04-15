__d(
  "WAWebMexUsernameUpdateNotificationHandler",
  [
    "Promise",
    "WALogger",
    "WAWebApiChat",
    "WAWebApiContact",
    "WAWebContactSystemMsg",
    "WAWebHandleSingleMsgFactory",
    "WAWebLidAwareContactsDB",
    "WAWebQueryExistsJob",
    "WAWebSchemaGroupMetadata",
    "WAWebSchemaParticipant",
    "WAWebSetUsernameJob",
    "WAWebUsernameGatingUtils",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[mex][username] set notification received",
                ])),
            );
            var a = n.xwa2_notify_username_on_change,
              i = a.username,
              l = a.lid,
              s = o("WAWebWidFactory").createUserLidOrThrow(l),
              u = yield o("WAWebSetUsernameJob").setUsernamesJob([
                { userId: s, username: i },
              ]),
              c = u.get(s.toString()),
              d = (c == null ? void 0 : c.wasUpdated) === !0;
            if (d) {
              var m = yield r("WAWebLidAwareContactsDB").get(l),
                p = m == null ? void 0 : m.displayNameLID;
              yield b({
                wid: s,
                oldUsername: c == null ? void 0 : c.oldUsername,
                newUsername: i,
                displayName: p,
              });
            }
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
              u = yield o("WAWebSetUsernameJob").deleteUsernamesJob([
                { userId: l, displayNameLID: i },
              ]),
              c = u.get(l.toString()),
              d = (c == null ? void 0 : c.wasUpdated) === !0;
            d &&
              (yield b({
                wid: l,
                oldUsername: c == null ? void 0 : c.oldUsername,
                newUsername: "",
                displayName: i,
              }));
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[mex][username] side-sub change notification",
                ])),
            );
            var n = t.xwa2_notify_username_on_update_side_sub.hash,
              r = yield o("WAWebApiContact").getContactRecordByHash(n);
            if (r == null) {
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][username] side contact hash not found",
                  ])),
              );
              return;
            }
            if (r.isAddressBookContact === 1) {
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][username] side-sub notif for contact, skip",
                  ])),
              );
              return;
            }
            var a = o("WAWebWidFactory").createUserLidOrThrow(r.id),
              i = yield o("WAWebQueryExistsJob").queryWidUsernameExists(a);
            if (i != null && i.wasUpdated) {
              var l;
              yield b({
                wid: a,
                oldUsername: i.oldUsername,
                newUsername: (l = i.username) != null ? l : "",
              });
            }
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
          var t = e.displayName,
            a = e.newUsername,
            i = e.oldUsername,
            l = e.wid;
          if (r("isStringNullOrEmpty")(i) && r("isStringNullOrEmpty")(a)) {
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[username] old+new username empty ",
                    "",
                  ])),
                l.toLogString(),
              )
              .sendLogs(
                "generateUsernameChangeNotificationSystemMsg-usernames-empty",
              );
            return;
          }
          var s = (yield o("WAWebApiChat").getChatRecordByAccountLid(l))[0];
          if (s != null) {
            var u = o("WAWebWidFactory").createWid(s.id),
              c = o("WAWebContactSystemMsg").genUsernameChangeSystemMsg({
                chatId: u,
                oldUsername: i,
                newUsername: a,
                wid: l,
                displayName: t,
              });
            yield o("WAWebHandleSingleMsgFactory").handleSingleMsg({
              chatId: u,
              newMsg: c,
              handleSingleMsgOrigin: "username_change_notification",
            });
          }
          var d = o("WAWebSchemaParticipant").getParticipantTable(),
            _ = l.toString(),
            f = o("WAWebApiContact").getPhoneNumber(l),
            g = f == null ? void 0 : f.toString(),
            h = yield d.anyOf(["participants"], [_, g]),
            y = new Set(
              h.map(function (e) {
                return e.groupId;
              }),
            ),
            C = o("WAWebSchemaGroupMetadata").getGroupMetadataTable(),
            b = Array.from(y),
            v = yield C.bulkGet(b),
            S = b.reduce(function (e, n, r) {
              var s = v[r];
              if ((s == null ? void 0 : s.defaultSubgroup) === !0) return e;
              var u = o("WAWebWidFactory").createWid(n),
                c = o("WAWebContactSystemMsg").genUsernameChangeSystemMsg({
                  chatId: u,
                  oldUsername: i,
                  newUsername: a,
                  wid: l,
                  displayName: t,
                  viewMode:
                    o("WAWebViewMode.flow").ViewModeType.GROUP_MEMBER_UPDATES,
                }),
                d = o("WAWebHandleSingleMsgFactory").handleSingleMsg({
                  chatId: u,
                  newMsg: c,
                  handleSingleMsgOrigin: "username_change_notification",
                });
              return (e.push(d), e);
            }, []);
          yield (p || (p = n("Promise"))).all(S);
        })),
        v.apply(this, arguments)
      );
    }
    ((l.mexHandleUsernameChange = _),
      (l.mexHandleUsernameDelete = g),
      (l.mexHandleUsernameChangeForSideSub = y));
  },
  98,
);
