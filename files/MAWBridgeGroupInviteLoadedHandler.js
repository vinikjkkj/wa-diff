__d(
  "MAWBridgeGroupInviteLoadedHandler",
  [
    "fbt",
    "I64",
    "LSMessagingThreadTypeUtil",
    "MAWMiActMappingTableAPI",
    "Promise",
    "ReQL",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e, u;
    function c(e, t, n) {
      return m(e, n, t.actorId);
    }
    function d(e, t, r) {
      return o("MAWMiActMappingTableAPI")
        .getThreadKeyForChatJid(e, t)
        .then(function (t) {
          return t == null ? (u || (u = n("Promise"))).resolve() : m(e, t, r);
        });
    }
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a = t.threads,
            i = yield o("ReQL").firstAsync(
              o("ReQL").fromTableAscending(a).getKeyRange(n),
            );
          if (i != null) {
            var l = o("LSMessagingThreadTypeUtil").isGroup(i.threadType);
            if (l) {
              var u = yield o("ReQL").firstAsync(
                o("ReQL").fromTableAscending(t.group_invites).getKeyRange(n),
              );
              if (u == null) {
                yield a.put(
                  babelHelpers.extends({}, i, {
                    additionalThreadContext: void 0,
                  }),
                );
                return;
              }
              var c = (e || (e = o("I64"))).equal(
                (e || (e = o("I64"))).of_string(r),
                u.inviterId,
              )
                ? null
                : yield o("ReQL").firstAsync(
                    o("ReQL")
                      .fromTableAscending(t.contacts, ["name"])
                      .getKeyRange(u.inviterId),
                  );
              if (c != null) {
                var d = s
                    ._(/*BTDS*/ "{Inviter Name} invited you to join", [
                      s._param("Inviter Name", c.name),
                    ])
                    .toString(),
                  m =
                    i.folderName === "inbox"
                      ? s._(/*BTDS*/ "Message request").toString()
                      : i.additionalThreadContext;
                yield a.put(
                  babelHelpers.extends({}, i, {
                    additionalThreadContext: m,
                    snippet: d,
                  }),
                );
              }
            }
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return d(e, t.threadJid, t.actorId);
    }
    function f(e, t, n) {
      return d(e, t, n);
    }
    ((l.callForOneDb = c), (l.call = _), (l.callFromMainThread = f));
  },
  226,
);
