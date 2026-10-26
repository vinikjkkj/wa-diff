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
    var e, s, u, c, d;
    e !== void 0 ||
      (e = n("WAWebMexOrgMemberUpdateNotificationHandlerQuery.graphql"));
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = t.xwa2_notify_org_on_member_update;
          if (a == null)
            throw r("err")("unexpected null xwa2_notify_org_on_member_update");
          if (o("WAWebOrgGatingUtils").isOrgInfoDisplayEnabled()) {
            var i = a.org_id,
              l = a.org_member_updated_ts_usec,
              s = _(i, (n = a.members) != null ? n : []),
              u = s.added,
              m = s.removedLids,
              p = yield o("WAWebDBOrgMemberDelta").applyOrgMemberDelta(i, {
                added: u,
                memberUpdatedTsUsec: l,
                removedLids: m,
                removesViewer: m.includes(
                  o("WAWebUserPrefsMeUser").getMeLidUserOrThrow().user,
                ),
              });
            if (p.status === "missing_org") {
              o("WAWebBackendApi").frontendFireAndForget(
                "syncOrgsInBackground",
                { bypassCooldown: !0, forceDirectory: !1 },
              );
              return;
            }
            if (p.status === "stale") {
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-notification] ignored an older member update",
                  ])),
              );
              return;
            }
            if (p.status === "viewer_removed") {
              (o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-notification] the viewer was removed from an org",
                  ])),
              ),
                o("WAWebBackendApi").frontendFireAndForget("applyOrgRows", {
                  isFullList: !0,
                  rows: p.orgs,
                }));
              return;
            }
            var f = Array.from(
              new Set(
                [].concat(
                  u.map(function (e) {
                    return e.lid;
                  }),
                  m,
                ),
              ),
            );
            (o("WAWebBackendApi").frontendFireAndForget("applyOrgContactRows", {
              createModels: !0,
              lids: f,
              rows: p.rows,
            }),
              o("WAWebBackendApi").frontendFireAndForget(
                "markOrgContactsChecked",
                { lids: f },
              ));
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      var n = { added: [], removedLids: [] };
      return (
        t.forEach(function (t) {
          var r = t == null ? null : g(t.member_lid);
          if (!(t == null || r == null))
            e: {
              var a = t.member_action;
              if (a === "ADD") {
                n.added.push(f(e, r, t));
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
    function f(e, t, n) {
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
    function g(e) {
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
    l.mexHandleOrgMemberUpdate = m;
  },
  98,
);
