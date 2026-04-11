__d(
  "WAWebPnForLidChatSync",
  [
    "WALogger",
    "WASyncdConst",
    "WAWebABProps",
    "WAWebDBCreateLidPnMappings",
    "WAWebSyncdAction",
    "WAWebSyncdIndexUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
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
            (e.collectionName = o("WASyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.getVersion = function () {
            return 8;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.PnForLidChat;
          }),
          (a.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = this;
                if (
                  o("WAWebABProps").getABPropConfigValue(
                    "pnh_pn_for_lid_chat_sync",
                  ) !== !0
                )
                  return (
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "pn_for_lid_chat sync: operation not supported",
                        ])),
                    ),
                    t.map(function () {
                      return {
                        actionState:
                          o("WASyncdConst").SyncActionState.Unsupported,
                      };
                    })
                  );
                var r = [],
                  a = 0,
                  i = 0,
                  l = 0,
                  d = t.map(function (e) {
                    var t;
                    if (e.operation !== "set")
                      return (
                        a++,
                        {
                          actionState:
                            o("WASyncdConst").SyncActionState.Unsupported,
                        }
                      );
                    var s = e.indexParts[1];
                    if (!o("WAWebWidFactory").isWidlike(s))
                      return (i++, n.malformedActionIndex());
                    var u =
                      (t = e.value.pnForLidChatAction) == null
                        ? void 0
                        : t.pnJid;
                    if (u == null || !o("WAWebWidFactory").isWidlike(u))
                      return (
                        l++,
                        o("WAWebSyncdIndexUtils").malformedActionValue(
                          n.collectionName,
                        )
                      );
                    var c = o("WAWebWidFactory").createUserWidOrThrow(u),
                      d = o("WAWebWidFactory").createUserLidOrThrow(s);
                    return (
                      r.push({ lid: d, pn: c }),
                      { actionState: o("WASyncdConst").SyncActionState.Success }
                    );
                  });
                return (
                  a > 0 &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "pn_for_lid_chat sync: ",
                          " operations not supported",
                        ])),
                      a,
                    ),
                  i > 0 &&
                    o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "pn_for_lid_chat sync: ",
                          " malformed mutations - invalid key",
                        ])),
                      i,
                    ),
                  l > 0 &&
                    o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "pn_for_lid_chat sync: ",
                          " malformed mutations - invalid pnJid",
                        ])),
                      l,
                    ),
                  yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                    mappings: r,
                    flushImmediately: !0,
                    learningSource: "other",
                  }),
                  d
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
