__d(
  "WAWebBusinessProfileCollection",
  [
    "Promise",
    "WALogger",
    "WAWebApiBusinessProfile",
    "WAWebBizBusinessProfileAction",
    "WAWebBusinessProfileModel",
    "WAWebBusinessProfileUtils",
    "WAWebContactCollection",
    "WAWebHandleBizBotAutomatedTypeAction",
    "WAWebHandleBizBotWelcomeMsgProtocolModeAction",
    "WAWebLidMigrationUtils",
    "WAWebStaleBaseCollection",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = "catalog_exists",
      d = (function (t) {
        function a() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.findImpl = function (t) {
            return this.$BusinessProfileCollectionImpl$p_1(t, {
              queryCatalog: !0,
            });
          }),
          (i._update = function (t, n) {
            return this.$BusinessProfileCollectionImpl$p_1(t, {
              queryCatalog: !1,
              getMerchantCompliance:
                n == null ? void 0 : n.getMerchantCompliance,
            });
          }),
          (i.$BusinessProfileCollectionImpl$p_1 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, r) {
                var a = r.getMerchantCompliance,
                  i = r.queryCatalog,
                  l = this.gadd(t);
                if (!l.id.isUserNotPSA() || l.id.isFbidBot())
                  return (u || (u = n("Promise"))).resolve({ id: t });
                var c = o("WAWebBizBusinessProfileAction").queryBusinessProfile(
                    [{ wid: l.id, tag: l.tag }],
                    a,
                  ),
                  d = yield c;
                if (!Array.isArray(d))
                  return (
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "Received invalid business profile response",
                        ])),
                    ),
                    null
                  );
                if (d.length === 0)
                  return (
                    o("WALogger").LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[BusinessProfile] #findAndParse: not found ",
                          "",
                        ])),
                      String(t),
                    ),
                    { id: t }
                  );
                var m = d[0],
                  p = m.tag,
                  _ = m.wid,
                  f = { id: _, tag: p, dataSource: "server" },
                  g = m.profile;
                if (g) {
                  var h = o("WAWebContactCollection").ContactCollection.get(t);
                  h &&
                    !h.isContactSyncCompleted &&
                    (h.set("isBusiness", !0),
                    h.set("forcedBusinessUpdateFromServer", !0));
                  var y = o("WAWebBusinessProfileUtils").parseBusinessProfile({
                      id: m.wid,
                      profile: g,
                      queryCatalog: i,
                    }),
                    C = l.dataSource === "placeholder" ? null : l.automatedType,
                    b = y.automatedType;
                  yield o(
                    "WAWebHandleBizBotAutomatedTypeAction",
                  ).handleBizBotAutomatedTypeTransition(l.id, C, b);
                  var v =
                      l.dataSource === "placeholder"
                        ? null
                        : l.welcomeMsgProtocolMode,
                    S = y.welcomeMsgProtocolMode;
                  return (
                    yield o(
                      "WAWebHandleBizBotWelcomeMsgProtocolModeAction",
                    ).handleBizBotWelcomeMsgProtocolModeTransition(l.id, v, S),
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
            function r(e, n) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (i.fetchBizProfile = function (t) {
            var e = this.get(t);
            return (e && e.markStale(), this.find(t));
          }),
          (i.getValid = function (t) {
            var e = this.get(t);
            if (e != null && e.isValid()) return e;
          }),
          (i.getMeBusinessProfile = function () {
            var e;
            for (var t of [
              o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
              o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
            ])
              if (t != null) {
                var n = this.get(t);
                if (n != null) {
                  if (n.dataSource !== "placeholder") return n;
                  e = n;
                }
              }
            return e;
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
          a
        );
      })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    d.model = o("WAWebBusinessProfileModel").BusinessProfile;
    var m = new d();
    ((l.CATALOG_EXISTS = c), (l.BusinessProfileCollection = m));
  },
  98,
);
