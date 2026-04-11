__d(
  "WAWebMsgKeyUtils",
  [
    "$InternalEnum",
    "WALogger",
    "WANullthrows",
    "WAWebIsCagGroupCache",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = n("$InternalEnum").Mirrored(["Addon", "Message", "EditMessage"]);
    function c(e) {
      return e.fromMe && o("WAWebUserPrefsMeUser").isMeAccount(e.remote);
    }
    function d(t, n) {
      var a = t.remote;
      if (a.isGroup()) {
        var i;
        if (t.participant == null)
          return (
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "missing participant in a group ",
                    " ",
                    " ",
                    "",
                  ])),
                t.id,
                t.remote,
                t.fromMe,
              )
              .sendLogs("group-missing-participant"),
            !1
          );
        var l = r("WAWebIsCagGroupCache").isCag(a);
        return l && n === u.Addon
          ? !0
          : !!((i = t.participant) != null && i.isLid());
      }
      return a.isLid();
    }
    function m(e, t) {
      return d(t, e)
        ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
        : e === u.Addon
          ? r("WAWebIsCagGroupCache").isCag(t.remote)
            ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
            : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE()
          : e === u.EditMessage || e === u.Message
            ? o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE()
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function p(e, t) {
      var n = e.remote,
        a = m(t, e);
      if (n.isBroadcastList()) {
        var i = r("WANullthrows")(
            e.participant,
            "missing participant in broadcast",
          ),
          l = e.fromMe ? a : i,
          u = e.fromMe ? i : a;
        return { from: l, to: u, broadcastId: n };
      }
      var c = e.fromMe ? a : n,
        d = e.fromMe ? n : a,
        p = n.isGroup() || n.isStatus();
      !p &&
        e.participant &&
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "unexpected participant ",
                " in ",
                "",
              ])),
            e.participant,
            n,
          )
          .sendLogs("msgKey-unexpected-participant", { sampling: 0.01 });
      var _ = p ? e.participant : void 0;
      return n.isStatus()
        ? { from: c, to: d, author: _, broadcastId: n }
        : { from: c, to: d, author: _ };
    }
    function _(e, t) {
      return (
        e.fromMe === t.fromMe &&
        r("WAWebWid").equals(e.remote, t.remote) &&
        r("WAWebWid").equals(e.participant, t.participant)
      );
    }
    ((l.TranslateMsgKeyType = u),
      (l.isNoteToSelf = c),
      (l.isLidMsgKey = d),
      (l.msgKeyToTargetInfo = p),
      (l.equalSendersAddressingSensitive = _));
  },
  98,
);
