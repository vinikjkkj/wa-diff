__d(
  "WAWebDisableLinkPreviewsSync",
  [
    "Promise",
    "WALogger",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebDisableLinkPreviewsAction",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdCoreApi",
    "WAWebSyncdIndexUtils",
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
            return o("WASyncdConst").Actions.DisableLinkPreviews;
          }),
          (a.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = this,
                  r,
                  a = [],
                  i = 0,
                  l = 0,
                  c = t.map(function (e) {
                    var t;
                    if (e.operation !== "set")
                      return (
                        i++,
                        a.length < 3 && a.push(e.operation),
                        {
                          actionState:
                            o("WASyncdConst").SyncActionState.Unsupported,
                        }
                      );
                    var s =
                      (t = e.value.privacySettingDisableLinkPreviewsAction) ==
                      null
                        ? void 0
                        : t.isPreviewsDisabled;
                    return s == null
                      ? (l++,
                        o("WAWebSyncdIndexUtils").malformedActionValue(
                          n.collectionName,
                        ))
                      : ((r = s),
                        {
                          actionState:
                            o("WASyncdConst").SyncActionState.Success,
                        });
                  });
                return (
                  i > 0 &&
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "DisableLinkPreviewsSync: ",
                          " operations not supported => ",
                          "",
                        ])),
                      i,
                      a,
                    ),
                  l > 0 &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "DisableLinkPreviewsSync: ",
                          " mutation values are null",
                        ])),
                      l,
                    ),
                  r != null &&
                    (o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "DisableLinkPreviewsSync: set disabled=",
                          "",
                        ])),
                      r,
                    ),
                    o(
                      "WAWebDisableLinkPreviewsAction",
                    ).setDisableLinkPreviewsToUserPrefs(r)),
                  c
                );
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.getMutation = function (t, n) {
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: [],
              value: {
                privacySettingDisableLinkPreviewsAction: {
                  isPreviewsDisabled: n,
                },
              },
              version: this.getVersion(),
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              timestamp: t,
              action: this.getAction(),
            });
          }),
          (a.sendMutation = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                yield o("WAWebSyncdCoreApi").lockForSync(
                  [],
                  [this.getMutation(o("WATimeUtils").unixTimeMs(), e)],
                  function () {
                    return (c || (c = n("Promise"))).resolve();
                  },
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
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      m = new d();
    l.default = m;
  },
  98,
);
