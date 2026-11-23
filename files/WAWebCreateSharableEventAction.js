__d(
  "WAWebCreateSharableEventAction",
  [
    "fbt",
    "WATimeUtils",
    "WAWebSharableEventCreateJob",
    "WAWebSharableEventDraft",
    "WAWebSharableEventFailureLogger",
    "WAWebSharableEventMutationErrors",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    async function c(e, t, n) {
      try {
        var r = o("WAWebSharableEventDraft").toCreateEventInput(
            e,
            o("WATimeUtils").unixTime(),
          ),
          a = d(t);
        return await o("WAWebSharableEventCreateJob").createSharableEvent(
          a == null ? r : babelHelpers.extends({}, r, { creation_ctx: a }),
        );
      } catch (e) {
        return (
          o("WAWebSharableEventFailureLogger").logSharableEventFailure(
            "create",
            e,
          ),
          n == null || n(e),
          o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, {
              msg: o(
                "WAWebSharableEventMutationErrors",
              ).getSharableEventMutationErrorMessage(e, s._(/*BTDS*/ "")),
            }),
          ),
          null
        );
      }
    }
    function d(e) {
      var t = e == null ? void 0 : e.managingOrgId,
        n = e == null ? void 0 : e.chatWid;
      return t == null && n == null
        ? null
        : { org_id: t, chat_jid: n == null ? void 0 : n.toString() };
    }
    l.createSharableEventFromDraft = c;
  },
  226,
);
