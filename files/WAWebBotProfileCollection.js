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
    "asyncToGeneratorRuntime",
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
        function r() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.getDefaultBot = function () {
            return this.findFirst(function (e) {
              return e.isDefault === !0;
            });
          }),
          (a.findImpl = function (t) {
            return this.$BotProfileCollectionImpl$p_1(t);
          }),
          (a.update = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n) {
                var r, a;
                if (!t.isFbidBot()) {
                  o("WALogger").ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "update only supports FBID bots",
                      ])),
                  );
                  return;
                }
                var i =
                  (r = (a = this.get(t)) == null ? void 0 : a.lastUpdateTs) !=
                  null
                    ? r
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
                  yield this.$BotProfileCollectionImpl$p_1(t));
              },
            );
            function r(e, n) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.$BotProfileCollectionImpl$p_1 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n = o("WAWebWidFactory").createWidFromWidLike(e);
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
                var r = (t = this.get(n)) == null ? void 0 : t.personaId,
                  a = yield o("WAWebBotProfileAction").queryBotProfile(n, r);
                return (
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[BotProfileCollection] query bot profile",
                      ])),
                  ),
                  a
                    ? (yield o("WAWebPersistBotProfiles").persistBotProfiles([
                        a,
                      ]),
                      babelHelpers.extends({}, a))
                    : (o("WALogger").WARN(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "Unable to find bot profile with id",
                          ])),
                      ),
                      null)
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          r
        );
      })(o("WAWebBaseCollection").BaseCollection);
    p.model = r("WAWebBotProfileModel");
    var _ = new p();
    l.BotProfileCollection = _;
  },
  98,
);
