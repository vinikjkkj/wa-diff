__d(
  "WAWebMexOrgMemberUpdateNotificationHandler",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBOrg",
    "WAWebDBOrgMemberDelta",
    "WAWebMexOrgMemberUpdateNotificationHandlerQuery.graphql",
    "WAWebOrgGatingUtils",
    "WAWebOrgMemberDisplayName",
    "WAWebOrgMembersPhash",
    "WAWebSchemaOrg",
    "WAWebUserUtils",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    e !== void 0 ||
      (e = n("WAWebMexOrgMemberUpdateNotificationHandlerQuery.graphql"));
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = t.xwa2_notify_org_on_member_update;
          if (a == null)
            throw r("err")("unexpected null xwa2_notify_org_on_member_update");
          if (o("WAWebOrgGatingUtils").isOrgInfoDisplayEnabled()) {
            var i = a.org_id,
              l = a.org_member_updated_ts_usec,
              s = b(i, (n = a.members) != null ? n : []),
              u = s.added,
              f = s.removedLids,
              g = s.updated,
              h = o("WAWebUserUtils").getMeLidUserOrThrow().user,
              C = yield o("WAWebDBOrgMemberDelta").applyOrgMemberDelta(i, {
                added: u,
                memberUpdatedTsUsec: l,
                removedLids: f,
                removesViewer: f.includes(h),
                updated: g,
              });
            if (C.status === "missing_org") {
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
            if (C.status === "stale") {
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-notification] ignored an older member update",
                  ])),
              );
              return;
            }
            if (C.status === "viewer_removed") {
              (o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-notification] the viewer was removed from an org",
                  ])),
              ),
                o("WAWebBackendApi").frontendFireAndForget("applyOrgRows", {
                  isFullList: !0,
                  rows: C.orgs,
                }));
              return;
            }
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-notification] applied added=",
                  " removed=",
                  " updated=",
                  "",
                ])),
              u.length,
              f.length,
              g.length,
            );
            var v = Array.from(
              new Set(
                [].concat(
                  u.map(function (e) {
                    return e.lid;
                  }),
                  f,
                  g.map(function (e) {
                    return e.lid;
                  }),
                ),
              ),
            );
            (o("WAWebBackendApi").frontendFireAndForget("applyOrgContactRows", {
              createModels: !0,
              lids: v,
              rows: C.rows,
            }),
              g.some(function (e) {
                return e.lid === h;
              }) &&
                (o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-notification] the viewer's membership changed, syncing orgs",
                    ])),
                ),
                o("WAWebBackendApi").frontendFireAndForget(
                  "syncOrgsInBackground",
                  { bypassCooldown: !0, forceDirectory: !1 },
                )),
              C.org.directoryIsComplete === !0 && (yield y(i, a.phash, l)));
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o("WAWebDBOrg").getOrgContacts(e),
            a =
              (yield o("WAWebOrgMembersPhash").computeOrgMembersPhash(r)) === t;
          (a && (yield o("WAWebDBOrg").markOrgDirectoryFresh(e, n, r.length)),
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-notification] stored directory hash matches=",
                  "",
                ])),
              String(a),
            ));
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      var n = { added: [], removedLids: [], updated: [] };
      return (
        t.forEach(function (t) {
          var r = t == null ? null : S(t.member_lid);
          if (!(t == null || r == null))
            e: {
              var a = t.member_action;
              if (a === "ADD") {
                n.added.push(v(e, r, t));
                break e;
              }
              if (a === "REMOVE") {
                n.removedLids.push(r);
                break e;
              }
              if (a === "UPDATE") {
                n.updated.push({
                  lid: r,
                  memberTag: t.member_tag,
                  role:
                    t.role == null
                      ? null
                      : o("WAWebSchemaOrg").OrgMemberRole.cast(t.role),
                });
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
    function v(e, t, n) {
      var r, a, i;
      return {
        firstName: (r = n.display_name) != null ? r : "",
        lastName: n.display_last_name,
        lid: t,
        memberName: o("WAWebOrgMemberDisplayName").getOrgMemberFullName(
          (a = n.display_name) != null ? a : "",
          n.display_last_name,
        ),
        memberTag: (i = n.member_tag) != null ? i : "",
        orgId: e,
        role:
          n.role == null
            ? null
            : o("WAWebSchemaOrg").OrgMemberRole.cast(n.role),
        username: o("WAWebUsernameTypes").asMaybeUsername(n.username),
      };
    }
    function S(e) {
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
    l.mexHandleOrgMemberUpdate = g;
  },
  98,
);
