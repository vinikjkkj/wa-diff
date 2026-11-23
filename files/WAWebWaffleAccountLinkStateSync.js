__d(
  "WAWebWaffleAccountLinkStateSync",
  [
    "WALogger",
    "WAWebAccountLinkingConstants",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebAccountLinkingGatingUtils",
    "WAWebAccountLinkingNonceFetchAPI",
    "WAWebAccountLinkingUtils",
    "WAWebSubscriptionAgeGating",
    "WAWebSyncdAction",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "WAWebWaffleLifecycleWamLogger",
    "WAWebWamEnumWaffleLifecycleLinkStateType",
    "WAWebWamEnumWaffleLifecycleTraceActionType",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      ),
      c = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName =
              o("WAWebSyncdConst").CollectionName.RegularHigh),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getVersion = function () {
            return 1;
          }),
          (a.getAction = function () {
            return o("WAWebSyncdConst").Actions.WaffleAccountLinkState;
          }),
          (a.applyMutations = async function (n) {
            var t = this;
            if (o("WAWebAccountLinkingGatingUtils").isGuestMode())
              return n.map(function () {
                return {
                  actionState: o("WAWebSyncdConst").SyncActionState.Success,
                };
              });
            var a,
              i = 0,
              l = 0,
              c = n.map(function (e) {
                var n;
                return e.operation !== "set"
                  ? (i++,
                    {
                      actionState:
                        o("WAWebSyncdConst").SyncActionState.Unsupported,
                    })
                  : ((n = e.value.waffleAccountLinkStateAction) == null
                        ? void 0
                        : n.linkState) == null
                    ? (l++,
                      o("WAWebSyncdIndexUtils").malformedActionValue(
                        t.collectionName,
                      ))
                    : ((a == null || e.timestamp > a.timestamp) && (a = e),
                      {
                        actionState:
                          o("WAWebSyncdConst").SyncActionState.Success,
                      });
              });
            if (
              (i > 0 &&
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "waffleaccountlinkstate sync: ",
                      " operations not supported",
                    ])),
                  i,
                ),
              l > 0 &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "waffleaccountlinkstate sync: ",
                      " malformed mutations",
                    ])),
                  l,
                ),
              a != null)
            ) {
              var d,
                m,
                p = o("WAWebAccountLinkingUtils").mapToAccountLinkState(
                  r("nullthrows")(
                    (d = a.value.waffleAccountLinkStateAction) == null
                      ? void 0
                      : d.linkState,
                  ),
                ),
                _ = Number(
                  r("nullthrows")((m = a) == null ? void 0 : m.value.timestamp),
                );
              if (
                p === o("WAWebAccountLinkingConstants").AccountLinkState.Active
              ) {
                var f = await u.getAccountLinkingData();
                f == null
                  ? (o("WAWebWaffleLifecycleWamLogger").logSyncdReceived({
                      hasAccessToken: !1,
                      hasExistingRow: !1,
                      linkState: o("WAWebWamEnumWaffleLifecycleLinkStateType")
                        .WAFFLE_LIFECYCLE_LINK_STATE_TYPE.NOT_APPLICABLE,
                      traceAction: o(
                        "WAWebWamEnumWaffleLifecycleTraceActionType",
                      ).WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE
                        .SYNCD_RECEIVED_NO_EXISTING_ROW,
                    }),
                    await this.storeLinkState(p, _),
                    await o(
                      "WAWebAccountLinkingNonceFetchAPI",
                    ).requestNonceFromPrimary())
                  : f.linkState !==
                      o("WAWebAccountLinkingConstants").AccountLinkState.Active
                    ? (o("WAWebWaffleLifecycleWamLogger").logSyncdReceived({
                        hasAccessToken: f.accesstoken != null,
                        hasExistingRow: !0,
                        linkState: o(
                          "WAWebWaffleLifecycleWamLogger",
                        ).mapLinkStateToWam(f.linkState),
                        traceAction: o(
                          "WAWebWamEnumWaffleLifecycleTraceActionType",
                        ).WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE
                          .SYNCD_RECEIVED_STATE_TRANSITION,
                      }),
                      await this.storeLinkState(p, _),
                      await o(
                        "WAWebAccountLinkingNonceFetchAPI",
                      ).requestNonceFromPrimary())
                    : o("WAWebWaffleLifecycleWamLogger").logSyncdReceived({
                        hasAccessToken: f.accesstoken != null,
                        hasExistingRow: !0,
                        linkState: o("WAWebWamEnumWaffleLifecycleLinkStateType")
                          .WAFFLE_LIFECYCLE_LINK_STATE_TYPE.ACTIVE,
                        traceAction: o(
                          "WAWebWamEnumWaffleLifecycleTraceActionType",
                        ).WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE
                          .SYNCD_RECEIVED_ALREADY_ACTIVE,
                      });
              }
            }
            return c;
          }),
          (a.storeLinkState = async function (t, n) {
            (await u.createOrUpdateAccountLinkingState({
              accountLinkKey: o("WAWebAccountLinkingConstants").AccountLinkKey,
              linkState: t,
              linkTimestamp: n,
            }),
              await o(
                "WAWebSubscriptionAgeGating",
              ).invalidateSubscriptionAgeVerdict());
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      d = new c();
    l.default = d;
  },
  98,
);
