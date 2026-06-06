__d(
  "WAWebNuxSync",
  [
    "WALogger",
    "WASyncdConst",
    "WATimeUtils",
    "WATypeUtils",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdCoreApi",
    "WAWebUserPrefsNuxPreferences",
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
            (e.collectionName = o("WASyncdConst").CollectionName.RegularLow),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getVersion = function () {
            return 7;
          }),
          (r.getAction = function () {
            return o("WASyncdConst").Actions.Nux;
          }),
          (r.applyMutations = async function (n) {
            var t = this,
              r = [],
              a = [],
              i = 0,
              l = [],
              c = 0,
              d = n.map(function (e) {
                var n;
                if (e.operation !== "set")
                  return (
                    i++,
                    a.length < 3 && a.push(e),
                    {
                      actionState:
                        o("WASyncdConst").SyncActionState.Unsupported,
                    }
                  );
                var s = e.indexParts[1];
                return o("WATypeUtils").isString(s)
                  ? (r.push({
                      nuxKey: s,
                      acknowledged:
                        ((n = e.value.nuxAction) == null
                          ? void 0
                          : n.acknowledged) === !0,
                      timestamp:
                        e.value.timestamp != null
                          ? Number(e.value.timestamp)
                          : void 0,
                    }),
                    { actionState: o("WASyncdConst").SyncActionState.Success })
                  : (c++, l.length < 3 && l.push(e), t.malformedActionIndex());
              });
            return (
              i > 0 &&
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "NuxSync: ",
                      " operations not supported => ",
                      "",
                    ])),
                  i,
                  a,
                ),
              c > 0 &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "NuxSync: ",
                      " malformed mutations",
                    ])),
                  c,
                ),
              r.length !== 0 &&
                (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "NuxSync: update nux to local store",
                    ])),
                ),
                o("WAWebUserPrefsNuxPreferences").updateNuxSyncList(r)),
              d
            );
          }),
          (r.$NuxSync$p_1 = function (t, n, r) {
            var e = { nuxAction: { acknowledged: r } };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: [t],
              value: e,
              version: this.getVersion(),
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              timestamp: n,
              action: this.getAction(),
            });
          }),
          (r.acknowledgeNux = async function (t) {
            return this.$NuxSync$p_2(t, !0);
          }),
          (r.unAcknowledgeNux = async function (t) {
            return this.$NuxSync$p_2(t, !1);
          }),
          (r.$NuxSync$p_2 = async function (t, n) {
            var e = o("WATimeUtils").unixTimeMs();
            o("WAWebUserPrefsNuxPreferences").updateNuxSyncList([
              { nuxKey: t, acknowledged: n, timestamp: e },
            ]);
            var r = this.$NuxSync$p_1(t, e, n);
            return (
              await o("WAWebSyncdCoreApi").lockForSync([], [r], function () {
                return Promise.resolve();
              }),
              e
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
