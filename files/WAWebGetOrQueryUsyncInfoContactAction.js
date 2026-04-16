__d(
  "WAWebGetOrQueryUsyncInfoContactAction",
  [
    "Promise",
    "WALogger",
    "WAPromiseCache",
    "WAWebBackendErrors",
    "WAWebBizUpdateVerifiedInfoAction",
    "WAWebBizVerifiedLevelToString",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebContactSyncErrorCodes",
    "WAWebContactSyncLogger",
    "WAWebQueryExistsJob",
    "WAWebUpdateDisappearingModeForContact",
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
          var t = e.wid,
            a = e.forceUsync,
            i = e.requestOrigin,
            l = o("WAWebContactCollection").ContactCollection.get(t);
          if (
            a !== !0 &&
            l != null &&
            (l.name != null ||
              o("WAWebChatCollection").ChatCollection.get(t) != null)
          ) {
            var s,
              c,
              d = t.isRegularUserPn() ? !1 : void 0;
            return {
              wid: t,
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
          var m = yield o("WAWebQueryExistsJob").queryWidExists(t, i);
          if (m) {
            var p = m.biz,
              _ = m.bizInfo,
              f = m.disappearingMode;
            return (
              p &&
                _ != null &&
                (yield o("WAWebBizUpdateVerifiedInfoAction").updateVerifiedInfo(
                  t,
                  _.verifiedName,
                )),
              f &&
                l != null &&
                (yield o(
                  "WAWebUpdateDisappearingModeForContact",
                ).updateDisappearingModeForContact({
                  contactId: t,
                  newDuration: f.duration,
                  newSettingTimestamp: f.settingTimestamp,
                  newEphemeralityDisabled: f.isEphemeralityDisabled === !0,
                })),
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
        o("WAWebQueryExistsJob").queryPhoneExists,
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
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[usync] querying for biz info",
              ])),
          );
          var n = new (o("WAWebUsyncUser").USyncUser)(),
            r = new (o("WAWebUsync").USyncQuery)();
          (t.isLid() ? n.withId(t) : n.withPhone(t.toString()),
            r.withUser(n),
            r.withBusinessProtocol());
          var a = o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.createEventContext({
              syncType: o("WAWebContactSyncLogger").getSyncTypeString(
                "interactive",
                "query",
              ),
              requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
                .BUSINESS_CONTACT_CHAT,
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
              o("WAWebContactSyncErrorCodes").QUERY_BUSINESS,
            ),
            l = i.error.all;
          if (
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[usync] biz info response",
                ])),
            ),
            l)
          )
            throw (
              o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                a,
                l.errorCode,
                i,
                o("WAWebContactSyncErrorCodes").QUERY_BUSINESS,
              ),
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                l.errorCode,
                l.errorText,
              )
            );
          var u = i.list;
          if (u.length !== 1)
            return (
              o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(a, i),
              null
            );
          var c = u[0],
            d = c.business,
            m = c.id;
          d != null &&
            (yield o("WAWebBizUpdateVerifiedInfoAction").updateVerifiedInfo(
              t,
              d.verifiedName,
            ));
          var p = t.isRegularUserPn() ? !1 : void 0,
            _ = { wid: m, biz: d != null, bizInfo: d, isUsernameSearch: p };
          return (
            o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(
              a,
              i,
              o("WAWebContactSyncLogger").createUpdateCounterWith({
                businessChange: d != null ? 1 : 0,
              }),
            ),
            _
          );
        })),
        _.apply(this, arguments)
      );
    }
    ((l.getOrQueryUsyncInfo = c),
      (l.usyncContactCached = m),
      (l.queryUsyncBusiness = p));
  },
  98,
);
