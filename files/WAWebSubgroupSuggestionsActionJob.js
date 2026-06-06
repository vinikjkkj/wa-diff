__d(
  "WAWebSubgroupSuggestionsActionJob",
  [
    "$InternalEnum",
    "WALogger",
    "WASmaxGroupsSubGroupSuggestionsActionRPC",
    "WAWebBackendErrors",
    "WAWebCommunitySubgroupSuggestionsUtils",
    "WAWebLidMigrationUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = n("$InternalEnum").Mirrored(["APPROVE", "REJECT", "CANCEL"]);
    async function c(t) {
      var n = t.action,
        r = t.isLidAddressingMode,
        a = t.parentGroupId,
        i = t.subgroupSuggestions,
        l = o("WAWebLidMigrationUtils").toAddressingModeFactory(r),
        s = 0,
        c = i.map(function (e) {
          var t = e.creator,
            n = l(t);
          return (
            n || s++,
            babelHelpers.extends({}, e, { creator: n != null ? n : t })
          );
        });
      s > 0 &&
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[subgroup-suggestions] Failed to normalise ",
                " creator wids to ",
                "",
              ])),
            s,
            r ? "LID" : "PN",
          )
          .sendLogs("subgroup-suggestions-failed-to-normalise-wids");
      var m = c.map(function (e) {
          return {
            subGroupSuggestionCreator: o("WAWebWidToJid").widToUserJid(
              e.creator,
            ),
            subGroupSuggestionJid: o("WAWebWidToJid").widToGroupJid(e.id),
          };
        }),
        p,
        _,
        f;
      n === u.APPROVE
        ? (p = { subGroupSuggestionArgs: m })
        : n === u.REJECT
          ? (_ = { subGroupSuggestionArgs: m })
          : (f = {
              subGroupSuggestionArgs: c.map(function (e) {
                return {
                  subGroupSuggestionJid: o("WAWebWidToJid").widToGroupJid(e.id),
                };
              }),
            });
      var g = await o(
        "WASmaxGroupsSubGroupSuggestionsActionRPC",
      ).sendSubGroupSuggestionsActionRPC({
        iqTo: o("WAWebWidToJid").widToGroupJid(a),
        approveArgs: p,
        rejectArgs: _,
        cancelArgs: f,
      });
      e: {
        var h = g;
        if (
          ((typeof h == "object" && h !== null) || typeof h == "function") &&
          h.name === "SubGroupSuggestionsActionResponseSuccess" &&
          "value" in h
        ) {
          var y,
            C,
            b = h.value,
            v;
          return (
            n === u.APPROVE
              ? (v = b.subGroupSuggestionsActionApprove)
              : n === u.REJECT
                ? (v = b.subGroupSuggestionsActionReject)
                : (v = b.subGroupSuggestionsActionCancel),
            (y =
              (C = v) == null || (C = C.subGroupSuggestion) == null
                ? void 0
                : C.map(function (e) {
                    var t;
                    if (n === u.APPROVE) {
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
                        ? o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow()
                        : o(
                            "WAWebUserPrefsMeUser",
                          ).getMeDevicePnOrThrow_DO_NOT_USE(),
                      c =
                        e.creator != null
                          ? o("WAWebWidFactory").createWid(e.creator)
                          : s;
                    return {
                      id: o(
                        "WAWebCommunitySubgroupSuggestionsUtils",
                      ).getSubgroupSuggestionId(l, c),
                      error: t,
                    };
                  })) != null
              ? y
              : []
          );
          break e;
        }
        if (
          ((typeof h == "object" && h !== null) || typeof h == "function") &&
          h.name === "SubGroupSuggestionsActionResponseClientError" &&
          "value" in h
        ) {
          var S = h.value,
            R = S.errorSubGroupSuggestionsActionClientErrors;
          return d(R.value);
        }
        if (
          ((typeof h == "object" && h !== null) || typeof h == "function") &&
          h.name === "SubGroupSuggestionsActionResponseServerError" &&
          "value" in h
        ) {
          var L = h.value;
          return d(L.errorServerErrors.value);
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            h,
        );
      }
    }
    function d(e) {
      var t = e.code,
        n = e.text;
      return (
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "subgroupSuggestionsAction failed: ",
              ":",
              "",
            ])),
          t,
          n,
        ),
        Promise.reject(
          new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(t), n),
        )
      );
    }
    ((l.SubgroupSuggestionAction = u), (l.sendSubgroupSuggestionsAction = c));
  },
  98,
);
