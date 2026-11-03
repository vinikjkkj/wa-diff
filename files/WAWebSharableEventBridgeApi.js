__d(
  "WAWebSharableEventBridgeApi",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")("WAWebApplySharableEventUpdate")
            .__setRef("WAWebSharableEventBridgeApi")
            .load();
        }),
        "WAWebApplySharableEventUpdate",
      ),
      c = {
        applySharableEventUpdate: function (n) {
          var t, a, i, l, c, d, m, p;
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[sharable_event][bridge] update events=",
                " deleted=",
                " inviteeLists=",
                " invitees=",
                "",
              ])),
            (t = (a = n.events) == null ? void 0 : a.length) != null ? t : 0,
            (i = (l = n.deletedEventIds) == null ? void 0 : l.length) != null
              ? i
              : 0,
            (c = (d = n.inviteeLists) == null ? void 0 : d.length) != null
              ? c
              : 0,
            (m = (p = n.invitees) == null ? void 0 : p.length) != null ? m : 0,
          ),
            u()
              .then(function (e) {
                return e.applySharableEventUpdate(n);
              })
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[sharable_event][bridge] applying an update to the UI failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("sharable-event-apply-update-failed");
              }));
        },
      };
    l.SharableEventBridgeApi = c;
  },
  98,
);
