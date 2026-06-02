__d(
  "WAWebGroupJoinSubgroupJob",
  [
    "WALogger",
    "WASmaxGroupsJoinLinkedGroupRPC",
    "WAWebBackendErrors",
    "WAWebGroupType",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      var n = t.groupType,
        r = t.parentGroupId,
        a = t.request,
        i = t.subgroupId,
        l = o("WAWebWidToJid").widToGroupJid(r),
        u = o("WAWebWidToJid").widToGroupJid(i),
        c =
          n === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
            ? "default_sub_group"
            : "sub_group",
        d = await o("WASmaxGroupsJoinLinkedGroupRPC").sendJoinLinkedGroupRPC({
          iqTo: l,
          joinLinkedGroupType: c,
          joinLinkedGroupJid: u,
        });
      e: {
        var m = d;
        if (
          ((typeof m == "object" && m !== null) || typeof m == "function") &&
          m.name === "JoinLinkedGroupResponseSuccess"
        ) {
          if (a)
            throw new (o("WAWebBackendErrors").UnexpectedJoinSubgroupResponse)(
              !1,
            );
          return { gid: r, status: 200 };
        }
        if (
          ((typeof m == "object" && m !== null) || typeof m == "function") &&
          m.name === "JoinLinkedGroupResponseGroupJoinRequestSuccess"
        ) {
          if (!a)
            throw new (o("WAWebBackendErrors").UnexpectedJoinSubgroupResponse)(
              !0,
            );
          return { gid: r, status: 200 };
        }
        if (
          ((typeof m == "object" && m !== null) || typeof m == "function") &&
          m.name === "JoinLinkedGroupResponseClientError" &&
          ((typeof m.value == "object" && m.value !== null) ||
            typeof m.value == "function") &&
          "errorJoinLinkedGroupClientErrors" in m.value
        ) {
          var p = m.value.errorJoinLinkedGroupClientErrors;
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "joinSubgroup failed: ",
                  "",
                ])),
              d.name,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                Number(p.value.code),
              ),
            )
          );
          break e;
        }
        if (
          ((typeof m == "object" && m !== null) || typeof m == "function") &&
          m.name === "JoinLinkedGroupResponseServerError" &&
          ((typeof m.value == "object" && m.value !== null) ||
            typeof m.value == "function") &&
          "errorServerErrors" in m.value
        ) {
          var _ = m.value.errorServerErrors;
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "joinSubgroup failed: ",
                  "",
                ])),
              d.name,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                Number(_.value.code),
              ),
            )
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            m,
        );
      }
    }
    l.joinSubgroup = u;
  },
  98,
);
