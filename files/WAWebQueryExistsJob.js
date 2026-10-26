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
    "WAWebContactSyncPrivacyHints",
    "WAWebDBCreateLidPnMappings",
    "WAWebHandleUsernameSync",
    "WAWebMexUsersGetUsername",
    "WAWebSetUsernameJob",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebUsync",
    "WAWebUsyncUser",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t) {
      return e.isLid()
        ? m({ type: "lid", wid: e }, t)
        : m({ type: "phone", phone: "+" + e.toString() }, t);
    }
    function d(e, t) {
      return m({ type: "phone", phone: e }, t);
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new (o("WAWebUsyncUser").USyncUser)(),
            r = new (o("WAWebUsync").USyncQuery)();
          (e.type === "phone"
            ? (r.withContactProtocol(o("WAWebUsync").USYNC_ADDRESSING_MODE.LID),
              n.withPhone(e.phone))
            : n.withId(e.wid),
            o("WAWebABProps").getABPropConfigValue(
              "username_antiscraping_send_cached_un",
            ) === !0 && (yield f(n, e)),
            o("WAWebContactSyncPrivacyHints").usyncPrivacyHintsEnabled() &&
              (yield h(n, e)),
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
            _ = u.pn,
            g = u.username,
            y = s[0].disappearingMode;
          if (e.type === "phone" && (d == null ? void 0 : d.type) !== "in")
            return (
              o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(a, i),
              null
            );
          var C = {
            wid: m,
            biz: c != null,
            bizInfo: c,
            isUsernameSearch: e.type === "phone" ? !1 : void 0,
          };
          (o("WAWebUsernameGatingUtils").usernameSearchEnabled() &&
            g != null &&
            (C.username = g),
            y &&
              ((C.disappearingMode = {
                duration: y.duration,
                settingTimestamp: y.t,
              }),
              y.ephemeralityDisabled &&
                (C.disappearingMode.isEphemeralityDisabled = !0)));
          var b = null,
            v = null;
          return (
            m.isLid()
              ? ((b = _), (v = m))
              : ((b = m),
                p != null &&
                  (v = o("WAWebWidFactory").createUserWidOrThrow(p, "lid"))),
            b != null &&
              v != null &&
              (yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                mappings: [{ pn: b, lid: v }],
                flushImmediately: !0,
                learningSource: "usync",
              }),
              m.isLid() || (C.wid = v)),
            yield o("WAWebHandleUsernameSync").handleUsernameSync(i),
            o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(a, i),
            C
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      if (e.type === "lid") return e.wid;
      var t = o("WAPhoneFindCC").extractDigits(e.phone) + "@c.us";
      return r("WAWebWid").isWid(t)
        ? o("WAWebWidFactory").createUserWidOrThrow(t)
        : null;
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = _(t);
          if (n != null) {
            var r = o("WAWebUsernameTypes").serializeMaybeUsername(
              yield o("WAWebApiContactUsernameFields").getContactUsername(n),
            );
            r != null && e.withUsername(r);
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
          var n = _(t);
          if (n != null) {
            var r = yield o("WAWebContactSyncPrivacyHints").getUsyncPrivacyHint(
              n,
            );
            r != null && e.withTcToken(r.tcToken).withCommonGid(r.commonGid);
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.isLid()) {
            var t, n, r;
            if (
              o("WAWebABProps").getABPropConfigValue("mex_usync_username_query")
            ) {
              var a = o("WAWebWidFactory").createUserWidOrThrow(e.toString()),
                i = yield o("WAWebMexUsersGetUsername").getMexUserUsername(a);
              if (((n = a), i.error === !0))
                return (
                  o("WALogger")
                    .WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[usync] username MEX lookup failed",
                        ])),
                    )
                    .sendLogs("username-mex-query-failed"),
                  {
                    username: void 0,
                    usernameChanged: !1,
                    wasPreviouslyKnown: !1,
                    errored: !0,
                  }
                );
              i.username != null
                ? (t = o("WAWebUsernameTypes").serializeMaybeUsername(
                    i.username,
                  ))
                : (r = !0);
            } else {
              var l = yield C(e);
              l != null && ((t = l.username), (n = l.id), (r = l.shouldDelete));
            }
            if (n != null) {
              var s = !1,
                c = !1,
                d = !1,
                m,
                p = o("WAWebUsernameTypes").asMaybeUsername(t);
              if (p != null) {
                var _ = yield o("WAWebSetUsernameJob").setUsernamesJob([
                    { userId: n, username: p },
                  ]),
                  f = _.get(n.toString());
                ((s = (f == null ? void 0 : f.usernameChanged) === !0),
                  (c = (f == null ? void 0 : f.wasPreviouslyKnown) === !0),
                  (d = (f == null ? void 0 : f.isPhoneNumberKnown) === !0),
                  (m = o("WAWebUsernameTypes").serializeMaybeUsername(
                    f == null ? void 0 : f.oldUsername,
                  )));
              } else if (r === !0) {
                var g = yield o("WAWebSetUsernameJob").setUsernamesJob([
                    { userId: n, deleteUsername: !0 },
                  ]),
                  h = g.get(n.toString());
                ((s = (h == null ? void 0 : h.usernameChanged) === !0),
                  (c = (h == null ? void 0 : h.wasPreviouslyKnown) === !0),
                  (d = (h == null ? void 0 : h.isPhoneNumberKnown) === !0),
                  (m = o("WAWebUsernameTypes").serializeMaybeUsername(
                    h == null ? void 0 : h.oldUsername,
                  )));
              }
              return {
                username: t,
                usernameChanged: s,
                wasPreviouslyKnown: c,
                isPhoneNumberKnown: d,
                oldUsername: m != null ? m : void 0,
              };
            }
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        L.apply(this, arguments)
      );
    }
    ((l.queryWidExists = c),
      (l.queryPhoneExists = d),
      (l.queryExist = m),
      (l.queryWidUsernameExists = v),
      (l.queryUsernameExists = R));
  },
  98,
);
