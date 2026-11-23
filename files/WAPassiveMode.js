__d(
  "WAPassiveMode",
  [
    "WACastStanzas",
    "WADanglingQueue",
    "WAGlobals",
    "WAPubSub",
    "WASendPassiveModeProtocol",
    "WATagsLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = o("WATagsLogger").TAGS(["passive-mode"]),
      d = o("WAPubSub").simplePubSub();
    function m() {
      var t = !1;
      o("WAGlobals")
        .getWaOneQueue()
        .enqueue(
          async function () {
            var n = await o("WADanglingQueue").isDanglingQueueEmpty();
            (c.LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Dangling queue: ",
                  "",
                ])),
              !n,
            ),
              !n &&
                ((t = !0),
                await o("WACastStanzas").castDanglingStanzas(),
                d.publish({ type: "passive-mode-end" })));
          },
          { operationType: "dangling_receipts", flush: !1 },
        )
        .catch(function (e) {
          (d.publish({ type: "passive-mode-fail" }),
            c.ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Cannot process passive mode ",
                  "",
                ])),
              e,
            ));
        })
        .finally(function () {
          t &&
            (c.LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Dangling queue: switch back to active mode",
                ])),
            ),
            o("WASendPassiveModeProtocol").sendPassiveModeProtocol("active"));
        });
    }
    ((l.passiveModeNotifier = d), (l.maybeProcessPassiveMode = m));
  },
  98,
);
