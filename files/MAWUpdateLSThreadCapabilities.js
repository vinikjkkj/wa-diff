__d(
  "MAWUpdateLSThreadCapabilities",
  [
    "fbt",
    "I64",
    "LSBitOffset",
    "LSContactBitOffset",
    "LSContactBlockedByViewerStatus",
    "LSIntEnum",
    "LSMessagingThreadTypeUtil",
    "LSThreadBitOffset",
    "MAWBlockUtils",
    "MAWCurrentUser",
    "MAWMessageRequestUtil",
    "Promise",
    "ReQL",
    "asyncToGeneratorRuntime",
    "clearedMAWMnRestrictCapabilities",
    "emptyFunction",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = o("MAWCurrentUser").getID(),
      m = (c || (c = o("I64"))).of_string(d);
    function p(t, a) {
      return o("ReQL")
        .firstAsync(o("ReQL").fromTableAscending(t.threads).getKeyRange(a))
        .then(function (r) {
          if (r == null) return (e || (e = n("Promise"))).resolve();
          var a = o("LSBitOffset").set(
              (u || (u = o("LSIntEnum"))).ofNumber(27),
              r.capabilities,
            ),
            i = babelHelpers.extends({}, r, { capabilities: a });
          return t.threads.put(i);
        })
        .then(r("emptyFunction"));
    }
    function _(t, a) {
      return o("ReQL")
        .firstAsync(o("ReQL").fromTableAscending(t.threads).getKeyRange(a))
        .then(function (r) {
          if (r == null) return (e || (e = n("Promise"))).resolve();
          var a = o("LSBitOffset").clear(
              (u || (u = o("LSIntEnum"))).ofNumber(27),
              r.capabilities,
            ),
            i = babelHelpers.extends({}, r, { capabilities: a });
          return t.threads.put(i);
        })
        .then(r("emptyFunction"));
    }
    function f(t, a) {
      return o("ReQL")
        .firstAsync(o("ReQL").fromTableAscending(t.threads).getKeyRange(a))
        .then(function (r) {
          if (r == null)
            return (e || (e = n("Promise"))).resolve([void 0, void 0]);
          var i = o("ReQL").firstAsync(
            o("LSMessagingThreadTypeUtil").isOneToOne(r.threadType)
              ? o("ReQL")
                  .mergeJoin(
                    o("ReQL").fromTableAscending(t.participants).getKeyRange(a),
                    o("ReQL").fromTableAscending(t.contacts),
                  )
                  .filter(function (e) {
                    var t = e[1];
                    return !(c || (c = o("I64"))).equal(t.id, m);
                  })
                  .map(function (e) {
                    var t = e[1];
                    return t;
                  })
              : o("ReQL").empty(),
          );
          return (e || (e = n("Promise"))).all([e.resolve(r), i]);
        })
        .then(function (a) {
          var i = a[0];
          if (i == null) return (e || (e = n("Promise"))).resolve();
          var l = a[1];
          if (l == null) return (e || (e = n("Promise"))).resolve();
          var s = (c || (c = o("I64"))).equal(
              l.blockedByViewerStatus,
              (u || (u = o("LSIntEnum"))).ofNumber(
                r("LSContactBlockedByViewerStatus").MESSAGE_BLOCKED,
              ),
            ),
            d = c.equal(
              l.blockedByViewerStatus,
              u.ofNumber(r("LSContactBlockedByViewerStatus").FULLY_BLOCKED),
            ),
            m = o("LSContactBitOffset").has(66, l),
            p = d
              ? o("LSThreadBitOffset").clear(
                  o("MAWBlockUtils").clearedFbBlockCapabilities,
                  i.capabilities,
                  i.capabilities2,
                  i.capabilities3,
                  i.capabilities4,
                  i.capabilities5,
                )
              : s
                ? o("LSThreadBitOffset").clear(
                    o("MAWBlockUtils").clearedMnBlockCapabilities,
                    i.capabilities,
                    i.capabilities2,
                    i.capabilities3,
                    i.capabilities4,
                    i.capabilities5,
                  )
                : m
                  ? o("LSThreadBitOffset").clear(
                      r("clearedMAWMnRestrictCapabilities"),
                      i.capabilities,
                      i.capabilities2,
                      i.capabilities3,
                      i.capabilities4,
                      i.capabilities5,
                    )
                  : [
                      i.capabilities,
                      i.capabilities2,
                      i.capabilities3,
                      i.capabilities4,
                      i.capabilities5,
                    ],
            _ = p[0],
            f = p[1],
            g = p[2],
            h = p[3],
            y = p[4];
          return t.threads
            .put(
              babelHelpers.extends({}, i, {
                capabilities: _,
                capabilities2: f,
                capabilities3: g,
                capabilities4: h,
                capabilities5: y,
              }),
            )
            .then(r("emptyFunction"));
        });
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = t.threads,
            i = yield o("ReQL").firstAsync(
              o("ReQL").fromTableAscending(a).getKeyRange(r),
            );
          if (i == null) return (e || (e = n("Promise"))).resolve();
          var l = o("LSThreadBitOffset").set.apply(
              o("LSThreadBitOffset"),
              [
                o("MAWMessageRequestUtil")
                  .disabledThreadCapabilitiesForIncomingRequest,
              ].concat(
                o("LSThreadBitOffset").clear(
                  o("MAWMessageRequestUtil")
                    .enabledThreadCapabilitiesForIncomingRequest,
                  i.capabilities,
                  i.capabilities2,
                  i.capabilities3,
                  i.capabilities4,
                  i.capabilities5,
                ),
              ),
            ),
            s = l[0],
            u = l[1],
            c = l[2],
            d = l[3],
            m = l[4];
          yield a.put(
            babelHelpers.extends({}, i, {
              additionalThreadContext: void 0,
              capabilities: s,
              capabilities2: u,
              capabilities3: c,
              capabilities4: d,
              capabilities5: m,
            }),
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o("ReQL").firstAsync(
            o("ReQL").fromTableAscending(e.threads).getKeyRange(t),
          );
          if (r != null) {
            var a = yield o("ReQL").firstAsync(
              o("ReQL").fromTableAscending(e.contacts, ["name"]).getKeyRange(n),
            );
            if (a != null) {
              var i = s
                  ._(/*BTDS*/ "{Inviter Name} invited you to join", [
                    s._param("Inviter Name", a.name),
                  ])
                  .toString(),
                l = o("LSThreadBitOffset").set(
                  [105],
                  r.capabilities,
                  r.capabilities2,
                  r.capabilities3,
                  r.capabilities4,
                  r.capabilities5,
                ),
                u = l[0],
                c = l[1],
                d = l[2],
                m = l[3],
                p = l[4];
              yield e.threads.put(
                babelHelpers.extends({}, r, {
                  capabilities: u,
                  capabilities2: c,
                  capabilities3: d,
                  capabilities4: m,
                  capabilities5: p,
                  snippet: i,
                }),
              );
            }
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = yield o("ReQL").firstAsync(
            o("ReQL").fromTableAscending(e.threads).getKeyRange(t),
          );
          if (r != null) {
            var a = yield o("ReQL").toArrayAsync(
                o("ReQL").fromTableAscending(e.group_invites).getKeyRange(t),
              ),
              i = o("LSThreadBitOffset").clear(
                [105],
                r.capabilities,
                r.capabilities2,
                r.capabilities3,
                r.capabilities4,
                r.capabilities5,
              ),
              l = i[0],
              s = i[1],
              u = i[2],
              c = i[3],
              d = i[4];
            (yield e.threads.put(
              babelHelpers.extends({}, r, {
                capabilities: l,
                capabilities2: s,
                capabilities3: u,
                capabilities4: c,
                capabilities5: d,
                snippet: void 0,
              }),
            ),
              yield a.map(
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      yield e.group_invites.delete(
                        t.threadKey,
                        t.inviterId,
                        t.inviteeId,
                      );
                    },
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              ));
          }
        })),
        v.apply(this, arguments)
      );
    }
    ((l.enableAddMembersTxn = p),
      (l.disableAddMembersTxn = _),
      (l.disableBlockerCapabilitiesTxn = f),
      (l.updateNonMessageRequestThreadTxn = g),
      (l.setGroupInviteTxn = y),
      (l.clearGroupInviteTxn = b));
  },
  226,
);
