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
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = o("react-compiler-runtime").c(10),
        a;
      if (r[0] === Symbol.for("react.memo_cache_sentinel")) {
        var i;
        ((a = [
          (i = o("WAWebMsgGetters")).getType,
          i.getSubtype,
          o("WAWebFrontendMsgGetters").getText,
          i.getInitialPageSize,
          i.getPollName,
          o("WAWebFrontendMsgGetters").getMediaData,
          i.getType,
        ]),
          (r[0] = a));
      } else a = r[0];
      var l = o("useWAWebMsgValues").useMsgValues(e.id, a),
        s = l[0],
        u = l[1],
        c = l[2],
        d = l[3],
        m = l[4],
        p = l[5];
      if (
        !o("WAWebMiscGatingUtils").messageCustomAriaLabelEnabled() &&
        !n.atLeastOnceKeyboardUser
      )
        return null;
      var _;
      if (
        r[1] !== t ||
        r[2] !== d ||
        r[3] !== p ||
        r[4] !== c ||
        r[5] !== e ||
        r[6] !== m ||
        r[7] !== u ||
        r[8] !== s
      ) {
        var f = e.mentionMap(),
          g = {
            type: s,
            subtype: u,
            isGif: p == null ? void 0 : p.isGif,
            quotedMsg: o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(e),
            senderWid: o("WAWebMsgGetters").getSender(e),
          },
          h = o("WAWebFrontendMsgGetters").getAsPollCreation(e),
          y = null,
          C = o("WAWebMsgGetters").getId(e);
        if (h != null) {
          var b = o(
              "WAWebPollsPollVoteCollection",
            ).PollVoteCollection.getForParentAddressingModeInsensitive([C]),
            v = b[0],
            S = v.toArray(),
            R = o("WAWebMsgGetters").getPollOptions(e);
          if (h && R) {
            var L = o("WAWebPollsUseResults").aggregateVotes(S, R);
            y = o("WAWebPollsUseResults").getOptionWithCount(L);
          }
        }
        var E = null;
        if (e.type === o("WAWebMsgType").MSG_TYPE.REVOKED) {
          var k = o("WAWebFrontendMsgGetters").getAsRevoked(e);
          E = k ? o("WAWebFormatRevokedMsg").formatRevokedMsg(k) : null;
        }
        var I = {
            associatedMessages: t,
            pollName: m,
            optionsWithCounts: y,
            mediaData: p,
            revokedLabel: E,
          },
          T = {
            messageText: c,
            mentionMap: f,
            ariaLabelMessageType: g,
            ariaMessageSpecific: I,
            initialPageSize: d,
          };
        ((_ = o("WAWebMessageUiUtils").getMessageTextLabel(T)),
          (r[1] = t),
          (r[2] = d),
          (r[3] = p),
          (r[4] = c),
          (r[5] = e),
          (r[6] = m),
          (r[7] = u),
          (r[8] = s),
          (r[9] = _));
      } else _ = r[9];
      return _;
    }
    l.useMessageAriaDescription = e;
  },
  98,
);
