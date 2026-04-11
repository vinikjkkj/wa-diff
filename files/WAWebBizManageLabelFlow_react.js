__d(
  "WAWebBizManageLabelFlow.react",
  [
    "WAWebBizManageLabelModal.react",
    "WAWebChatModel",
    "WAWebWamEnumLabelOperations",
    "WAWebWamEnumLabelTargets",
    "WAWebWamLabelEventReporter",
    "WAWebWamSmbListEventReporter",
    "react",
    "useLazyRef",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useRef;
    function m(e) {
      var t = e.entryPoint,
        n = e.modelsToUpdate,
        a = e.onClose,
        i = e.onLabelUpdateComplete,
        l = r("useLazyRef")(function () {
          return new Set();
        }),
        u = d();
      c(function () {
        var e = n.length;
        u.current =
          e === 1
            ? n[0] instanceof o("WAWebChatModel").Chat
              ? o("WAWebWamEnumLabelTargets").LABEL_TARGETS.LABEL_CHAT_DIALOG
              : o("WAWebWamEnumLabelTargets").LABEL_TARGETS.LABEL_MESSAGE_DIALOG
            : o("WAWebWamEnumLabelTargets").LABEL_TARGETS.LABEL_COMBINED_DIALOG;
        var r = u.current;
        (o("WAWebWamLabelEventReporter").logLabelOperationEvent(
          o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.VIEW,
          e,
          r,
        ),
          r != null &&
            o("WAWebWamSmbListEventReporter").logSmbListEvent({
              labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS
                .VIEW,
              labelTarget: r,
              updateEntryPoint: t != null ? t : void 0,
            }));
      }, []);
      var m = function (t) {
          return l.current.has(t)
            ? (l.current.delete(t),
              { shouldScrollIntoView: !0, shouldSelect: !0 })
            : { shouldScrollIntoView: !1, shouldSelect: !1 };
        },
        p = function (t) {
          l.current.add(t);
        },
        _ = function () {
          (i == null || i(), a == null || a());
        },
        f = function () {
          (u.current &&
            o("WAWebWamLabelEventReporter").logLabelOperationEvent(
              o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.CLICK_NEGATIVE,
              n.length,
              u.current,
            ),
            a == null || a());
        };
      return s.jsx(r("WAWebBizManageLabelModal.react"), {
        shouldScrollIntoViewAndSelect: m,
        onLabelUpdateComplete: _,
        onCancel: f,
        onNewLabelAdded: p,
        modelsToUpdate: n,
        entryPoint: t,
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
