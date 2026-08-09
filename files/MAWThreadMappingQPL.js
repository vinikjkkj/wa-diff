__d(
  "MAWThreadMappingQPL",
  [
    "I64",
    "JSResourceForInteraction",
    "LSIntEnum",
    "MAWLoggerUtils",
    "MAWMiActMappingTableAPI",
    "MAWQplProxy",
    "MAWThreadLoadingState",
    "QPLUserFlow",
    "Random",
    "ReQL",
    "WAJids",
    "asyncToGeneratorRuntime",
    "promiseDone",
    "qpl",
    "sendToSentQPLLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["instanceKey", "s2sInstanceKey"],
      s = ["instanceKey", "s2sInstanceKey"],
      u,
      c,
      d = new Map(),
      m = new Set();
    function p(e) {
      m.add(e);
    }
    function _(e, t) {
      return m.has(t)
        ? o("MAWThreadLoadingState").isActReady(e) &&
            o("MAWThreadLoadingState").isMiOptimistic(e)
        : !1;
    }
    var f = r("JSResourceForInteraction")("MAWWaitForBackendSetup").__setRef(
        "MAWThreadMappingQPL",
      ),
      g = r("qpl")._(1056836502, "2778"),
      h = r("qpl")._(25313175, "1551"),
      y = null;
    function C(e) {
      return o("MAWLoggerUtils").getInstanceKeyFromId(e);
    }
    function b(e) {
      return o("MAWLoggerUtils").getInstanceKeyFromId(
        (u || (u = o("I64"))).to_string(e) + o("Random").random().toString(),
      );
    }
    function v(e, t, n) {
      var r,
        a = d.get((u || (u = o("I64"))).to_string(e.jid));
      if (a != null)
        return (
          L("continue_thread_mapping_after_tpq", a),
          n != null && k({ bool: babelHelpers.extends({}, n) }, a),
          d.delete((u || (u = o("I64"))).to_string(e.jid)),
          a
        );
      var i = (r = e.instanceKey) != null ? r : b(e.fbid),
        l = n != null ? n : {},
        s = l.hasMappingRowAlready,
        c = l.hasPlaceholderRowInserted,
        m = l.isExistingRowPlaceholder,
        p = l.isExpectedThreadMissingInLsdb,
        _ = e.jid;
      return (
        S({
          hasMappingRowAlready: s,
          hasPlaceholderRowInserted: c,
          instanceKey: i,
          isExistingRowPlaceholder: m,
          isExpectedThreadMissingInLsdb: p,
          jid: e.isGroupThread
            ? o("WAJids").toGroupJid((u || (u = o("I64"))).to_string(_))
            : o("WAJids").toMsgrUserJid((u || (u = o("I64"))).to_string(_)),
          threadKey: e.fbid,
          trigger: t,
        }),
        i
      );
    }
    function S(t) {
      var n = t.instanceKey,
        a = t.s2sInstanceKey,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e);
      ((y = a),
        o("sendToSentQPLLogger").markSendToSentPoint(
          a,
          "thread_mapping_start",
          void 0,
          { string: { thread_state: t.threadState } },
        ),
        r("QPLUserFlow").start(g, { annotations: A(i), instanceKey: n }),
        r("promiseDone")(f.load(), function (e) {
          var t = e.runAfterBackendSetup;
          t(function () {
            return L("maw_backend_available", n);
          }, "bulkMaybeCreateOrUpdateThread");
        }));
    }
    function R(e) {
      var t = e.instanceKey,
        n = e.s2sInstanceKey,
        r = babelHelpers.objectWithoutPropertiesLoose(e, s);
      o("MAWQplProxy").startQplUserFlow(g, A(r), { providedInstanceKey: t });
    }
    function L(e, t) {
      (r("QPLUserFlow").addPoint(g, e, { instanceKey: t }),
        y != null &&
          r("QPLUserFlow").addPoint(h, "thread_mapping_" + e, {
            instanceKey: y,
          }));
    }
    function E(e, t) {
      L("handle_existing_thread_fail", e);
      var n = t == null ? "no_thread" : "not_authoritative",
        r =
          t == null
            ? void 0
            : (c || (c = o("LSIntEnum"))).toNumber(t.authorityLevel);
      k(
        {
          int: { insufficientAuthorityLevel: r },
          string: { handleExistingThreadFailReason: n },
        },
        e,
      );
    }
    function k(e, t) {
      r("QPLUserFlow").addAnnotations(g, e, { instanceKey: t });
    }
    var I = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var o = e + "_start",
              a = e + "_end";
            r("QPLUserFlow").addPoint(g, o, { instanceKey: t });
            var i = yield n();
            return (r("QPLUserFlow").addPoint(g, a, { instanceKey: t }), i);
          },
        );
        return function (n, r, o) {
          return e.apply(this, arguments);
        };
      })(),
      T = function (t, n, r) {
        return n == null ? r() : I(t, n, r);
      };
    function D(e, t) {
      (k(
        {
          bool: { isResultVerified: !0 },
          string: {
            finalActState: t.actState.toString(),
            finalMiState: t.miState.toString(),
          },
        },
        e,
      ),
        o("sendToSentQPLLogger").markSendToSentPoint(y, "thread_mapping_end"),
        o("MAWThreadLoadingState").isReady(t) || _(t, e)
          ? r("QPLUserFlow").endSuccess(g, { instanceKey: e })
          : P("thread_state_not_ready", e));
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.instanceKey,
            r = e.intJid,
            a = e.tables,
            i = e.threadKey;
          if (i == null && r == null) {
            P("no_thread_key_nor_jid", n);
            return;
          }
          var l = yield F(a, { intJid: r, threadKey: i }),
            s = (t = l == null ? void 0 : l.serverThreadKey) != null ? t : i,
            u =
              s == null
                ? null
                : yield o("ReQL").firstAsync(
                    o("ReQL").fromTableAscending(a.threads).getKeyRange(s),
                  );
          D(
            n,
            yield o("MAWThreadLoadingState").getThreadLoadingStateForDbRows(
              u,
              l,
            ),
          );
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
      (o("sendToSentQPLLogger").markSendToSentPoint(
        y,
        "thread_mapping_fail",
        void 0,
        { string: { threadMappingFailReason: e } },
      ),
        r("QPLUserFlow").endFailure(g, e, { instanceKey: t }));
    }
    function N(e, t) {
      (o("sendToSentQPLLogger").markSendToSentPoint(
        y,
        "thread_mapping_fail",
        void 0,
        { string: { threadMappingFailReason: e.message } },
      ),
        r("QPLUserFlow").endFailure(g, "error_thrown", {
          annotations: { string: { errorMessage: e.message } },
          instanceKey: t,
        }));
    }
    function M(e, t, n) {
      o("MAWQplProxy").sendQPLFailThroughBridge(g, e, n, t);
    }
    function w(e, t) {
      (L(e, t), r("QPLUserFlow").endCancel(g, { instanceKey: t }));
    }
    function A(e) {
      var t = e.hasMappingRowAlready,
        n = e.hasPlaceholderRowInserted,
        r = e.isExistingRowPlaceholder,
        a = e.isExpectedThreadMissingInLsdb,
        i = e.jid,
        l = e.threadKey,
        s = e.threadState,
        c = e.trigger;
      return {
        bool: {
          hasMappingRowAlready: t,
          hasPlaceholderRowInserted: n,
          isExistingRowPlaceholder: r,
          isExpectedThreadMissingInLsdb: a,
        },
        string: {
          initJid: i,
          initThreadKey: l == null ? null : (u || (u = o("I64"))).to_string(l),
          initThreadState: s == null ? void 0 : s.toString(),
          trigger: c,
        },
      };
    }
    function F(e, t) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.intJid,
            r = t.threadKey,
            a = yield o("MAWMiActMappingTableAPI").getMappingRowForThreadKey(
              e,
              r,
            );
          return a != null
            ? a
            : o("MAWMiActMappingTableAPI").getMappingRowForIntJid(e, n);
        })),
        O.apply(this, arguments)
      );
    }
    ((l.pendingThreadCreationOnServer = d),
      (l.allowToSkipUpgradingOptimisticThreadInMI = p),
      (l.getInstanceKeyForJidInWorker = C),
      (l.getInstanceKeyForThreadKey = b),
      (l.startOrContinueForMiActMappingParams = v),
      (l.start = S),
      (l.startInWorker = R),
      (l.addPoint = L),
      (l.handleExistingThreadFail = E),
      (l.addAnnotations = k),
      (l.measurePerformance = I),
      (l.measurePerformanceForNullableInstanceKey = T),
      (l.endForThreadState = D),
      (l.end = x),
      (l.endFailure = P),
      (l.endFailureError = N),
      (l.endFailureInWorker = M),
      (l.endCancel = w));
  },
  98,
);
