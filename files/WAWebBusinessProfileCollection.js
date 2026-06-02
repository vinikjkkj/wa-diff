__d(
  "WAWebBusinessProfileCollection",
  [
    "WALogger",
    "WAWebABPropsLocalStorage",
    "WAWebApiBusinessProfile",
    "WAWebBizBusinessProfileAction",
    "WAWebBizProfileGatingUtils",
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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = "catalog_exists",
      p = (function (t) {
        function n() {
          var n;
          ((n = t.call(this) || this), (n._inflightDbQueryMap = new Map()));
          var a = o("WAWebABPropsLocalStorage").isABPropsAfterFirstSync()
              ? o(
                  "WAWebDirectConnectionGatingUtils",
                ).directConnectionBusinessNumbersFromAbprop()
              : null,
            i = o("WAWebABPropsLocalStorage").isABPropsAfterFirstSync()
              ? o("WAWebBizProfileGatingUtils").webBizProfileOptions()
              : o("WAWebServerPropConstants")
                  .UNINITIALIZED_VALUE_WEB_BIZ_PROFILE_OPTIONS;
          return (
            n.listenTo(
              o("WAWebCmd").Cmd,
              "on_ab_props_update_from_bridge",
              function () {
                var t = o("WAWebBizProfileGatingUtils").webBizProfileOptions();
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
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.findImpl = function (t) {
            return this._findAndParse(t, { queryCatalog: !0 });
          }),
          (a._update = function (t, n) {
            return this._findAndParse(t, {
              queryCatalog: !1,
              getMerchantCompliance:
                n == null ? void 0 : n.getMerchantCompliance,
            });
          }),
          (a._findAndParse = async function (t, n) {
            var e = n.getMerchantCompliance,
              r = n.queryCatalog,
              a = this.gadd(t);
            if (!a.id.isUserNotPSA() || a.id.isFbidBot())
              return Promise.resolve({ id: t });
            var i = o("WAWebBizBusinessProfileAction").queryBusinessProfile(
                [{ wid: a.id, tag: a.tag }],
                e,
              ),
              l = await i;
            if (!Array.isArray(l))
              return (
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Received invalid business profile response",
                    ])),
                ),
                null
              );
            if (l.length === 0)
              return (
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[BusinessProfile] _findAndParse: not found ",
                      "",
                    ])),
                  String(t),
                ),
                { id: t }
              );
            var s = l[0],
              d = s.tag,
              m = s.wid,
              p = { id: m, tag: d, dataSource: "server" },
              _ = s.profile;
            if (_) {
              var f = o("WAWebContactCollection").ContactCollection.get(t);
              f &&
                !f.isContactSyncCompleted &&
                (f.set("isBusiness", !0),
                f.set("forcedBusinessUpdateFromServer", !0));
              var g = o("WAWebBusinessProfileUtils").parseBusinessProfile({
                  id: s.wid,
                  profile: _,
                  queryCatalog: r,
                }),
                h = a.dataSource === "placeholder" ? null : a.automatedType,
                y = g.automatedType;
              await o(
                "WAWebHandleBizBotAutomatedTypeAction",
              ).handleBizBotAutomatedTypeTransition(a.id, h, y);
              var C =
                  a.dataSource === "placeholder"
                    ? null
                    : a.welcomeMsgProtocolMode,
                b = g.welcomeMsgProtocolMode;
              return (
                await o(
                  "WAWebHandleBizBotWelcomeMsgProtocolModeAction",
                ).handleBizBotWelcomeMsgProtocolModeTransition(a.id, C, b),
                await o(
                  "WAWebApiBusinessProfile",
                ).createOrMergeBusinessProfileRecordLidAware({
                  id: p.id,
                  automatedType: g.automatedType,
                  welcomeMsgProtocolMode: g.welcomeMsgProtocolMode,
                  prompts: g.prompts,
                  commands: g.commands,
                  commandsDescription: g.commandsDescription,
                }),
                babelHelpers.extends({}, g, p)
              );
            }
            return p;
          }),
          (a.fetchBizProfile = function (t) {
            var e = this.get(t);
            return (e && e.markStale(), this.find(t));
          }),
          (a.getValid = function (t) {
            var e = this.get(t);
            if (e != null && e.isValid()) return e;
          }),
          (a.markProfileAsStale = function (t) {
            var e;
            (e = this.get(t)) == null || e.markStale();
          }),
          (a.hasBusinessProfileInCache = function (t) {
            return !!this.get(t);
          }),
          (a.convertBusinessProfileIdForLidMigration = function (t) {
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
          (a._markBizProfilesAsStale = async function (t) {
            var e = this,
              n = t
                .map(function (e) {
                  return o("WAWebWidFactory").createUserWidOrThrow(e);
                })
                .filter(function (t) {
                  return e.hasBusinessProfileInCache(t);
                });
            (await Promise.all(
              n.map(function (t) {
                e.markProfileAsStale(t);
              }),
            ),
              n.length > 0 &&
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[direct-connection] forcefully marked ",
                      " biz profiles as stale",
                    ])),
                  n.length,
                ));
          }),
          n
        );
      })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    p.model = o("WAWebBusinessProfileModel").BusinessProfile;
    var _ = new p();
    ((l.CATALOG_EXISTS = m), (l.BusinessProfileCollection = _));
  },
  98,
);
