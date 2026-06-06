__d(
  "WAWebBizAiSettingsNudgeSync",
  [
    "WALogger",
    "WALongInt",
    "WASyncdConst",
    "WAWebBackendApi",
    "WAWebSyncdAction",
    "WAWebSyncdIndexUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularHigh),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getVersion = function () {
            return 1;
          }),
          (r.getAction = function () {
            return o("WASyncdConst").Actions.BizAiSettingsNudge;
          }),
          (r.applyMutations = async function (n) {
            var t = this,
              r = 0,
              a = 0,
              i = await Promise.all(
                n.map(async function (n) {
                  try {
                    if (n.operation === "set") {
                      var i,
                        l,
                        s = n.value.bizAiSettingsNudgeAction;
                      return (s == null ? void 0 : s.category) == null ||
                        (s == null ? void 0 : s.version) == null
                        ? (r++,
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            t.collectionName,
                          ))
                        : (o("WAWebBackendApi").frontendFireAndForget(
                            "handleBizAiSettingsNudge",
                            {
                              category: s.category,
                              version:
                                (i = o(
                                  "WALongInt",
                                ).maybeNumberOrThrowIfTooLarge(s.version)) !=
                                null
                                  ? i
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
                              o("WASyncdConst").SyncActionState.Success,
                          });
                    }
                    return (
                      a++,
                      {
                        actionState:
                          o("WASyncdConst").SyncActionState.Unsupported,
                      }
                    );
                  } catch (t) {
                    return (
                      o("WALogger").WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "biz ai settings nudge sync: failed to apply mutation: ",
                            "",
                          ])),
                        t,
                      ),
                      { actionState: o("WASyncdConst").SyncActionState.Failed }
                    );
                  }
                }),
              );
            return (
              r > 0 &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "biz ai settings nudge sync: ",
                      " malformed mutations",
                    ])),
                  r,
                ),
              a > 0 &&
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "biz ai settings nudge sync: ",
                      " operations not supported",
                    ])),
                  a,
                ),
              i
            );
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      d = new c();
    l.default = d;
  },
  98,
);
