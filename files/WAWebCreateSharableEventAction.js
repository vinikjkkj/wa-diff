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
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            var r = o("WAWebSharableEventDraft").toCreateEventInput(
                e,
                o("WATimeUtils").unixTime(),
              ),
              a = m(t);
            return yield o("WAWebSharableEventCreateJob").createSharableEvent(
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
                  ).getSharableEventMutationErrorMessage(
                    e,
                    s._(/*BTDS*/ "Couldn't create event"),
                  ),
                }),
              ),
              null
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
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
