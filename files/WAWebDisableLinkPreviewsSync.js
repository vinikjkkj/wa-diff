__d(
  "WAWebDisableLinkPreviewsSync",
  [
    "WALogger",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebDisableLinkPreviewsAction",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdCoreApi",
    "WAWebSyncdIndexUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function (t) {
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
            return 8;
          }),
          (r.getAction = function () {
            return o("WASyncdConst").Actions.DisableLinkPreviews;
          }),
          (r.applyMutations = async function (n) {
            var t = this,
              r,
              a = [],
              i = 0,
              l = 0,
              c = n.map(function (e) {
                var n;
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
                  (n = e.value.privacySettingDisableLinkPreviewsAction) == null
                    ? void 0
                    : n.isPreviewsDisabled;
                return s == null
                  ? (l++,
                    o("WAWebSyncdIndexUtils").malformedActionValue(
                      t.collectionName,
                    ))
                  : ((r = s),
                    { actionState: o("WASyncdConst").SyncActionState.Success });
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
          }),
          (r.getMutation = function (t, n) {
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
          (r.sendMutation = async function (t) {
            await o("WAWebSyncdCoreApi").lockForSync(
              [],
              [this.getMutation(o("WATimeUtils").unixTimeMs(), t)],
              function () {
                return Promise.resolve();
              },
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
