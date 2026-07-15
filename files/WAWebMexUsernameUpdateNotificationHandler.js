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
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[mex][username] side-sub change notification",
                ])),
            );
            var r = t.xwa2_notify_username_on_update_side_sub.hash,
              a = yield o("WAWebApiContact").getContactRecordByHash(r);
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
              var l = yield o("WAWebQueryExistsJob").queryWidUsernameExists(i);
              if (!(l == null || l.usernameChanged !== !0)) {
                var s = (n = l.username) != null ? n : "",
                  m = s === "";
                if (m) {
                  if (l.isPhoneNumberKnown !== !0) return;
                } else if (l.wasPreviouslyKnown !== !0) return;
                yield o(
                  "WAWebInsertUsernameChangeSystemMsg",
                ).generateUsernameChangeNotificationSystemMsg({
                  wid: o("WAWebWidFactory").asUserLidOrThrow(i),
                  oldUsername: l.oldUsername,
                  newUsername: s,
                });
              }
            }
          }
        })),
        h.apply(this, arguments)
      );
    }
    ((l.mexHandleUsernameChange = m),
      (l.mexHandleUsernameDelete = _),
      (l.mexHandleUsernameChangeForSideSub = g));
  },
  98,
);
