__d(
  "WAWebLocaleSettingSync",
  [
    "Promise",
    "WALogger",
    "WASyncdConst",
    "WAWebBackendApi",
    "WAWebEnvironment",
    "WAWebL10NConstants",
    "WAWebSyncdAction",
    "WAWebSyncdIndexUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.CriticalBlock),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.getVersion = function () {
            return 3;
          }),
          (i.getAction = function () {
            return o("WASyncdConst").Actions.LocaleSetting;
          }),
          (i.applyMutations = function (a) {
            var t = this;
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "locale setting sync: start",
                ])),
            );
            var i = 0,
              l = 0,
              p = 0,
              _ = [],
              f = (m || (m = n("Promise"))).all(
                a.map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        try {
                          if (r("WAWebEnvironment").isWindows)
                            return {
                              actionState:
                                o("WASyncdConst").SyncActionState.Skipped,
                            };
                          if (e.operation === "set") {
                            var n = e.value,
                              a = n.localeSetting;
                            if (!a)
                              return (
                                i++,
                                o("WAWebSyncdIndexUtils").malformedActionValue(
                                  t.collectionName,
                                )
                              );
                            var s = a.locale;
                            return s == null
                              ? (l++,
                                {
                                  actionState:
                                    o("WASyncdConst").SyncActionState.Skipped,
                                })
                              : (yield o(
                                  "WAWebBackendApi",
                                ).frontendSendAndReceive("setLocale", {
                                  locale: s,
                                  priority:
                                    o("WAWebL10NConstants").L10N_PRIORITY.PHONE,
                                  reload: !1,
                                }),
                                _.length < 3 && _.push(s),
                                {
                                  actionState:
                                    o("WASyncdConst").SyncActionState.Success,
                                });
                          }
                          return (
                            p++,
                            {
                              actionState:
                                o("WASyncdConst").SyncActionState.Unsupported,
                            }
                          );
                        } catch (e) {
                          return {
                            actionState:
                              o("WASyncdConst").SyncActionState.Failed,
                          };
                        }
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
              );
            return f.then(function (e) {
              return (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "locale setting sync: handled ",
                      " mutations",
                    ])),
                  a.length,
                ),
                i > 0 &&
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "locale setting sync: ",
                        " malformed mutations",
                      ])),
                    i,
                  ),
                l > 0 &&
                  o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "locale setting sync: ",
                        " null locale mutations",
                      ])),
                    l,
                  ),
                p > 0 &&
                  o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "locale setting sync: ",
                        " unsupported operations",
                      ])),
                    p,
                  ),
                e
              );
            });
          }),
          a
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      _ = new p();
    l.default = _;
  },
  98,
);
