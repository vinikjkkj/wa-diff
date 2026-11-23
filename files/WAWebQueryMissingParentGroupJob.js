__d(
  "WAWebQueryMissingParentGroupJob",
  [
    "WALogger",
    "WAPromiseEach",
    "WAWebCallsOnlyGating",
    "WAWebCommunityGatingUtils",
    "WAWebDBGroupsGroupMetadata",
    "WAWebGroupQueryJob",
    "WAWebGroupsParticipantsApi",
    "WAWebNetworkStatus",
    "WAWebSchemaGroupMetadata",
    "WAWebWidFactory",
    "compactMap",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new Set();
    async function c(e) {
      if (!u.has(e)) {
        u.add(e);
        try {
          var t = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
          if ((t == null ? void 0 : t.isParentGroup) === !0) return;
          await o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
            id: e,
          });
        } finally {
          u.delete(e);
        }
      }
    }
    async function d() {
      if (
        !(
          !o("WAWebCommunityGatingUtils").fetchMissingParentGroupsEnabled() ||
          o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled()
        )
      ) {
        var t = await m();
        t.length !== 0 &&
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[missing-parent-group] querying ",
                " parent groups",
              ])),
            t.length,
          ),
          await r("WAWebNetworkStatus").waitIfOffline(),
          await o("WAPromiseEach").promiseEach(t, function (e) {
            return c(o("WAWebWidFactory").createWid(e)).catch(function (e) {
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[missing-parent-group] parent group query failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("missing-parent-group-query-failed");
            });
          }));
      }
    }
    async function m() {
      var e = await o("WAWebSchemaGroupMetadata").getGroupMetadataTable().all(),
        t = new Set(
          e
            .filter(function (e) {
              return e.isParentGroup === !0;
            })
            .map(function (e) {
              var t = e.id;
              return t;
            }),
        ),
        n = e.filter(function (e) {
          return (
            e.parentGroup != null && !t.has(e.parentGroup) && !e.terminated
          );
        });
      if (n.length === 0) return [];
      var a = await o("WAWebGroupsParticipantsApi").bulkCheckMyMembership(
        n.map(function (e) {
          var t = e.id;
          return o("WAWebWidFactory").createWid(t);
        }),
      );
      return Array.from(
        new Set(
          r("compactMap")(
            n.filter(function (e, t) {
              return a[t];
            }),
            function (e) {
              var t = e.parentGroup;
              return t;
            },
          ),
        ),
      );
    }
    ((l.queryParentGroupIfMissing = c), (l.queryMissingParentGroups = d));
  },
  98,
);
