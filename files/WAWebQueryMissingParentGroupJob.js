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
    "asyncToGeneratorRuntime",
    "compactMap",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new Set();
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!u.has(e)) {
            u.add(e);
            try {
              var t = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
              if ((t == null ? void 0 : t.isParentGroup) === !0) return;
              yield o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                id: e,
              });
            } finally {
              u.delete(e);
            }
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !(
              !o(
                "WAWebCommunityGatingUtils",
              ).fetchMissingParentGroupsEnabled() ||
              o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled()
            )
          ) {
            var t = yield _();
            t.length !== 0 &&
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[missing-parent-group] querying ",
                    " parent groups",
                  ])),
                t.length,
              ),
              yield r("WAWebNetworkStatus").waitIfOffline(),
              yield o("WAPromiseEach").promiseEach(t, function (e) {
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
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaGroupMetadata")
              .getGroupMetadataTable()
              .all(),
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
          var a = yield o("WAWebGroupsParticipantsApi").bulkCheckMyMembership(
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
        })),
        f.apply(this, arguments)
      );
    }
    ((l.queryParentGroupIfMissing = c), (l.queryMissingParentGroups = m));
  },
  98,
);
