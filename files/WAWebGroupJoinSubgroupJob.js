__d(
  "WAWebGroupJoinSubgroupJob",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WASmaxGroupsJoinLinkedGroupRPC",
    "WAWebBackendErrors",
    "WAWebGroupMembershipFormGating",
    "WAWebGroupType",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = r("JSResourceForInteraction")("WAWebMexGroupJoinJob").__setRef(
        "WAWebGroupJoinSubgroupJob",
      );
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.groupType,
            a = t.parentGroupId,
            i = t.request,
            l = t.subgroupId;
          if (
            r === o("WAWebGroupType").GroupType.LINKED_SUBGROUP &&
            o("WAWebGroupMembershipFormGating").isMexGroupJoinEnabled()
          )
            return p({ parentGroupId: a, request: i, subgroupId: l });
          var c = o("WAWebWidToJid").widToGroupJid(a),
            d = o("WAWebWidToJid").widToGroupJid(l),
            m =
              r === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
                ? "default_sub_group"
                : "sub_group",
            _ = yield o(
              "WASmaxGroupsJoinLinkedGroupRPC",
            ).sendJoinLinkedGroupRPC({
              iqTo: c,
              joinLinkedGroupType: m,
              joinLinkedGroupJid: d,
            });
          e: {
            var f = _;
            if (
              ((typeof f == "object" && f !== null) ||
                typeof f == "function") &&
              f.name === "JoinLinkedGroupResponseSuccess"
            ) {
              if (i)
                throw new (o(
                  "WAWebBackendErrors",
                ).UnexpectedJoinSubgroupResponse)(!1);
              return { gid: a, status: 200 };
            }
            if (
              ((typeof f == "object" && f !== null) ||
                typeof f == "function") &&
              f.name === "JoinLinkedGroupResponseGroupJoinRequestSuccess"
            ) {
              if (!i)
                throw new (o(
                  "WAWebBackendErrors",
                ).UnexpectedJoinSubgroupResponse)(!0);
              return { gid: a, status: 200 };
            }
            if (
              ((typeof f == "object" && f !== null) ||
                typeof f == "function") &&
              f.name === "JoinLinkedGroupResponseClientError" &&
              ((typeof f.value == "object" && f.value !== null) ||
                typeof f.value == "function") &&
              "errorJoinLinkedGroupClientErrors" in f.value
            ) {
              var g = f.value.errorJoinLinkedGroupClientErrors;
              return (
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "joinSubgroup failed: ",
                      "",
                    ])),
                  _.name,
                ),
                (u || (u = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(g.value.code),
                  ),
                )
              );
              break e;
            }
            if (
              ((typeof f == "object" && f !== null) ||
                typeof f == "function") &&
              f.name === "JoinLinkedGroupResponseServerError" &&
              ((typeof f.value == "object" && f.value !== null) ||
                typeof f.value == "function") &&
              "errorServerErrors" in f.value
            ) {
              var h = f.value.errorServerErrors;
              return (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "joinSubgroup failed: ",
                      "",
                    ])),
                  _.name,
                ),
                (u || (u = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(h.value.code),
                  ),
                )
              );
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                f,
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.parentGroupId,
            n = e.request,
            r = e.subgroupId,
            a = yield c.load(),
            i = a.MexGroupJoinResult,
            l = a.mexJoinLinkedSubgroupJob,
            s = yield l(t, r),
            u = s === i.RequestCreated;
          if (u !== n)
            throw new (o("WAWebBackendErrors").UnexpectedJoinSubgroupResponse)(
              u,
            );
          return { gid: t, status: 200 };
        })),
        _.apply(this, arguments)
      );
    }
    l.joinSubgroup = d;
  },
  98,
);
