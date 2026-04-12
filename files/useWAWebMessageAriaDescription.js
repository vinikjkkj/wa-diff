__d(
  "useWAWebMessageAriaDescription",
  [
    "WAWebFormatRevokedMsg",
    "WAWebFrontendMsgGetters",
    "WAWebMessageUiUtils",
    "WAWebMiscGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPollsPollVoteCollection",
    "WAWebPollsUseResults",
    "WAWebQuotedMsgModelUtils",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r,
        a = o("useWAWebMsgValues").useMsgValues(e.id, [
          (r = o("WAWebMsgGetters")).getType,
          r.getSubtype,
          o("WAWebFrontendMsgGetters").getText,
          r.getInitialPageSize,
          r.getPollName,
          o("WAWebFrontendMsgGetters").getMediaData,
          r.getType,
        ]),
        i = a[0],
        l = a[1],
        s = a[2],
        u = a[3],
        c = a[4],
        d = a[5];
      if (
        !o("WAWebMiscGatingUtils").messageCustomAriaLabelEnabled() &&
        !n.atLeastOnceKeyboardUser
      )
        return null;
      var m = e.mentionMap(),
        p = {
          type: i,
          subtype: l,
          isGif: d == null ? void 0 : d.isGif,
          quotedMsg: o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(e),
          senderWid: o("WAWebMsgGetters").getSender(e),
        },
        _ = o("WAWebFrontendMsgGetters").getAsPollCreation(e),
        f = null,
        g = o("WAWebMsgGetters").getId(e);
      if (_ != null) {
        var h = o(
            "WAWebPollsPollVoteCollection",
          ).PollVoteCollection.getForParentAddressingModeInsensitive([g]),
          y = h[0],
          C = y.toArray(),
          b = o("WAWebMsgGetters").getPollOptions(e);
        if (_ && b) {
          var v = o("WAWebPollsUseResults").aggregateVotes(C, b);
          f = o("WAWebPollsUseResults").getOptionWithCount(v);
        }
      }
      var S = null;
      if (e.type === o("WAWebMsgType").MSG_TYPE.REVOKED) {
        var R = o("WAWebFrontendMsgGetters").getAsRevoked(e);
        S = R ? o("WAWebFormatRevokedMsg").formatRevokedMsg(R) : null;
      }
      var L = {
          associatedMessages: t,
          pollName: c,
          optionsWithCounts: f,
          mediaData: d,
          revokedLabel: S,
        },
        E = {
          messageText: s,
          mentionMap: m,
          ariaLabelMessageType: p,
          ariaMessageSpecific: L,
          initialPageSize: u,
        };
      return o("WAWebMessageUiUtils").getMessageTextLabel(E);
    }
    l.useMessageAriaDescription = e;
  },
  98,
);
