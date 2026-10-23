__d(
  "WAWebResolveParkedPollAddOptions",
  [
    "Promise",
    "WALogger",
    "WAWebAddonQueryUtils",
    "WAWebApplyPollAddOptionToParent",
    "WAWebDBMessageSerialization",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "WAWebStorePollAddOptionDecryptedMsgs",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.length !== 0) {
            var r = (yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([
              t,
            ])).get(t.toString());
            if (r != null) {
              var a = e
                  .map(d)
                  .filter(Boolean)
                  .map(function (e) {
                    return { parentMsg: r, decryptedAddOption: e };
                  }),
                i = new Set(
                  (yield o("WAWebSchemaMessage")
                    .getMessageTable()
                    .bulkGet(
                      a.map(function (e) {
                        return e.decryptedAddOption.id.toString();
                      }),
                    ))
                    .filter(Boolean)
                    .map(function (e) {
                      return e.id;
                    }),
                ),
                l = function (t) {
                  return i.has(t.decryptedAddOption.id.toString());
                },
                u = yield (s || (s = n("Promise"))).all([
                  o(
                    "WAWebApplyPollAddOptionToParent",
                  ).applyPollAddOptionsToParent(a.filter(l)),
                  o(
                    "WAWebStorePollAddOptionDecryptedMsgs",
                  ).storePollAddOptionDecryptedMsgs(
                    a.filter(function (e) {
                      return !l(e);
                    }),
                  ),
                ]),
                c = u[0];
              yield o(
                "WAWebApplyPollAddOptionToParent",
              ).removePollAddOptionMsgs(
                c.map(function (e) {
                  var t = e.decryptedAddOption;
                  return t.id.toString();
                }),
              );
            }
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(t) {
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
    l.resolveParkedPollAddOptions = u;
  },
  98,
);
