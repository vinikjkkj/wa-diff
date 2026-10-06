__d(
  "WAWebGroupAgentConflictAddResult",
  [
    "fbt",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebInitializeBotContact",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = "432";
    function u(e) {
      return e
        .filter(function (e) {
          var t = e.code,
            n = e.userWid;
          return c(t, n);
        })
        .map(function (e) {
          var t = e.userWid;
          return t;
        });
    }
    function c(t, n) {
      return t === e && n.isBot();
    }
    function d(e) {
      var t = []
        .concat(e)
        .sort(p)
        .map(_)
        .find(function (e) {
          return e != null;
        });
      return t == null
        ? m(e.length)
        : s._(
            /*BTDS*/ "Can't add {agentName}. This group has an AI agent that can't be in the same group.",
            [s._param("agentName", t)],
          );
    }
    function m(e) {
      return s._(
        /*BTDS*/ '_j{"*":"Couldn\'t add {count} members.","_1":"Couldn\'t add 1 member."}',
        [s._plural(e, "count")],
      );
    }
    function p(e, t) {
      var n = e.toString(),
        r = t.toString();
      return n === r ? 0 : n < r ? -1 : 1;
    }
    function _(e) {
      var t = o("WAWebContactCollection").ContactCollection.get(e);
      if (t == null) return null;
      var n = o("WAWebContactGetters").getName(t);
      if (
        n != null &&
        n !== "" &&
        n !== o("WAWebInitializeBotContact").getBotPlaceholderName()
      )
        return n;
      var r = o("WAWebContactGetters").getNotifyName(t);
      return r != null && r !== "" ? r : null;
    }
    ((l.getAgentConflictRejectedWids = u),
      (l.isAgentConflictRejection = c),
      (l.formatAgentConflictRefusal = d),
      (l.formatGenericAgentAddRefusal = m));
  },
  226,
);
