__d(
  "WAWebGetOrQueryUsyncInfoContactAction",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.forceUsync,
            a = e.requestOrigin,
            i = e.wid,
            l = o("WAWebContactCollection").ContactCollection.get(i);
          if (
            t !== !0 &&
            l != null &&
            (l.name != null ||
              o("WAWebChatCollection").ChatCollection.get(i) != null)
          ) {
            var s,
              c,
              d = i.isRegularUserPn() ? !1 : void 0;
            return {
              wid: i,
              biz: l.isBusiness,
              bizInfo: l.isBusiness
                ? {
                    verifiedName: {
                      level: r("WAWebBizVerifiedLevelToString")(
                        l.verifiedLevel,
                      ),
                      serial: null,
                      name: l.verifiedName,
                      isApi: !!l.isEnterprise,
                      isSmb: !!l.isSmb,
                      privacyMode: l.privacyMode,
                    },
                  }
                : null,
              disappearingMode: {
                duration: (s = l.disappearingModeDuration) != null ? s : 0,
                settingTimestamp:
                  (c = l.disappearingModeSettingTimestamp) != null ? c : 0,
              },
              isUsernameSearch: d,
            };
          }
          var m = yield o("WAWebQueryExistsJob").queryWidExists(i, a);
          if (m) {
            var p = m.biz,
              _ = m.bizInfo;
            return (
              p &&
                _ != null &&
                (yield o("WAWebBizUpdateVerifiedInfoAction").updateVerifiedInfo(
                  i,
                  _.verifiedName,
                )),
              m
            );
          }
          return (u || (u = n("Promise"))).reject(r("err")("Invalid number"));
        })),
        d.apply(this, arguments)
      );
    }
    function m() {
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
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[usync] querying for biz info",
              ])),
          );
          var r = (n == null ? void 0 : n.withDisappearingMode) === !0,
            a = f(t, r),
            i = o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.createEventContext({
              syncType: o("WAWebContactSyncLogger").getSyncTypeString(
                "interactive",
                "query",
              ),
              requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
                .BUSINESS_CONTACT_CHAT,
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
            m = d.business,
            p = d.disappearing_mode,
            _ = d.id;
          (yield g(t, r ? p : null),
            m != null &&
              (yield o("WAWebBizUpdateVerifiedInfoAction").updateVerifiedInfo(
                t,
                m.verifiedName,
              ),
              _ != null &&
                _.isLid() &&
                m.pn != null &&
                (yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                  mappings: [{ pn: m.pn, lid: _ }],
                  flushImmediately: !0,
                  learningSource: "usync",
                }))));
          var h = t.isRegularUserPn() ? !1 : void 0,
            y = { wid: _, biz: m != null, bizInfo: m, isUsernameSearch: h };
          return (
            o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(
              i,
              l,
              o("WAWebContactSyncLogger").createUpdateCounterWith({
                businessChange: m != null ? 1 : 0,
              }),
            ),
            y
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      var n = new (o("WAWebUsync").USyncQuery)();
      return (
        n.withUser(new (o("WAWebUsyncUser").USyncUser)().withId(e)),
        n.withBusinessProtocol(),
        t && n.withDisappearingModeProtocol(),
        n
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebQueryExistsJob").toDisappearingMode(t);
          n != null &&
            (yield o("WAWebQueryExistsJob").storeDisappearingMode(e, n));
        })),
        h.apply(this, arguments)
      );
    }
    ((l.getOrQueryUsyncInfo = c),
      (l.usyncContactCached = m),
      (l.queryUsyncBusiness = p));
  },
  98,
);
