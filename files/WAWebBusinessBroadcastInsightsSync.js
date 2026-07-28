__d(
  "WAWebBusinessBroadcastInsightsSync",
  [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebBizBroadcastInsightsStorageUtils",
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebSyncdAction",
    "WAWebSyncdConst",
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
            (e.collectionName = o("WAWebSyncdConst").CollectionName.Regular),
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
            return o("WAWebSyncdConst").Actions.BusinessBroadcastInsights;
          }),
          (a.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var r = this;
                if (
                  !o(
                    "WAWebBusinessBroadcastsGatingUtils",
                  ).isBizBroadcastSendWebEnabledNoExposure()
                )
                  return t.map(function () {
                    return {
                      actionState:
                        o("WAWebSyncdConst").SyncActionState.Unsupported,
                    };
                  });
                var a = 0,
                  i = 0,
                  l = [],
                  d = 0,
                  m = [],
                  p = [],
                  _ = [],
                  f = yield (c || (c = n("Promise"))).all(
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
                                    f = u.businessBroadcastInsightsAction;
                                  if (!f)
                                    return (
                                      a++,
                                      o(
                                        "WAWebSyncdIndexUtils",
                                      ).malformedActionValue(r.collectionName)
                                    );
                                  var g = f.deliveredCount,
                                    h = f.quickReplyCount,
                                    y = f.readCount,
                                    C = f.recipientCount,
                                    b = f.repliedCount;
                                  return (
                                    i++,
                                    l.length < 3 &&
                                      l.push(
                                        "campaign=" +
                                          n +
                                          " recipients=" +
                                          (C != null ? C : 0) +
                                          " delivered=" +
                                          (g != null ? g : 0) +
                                          " read=" +
                                          (y != null ? y : 0) +
                                          " replied=" +
                                          (b != null ? b : 0) +
                                          " quickReply=" +
                                          (h != null ? h : 0),
                                      ),
                                    yield o(
                                      "WAWebBizBroadcastInsightsStorageUtils",
                                    ).upsertInsightsStorage(
                                      n,
                                      {
                                        deliveredCount: g,
                                        quickReplyCount: h,
                                        readCount: y,
                                        recipientCount: C,
                                        repliedCount: b,
                                      },
                                      c,
                                    ),
                                    p.push({
                                      campaignId: n,
                                      deliveredCount: g,
                                      quickReplyCount: h,
                                      readCount: y,
                                      recipientCount: C,
                                      repliedCount: b,
                                      lastUpdatedTimestampMs: c,
                                    }),
                                    {
                                      actionState:
                                        o("WAWebSyncdConst").SyncActionState
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
                                    _.push(n),
                                    {
                                      actionState:
                                        o("WAWebSyncdConst").SyncActionState
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
                                  o("WAWebSyncdConst").SyncActionState.Failed,
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
                    (o("WAWebBackendApi").frontendFireAndForget(
                      "refreshBroadcastCampaignState",
                      { broadcastJids: [] },
                    ),
                    o("WAWebBackendApi").frontendFireAndForget(
                      "syncBroadcastInsightsToCollection",
                      { upserts: p, removedCampaignIds: _ },
                    )),
                  f
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
