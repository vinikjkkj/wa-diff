__d(
  "WAWebQueryExistsJob",
  [
    "WALogger",
    "WAPhoneFindCC",
    "WAWebABProps",
    "WAWebApiContactUsernameFields",
    "WAWebBackendErrors",
    "WAWebContactSyncErrorCodes",
    "WAWebContactSyncLogger",
    "WAWebDBCreateLidPnMappings",
    "WAWebHandleUsernameSync",
    "WAWebMexUsersGetUsername",
    "WAWebSetUsernameJob",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "WAWebUsync",
    "WAWebUsyncUser",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return e.isLid()
        ? d({ type: "lid", wid: e }, t)
        : d({ type: "phone", phone: "+" + e.toString() }, t);
    }
    function c(e, t) {
      return d({ type: "phone", phone: e }, t);
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new (o("WAWebUsyncUser").USyncUser)(),
            r = new (o("WAWebUsync").USyncQuery)();
          (e.type === "phone"
            ? (r.withContactProtocol(o("WAWebUsync").USYNC_ADDRESSING_MODE.LID),
              n.withPhone(e.phone))
            : n.withId(e.wid),
            o("WAWebABProps").getABPropConfigValue(
              "username_antiscraping_send_cached_un",
            ) === !0 && (yield _(n, e)),
            r.withUser(n),
            r.withBusinessProtocol(),
            r.withDisappearingModeProtocol(),
            r.withUsernameProtocol());
          var a = o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.createEventContext({
              syncType: o("WAWebContactSyncLogger").getSyncTypeString(
                "interactive",
                "query",
              ),
              requestOrigin:
                t != null
                  ? t
                  : o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN,
              requestedCount: 1,
              protocols: r.protocols,
            }),
            i = yield o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.executeWithLogging(
              a,
              function () {
                return r.execute();
              },
              o("WAWebContactSyncErrorCodes").QUERY_EXIST,
            ),
            l = i.error.all || i.error.contact;
          if (l)
            throw (
              o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                a,
                l.errorCode,
                i,
                o("WAWebContactSyncErrorCodes").QUERY_EXIST,
              ),
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                l.errorCode,
                l.errorText,
              )
            );
          var s = i.list;
          if (s.length !== 1)
            return (
              o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(a, i),
              null
            );
          var u = s[0],
            c = u.business,
            d = u.contact,
            m = u.id,
            p = u.lid,
            f = u.pn,
            g = u.username,
            h = s[0].disappearingMode;
          if (e.type === "phone" && (d == null ? void 0 : d.type) !== "in")
            return (
              o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(a, i),
              null
            );
          var y = {
            wid: m,
            biz: c != null,
            bizInfo: c,
            isUsernameSearch: e.type === "phone" ? !1 : void 0,
          };
          (o("WAWebUsernameGatingUtils").usernameSearchEnabled() &&
            g != null &&
            (y.username = g),
            h &&
              ((y.disappearingMode = {
                duration: h.duration,
                settingTimestamp: h.t,
              }),
              h.ephemeralityDisabled &&
                (y.disappearingMode.isEphemeralityDisabled = !0)));
          var C = null,
            b = null;
          return (
            m.isLid()
              ? ((C = f), (b = m))
              : ((C = m),
                p != null &&
                  (b = o("WAWebWidFactory").createUserWidOrThrow(p, "lid"))),
            C != null &&
              b != null &&
              (yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                mappings: [{ pn: C, lid: b }],
                flushImmediately: !0,
                learningSource: "usync",
              }),
              !m.isLid() &&
                o(
                  "WAWebUsernameWorkerCompatibleGatingUtils",
                ).onlyShowLidContacts() &&
                (y.wid = b)),
            yield o("WAWebHandleUsernameSync").handleUsernameSync(i),
            o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(a, i),
            y
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      if (e.type === "lid") return e.wid;
      var t = o("WAPhoneFindCC").extractDigits(e.phone) + "@c.us";
      return r("WAWebWid").isWid(t)
        ? o("WAWebWidFactory").createUserWidOrThrow(t)
        : null;
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = p(t);
          if (n != null) {
            var r = o("WAWebUsernameTypes").serializeMaybeUsername(
              yield o("WAWebApiContactUsernameFields").getContactUsername(n),
            );
            r != null && e.withUsername(r);
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
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[usync] querying contact: ",
                " for username info",
              ])),
            t,
          );
          var r = new (o("WAWebUsyncUser").USyncUser)(),
            a = new (o("WAWebUsync").USyncQuery)();
          (r.withId(t), a.withUser(r), a.withUsernameProtocol());
          var i = o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.createEventContext({
              syncType: o("WAWebContactSyncLogger").getSyncTypeString(
                "interactive",
                "query",
              ),
              requestOrigin:
                n != null
                  ? n
                  : o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN,
              requestedCount: 1,
              protocols: a.protocols,
            }),
            l = yield o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.executeWithLogging(
              i,
              function () {
                return a.execute();
              },
              o("WAWebContactSyncErrorCodes").QUERY_USERNAME_DEPRECATED,
            ),
            u = l.error.all || l.error.contact || l.error.username;
          if (
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[usync] username info response",
                ])),
            ),
            u)
          )
            throw (
              o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                i,
                u.errorCode,
                l,
                o("WAWebContactSyncErrorCodes").QUERY_USERNAME_DEPRECATED,
              ),
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                u.errorCode,
                u.errorText,
              )
            );
          var c = l.list;
          if (c.length !== 1)
            return (
              o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l),
              null
            );
          var d = c[0];
          if (d.id != null)
            return (
              o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l),
              {
                id: d.id,
                username: d.username,
                shouldDelete: !Object.hasOwn(d, "username"),
              }
            );
          o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l);
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
          if (e.isLid()) {
            var t, n, r;
            if (
              o("WAWebABProps").getABPropConfigValue("mex_usync_username_query")
            ) {
              var a = o("WAWebWidFactory").createUserWidOrThrow(e.toString()),
                i = yield o("WAWebMexUsersGetUsername").getMexUserUsername(a);
              if (((n = a), i.error === !0))
                return {
                  username: void 0,
                  usernameChanged: !1,
                  wasPreviouslyKnown: !1,
                  errored: !0,
                };
              i.username != null
                ? (t = o("WAWebUsernameTypes").serializeMaybeUsername(
                    i.username,
                  ))
                : (r = !0);
            } else {
              var l = yield g(e);
              l != null && ((t = l.username), (n = l.id), (r = l.shouldDelete));
            }
            if (n != null) {
              var s = !1,
                u = !1,
                c = !1,
                d,
                m = o("WAWebUsernameTypes").asMaybeUsername(t);
              if (m != null) {
                var p = yield o("WAWebSetUsernameJob").setUsernamesJob([
                    { userId: n, username: m },
                  ]),
                  _ = p.get(n.toString());
                ((s = (_ == null ? void 0 : _.usernameChanged) === !0),
                  (u = (_ == null ? void 0 : _.wasPreviouslyKnown) === !0),
                  (c = (_ == null ? void 0 : _.isPhoneNumberKnown) === !0),
                  (d = o("WAWebUsernameTypes").serializeMaybeUsername(
                    _ == null ? void 0 : _.oldUsername,
                  )));
              } else if (r === !0) {
                var f = yield o("WAWebSetUsernameJob").setUsernamesJob([
                    { userId: n, deleteUsername: !0 },
                  ]),
                  h = f.get(n.toString());
                ((s = (h == null ? void 0 : h.usernameChanged) === !0),
                  (u = (h == null ? void 0 : h.wasPreviouslyKnown) === !0),
                  (c = (h == null ? void 0 : h.isPhoneNumberKnown) === !0),
                  (d = o("WAWebUsernameTypes").serializeMaybeUsername(
                    h == null ? void 0 : h.oldUsername,
                  )));
              }
              return {
                username: t,
                usernameChanged: s,
                wasPreviouslyKnown: u,
                isPhoneNumberKnown: c,
                oldUsername: d != null ? d : void 0,
              };
            }
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (
            e.length < o("WAWebUsernameTypes").USERNAME_MIN_LENGTH ||
            e.length > o("WAWebUsernameTypes").USERNAME_MAX_LENGTH
          )
            return null;
          var r = new (o("WAWebUsyncUser").USyncUser)(),
            a = new (o("WAWebUsync").USyncQuery)();
          (a.withUser(r),
            a.withContactProtocol(o("WAWebUsync").USYNC_ADDRESSING_MODE.LID),
            a.withBusinessProtocol(),
            r.withUsername(e),
            t != null && r.withUsernameKey(t));
          var i = o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.createEventContext({
              syncType: o("WAWebContactSyncLogger").getSyncTypeString(
                "interactive",
                "query",
              ),
              requestOrigin:
                n != null
                  ? n
                  : o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN,
              requestedCount: 1,
              protocols: a.protocols,
            }),
            l = yield o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.executeWithLogging(
              i,
              function () {
                return a.execute();
              },
              o("WAWebContactSyncErrorCodes").QUERY_USERNAME_EXIST,
            ),
            s = l.error.all || l.error.contact;
          if (s)
            throw (
              o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                i,
                s.errorCode,
                l,
                o("WAWebContactSyncErrorCodes").QUERY_USERNAME_EXIST,
              ),
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                s.errorCode,
                s.errorText,
              )
            );
          var u = l.list;
          if (u.length !== 1)
            return (
              o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l),
              null
            );
          var c = u[0],
            d = c.business,
            m = c.contact,
            p = c.id,
            _ = m.type,
            f = m.username;
          if (_ === "out")
            return (
              o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l),
              null
            );
          if (p != null) {
            p.isLid() &&
              d != null &&
              d.pn != null &&
              (yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                mappings: [{ pn: d.pn, lid: p }],
                flushImmediately: !0,
                learningSource: "usync",
              }));
            var g = !1,
              h = o("WAWebUsernameTypes").asMaybeUsername(f);
            if (h != null) {
              var y = yield o("WAWebSetUsernameJob").setUsernamesJob([
                  { userId: p, username: h },
                ]),
                C = y.get(p.toString());
              g =
                (C == null ? void 0 : C.usernameChanged) === !0 ||
                (C == null ? void 0 : C.countryCodeChanged) === !0;
            } else {
              var b = yield o("WAWebSetUsernameJob").setUsernamesJob([
                  { userId: p, deleteUsername: !0 },
                ]),
                v = b.get(p.toString());
              g =
                (v == null ? void 0 : v.usernameChanged) === !0 ||
                (v == null ? void 0 : v.countryCodeChanged) === !0;
            }
            return (
              o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l),
              {
                wid: p,
                biz: d != null,
                bizInfo: d,
                username: f,
                wasUpdated: g,
                isUsernameSearch: !0,
              }
            );
          }
          return (
            o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l),
            { keyRequired: !0, username: f, isUsernameSearch: !0 }
          );
        })),
        v.apply(this, arguments)
      );
    }
    ((l.queryWidExists = u),
      (l.queryPhoneExists = c),
      (l.queryExist = d),
      (l.queryWidUsernameExists = y),
      (l.queryUsernameExists = b));
  },
  98,
);
