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
            if (!i.isLid()) {
              var l = C(n, i);
              throw (
                o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[mex][username] side-sub contact id is not a lid: ",
                        ", hash matches ",
                        "",
                      ])),
                    i.toLogString(),
                    l,
                  )
                  .sendLogs("mex-username-side-sub-non-lid-" + l),
                r("err")("mex-username-side-sub-non-lid")
              );
            }
            if (!o("WAWebUserPrefsMeUser").isMeAccount(i)) {
              var s = yield o("WAWebQueryExistsJob").queryWidUsernameExists(i);
              if (!(s == null || s.usernameChanged !== !0)) {
                var p = o("WAWebUsernameTypes").asMaybeUsername(s.username),
                  _ = p == null;
                if (_) {
                  if (s.isPhoneNumberKnown !== !0) return;
                } else if (s.wasPreviouslyKnown !== !0) return;
                yield o(
                  "WAWebInsertUsernameChangeSystemMsg",
                ).generateUsernameChangeNotificationSystemMsg({
                  wid: i,
                  oldUsername: o("WAWebUsernameTypes").asMaybeUsername(
                    s.oldUsername,
                  ),
                  newUsername: p,
                });
              }
            }
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      if (o("WAWebApiContact").getContactHash(t.toString()) === e) return "pn";
      var n = t.isUserNotPSA() ? o("WAWebApiContact").getCurrentLid(t) : null;
      return n == null
        ? "no-lid"
        : o("WAWebApiContact").getContactHash(n.toString()) === e
          ? "lid"
          : "none";
    }
    ((l.mexHandleUsernameChange = p),
      (l.mexHandleUsernameDelete = f),
      (l.mexHandleUsernameChangeForSideSub = h));
  },
  98,
);
