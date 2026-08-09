__d(
  "MAWBridgeOccamadilloVerifyThreadExistsHandler",
  [
    "I64",
    "LSAuthorityLevel",
    "LSFactory",
    "LSThreadBitOffset",
    "LSThreadPointQueryAndRestoreMessagesWithJIDStoredProcedure",
    "MAWActThreadMapping",
    "MAWBridgeFireAndForget",
    "MAWBridgeOccamadilloCreateE2EEMetadataThreadHandlerV2",
    "MAWFolderTypes",
    "MAWJids",
    "MAWMiActGetThreadLifecycleState__DO_NOT_USE",
    "MAWMiActThreadLifecycleState__DO_NOT_USE",
    "MAWODSProxy",
    "MAWThreadDefaults",
    "MAWThreadLoadingState",
    "MAWThreadMappingQPL",
    "MWFBLogger",
    "Promise",
    "WAOdsEnums",
    "WATimeUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "cannotReplyReason",
        "createAsOutgoing",
        "createIfMissing",
        "folder",
        "lastReadTs",
      ],
      s,
      u,
      c,
      d = o("MWFBLogger").MWLogger().tags(["Occam", "VerifyThreadExists"]),
      m = [105, 17, 25, 24, 61, 267, 27];
    function p(e, t) {
      var n = m.filter(function (t) {
        return o("LSThreadBitOffset").has(t, e);
      });
      return o("LSThreadBitOffset").set(
        n,
        t
          ? o("MAWThreadDefaults").defaultGroupThreadCapabilities
          : o("MAWThreadDefaults").defaultThreadCapabilities,
        o("MAWThreadDefaults").defaultThreadCapabilities_2,
        o("MAWThreadDefaults").defaultThreadCapabilities_3,
        o("MAWThreadDefaults").defaultThreadCapabilities_4,
        o("MAWThreadDefaults").defaultThreadCapabilities_5,
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = yield e.threads.get(t);
          if (a == null)
            return (
              d.mustfix("Thread missing in verify thread exists"),
              (c || (c = n("Promise"))).resolve()
            );
          var i =
              r.clientThreadKey != null
                ? (u || (u = o("I64"))).of_string(r.clientThreadKey)
                : a.clientThreadKey,
            l = p(a, r.isGroup);
          return e.threads.upsert(
            [t],
            babelHelpers.extends({}, a, {
              capabilities: l[0],
              capabilities2: l[1],
              capabilities3: l[2],
              capabilities4: l[3],
              capabilities5: l[4],
              clientThreadKey: i,
            }),
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n, r) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            yield (c || (c = n("Promise"))).all([
              o("MAWThreadLoadingState").markActThreadLoadingAsCompleted(
                e,
                { intJid: r, threadKey: t },
                a.instanceKey,
              ),
              b(e, t, a),
            ]);
          },
        )),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          (u || (u = o("I64"))).equal(t, n) || (yield e.threads.delete(n));
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = r.clientThreadKey,
            i = r.instanceKey,
            l = r.isGroup;
          yield o(
            "MAWThreadMappingQPL",
          ).measurePerformanceForNullableInstanceKey(
            "handle_existing_thread",
            i,
            function () {
              return (c || (c = n("Promise"))).all([
                _(e, t, { clientThreadKey: a, isGroup: l }),
                a != null && y(e, t, (u || (u = o("I64"))).of_string(a)),
              ]);
            },
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.authoritativeThreadKey,
            a = t.clientThreadKey,
            i = t.instanceKey,
            l = t.intJid;
          i != null &&
            o("MAWThreadMappingQPL").allowToSkipUpgradingOptimisticThreadInMI(
              i,
            );
          var s = n != null ? n : a;
          s != null &&
            (yield o("MAWThreadLoadingState").markActThreadLoadingAsCompleted(
              e,
              { intJid: l, threadKey: (u || (u = o("I64"))).of_string(s) },
              i,
            ),
            yield o(
              "MAWThreadMappingQPL",
            ).measurePerformanceForNullableInstanceKey(
              "thread_point_query_sproc",
              i,
              function () {
                return r(
                  "LSThreadPointQueryAndRestoreMessagesWithJIDStoredProcedure",
                )(r("LSFactory")(e), { waJid: l });
              },
            ));
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = yield e.threads.get(t);
          (a != null &&
          (u || (u = o("I64"))).to_int32(a.authorityLevel) ===
            r("LSAuthorityLevel").AUTHORITATIVE
            ? yield b(e, t, n)
            : n.instanceKey != null &&
              o("MAWThreadMappingQPL").handleExistingThreadFail(
                n.instanceKey,
                a,
              ),
            a == null &&
              d.DEBUG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Authoritative thread not found for clientThreadKey: ",
                    "",
                  ])),
                n.clientThreadKey,
              ));
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.authoritativeThreadKey,
            r = t.clientThreadKey,
            a = t.description,
            i = t.instanceKey,
            l = t.isGroup,
            s = t.jid,
            u = o("MAWJids").convertChatJidToIntJid(s),
            c = yield o(
              "MAWMiActGetThreadLifecycleState__DO_NOT_USE",
            ).getThreadLifecycleStateByJidOrThreadKey(
              e,
              u,
              n,
              "MAWBridgeOccamadilloVerifyThreadExistsHandler",
            );
          switch (
            (i != null &&
              o("MAWThreadMappingQPL").addAnnotations(
                { string: { threadStateInOccamVTE: c.type.toString() } },
                i,
              ),
            c.type)
          ) {
            case o("MAWMiActThreadLifecycleState__DO_NOT_USE")
              .MiActThreadStatesEnum.JID_MISSING_MAPPING_ROW:
            case o("MAWMiActThreadLifecycleState__DO_NOT_USE")
              .MiActThreadStatesEnum.JID_MISSING_MI_THREAD:
            case o("MAWMiActThreadLifecycleState__DO_NOT_USE")
              .MiActThreadStatesEnum.OPTIMISTIC_THREAD_WITH_ACT:
            case o("MAWMiActThreadLifecycleState__DO_NOT_USE")
              .MiActThreadStatesEnum.CLIENT_PARTIAL_MI_THREAD:
            case o("MAWMiActThreadLifecycleState__DO_NOT_USE")
              .MiActThreadStatesEnum.CLIENT_PARTIAL_MI_THREAD_WITH_ACT:
            case o("MAWMiActThreadLifecycleState__DO_NOT_USE")
              .MiActThreadStatesEnum.SERVER_PARTIAL_MI_THREAD:
            case o("MAWMiActThreadLifecycleState__DO_NOT_USE")
              .MiActThreadStatesEnum.THREAD_KEY_ONLY:
              return S(e, {
                authoritativeThreadKey: n,
                clientThreadKey: r,
                instanceKey: i,
                intJid: u,
              }).then(function () {
                return { previousState: c.type };
              });
            case o("MAWMiActThreadLifecycleState__DO_NOT_USE")
              .MiActThreadStatesEnum.AUTHORITATIVE_THREAD_ONLY:
            case o("MAWMiActThreadLifecycleState__DO_NOT_USE")
              .MiActThreadStatesEnum.AUTHORITATIVE_THREAD_MISSING_MAPPING_ROW:
              return g(e, c.serverThreadKey, u, {
                clientThreadKey: r,
                instanceKey: i,
                isGroup: l,
              }).then(function () {
                return { previousState: c.type };
              });
            case o("MAWMiActThreadLifecycleState__DO_NOT_USE")
              .MiActThreadStatesEnum.MI_AND_ACT_THREAD_COMPLETE:
              return L(e, c.serverThreadKey, {
                clientThreadKey: r,
                instanceKey: i,
                isGroup: l,
              }).then(function () {
                return { previousState: c.type };
              });
            case o("MAWMiActThreadLifecycleState__DO_NOT_USE")
              .MiActThreadStatesEnum.OPTIMISTIC_THREAD_NO_ACT:
              throw d.mustfixThrow(
                "[Unimplemented VerifyThreadExists state: %s for JID: %s, from %s",
                c.type,
                s,
                a,
              );
            default:
              throw (
                c.type,
                d.mustfixThrow(
                  "Unhandled VerifyThreadExists state: %s for JID: %s, from %s",
                  c.type,
                  s,
                  a,
                )
              );
          }
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t, n, r) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            yield o(
              "MAWThreadMappingQPL",
            ).measurePerformanceForNullableInstanceKey(
              "insert_ephemeral_cache",
              a,
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var n = yield e.threads.get(t);
                if (n != null) {
                  var a,
                    i,
                    l = {
                      ephemeralExpirationInSec: (u || (u = o("I64"))).to_int32(
                        (a = n.disappearingSettingTtl) != null
                          ? a
                          : (u || (u = o("I64"))).zero,
                      ),
                      ephemeralLastUpdatedOrSetTimestamp: o(
                        "WATimeUtils",
                      ).castMilliSecondsToUnixTime(
                        u.to_float(
                          (i = n.disappearingSettingUpdatedTs) != null
                            ? i
                            : (u || (u = o("I64"))).zero,
                        ),
                      ),
                    };
                  o("MAWBridgeFireAndForget").fireAndForget(
                    "backend",
                    "setEphemeralSettingCache",
                    { jid: r, settings: l },
                  );
                }
              }),
            );
          },
        )),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = n.cannotReplyReason,
            a = n.createAsOutgoing,
            i = n.createIfMissing,
            l = n.folder,
            s = n.lastReadTs,
            c = babelHelpers.objectWithoutPropertiesLoose(n, e),
            d = c.authoritativeThreadKey,
            m = c.clientThreadKey,
            p = c.description,
            _ = c.instanceKey,
            f = c.jid;
          _ != null &&
            o("MAWThreadMappingQPL").addPoint(
              "occam_verify_thread_exists_start",
              _,
            );
          var g = yield k(t, c),
            h = g.previousState;
          if (
            i === !0 &&
            h ===
              o("MAWMiActThreadLifecycleState__DO_NOT_USE")
                .MiActThreadStatesEnum.JID_MISSING_MAPPING_ROW &&
            d == null &&
            m == null
          ) {
            (yield o(
              "MAWBridgeOccamadilloCreateE2EEMetadataThreadHandlerV2",
            ).call(t, {
              bumpTimestampMs: (u || (u = o("I64"))).of_float(s),
              creationSource:
                a === !0 ? "outgoing_message" : "incoming_message",
              folderId: o("MAWFolderTypes").INBOX,
              jid: f,
              optimisticThreadKey: null,
            }),
              o("MAWODSProxy").odsBumpEntityKey({
                entity: o("WAOdsEnums").Entity.MAW_BRIDGE_UI_EVENT,
                key: "verify_thread_exists.him_disabled.thread_mapping_missing.create_thread_handler_called",
              }));
            var y = yield o(
              "MAWThreadLoadingState",
            ).getThreadKeyIfMiThreadNotMissing(t, f);
            o("MAWODSProxy").odsBumpEntityKey({
              entity: o("WAOdsEnums").Entity.MAW_BRIDGE_UI_EVENT,
              key:
                "verify_thread_exists.him_disabled.thread_mapping_missing.recovery_" +
                (y == null ? "failed" : "succeeded"),
            });
          }
          o("MAWActThreadMapping").executePromisesBlockedOnActThreadMapping({
            authoritativeThreadKey: d,
            description: p,
            instanceKey: _,
            jid: f,
            optimisticThreadKey: m,
          });
          var C = d != null ? d : m,
            b = C != null ? (u || (u = o("I64"))).of_string(C) : null;
          if (
            (b != null &&
              h !==
                o("MAWMiActThreadLifecycleState__DO_NOT_USE")
                  .MiActThreadStatesEnum.MI_AND_ACT_THREAD_COMPLETE &&
              (yield T(t, b, f, _)),
            _ != null)
          ) {
            o("MAWThreadMappingQPL").addPoint(
              "occam_verify_thread_exists_end",
              _,
            );
            var v = o("MAWJids").convertChatJidToIntJid(c.jid);
            o("MAWThreadMappingQPL").pendingThreadCreationOnServer.has(
              (u || (u = o("I64"))).to_string(v),
            ) ||
              (yield o("MAWThreadMappingQPL").end({
                instanceKey: _,
                intJid: v,
                tables: t,
                threadKey: b,
              }));
          }
        })),
        $.apply(this, arguments)
      );
    }
    ((l.attachLocalMetadata = _),
      (l.ensureOptimisticThreadIsHidden = y),
      (l.genUpdatesForAuthoritativeThread = b),
      (l.insertEphemeralCache = T),
      (l.call = x));
  },
  98,
);
