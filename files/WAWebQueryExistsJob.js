__d(
  "WAWebQueryExistsJob",
  [
    "WALogger",
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
            f = u.username,
            g = s[0].disappearingMode;
          if (e.type === "phone" && (d == null ? void 0 : d.type) !== "in")
            return (
              o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(a, i),
              null
            );
          var h = {
            wid: m,
            biz: c != null,
            bizInfo: c,
            isUsernameSearch: e.type === "phone" ? !1 : void 0,
          };
          (o("WAWebUsernameGatingUtils").usernameSearchEnabled() &&
            f != null &&
            (h.username = f),
            g &&
              ((h.disappearingMode = {
                duration: g.duration,
                settingTimestamp: g.t,
              }),
              g.ephemeralityDisabled &&
                (h.disappearingMode.isEphemeralityDisabled = !0)));
          var y = null,
            C = null;
          return (
            m.isLid()
              ? ((y = _), (C = m))
              : ((y = m),
                p != null &&
                  (C = o("WAWebWidFactory").createUserWidOrThrow(p, "lid"))),
            y != null &&
              C != null &&
              (yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                mappings: [{ pn: y, lid: C }],
                flushImmediately: !0,
                learningSource: "usync",
              }),
              !m.isLid() &&
                o(
                  "WAWebUsernameWorkerCompatibleGatingUtils",
                ).onlyShowLidContacts() &&
                (h.wid = C)),
            yield o("WAWebHandleUsernameSync").handleUsernameSync(i),
            o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(a, i),
            h
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
            u = l.error.all || l.error.contact;
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
                shouldDelete: !Object.prototype.hasOwnProperty.call(
                  d,
                  "username",
                ),
              }
            );
          o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l);
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
          if (e.isLid()) {
            var t, n, r;
            if (o("WAWebUsernameGatingUtils").mexUsyncUsernameQueryEnabled()) {
              var a = o("WAWebWidFactory").createUserWidOrThrow(e.toString()),
                i = yield o("WAWebMexUsersGetUsername").getMexUserUsername(a);
              ((n = a),
                i != null
                  ? (t = o("WAWebUsernameTypes").serializeMaybeUsername(i))
                  : (r = !0));
            } else {
              var l = yield p(e);
              l != null && ((t = l.username), (n = l.id), (r = l.shouldDelete));
            }
            if (n != null) {
              var s = !1,
                u = !1,
                c,
                d = o("WAWebUsernameTypes").asMaybeUsername(t);
              if (d != null) {
                var m = yield o("WAWebSetUsernameJob").setUsernamesJob([
                    { userId: n, username: d },
                  ]),
                  _ = m.get(n.toString());
                ((s = (_ == null ? void 0 : _.wasUpdated) === !0),
                  (u = (_ == null ? void 0 : _.wasPreviouslyKnown) === !0),
                  (c = o("WAWebUsernameTypes").serializeMaybeUsername(
                    _ == null ? void 0 : _.oldUsername,
                  )));
              } else if (r === !0) {
                var f = yield o("WAWebSetUsernameJob").setUsernamesJob([
                    { userId: n, deleteUsername: !0 },
                  ]),
                  g = f.get(n.toString());
                ((s = (g == null ? void 0 : g.wasUpdated) === !0),
                  (u = (g == null ? void 0 : g.wasPreviouslyKnown) === !0),
                  (c = o("WAWebUsernameTypes").serializeMaybeUsername(
                    g == null ? void 0 : g.oldUsername,
                  )));
              }
              return {
                username: t,
                wasUpdated: s,
                wasPreviouslyKnown: u,
                oldUsername: c != null ? c : void 0,
              };
            }
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
            var g = !1,
              h = o("WAWebUsernameTypes").asMaybeUsername(f);
            if (h != null) {
              var y = yield o("WAWebSetUsernameJob").setUsernamesJob([
                  { userId: p, username: h },
                ]),
                C = y.get(p.toString());
              g = (C == null ? void 0 : C.wasUpdated) === !0;
            } else {
              var b = yield o("WAWebSetUsernameJob").setUsernamesJob([
                  { userId: p, deleteUsername: !0 },
                ]),
                v = b.get(p.toString());
              g = (v == null ? void 0 : v.wasUpdated) === !0;
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
        y.apply(this, arguments)
      );
    }
    ((l.queryWidExists = u),
      (l.queryPhoneExists = c),
      (l.queryExist = d),
      (l.queryWidUsernameExists = f),
      (l.queryUsernameExists = h));
  },
  98,
);
