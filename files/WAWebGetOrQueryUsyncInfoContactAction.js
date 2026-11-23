__d(
  "WAWebGetOrQueryUsyncInfoContactAction",
  [
    "WALogger",
    "WAPromiseCache",
    "WAWebBackendErrors",
    "WAWebBackendRuntime",
    "WAWebBizUpdateVerifiedInfoAction",
    "WAWebBizVerifiedLevelToString",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebContactQueryService",
    "WAWebContactSyncErrorCodes",
    "WAWebContactSyncLogger",
    "WAWebDBCreateLidPnMappings",
    "WAWebQueryExistsJob",
    "WAWebUsync",
    "WAWebUsyncUser",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(e) {
      var t = e.forceUsync,
        n = e.requestOrigin,
        a = e.wid,
        i = o("WAWebContactCollection").ContactCollection.get(a);
      if (
        t !== !0 &&
        i != null &&
        (i.name != null ||
          o("WAWebChatCollection").ChatCollection.get(a) != null)
      ) {
        var l,
          s,
          u = a.isRegularUserPn() ? !1 : void 0;
        return {
          wid: a,
          biz: i.isBusiness,
          bizInfo: i.isBusiness
            ? {
                verifiedName: {
                  level: r("WAWebBizVerifiedLevelToString")(i.verifiedLevel),
                  serial: null,
                  name: i.verifiedName,
                  isApi: !!i.isEnterprise,
                  isSmb: !!i.isSmb,
                  privacyMode: i.privacyMode,
                },
              }
            : null,
          disappearingMode: {
            duration: (l = i.disappearingModeDuration) != null ? l : 0,
            settingTimestamp:
              (s = i.disappearingModeSettingTimestamp) != null ? s : 0,
          },
          isUsernameSearch: u,
        };
      }
      var c = await o("WAWebQueryExistsJob").queryWidExists(a, n);
      if (c) {
        var d = c.biz,
          m = c.bizInfo;
        return (
          d &&
            m != null &&
            (await o("WAWebBizUpdateVerifiedInfoAction").updateVerifiedInfo(
              a,
              m.verifiedName,
            )),
          c
        );
      }
      return Promise.reject(r("err")("Invalid number"));
    }
    function c() {
      var e = new (r("WAPromiseCache"))(
        o("WAWebBackendRuntime").isWebDiBackendEnabled()
          ? o("WAWebBackendRuntime").runtime(
              o("WAWebContactQueryService").ContactQueryService,
            ).queryPhoneExists
          : o("WAWebQueryExistsJob").queryPhoneExists,
        {
          maxCached: 100,
          maxAge: 36e4,
          shouldCache: function (t) {
            return !!t;
          },
        },
      );
      return e;
    }
    async function d(t, n) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[usync] querying for biz info",
          ])),
      );
      var r = (n == null ? void 0 : n.withDisappearingMode) === !0,
        a = m(t, r),
        i = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
          syncType: o("WAWebContactSyncLogger").getSyncTypeString(
            "interactive",
            "query",
          ),
          requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
            .BUSINESS_CONTACT_CHAT,
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
          o("WAWebContactSyncErrorCodes").QUERY_BUSINESS,
        ),
        u = l.error.all;
      if (
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[usync] biz info response",
            ])),
        ),
        u)
      )
        throw (
          o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
            i,
            u.errorCode,
            l,
            o("WAWebContactSyncErrorCodes").QUERY_BUSINESS,
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
      var d = c[0],
        _ = d.business,
        f = d.disappearing_mode,
        g = d.id;
      (await p(t, r ? f : null),
        _ != null &&
          (await o("WAWebBizUpdateVerifiedInfoAction").updateVerifiedInfo(
            t,
            _.verifiedName,
          ),
          g != null &&
            g.isLid() &&
            _.pn != null &&
            (await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
              mappings: [{ pn: _.pn, lid: g }],
              write: "now",
              learningSource: "usync",
            }))));
      var h = t.isRegularUserPn() ? !1 : void 0,
        y = { wid: g, biz: _ != null, bizInfo: _, isUsernameSearch: h };
      return (
        o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(
          i,
          l,
          o("WAWebContactSyncLogger").createUpdateCounterWith({
            businessChange: _ != null ? 1 : 0,
          }),
        ),
        y
      );
    }
    function m(e, t) {
      var n = new (o("WAWebUsync").USyncQuery)();
      return (
        n.withUser(new (o("WAWebUsyncUser").USyncUser)().withId(e)),
        n.withBusinessProtocol(),
        t && n.withDisappearingModeProtocol(),
        n
      );
    }
    async function p(e, t) {
      var n = o("WAWebQueryExistsJob").toDisappearingMode(t);
      n != null && (await o("WAWebQueryExistsJob").storeDisappearingMode(e, n));
    }
    ((l.getOrQueryUsyncInfo = u),
      (l.usyncContactCached = c),
      (l.queryUsyncBusiness = d));
  },
  98,
);
