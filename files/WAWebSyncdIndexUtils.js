__d(
  "WAWebSyncdIndexUtils",
  [
    "WALogger",
    "WASyncdConst",
    "WAWebMsgKey",
    "WAWebSyncdMetrics",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumMdSyncdCriticalEventCode",
    "WAWebWid",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = /\d(?=)/gm;
    function d(e) {
      var t = e.toString();
      if (!e.fromMe || e.remote.isUser()) return t;
      var n = t.lastIndexOf("_");
      return t.substring(0, n);
    }
    function m(t, n, a, i) {
      var l = void 0;
      if (!r("WAWebWid").isWid(t))
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncKeyToMsgKey: invalid remote value: ",
                "",
              ])),
            t.replace(c, "#"),
          ),
          null
        );
      var u = o("WAWebWidFactory").createWid(t);
      if (!u.isUser() && !u.isNewsletter()) {
        if (a === "0" && !r("WAWebWid").isWid(i))
          return (
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "syncKeyToMsgKey: invalid participant value: ",
                  "",
                ])),
              i.replace(c, "#"),
            ),
            null
          );
        a === "1"
          ? (l = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE())
          : (l = o("WAWebWidFactory").createWid(i));
      }
      return new (r("WAWebMsgKey"))({
        fromMe: a === "1",
        remote: u,
        id: n,
        participant: l,
      });
    }
    function p(e) {
      var t = JSON.parse(e);
      if (t.length < 5)
        throw r("err")(
          "[sync-action] star action index malformed, cannot create MsgKey",
        );
      var n = m(t[1], t[2], t[3], t[4]);
      if (!n)
        throw (
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[sync-action] star index malformed, MsgKey failed",
              ])),
          ),
          r("err")(
            "[sync-action] star action index data is malformed, , cannot create MsgKey",
          )
        );
      return n;
    }
    function _(e, t) {
      return (
        o("WAWebSyncdMetrics").uploadMdCriticalEventMetric(
          o("WAWebWamEnumMdSyncdCriticalEventCode").MD_SYNCD_CRITICAL_EVENT_CODE
            .ACTION_INVALID_INDEX_DATA,
          e,
          t,
        ),
        { actionState: o("WASyncdConst").SyncActionState.Malformed }
      );
    }
    function f(e) {
      return { actionState: o("WASyncdConst").SyncActionState.Malformed };
    }
    ((l.msgKeyToDbIdWithoutFromMeParticipant = d),
      (l.syncKeyToMsgKey = m),
      (l.getMsgKeyFromStarActionIndex = p),
      (l.malformedActionIndex = _),
      (l.malformedActionValue = f));
  },
  98,
);
