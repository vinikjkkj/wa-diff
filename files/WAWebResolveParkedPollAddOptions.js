__d(
  "WAWebResolveParkedPollAddOptions",
  [
    "WALogger",
    "WAWebAddonQueryUtils",
    "WAWebApplyPollAddOptionToParent",
    "WAWebDBMessageSerialization",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "WAWebStorePollAddOptionDecryptedMsgs",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e, t) {
      if (e.length !== 0) {
        var n = (
          await o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([t])
        ).get(t.toString());
        if (n != null) {
          var r = e.flatMap(function (e) {
              var t = u(e);
              return t != null ? [{ parentMsg: n, decryptedAddOption: t }] : [];
            }),
            a = new Set(
              (
                await o("WAWebSchemaMessage")
                  .getMessageTable()
                  .bulkGet(
                    r.map(function (e) {
                      return e.decryptedAddOption.id.toString();
                    }),
                  )
              )
                .filter(Boolean)
                .map(function (e) {
                  return e.id;
                }),
            ),
            i = function (t) {
              return a.has(t.decryptedAddOption.id.toString());
            },
            l = await Promise.all([
              o("WAWebApplyPollAddOptionToParent").applyPollAddOptionsToParent(
                r.filter(i),
              ),
              o(
                "WAWebStorePollAddOptionDecryptedMsgs",
              ).storePollAddOptionDecryptedMsgs(
                r.filter(function (e) {
                  return !i(e);
                }),
              ),
            ]),
            s = l[0];
          await o("WAWebApplyPollAddOptionToParent").removePollAddOptionMsgs(
            s.map(function (e) {
              var t = e.decryptedAddOption;
              return t.id.toString();
            }),
          );
        }
      }
    }
    function u(t) {
      try {
        var n =
          t.parkedMsgPayload != null
            ? o("WAWebDBMessageSerialization").messageFromDbRow(
                babelHelpers.extends({}, t.parkedMsgPayload, {
                  msgRowOpaqueData: t.parkedMsgOpaqueData,
                }),
              )
            : null;
        if (
          n == null ||
          n.kind !== o("WAWebMsgType").MsgKind.PollAddOptionDecrypted
        )
          throw r("err")(
            "parked add-option payload is missing or not an add-option",
          );
        return babelHelpers.extends({}, n, {
          reportingTokenInfo: t.reportingTokenInfo,
        });
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[polls/tc] dropping malformed parked poll add-option",
                ])),
            )
            .sendLogs("poll-tc-malformed-parked-add-option"),
          null
        );
      }
    }
    l.resolveParkedPollAddOptions = s;
  },
  98,
);
