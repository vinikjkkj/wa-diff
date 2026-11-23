__d(
  "WebMpsInsertionFlow",
  [
    "MpsErrors",
    "MpsTypes",
    "WebMpsReverbWrites",
    "WebReverbDB",
    "WmiErrorReport",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "debugFlags",
        "expiryTimestampMs",
        "isLocalOnlyMessage",
        "isTransportErrorPlaceholder",
        "pk",
      ],
      s = ["message", "supplemental", "deleted", "tags", "dbMetadata"];
    async function u(e, t, n) {
      var r = [];
      for (var o of e) {
        var a = await p(
            o,
            function (e) {
              return e(t);
            },
            { messageToQpl: n },
          ),
          i = a.persistedPayload;
        r.push(i);
      }
      return r;
    }
    async function c(e, t) {
      try {
        var n = await o("WebReverbDB")
          .getWebReverbDB()
          .runInTransaction(
            s,
            "readwrite",
            function (n) {
              return u(e, n, t.messageToQpl);
            },
            "mps-insertion-flow-shared",
          );
        return { errors: new Map(), msgs: n };
      } catch (e) {
        o("WmiErrorReport").reportWmiError(
          o("MpsErrors").MpsErrors.classify(
            e,
            "persist_shared_transaction",
            "write_failed",
          ),
        );
      }
      return d(e, t);
    }
    async function d(e, t) {
      var n = new Map(),
        r = [],
        a = async function (a) {
          var e = await o("WebReverbDB")
            .getWebReverbDB()
            .runInTransaction(
              s,
              "readwrite",
              async function (e) {
                var n = await u([a], e, t.messageToQpl),
                  r = n[0];
                return r;
              },
              "mps-insertion-flow-separate",
            )
            .catch(function (e) {
              return (
                n.set(
                  a.message.messageId,
                  o("MpsErrors").MpsErrors.classify(
                    e,
                    "persist_message",
                    "write_failed",
                  ),
                ),
                a
              );
            });
          r.push(e);
        };
      for (var i of e) await a(i);
      return { errors: n, msgs: r };
    }
    async function m(e, t) {
      var n = [t.message.threadId, t.message.messageId],
        r = await e.stores.message.getByIndex("[threadId+messageId]", n);
      return r == null ? null : babelHelpers.extends({}, t, { message: v(r) });
    }
    function p(e, t, n) {
      var r = function () {
        return { persistedPayload: e };
      };
      switch (e.directive.actionType) {
        case o("MpsTypes").ActionType.UpsertTopLevel:
          return f(e, t, n);
        case o("MpsTypes").ActionType.UpsertSupplemental:
          return g(e, t, n);
        case o("MpsTypes").ActionType.DeleteTopLevel:
          return h(e, t).then(r);
        case o("MpsTypes").ActionType.DeleteTopLevelWithPlaceholder:
          return y(e, t, n).then(r);
        case o("MpsTypes").ActionType.DeleteSupplemental:
          return C(e, t).then(r);
        case o("MpsTypes").ActionType.DeleteThread:
          return b(e, t).then(r);
        case o("MpsTypes").ActionType.Noop:
          return Promise.resolve(r());
        case o("MpsTypes").ActionType.Unknown:
        case o("MpsTypes").ActionType.Preprocess:
          return Promise.reject(
            o("MpsErrors").MpsErrors.error(
              "invariant",
              "this should not happen",
            ),
          );
      }
    }
    function _(e, t) {
      var n;
      return babelHelpers.extends({}, e, {
        directiveTags: [].concat((n = e.directiveTags) != null ? n : [], t),
      });
    }
    async function f(e, t, n) {
      var r = e.directive,
        a = e.message,
        i = await o("WebMpsReverbWrites").upsertTopLevelToReverb(a, r, t, n),
        l = i.dedupedExisting,
        s = i.directiveTagsToAdd,
        u = i.needsRefetch;
      if (u) {
        var c = null;
        return (
          await t(async function (t) {
            c = await m(t, e);
          }),
          c != null
            ? {
                persistedPayload: babelHelpers.extends({}, c, {
                  dedupedExisting: l,
                  directive: _(c.directive, s),
                }),
              }
            : {
                persistedPayload: babelHelpers.extends({}, e, {
                  dedupedExisting: l,
                  directive: babelHelpers.extends({}, r, {
                    actionType: o("MpsTypes").ActionType.Noop,
                  }),
                }),
              }
        );
      }
      return {
        persistedPayload: babelHelpers.extends({}, e, {
          dedupedExisting: l,
          directive: _(r, s),
        }),
      };
    }
    async function g(e, t, n) {
      var a = e.directive,
        i = e.message,
        l = r("nullthrows")(a.supplementalKey),
        s = await o("WebMpsReverbWrites").upsertSupplementalToReverb(
          i.messageId,
          i.payload,
          l,
          a.targetMessageId,
          i.threadId,
          i.timestampMs,
          t,
          n,
        ),
        u = s.dedupedExisting,
        c = s.rejected;
      return {
        persistedPayload: babelHelpers.extends({}, e, {
          dedupedExisting: u,
          directive: c
            ? babelHelpers.extends({}, a, {
                actionType: o("MpsTypes").ActionType.Noop,
                isLocalOnly: !0,
              })
            : a,
        }),
      };
    }
    function h(e, t) {
      var n = e.message,
        r = e.directive.targetMessageId,
        o = [n.threadId, r];
      return t(async function (e) {
        var t,
          a = await e.stores.message.getByIndex("[threadId+messageId]", o),
          i = await e.stores.deleted.getByIndex(
            "[threadId+deletedMessageId]",
            o,
          );
        if (
          !(
            ((t = i == null ? void 0 : i.deletionTimestampMs) != null
              ? t
              : 0) >= n.timestampMs
          )
        ) {
          var l = {
            deletedMessageId: r,
            deletionMessageId: n.messageId,
            deletionMessagePayload: n.payload,
            deletionTimestampMs: n.timestampMs,
            isLocalOnlyMessage: !1,
            payload: a == null ? void 0 : a.payload,
            threadId: n.threadId,
            timestampMs: a == null ? void 0 : a.timestampMs,
          };
          (await e.stores.deleted.bulkUpsert("[threadId+deletedMessageId]", [
            { item: l, selector: o },
          ]),
            a && (await e.stores.message.bulkDelete([a.pk])));
        }
      });
    }
    function y(e, t, n) {
      var r = e.directive,
        a = e.message;
      return o("WebMpsReverbWrites")
        .upsertTopLevelToReverb(a, r, t, n)
        .then(function () {});
    }
    function C(e, t) {
      var n = e.message,
        o = r("nullthrows")(e.directive.supplementalKey),
        a = e.directive.targetMessageId,
        i = [n.threadId, a, o];
      return t(async function (t) {
        var r = await t.stores.supplemental.getByIndex(
          "[threadId+topLevelMessageId+supplementalKey]",
          i,
        );
        if (r != null) {
          var l = await t.stores.deleted.getByIndex(
            "[threadId+topLevelMessageId+supplementalKey]",
            i,
            {
              filter: function (t) {
                return t.deletionTimestampMs >= n.timestampMs;
              },
            },
          );
          if (!l) {
            var s = {
              deletedMessageId: r.messageId,
              deletionMessageId: n.messageId,
              deletionMessagePayload: n.payload,
              deletionTimestampMs: n.timestampMs,
              isLocalOnlyMessage: e.directive.isLocalOnly,
              payload: r.payload,
              supplementalKey: o,
              threadId: n.threadId,
              timestampMs: r.timestampMs,
              topLevelMessageId: a,
            };
            (await t.stores.deleted.bulkUpsert(
              "[threadId+topLevelMessageId+supplementalKey]",
              [{ item: s, selector: i }],
            ),
              await t.stores.supplemental.bulkDelete([r.pk]));
          }
        }
      });
    }
    function b(e, t) {
      var n = e.message;
      return t(async function (e) {
        var t = await e.stores.supplemental.readKeysByIndexRange(
          "[threadId+topLevelMessageId+supplementalKey]",
          { only: [n.threadId] },
        );
        await e.stores.supplemental.bulkDelete(t);
        var r = await e.stores.message.readIndexRange("[threadId+messageId]", {
          only: [n.threadId],
        });
        await e.stores.message.bulkDelete(
          r.map(function (e) {
            return e.pk;
          }),
        );
        var o = await e.stores.tags.readKeysByIndexRange(
          "[threadId+messageId+tag]",
          { only: [n.threadId] },
        );
        await e.stores.tags.bulkDelete(o);
        var a = await e.stores.deleted.readKeysByIndexRange(
          "[threadId+deletedMessageId]",
          { only: [n.threadId] },
        );
        (await e.stores.deleted.bulkDelete(a),
          await e.stores.deleted.bulkAdd(
            r.map(function (e) {
              return {
                deletedMessageId: e.messageId,
                deletionMessageId: n.messageId,
                deletionMessagePayload: n.payload,
                deletionTimestampMs: n.timestampMs,
                isLocalOnlyMessage: e.isLocalOnlyMessage,
                payload: e.payload,
                threadId: e.threadId,
                timestampMs: e.timestampMs,
              };
            }),
          ));
      });
    }
    function v(t) {
      var n = t.debugFlags,
        r = t.expiryTimestampMs,
        o = t.isLocalOnlyMessage,
        a = t.isTransportErrorPlaceholder,
        i = t.pk,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return l;
    }
    ((l.PERSIST_STORES = s),
      (l.persistInTransaction = u),
      (l.persistNewMessages = c));
  },
  98,
);
