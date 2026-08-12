__d(
  "WAWebMexUsernameUpdateNotificationHandler",
  [
    "Promise",
    "WALogger",
    "WAWebApiContact",
    "WAWebCurrentUser",
    "WAWebInsertUsernameChangeSystemMsg",
    "WAWebLidAwareContactsDB",
    "WAWebQueryExistsJob",
    "WAWebSetUsernameJob",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
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
              var l = R(n, i),
                s = yield b(n),
                p = s.lidWithHash,
                _ = s.pnContactHashMatched,
                f =
                  p != null
                    ? o("WAWebWidFactory").createWid(p).toLogString()
                    : "none",
                g = o("WAWebCurrentUser").isEmployee() ? n : "redacted";
              throw (
                o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[mex][username] side-sub contact id is not a lid: ",
                        ", hash: ",
                        ", hash matches ",
                        ", lid row with same hash: ",
                        ", pn hash column matched: ",
                        "",
                      ])),
                    i.toLogString(),
                    g,
                    l,
                    f,
                    String(_),
                  )
                  .sendLogs(S(l)),
                r("err")("mex-username-side-sub-non-lid")
              );
            }
            if (!o("WAWebUserPrefsMeUser").isMeAccount(i)) {
              var h = yield o("WAWebQueryExistsJob").queryWidUsernameExists(i);
              if (!(h == null || h.usernameChanged !== !0)) {
                var y = o("WAWebUsernameTypes").asMaybeUsername(h.username),
                  C = y == null;
                if (C) {
                  if (h.isPhoneNumberKnown !== !0) return;
                } else if (h.wasPreviouslyKnown !== !0) return;
                yield o(
                  "WAWebInsertUsernameChangeSystemMsg",
                ).generateUsernameChangeNotificationSystemMsg({
                  wid: i,
                  oldUsername: o("WAWebUsernameTypes").asMaybeUsername(
                    h.oldUsername,
                  ),
                  newUsername: y,
                });
              }
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
          var t = yield (p || (p = n("Promise"))).all([
              r("WAWebLidAwareContactsDB").equalsPrimaryKeys(
                ["contactHash"],
                e,
              ),
              r("WAWebLidAwareContactsDB").equalsPrimaryKeys(
                ["pnContactHash"],
                e,
              ),
            ]),
            a = t[0],
            i = t[1];
          return {
            lidWithHash: a.find(function (e) {
              return r("WAWebWid").isStringLid(e);
            }),
            pnContactHashMatched: i.some(function (e) {
              return (
                r("WAWebWid").isStringLid(e) &&
                o("WAWebApiContact").getPnIfLidIsLatestMapping(
                  o("WAWebWidFactory").createUserLidOrThrow(e),
                ) != null
              );
            }),
          };
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return e === "pn"
        ? "mex-username-side-sub-non-lid-pn"
        : e === "pn-and-lid"
          ? "mex-username-side-sub-non-lid-pn-and-lid"
          : e === "pn-no-lid"
            ? "mex-username-side-sub-non-lid-pn-no-lid"
            : e === "lid"
              ? "mex-username-side-sub-non-lid-lid"
              : e === "no-lid"
                ? "mex-username-side-sub-non-lid-no-lid"
                : e === "none"
                  ? "mex-username-side-sub-non-lid-none"
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          e,
                      );
                    })();
    }
    function R(e, t) {
      var n = o("WAWebApiContact").getContactHash(t.toString()) === e,
        r = t.isUserNotPSA() ? o("WAWebApiContact").getCurrentLid(t) : null;
      if (r == null) return n ? "pn-no-lid" : "no-lid";
      var a = o("WAWebApiContact").getContactHash(r.toString()) === e;
      return n ? (a ? "pn-and-lid" : "pn") : a ? "lid" : "none";
    }
    ((l.mexHandleUsernameChange = _),
      (l.mexHandleUsernameDelete = g),
      (l.mexHandleUsernameChangeForSideSub = y));
  },
  98,
);
