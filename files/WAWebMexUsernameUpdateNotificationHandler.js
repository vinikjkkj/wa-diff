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
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameODS",
    "WAWebUsernameTypes",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
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
            var r = n.xwa2_notify_username_on_change,
              a = r.username,
              i = r.lid,
              l = o("WAWebWidFactory").createUserLidOrThrow(i),
              s = [
                { userId: l, username: o("WAWebUsernameTypes").asUsername(a) },
              ],
              u = yield o("WAWebSetUsernameJob").setUsernamesJob(s);
            yield o(
              "WAWebInsertUsernameChangeSystemMsg",
            ).maybeInsertUsernameChangeSystemMsgs(
              s,
              u,
              "mexHandleUsernameChange",
            );
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
              ]);
            yield o(
              "WAWebInsertUsernameChangeSystemMsg",
            ).maybeInsertUsernameChangeSystemMsgs(
              [{ userId: l, deleteUsername: !0, displayNameLID: i }],
              u,
              "mexHandleUsernameDelete",
            );
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
            var a = yield b(n, r.id);
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
              yield o("WAWebApiContact").isAddressBookContact(
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
            if (!o("WAWebUserPrefsMeUser").isMeAccount(a)) {
              var i = yield o("WAWebQueryExistsJob").queryWidUsernameExists(a);
              if (!(i == null || i.usernameChanged !== !0)) {
                var l = o("WAWebUsernameTypes").asMaybeUsername(i.username),
                  s = l == null;
                if (s) {
                  if (i.isPhoneNumberKnown !== !0) return;
                } else if (i.wasPreviouslyKnown !== !0) return;
                yield o(
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
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (r("WAWebWid").isStringLid(t))
            return o("WAWebWidFactory").createUserLidOrThrow(t);
          var n = yield S(e);
          if (n == null)
            return (
              o("WAWebUsernameODS").logUsernameSideSubNoLidForHash(),
              null
            );
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
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield r("WAWebLidAwareContactsDB").equalsPrimaryKeys(
            ["contactHash"],
            e,
          );
          return t.find(function (e) {
            return r("WAWebWid").isStringLid(e);
          });
        })),
        R.apply(this, arguments)
      );
    }
    ((l.mexHandleUsernameChange = _),
      (l.mexHandleUsernameDelete = g),
      (l.mexHandleUsernameChangeForSideSub = y));
  },
  98,
);
