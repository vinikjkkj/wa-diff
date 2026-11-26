__d(
  "WAWebBusinessProfileCollection",
  [
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
    "WAWebUserUtils",
    "WAWebWid",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "catalog_exists",
      c = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.findImpl = function (t) {
            return this.$BusinessProfileCollectionImpl$p_1(t, {
              queryCatalog: !0,
            });
          }),
          (a._update = function (t, n) {
            return this.$BusinessProfileCollectionImpl$p_1(t, {
              queryCatalog: !1,
              getMerchantCompliance:
                n == null ? void 0 : n.getMerchantCompliance,
            });
          }),
          (a.$BusinessProfileCollectionImpl$p_1 = async function (n, r) {
            var t = r.getMerchantCompliance,
              a = r.queryCatalog,
              i = this.gadd(n);
            if (!i.id.isUserNotPSA() || i.id.isFbidBot())
              return Promise.resolve({ id: n });
            var l = o("WAWebBizBusinessProfileAction").queryBusinessProfile(
                [{ wid: i.id, tag: i.tag }],
                t,
              ),
              u = await l;
            if (!Array.isArray(u))
              return (
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Received invalid business profile response",
                    ])),
                ),
                null
              );
            if (u.length === 0)
              return (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[BusinessProfile] #findAndParse: not found ",
                      "",
                    ])),
                  String(n),
                ),
                { id: n }
              );
            var c = u[0],
              d = c.tag,
              m = c.wid,
              p = { id: m, tag: d, dataSource: "server" },
              _ = c.profile;
            if (_) {
              var f = o("WAWebContactCollection").ContactCollection.get(n);
              f &&
                !f.isContactSyncCompleted &&
                (f.set("isBusiness", !0),
                f.set("forcedBusinessUpdateFromServer", !0));
              var g = o("WAWebBusinessProfileUtils").parseBusinessProfile({
                  id: c.wid,
                  profile: _,
                  queryCatalog: a,
                }),
                h = i.dataSource === "placeholder" ? null : i.automatedType,
                y = g.automatedType;
              await o(
                "WAWebHandleBizBotAutomatedTypeAction",
              ).handleBizBotAutomatedTypeTransition(i.id, h, y);
              var C =
                  i.dataSource === "placeholder"
                    ? null
                    : i.welcomeMsgProtocolMode,
                b = g.welcomeMsgProtocolMode;
              return (
                await o(
                  "WAWebHandleBizBotWelcomeMsgProtocolModeAction",
                ).handleBizBotWelcomeMsgProtocolModeTransition(i.id, C, b),
                await o(
                  "WAWebApiBusinessProfile",
                ).createOrMergeBusinessProfileRecordLidAware({
                  id: p.id,
                  automatedType: g.automatedType,
                  welcomeMsgProtocolMode: g.welcomeMsgProtocolMode,
                  prompts: g.prompts,
                  commands: g.commands,
                  commandsDescription: g.commandsDescription,
                  pills: _.pills,
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
          (a.getMeBusinessProfile = function () {
            var e;
            for (var t of [
              o("WAWebUserUtils").getMeLidUserOrThrow(),
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
          n
        );
      })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    c.model = o("WAWebBusinessProfileModel").BusinessProfile;
    var d = new c();
    ((l.CATALOG_EXISTS = u), (l.BusinessProfileCollection = d));
  },
  98,
);
