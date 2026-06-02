__d(
  "WAWebGetOrQueryUsyncInfoContactAction",
  [
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
          m = c.bizInfo,
          p = c.disappearingMode;
        return (
          d &&
            m != null &&
            (await o("WAWebBizUpdateVerifiedInfoAction").updateVerifiedInfo(
              a,
              m.verifiedName,
            )),
          p &&
            i != null &&
            (await o(
              "WAWebUpdateDisappearingModeForContact",
            ).updateDisappearingModeForContact({
              contactId: a,
              newDuration: p.duration,
              newSettingTimestamp: p.settingTimestamp,
              newEphemeralityDisabled: p.isEphemeralityDisabled === !0,
            })),
          c
        );
      }
      return Promise.reject(r("err")("Invalid number"));
    }
    function c() {
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
    async function d(t) {
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
      var a = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
          syncType: o("WAWebContactSyncLogger").getSyncTypeString(
            "interactive",
            "query",
          ),
          requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
            .BUSINESS_CONTACT_CHAT,
          requestedCount: 1,
          protocols: r.protocols,
        }),
        i = await o(
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
        (await o("WAWebBizUpdateVerifiedInfoAction").updateVerifiedInfo(
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
    }
    ((l.getOrQueryUsyncInfo = u),
      (l.usyncContactCached = c),
      (l.queryUsyncBusiness = d));
  },
  98,
);
