__d(
  "WAWebExternalWebBetaSync",
  [
    "WALogger",
    "WASyncdConst",
    "WAWebABProps",
    "WAWebExternalBetaApi",
    "WAWebSyncdAction",
    "WAWebSyncdIndexUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getVersion = function () {
            return 3;
          }),
          (r.getAction = function () {
            return o("WASyncdConst").Actions.ExternalWebBeta;
          }),
          (r.applyMutations = function (n) {
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
                Promise.resolve(
                  n.map(function () {
                    return {
                      actionState:
                        o("WASyncdConst").SyncActionState.Unsupported,
                    };
                  }),
                ))
              : Promise.all(
                  n.map(async function (e) {
                    try {
                      if (e.operation === "set") {
                        var n = e.value,
                          r = n.externalWebBetaAction;
                        if (!r)
                          return (
                            o("WALogger").WARN(
                              s ||
                                (s = babelHelpers.taggedTemplateLiteralLoose([
                                  "beta setting sync: malformed mutation",
                                ])),
                            ),
                            o("WAWebSyncdIndexUtils").malformedActionValue(
                              t.collectionName,
                            )
                          );
                        if (r.isOptIn !== void 0)
                          await o(
                            "WAWebExternalBetaApi",
                          ).changeOptInStatusForExternalWebBeta(r.isOptIn);
                        else
                          return (
                            o("WALogger").WARN(
                              u ||
                                (u = babelHelpers.taggedTemplateLiteralLoose([
                                  "beta setting sync: malformed mutation value",
                                ])),
                            ),
                            o("WAWebSyncdIndexUtils").malformedActionValue(
                              t.collectionName,
                            )
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
                        actionState: o("WASyncdConst").SyncActionState.Failed,
                      };
                    }
                  }),
                );
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      m = new d();
    l.default = m;
  },
  98,
);
