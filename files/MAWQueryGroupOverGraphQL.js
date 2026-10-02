__d(
  "MAWQueryGroupOverGraphQL",
  [
    "E2EEMetadataMailboxFetchGroupInfoV4Mutation",
    "FBLogger",
    "WAJids",
    "WAResultOrError",
    "WATimeUtils",
    "WmiOds",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t,
              n,
              a,
              i,
              l,
              s,
              u,
              c = yield o(
                "E2EEMetadataMailboxFetchGroupInfoV4Mutation",
              ).fetchGroupInfoFromMIOverGraphQLV4({
                request_type: 0,
                transport_thread_fbid: o("WAJids").groupIdFromJid(e),
              }),
              d = c == null ? void 0 : c.xfb_fetch_group_info_from_mi_v4;
            if (d == null || d.success !== !0)
              return (
                o("WmiOds").wmiOdsBump("wa_query_group", "fail"),
                o("WAResultOrError").makeError(
                  "QueryGroupInfoResponseServerError",
                )
              );
            var m = ((t = d.participants) != null ? t : []).map(function (e) {
                var t, n;
                return {
                  addressable: (t = e.is_addressable) != null ? t : !0,
                  type:
                    e.type === "E2EE_GROUP_PARTICIPANT_TYPE_ADMIN"
                      ? "admin"
                      : e.type === "E2EE_GROUP_PARTICIPANT_TYPE_SUPER_ADMIN"
                        ? "superadmin"
                        : "participant",
                  user: o("WAJids").toMsgrUserJid(
                    (n = e.contact_id) != null ? n : "",
                  ),
                };
              }),
              p = {
                creationTs: o("WATimeUtils").castMilliSecondsToUnixTime(
                  parseInt((n = d.creation_ts_ms) != null ? n : "0", 10),
                ),
                creator:
                  d.creator_id != null
                    ? o("WAJids").toMsgrUserJid(d.creator_id)
                    : void 0,
                jid:
                  d.transport_thread_fbid != null
                    ? o("WAJids").toGroupJid(d.transport_thread_fbid)
                    : e,
                memberAddMode:
                  d.participant_update_mode === "OPEN"
                    ? "all_member_add"
                    : "admin_add",
                participants: m.map(function (e) {
                  return o("WAResultOrError").makeResult(e);
                }),
                participantVersion:
                  d.participant_version_id != null
                    ? String(d.participant_version_id)
                    : void 0,
                subject: {
                  content:
                    (a = (i = d.subject_change) == null ? void 0 : i.subject) !=
                    null
                      ? a
                      : "",
                  ts: o("WATimeUtils").castMilliSecondsToUnixTime(
                    parseInt(
                      (l =
                        (s = d.subject_change) == null
                          ? void 0
                          : s.subject_change_ts_ms) != null
                        ? l
                        : "0",
                      10,
                    ),
                  ),
                  user:
                    ((u = d.subject_change) == null
                      ? void 0
                      : u.subject_changer_id) != null
                      ? o("WAJids").toMsgrUserJid(
                          d.subject_change.subject_changer_id,
                        )
                      : void 0,
                },
              };
            return (
              o("WmiOds").wmiOdsBump("wa_query_group", "ok"),
              o("WAResultOrError").makeResult(p)
            );
          } catch (e) {
            return (
              o("WmiOds").wmiOdsBump("wa_query_group", "fail"),
              r("FBLogger")("wmi")
                .tags(["MiSOTGroupMetadataUpdate"])
                .catching(r("getErrorSafe")(e))
                .mustfix("Failed to query group info from MI"),
              o("WAResultOrError").makeError(
                "QueryGroupInfoResponseServerError",
              )
            );
          }
        })),
        s.apply(this, arguments)
      );
    }
    l.queryGroupOverGraphQL = e;
  },
  98,
);
