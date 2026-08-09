__d(
  "MAWChatOpenTabForUser",
  [
    "I64",
    "LSDatabaseSingleton",
    "LSIntEnum",
    "MAWCreateOneToOneThread",
    "MAWMiActGetThreadLifecycleState__DO_NOT_USE",
    "MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
    "MAWMiActThreadLifecycleState__DO_NOT_USE",
    "MAWUpdateSecureThreadAttributionForContact",
    "MWChatInteraction",
    "MWChatStateActions",
    "MWChatStateV2Types",
    "Promise",
    "asyncToGeneratorRuntime",
    "dispatchOpenChatTabTraceLogging",
    "isOfflineThreadingId",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    function d(e) {
      if (
        e.type ===
          o("MAWMiActThreadLifecycleState__DO_NOT_USE").MiActThreadStatesEnum
            .MI_AND_ACT_THREAD_COMPLETE ||
        e.type ===
          o("MAWMiActThreadLifecycleState__DO_NOT_USE").MiActThreadStatesEnum
            .AUTHORITATIVE_THREAD_ONLY
      ) {
        var t = e.serverThreadKey;
        return r("isOfflineThreadingId")(t)
          ? { existingThreadKey: t, reason: "otid", type: "continue" }
          : (s || (s = o("I64"))).le(t, (s || (s = o("I64"))).zero)
            ? { reason: "negative", type: "continue" }
            : { existingThreadKey: t, type: "skipped" };
      }
      return { existingThreadKey: e.serverThreadKey, type: "continue" };
    }
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          var l = yield (c || (c = o("LSDatabaseSingleton")))
            .LSDatabaseSingleton;
          a == null ||
            a.addMarkerPoint(
              "create_one_to_one_secure_thread_start",
              "AppTiming",
            );
          var u = yield o(
              "MAWMiActGetThreadLifecycleState__DO_NOT_USE",
            ).getThreadLifecycleStateByJid(
              l.tables,
              (s || (s = o("I64"))).of_string(t),
              r,
            ),
            m = u.type;
          m != null &&
            (a == null ||
              a.addAnnotation("mi_act_thread_state_type_before", m));
          var p = yield d(u);
          if (p.type === "skipped")
            return (
              a == null ||
                a.addMarkerPoint(
                  "create_one_to_one_secure_thread_end",
                  "AppTiming",
                ),
              {
                dispatchEntrypoint:
                  "MAWChatOpenTabForUser_skipped_create_thread",
                threadKey: p.existingThreadKey,
              }
            );
          p.reason != null &&
            (a == null ||
              a.addAnnotation(
                "invalid_server_thread_key_in_mawchatopentabforuser_check",
                p.reason,
              ));
          var _ = yield o("MAWCreateOneToOneThread").call(
              l,
              s.of_string(t),
              void 0,
              "MAWChatOpenTabForUser: " + r,
            ),
            f = yield o(
              "MAWMiActGetThreadLifecycleState__DO_NOT_USE",
            ).getThreadLifecycleStateByJid(l.tables, s.of_string(t), r),
            g = f.type;
          (g != null &&
            (a == null || a.addAnnotation("mi_act_thread_state_type_after", g)),
            a == null ||
              a.addMarkerPoint(
                "create_one_to_one_secure_thread_end",
                "AppTiming",
              ));
          var h = yield l.runInTransaction(
            function (t) {
              return o(
                "MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
              ).onMiThreadExistsForJid__DO_NOT_USE(
                t,
                _.jid,
                "MAWChatOpenTabForUser",
                function (t, r) {
                  return (e || (e = n("Promise"))).resolve(r);
                },
              );
            },
            "readonly",
            void 0,
            void 0,
            i.id + ":147",
          );
          return { clientThreadKey: h, threadKey: h };
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n, a, i) {
      var l = function (l) {
        var a = l.clientThreadKey,
          c = l.dispatchEntrypoint,
          d = l.threadKey;
        (o("MWChatInteraction").set(
          (s || (s = o("I64"))).to_string(d),
          i.getTraceId(),
        ),
          o(
            "MAWUpdateSecureThreadAttributionForContact",
          ).maybeUpdateSecureThreadAttributionForContact(s.of_string(e), d));
        var m = {
          clientThreadKey: a,
          threadKey: d,
          threadType: (u || (u = o("LSIntEnum"))).ofNumber(15),
        };
        (r("dispatchOpenChatTabTraceLogging")(i, m, c),
          n(
            o("MWChatStateActions").openTab(
              Date.now(),
              { shouldFocus: !t },
              {
                threadKeyDescriptor: m,
                type: o("MWChatStateV2Types").MWChatStateTabType.ChatTab,
              },
            ),
          ));
      };
      (i.addMarkerPoint(
        "MAWChatOpenTabForUser_getThreadKeyByContactId_start",
        "AppTiming",
      ),
        m(e, a, i).then(function (e) {
          var t = e.clientThreadKey,
            n = e.dispatchEntrypoint,
            r = e.threadKey;
          (i.addMarkerPoint(
            "MAWChatOpenTabForUser_getThreadKeyByContactId_end",
            "AppTiming",
          ),
            l({
              clientThreadKey: t,
              dispatchEntrypoint: n != null ? n : "MAWChatOpenTabForUser",
              threadKey: r,
            }));
        }));
    }
    ((l.getThreadKeyByContactId = m), (l.openChatTab = _));
  },
  98,
);
