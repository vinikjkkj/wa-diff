__d(
  "WAWebBusinessProfileCollection",
  [
    "Promise",
    "WALogger",
    "WAWebABPropsLocalStorage",
    "WAWebApiBusinessProfile",
    "WAWebBizBusinessProfileAction",
    "WAWebBizGatingUtils",
    "WAWebBusinessDirectUtils",
    "WAWebBusinessProfileModel",
    "WAWebBusinessProfileUtils",
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebDirectConnectionGatingUtils",
    "WAWebHandleBizBotAutomatedTypeAction",
    "WAWebHandleBizBotWelcomeMsgProtocolModeAction",
    "WAWebLidMigrationUtils",
    "WAWebServerPropConstants",
    "WAWebStaleBaseCollection",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = "catalog_exists",
      _ = (function (t) {
        function a() {
          var n;
          ((n = t.call(this) || this), (n._inflightDbQueryMap = new Map()));
          var a = o("WAWebABPropsLocalStorage").isABPropsAfterFirstSync()
              ? o(
                  "WAWebDirectConnectionGatingUtils",
                ).directConnectionBusinessNumbersFromAbprop()
              : null,
            i = o("WAWebABPropsLocalStorage").isABPropsAfterFirstSync()
              ? o("WAWebBizGatingUtils").webBizProfileOptions()
              : o("WAWebServerPropConstants")
                  .UNINITIALIZED_VALUE_WEB_BIZ_PROFILE_OPTIONS;
          return (
            n.listenTo(
              o("WAWebCmd").Cmd,
              "on_ab_props_update_from_bridge",
              function () {
                var t = o("WAWebBizGatingUtils").webBizProfileOptions();
                (o("WAWebBusinessDirectUtils").isDirectConnectionFlagChanged(
                  i,
                  t,
                ) &&
                  (o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[direct-connection] bit changed, marking profiles stale",
                      ])),
                  ),
                  n._markBizProfilesAsStale(
                    o(
                      "WAWebDirectConnectionGatingUtils",
                    ).directConnectionBusinessNumbersFromAbprop(),
                  )),
                  (i = t));
                try {
                  var l = o(
                    "WAWebDirectConnectionGatingUtils",
                  ).directConnectionBusinessNumbersFromAbprop();
                  (o(
                    "WAWebBusinessDirectUtils",
                  ).isDirectConnectionNumbersAbPropChanged(a, l) &&
                    n._markBizProfilesAsStale(
                      Array.from(new Set((a != null ? a : []).concat(l))),
                    ),
                    (a = l));
                } catch (e) {
                  var u = r("getErrorSafe")(e);
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[direct-connection] biz profile update failed",
                        ])),
                    )
                    .verbose()
                    .sendLogs(
                      "direct-connection-biz-number-abprop-sync-fail" +
                        String(u),
                    );
                }
              },
            ),
            n
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.findImpl = function (t) {
            return this._findAndParse(t, { queryCatalog: !0 });
          }),
          (i._update = function (t, n) {
            return this._findAndParse(t, {
              queryCatalog: !1,
              getMerchantCompliance:
                n == null ? void 0 : n.getMerchantCompliance,
            });
          }),
          (i._findAndParse = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var r = t.getMerchantCompliance,
                  a = t.queryCatalog,
                  i = this.gadd(e);
                if (!i.id.isUserNotPSA() || i.id.isFbidBot())
                  return (m || (m = n("Promise"))).resolve({ id: e });
                var l = o("WAWebBizBusinessProfileAction").queryBusinessProfile(
                    [{ wid: i.id, tag: i.tag }],
                    r,
                  ),
                  s = yield l;
                if (!Array.isArray(s))
                  return (
                    o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "Received invalid business profile response",
                        ])),
                    ),
                    null
                  );
                if (s.length === 0)
                  return (
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[BusinessProfile] _findAndParse: not found ",
                          "",
                        ])),
                      String(e),
                    ),
                    { id: e }
                  );
                var d = s[0],
                  p = d.tag,
                  _ = d.wid,
                  f = { id: _, tag: p, dataSource: "server" },
                  g = d.profile;
                if (g) {
                  var h = o("WAWebContactCollection").ContactCollection.get(e);
                  h &&
                    !h.isContactSyncCompleted &&
                    (h.set("isBusiness", !0),
                    h.set("forcedBusinessUpdateFromServer", !0));
                  var y = o("WAWebBusinessProfileUtils").parseBusinessProfile({
                      id: d.wid,
                      profile: g,
                      queryCatalog: a,
                    }),
                    C = i.dataSource === "placeholder" ? null : i.automatedType,
                    b = y.automatedType;
                  yield o(
                    "WAWebHandleBizBotAutomatedTypeAction",
                  ).handleBizBotAutomatedTypeTransition(i.id, C, b);
                  var v =
                      i.dataSource === "placeholder"
                        ? null
                        : i.welcomeMsgProtocolMode,
                    S = y.welcomeMsgProtocolMode;
                  return (
                    yield o(
                      "WAWebHandleBizBotWelcomeMsgProtocolModeAction",
                    ).handleBizBotWelcomeMsgProtocolModeTransition(i.id, v, S),
                    yield o(
                      "WAWebApiBusinessProfile",
                    ).createOrMergeBusinessProfileRecordLidAware({
                      id: f.id,
                      automatedType: y.automatedType,
                      welcomeMsgProtocolMode: y.welcomeMsgProtocolMode,
                      prompts: y.prompts,
                      commands: y.commands,
                      commandsDescription: y.commandsDescription,
                    }),
                    babelHelpers.extends({}, y, f)
                  );
                }
                return f;
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.fetchBizProfile = function (t) {
            var e = this.get(t);
            return (e && e.markStale(), this.find(t));
          }),
          (i.getValid = function (t) {
            var e = this.get(t);
            if (e != null && e.isValid()) return e;
          }),
          (i.markProfileAsStale = function (t) {
            var e;
            (e = this.get(t)) == null || e.markStale();
          }),
          (i.hasBusinessProfileInCache = function (t) {
            return !!this.get(t);
          }),
          (i.convertBusinessProfileIdForLidMigration = function (t) {
            var e =
              t instanceof r("WAWebWid")
                ? t
                : o("WAWebWidFactory").createWid(t.toString());
            if (e.isLid()) {
              var n = o("WAWebLidMigrationUtils").toPn(e);
              if (n != null) return n;
            }
            return e;
          }),
          (i._markBizProfilesAsStale = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  r = e
                    .map(function (e) {
                      return o("WAWebWidFactory").createUserWidOrThrow(e);
                    })
                    .filter(function (e) {
                      return t.hasBusinessProfileInCache(e);
                    });
                (yield (m || (m = n("Promise"))).all(
                  r.map(function (e) {
                    t.markProfileAsStale(e);
                  }),
                ),
                  r.length > 0 &&
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[direct-connection] forcefully marked ",
                          " biz profiles as stale",
                        ])),
                      r.length,
                    ));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          a
        );
      })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    _.model = o("WAWebBusinessProfileModel").BusinessProfile;
    var f = new _();
    ((l.CATALOG_EXISTS = p), (l.BusinessProfileCollection = f));
  },
  98,
);
