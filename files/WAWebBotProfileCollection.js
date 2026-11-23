__d(
  "WAWebBotProfileCollection",
  [
    "WALogger",
    "WAWebBaseCollection",
    "WAWebBotGating",
    "WAWebBotProfileAction",
    "WAWebBotProfileModel",
    "WAWebPersistBotProfiles",
    "WAWebWidFactory",
    "cr:10195",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getDefaultBot = function () {
            return this.findFirst(function (e) {
              return e.isDefault === !0;
            });
          }),
          (r.findImpl = function (t) {
            return this.$BotProfileCollectionImpl$p_1(t);
          }),
          (r.update = async function (n, r) {
            var t, a;
            if (!n.isFbidBot()) {
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "update only supports FBID bots",
                  ])),
              );
              return;
            }
            var i =
              (t = (a = this.get(n)) == null ? void 0 : a.lastUpdateTs) != null
                ? t
                : 0;
            if (
              i + o("WAWebBotGating").ugcBotProfileSyncInterval() >
              Date.now()
            ) {
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[BotProfileCollection] skip updating bot profile",
                  ])),
              );
              return;
            }
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[BotProfileCollection] updating bot profile",
                ])),
            ),
              await this.$BotProfileCollectionImpl$p_1(n));
          }),
          (r.$BotProfileCollectionImpl$p_1 = async function (t) {
            var e,
              n = o("WAWebWidFactory").createWidFromWidLike(t);
            if (!n.isFbidBot())
              return (
                o("WALogger").ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "_findAndParse only supports FBID bots",
                    ])),
                ),
                null
              );
            var r = (e = this.get(n)) == null ? void 0 : e.personaId,
              a = await o("WAWebBotProfileAction").queryBotProfile(n, r);
            return (
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[BotProfileCollection] query bot profile",
                  ])),
              ),
              a
                ? (await o("WAWebPersistBotProfiles").persistBotProfiles([a]),
                  babelHelpers.extends({}, a))
                : (o("WALogger").WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "Unable to find bot profile with id",
                      ])),
                  ),
                  null)
            );
          }),
          n
        );
      })(o("WAWebBaseCollection").BaseCollection);
    p.model = r("WAWebBotProfileModel");
    var _ = new p();
    l.BotProfileCollection = _;
  },
  98,
);
