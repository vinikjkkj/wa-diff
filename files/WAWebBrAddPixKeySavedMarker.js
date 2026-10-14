__d(
  "WAWebBrAddPixKeySavedMarker",
  [
    "WALogger",
    "WAWebBrAddPixKeyMessageOffer",
    "WAWebMsgCollection",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            var a,
              i = o("WAWebSchemaMessage").getMessageTable(),
              l = yield i.get(t.toString()),
              s = o("WAWebBrAddPixKeyMessageOffer").withAddPixKeyOfferSaved(
                l == null ? void 0 : l.interactivePayload,
                n,
              );
            if (l == null || s == null) return;
            (yield i.bulkCreateOrMerge([{ id: l.id, interactivePayload: s }]),
              (a = o("WAWebMsgCollection").MsgCollection.get(t)) == null ||
                a.set("interactivePayload", s));
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Add Pix key message: marking the saved offer failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("br-add-pix-key-saved-mark-failed");
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.markAddPixKeyMessageSaved = s;
  },
  98,
);
