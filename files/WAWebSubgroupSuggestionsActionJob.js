__d(
  "WAWebSubgroupSuggestionsActionJob",
  [
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WASmaxGroupsSubGroupSuggestionsActionRPC",
    "WAWebBackendErrors",
    "WAWebCommunitySubgroupSuggestionsUtils",
    "WAWebLidMigrationUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = n("$InternalEnum").Mirrored(["APPROVE", "REJECT", "CANCEL"]);
    function d(e, t, n, r) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = o("WAWebLidMigrationUtils").toAddressingModeFactory(r),
              i = 0,
              l = t.map(function (e) {
                var t = e.creator,
                  n = a(t);
                return (
                  n || i++,
                  babelHelpers.extends({}, e, { creator: n != null ? n : t })
                );
              });
            i > 0 &&
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[subgroup-suggestions] Failed to normalise ",
                      " creator wids to ",
                      "",
                    ])),
                  i,
                  r ? "LID" : "PN",
                )
                .sendLogs("subgroup-suggestions-failed-to-normalise-wids");
            var u = l.map(function (e) {
                return {
                  subGroupSuggestionCreator: o("WAWebWidToJid").widToUserJid(
                    e.creator,
                  ),
                  subGroupSuggestionJid: o("WAWebWidToJid").widToGroupJid(e.id),
                };
              }),
              d,
              m,
              _;
            n === c.APPROVE
              ? (d = { subGroupSuggestionArgs: u })
              : n === c.REJECT
                ? (m = { subGroupSuggestionArgs: u })
                : (_ = {
                    subGroupSuggestionArgs: l.map(function (e) {
                      return {
                        subGroupSuggestionJid: o("WAWebWidToJid").widToGroupJid(
                          e.id,
                        ),
                      };
                    }),
                  });
            var f = yield o(
              "WASmaxGroupsSubGroupSuggestionsActionRPC",
            ).sendSubGroupSuggestionsActionRPC({
              iqTo: o("WAWebWidToJid").widToGroupJid(e),
              approveArgs: d,
              rejectArgs: m,
              cancelArgs: _,
            });
            e: {
              var g = f;
              if (
                ((typeof g == "object" && g !== null) ||
                  typeof g == "function") &&
                g.name === "SubGroupSuggestionsActionResponseSuccess" &&
                "value" in g
              ) {
                var h,
                  y,
                  C = g.value,
                  b;
                return (
                  n === c.APPROVE
                    ? (b = C.subGroupSuggestionsActionApprove)
                    : n === c.REJECT
                      ? (b = C.subGroupSuggestionsActionReject)
                      : (b = C.subGroupSuggestionsActionCancel),
                  (h =
                    (y = b) == null || (y = y.subGroupSuggestion) == null
                      ? void 0
                      : y.map(function (e) {
                          var t;
                          if (n === c.APPROVE) {
                            var a;
                            t =
                              (a = e.subGroupSuggestionsApprovalErrors) == null
                                ? void 0
                                : a.value.error;
                          } else {
                            var i;
                            t =
                              (i =
                                e.subGroupSuggestionsActionSubGroupSuggestionNotFoundMixin) ==
                              null
                                ? void 0
                                : i.error;
                          }
                          var l = o("WAWebWidFactory").createWid(e.jid),
                            s = r
                              ? o(
                                  "WAWebUserPrefsMeUser",
                                ).getMeDeviceLidOrThrow()
                              : o(
                                  "WAWebUserPrefsMeUser",
                                ).getMeDevicePnOrThrow_DO_NOT_USE(),
                            u =
                              e.creator != null
                                ? o("WAWebWidFactory").createWid(e.creator)
                                : s;
                          return {
                            id: o(
                              "WAWebCommunitySubgroupSuggestionsUtils",
                            ).getSubgroupSuggestionId(l, u),
                            error: t,
                          };
                        })) != null
                    ? h
                    : []
                );
                break e;
              }
              if (
                ((typeof g == "object" && g !== null) ||
                  typeof g == "function") &&
                g.name === "SubGroupSuggestionsActionResponseClientError" &&
                "value" in g
              ) {
                var v = g.value,
                  S = v.errorSubGroupSuggestionsActionClientErrors;
                return p(S.value);
              }
              if (
                ((typeof g == "object" && g !== null) ||
                  typeof g == "function") &&
                g.name === "SubGroupSuggestionsActionResponseServerError" &&
                "value" in g
              ) {
                var R = g.value;
                return p(R.errorServerErrors.value);
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  g,
              );
            }
          },
        )),
        m.apply(this, arguments)
      );
    }
    function p(t) {
      var r = t.code,
        a = t.text;
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "subgroupSuggestionsAction failed: ",
              ":",
              "",
            ])),
          r,
          a,
        ),
        (u || (u = n("Promise"))).reject(
          new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(r), a),
        )
      );
    }
    ((l.SubgroupSuggestionAction = c), (l.sendSubgroupSuggestionsAction = d));
  },
  98,
);
