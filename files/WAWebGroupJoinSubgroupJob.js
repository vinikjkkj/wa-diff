__d(
  "WAWebGroupJoinSubgroupJob",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WASmaxGroupsJoinLinkedGroupRPC",
    "WAWebBackendErrors",
    "WAWebGroupMembershipFormGating",
    "WAWebGroupType",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("JSResourceForInteraction")("WAWebMexGroupJoinJob").__setRef(
        "WAWebGroupJoinSubgroupJob",
      );
    async function c(t) {
      var n = t.groupType,
        r = t.parentGroupId,
        a = t.request,
        i = t.subgroupId;
      if (
        n === o("WAWebGroupType").GroupType.LINKED_SUBGROUP &&
        o("WAWebGroupMembershipFormGating").isMexGroupJoinEnabled()
      )
        return d({ parentGroupId: r, request: a, subgroupId: i });
      var l = o("WAWebWidToJid").widToGroupJid(r),
        u = o("WAWebWidToJid").widToGroupJid(i),
        c =
          n === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
            ? "default_sub_group"
            : "sub_group",
        m = await o("WASmaxGroupsJoinLinkedGroupRPC").sendJoinLinkedGroupRPC({
          iqTo: l,
          joinLinkedGroupType: c,
          joinLinkedGroupJid: u,
        });
      e: {
        var p = m;
        if (
          ((typeof p == "object" && p !== null) || typeof p == "function") &&
          p.name === "JoinLinkedGroupResponseSuccess"
        ) {
          if (a)
            throw new (o("WAWebBackendErrors").UnexpectedJoinSubgroupResponse)(
              !1,
            );
          return { gid: r, status: 200 };
        }
        if (
          ((typeof p == "object" && p !== null) || typeof p == "function") &&
          p.name === "JoinLinkedGroupResponseGroupJoinRequestSuccess"
        ) {
          if (!a)
            throw new (o("WAWebBackendErrors").UnexpectedJoinSubgroupResponse)(
              !0,
            );
          return { gid: r, status: 200 };
        }
        if (
          ((typeof p == "object" && p !== null) || typeof p == "function") &&
          p.name === "JoinLinkedGroupResponseClientError" &&
          ((typeof p.value == "object" && p.value !== null) ||
            typeof p.value == "function") &&
          "errorJoinLinkedGroupClientErrors" in p.value
        ) {
          var _ = p.value.errorJoinLinkedGroupClientErrors;
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "joinSubgroup failed: ",
                  "",
                ])),
              m.name,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                Number(_.value.code),
              ),
            )
          );
          break e;
        }
        if (
          ((typeof p == "object" && p !== null) || typeof p == "function") &&
          p.name === "JoinLinkedGroupResponseServerError" &&
          ((typeof p.value == "object" && p.value !== null) ||
            typeof p.value == "function") &&
          "errorServerErrors" in p.value
        ) {
          var f = p.value.errorServerErrors;
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "joinSubgroup failed: ",
                  "",
                ])),
              m.name,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                Number(f.value.code),
              ),
            )
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            p,
        );
      }
    }
    async function d(e) {
      var t = e.parentGroupId,
        n = e.request,
        r = e.subgroupId,
        a = await u.load(),
        i = a.MexGroupJoinResult,
        l = a.mexJoinLinkedSubgroupJob,
        s = await l(t, r),
        c = s === i.RequestCreated;
      if (c !== n)
        throw new (o("WAWebBackendErrors").UnexpectedJoinSubgroupResponse)(c);
      return { gid: t, status: 200 };
    }
    l.joinSubgroup = c;
  },
  98,
);
