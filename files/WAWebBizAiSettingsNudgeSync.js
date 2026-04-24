__d(
  "WAWebBizAiSettingsNudgeSync",
  [
    "Promise",
    "WALogger",
    "WALongInt",
    "WASyncdConst",
    "WAWebBackendApi",
    "WAWebSyncdAction",
    "WAWebSyncdIndexUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = (function (t) {
        function r() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularHigh),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.getVersion = function () {
            return 1;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.BizAiSettingsNudge;
          }),
          (a.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var r = this,
                  a = 0,
                  i = 0,
                  l = yield (c || (c = n("Promise"))).all(
                    t.map(
                      (function () {
                        var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (t) {
                            try {
                              if (t.operation === "set") {
                                var n,
                                  l,
                                  s = t.value.bizAiSettingsNudgeAction;
                                return (s == null ? void 0 : s.category) ==
                                  null ||
                                  (s == null ? void 0 : s.version) == null
                                  ? (a++,
                                    o(
                                      "WAWebSyncdIndexUtils",
                                    ).malformedActionValue(r.collectionName))
                                  : (o("WAWebBackendApi").frontendFireAndForget(
                                      "handleBizAiSettingsNudge",
                                      {
                                        category: s.category,
                                        version:
                                          (n = o(
                                            "WALongInt",
                                          ).maybeNumberOrThrowIfTooLarge(
                                            s.version,
                                          )) != null
                                            ? n
                                            : 0,
                                        updatedAtMs:
                                          (l = o(
                                            "WALongInt",
                                          ).maybeNumberOrThrowIfTooLarge(
                                            s.updatedAtMs,
                                          )) != null
                                            ? l
                                            : 0,
                                      },
                                    ),
                                    {
                                      actionState:
                                        o("WASyncdConst").SyncActionState
                                          .Success,
                                    });
                              }
                              return (
                                i++,
                                {
                                  actionState:
                                    o("WASyncdConst").SyncActionState
                                      .Unsupported,
                                }
                              );
                            } catch (t) {
                              return (
                                o("WALogger").WARN(
                                  e ||
                                    (e =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "biz ai settings nudge sync: failed to apply mutation: ",
                                        "",
                                      ])),
                                  t,
                                ),
                                {
                                  actionState:
                                    o("WASyncdConst").SyncActionState.Failed,
                                }
                              );
                            }
                          },
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })(),
                    ),
                  );
                return (
                  a > 0 &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "biz ai settings nudge sync: ",
                          " malformed mutations",
                        ])),
                      a,
                    ),
                  i > 0 &&
                    o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "biz ai settings nudge sync: ",
                          " operations not supported",
                        ])),
                      i,
                    ),
                  l
                );
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          r
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      m = new d();
    l.default = m;
  },
  98,
);
