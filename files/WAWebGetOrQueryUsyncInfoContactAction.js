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
    "WAWebDBCreateLidPnMappings",
    "WAWebQueryExistsJob",
    "WAWebUpdateDisappearingModeForContact",
    "WAWebUsync",
    "WAWebUsyncUser",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.forceUsync,
            i = t.requestOrigin,
            l = t.wid,
            s = o("WAWebContactCollection").ContactCollection.get(l);
          if (
            a !== !0 &&
            s != null &&
            (s.name != null ||
              o("WAWebChatCollection").ChatCollection.get(l) != null)
          ) {
            var u,
              d,
              m = l.isRegularUserPn() ? !1 : void 0;
            return {
              wid: l,
              biz: s.isBusiness,
              bizInfo: s.isBusiness
                ? {
                    verifiedName: {
                      level: r("WAWebBizVerifiedLevelToString")(
                        s.verifiedLevel,
                      ),
                      serial: null,
                      name: s.verifiedName,
                      isApi: !!s.isEnterprise,
                      isSmb: !!s.isSmb,
                      privacyMode: s.privacyMode,
                    },
                  }
                : null,
              disappearingMode: {
                duration: (u = s.disappearingModeDuration) != null ? u : 0,
                settingTimestamp:
                  (d = s.disappearingModeSettingTimestamp) != null ? d : 0,
              },
              isUsernameSearch: m,
            };
          }
          var p = yield o("WAWebQueryExistsJob").queryWidExists(l, i);
          if (p) {
            var _ = p.biz,
              f = p.bizInfo,
              g = p.disappearingMode;
            if (
              (_ &&
                f != null &&
                (yield o("WAWebBizUpdateVerifiedInfoAction").updateVerifiedInfo(
                  l,
                  f.verifiedName,
                )),
              g != null)
            )
              try {
                yield o(
                  "WAWebUpdateDisappearingModeForContact",
                ).updateDisappearingModeForContact({
                  contactId: l,
                  newDuration: g.duration,
                  newSettingTimestamp: g.settingTimestamp,
                  newEphemeralityDisabled: g.isEphemeralityDisabled === !0,
                });
              } catch (t) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "getOrQueryUsyncInfo: updateDisappearingModeForContact failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs("usync-info-disappearing-mode-update-failed");
              }
            return p;
          }
          return (c || (c = n("Promise"))).reject(r("err")("Invalid number"));
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
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
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[usync] querying for biz info",
              ])),
          );
          var t = new (o("WAWebUsyncUser").USyncUser)(),
            n = new (o("WAWebUsync").USyncQuery)();
          (e.isLid() ? t.withId(e) : t.withPhone(e.toString()),
            n.withUser(t),
            n.withBusinessProtocol());
          var r = o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.createEventContext({
              syncType: o("WAWebContactSyncLogger").getSyncTypeString(
                "interactive",
                "query",
              ),
              requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
                .BUSINESS_CONTACT_CHAT,
              requestedCount: 1,
              protocols: n.protocols,
            }),
            a = yield o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.executeWithLogging(
              r,
              function () {
                return n.execute();
              },
              o("WAWebContactSyncErrorCodes").QUERY_BUSINESS,
            ),
            i = a.error.all;
          if (
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[usync] biz info response",
                ])),
            ),
            i)
          )
            throw (
              o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                r,
                i.errorCode,
                a,
                o("WAWebContactSyncErrorCodes").QUERY_BUSINESS,
              ),
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                i.errorCode,
                i.errorText,
              )
            );
          var l = a.list;
          if (l.length !== 1)
            return (
              o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(r, a),
              null
            );
          var c = l[0],
            d = c.business,
            m = c.id;
          d != null &&
            (yield o("WAWebBizUpdateVerifiedInfoAction").updateVerifiedInfo(
              e,
              d.verifiedName,
            ),
            m != null &&
              m.isLid() &&
              d.pn != null &&
              (yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                mappings: [{ pn: d.pn, lid: m }],
                flushImmediately: !0,
                learningSource: "usync",
              })));
          var p = e.isRegularUserPn() ? !1 : void 0,
            _ = { wid: m, biz: d != null, bizInfo: d, isUsernameSearch: p };
          return (
            o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(
              r,
              a,
              o("WAWebContactSyncLogger").createUpdateCounterWith({
                businessChange: d != null ? 1 : 0,
              }),
            ),
            _
          );
        })),
        f.apply(this, arguments)
      );
    }
    ((l.getOrQueryUsyncInfo = d),
      (l.usyncContactCached = p),
      (l.queryUsyncBusiness = _));
  },
  98,
);
