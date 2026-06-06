__d(
  "WAWebLocaleSettingSync",
  [
    "WALogger",
    "WASyncdConst",
    "WAWebBackendApi",
    "WAWebEnvironment",
    "WAWebL10NConstants",
    "WAWebSyncdAction",
    "WAWebSyncdIndexUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.CriticalBlock),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getVersion = function () {
            return 3;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.LocaleSetting;
          }),
          (a.applyMutations = function (n) {
            var t = this;
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "locale setting sync: start",
                ])),
            );
            var a = 0,
              i = 0,
              l = 0,
              m = [],
              p = Promise.all(
                n.map(async function (e) {
                  try {
                    if (r("WAWebEnvironment").isWindows)
                      return {
                        actionState: o("WASyncdConst").SyncActionState.Skipped,
                      };
                    if (e.operation === "set") {
                      var n = e.value,
                        s = n.localeSetting;
                      if (!s)
                        return (
                          a++,
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            t.collectionName,
                          )
                        );
                      var u = s.locale;
                      return u == null
                        ? (i++,
                          {
                            actionState:
                              o("WASyncdConst").SyncActionState.Skipped,
                          })
                        : (await o("WAWebBackendApi").frontendSendAndReceive(
                            "setLocale",
                            {
                              locale: u,
                              priority:
                                o("WAWebL10NConstants").L10N_PRIORITY.PHONE,
                              reload: !1,
                            },
                          ),
                          m.length < 3 && m.push(u),
                          {
                            actionState:
                              o("WASyncdConst").SyncActionState.Success,
                          });
                    }
                    return (
                      l++,
                      {
                        actionState:
                          o("WASyncdConst").SyncActionState.Unsupported,
                      }
                    );
                  } catch (e) {
                    return {
                      actionState: o("WASyncdConst").SyncActionState.Failed,
                    };
                  }
                }),
              );
            return p.then(function (e) {
              return (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "locale setting sync: handled ",
                      " mutations",
                    ])),
                  n.length,
                ),
                a > 0 &&
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "locale setting sync: ",
                        " malformed mutations",
                      ])),
                    a,
                  ),
                i > 0 &&
                  o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "locale setting sync: ",
                        " null locale mutations",
                      ])),
                    i,
                  ),
                l > 0 &&
                  o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "locale setting sync: ",
                        " unsupported operations",
                      ])),
                    l,
                  ),
                e
              );
            });
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      p = new m();
    l.default = p;
  },
  98,
);
