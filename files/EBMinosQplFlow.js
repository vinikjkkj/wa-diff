__d(
  "EBMinosQplFlow",
  ["Random", "WMIQplFlow", "gkx", "justknobx", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.threadId;
      return s({
        annotations: { string: { threadId: t } },
        event: r("qpl")._(521485893, "2835"),
      });
    }
    function s(e) {
      var t = e.annotations,
        n = e.event,
        a = o("Random").uint32(),
        i = {
          annotations: babelHelpers.extends({}, t, {
            bool: babelHelpers.extends({}, t == null ? void 0 : t.bool, {
              minos_rollout_enabled: r("gkx")("20879"),
              occam_only_mailbox_users: r("gkx")("16674"),
              use_minos_thread_id: !0,
            }),
            int: babelHelpers.extends({}, t == null ? void 0 : t.int, {
              instanceKey: a,
              retryCount: 0,
            }),
          }),
          instanceKey: a,
          timeoutInMs: r("justknobx")._("1405"),
        },
        l = o("WMIQplFlow").startQplFlow(n, i);
      return _(l, a);
    }
    function u() {
      return s({
        annotations: { bool: { write_minos_public_keys_v2_enabled: !1 } },
        event: r("qpl")._(521473150, "2143"),
      });
    }
    function c(e) {
      var t = e.entryPoint;
      return s({
        annotations: { string: { entryPoint: t } },
        event: r("qpl")._(521482880, "16"),
      });
    }
    function d() {
      return s({ event: r("qpl")._(521479165, "3055") });
    }
    function m() {
      return s({ event: r("qpl")._(521479667, "3154") });
    }
    function p() {
      return s({ event: r("qpl")._(521478162, "2763") });
    }
    function _(e, t) {
      return {
        addAnnotations: function (n) {
          return e.addAnnotations(n);
        },
        addPoint: function (n, r) {
          (r != null && e.addAnnotations(r), e.addPoint(n));
        },
        endCancel: function (n, r) {
          return e.endCancel(n, r);
        },
        endFailWithError: function (n, r, o) {
          e.endFail(
            n,
            babelHelpers.extends({}, o, {
              string: babelHelpers.extends({}, o == null ? void 0 : o.string, {
                failReason: r,
              }),
            }),
          );
        },
        endSuccess: function (n) {
          return e.endSuccess(n);
        },
        getInstanceKey: function () {
          return t;
        },
      };
    }
    ((l.startMinosMessageUploadQpl = e),
      (l.startMinosWritePublicKeysQpl = u),
      (l.startMinosVerifySingleEpochQpl = c),
      (l.startMinosCreateEpochParamsQpl = d),
      (l.startMinosMailboxKeyFetchQpl = m),
      (l.startMandrakeMMKFetchQpl = p));
  },
  98,
);
