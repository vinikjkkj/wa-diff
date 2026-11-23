__d(
  "WAWebApplyPollAddOptionTCValidation",
  [
    "WALogger",
    "WAWebAddonLogUtils",
    "WAWebDBMessageSerialization",
    "WAWebDBPollsPendingUpdatesStore",
    "WAWebMsgGetters",
    "WAWebPollNameHashMismatchLogger",
    "WAWebValidatePollUpdateTC",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["msgRowOpaqueData"],
      s;
    async function u(e, t) {
      var n = [],
        r = [],
        a = [];
      for (var i of e) {
        var l = o("WAWebValidatePollUpdateTC").validatePollUpdateTC({
          parentMsg: i.parentMsg,
          voteMetadata: i.decryptedAddOption.pollUpdateMessageMetadata,
        });
        e: {
          var u = l;
          if (
            ((typeof u == "object" && u !== null) || typeof u == "function") &&
            u.kind === "pass"
          ) {
            n.push(i);
            break e;
          }
          if (
            ((typeof u == "object" && u !== null) || typeof u == "function") &&
            u.kind === "mismatch"
          ) {
            (o("WAWebPollNameHashMismatchLogger").logPollNameHashMismatch(t),
              r.push(i));
            break e;
          }
          if (
            ((typeof u == "object" && u !== null) || typeof u == "function") &&
            u.kind === "park" &&
            "dependencyId" in u
          ) {
            var d = u.dependencyId;
            a.push(c(i, d));
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              u,
          );
        }
      }
      return (
        o("WAWebAddonLogUtils").hasSettledWithError(
          await Promise.allSettled(a),
        ) &&
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[polls/tc] failed to park poll add-options awaiting an edit",
                ])),
            )
            .sendLogs("poll-tc-park-add-option-failed"),
        { accepted: n, mismatched: r }
      );
    }
    async function c(t, n) {
      var a,
        i,
        l,
        s,
        u = t.decryptedAddOption,
        c = t.parentMsg,
        d = (a = u.t) != null ? a : 0,
        m = o("WAWebDBMessageSerialization").dbRowFromMessage(u, {
          storeReportingInfo: !0,
        }),
        p = m.msgRowOpaqueData,
        _ = babelHelpers.objectWithoutPropertiesLoose(m, e);
      await o("WAWebDBPollsPendingUpdatesStore").enqueuePollPendingUpdate({
        parentMsgKey: c.id.toString(),
        sender: r("nullthrows")(o("WAWebMsgGetters").getSender(u)).toString(),
        payloadType: "add-option",
        payloadKey: u.id.toString(),
        dependencyType: "edit",
        dependencyId: n,
        msgKey: u.id.toString(),
        senderTimestampMs: d * 1e3,
        pollNameHash: new Uint8Array(
          (i =
            (l = u.pollUpdateMessageMetadata) == null
              ? void 0
              : l.pollNameHash) != null
            ? i
            : new Uint8Array(0),
        ).buffer,
        selectedOptionLocalIds: new ArrayBuffer(0),
        t: d,
        parkedMsgPayload: _,
        parkedMsgOpaqueData: p,
        reportingTokenInfo: (s = u.reportingTokenInfo) != null ? s : void 0,
      });
    }
    l.applyPollAddOptionTCValidation = u;
  },
  98,
);
