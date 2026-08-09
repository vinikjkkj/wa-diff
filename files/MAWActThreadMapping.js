__d(
  "MAWActThreadMapping",
  [
    "FBLogger",
    "I64",
    "JSResourceForInteraction",
    "MAWBridgeGroupInviteLoadedHandler",
    "MAWBridgeOneToOneMessageRequestLoadedHandler",
    "MAWBridgeParticipantsUpdatedHandler",
    "MAWBridgeSendAndReceive",
    "MAWFolderTypes",
    "MAWFolderUtils",
    "MAWHandleActThread",
    "MAWJids",
    "MAWMiActMappingTableAPI",
    "MAWMiActOnActThreadReadyQueue",
    "MAWRemoveCorruptedParticipantsFromOneToOneChat",
    "MAWThreadMappingQPL",
    "MAWUserJidWrapper",
    "MWFBLogger",
    "Promise",
    "ReQL",
    "WAArrayZip",
    "WAJids",
    "asyncToGeneratorRuntime",
    "emptyFunction",
    "getErrorSafe",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = r("JSResourceForInteraction")(
        "MAWSyncThreadDescriptionAdminMsg",
      ).__setRef("MAWActThreadMapping"),
      m = new Map(),
      p = null;
    function _(e, t, n, a) {
      var l = a.then(
        function (a) {
          r("promiseDone")(
            e
              .runInTransaction(
                function (e) {
                  return C(e, g(a), n);
                },
                "readwrite",
                void 0,
                void 0,
                i.id + ":81",
              )
              .catch(function (e) {
                (t.forEach(function (e) {
                  return m.delete(e);
                }),
                  o("MWFBLogger")
                    .MWLogger()
                    .warn(
                      "MAWActThreadMapping",
                      "Post processing transaction not committed due to error " +
                        e.message,
                    ));
              }),
          );
          for (var l of a) l.status === "rejected" && m.delete(l.jid);
          return a;
        },
        function (e) {
          return (
            t.forEach(function (e) {
              return m.delete(e);
            }),
            t.map(function (t) {
              return {
                jid: t,
                reason: r("getErrorSafe")(e).message,
                status: "rejected",
              };
            })
          );
        },
      );
      t.forEach(function (e) {
        return m.set(
          e,
          l.then(function (t) {
            var n = t.find(function (t) {
              var n;
              return (
                ((n = t.value) == null ? void 0 : n.chatJid) === e ||
                t.jid === e
              );
            });
            if (n == null)
              throw o("MWFBLogger")
                .MWLogger()
                .tags(["MiActMapping", "Occam"])
                .mustfixThrow(
                  "Should have thread creation result for every thread",
                );
            return n;
          }),
        );
      });
    }
    function f(e) {
      var t = new Map(),
        n = [];
      return (
        e.threads.forEach(function (e) {
          var r = m.get(e.chatJid),
            a = e.instanceKey;
          r != null
            ? (a != null &&
                (o("MAWThreadMappingQPL").addPoint(
                  "reuse_existing_promise_for_act_mapping",
                  a,
                ),
                o("MAWThreadMappingQPL").endCancel(
                  "act_mapping_is_already_in_progress",
                  a,
                )),
              n.push(r))
            : t.set(e.chatJid, e);
        }),
        { cachedPromises: n, threadsToVerifyByJid: t }
      );
    }
    function g(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          if (e.status === "fulfilled") {
            var n;
            t.set(
              e.value.chatJid,
              babelHelpers.extends({}, e.value, {
                adminMsgParams: (n = e.value.adminMsgParams) != null ? n : null,
              }),
            );
          }
        }),
        t
      );
    }
    function h(t, a) {
      (r("FBLogger")("wmi")
        .tags(["ThreadMapping"])
        .INFO(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "MaybeCreateOrUpdateThread: ",
              "; ",
              "",
            ])),
          a.reason,
          a.threads
            .map(function (e) {
              return (
                "JID: " + e.chatJid + ", key: " + e.authoritativeThreadKey + ";"
              );
            })
            .join(" "),
        ),
        p == null && (p = v(t)));
      var i = f(a),
        l = i.cachedPromises,
        s = i.threadsToVerifyByJid;
      if (s.size === 0) return (c || (c = n("Promise"))).all(l);
      var u = o("MAWBridgeSendAndReceive").sendAndReceive(
        "backend",
        "bulkMaybeCreateOrUpdateThread",
        babelHelpers.extends({}, a, { threads: Array.from(s.values()) }),
      );
      return (
        _(t, Array.from(s.keys()), a, u),
        (c || (c = n("Promise"))).all([u].concat(l)).then(function (e) {
          return e.flat(1);
        })
      );
    }
    function y(e) {
      var t = e.authoritativeThreadKey,
        n = e.description,
        a = e.instanceKey,
        i = e.jid,
        l = e.optimisticThreadKey;
      (a != null &&
        o("MAWMiActOnActThreadReadyQueue").logOnFlushQueue(l, t, a, n),
        l != null &&
          r("promiseDone")(
            o("MAWMiActOnActThreadReadyQueue").processQueueOnActThreadReady(
              (u || (u = o("I64"))).of_string(l),
              i,
              n,
              "clientThreadKey",
            ),
          ),
        t != null &&
          r("promiseDone")(
            o("MAWMiActOnActThreadReadyQueue").processQueueOnActThreadReady(
              (u || (u = o("I64"))).of_string(t),
              i,
              n,
              "authoritativeThreadKey",
            ),
          ));
    }
    function C(e, t, n) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          if (a.threads.length !== 0) {
            var i = [],
              l = o("WAJids").extractUserId(
                o("MAWUserJidWrapper").getMyUserJid(),
              );
            (yield (c || (c = n("Promise"))).all(
              a.threads.map(function (m) {
                var p = m.authoritativeThreadKey,
                  _ = m.chatJid,
                  f = m.instanceKey,
                  g = t.get(_);
                if (g == null) return (c || (c = n("Promise"))).resolve();
                var h = [],
                  y = g.adminMsgParams,
                  C = g.clientThreadKey,
                  b = g.folder,
                  v = g.isCreated,
                  S = g.participants;
                (r("FBLogger")("wmi")
                  .tags(["ThreadMapping"])
                  .INFO(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "runPostProcessing: JID: ",
                        ", clientThreadKey ",
                        ", folder: ",
                        ", isCreated: ",
                        ", participants: ",
                        "",
                      ])),
                    g.chatJid,
                    C,
                    b,
                    v,
                    S.length,
                  ),
                  S.forEach(function (e) {
                    i.push(babelHelpers.extends({}, e, { chatJid: _ }));
                  }));
                var L = o("WAJids").switchOnMsgrChatJidType(_, {
                  group: function (t) {
                    return !0;
                  },
                  user: function (t) {
                    return !1;
                  },
                });
                h.push(
                  L
                    ? o("MAWBridgeGroupInviteLoadedHandler").callFromMainThread(
                        e,
                        _,
                        l,
                      )
                    : o(
                        "MAWBridgeOneToOneMessageRequestLoadedHandler",
                      ).callFromMainThread(e, _),
                );
                var E = o("WAJids").interpretAsUserJid(_);
                return (
                  E != null &&
                    h.push(
                      r("MAWRemoveCorruptedParticipantsFromOneToOneChat")(
                        e,
                        (u || (u = o("I64"))).of_string(p),
                        E,
                        l,
                      ),
                    ),
                  v ||
                    h.push(
                      R(
                        e,
                        p,
                        b != null ? b : o("MAWFolderTypes").FOLDER_ID.INBOX,
                      ),
                    ),
                  y != null &&
                    h.push(
                      d.load().then(function (t) {
                        return t(e, _, p, y);
                      }),
                    ),
                  (c || (c = n("Promise"))).all(h).then(function () {
                    var t;
                    return o(
                      "MAWHandleActThread",
                    ).handleActThreadWhenAuthoritativeInMI(e, {
                      authoritativeThreadKey: p,
                      description:
                        (t = a.reason) != null
                          ? t
                          : "bulkCreateThreadWithoutAfterTxn",
                      instanceKey: f,
                      jid: _,
                      optimisticThreadKey: C,
                    });
                  })
                );
              }),
            ),
              yield o("MAWBridgeParticipantsUpdatedHandler").callFromMainThread(
                e,
                i,
              ));
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return o("MAWMiActMappingTableAPI").subscribeToMappingDeletion(
        e,
        function (e, t) {
          var n = o("MAWJids").convertIntJidToOneToOneChatJid(e);
          m.has(n) && m.delete(n);
          var r = o("MAWJids").convertIntJidToGroupJid(e);
          m.has(r) && m.delete(r);
        },
      );
    }
    function S(e, t) {
      (m.clear(),
        o("WAArrayZip")
          .zip(e, t)
          .forEach(function (e) {
            var t = e[0],
              r = e[1];
            return m.set(
              t,
              new (c || (c = n("Promise")))(function (e, t) {
                return e(r);
              }),
            );
          }));
    }
    function R(e, t, n) {
      return o("ReQL")
        .firstAsync(
          o("ReQL")
            .fromTableAscending(e.threads)
            .getKeyRange((u || (u = o("I64"))).of_string(t)),
        )
        .then(function (t) {
          if (t != null) {
            var r = o("MAWFolderUtils").getMessagingFolderTag(n),
              a = r === "inbox" ? void 0 : t.cannotReplyReason;
            return e.threads.put(
              babelHelpers.extends({}, t, { cannotReplyReason: a }),
            );
          }
        })
        .then(r("emptyFunction"));
    }
    ((l.bulkVerifyThreadExistsInWorker = h),
      (l.executePromisesBlockedOnActThreadMapping = y),
      (l.setCache_TEST_ONLY = S));
  },
  98,
);
