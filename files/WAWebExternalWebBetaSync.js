__d(
  "WAWebExternalWebBetaSync",
  [
    "Promise",
    "WALogger",
    "WASyncdConst",
    "WAWebABProps",
    "WAWebExternalBetaApi",
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
      m = (function (t) {
        function r() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.getVersion = function () {
            return 3;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.ExternalWebBeta;
          }),
          (a.applyMutations = function (r) {
            var t = this;
            return o("WAWebABProps").getABPropConfigValue(
              "external_beta_can_join",
            ) !== !0
              ? (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: action not enabled",
                    ])),
                ),
                (d || (d = n("Promise"))).resolve(
                  r.map(function () {
                    return {
                      actionState:
                        o("WASyncdConst").SyncActionState.Unsupported,
                    };
                  }),
                ))
              : (d || (d = n("Promise"))).all(
                  r.map(
                    (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e) {
                          try {
                            if (e.operation === "set") {
                              var n = e.value,
                                r = n.externalWebBetaAction;
                              if (!r)
                                return (
                                  o("WALogger").WARN(
                                    s ||
                                      (s =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "beta setting sync: malformed mutation",
                                          ],
                                        )),
                                  ),
                                  o(
                                    "WAWebSyncdIndexUtils",
                                  ).malformedActionValue(t.collectionName)
                                );
                              if (r.isOptIn !== void 0)
                                yield o(
                                  "WAWebExternalBetaApi",
                                ).changeOptInStatusForExternalWebBeta(
                                  r.isOptIn,
                                );
                              else
                                return (
                                  o("WALogger").WARN(
                                    u ||
                                      (u =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "beta setting sync: malformed mutation value",
                                          ],
                                        )),
                                  ),
                                  o(
                                    "WAWebSyncdIndexUtils",
                                  ).malformedActionValue(t.collectionName)
                                );
                              return {
                                actionState:
                                  o("WASyncdConst").SyncActionState.Success,
                              };
                            }
                            return (
                              o("WALogger").WARN(
                                c ||
                                  (c = babelHelpers.taggedTemplateLiteralLoose([
                                    "external beta opt in sync: operation not supported",
                                  ])),
                              ),
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
          }),
          r
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      p = new m();
    l.default = p;
  },
  98,
);
