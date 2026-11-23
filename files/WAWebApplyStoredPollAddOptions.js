__d(
  "WAWebApplyStoredPollAddOptions",
  [
    "WALogger",
    "WAWebAddonQueryUtils",
    "WAWebApplyPollAddOptionTCValidation",
    "WAWebApplyPollAddOptionToParent",
    "WAWebDBAssociatedMsgsAttachDetachAPI",
    "WAWebDBMessageDelete",
    "WAWebDBMessageSerialization",
    "WAWebLidMigrationUtils",
    "WAWebMessageAssociation.flow",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebPollAddonProcessingUtils",
    "WAWebPollsGatingUtils",
    "WAWebProcessBaseMsgInfo",
    "WAWebSchemaMessage",
    "WAWebWid",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return d(async function () {
        var t = e
            .filter(function (e) {
              return (
                e.kind === o("WAWebMsgType").MsgKind.PollAddOptionDecrypted
              );
            })
            .map(function (e) {
              return e.id.toString();
            }),
          n = e
            .filter(function (e) {
              return e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION;
            })
            .map(function (e) {
              return e.id;
            });
        (n.length > 0 &&
          t.push.apply(
            t,
            h(
              await o(
                "WAWebDBAssociatedMsgsAttachDetachAPI",
              ).getAssociatedMsgsByParentMsgKeyFromAssociationTable(n),
            ),
          ),
          await m(t));
      });
    }
    function c(e) {
      return d(function () {
        return m(h(e));
      });
    }
    async function d(t) {
      if (o("WAWebPollsGatingUtils").isPollAddOptionReceivingEnabled())
        try {
          await t();
        } catch (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[polls] failed to apply stored poll add-options",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("poll-add-option-apply-stored-failed");
        }
    }
    async function m(e) {
      if (e.length !== 0) {
        var t = await p(Array.from(new Set(e))),
          n = t.filter(f),
          r = t.filter(function (e) {
            return !n.includes(e);
          });
        r.length > 0 &&
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[polls] dropping ",
                  " stored poll add-options their sender may not add",
                ])),
              r.length,
            )
            .sendLogs("poll-add-option-stored-not-allowed");
        var a = await o(
            "WAWebApplyPollAddOptionTCValidation",
          ).applyPollAddOptionTCValidation(n, "history-sync-add-option"),
          i = a.accepted,
          l = a.mismatched,
          u = await o(
            "WAWebApplyPollAddOptionToParent",
          ).applyPollAddOptionsToParent(i);
        (await o("WAWebApplyPollAddOptionToParent").removePollAddOptionMsgs(
          u.map(function (e) {
            var t = e.decryptedAddOption;
            return t.id.toString();
          }),
        ),
          await o("WAWebDBMessageDelete").removeMessagesFromHistory(
            [].concat(r, l).map(function (e) {
              return e.decryptedAddOption.id.toString();
            }),
            { deleteAssociatedMsgs: !1 },
          ));
      }
    }
    async function p(e) {
      var t = (await o("WAWebSchemaMessage").getMessageTable().bulkGet(e))
          .map(_)
          .filter(Boolean),
        n = await o("WAWebAddonQueryUtils").getParentMsgsByMsgKey(
          t.map(function (e) {
            return e.parentMsgKey;
          }),
        ),
        r = [];
      for (var a of t) {
        var i = n.get(a.parentMsgKey.toString());
        i != null &&
          i.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION &&
          !g(i, a) &&
          r.push({ parentMsg: i, decryptedAddOption: a });
      }
      return r;
    }
    function _(e) {
      if (
        e == null ||
        e.type !== o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_DECRYPTED
      )
        return null;
      var t = o("WAWebDBMessageSerialization").messageFromDbRow(e),
        n = e.associationType,
        a = e.parentMsgKey,
        i = e.pollUpdateMessageMetadata,
        l = e.protocolMessageKey,
        s =
          t.type === o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_DECRYPTED
            ? t.pollAddedOption
            : null;
      return n == null || a == null || s == null || l == null
        ? null
        : babelHelpers.extends(
            {},
            o("WAWebProcessBaseMsgInfo").msgDataToBaseMsgInfo(t),
            {
              type: o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_DECRYPTED,
              kind: o("WAWebMsgType").MsgKind.PollAddOptionDecrypted,
              associationType: n,
              parentMsgKey: r("WAWebMsgKey").fromString(a),
              protocolMessageKey: r("WAWebMsgKey").fromString(l),
              pollAddedOption: s,
              pollUpdateMessageMetadata: i,
            },
          );
    }
    function f(e) {
      var t = e.decryptedAddOption,
        n = e.parentMsg,
        a = o("WAWebMsgGetters").getOriginalSender(n),
        i = o("WAWebMsgGetters").getSender(t);
      if (a == null || i == null) return !1;
      var l = r("WAWebWid").equals.apply(
        r("WAWebWid"),
        o("WAWebLidMigrationUtils").toCommonAddressingMode(a, i),
      );
      return (
        (l || n.pollAllowAddOption === !0) &&
        !o("WAWebPollAddonProcessingUtils").isPastPollEndTime(
          n.pollEndTime,
          t.t,
        )
      );
    }
    function g(e, t) {
      var n,
        r = t.id.toString();
      return ((n = e.pollOptions) != null ? n : []).some(function (e) {
        return e.addOptionMsgKey === r;
      });
    }
    function h(e) {
      return e
        .filter(function (e) {
          return (
            e.associationType ===
            o("WAWebMessageAssociation.flow").MessageAssociationType
              .POLL_ADD_OPTION
          );
        })
        .map(function (e) {
          return e.msgKey.toString();
        });
    }
    ((l.applyStoredPollAddOptionsForMsgs = u),
      (l.applyAttachedPollAddOptions = c));
  },
  98,
);
