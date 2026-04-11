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
    function c(e, t, n, r) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i) {
            var l = o("WAWebWidToJid").widToGroupJid(t),
              c = o("WAWebWidToJid").widToGroupJid(r),
              d =
                a === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
                  ? "default_sub_group"
                  : "sub_group",
              m = yield o(
                "WASmaxGroupsJoinLinkedGroupRPC",
              ).sendJoinLinkedGroupRPC({
                iqTo: l,
                joinLinkedGroupType: d,
                joinLinkedGroupJid: c,
              });
            e: {
              var p = m;
              if (
                ((typeof p == "object" && p !== null) ||
                  typeof p == "function") &&
                p.name === "JoinLinkedGroupResponseSuccess"
              ) {
                if (i)
                  throw new (o(
                    "WAWebBackendErrors",
                  ).UnexpectedJoinSubgroupResponse)(!1);
                return { gid: t, status: 200 };
              }
              if (
                ((typeof p == "object" && p !== null) ||
                  typeof p == "function") &&
                p.name === "JoinLinkedGroupResponseGroupJoinRequestSuccess"
              ) {
                if (!i)
                  throw new (o(
                    "WAWebBackendErrors",
                  ).UnexpectedJoinSubgroupResponse)(!0);
                return { gid: t, status: 200 };
              }
              if (
                ((typeof p == "object" && p !== null) ||
                  typeof p == "function") &&
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
                  (u || (u = n("Promise"))).reject(
                    new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      Number(_.value.code),
                    ),
                  )
                );
                break e;
              }
              if (
                ((typeof p == "object" && p !== null) ||
                  typeof p == "function") &&
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
                  (u || (u = n("Promise"))).reject(
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
          },
        )),
        d.apply(this, arguments)
      );
    }
    l.joinSubgroup = c;
  },
  98,
);
