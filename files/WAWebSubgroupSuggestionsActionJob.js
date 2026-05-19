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
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.action,
            n = e.isLidAddressingMode,
            r = e.parentGroupId,
            a = e.subgroupSuggestions,
            i = o("WAWebLidMigrationUtils").toAddressingModeFactory(n),
            l = 0,
            u = a.map(function (e) {
              var t = e.creator,
                n = i(t);
              return (
                n || l++,
                babelHelpers.extends({}, e, { creator: n != null ? n : t })
              );
            });
          l > 0 &&
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[subgroup-suggestions] Failed to normalise ",
                    " creator wids to ",
                    "",
                  ])),
                l,
                n ? "LID" : "PN",
              )
              .sendLogs("subgroup-suggestions-failed-to-normalise-wids");
          var d = u.map(function (e) {
              return {
                subGroupSuggestionCreator: o("WAWebWidToJid").widToUserJid(
                  e.creator,
                ),
                subGroupSuggestionJid: o("WAWebWidToJid").widToGroupJid(e.id),
              };
            }),
            m,
            _,
            f;
          t === c.APPROVE
            ? (m = { subGroupSuggestionArgs: d })
            : t === c.REJECT
              ? (_ = { subGroupSuggestionArgs: d })
              : (f = {
                  subGroupSuggestionArgs: u.map(function (e) {
                    return {
                      subGroupSuggestionJid: o("WAWebWidToJid").widToGroupJid(
                        e.id,
                      ),
                    };
                  }),
                });
          var g = yield o(
            "WASmaxGroupsSubGroupSuggestionsActionRPC",
          ).sendSubGroupSuggestionsActionRPC({
            iqTo: o("WAWebWidToJid").widToGroupJid(r),
            approveArgs: m,
            rejectArgs: _,
            cancelArgs: f,
          });
          e: {
            var h = g;
            if (
              ((typeof h == "object" && h !== null) ||
                typeof h == "function") &&
              h.name === "SubGroupSuggestionsActionResponseSuccess" &&
              "value" in h
            ) {
              var y,
                C,
                b = h.value,
                v;
              return (
                t === c.APPROVE
                  ? (v = b.subGroupSuggestionsActionApprove)
                  : t === c.REJECT
                    ? (v = b.subGroupSuggestionsActionReject)
                    : (v = b.subGroupSuggestionsActionCancel),
                (y =
                  (C = v) == null || (C = C.subGroupSuggestion) == null
                    ? void 0
                    : C.map(function (e) {
                        var r;
                        if (t === c.APPROVE) {
                          var a;
                          r =
                            (a = e.subGroupSuggestionsApprovalErrors) == null
                              ? void 0
                              : a.value.error;
                        } else {
                          var i;
                          r =
                            (i =
                              e.subGroupSuggestionsActionSubGroupSuggestionNotFoundMixin) ==
                            null
                              ? void 0
                              : i.error;
                        }
                        var l = o("WAWebWidFactory").createWid(e.jid),
                          s = n
                            ? o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow()
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
                          error: r,
                        };
                      })) != null
                  ? y
                  : []
              );
              break e;
            }
            if (
              ((typeof h == "object" && h !== null) ||
                typeof h == "function") &&
              h.name === "SubGroupSuggestionsActionResponseClientError" &&
              "value" in h
            ) {
              var S = h.value,
                R = S.errorSubGroupSuggestionsActionClientErrors;
              return p(R.value);
            }
            if (
              ((typeof h == "object" && h !== null) ||
                typeof h == "function") &&
              h.name === "SubGroupSuggestionsActionResponseServerError" &&
              "value" in h
            ) {
              var L = h.value;
              return p(L.errorServerErrors.value);
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                h,
            );
          }
        })),
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
