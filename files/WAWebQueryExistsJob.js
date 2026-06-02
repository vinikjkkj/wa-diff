__d(
  "WAWebQueryExistsJob",
  [
    "WALogger",
    "WAPhoneFindCC",
    "WAWebApiContact",
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
    async function d(e, t) {
      var n = o("WAWebUsernameGatingUtils").usernameContactUsyncLidBased(),
        a = new (o("WAWebUsyncUser").USyncUser)(),
        i = new (o("WAWebUsync").USyncQuery)();
      if (
        (e.type === "phone"
          ? (i.withContactProtocol(
              n
                ? o("WAWebUsync").USYNC_ADDRESSING_MODE.LID
                : o("WAWebUsync").USYNC_ADDRESSING_MODE.PN,
            ),
            a.withPhone(e.phone))
          : a.withId(e.wid),
        !n && (i.withLidProtocol(), e.type === "phone"))
      ) {
        var l = o("WAPhoneFindCC").extractDigits(e.phone) + "@c.us";
        if (r("WAWebWid").isWid(l)) {
          var s = o("WAWebApiContact").getCurrentLid(
            o("WAWebWidFactory").createUserWidOrThrow(l),
          );
          s && a.withLid(s);
        }
      }
      (i.withUser(a),
        i.withBusinessProtocol(),
        i.withDisappearingModeProtocol(),
        i.withUsernameProtocol());
      var u = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
          syncType: o("WAWebContactSyncLogger").getSyncTypeString(
            "interactive",
            "query",
          ),
          requestOrigin:
            t != null
              ? t
              : o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN,
          requestedCount: 1,
          protocols: i.protocols,
        }),
        c = await o(
          "WAWebContactSyncLogger",
        ).contactSyncLogger.executeWithLogging(
          u,
          function () {
            return i.execute();
          },
          o("WAWebContactSyncErrorCodes").QUERY_EXIST,
        ),
        d = c.error.all || c.error.contact;
      if (d)
        throw (
          o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
            u,
            d.errorCode,
            c,
            o("WAWebContactSyncErrorCodes").QUERY_EXIST,
          ),
          new (o("WAWebBackendErrors").ServerStatusCodeError)(
            d.errorCode,
            d.errorText,
          )
        );
      var m = c.list;
      if (m.length !== 1)
        return (
          o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(u, c),
          null
        );
      var p = m[0],
        _ = p.business,
        f = p.contact,
        g = p.id,
        h = p.lid,
        y = p.pn,
        C = p.username,
        b = m[0].disappearingMode;
      if (e.type === "phone" && (f == null ? void 0 : f.type) !== "in")
        return (
          o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(u, c),
          null
        );
      var v = {
        wid: g,
        biz: _ != null,
        bizInfo: _,
        isUsernameSearch: e.type === "phone" ? !1 : void 0,
      };
      (o("WAWebUsernameGatingUtils").usernameSearchEnabled() &&
        C != null &&
        (v.username = C),
        b &&
          ((v.disappearingMode = {
            duration: b.duration,
            settingTimestamp: b.t,
          }),
          b.ephemeralityDisabled &&
            (v.disappearingMode.isEphemeralityDisabled = !0)));
      var S = null,
        R = null;
      return (
        g.isLid()
          ? ((S = y), (R = g))
          : ((S = g),
            h != null &&
              (R = o("WAWebWidFactory").createUserWidOrThrow(h, "lid"))),
        S != null &&
          R != null &&
          (await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
            mappings: [{ pn: S, lid: R }],
            flushImmediately: !0,
            learningSource: "usync",
          }),
          !g.isLid() &&
            o(
              "WAWebUsernameWorkerCompatibleGatingUtils",
            ).onlyShowLidContacts() &&
            (v.wid = R)),
        await o("WAWebHandleUsernameSync").handleUsernameSync(c),
        o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(u, c),
        v
      );
    }
    async function m(t, n) {
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
      var i = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
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
        l = await o(
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
            shouldDelete: !Object.prototype.hasOwnProperty.call(d, "username"),
          }
        );
      o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l);
    }
    async function p(e) {
      if (e.isLid()) {
        var t, n, r;
        if (o("WAWebUsernameGatingUtils").mexUsyncUsernameQueryEnabled()) {
          var a = o("WAWebWidFactory").createUserWidOrThrow(e.toString()),
            i = await o("WAWebMexUsersGetUsername").getMexUserUsername(a);
          ((n = a), i != null ? (t = i) : (r = !0));
        } else {
          var l = await m(e);
          l != null && ((t = l.username), (n = l.id), (r = l.shouldDelete));
        }
        if (n != null) {
          var s = !1,
            u = !1,
            c;
          if (t != null) {
            var d = await o("WAWebSetUsernameJob").setUsernamesJob([
                { userId: n, username: t },
              ]),
              p = d.get(n.toString());
            ((s = (p == null ? void 0 : p.wasUpdated) === !0),
              (u = (p == null ? void 0 : p.wasPreviouslyKnown) === !0),
              (c = p == null ? void 0 : p.oldUsername));
          } else if (r === !0) {
            var _ = await o("WAWebSetUsernameJob").setUsernamesJob([
                { userId: n, deleteUsername: !0 },
              ]),
              f = _.get(n.toString());
            ((s = (f == null ? void 0 : f.wasUpdated) === !0),
              (u = (f == null ? void 0 : f.wasPreviouslyKnown) === !0),
              (c = f == null ? void 0 : f.oldUsername));
          }
          return {
            username: t,
            wasUpdated: s,
            wasPreviouslyKnown: u,
            oldUsername: c,
          };
        }
      }
    }
    async function _(e, t, n) {
      if (
        e.length < o("WAWebUsernameTypes").USERNAME_MIN_LENGTH ||
        e.length > o("WAWebUsernameTypes").USERNAME_MAX_LENGTH
      )
        return null;
      var r = o("WAWebUsernameGatingUtils").usernameContactUsyncLidBased(),
        a = new (o("WAWebUsyncUser").USyncUser)(),
        i = new (o("WAWebUsync").USyncQuery)();
      (i.withUser(a),
        i.withContactProtocol(
          r
            ? o("WAWebUsync").USYNC_ADDRESSING_MODE.LID
            : o("WAWebUsync").USYNC_ADDRESSING_MODE.PN,
        ),
        i.withBusinessProtocol(),
        a.withUsername(e),
        t != null && a.withUsernameKey(t));
      var l = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
          syncType: o("WAWebContactSyncLogger").getSyncTypeString(
            "interactive",
            "query",
          ),
          requestOrigin:
            n != null
              ? n
              : o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN,
          requestedCount: 1,
          protocols: i.protocols,
        }),
        s = await o(
          "WAWebContactSyncLogger",
        ).contactSyncLogger.executeWithLogging(
          l,
          function () {
            return i.execute();
          },
          o("WAWebContactSyncErrorCodes").QUERY_USERNAME_EXIST,
        ),
        u = s.error.all || s.error.contact;
      if (u)
        throw (
          o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
            l,
            u.errorCode,
            s,
            o("WAWebContactSyncErrorCodes").QUERY_USERNAME_EXIST,
          ),
          new (o("WAWebBackendErrors").ServerStatusCodeError)(
            u.errorCode,
            u.errorText,
          )
        );
      var c = s.list;
      if (c.length !== 1)
        return (
          o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(l, s),
          null
        );
      var d = c[0],
        m = d.business,
        p = d.contact,
        _ = d.id,
        f = p.type,
        g = p.username;
      if (f === "out")
        return (
          o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(l, s),
          null
        );
      if (_ != null) {
        var h = !1;
        if (g != null) {
          var y = await o("WAWebSetUsernameJob").setUsernamesJob([
              { userId: _, username: g },
            ]),
            C = y.get(_.toString());
          h = (C == null ? void 0 : C.wasUpdated) === !0;
        } else {
          var b = await o("WAWebSetUsernameJob").setUsernamesJob([
              { userId: _, deleteUsername: !0 },
            ]),
            v = b.get(_.toString());
          h = (v == null ? void 0 : v.wasUpdated) === !0;
        }
        return (
          o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(l, s),
          {
            wid: _,
            biz: m != null,
            bizInfo: m,
            username: g,
            wasUpdated: h,
            isUsernameSearch: !0,
          }
        );
      }
      return (
        o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(l, s),
        { keyRequired: !0, username: g, isUsernameSearch: !0 }
      );
    }
    ((l.queryWidExists = u),
      (l.queryPhoneExists = c),
      (l.queryExist = d),
      (l.queryWidUsernameExists = p),
      (l.queryUsernameExists = _));
  },
  98,
);
