__d(
  "WAWebLidMappingUsernameLearnUtils",
  [
    "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
    "WAWebGroupType",
    "WAWebHandleGroupNotificationConst",
    "WAWebSetUsernameJob",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
            n = o(
              "WAWebUsernameGatingUtils",
            ).lidGroupMigrationNonMemberIQEnabled(),
            r = [],
            a = [];
          (e.forEach(function (e) {
            var i;
            if (
              ((i = e.participants) == null ||
                i.forEach(function (e) {
                  var n = e.displayName,
                    i = e.id,
                    l = e.lid,
                    s = e.phoneNumber,
                    u = e.username;
                  (r.push({
                    id: o("WAWebWidFactory").asUserWidOrThrow(i),
                    lid: l ? o("WAWebWidFactory").asUserWidOrThrow(l) : null,
                    phoneNumber: s
                      ? o("WAWebWidFactory").asUserWidOrThrow(s)
                      : null,
                    displayName: n,
                  }),
                    t &&
                      u != null &&
                      a.push({
                        userId: o("WAWebWidFactory").asUserWidOrThrow(i),
                        username: u,
                      }));
                }),
              n)
            ) {
              if (
                (e.subjectOwner &&
                  r.push({
                    id: e.subjectOwner,
                    lid: e.subjectOwner.isLid() ? e.subjectOwner : null,
                    phoneNumber: e.subjectOwnerPn,
                  }),
                e.owner)
              ) {
                var l;
                r.push({
                  id: e.owner,
                  lid: (l = e.owner) != null && l.isLid() ? e.owner : null,
                  phoneNumber: e.creatorPn,
                });
              }
              if (e.descOwner) {
                var s;
                r.push({
                  id: e.descOwner,
                  lid:
                    (s = e.descOwner) != null && s.isLid() ? e.descOwner : null,
                  phoneNumber: e.descOwnerPn,
                });
              }
            }
            if (t) {
              if (e.owner) {
                var u = o(
                  "WAWebSetUsernameJob",
                ).maybeCreateSetUsernameInfoJobArg({
                  userId: o("WAWebWidFactory").asUserWidOrThrow(e.owner),
                  username: e.creatorUsername,
                  usernameCountryCode: e.creatorCountryCode,
                });
                u && a.push(u);
              }
              (e.subjectOwner &&
                e.subjectOwnerUsername != null &&
                a.push({
                  username: e.subjectOwnerUsername,
                  userId: o("WAWebWidFactory").asUserWidOrThrow(e.subjectOwner),
                }),
                e.descOwner &&
                  e.descOwnerUsername != null &&
                  a.push({
                    username: e.descOwnerUsername,
                    userId: o("WAWebWidFactory").asUserWidOrThrow(e.descOwner),
                  }));
            }
          }),
            yield o(
              "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
            ).createOrReplaceDisplayNamesAndLidPnMappingsInBatches(r, !0),
            t &&
              a.length > 0 &&
              (yield o("WAWebSetUsernameJob").setUsernamesJob(a)));
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.flushImmediately,
            n = e.notification,
            r = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
            a = [],
            i = [];
          n.actions.forEach(function (e) {
            var t = o(
              "WAWebHandleGroupNotificationConst",
            ).getMappingsFromAction(e);
            if ((a.push.apply(a, t), r)) {
              var n,
                l,
                s =
                  (n = e.participants) != null
                    ? n
                    : (l = e.groupInfo) == null
                      ? void 0
                      : l.participants;
              if (
                (s == null ||
                  s.forEach(function (e) {
                    var t = e.id,
                      n = e.username;
                    n != null &&
                      i.push({
                        userId: o("WAWebWidFactory").asUserWidOrThrow(t),
                        username: n,
                      });
                  }),
                e.groupInfo)
              ) {
                var u = e.groupInfo,
                  c = u.creatorCountryCode,
                  d = u.creatorUsername,
                  m = u.owner,
                  p = u.subjectOwner,
                  _ = u.subjectOwnerUsername;
                if (m != null) {
                  var f = o(
                    "WAWebSetUsernameJob",
                  ).maybeCreateSetUsernameInfoJobArg({
                    userId: o("WAWebWidFactory").asUserWidOrThrow(m),
                    username: d,
                    usernameCountryCode: c,
                  });
                  f && i.push(f);
                }
                p != null &&
                  _ != null &&
                  i.push({
                    username: _,
                    userId: o("WAWebWidFactory").asUserWidOrThrow(p),
                  });
              }
              if (e.actionType === o("WAWebGroupType").GROUP_ACTIONS.SUBJECT) {
                var g = e.s_o,
                  h = e.subjectOwnerUsername;
                g != null &&
                  h != null &&
                  i.push({
                    username: h,
                    userId: o("WAWebWidFactory").asUserWidOrThrow(g),
                  });
              } else
                e.actionType ===
                  o("WAWebGroupType").GROUP_ACTIONS
                    .CREATED_MEMBERSHIP_REQUESTS &&
                  e.requests.forEach(function (e) {
                    var t = e.username,
                      n = e.wid;
                    t != null &&
                      i.push({
                        username: t,
                        userId: o("WAWebWidFactory").asUserWidOrThrow(n),
                      });
                  });
            }
          });
          var l = o(
            "WAWebHandleGroupNotificationConst",
          ).getAuthorLidPnFieldsFromMeta(n);
          if ((l != null && a.push(l), r)) {
            var s = n.author,
              u = n.authorUsername,
              c = n.authorUsernameCountryCode;
            if (s != null) {
              var d = o("WAWebSetUsernameJob").maybeCreateSetUsernameInfoJobArg(
                {
                  userId: o("WAWebWidFactory").asUserWidOrThrow(s),
                  username: u,
                  usernameCountryCode: c,
                },
              );
              d && i.push(d);
            }
          }
          (yield o(
            "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
          ).createOrReplaceDisplayNamesAndLidPnMappingsInBatches(a, t),
            r &&
              i.length > 0 &&
              (yield o("WAWebSetUsernameJob").setUsernamesJob(i)));
        })),
        c.apply(this, arguments)
      );
    }
    ((l.processParsedGroupInfosForLidMappingAndUsernames = e),
      (l.processParsedGroupNotificationForLidMappingAndUsernames = u));
  },
  98,
);
