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
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    e !== void 0 ||
      (e = n("WAWebMexOrgMemberUpdateNotificationHandlerQuery.graphql"));
    async function g(e, t) {
      var n,
        a = t.xwa2_notify_org_on_member_update;
      if (a == null)
        throw r("err")("unexpected null xwa2_notify_org_on_member_update");
      if (o("WAWebOrgGatingUtils").isOrgsEnabled()) {
        var i = a.org_id,
          l = a.org_member_updated_ts_usec,
          p = y(i, (n = a.members) != null ? n : []),
          _ = p.added,
          f = p.removedLids,
          g = p.updated,
          C = o("WAWebUserUtils").getMeLidUserOrThrow().user,
          b = await o("WAWebDBOrgMemberDelta").applyOrgMemberDelta(i, {
            added: _,
            memberUpdatedTsUsec: l,
            removedLids: f,
            removesViewer: f.includes(C),
            updated: g,
          });
        if (b.status === "missing_org") {
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[org-notification] update for an org not stored, syncing orgs",
              ])),
          ),
            o("WAWebBackendApi").frontendFireAndForget("syncOrgsInBackground", {
              bypassCooldown: !0,
              forceDirectory: !1,
            }));
          return;
        }
        if (b.status === "stale") {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[org-notification] ignored an older member update",
              ])),
          );
          return;
        }
        if (b.status === "viewer_removed") {
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[org-notification] the viewer was removed from an org",
              ])),
          ),
            o("WAWebBackendApi").frontendFireAndForget("applyOrgRows", {
              isFullList: !0,
              rows: b.orgs,
            }));
          return;
        }
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[org-notification] applied added=",
              " removed=",
              " updated=",
              "",
            ])),
          _.length,
          f.length,
          g.length,
        );
        var v = Array.from(
          new Set(
            [].concat(
              _.map(function (e) {
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
          rows: b.rows,
        }),
          g.some(function (e) {
            return e.lid === C;
          }) &&
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-notification] the viewer's membership changed, syncing orgs",
                ])),
            ),
            o("WAWebBackendApi").frontendFireAndForget("syncOrgsInBackground", {
              bypassCooldown: !0,
              forceDirectory: !1,
            })),
          b.org.directoryIsComplete === !0 && (await h(i, a.phash, l)));
      }
    }
    async function h(e, t, n) {
      var r = await o("WAWebDBOrg").getOrgContacts(e),
        a = (await o("WAWebOrgMembersPhash").computeOrgMembersPhash(r)) === t;
      (a && (await o("WAWebDBOrg").markOrgDirectoryFresh(e, n, r.length)),
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "[org-notification] stored directory hash matches=",
              "",
            ])),
          String(a),
        ));
    }
    function y(e, t) {
      var n = { added: [], removedLids: [], updated: [] };
      return (
        t.forEach(function (t) {
          var r = t == null ? null : b(t.member_lid);
          if (!(t == null || r == null))
            e: {
              var a = t.member_action;
              if (a === "ADD") {
                n.added.push(C(e, r, t));
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
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
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
    function C(e, t, n) {
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
    function b(e) {
      try {
        return o("WAWebWidFactory").createUserLidOrThrow(e).user;
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
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
