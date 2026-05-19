__d(
  "WAWebGroupJoinSubgroupJob",
  [
    "Promise",
    "WALogger",
    "WASmaxGroupsJoinLinkedGroupRPC",
    "WAWebBackendErrors",
    "WAWebGroupType",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.groupType,
            a = t.parentGroupId,
            i = t.request,
            l = t.subgroupId,
            c = o("WAWebWidToJid").widToGroupJid(a),
            d = o("WAWebWidToJid").widToGroupJid(l),
            m =
              r === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
                ? "default_sub_group"
                : "sub_group",
            p = yield o(
              "WASmaxGroupsJoinLinkedGroupRPC",
            ).sendJoinLinkedGroupRPC({
              iqTo: c,
              joinLinkedGroupType: m,
              joinLinkedGroupJid: d,
            });
          e: {
            var _ = p;
            if (
              ((typeof _ == "object" && _ !== null) ||
                typeof _ == "function") &&
              _.name === "JoinLinkedGroupResponseSuccess"
            ) {
              if (i)
                throw new (o(
                  "WAWebBackendErrors",
                ).UnexpectedJoinSubgroupResponse)(!1);
              return { gid: a, status: 200 };
            }
            if (
              ((typeof _ == "object" && _ !== null) ||
                typeof _ == "function") &&
              _.name === "JoinLinkedGroupResponseGroupJoinRequestSuccess"
            ) {
              if (!i)
                throw new (o(
                  "WAWebBackendErrors",
                ).UnexpectedJoinSubgroupResponse)(!0);
              return { gid: a, status: 200 };
            }
            if (
              ((typeof _ == "object" && _ !== null) ||
                typeof _ == "function") &&
              _.name === "JoinLinkedGroupResponseClientError" &&
              ((typeof _.value == "object" && _.value !== null) ||
                typeof _.value == "function") &&
              "errorJoinLinkedGroupClientErrors" in _.value
            ) {
              var f = _.value.errorJoinLinkedGroupClientErrors;
              return (
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "joinSubgroup failed: ",
                      "",
                    ])),
                  p.name,
                ),
                (u || (u = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(f.value.code),
                  ),
                )
              );
              break e;
            }
            if (
              ((typeof _ == "object" && _ !== null) ||
                typeof _ == "function") &&
              _.name === "JoinLinkedGroupResponseServerError" &&
              ((typeof _.value == "object" && _.value !== null) ||
                typeof _.value == "function") &&
              "errorServerErrors" in _.value
            ) {
              var g = _.value.errorServerErrors;
              return (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "joinSubgroup failed: ",
                      "",
                    ])),
                  p.name,
                ),
                (u || (u = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(g.value.code),
                  ),
                )
              );
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                _,
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.joinSubgroup = c;
  },
  98,
);
