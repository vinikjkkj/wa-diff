__d(
  "WAWebMexOrgMemberUpdateNotificationHandler",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBOrgMemberDelta",
    "WAWebMexOrgMemberUpdateNotificationHandlerQuery.graphql",
    "WAWebOrgGatingUtils",
    "WAWebSchemaOrg",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    e !== void 0 ||
      (e = n("WAWebMexOrgMemberUpdateNotificationHandlerQuery.graphql"));
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = t.xwa2_notify_org_on_member_update;
          if (a == null)
            throw r("err")("unexpected null xwa2_notify_org_on_member_update");
          if (o("WAWebOrgGatingUtils").isOrgInfoDisplayEnabled()) {
            var i = a.org_id,
              l = a.org_member_updated_ts_usec,
              s = g(i, (n = a.members) != null ? n : []),
              u = s.added,
              _ = s.removedLids,
              f = yield o("WAWebDBOrgMemberDelta").applyOrgMemberDelta(i, {
                added: u,
                memberUpdatedTsUsec: l,
                removedLids: _,
                removesViewer: _.includes(
                  o("WAWebUserPrefsMeUser").getMeLidUserOrThrow().user,
                ),
              });
            if (f.status === "missing_org") {
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-notification] update for an org not stored, syncing orgs",
                  ])),
              ),
                o("WAWebBackendApi").frontendFireAndForget(
                  "syncOrgsInBackground",
                  { bypassCooldown: !0, forceDirectory: !1 },
                ));
              return;
            }
            if (f.status === "stale") {
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-notification] ignored an older member update",
                  ])),
              );
              return;
            }
            if (f.status === "viewer_removed") {
              (o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-notification] the viewer was removed from an org",
                  ])),
              ),
                o("WAWebBackendApi").frontendFireAndForget("applyOrgRows", {
                  isFullList: !0,
                  rows: f.orgs,
                }));
              return;
            }
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-notification] applied added=",
                  " removed=",
                  "",
                ])),
              u.length,
              _.length,
            );
            var h = Array.from(
              new Set(
                [].concat(
                  u.map(function (e) {
                    return e.lid;
                  }),
                  _,
                ),
              ),
            );
            (o("WAWebBackendApi").frontendFireAndForget("applyOrgContactRows", {
              createModels: !0,
              lids: h,
              rows: f.rows,
            }),
              o("WAWebBackendApi").frontendFireAndForget(
                "markOrgContactsChecked",
                { lids: h },
              ));
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      var n = { added: [], removedLids: [] };
      return (
        t.forEach(function (t) {
          var r = t == null ? null : y(t.member_lid);
          if (!(t == null || r == null))
            e: {
              var a = t.member_action;
              if (a === "ADD") {
                n.added.push(h(e, r, t));
                break e;
              }
              if (a === "REMOVE") {
                n.removedLids.push(r);
                break e;
              }
              {
                var i = a;
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-notification] skipped member action ",
                      "",
                    ])),
                  i,
                );
                break e;
              }
            }
        }),
        n
      );
    }
    function h(e, t, n) {
      var r, a;
      return {
        lid: t,
        memberName: (r = n.display_name) != null ? r : "",
        memberTag: (a = n.member_tag) != null ? a : "",
        orgId: e,
        role:
          n.role == null
            ? null
            : o("WAWebSchemaOrg").OrgMemberRole.cast(n.role),
      };
    }
    function y(e) {
      try {
        return o("WAWebWidFactory").createUserLidOrThrow(e).user;
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-notification] skipped a member with an invalid lid",
                ])),
            )
            .sendLogs("org-member-update-invalid-lid"),
          null
        );
      }
    }
    l.mexHandleOrgMemberUpdate = _;
  },
  98,
);
