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
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = o("WAWebSharableEventDraft").toCreateEventInput(
                e,
                o("WATimeUtils").unixTime(),
              ),
              r = m(t);
            return yield o("WAWebSharableEventCreateJob").createSharableEvent(
              r == null ? n : babelHelpers.extends({}, n, { creation_ctx: r }),
            );
          } catch (e) {
            return (
              o("WAWebSharableEventFailureLogger").logSharableEventFailure(
                "create",
                e,
              ),
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
