__d(
  "WAWebNuxSync",
  [
    "Promise",
    "WALogger",
    "WASyncdConst",
    "WATimeUtils",
    "WATypeUtils",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdCoreApi",
    "WAWebUserPrefsNuxPreferences",
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
            (e.collectionName = o("WASyncdConst").CollectionName.RegularLow),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.getVersion = function () {
            return 7;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.Nux;
          }),
          (a.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = this,
                  r = [],
                  a = [],
                  i = 0,
                  l = [],
                  c = 0,
                  d = t.map(function (e) {
                    var t;
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
                            ((t = e.value.nuxAction) == null
                              ? void 0
                              : t.acknowledged) === !0,
                          timestamp:
                            e.value.timestamp != null
                              ? Number(e.value.timestamp)
                              : void 0,
                        }),
                        {
                          actionState:
                            o("WASyncdConst").SyncActionState.Success,
                        })
                      : (c++,
                        l.length < 3 && l.push(e),
                        n.malformedActionIndex());
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
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.$NuxSync$p_1 = function (t, n, r) {
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
          (a.acknowledgeNux = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return this.$NuxSync$p_2(e, !0);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.unAcknowledgeNux = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return this.$NuxSync$p_2(e, !1);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$NuxSync$p_2 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var r = o("WATimeUtils").unixTimeMs();
                o("WAWebUserPrefsNuxPreferences").updateNuxSyncList([
                  { nuxKey: e, acknowledged: t, timestamp: r },
                ]);
                var a = this.$NuxSync$p_1(e, r, t);
                return (
                  yield o("WAWebSyncdCoreApi").lockForSync(
                    [],
                    [a],
                    function () {
                      return (c || (c = n("Promise"))).resolve();
                    },
                  ),
                  r
                );
              },
            );
            function t(t, n) {
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
