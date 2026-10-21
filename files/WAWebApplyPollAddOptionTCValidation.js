__d(
  "WAWebApplyPollAddOptionTCValidation",
  [
    "Promise",
    "WALogger",
    "WAWebAddonLogUtils",
    "WAWebDBMessageSerialization",
    "WAWebDBPollsPendingUpdatesStore",
    "WAWebMsgGetters",
    "WAWebPollNameHashMismatchLogger",
    "WAWebValidatePollUpdateTC",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["msgRowOpaqueData"],
      s,
      u;
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = [],
            a = [],
            i = [];
          for (var l of e) {
            var c = o("WAWebValidatePollUpdateTC").validatePollUpdateTC({
              parentMsg: l.parentMsg,
              voteMetadata: l.decryptedAddOption.pollUpdateMessageMetadata,
            });
            e: {
              var d = c;
              if (
                ((typeof d == "object" && d !== null) ||
                  typeof d == "function") &&
                d.kind === "pass"
              ) {
                r.push(l);
                break e;
              }
              if (
                ((typeof d == "object" && d !== null) ||
                  typeof d == "function") &&
                d.kind === "mismatch"
              ) {
                (o("WAWebPollNameHashMismatchLogger").logPollNameHashMismatch(
                  t,
                ),
                  a.push(l));
                break e;
              }
              if (
                ((typeof d == "object" && d !== null) ||
                  typeof d == "function") &&
                d.kind === "park" &&
                "dependencyId" in d
              ) {
                var p = d.dependencyId;
                i.push(m(l, p));
                break e;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  d,
              );
            }
          }
          return (
            o("WAWebAddonLogUtils").hasSettledWithError(
              yield (u || (u = n("Promise"))).allSettled(i),
            ) &&
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[polls/tc] failed to park poll add-options awaiting an edit",
                    ])),
                )
                .sendLogs("poll-tc-park-add-option-failed"),
            { accepted: r, mismatched: a }
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
          yield o("WAWebDBPollsPendingUpdatesStore").enqueuePollPendingUpdate({
            parentMsgKey: c.id.toString(),
            sender: r("nullthrows")(
              o("WAWebMsgGetters").getSender(u),
            ).toString(),
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
        })),
        p.apply(this, arguments)
      );
    }
    l.applyPollAddOptionTCValidation = c;
  },
  98,
);
