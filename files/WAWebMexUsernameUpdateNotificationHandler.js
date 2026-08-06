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
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[mex][username] side-sub change notification",
                ])),
            );
            var n = t.xwa2_notify_username_on_update_side_sub.hash,
              a = yield o("WAWebApiContact").getContactRecordByHash(n);
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
            var i = o("WAWebWidFactory").createWid(a.id);
            if (!i.isLid())
              throw (
                o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[mex][username] side-sub contact id is not a lid: ",
                        "",
                      ])),
                    i.toLogString(),
                  )
                  .sendLogs("mex-username-side-sub-non-lid"),
                r("err")("mex-username-side-sub-non-lid")
              );
            if (!o("WAWebUserPrefsMeUser").isMeAccount(i)) {
              var l = yield o("WAWebQueryExistsJob").queryWidUsernameExists(i);
              if (!(l == null || l.usernameChanged !== !0)) {
                var s = o("WAWebUsernameTypes").asMaybeUsername(l.username),
                  p = s == null;
                if (p) {
                  if (l.isPhoneNumberKnown !== !0) return;
                } else if (l.wasPreviouslyKnown !== !0) return;
                yield o(
                  "WAWebInsertUsernameChangeSystemMsg",
                ).generateUsernameChangeNotificationSystemMsg({
                  wid: i,
                  oldUsername: o("WAWebUsernameTypes").asMaybeUsername(
                    l.oldUsername,
                  ),
                  newUsername: s,
                });
              }
            }
          }
        })),
        y.apply(this, arguments)
      );
    }
    ((l.mexHandleUsernameChange = p),
      (l.mexHandleUsernameDelete = f),
      (l.mexHandleUsernameChangeForSideSub = h));
  },
  98,
);
