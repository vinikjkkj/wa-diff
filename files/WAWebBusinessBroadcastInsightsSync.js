__d(
  "WAWebBusinessBroadcastInsightsSync",
  [
    "Promise",
    "WALogger",
    "WASyncdConst",
    "WAWebBackendApi",
    "WAWebBizBroadcastInsightsStorageUtils",
    "WAWebBizGatingUtils",
    "WAWebSyncdAction",
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
            return 1;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.BusinessBroadcastInsights;
          }),
          (a.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var r = this;
                if (
                  !o(
                    "WAWebBizGatingUtils",
                  ).isBizBroadcastSendWebEnabledNoExposure()
                )
                  return t.map(function () {
                    return {
                      actionState:
                        o("WASyncdConst").SyncActionState.Unsupported,
                    };
                  });
                var a = 0,
                  i = 0,
                  l = [],
                  d = 0,
                  m = [],
                  p = yield (c || (c = n("Promise"))).all(
                    t.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            try {
                              var t = e.indexParts,
                                n = t[1];
                              if (!n) return r.malformedActionIndex();
                              e: {
                                var s = e;
                                if (
                                  ((typeof s == "object" && s !== null) ||
                                    typeof s == "function") &&
                                  s.operation === "set" &&
                                  "value" in s &&
                                  "timestamp" in s
                                ) {
                                  var u = s.value,
                                    c = s.timestamp,
                                    p = u.businessBroadcastInsightsAction;
                                  if (!p)
                                    return (
                                      a++,
                                      o(
                                        "WAWebSyncdIndexUtils",
                                      ).malformedActionValue(r.collectionName)
                                    );
                                  var _ = p.deliveredCount,
                                    f = p.quickReplyCount,
                                    g = p.readCount,
                                    h = p.recipientCount,
                                    y = p.repliedCount;
                                  return (
                                    i++,
                                    l.length < 3 &&
                                      l.push(
                                        "campaign=" +
                                          n +
                                          " recipients=" +
                                          (h != null ? h : 0) +
                                          " delivered=" +
                                          (_ != null ? _ : 0) +
                                          " read=" +
                                          (g != null ? g : 0) +
                                          " replied=" +
                                          (y != null ? y : 0) +
                                          " quickReply=" +
                                          (f != null ? f : 0),
                                      ),
                                    yield o(
                                      "WAWebBizBroadcastInsightsStorageUtils",
                                    ).upsertInsightsStorage(
                                      n,
                                      {
                                        deliveredCount: _,
                                        quickReplyCount: f,
                                        readCount: g,
                                        recipientCount: h,
                                        repliedCount: y,
                                      },
                                      c,
                                    ),
                                    {
                                      actionState:
                                        o("WASyncdConst").SyncActionState
                                          .Success,
                                    }
                                  );
                                  break e;
                                }
                                if (
                                  ((typeof s == "object" && s !== null) ||
                                    typeof s == "function") &&
                                  s.operation === "remove"
                                ) {
                                  return (
                                    d++,
                                    m.length < 3 && m.push(n),
                                    yield o(
                                      "WAWebBizBroadcastInsightsStorageUtils",
                                    ).removeInsightsStorage(n),
                                    {
                                      actionState:
                                        o("WASyncdConst").SyncActionState
                                          .Success,
                                    }
                                  );
                                  break e;
                                }
                                throw Error(
                                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                    s,
                                );
                              }
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
                return (
                  i > 0 &&
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "BBI SyncD received ",
                          " SET operations => ",
                          "",
                        ])),
                      i,
                      l,
                    ),
                  d > 0 &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "BBI SyncD received ",
                          " REMOVE operations for campaigns => ",
                          "",
                        ])),
                      d,
                      m,
                    ),
                  a > 0 &&
                    o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "BBI sync: ",
                          " malformed mutations",
                        ])),
                      a,
                    ),
                  (i > 0 || d > 0) &&
                    o("WAWebBackendApi").frontendFireAndForget(
                      "refreshBroadcastCampaignState",
                      { broadcastJids: [] },
                    ),
                  p
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
