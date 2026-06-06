__d(
  "WAWebLidMappingUsernameLearnUtils",
  [
    "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
    "WAWebGroupType",
    "WAWebHandleGroupNotificationConst",
    "WAWebInsertUsernameChangeSystemMsg",
    "WAWebSetUsernameJob",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
        n = o("WAWebUsernameGatingUtils").lidGroupMigrationNonMemberIQEnabled(),
        r = [],
        a = [];
      if (
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
                if (
                  (r.push({
                    id: o("WAWebWidFactory").asUserWidOrThrow(i),
                    lid: l ? o("WAWebWidFactory").asUserWidOrThrow(l) : null,
                    phoneNumber: s
                      ? o("WAWebWidFactory").asUserWidOrThrow(s)
                      : null,
                    displayName: n,
                  }),
                  t && u != null)
                ) {
                  var c = o("WAWebUsernameTypes").asMaybeUsername(u);
                  c != null &&
                    a.push({
                      userId: o("WAWebWidFactory").asUserWidOrThrow(i),
                      username: c,
                    });
                }
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
              var u = o("WAWebSetUsernameJob").maybeCreateSetUsernameInfoJobArg(
                {
                  userId: o("WAWebWidFactory").asUserWidOrThrow(e.owner),
                  username: e.creatorUsername,
                  usernameCountryCode: e.creatorCountryCode,
                },
              );
              u && a.push(u);
            }
            if (e.subjectOwner && e.subjectOwnerUsername != null) {
              var c = e.subjectOwner,
                d = o("WAWebUsernameTypes").asMaybeUsername(
                  e.subjectOwnerUsername,
                );
              d != null &&
                a.push({
                  username: d,
                  userId: o("WAWebWidFactory").asUserWidOrThrow(c),
                });
            }
            if (e.descOwner && e.descOwnerUsername != null) {
              var m = e.descOwner,
                p = o("WAWebUsernameTypes").asMaybeUsername(
                  e.descOwnerUsername,
                );
              p != null &&
                a.push({
                  username: p,
                  userId: o("WAWebWidFactory").asUserWidOrThrow(m),
                });
            }
          }
        }),
        await o(
          "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
        ).createOrReplaceDisplayNamesAndLidPnMappingsInBatches(r, !0),
        t && a.length > 0)
      ) {
        var i = await o("WAWebSetUsernameJob").setUsernamesJob(a);
        await o(
          "WAWebInsertUsernameChangeSystemMsg",
        ).maybeInsertUsernameChangeSystemMsgs(
          a,
          i,
          "processParsedGroupInfosForLidMappingAndUsernames",
        );
      }
    }
    async function s(e) {
      var t = e.flushImmediately,
        n = e.notification,
        r = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
        a = [],
        i = [];
      n.actions.forEach(function (e) {
        var t = o("WAWebHandleGroupNotificationConst").getMappingsFromAction(e);
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
                if (n != null) {
                  var r = o("WAWebUsernameTypes").asMaybeUsername(n);
                  r != null &&
                    i.push({
                      userId: o("WAWebWidFactory").asUserWidOrThrow(t),
                      username: r,
                    });
                }
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
              var f = o("WAWebSetUsernameJob").maybeCreateSetUsernameInfoJobArg(
                {
                  userId: o("WAWebWidFactory").asUserWidOrThrow(m),
                  username: d,
                  usernameCountryCode: c,
                },
              );
              f && i.push(f);
            }
            if (p != null && _ != null) {
              var g = o("WAWebUsernameTypes").asMaybeUsername(_);
              g != null &&
                i.push({
                  username: g,
                  userId: o("WAWebWidFactory").asUserWidOrThrow(p),
                });
            }
          }
          if (e.actionType === o("WAWebGroupType").GROUP_ACTIONS.SUBJECT) {
            var h = e.s_o,
              y = e.subjectOwnerUsername;
            if (h != null && y != null) {
              var C = o("WAWebUsernameTypes").asMaybeUsername(y);
              C != null &&
                i.push({
                  username: C,
                  userId: o("WAWebWidFactory").asUserWidOrThrow(h),
                });
            }
          } else
            e.actionType ===
              o("WAWebGroupType").GROUP_ACTIONS.CREATED_MEMBERSHIP_REQUESTS &&
              e.requests.forEach(function (e) {
                var t = e.username,
                  n = e.wid;
                if (t != null) {
                  var r = o("WAWebUsernameTypes").asMaybeUsername(t);
                  r != null &&
                    i.push({
                      username: r,
                      userId: o("WAWebWidFactory").asUserWidOrThrow(n),
                    });
                }
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
          var d = o("WAWebSetUsernameJob").maybeCreateSetUsernameInfoJobArg({
            userId: o("WAWebWidFactory").asUserWidOrThrow(s),
            username: u,
            usernameCountryCode: c,
          });
          d && i.push(d);
        }
      }
      if (
        (await o(
          "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
        ).createOrReplaceDisplayNamesAndLidPnMappingsInBatches(a, t),
        r && i.length > 0)
      ) {
        var m = await o("WAWebSetUsernameJob").setUsernamesJob(i);
        await o(
          "WAWebInsertUsernameChangeSystemMsg",
        ).maybeInsertUsernameChangeSystemMsgs(
          i,
          m,
          "processParsedGroupNotificationForLidMappingAndUsernames",
        );
      }
    }
    ((l.processParsedGroupInfosForLidMappingAndUsernames = e),
      (l.processParsedGroupNotificationForLidMappingAndUsernames = s));
  },
  98,
);
